import { TopBar } from "../components/TopBar";
import { Eye, EyeOff, Lock } from "lucide-react";
import { useState } from "react";

function Toggle({ enabled, onToggle }: { enabled: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="relative inline-flex items-center flex-shrink-0 cursor-pointer"
      style={{ width: "44px", height: "24px" }}
      aria-checked={enabled}
      role="switch"
    >
      <div
        className="w-full h-full rounded-full transition-colors duration-200"
        style={{ backgroundColor: enabled ? "#3DBE7E" : "#CBD5E1" }}
      />
      <div
        className="absolute top-[2px] h-5 w-5 rounded-full bg-white transition-transform duration-200"
        style={{ transform: enabled ? "translateX(22px)" : "translateX(2px)" }}
      />
    </button>
  );
}

export function ProfileSetupScreen({ onComplete }: { onComplete: () => void }) {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedInstitution, setSelectedInstitution] = useState("");
  const [selectedNQF, setSelectedNQF] = useState("");
  const [selectedField, setSelectedField] = useState("");
  const [deadlineReminders, setDeadlineReminders] = useState(true);
  const [communityUpdates, setCommunityUpdates] = useState(true);
  const [weeklyDigest, setWeeklyDigest] = useState(false);

  return (
    <div className="min-h-screen pb-8 pt-14" style={{ backgroundColor: "#F7F8FA" }}>
      <TopBar title="Profile Setup" showBack onBack={onComplete} />

      <div className="max-w-md mx-auto p-4 space-y-6">
        <div className="space-y-2">
          <h2 className="font-bold" style={{ fontSize: "24px", color: "#1A2E4A" }}>
            Create Your Profile
          </h2>
          <p style={{ fontSize: "16px", color: "#6B7A8D" }}>
            Help us personalise your GradLife experience
          </p>
        </div>

        <div className="space-y-6">

          {/* Section 1: Academic Information */}
          <div className="bg-card rounded-2xl p-4 space-y-4 border border-border">
            <h3 className="font-semibold" style={{ fontSize: "16px", color: "#1A2E4A" }}>
              Academic Information
            </h3>

            <div className="space-y-2">
              <label htmlFor="institution" className="block text-sm font-medium" style={{ color: "#1A2E4A" }}>
                Institution
              </label>
              <select
                id="institution"
                value={selectedInstitution}
                onChange={(e) => setSelectedInstitution(e.target.value)}
                className="w-full p-3 rounded-xl border border-border bg-input-background min-h-[48px]"
                style={{ color: selectedInstitution ? "#1A2E4A" : "#6B7A8D" }}
                aria-label="Select your institution"
              >
                <option value="">Select your institution</option>
                <option value="uct">University of Cape Town</option>
                <option value="wits">University of the Witwatersrand</option>
                <option value="stellenbosch">Stellenbosch University</option>
                <option value="up">University of Pretoria</option>
                <option value="ukzn">University of KwaZulu-Natal</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="nqf-level" className="block text-sm font-medium" style={{ color: "#1A2E4A" }}>
                NQF Level
              </label>
              <select
                id="nqf-level"
                value={selectedNQF}
                onChange={(e) => { setSelectedNQF(e.target.value); setSelectedField(""); }}
                className="w-full p-3 rounded-xl border border-border bg-input-background min-h-[48px]"
                style={{ color: selectedNQF ? "#1A2E4A" : "#6B7A8D" }}
                aria-label="Select your NQF level"
              >
                <option value="">Select NQF level</option>
                <option value="7">NQF 7 — Bachelor's Degree</option>
                <option value="8">NQF 8 — Honours</option>
                <option value="9">NQF 9 — Master's</option>
                <option value="10">NQF 10 — Doctorate</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="field-of-study" className="block text-sm font-medium" style={{ color: selectedNQF ? "#1A2E4A" : "#9AAABB" }}>
                Field of Study
              </label>
              <select
                id="field-of-study"
                value={selectedField}
                onChange={(e) => setSelectedField(e.target.value)}
                className="w-full p-3 rounded-xl border border-border min-h-[48px] transition-all"
                style={{
                  color: selectedField ? "#1A2E4A" : "#9AAABB",
                  backgroundColor: selectedNQF ? "#F3F3F5" : "#ECEEF2",
                  opacity: selectedNQF ? 1 : 0.7,
                  cursor: selectedNQF ? "pointer" : "not-allowed",
                }}
                disabled={!selectedNQF}
                aria-label="Select your field of study"
                aria-disabled={!selectedNQF}
              >
                <option value="">
                  {selectedNQF ? "Select field of study" : "Select NQF level first"}
                </option>
                <option value="engineering">Engineering</option>
                <option value="sciences">Natural Sciences</option>
                <option value="humanities">Humanities</option>
                <option value="commerce">Commerce</option>
                <option value="health">Health Sciences</option>
              </select>
              {!selectedNQF && (
                <div className="flex items-center gap-1.5 mt-1">
                  <Lock className="w-3 h-3 flex-shrink-0" style={{ color: "#9AAABB" }} />
                  <p className="text-xs" style={{ color: "#9AAABB" }}>
                    Select an NQF level first to unlock this field
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Section 2: Contact & Account */}
          <div className="bg-card rounded-2xl p-4 space-y-4 border border-border">
            <h3 className="font-semibold" style={{ fontSize: "16px", color: "#1A2E4A" }}>
              Contact &amp; Account
            </h3>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium" style={{ color: "#1A2E4A" }}>
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="your.email@university.ac.za"
                className="w-full p-3 rounded-xl border border-border bg-input-background min-h-[48px]"
                style={{ color: "#1A2E4A" }}
                aria-label="Enter your email address"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium" style={{ color: "#1A2E4A" }}>
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a secure password"
                  className="w-full p-3 pr-12 rounded-xl border border-border bg-input-background min-h-[48px]"
                  style={{ color: "#1A2E4A" }}
                  aria-label="Create a password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 min-w-[48px] min-h-[48px] flex items-center justify-center"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" style={{ color: "#6B7A8D" }} />
                  ) : (
                    <Eye className="w-5 h-5" style={{ color: "#6B7A8D" }} />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Section 3: Preferences */}
          <div className="bg-card rounded-2xl p-4 space-y-4 border border-border">
            <h3 className="font-semibold" style={{ fontSize: "16px", color: "#1A2E4A" }}>
              Preferences
            </h3>

            <div className="flex items-center justify-between min-h-[48px]">
              <div className="flex-1 pr-4">
                <p className="font-medium text-sm" style={{ color: "#1A2E4A" }}>
                  Funding deadline reminders
                </p>
                <p className="text-xs" style={{ color: "#6B7A8D" }}>
                  Get notified before bursary deadlines
                </p>
              </div>
              <Toggle enabled={deadlineReminders} onToggle={() => setDeadlineReminders(!deadlineReminders)} />
            </div>

            <div className="flex items-center justify-between min-h-[48px]">
              <div className="flex-1 pr-4">
                <p className="font-medium text-sm" style={{ color: "#1A2E4A" }}>
                  Community updates
                </p>
                <p className="text-xs" style={{ color: "#6B7A8D" }}>
                  Stay updated on community discussions
                </p>
              </div>
              <Toggle enabled={communityUpdates} onToggle={() => setCommunityUpdates(!communityUpdates)} />
            </div>

            <div className="flex items-center justify-between min-h-[48px]">
              <div className="flex-1 pr-4">
                <p className="font-medium text-sm" style={{ color: "#1A2E4A" }}>
                  Weekly digest
                </p>
                <p className="text-xs" style={{ color: "#6B7A8D" }}>
                  Receive a weekly summary of opportunities
                </p>
              </div>
              <Toggle enabled={weeklyDigest} onToggle={() => setWeeklyDigest(!weeklyDigest)} />
            </div>
          </div>

          <button
            onClick={onComplete}
            className="w-full py-4 px-6 rounded-xl font-semibold min-h-[48px]"
            style={{ backgroundColor: "#F5A623", color: "#1A2E4A", fontSize: "16px" }}
          >
            Complete Setup
          </button>

        </div>
      </div>
    </div>
  );
}