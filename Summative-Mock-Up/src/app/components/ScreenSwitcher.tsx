import { Menu, X } from "lucide-react";
import { useState } from "react";

interface ScreenSwitcherProps {
  currentScreen: string;
  onScreenChange: (screen: string) => void;
}

export function ScreenSwitcher({ currentScreen, onScreenChange }: ScreenSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);

  const screens = [
    { id: "onboarding", label: "1. Onboarding (Affordance)", principle: "Norman" },
    { id: "funding-success", label: "2. Funding Success (Feedback)", principle: "Norman" },
    { id: "profile-setup", label: "3. Profile Setup (Constraints)", principle: "Norman" },
    { id: "explore", label: "4. Postgrad Explorer (Mapping)", principle: "Norman" },
    { id: "community", label: "5. Community Feed (Visibility)", principle: "Norman" },
    { id: "funding-browse", label: "6. Funding Browse (Hierarchy)", principle: "LU6" },
    { id: "saqa", label: "7. SAQA Verification (Simplicity)", principle: "LU6" },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-36 right-4 z-50 w-12 h-12 rounded-full flex items-center justify-center"
        style={{ backgroundColor: "transparent", opacity: 0 }}
        aria-label="Screen switcher menu"
      />

      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          onClick={() => setIsOpen(false)}
        >
          <div
            className="absolute bottom-52 right-4 left-4 max-w-md mx-auto bg-card rounded-2xl shadow-2xl p-4 space-y-2"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-bold mb-3" style={{ fontSize: "18px", color: "#1A2E4A" }}>
              Navigate Screens
            </h3>

            {screens.map((screen) => (
              <button
                key={screen.id}
                onClick={() => {
                  onScreenChange(screen.id);
                  setIsOpen(false);
                }}
                className="w-full text-left p-3 rounded-xl transition-colors"
                style={{
                  backgroundColor: currentScreen === screen.id ? "#F5A623" : "transparent",
                  color: currentScreen === screen.id ? "#1A2E4A" : "#6B7A8D",
                }}
              >
                <div className="font-semibold">{screen.label}</div>
                <div className="text-xs mt-1" style={{ opacity: 0.8 }}>
                  {screen.principle} Design Principle
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}