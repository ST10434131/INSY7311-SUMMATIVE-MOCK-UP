import { useState } from "react";
import { OnboardingScreen } from "./screens/OnboardingScreen";
import { FundingSuccessScreen } from "./screens/FundingSuccessScreen";
import { ProfileSetupScreen } from "./screens/ProfileSetupScreen";
import { PostgradExplorerScreen } from "./screens/PostgradExplorerScreen";
import { CommunityFeedScreen } from "./screens/CommunityFeedScreen";
import { FundingBrowseScreen } from "./screens/FundingBrowseScreen";
import { SAQAVerificationScreen } from "./screens/SAQAVerificationScreen";
import { ScreenSwitcher } from "./components/ScreenSwitcher";

type Screen =
  | "onboarding"
  | "profile-setup"
  | "explore"
  | "funding"
  | "funding-success"
  | "saqa"
  | "community"
  | "funding-browse";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("onboarding");
  const [activeTab, setActiveTab] = useState<string>("explore");

  const handleGetStarted = () => {
    setCurrentScreen("profile-setup");
  };

  const handleProfileComplete = () => {
    setCurrentScreen("explore");
    setActiveTab("explore");
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);

    switch (tab) {
      case "explore":
        setCurrentScreen("explore");
        break;
      case "funding":
        setCurrentScreen("funding-browse");
        break;
      case "saqa":
        setCurrentScreen("saqa");
        break;
      case "community":
        setCurrentScreen("community");
        break;
    }
  };

  const handleScreenChange = (screen: Screen) => {
    setCurrentScreen(screen);

    if (screen === "explore" || screen === "funding-browse" || screen === "saqa" || screen === "community") {
      const tabMap: Record<string, string> = {
        explore: "explore",
        "funding-browse": "funding",
        "funding-success": "funding",
        saqa: "saqa",
        community: "community",
      };
      setActiveTab(tabMap[screen] || "explore");
    }
  };

  return (
    <div className="size-full" style={{ maxWidth: "448px", margin: "0 auto", fontFamily: "Inter, system-ui, sans-serif" }}>
      <ScreenSwitcher currentScreen={currentScreen} onScreenChange={handleScreenChange} />

      {currentScreen === "onboarding" && (
        <OnboardingScreen onGetStarted={handleGetStarted} />
      )}

      {currentScreen === "profile-setup" && (
        <ProfileSetupScreen onComplete={handleProfileComplete} />
      )}

      {currentScreen === "explore" && (
        <PostgradExplorerScreen activeTab={activeTab} onTabChange={handleTabChange} />
      )}

      {currentScreen === "funding-success" && (
        <FundingSuccessScreen activeTab={activeTab} onTabChange={handleTabChange} />
      )}

      {currentScreen === "funding-browse" && (
        <FundingBrowseScreen activeTab={activeTab} onTabChange={handleTabChange} />
      )}

      {currentScreen === "saqa" && (
        <SAQAVerificationScreen activeTab={activeTab} onTabChange={handleTabChange} />
      )}

      {currentScreen === "community" && (
        <CommunityFeedScreen activeTab={activeTab} onTabChange={handleTabChange} />
      )}
    </div>
  );
}