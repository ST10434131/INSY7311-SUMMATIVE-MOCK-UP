import { GraduationCap, ArrowRight } from "lucide-react";

export function OnboardingScreen({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6" style={{ backgroundColor: "#F7F8FA" }}>
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="space-y-4">
          <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center" style={{ backgroundColor: "#1A2E4A" }}>
            <GraduationCap className="w-12 h-12" style={{ color: "#F5A623" }} />
          </div>

          <h1 className="font-bold" style={{ fontSize: "32px", color: "#1A2E4A", lineHeight: "1.2" }}>
            Welcome to<br />GradLife SA
          </h1>

          <p style={{ fontSize: "18px", color: "#6B7A8D", lineHeight: "1.6" }}>
            Your postgrad journey, simplified.
          </p>
        </div>

        <div className="space-y-4 pt-8">
          <p style={{ fontSize: "16px", color: "#1A2E4A", lineHeight: "1.6" }}>
            Navigate postgraduate study, find funding opportunities, verify SAQA qualifications, and connect with a community of South African students.
          </p>
        </div>

        <div className="pt-12">
          <button
            onClick={onGetStarted}
            className="w-full py-4 px-6 rounded-xl font-semibold transition-all min-h-[48px] flex items-center justify-center"
            style={{
              backgroundColor: "#F5A623",
              color: "#1A2E4A",
              fontSize: "20px",
              letterSpacing: "0.5px",
              boxShadow: "0 4px 12px rgba(245, 166, 35, 0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 16px rgba(245, 166, 35, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(245, 166, 35, 0.3)";
            }}
            aria-label="Get started with GradLife SA"
          >
            Get Started
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>

          <p className="mt-4" style={{ fontSize: "14px", color: "#6B7A8D" }}>
            Trusted by students at UCT, Wits, Stellenbosch, UP and more.
          </p>
        </div>
      </div>
    </div>
  );
}
