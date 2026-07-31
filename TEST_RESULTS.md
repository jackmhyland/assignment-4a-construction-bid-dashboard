# Test Results — Construction Bid Opportunity Dashboard

Tested against the Stage 2 Claude Code GRASP brief (`stage2_code_grasp_brief.docx`) "Proof" section.

**Method:** Because a connected, interactive browser session was not available in this environment (see Limitations), tests were run two ways: (1) a full logic-level test suite that loads the actual `script.js` file — the same file shipped in the dashboard — into a sandboxed JavaScript context and exercises its real data, filtering, sorting, search, and helper functions programmatically; and (2) static cross-checks confirming every HTML element ID and CSS class referenced by `script.js` actually exists in `index.html` / `styles.css`. All 44 automated checks plus the structural checks passed. Result data for every test below was produced by running the dashboard's own code, not reimplemented separately.

## 1. Data completeness test

| Check | Result |
|---|---|
| All 10 Project IDs P-101 through P-110 appear | **PASS** |
| Each Project ID appears exactly once | **PASS** |

## 2. Value accuracy test

Compared against the approved `consolidated_bid_opportunities.xlsx` for three projects (contract value, estimated profit, profit margin, payment risk, relationship strength, priority):

| Project | Contract Value | Est. Profit | Margin | Payment Risk | Relationship | Priority | Result |
|---|---|---|---|---|---|---|---|
| P-103 | $2,750,000 | $310,000 | 11.27% | Low | Strong | High Priority | **PASS** |
| P-106 | $1,900,000 | $250,000 | 13.16% | Low | Moderate | High Priority | **PASS** |
| P-108 | $12,400,000 | $770,000 | 6.21% | High | New | Low Priority | **PASS** |

All values matched the approved workbook exactly.

## 3. Sorting test

| Sort | Direction | Expected result | Result |
|---|---|---|---|
| Estimated Profit | Highest first | Top: P-107 ($860,000); Bottom: P-106 ($250,000) | **PASS** |
| Profit Margin | Lowest first | Top: P-108 (6.21%) | **PASS** |
| Contract Value | Lowest first | Full order: P-106 → P-103 → P-110 → P-101 → P-105 → P-104 → P-109 → P-102 → P-107 → P-108 | **PASS** |
| Distance | Lowest first | Top: P-106 (14 mi) | **PASS** |
| Bid Due Date | Earliest first | Top: P-106 (Aug 12, 2026) | **PASS** |
| Bid Due Date | Latest first | Full order: P-108 → P-107 → P-104 → P-109 → P-102 → P-105 → P-101 → P-110 → P-103 → P-106 | **PASS** |
| Priority | Highest first | First 5 rows all High Priority, next 3 Medium, last 2 Low | **PASS** |
| Priority | Lowest first | Full order: P-102, P-108 (Low) → P-104, P-107, P-110 (Medium) → P-101, P-103, P-105, P-106, P-109 (High) | **PASS** |

## 4. Filtering test

| Filter | Expected | Result |
|---|---|---|
| Priority = High Priority | 5 results: P-101, P-103, P-105, P-106, P-109 | **PASS** |
| Project Type = Industrial | 2 results: P-102, P-107 | **PASS** |
| Competition Level = High | 3 results: P-102, P-104, P-108 | **PASS** |
| Payment Risk = High | 1 result: P-108 | **PASS** |
| Company Experience Fit = Unclear/Weak | 1 result: P-102 | **PASS** |

## 5. Search test

| Search term | Field being matched | Expected | Result |
|---|---|---|---|
| `p-108` | Project ID (case-insensitive) | P-108 | **PASS** |
| `fitness center` | Project name | P-110 (Cottage Grove Fitness Center) | **PASS** |
| `city of lakeville` | Client name | P-109 | **PASS** |
| `eagan` | City (Location) | P-106 (Eagan, MN) | **PASS** |
| `mn` | City substring, multiple matches | 7 results, all Minnesota locations (P-102, P-103, P-106, P-107, P-108, P-109, P-110) | **PASS** |

## 6. Reset test

| Check | Result |
|---|---|
| After applying search + multiple filters + a non-default sort, clicking Reset Filters clears all controls and returns all 10 projects in the default Priority sort | **PASS** |

## 7. Usability test

The layout was reviewed for a first-time user: page title and one-sentence explanation at the top, a persistent internal-use disclaimer banner, four labeled summary cards, clearly labeled search and filter controls with an "All ___" default option in every dropdown, a labeled sort control with a plain-language direction option ("Highest / Latest first" vs. "Lowest / Earliest first" rather than raw "asc/desc"), a visible results count, and a "View" button on every row leading to a labeled detail panel. Priority and risk values are shown as colored badges in addition to text, so they are not color-only. **Assessment: PASS**, with the caveat noted under Limitations that this was a code/design review rather than an observed live user session.

## 8. Edge-case test

| Check | Result |
|---|---|
| P-108's Client Reliability displays literally as `Unknown` (not blank, not omitted, not replaced with a guess) | **PASS** |
| P-102's Company Experience Fit displays its full approved text beginning `Unclear/Weak - ...` and is categorized as `Unclear/Weak` in the filter/badge (not dropped or forced into Strong/Moderate/Limited) | **PASS** |
| Rows with any missing/unclear/conflicting note other than the exact string "None identified." are flagged with a 📝 icon in the Flags column; P-103, P-105, and P-109 (whose source value is exactly "None identified.") correctly show no flag | **PASS** |
| High payment risk (P-108) and Unknown reliability both render with a distinct badge color/label rather than default styling | **PASS** |

## 9. Browser test

| Check | Result |
|---|---|
| `script.js` loads with no JavaScript syntax errors (`node --check`) | **PASS** |
| Every HTML element ID referenced by `script.js` (`getElementById`) exists in `index.html` | **PASS** — 19/19 IDs found |
| Every CSS class referenced by `script.js` (badge/risk/fit styling) exists in `styles.css` | **PASS** — 11/11 classes found |
| `script.js` and `styles.css` are correctly linked from `index.html` | **PASS** |
| Close and reopen the dashboard in an actual browser window | **NOT PERFORMED — see Limitations** |

## 10. Human review correction — Client Reliability badge color (post-review fix)

**Issue identified during human review:** After the initial hand-off, a live review of the dashboard found that the Client Reliability badge in the project detail view displayed the wrong color whenever the value was "High." The issue was reported on P-101, P-103, P-105, P-106, and P-109.

**Root cause:** The detail-view code was reusing the same `riskBadgeClass()` function for both Payment Risk and Client Reliability. That function's color scheme is correct for Payment Risk (High risk = red/bad, Low risk = green/good), but Client Reliability has the opposite polarity (High reliability = good, Low reliability = bad). Reusing it meant every "High" Client Reliability value was colored as if it were a high-risk warning (red/amber) instead of green.

**General rule added (not a per-project patch):** A new, dedicated `reliabilityBadgeClass()` function and matching CSS classes (`reliability-high`, `reliability-medium`, `reliability-low`, `reliability-unknown`) were added specifically for Client Reliability, keyed purely on the field's value:

- Client Reliability = "High" → green
- Client Reliability = "Medium" → yellow/amber
- Client Reliability = "Low" → red
- Client Reliability = "Unknown" (or any other/future value) → gray/purple

`riskBadgeClass()` itself was left unchanged and is now used only for Payment Risk, where its red/amber/green polarity is correct. The detail view's Client Reliability badge was switched to call `reliabilityBadgeClass()` instead. Because the rule is driven by the value of `clientReliability`, it automatically applies to every current project and to any project added later — nothing is hardcoded to specific Project IDs.

**Projects affected:**

| Project | Client Reliability | Old (incorrect) color | New (correct) color |
|---|---|---|---|
| P-101 | High | Red/amber (risk scheme) | **Green** |
| P-103 | High | Red/amber (risk scheme) | **Green** |
| P-105 | High | Red/amber (risk scheme) | **Green** |
| P-106 | High | Red/amber (risk scheme) | **Green** |
| P-107 | High | Red/amber (risk scheme) | **Green** |
| P-109 | High | Red/amber (risk scheme) | **Green** |

Note: P-107 has Client Reliability = "High" as well and was affected by the same bug, even though it wasn't in the list of five reported. Because the fix is value-based rather than ID-based, P-107 is corrected automatically along with the other five.

**Tests confirming the fix (all run directly against the updated `script.js` in a sandboxed JS context, not reimplemented separately):**

| Test | Result |
|---|---|
| `reliabilityBadgeClass("High")` returns `reliability-high` (green) | **PASS** |
| Every project with `clientReliability === "High"` (P-101, P-103, P-105, P-106, P-107, P-109 — 6 projects, confirming P-107 is included) maps to `reliability-high` | **PASS** |
| `reliabilityBadgeClass("Medium")` returns `reliability-medium` (amber); all 3 Medium-reliability projects (P-102, P-104, P-110) map correctly | **PASS** |
| `reliabilityBadgeClass("Low")` returns `reliability-low` (red); confirmed no projects currently hold this value, so the class exists and is ready for any future Low-reliability record | **PASS** |
| `reliabilityBadgeClass("Unknown")` returns `reliability-unknown` (gray/purple); P-108 (the only current Unknown) maps correctly | **PASS** |
| An unrecognized/future value passed to `reliabilityBadgeClass()` falls back to `reliability-unknown` rather than crashing or defaulting to a warning color | **PASS** |
| `riskBadgeClass()` (Payment Risk) is unchanged: "High" still maps to `risk-high` (red) and "Low" still maps to `risk-low` (green) | **PASS** |
| All 4 new `reliability-*` CSS classes exist in `styles.css` | **PASS** |
| Full regression pass: all 44 previously-passing logic tests (data completeness, value accuracy, sorting, filtering, search, reset, prior edge cases) still pass with no changes to their expected results | **PASS** — 0 regressions |

**Badge-color polarity audit of other fields (requested during this review):** `priorityBadgeClass()` (High Priority = green, Medium = amber, Low = red) and `fitBadgeClass()` (Strong = green, Moderate = amber, Limited = red, Unclear/Weak = purple) were reviewed line by line. Both use colors consistent with their own field's meaning — a high-risk-sounding color is never applied to a positive value in either function — and neither shares logic with `riskBadgeClass()`, so neither is susceptible to the same class of bug. No other issues were found. The Priority color scheme (High=green/Medium=amber/Low=red) also matches the color coding already used in the approved `consolidated_bid_opportunities.xlsx`, so it was left as-is.

**No other changes were made.** Source values, priority rankings, calculations, filters, sorting, and search behavior were not touched; the 44 pre-existing logic tests confirm this.

**Re-verification (follow-up request):** The user asked for confirmation that `script.js` in the connected project folder — not a scratch copy — reflects this fix. Re-checked directly against the live file at `Assignment-4A-Construction-Bid-Dashboard/script.js`:

| Check | Result |
|---|---|
| `script.js` passes `node --check` (no syntax errors) | **PASS** |
| P-101 — Client Reliability "High" → `reliability-high` | **PASS (green)** |
| P-103 — Client Reliability "High" → `reliability-high` | **PASS (green)** |
| P-105 — Client Reliability "High" → `reliability-high` | **PASS (green)** |
| P-106 — Client Reliability "High" → `reliability-high` | **PASS (green)** |
| P-109 — Client Reliability "High" → `reliability-high` | **PASS (green)** |
| P-107 (same "High" value, same general rule, not separately requested) → `reliability-high` | **PASS (green)** |
| `reliabilityBadgeClass("Medium")` → `reliability-medium` (amber) | **PASS** |
| `reliabilityBadgeClass("Low")` → `reliability-low` (red) | **PASS** |
| `reliabilityBadgeClass("Unknown")` → `reliability-unknown` (gray/purple) | **PASS** |

No edits were needed this round — the fix and its tests already existed in the connected folder's `script.js` and `styles.css` from the prior correction. This entry documents that re-verification for the record.

## Corrections made during testing

- **vm-context data extraction bug in the test harness itself** (not in the dashboard): the first version of the Node test script couldn't see the `PROJECTS` array because top-level `const` declarations don't attach to the sandbox object the way `var` does. This only affected the test script, not `script.js`. Fixed by running a second statement in the same VM context to pull the bindings out. No changes were made to the dashboard's HTML, CSS, or JavaScript as a result of testing — all 44 logic checks and both structural checks passed on the first fully-corrected run.
- **Client Reliability badge color bug**, found during the user's live review after hand-off and fixed as documented in section 10 above.

## Remaining limitations

1. **Live browser test not completed.** The Claude in Chrome browser extension was not connected in this session, and the sandboxed environment has no headless browser available (no package-manager permissions to install one, and the npm registry was blocked for new package installs). As a substitute, the dashboard's actual `script.js` was executed and tested programmatically, and every ID/class it references was confirmed to exist in `index.html`/`styles.css`. This gives strong confidence the app is wired correctly, but it does not confirm pixel-level rendering, click behavior, or the modal opening/closing visually in a real browser.
   - **Recommended next step:** open `index.html` yourself (double-click it, or right-click → Open with → your browser) and do a quick 1–2 minute check: confirm the table populates, click a filter, click "View" on a row, click Reset. If anything looks off, let me know and I'll fix it before this is treated as final.
2. **Usability test was a design review, not an observed session.** No independent first-time user was observed operating the dashboard; the assessment is based on label clarity, layout conventions, and the structural checks above.
3. **No automated accessibility (screen reader) audit was run.** Basic accessibility attributes are included (`aria-label`, `aria-live`, `role="dialog"`, `aria-modal`), but full assistive-technology compatibility has not been verified.

## Sign-off

This dashboard is ready for your review, not final. All 10 approved projects, all 26 source fields, and the approved priority rankings are displayed unchanged from `consolidated_bid_opportunities.xlsx`. No bids have been submitted, no clients contacted, and no staffing or financial commitments made. Please complete the quick manual open/close check above before treating this as the final assignment submission or pushing it anywhere.
