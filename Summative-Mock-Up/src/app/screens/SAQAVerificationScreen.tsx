import { TopBar } from "../components/TopBar";
import { BottomNav } from "../components/BottomNav";
import { FileText, Upload, CheckCircle2, Clock, Phone, Mail } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: FileText,
    title: "Gather Required Documents",
    description:
      "Certified copies of your qualification certificate and academic transcript. Documents must be certified within the last 3 months.",
    status: "complete",
  },
  {
    number: 2,
    icon: Upload,
    title: "Submit Online Application",
    description:
      "Visit the SAQA website and complete the online verification form. Have your ID number and institution details ready.",
    status: "current",
  },
  {
    number: 3,
    icon: Clock,
    title: "Pay Verification Fee",
    description:
      "Current fee is R150 per qualification. Payment accepted via EFT or credit card through the SAQA portal.",
    status: "pending",
  },
  {
    number: 4,
    icon: CheckCircle2,
    title: "Receive Verification Certificate",
    description:
      "Process typically takes 10–15 working days. Your certificate will be sent to your registered email address.",
    status: "pending",
  },
];

const PROGRESS_PERCENT = 25;

export function SAQAVerificationScreen({
  activeTab,
  onTabChange,
}: {
  activeTab: string;
  onTabChange: (tab: string) => void;
}) {
  return (
    <div className="min-h-screen pb-20 pt-14" style={{ backgroundColor: "#F7F8FA" }}>
      <TopBar title="SAQA Verification" />

      <div className="max-w-md mx-auto p-4 space-y-4">

        {/* Header card */}
        <div
          className="bg-card rounded-2xl p-4 border"
          style={{ borderColor: "#F5A623" }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "#F5A623" }}
            >
              <FileText className="w-5 h-5" style={{ color: "#1A2E4A" }} />
            </div>
            <div>
              <h2 className="font-bold" style={{ fontSize: "17px", color: "#1A2E4A" }}>
                Verification Guide
              </h2>
              <p style={{ fontSize: "13px", color: "#6B7A8D" }}>
                Follow the steps below to verify your qualification
              </p>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div
          className="bg-card rounded-xl p-4 border"
          style={{ borderColor: "#E5E9EE" }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold" style={{ color: "#1A2E4A" }}>
              Your progress
            </span>
            <span
              className="text-xs font-semibold px-2 py-0.5 rounded-full"
              style={{ backgroundColor: "#FFF4E0", color: "#F5A623" }}
            >
              Step 2 of 4
            </span>
          </div>
          <div
            className="w-full h-2 rounded-full overflow-hidden"
            style={{ backgroundColor: "#EEF2F7" }}
          >
            <div
              className="h-full rounded-full transition-all"
              style={{ width: `${PROGRESS_PERCENT}%`, backgroundColor: "#F5A623" }}
            />
          </div>
          <div className="flex justify-between mt-2">
            {steps.map((step) => (
              <span
                key={step.number}
                className="text-xs"
                style={{
                  color:
                    step.status === "complete"
                      ? "#3DBE7E"
                      : step.status === "current"
                      ? "#F5A623"
                      : "#C5CDD8",
                  fontWeight: step.status === "current" ? 600 : 400,
                }}
              >
                {step.number}
              </span>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector line */}
          <div
            className="absolute left-6 top-6 bottom-6 w-0.5"
            style={{ backgroundColor: "#E5E9EE" }}
          />

          <div className="space-y-4">
            {steps.map((step) => {
              const Icon = step.icon;
              const isComplete = step.status === "complete";
              const isCurrent = step.status === "current";
              const isPending = step.status === "pending";

              return (
                <div key={step.number} className="relative flex gap-4">

                  {/* Step number circle */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm"
                    style={{
                      backgroundColor: isComplete
                        ? "#3DBE7E"
                        : isCurrent
                        ? "#F5A623"
                        : "#FFFFFF",
                      color: isComplete
                        ? "#FFFFFF"
                        : isCurrent
                        ? "#1A2E4A"
                        : "#C5CDD8",
                      border: isPending ? "2px solid #E5E9EE" : "none",
                    }}
                  >
                    {isComplete ? (
                      <CheckCircle2 className="w-6 h-6" style={{ color: "#FFFFFF" }} />
                    ) : (
                      step.number
                    )}
                  </div>

                  {/* Step card */}
                  <div className="flex-1 pb-4">
                    <div
                      className="bg-card rounded-xl p-4 border"
                      style={{
                        borderColor: isComplete
                          ? "#3DBE7E"
                          : isCurrent
                          ? "#F5A623"
                          : "#E5E9EE",
                        opacity: isPending ? 0.7 : 1,
                      }}
                    >
                      <div className="flex items-start gap-3 mb-1">
                        <Icon
                          className="w-5 h-5 mt-0.5 flex-shrink-0"
                          style={{
                            color: isComplete
                              ? "#3DBE7E"
                              : isCurrent
                              ? "#F5A623"
                              : "#C5CDD8",
                          }}
                        />
                        <div className="flex-1">
                          <h3
                            className="font-semibold mb-1"
                            style={{
                              fontSize: "15px",
                              color: isPending ? "#9AAABB" : "#1A2E4A",
                            }}
                          >
                            {step.title}
                          </h3>
                          <p
                            style={{
                              fontSize: "13px",
                              color: isPending ? "#B0BEC5" : "#6B7A8D",
                              lineHeight: "1.55",
                            }}
                          >
                            {step.description}
                          </p>
                        </div>
                      </div>

                      {/* Completed badge */}
                      {isComplete && (
                        <div className="mt-3">
                          <div
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
                            style={{ backgroundColor: "#DCFAEE" }}
                          >
                            <CheckCircle2
                              className="w-4 h-4"
                              style={{ color: "#3DBE7E" }}
                            />
                            <span
                              className="text-xs font-semibold"
                              style={{ color: "#1A2E4A" }}
                            >
                              Completed
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Current step CTA */}
                      {isCurrent && (
                        <button
                          className="mt-3 w-full py-2.5 rounded-lg font-semibold min-h-[48px]"
                          style={{
                            backgroundColor: "#F5A623",
                            color: "#1A2E4A",
                            fontSize: "14px",
                          }}
                        >
                          Start This Step
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Help card */}
        <div
          className="bg-card rounded-2xl p-4 border"
          style={{ borderColor: "#E5E9EE" }}
        >
          <h3
            className="font-semibold mb-1"
            style={{ fontSize: "15px", color: "#1A2E4A" }}
          >
            Need Help?
          </h3>
          <p
            className="mb-3"
            style={{ fontSize: "13px", color: "#6B7A8D", lineHeight: "1.5" }}
          >
            Contact SAQA directly for assistance with your verification application.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 flex-shrink-0" style={{ color: "#6B7A8D" }} />
              <p className="text-sm" style={{ color: "#1A2E4A" }}>
                verification@saqa.org.za
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 flex-shrink-0" style={{ color: "#6B7A8D" }} />
              <p className="text-sm" style={{ color: "#1A2E4A" }}>
                086 010 3188
              </p>
            </div>
          </div>
        </div>

      </div>

      <BottomNav activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  );
}