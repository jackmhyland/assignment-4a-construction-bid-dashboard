# Construction Bid Opportunity Dashboard

A local, browser-based dashboard for reviewing the 10 approved construction bid opportunities from the Stage 1 consolidated dataset (`consolidated_bid_opportunities.xlsx`).

## What this is

This tool supports internal bid review. It does **not** submit bids, contact clients, or make final pursue-or-decline, staffing, or financial decisions. Those calls remain with a company manager.

## How to open it

No installation, server, or account is required.

1. Make sure `index.html`, `styles.css`, and `script.js` are in the same folder.
2. Double-click `index.html` (or right-click it and choose **Open with** your web browser — Chrome, Edge, or Firefox all work).
3. The dashboard loads immediately with all 10 approved projects.

To close it, just close the browser tab. Reopening `index.html` later reloads the same data — nothing is saved or changed between sessions.

## How to use it

**Summary cards** at the top show total opportunities, how many are rated High Priority, total potential contract value, and total estimated profit across all currently visible projects.

**Search** filters by typing any part of a Project ID (e.g. `P-108`), project name, client name, or city.

**Filters** narrow the table by Priority, Project Type, Competition Level, Payment Risk, or Company Experience Fit. Filters can be combined with each other and with search.

**Sort by / Direction** controls let you order the table by Priority, Estimated Profit, Profit Margin, Contract Value, Distance, or Bid Due Date, in either direction.

**Reset Filters** clears search, all filters, and sorting back to the default view (all 10 projects, sorted by Priority).

**Flags column** shows quick icons for projects with a high payment risk, an unknown client-reliability rating, an unclear company-experience fit, a noted schedule/capacity concern, or other missing/unclear/conflicting information. Hover over an icon to see what it means.

**View button** opens a full detail panel for that project, including every field from the approved workbook: the complete priority explanation, special concerns, the full company-experience-fit narrative, schedule/capacity notes, and any missing or unclear information. Close it with the X, the Escape key, or by clicking outside the panel.

## About the data

Every value in this dashboard is transcribed directly from `consolidated_bid_opportunities.xlsx` (the Stage 1 approved workbook) — all 10 projects and all 26 columns. Nothing has been invented, removed, or altered, and approved priority rankings are unchanged. Where the source data itself flags something as unknown or unclear (for example, P-108's client reliability, or P-102's company experience fit), the dashboard displays that exact wording rather than replacing it with a blank or a guess.

If you believe a displayed value doesn't match the approved workbook, treat the workbook as the source of truth and flag the discrepancy for correction — do not edit `script.js` by hand without also updating the source workbook.

## Files

| File | Purpose |
|---|---|
| `index.html` | Page structure: header, disclaimer, summary cards, controls, table, detail modal |
| `styles.css` | Visual styling, layout, and responsive behavior |
| `script.js` | Approved project data plus all search, filter, sort, and detail-view logic |
| `README.md` | This file |
| `TEST_RESULTS.md` | Record of the tests run against this dashboard before hand-off for review |

## Internal use disclaimer

This dashboard is an internal decision-support tool only. It supports comparing and reviewing bid opportunities; it does not make final pursue-or-decline decisions, and using it does not submit a bid, contact a client, or commit staffing or financial resources.
