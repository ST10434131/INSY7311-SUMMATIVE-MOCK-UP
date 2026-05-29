import { Bell, Menu, ArrowLeft } from "lucide-react";

interface TopBarProps {
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
}

export function TopBar({ title = "GradLife SA", showBack = false, onBack }: TopBarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-card border-b border-border z-10">
      <div className="flex items-center justify-between h-14 px-4 max-w-md mx-auto">
        <div className="flex items-center gap-3">
          {showBack && onBack ? (
            <button
              onClick={onBack}
              className="min-w-[48px] min-h-[48px] flex items-center justify-center -ml-3"
              aria-label="Go back"
            >
              <ArrowLeft className="w-6 h-6" style={{ color: "#1A2E4A" }} />
            </button>
          ) : (
            <h1 className="font-bold" style={{ color: "#1A2E4A" }}>{title}</h1>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            className="min-w-[48px] min-h-[48px] flex items-center justify-center"
            aria-label="Notifications"
          >
            <Bell className="w-6 h-6" style={{ color: "#1A2E4A" }} />
          </button>
          <button
            className="min-w-[48px] min-h-[48px] flex items-center justify-center"
            aria-label="Menu"
          >
            <Menu className="w-6 h-6" style={{ color: "#1A2E4A" }} />
          </button>
        </div>
      </div>
    </header>
  );
}
