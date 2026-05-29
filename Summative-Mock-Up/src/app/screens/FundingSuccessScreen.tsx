import { TopBar } from "../components/TopBar";
import { BottomNav } from "../components/BottomNav";
import { Bookmark, Clock, DollarSign, GraduationCap, Search, X } from "lucide-react";
import { useState } from "react";

export function FundingSuccessScreen({ activeTab, onTabChange }: { activeTab: string; onTabChange: (tab: string) => void }) {
  const [showToast, setShowToast] = useState(true);

  return (
    <div className="min-h-screen pb-20 pt-14" style={{ backgroundColor: "#F7F8FA" }}>
      <TopBar title="Funding Finder" />

      <div className="max-w-md mx-auto p-4 space-y-4">
        <div className="flex items-center gap-2 p-3 bg-card rounded-lg">
          <Search className="w-5 h-5" style={{ color: "#6B7A8D" }} />
          <input
            type="search"
            placeholder="Search bursaries and scholarships..."
            className="flex-1 bg-transparent outline-none"
            style={{ color: "#1A2E4A", minHeight: "48px" }}
            aria-label="Search bursaries and scholarships"
          />
        </div>

        <div className="space-y-3">
          <div className="bg-card rounded-2xl p-4 border border-border space-y-3">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-semibold mb-1" style={{ fontSize: "18px", color: "#1A2E4A" }}>
                  National Research Foundation Bursary
                </h3>
                <p style={{ fontSize: "14px", color: "#6B7A8D" }}>
                  Full funding for Masters and PhD students in STEM fields
                </p>
              </div>
              <button
                className="min-w-[48px] min-h-[48px] flex items-center justify-center -mr-2"
                aria-label="Bursary saved"
              >
                <Bookmark className="w-6 h-6" fill="#3DBE7E" stroke="#3DBE7E" />
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs" style={{ backgroundColor: "#E05252", color: "#FFFFFF" }}>
                <Clock className="w-3 h-3" />
                Closes in 3 days
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs" style={{ backgroundColor: "#F7F8FA", color: "#1A2E4A" }}>
                <DollarSign className="w-3 h-3" />
                R120,000/year
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs" style={{ backgroundColor: "#F7F8FA", color: "#1A2E4A" }}>
                <GraduationCap className="w-3 h-3" />
                NQF 9-10
              </span>
            </div>

            <button
              className="w-full py-3 rounded-xl font-semibold min-h-[48px]"
              style={{ backgroundColor: "#1A2E4A", color: "#FFFFFF" }}
            >
              View Details
            </button>
          </div>

          <div className="bg-card rounded-2xl p-4 border border-border space-y-3">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-semibold mb-1" style={{ fontSize: "18px", color: "#1A2E4A" }}>
                  Mandela Rhodes Scholarship
                </h3>
                <p style={{ fontSize: "14px", color: "#6B7A8D" }}>
                  Leadership development and postgraduate funding
                </p>
              </div>
              <button
                className="min-w-[48px] min-h-[48px] flex items-center justify-center -mr-2"
                aria-label="Save bursary"
              >
                <Bookmark className="w-6 h-6" stroke="#6B7A8D" fill="none" />
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs" style={{ backgroundColor: "#F5A623", color: "#1A2E4A" }}>
                <Clock className="w-3 h-3" />
                Closes in 2 weeks
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs" style={{ backgroundColor: "#F7F8FA", color: "#1A2E4A" }}>
                <DollarSign className="w-3 h-3" />
                Full funding
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs" style={{ backgroundColor: "#F7F8FA", color: "#1A2E4A" }}>
                <GraduationCap className="w-3 h-3" />
                NQF 9
              </span>
            </div>

            <button
              className="w-full py-3 rounded-xl font-semibold min-h-[48px]"
              style={{ backgroundColor: "#1A2E4A", color: "#FFFFFF" }}
            >
              View Details
            </button>
          </div>
        </div>
      </div>

      {showToast && (
        <div
          className="fixed bottom-28 left-4 right-4 max-w-md mx-auto p-4 rounded-xl shadow-lg flex items-center gap-3"
          style={{ backgroundColor: "#3DBE7E", color: "#FFFFFF" }}
        >
          <Bookmark className="w-5 h-5 flex-shrink-0" fill="#FFFFFF" />
          <p className="flex-1 font-medium">
            Bursary saved! We'll remind you before the deadline.
          </p>
          <button
            onClick={() => setShowToast(false)}
            className="min-w-[48px] min-h-[48px] flex items-center justify-center -mr-2"
            style={{ color: "#FFFFFF" }}
            aria-label="Dismiss notification"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      <BottomNav activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  );
}
