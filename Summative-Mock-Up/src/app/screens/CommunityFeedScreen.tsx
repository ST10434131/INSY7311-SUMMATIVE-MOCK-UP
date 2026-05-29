import { TopBar } from "../components/TopBar";
import { BottomNav } from "../components/BottomNav";
import { Heart, MessageCircle, Pencil, Share2 } from "lucide-react";

const posts = [
  {
    initials: "TM",
    avatarBg: "#1A2E4A",
    avatarColor: "#F5A623",
    username: "Thabo M.",
    timestamp: "2 hours ago",
    content: "Just submitted my NRF application! Fingers crossed - any tips for the interview stage?",
    likes: 24,
    comments: 8,
  },
  {
    initials: "NK",
    avatarBg: "#3DBE7E",
    avatarColor: "#FFFFFF",
    username: "Naledi K.",
    timestamp: "5 hours ago",
    content: "Shout out to everyone juggling postgrad studies and work. You are not alone - we got this.",
    likes: 56,
    comments: 15,
  },
  {
    initials: "SD",
    avatarBg: "#F5A623",
    avatarColor: "#1A2E4A",
    username: "Sipho D.",
    timestamp: "1 day ago",
    content: "Does anyone have experience with the SAQA verification process? How long does it typically take?",
    likes: 12,
    comments: 6,
  },
  {
    initials: "AM",
    avatarBg: "#6B7A8D",
    avatarColor: "#FFFFFF",
    username: "Aisha M.",
    timestamp: "2 days ago",
    content: "UCT just opened applications for the postgrad merit bursary - closing end of June. Check the Funding tab!",
    likes: 89,
    comments: 31,
  },
];

export function CommunityFeedScreen({
  activeTab,
  onTabChange,
}: {
  activeTab: string;
  onTabChange: (tab: string) => void;
}) {
  return (
    <div className="min-h-screen pb-20 pt-14" style={{ backgroundColor: "#F7F8FA" }}>
      <TopBar title="Community" />

      <div className="max-w-md mx-auto p-4 space-y-3">

        {/* Section header */}
        <div className="flex items-center justify-between pb-1">
          <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#9AAABB" }}>
            Recent posts
          </p>
          <span
            className="text-xs font-medium px-2 py-0.5 rounded-full"
            style={{ backgroundColor: "#EEF2F7", color: "#6B7A8D" }}
          >
            {posts.length} posts today
          </span>
        </div>

        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-card rounded-2xl p-4 border space-y-3"
            style={{ borderColor: "#E5E9EE" }}
          >
            {/* Avatar + username + timestamp */}
            <div className="flex items-start gap-3">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm"
                style={{
                  backgroundColor: post.avatarBg,
                  color: post.avatarColor,
                  minWidth: "44px",
                }}
                aria-hidden="true"
              >
                {post.initials}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-2">
                  <p className="font-semibold text-sm" style={{ color: "#1A2E4A" }}>
                    {post.username}
                  </p>
                  <span className="text-xs flex-shrink-0" style={{ color: "#9AAABB" }}>
                    {post.timestamp}
                  </span>
                </div>

                <p
                  className="mt-1.5"
                  style={{ fontSize: "15px", color: "#1A2E4A", lineHeight: "1.55" }}
                >
                  {post.content}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div
              className="flex items-center gap-1 pt-1 border-t"
              style={{ borderColor: "#F0F3F6" }}
            >
              <button
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg min-h-[44px] transition-colors hover:bg-gray-50"
                style={{ color: "#6B7A8D" }}
                aria-label={`${post.likes} likes`}
              >
                <Heart className="w-4 h-4" />
                <span className="text-xs font-medium">{post.likes}</span>
              </button>

              <button
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg min-h-[44px] transition-colors hover:bg-gray-50"
                style={{ color: "#6B7A8D" }}
                aria-label={`${post.comments} comments`}
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-xs font-medium">{post.comments}</span>
              </button>

              <button
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg min-h-[44px] ml-auto transition-colors hover:bg-gray-50"
                style={{ color: "#6B7A8D" }}
                aria-label="Share post"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* FAB — create new post */}
      <button
        className="fixed bottom-24 right-4 w-14 h-14 rounded-full shadow-lg flex items-center justify-center"
        style={{ backgroundColor: "#F5A623" }}
        aria-label="Create new post"
      >
        <Pencil className="w-6 h-6" style={{ color: "#1A2E4A" }} />
      </button>

      <BottomNav activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  );
}