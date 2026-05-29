import { TopBar } from "../components/TopBar";
import { BottomNav } from "../components/BottomNav";
import { Search, X, ChevronRight } from "lucide-react";
import { useState } from "react";

export function PostgradExplorerScreen({ activeTab, onTabChange }: { activeTab: string; onTabChange: (tab: string) => void }) {
  const [selectedFilters, setSelectedFilters] = useState<string[]>(["Engineering"]);

  const filters = [
    { id: "field", label: "Field of Study", options: ["Engineering", "Sciences", "Humanities", "Commerce"] },
    { id: "institution", label: "Institution", options: ["UCT", "Wits", "Stellenbosch"] },
    { id: "nqf", label: "NQF Level", options: ["9", "10"] },
    { id: "duration", label: "Duration", options: ["1 year", "2 years", "3+ years"] },
  ];

  const programs = [
    {
      title: "MEng in Electrical Engineering",
      institution: "University of Cape Town",
      nqf: "NQF 9",
      duration: "2 years",
    },
    {
      title: "MSc in Computer Science",
      institution: "University of Cape Town",
      nqf: "NQF 9",
      duration: "2 years",
    },
    {
      title: "MEng in Mechanical Engineering",
      institution: "University of the Witwatersrand",
      nqf: "NQF 9",
      duration: "2 years",
    },
  ];

  const removeFilter = (filter: string) => {
    setSelectedFilters(selectedFilters.filter((f) => f !== filter));
  };

  return (
    <div className="min-h-screen pb-20 pt-14" style={{ backgroundColor: "#F7F8FA" }}>
      <TopBar title="Postgrad Explorer" />

      {/* Breadcrumb trail */}
      <div
        className="flex items-center gap-1 px-4 py-2 border-b"
        style={{ backgroundColor: "#FFFFFF", borderColor: "#E5E9EE" }}
      >
        <span className="text-xs font-medium" style={{ color: "#6B7A8D" }}>
          Explore
        </span>
        <ChevronRight className="w-3 h-3 flex-shrink-0" style={{ color: "#6B7A8D" }} />
        <span className="text-xs font-medium" style={{ color: "#F5A623" }}>
          Engineering
        </span>
      </div>

      <div className="max-w-md mx-auto p-4 space-y-4">

        {/* Search bar */}
        <div
          className="flex items-center gap-2 px-3 rounded-xl border"
          style={{ backgroundColor: "#FFFFFF", borderColor: "#D1D9E0" }}
        >
          <Search className="w-5 h-5 flex-shrink-0" style={{ color: "#6B7A8D" }} />
          <input
            type="search"
            placeholder="Search programmes, fields, institutions..."
            className="flex-1 bg-transparent outline-none py-3"
            style={{ color: "#1A2E4A", fontSize: "15px", minHeight: "48px" }}
            aria-label="Search postgraduate programmes"
          />
        </div>

        {/* Filter chips */}
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#9AAABB" }}>
            Active filters
          </p>
          <div className="flex flex-wrap gap-2">
            {selectedFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => removeFilter(filter)}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full font-medium text-sm min-h-[44px]"
                style={{ backgroundColor: "#F5A623", color: "#1A2E4A" }}
                aria-label={`Remove ${filter} filter`}
              >
                {filter}
                <X className="w-3.5 h-3.5" />
              </button>
            ))}

            {["Institution", "NQF Level", "Duration"].map((filter) => (
              <button
                key={filter}
                className="px-3 py-2 rounded-full font-medium text-sm border min-h-[44px]"
                style={{ borderColor: "#D1D9E0", color: "#6B7A8D", backgroundColor: "#FFFFFF" }}
                aria-label={`Add ${filter} filter`}
              >
                + {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Mapping connector — links filters to results visually */}
        <div
          className="flex items-center gap-2 px-3 py-2 rounded-lg"
          style={{ backgroundColor: "#EEF2F7" }}
        >
          <div
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ backgroundColor: "#F5A623" }}
          />
          <p className="text-xs" style={{ color: "#6B7A8D" }}>
            Showing results for:{" "}
            <span className="font-semibold" style={{ color: "#1A2E4A" }}>
              Engineering
            </span>
          </p>
          <span
            className="ml-auto text-xs font-medium"
            style={{ color: "#6B7A8D" }}
          >
            {programs.length} programmes
          </span>
        </div>

        {/* Results */}
        <div className="space-y-3">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-4 border space-y-3"
              style={{ borderColor: "#E5E9EE" }}
            >
              <div>
                <h3
                  className="font-semibold mb-1"
                  style={{ fontSize: "17px", color: "#1A2E4A", lineHeight: "1.3" }}
                >
                  {program.title}
                </h3>
                <p className="text-sm" style={{ color: "#6B7A8D" }}>
                  {program.institution}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <span
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{ backgroundColor: "#E8EDF2", color: "#1A2E4A" }}
                >
                  {program.nqf}
                </span>
                <span
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{ backgroundColor: "#E8EDF2", color: "#1A2E4A" }}
                >
                  {program.duration}
                </span>
              </div>

              <button
                className="w-full py-3 rounded-xl font-semibold min-h-[48px] transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#1A2E4A", color: "#FFFFFF", fontSize: "15px" }}
              >
                View Programme
              </button>
            </div>
          ))}
        </div>
      </div>

      <BottomNav activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  );
}