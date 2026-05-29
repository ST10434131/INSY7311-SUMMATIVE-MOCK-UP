import { GraduationCap, FileCheck, MessageCircle } from "lucide-react";

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const tabs = [
    {
      id: "explore",
      label: "Explore",
      icon: ({ isActive }: { isActive: boolean }) => (
        <GraduationCap className="w-6 h-6" strokeWidth={isActive ? 2.5 : 1.8} />
      ),
    },
    {
      id: "funding",
      label: "Funding",
      icon: ({ isActive }: { isActive: boolean }) => (
        <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth={isActive ? 2.5 : 1.8}
  strokeLinecap="round"
  strokeLinejoin="round"
>
  {/* Vertical stem */}
  <line x1="7" y1="4" x2="7" y2="20" />
  {/* Top curve / bump */}
  <path d="M7 4h5a4 4 0 0 1 0 8H7" />
  {/* Diagonal leg */}
  <line x1="12" y1="12" x2="17" y2="20" />
</svg>
      ),
    },
    {
      id: "saqa",
      label: "SAQA",
      icon: ({ isActive }: { isActive: boolean }) => (
        <FileCheck className="w-6 h-6" strokeWidth={isActive ? 2.5 : 1.8} />
      ),
    },
    {
      id: "community",
      label: "Community",
      icon: ({ isActive }: { isActive: boolean }) => (
        <MessageCircle className="w-6 h-6" strokeWidth={isActive ? 2.5 : 1.8} />
      ),
    },
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 bg-card border-t z-50"
      style={{ borderColor: "#E5E9EE", minHeight: "72px" }}
    >
      <div className="flex items-center justify-around h-full px-2 max-w-md mx-auto">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className="relative flex flex-col items-center justify-center gap-1 py-2 px-4 min-w-[64px] min-h-[56px] transition-colors"
              style={{ color: isActive ? "#F5A623" : "#6B7A8D" }}
              aria-label={tab.label}
              aria-current={isActive ? "page" : undefined}
            >
              {/* Active indicator bar */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 rounded-full transition-all duration-200"
                style={{
                  width: isActive ? "24px" : "0px",
                  height: "3px",
                  backgroundColor: isActive ? "#F5A623" : "transparent",
                }}
              />

              <Icon isActive={isActive} />

              <span
                className="text-xs transition-all"
                style={{
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? "#F5A623" : "#6B7A8D",
                }}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}