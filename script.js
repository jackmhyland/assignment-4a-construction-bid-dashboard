/* ============================================================
   Construction Bid Opportunity Dashboard
   Source data: consolidated_bid_opportunities.xlsx (Stage 1, approved)
   All 10 project records below were transcribed field-for-field
   from the approved workbook's "Bid Opportunities" sheet.
   Do not edit these values without updating the source workbook
   and re-transcribing; this file should never be a source of truth.
   ============================================================ */

const PROJECTS = [
  {
    projectId: "P-101",
    projectName: "River Falls Medical Clinic Addition",
    client: "Valley Health Partners",
    projectType: "Healthcare",
    location: "River Falls, WI",
    distanceMiles: 32,
    estStartDate: "2026-10-01",
    durationMonths: 10,
    contractValue: 4850000,
    bidDueDate: "2026-08-21",
    competitionLevel: "Medium",
    directCost: 4050000,
    overheadCost: 410000,
    estProfit: 390000,
    profitMargin: 0.0804,
    bidPrepCost: 18000,
    paymentRisk: "Low",
    relationshipStrength: "Strong",
    clientReliability: "High",
    specialConcern: "Healthcare projects require careful infection-control planning.",
    experienceFit: "Strong - Healthcare renovation is a listed company strength. Note: this project is described as an addition rather than a renovation, a minor distinction from the exact wording in the company preferences document.",
    geographicFit: "Acceptable (32 mi; company's acceptable range is 26-45 mi)",
    scheduleCapacityConcern: "Start date (Oct 1, 2026) falls within the company's stated Sept-Nov 2026 limited superintendent availability window. Bid due Aug 21, part of a dense cluster of 5 bid due dates between Aug 12-25 that exceeds the stated 3-major-bid-per-2-weeks estimating capacity.",
    priority: "High Priority",
    priorityExplanation: "Strong existing relationship, high client reliability, low payment risk, margin just above the 8% preference, reasonable bid prep cost, and a project type the company has direct healthcare experience with. Main tradeoff is the Oct 1 start landing in the constrained staffing window shared with several other opportunities.",
    missingInfo: "None in the underlying figures. Project type is listed as 'Healthcare' (addition) while the company preference document specifically names 'healthcare renovation' as a strength; reasonably close but not an exact match."
  },
  {
    projectId: "P-102",
    projectName: "North Metro Distribution Center",
    client: "Summit Logistics",
    projectType: "Industrial",
    location: "Blaine, MN",
    distanceMiles: 41,
    estStartDate: "2026-11-15",
    durationMonths: 12,
    contractValue: 8200000,
    bidDueDate: "2026-08-28",
    competitionLevel: "High",
    directCost: 6950000,
    overheadCost: 700000,
    estProfit: 550000,
    profitMargin: 0.0671,
    bidPrepCost: 32000,
    paymentRisk: "Medium",
    relationshipStrength: "New",
    clientReliability: "Medium",
    specialConcern: "Competitive bidding and possible scope changes; subcontractor reports aggressive price negotiation.",
    experienceFit: "Unclear/Weak - listed as 'Industrial,' but the company's strength list specifies 'light industrial' and its moderate list includes 'manufacturing expansions.' A logistics/distribution center does not clearly match either named category; this is not addressed directly in the source documents.",
    geographicFit: "Acceptable, near the upper edge (41 mi; acceptable range is 26-45 mi)",
    scheduleCapacityConcern: "Start Nov 15, 2026 falls at the tail end of the constrained Sept-Nov superintendent window. Also one of three opportunities above $8M (with P-107 and P-108) competing for the company's single 'large project' capacity slot.",
    priority: "Low Priority",
    priorityExplanation: "High competition, margin below the 7% additional-scrutiny threshold, bid prep cost above the $30,000 preference, and an untested/new client relationship based on secondhand subcontractor reports rather than direct company experience. Also competes for the single large-project capacity slot against stronger candidates.",
    missingInfo: "Relationship and reliability notes are based on a subcontractor's secondhand report, not direct company experience with this client; treat with added caution. Project type fit against the 'light industrial' preference is unclear and not confirmed in the source files."
  },
  {
    projectId: "P-103",
    projectName: "Farmington Municipal Office Renovation",
    client: "City of Farmington",
    projectType: "Municipal",
    location: "Farmington, MN",
    distanceMiles: 18,
    estStartDate: "2026-09-15",
    durationMonths: 7,
    contractValue: 2750000,
    bidDueDate: "2026-08-14",
    competitionLevel: "Medium",
    directCost: 2180000,
    overheadCost: 260000,
    estProfit: 310000,
    profitMargin: 0.1127,
    bidPrepCost: 12000,
    paymentRisk: "Low",
    relationshipStrength: "Strong",
    clientReliability: "High",
    specialConcern: "Public bidding procedures must be followed carefully.",
    experienceFit: "Strong - Municipal is a listed company strength.",
    geographicFit: "Preferred (18 mi; under the 25-mile preferred threshold)",
    scheduleCapacityConcern: "Start Sept 15, 2026 falls within the constrained superintendent window, though the short 7-month duration limits exposure. Bid due Aug 14, part of a dense cluster of 5 bid due dates between Aug 12-25 that exceeds the stated 3-major-bid-per-2-weeks estimating capacity.",
    priority: "High Priority",
    priorityExplanation: "Strong existing relationship, high reliability, low payment risk, margin over 11%, low bid prep cost, and a preferred project type at a preferred distance. One of the strongest opportunities in the set.",
    missingInfo: "None identified."
  },
  {
    projectId: "P-104",
    projectName: "Hudson Retail Development",
    client: "St. Croix Development Group",
    projectType: "Retail",
    location: "Hudson, WI",
    distanceMiles: 29,
    estStartDate: "2027-01-10",
    durationMonths: 9,
    contractValue: 6100000,
    bidDueDate: "2026-09-04",
    competitionLevel: "High",
    directCost: 5150000,
    overheadCost: 520000,
    estProfit: 430000,
    profitMargin: 0.0705,
    bidPrepCost: 26000,
    paymentRisk: "Medium",
    relationshipStrength: "Moderate",
    clientReliability: "Medium",
    specialConcern: "The developer is highly focused on price.",
    experienceFit: "Moderate - Retail is listed as a moderate-experience project type.",
    geographicFit: "Acceptable (29 mi; acceptable range is 26-45 mi)",
    scheduleCapacityConcern: "Start Jan 10, 2027 falls outside the constrained Sept-Nov 2026 staffing window, which is favorable. Bid due Sept 4, at the edge of the dense late-August bid cluster.",
    priority: "Medium Priority",
    priorityExplanation: "Favorable schedule timing (starts after the staffing crunch) and a developer that has invited a repeat bid, but margin is below the 8% preference (7.05%), competition is high, and the relationship has not yet resulted in an actual signed contract with this client.",
    missingInfo: "Relationship notes indicate no completed project history with this client (a prior proposal was submitted but not selected); reliability is rated Medium based on limited engagement rather than a track record."
  },
  {
    projectId: "P-105",
    projectName: "Prescott Elementary School Addition",
    client: "Prescott School District",
    projectType: "Education",
    location: "Prescott, WI",
    distanceMiles: 38,
    estStartDate: "2026-10-20",
    durationMonths: 11,
    contractValue: 5300000,
    bidDueDate: "2026-08-25",
    competitionLevel: "Medium",
    directCost: 4420000,
    overheadCost: 430000,
    estProfit: 450000,
    profitMargin: 0.0849,
    bidPrepCost: 20000,
    paymentRisk: "Low",
    relationshipStrength: "Strong",
    clientReliability: "High",
    specialConcern: "Work must remain aligned with the academic calendar.",
    experienceFit: "Strong - Education is a listed company strength; the company has completed two prior summer projects for this district, both delivered before the school year started.",
    geographicFit: "Acceptable (38 mi; acceptable range is 26-45 mi)",
    scheduleCapacityConcern: "Start Oct 20, 2026 falls within the constrained superintendent window, and the academic-calendar deadline adds firm schedule pressure. Bid due Aug 25, part of a dense cluster of 5 bid due dates between Aug 12-25 that exceeds the stated 3-major-bid-per-2-weeks estimating capacity.",
    priority: "High Priority",
    priorityExplanation: "Strong relationship with a proven track record on this exact client's tight academic-calendar deadlines, high reliability, low payment risk, margin above 8%, and a preferred project type. Primary risk is schedule: the start date sits in the constrained staffing window alongside several other opportunities.",
    missingInfo: "None identified."
  },
  {
    projectId: "P-106",
    projectName: "Eagan Corporate Office Remodel",
    client: "Northstar Financial",
    projectType: "Office",
    location: "Eagan, MN",
    distanceMiles: 14,
    estStartDate: "2026-09-01",
    durationMonths: 5,
    contractValue: 1900000,
    bidDueDate: "2026-08-12",
    competitionLevel: "Low",
    directCost: 1480000,
    overheadCost: 170000,
    estProfit: 250000,
    profitMargin: 0.1316,
    bidPrepCost: 8000,
    paymentRisk: "Low",
    relationshipStrength: "Moderate",
    clientReliability: "High",
    specialConcern: "The client expects minimal disruption to office operations.",
    experienceFit: "Strong - Office renovation is a listed company strength.",
    geographicFit: "Preferred (14 mi; under the 25-mile preferred threshold)",
    scheduleCapacityConcern: "Start Sept 1, 2026 is the earliest start in the constrained superintendent window, though the short 5-month duration limits exposure. Bid due Aug 12, the earliest date in and start of the dense Aug 12-25 bid cluster.",
    priority: "High Priority",
    priorityExplanation: "Best profit margin (13.16%) and lowest bid prep cost of any opportunity in the set, low competition, low payment risk, and a preferred project type and location. Relationship is only 'Moderate' (came through referral, not yet built through completed work), but reliability is rated High.",
    missingInfo: "Relationship confidence is based on a referral and early conversations rather than completed project history with this specific client."
  },
  {
    projectId: "P-107",
    projectName: "Shakopee Manufacturing Expansion",
    client: "Midwest Components",
    projectType: "Industrial",
    location: "Shakopee, MN",
    distanceMiles: 24,
    estStartDate: "2026-12-01",
    durationMonths: 14,
    contractValue: 9700000,
    bidDueDate: "2026-09-10",
    competitionLevel: "Medium",
    directCost: 8050000,
    overheadCost: 790000,
    estProfit: 860000,
    profitMargin: 0.0887,
    bidPrepCost: 35000,
    paymentRisk: "Medium",
    relationshipStrength: "Strong",
    clientReliability: "High",
    specialConcern: "Design changes and coordination with active manufacturing operations; client has a history of late design changes creating schedule pressure.",
    experienceFit: "Moderate - client notes describe this as a manufacturing expansion, which the company preferences document lists as moderate experience (distinct from its 'light industrial' strength category, though the source spreadsheet generically labels the type 'Industrial').",
    geographicFit: "Preferred (24 mi; just under the 25-mile preferred threshold)",
    scheduleCapacityConcern: "Start Dec 1, 2026 aligns with when additional superintendent supervision becomes available, a favorable timing signal. However, this is one of three opportunities above $8M (with P-102 and P-108) competing for the company's single large-project capacity slot.",
    priority: "Medium Priority",
    priorityExplanation: "Strong, established relationship and high reliability with a good margin (8.87%), but bid prep cost exceeds the $30,000 preference, the client has a history of late design changes causing schedule pressure, and this project competes with two other large (>$8M) projects for the company's single large-project capacity slot.",
    missingInfo: "Project type is listed generically as 'Industrial' in the opportunity spreadsheet, while the client relationship notes describe it specifically as a manufacturing expansion (a separate, moderate-experience category per the company preferences document)."
  },
  {
    projectId: "P-108",
    projectName: "Woodbury Senior Living Facility",
    client: "Evergreen Living",
    projectType: "Senior Living",
    location: "Woodbury, MN",
    distanceMiles: 23,
    estStartDate: "2027-02-01",
    durationMonths: 16,
    contractValue: 12400000,
    bidDueDate: "2026-09-18",
    competitionLevel: "High",
    directCost: 10650000,
    overheadCost: 980000,
    estProfit: 770000,
    profitMargin: 0.0621,
    bidPrepCost: 42000,
    paymentRisk: "High",
    relationshipStrength: "New",
    clientReliability: "Unknown",
    specialConcern: "Large project size, unfamiliar client, and limited senior-living experience.",
    experienceFit: "Limited - Senior living is explicitly listed as a limited-experience project type for the company.",
    geographicFit: "Preferred (23 mi; under the 25-mile preferred threshold)",
    scheduleCapacityConcern: "Start Feb 1, 2027 falls outside the constrained staffing window, which is favorable, but the 16-month duration is the longest of any opportunity. Also competes for the company's single large-project (>$8M) capacity slot along with P-102 and P-107.",
    priority: "Low Priority",
    priorityExplanation: "This opportunity carries nearly every scrutiny flag named in the company's own bid decision guidelines: high payment risk, unknown client reliability, high competition, limited company experience with this project type, a contract value ($12.4M) above the company's typical $1.5M-$10M range without a strong relationship to justify the exception, and the lowest margin (6.21%) and highest bid prep cost ($42,000) of any opportunity in the set.",
    missingInfo: "Client reliability is explicitly listed as 'Unknown' in the source notes; no prior relationship exists with this client."
  },
  {
    projectId: "P-109",
    projectName: "Lakeville Public Safety Building",
    client: "City of Lakeville",
    projectType: "Municipal",
    location: "Lakeville, MN",
    distanceMiles: 20,
    estStartDate: "2026-11-01",
    durationMonths: 13,
    contractValue: 7600000,
    bidDueDate: "2026-08-31",
    competitionLevel: "Medium",
    directCost: 6250000,
    overheadCost: 620000,
    estProfit: 730000,
    profitMargin: 0.0961,
    bidPrepCost: 28000,
    paymentRisk: "Low",
    relationshipStrength: "Strong",
    clientReliability: "High",
    specialConcern: "Detailed public-sector reporting requirements.",
    experienceFit: "Strong - Municipal is a listed company strength.",
    geographicFit: "Preferred (20 mi; under the 25-mile preferred threshold)",
    scheduleCapacityConcern: "Start Nov 1, 2026 falls at the tail end of the constrained superintendent window, and the 13-month duration is long. Bid due Aug 31, part of a dense cluster of bid due dates in late August that exceeds the stated 3-major-bid-per-2-weeks estimating capacity.",
    priority: "High Priority",
    priorityExplanation: "Strong relationship, high reliability, low payment risk, margin over 9.6%, and a preferred project type and location. Bid prep cost ($28,000) is close to but still within the $30,000 threshold. Schedule timing and the long duration during the constrained staffing window are worth watching.",
    missingInfo: "None identified."
  },
  {
    projectId: "P-110",
    projectName: "Cottage Grove Fitness Center",
    client: "ActiveLife Fitness",
    projectType: "Recreation",
    location: "Cottage Grove, MN",
    distanceMiles: 27,
    estStartDate: "2026-10-10",
    durationMonths: 8,
    contractValue: 3400000,
    bidDueDate: "2026-08-19",
    competitionLevel: "Low",
    directCost: 2760000,
    overheadCost: 280000,
    estProfit: 360000,
    profitMargin: 0.1059,
    bidPrepCost: 14000,
    paymentRisk: "Medium",
    relationshipStrength: "Moderate",
    clientReliability: "Medium",
    specialConcern: "The client may request value-engineering options to control costs.",
    experienceFit: "Moderate - Recreation is listed as a moderate-experience project type.",
    geographicFit: "Acceptable (27 mi; acceptable range is 26-45 mi)",
    scheduleCapacityConcern: "Start Oct 10, 2026 falls within the constrained superintendent window. Bid due Aug 19, part of a dense cluster of 5 bid due dates between Aug 12-25 that exceeds the stated 3-major-bid-per-2-weeks estimating capacity.",
    priority: "Medium Priority",
    priorityExplanation: "Strong financial profile (10.59% margin, low bid prep cost, low competition), but the client relationship and reliability are only Moderate/Medium with no completed project history, and the project type is a moderate-experience category rather than a company strength.",
    missingInfo: "No completed project history with this client; relationship is based on a referral from a local architect only."
  }
];

/* ---------- Derived helpers (display-only categorization, no new facts) ---------- */

// Priority sort weight: lower number = higher priority
const PRIORITY_WEIGHT = { "High Priority": 1, "Medium Priority": 2, "Low Priority": 3 };

// Extract the leading category word(s) from the Company Experience Fit narrative,
// e.g. "Strong - Municipal is a listed..." -> "Strong". This is purely a display
// label already present at the start of the approved text; no new judgment is added.
function experienceFitCategory(fitText) {
  const idx = fitText.indexOf(" - ");
  return idx === -1 ? fitText : fitText.slice(0, idx);
}

function fitBadgeClass(category) {
  switch (category) {
    case "Strong": return "fit-strong";
    case "Moderate": return "fit-moderate";
    case "Limited": return "fit-limited";
    default: return "fit-unclear"; // covers "Unclear/Weak"
  }
}

function priorityBadgeClass(priority) {
  if (priority === "High Priority") return "badge-high";
  if (priority === "Medium Priority") return "badge-medium";
  return "badge-low";
}

// Payment Risk polarity: High risk is bad (red), Low risk is good (green).
function riskBadgeClass(risk) {
  if (risk === "High") return "risk-high";
  if (risk === "Medium") return "risk-medium";
  if (risk === "Low") return "risk-low";
  return "risk-unknown"; // covers any unexpected/unrecognized value
}

// Client Reliability polarity is the OPPOSITE of Payment Risk: High reliability
// is good (green), Low reliability is bad (red). This is a general, value-based
// rule -- it colors every project whose Client Reliability equals "High"/"Medium"/
// "Low"/"Unknown" the same way, including any future records, not just today's 10.
// Do not reuse riskBadgeClass() for Client Reliability; that was the bug reported
// during human review (High reliability was incorrectly rendered in the "risk"
// red/amber/green scheme, which is inverted for this field).
function reliabilityBadgeClass(reliability) {
  if (reliability === "High") return "reliability-high";
  if (reliability === "Medium") return "reliability-medium";
  if (reliability === "Low") return "reliability-low";
  return "reliability-unknown"; // covers "Unknown" and any other unrecognized value
}

function hasNoFlags(missingInfo) {
  return missingInfo.trim() === "None identified.";
}

function formatCurrency(n) {
  return "$" + Math.round(n).toLocaleString("en-US");
}

function formatPercent(n) {
  return (n * 100).toFixed(2) + "%";
}

function formatDate(isoStr) {
  // isoStr like "2026-10-01" -- parse as local date to avoid timezone shifts
  const [y, m, d] = isoStr.split("-").map(Number);
  const dt = new Date(y, m - 1, d);
  return dt.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

/* ---------- State ---------- */

let state = {
  search: "",
  priority: "",
  type: "",
  competition: "",
  risk: "",
  fit: "",
  sortField: "priority",
  sortDirection: "desc",
};

/* ---------- Initialization ---------- */

document.addEventListener("DOMContentLoaded", () => {
  populateFilterOptions();
  attachEventListeners();
  renderSummaryCards();
  renderTable();
});

function populateFilterOptions() {
  const priorities = uniqueSorted(PROJECTS.map(p => p.priority), Object.keys(PRIORITY_WEIGHT));
  const types = uniqueSorted(PROJECTS.map(p => p.projectType));
  const competitions = uniqueSorted(PROJECTS.map(p => p.competitionLevel), ["Low", "Medium", "High"]);
  const risks = uniqueSorted(PROJECTS.map(p => p.paymentRisk), ["Low", "Medium", "High"]);
  const fits = uniqueSorted(PROJECTS.map(p => experienceFitCategory(p.experienceFit)), ["Strong", "Moderate", "Limited", "Unclear/Weak"]);

  fillSelect("filter-priority", priorities);
  fillSelect("filter-type", types);
  fillSelect("filter-competition", competitions);
  fillSelect("filter-risk", risks);
  fillSelect("filter-fit", fits);
}

function uniqueSorted(values, preferredOrder) {
  const set = Array.from(new Set(values));
  if (preferredOrder) {
    return preferredOrder.filter(v => set.includes(v));
  }
  return set.sort();
}

function fillSelect(id, values) {
  const select = document.getElementById(id);
  values.forEach(v => {
    const opt = document.createElement("option");
    opt.value = v;
    opt.textContent = v;
    select.appendChild(opt);
  });
}

function attachEventListeners() {
  document.getElementById("search-input").addEventListener("input", (e) => {
    state.search = e.target.value.trim().toLowerCase();
    renderTable();
  });
  document.getElementById("filter-priority").addEventListener("change", (e) => {
    state.priority = e.target.value;
    renderTable();
  });
  document.getElementById("filter-type").addEventListener("change", (e) => {
    state.type = e.target.value;
    renderTable();
  });
  document.getElementById("filter-competition").addEventListener("change", (e) => {
    state.competition = e.target.value;
    renderTable();
  });
  document.getElementById("filter-risk").addEventListener("change", (e) => {
    state.risk = e.target.value;
    renderTable();
  });
  document.getElementById("filter-fit").addEventListener("change", (e) => {
    state.fit = e.target.value;
    renderTable();
  });
  document.getElementById("sort-field").addEventListener("change", (e) => {
    state.sortField = e.target.value;
    renderTable();
  });
  document.getElementById("sort-direction").addEventListener("change", (e) => {
    state.sortDirection = e.target.value;
    renderTable();
  });
  document.getElementById("reset-filters").addEventListener("click", resetFilters);

  document.getElementById("modal-close").addEventListener("click", closeModal);
  document.getElementById("modal-overlay").addEventListener("click", (e) => {
    if (e.target.id === "modal-overlay") closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

function resetFilters() {
  state = {
    search: "",
    priority: "",
    type: "",
    competition: "",
    risk: "",
    fit: "",
    sortField: "priority",
    sortDirection: "desc",
  };
  document.getElementById("search-input").value = "";
  document.getElementById("filter-priority").value = "";
  document.getElementById("filter-type").value = "";
  document.getElementById("filter-competition").value = "";
  document.getElementById("filter-risk").value = "";
  document.getElementById("filter-fit").value = "";
  document.getElementById("sort-field").value = "priority";
  document.getElementById("sort-direction").value = "desc";
  renderTable();
}

/* ---------- Summary cards ---------- */

function renderSummaryCards() {
  const total = PROJECTS.length;
  const high = PROJECTS.filter(p => p.priority === "High Priority").length;
  const totalContract = PROJECTS.reduce((sum, p) => sum + p.contractValue, 0);
  const totalProfit = PROJECTS.reduce((sum, p) => sum + p.estProfit, 0);

  document.getElementById("card-total").textContent = total;
  document.getElementById("card-high").textContent = high;
  document.getElementById("card-contract-value").textContent = formatCurrency(totalContract);
  document.getElementById("card-profit").textContent = formatCurrency(totalProfit);
}

/* ---------- Filtering, searching, sorting ---------- */

function getFilteredSortedProjects() {
  let list = PROJECTS.filter(p => {
    if (state.priority && p.priority !== state.priority) return false;
    if (state.type && p.projectType !== state.type) return false;
    if (state.competition && p.competitionLevel !== state.competition) return false;
    if (state.risk && p.paymentRisk !== state.risk) return false;
    if (state.fit && experienceFitCategory(p.experienceFit) !== state.fit) return false;

    if (state.search) {
      const haystack = [p.projectId, p.projectName, p.client, p.location]
        .join(" ")
        .toLowerCase();
      if (!haystack.includes(state.search)) return false;
    }
    return true;
  });

  const dir = state.sortDirection === "asc" ? 1 : -1;
  list.sort((a, b) => {
    let av, bv;
    switch (state.sortField) {
      case "priority":
        av = PRIORITY_WEIGHT[a.priority];
        bv = PRIORITY_WEIGHT[b.priority];
        // For priority, "desc" (Direction default "Highest first") should show High Priority first,
        // which corresponds to the lowest weight -- invert here so the label matches intent.
        return dir === -1 ? av - bv : bv - av;
      case "estProfit":
        av = a.estProfit; bv = b.estProfit; break;
      case "profitMargin":
        av = a.profitMargin; bv = b.profitMargin; break;
      case "contractValue":
        av = a.contractValue; bv = b.contractValue; break;
      case "distanceMiles":
        av = a.distanceMiles; bv = b.distanceMiles; break;
      case "bidDueDate":
        av = a.bidDueDate; bv = b.bidDueDate; break;
      default:
        av = 0; bv = 0;
    }
    if (av < bv) return -1 * dir;
    if (av > bv) return 1 * dir;
    return 0;
  });

  return list;
}

/* ---------- Table rendering ---------- */

function renderTable() {
  const list = getFilteredSortedProjects();
  const tbody = document.getElementById("table-body");
  tbody.innerHTML = "";

  document.getElementById("no-results").hidden = list.length !== 0;
  document.getElementById("results-count").textContent =
    `Showing ${list.length} of ${PROJECTS.length} opportunities`;

  list.forEach(p => {
    const tr = document.createElement("tr");

    const fitCategory = experienceFitCategory(p.experienceFit);
    const flags = [];
    if (p.paymentRisk === "High") flags.push({ icon: "⚠", title: "High payment risk" });
    if (p.clientReliability === "Unknown") flags.push({ icon: "❓", title: "Client reliability unknown" });
    if (fitCategory === "Unclear/Weak") flags.push({ icon: "❗", title: "Unclear company experience fit" });
    if (!hasNoFlags(p.missingInfo)) flags.push({ icon: "📝", title: "Missing / unclear / conflicting info -- see details" });
    if (/constrained|capacity slot|exceeds/i.test(p.scheduleCapacityConcern)) {
      flags.push({ icon: "⏱", title: "Schedule or capacity concern -- see details" });
    }

    const flagsHtml = flags.length
      ? flags.map(f => `<span class="flag-icon" title="${escapeHtml(f.title)}">${f.icon}</span>`).join("")
      : "<span title=\"No flags\">&mdash;</span>";

    tr.innerHTML = `
      <td><span class="badge ${priorityBadgeClass(p.priority)}">${p.priority.replace(" Priority", "")}</span></td>
      <td>${p.projectId}</td>
      <td>${escapeHtml(p.projectName)}</td>
      <td>${escapeHtml(p.client)}</td>
      <td>${escapeHtml(p.projectType)}</td>
      <td>${escapeHtml(p.location)}</td>
      <td>${p.distanceMiles}</td>
      <td>${formatDate(p.estStartDate)}</td>
      <td>${formatDate(p.bidDueDate)}</td>
      <td>${formatCurrency(p.contractValue)}</td>
      <td>${formatCurrency(p.estProfit)}</td>
      <td>${formatPercent(p.profitMargin)}</td>
      <td>${escapeHtml(p.competitionLevel)}</td>
      <td><span class="badge ${riskBadgeClass(p.paymentRisk)}">${escapeHtml(p.paymentRisk)}</span></td>
      <td><span class="badge ${fitBadgeClass(fitCategory)}">${escapeHtml(fitCategory)}</span></td>
      <td class="flags-cell">${flagsHtml}</td>
      <td><button class="details-btn" data-id="${p.projectId}">View</button></td>
    `;
    tbody.appendChild(tr);
  });

  tbody.querySelectorAll(".details-btn").forEach(btn => {
    btn.addEventListener("click", () => openModal(btn.dataset.id));
  });
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

/* ---------- Modal detail view ---------- */

function openModal(projectId) {
  const p = PROJECTS.find(pr => pr.projectId === projectId);
  if (!p) return;

  const fitCategory = experienceFitCategory(p.experienceFit);
  const clean = hasNoFlags(p.missingInfo);

  const modalContent = document.getElementById("modal-content");
  modalContent.innerHTML = `
    <h2 id="modal-title">${p.projectId} &middot; ${escapeHtml(p.projectName)}</h2>
    <p class="modal-subtitle">${escapeHtml(p.client)} &mdash; ${escapeHtml(p.location)} (${p.distanceMiles} mi)
      &nbsp;<span class="badge ${priorityBadgeClass(p.priority)}">${escapeHtml(p.priority)}</span></p>

    <dl class="modal-grid">
      <div><dt>Project Type</dt><dd>${escapeHtml(p.projectType)}</dd></div>
      <div><dt>Competition Level</dt><dd>${escapeHtml(p.competitionLevel)}</dd></div>
      <div><dt>Estimated Start Date</dt><dd>${formatDate(p.estStartDate)}</dd></div>
      <div><dt>Bid Due Date</dt><dd>${formatDate(p.bidDueDate)}</dd></div>
      <div><dt>Duration</dt><dd>${p.durationMonths} months</dd></div>
      <div><dt>Contract Value</dt><dd>${formatCurrency(p.contractValue)}</dd></div>
      <div><dt>Estimated Direct Cost</dt><dd>${formatCurrency(p.directCost)}</dd></div>
      <div><dt>Estimated Overhead Cost</dt><dd>${formatCurrency(p.overheadCost)}</dd></div>
      <div><dt>Estimated Profit</dt><dd>${formatCurrency(p.estProfit)}</dd></div>
      <div><dt>Estimated Profit Margin</dt><dd>${formatPercent(p.profitMargin)}</dd></div>
      <div><dt>Bid Preparation Cost</dt><dd>${formatCurrency(p.bidPrepCost)}</dd></div>
      <div><dt>Payment Risk</dt><dd><span class="badge ${riskBadgeClass(p.paymentRisk)}">${escapeHtml(p.paymentRisk)}</span></dd></div>
      <div><dt>Relationship Strength</dt><dd>${escapeHtml(p.relationshipStrength)}</dd></div>
      <div><dt>Client Reliability</dt><dd><span class="badge ${reliabilityBadgeClass(p.clientReliability)}">${escapeHtml(p.clientReliability)}</span></dd></div>
      <div><dt>Company Experience Fit</dt><dd><span class="badge ${fitBadgeClass(fitCategory)}">${escapeHtml(fitCategory)}</span></dd></div>
      <div><dt>Geographic Fit</dt><dd>${escapeHtml(p.geographicFit)}</dd></div>
    </dl>

    ${p.paymentRisk === "High" || p.clientReliability === "Unknown" ? `
    <div class="warning-box">
      <strong>Risk warning:</strong>
      ${p.paymentRisk === "High" ? "This project carries a High payment risk rating. " : ""}
      ${p.clientReliability === "Unknown" ? "Client reliability is Unknown (no established track record). " : ""}
    </div>` : ""}

    <div class="modal-section">
      <h3>Special Concern</h3>
      <p>${escapeHtml(p.specialConcern)}</p>
    </div>
    <div class="modal-section">
      <h3>Company Experience Fit &ndash; Full Explanation</h3>
      <p>${escapeHtml(p.experienceFit)}</p>
    </div>
    <div class="modal-section">
      <h3>Schedule or Capacity Concern</h3>
      <p>${escapeHtml(p.scheduleCapacityConcern)}</p>
    </div>
    <div class="modal-section">
      <h3>Priority Explanation</h3>
      <p>${escapeHtml(p.priorityExplanation)}</p>
    </div>
    <div class="modal-section">
      <h3>Missing, Unclear, or Conflicting Information</h3>
      <p>${clean ? escapeHtml(p.missingInfo) : `<strong>${escapeHtml(p.missingInfo)}</strong>`}</p>
    </div>
  `;

  document.getElementById("modal-overlay").hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modal-overlay").hidden = true;
  document.body.style.overflow = "";
}
