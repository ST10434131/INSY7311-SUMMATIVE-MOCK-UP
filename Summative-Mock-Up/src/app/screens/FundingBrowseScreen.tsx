import { TopBar } from "../components/TopBar";
import { BottomNav } from "../components/BottomNav";
import { Search, Bookmark, Clock, GraduationCap } from "lucide-react";

const bursaries = [
  {
    title: "National Research Foundation Bursary",
    description: "Full funding for Masters and PhD students in STEM fields",
    deadline: "Closes in 3 days",
    amount: "R120,000/year",
    nqf: "NQF 9–10",
    urgent: true,
  },
  {
    title: "Mandela Rhodes Scholarship",
    description: "Leadership development and postgraduate funding for exceptional students",
    deadline: "Closes in 2 weeks",
    amount: "Full funding",
    nqf: "NQF 9",
    urgent: false,
  },
  {
    title: "FirstRand Foundation Bursary",
    description: "Support for postgraduate commerce and business studies",
    deadline: "Closes in 1 month",
    amount: "R80,000/year",
    nqf: "NQF 8–9",
    urgent: false,
  },
];

export function FundingBrowseScreen({
  activeTab,
  onTabChange,
}: {
  activeTab: string;
  onTabChange: (tab: string) => void;
}) {
  return (
    <div className="min-h-screen pb-20 pt-14" style={{ backgroundColor: "#F7F8FA" }}>
      <TopBar title="Funding Finder" />

      <div className="max-w-md mx-auto p-4 space-y-4">

        {/* Search bar — bordered, not filled, so heading below dominates */}
        <div
          className="flex items-center gap-2 px-3 rounded-xl border"
          style={{ backgroundColor: "#FFFFFF", borderColor: "#D1D9E0" }}
        >
          <Search className="w-5 h-5 flex-shrink-0" style={{ color: "#6B7A8D" }} />
          <input
            type="search"
            placeholder="Search bursaries, NRF, NSFAS..."
            className="flex-1 bg-transparent outline-none py-3"
            style={{ color: "#1A2E4A", fontSize: "15px", minHeight: "48px" }}
            aria-label="Search bursaries and scholarships"
          />
        </div>

        {/* Heading — dominant visual hierarchy anchor */}
        <div className="space-y-1">
          <h2
            className="font-extrabold"
            style={{ fontSize: "28px", color: "#1A2E4A", lineHeight: "1.2" }}
          >
            Available Funding
          </h2>
          <p style={{ fontSize: "14px", color: "#6B7A8D" }}>
            {bursaries.length} opportunities match your profile
          </p>
        </div>

        {/* Bursary cards */}
        <div className="space-y-3">
          {bursaries.map((bursary, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-4 border space-y-3"
              style={{ borderColor: "#E5E9EE" }}
            >
              {/* Title row */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <h3
                    className="font-semibold mb-1"
                    style={{ fontSize: "17px", color: "#1A2E4A", lineHeight: "1.3" }}
                  >
                    {bursary.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: "#6B7A8D", lineHeight: "1.5" }}>
                    {bursary.description}
                  </p>
                </div>
                <button
                  className="min-w-[48px] min-h-[48px] flex items-center justify-center -mr-2 flex-shrink-0"
                  aria-label={`Save ${bursary.title}`}
                >
                  <Bookmark className="w-5 h-5" stroke="#6B7A8D" fill="none" />
                </button>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                {/* Deadline badge — urgent = red, non-urgent = amber */}
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-semibold"
                  style={{
                    backgroundColor: bursary.urgent ? "#E05252" : "#F5A623",
                    color: bursary.urgent ? "#FFFFFF" : "#1A2E4A",
                    fontSize: "12px",
                  }}
                >
                  <Clock className="w-3 h-3" />
                  {bursary.deadline}
                </span>

                {/* Amount badge */}
                <span
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full font-medium"
                  style={{ backgroundColor: "#EEF2F7", color: "#1A2E4A", fontSize: "12px" }}
                >
                  <span className="font-bold" style={{ fontSize: "11px" }}>R</span>
                  {bursary.amount.startsWith("R") ? bursary.amount.slice(1) : bursary.amount}
                </span>

                {/* NQF badge */}
                <span
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full font-medium"
                  style={{ backgroundColor: "#EEF2F7", color: "#1A2E4A", fontSize: "12px" }}
                >
                  <GraduationCap className="w-3 h-3" />
                  {bursary.nqf}
                </span>
              </div>

              {/* CTA */}
              <button
                className="w-full py-3 rounded-xl font-semibold min-h-[48px] transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#1A2E4A", color: "#FFFFFF", fontSize: "15px" }}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      <BottomNav activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  );
}