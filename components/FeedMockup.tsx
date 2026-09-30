"use client";
import { useState } from "react";
import { Heart, Landmark, MessageCircle, ShieldCheck, Swords } from "lucide-react";

const TWEETS = [
  {
    id: 1,
    avatar: "S",
    color: "bg-keylime-wash text-forest-ink",
    name: "Sarah Chen",
    handle: "@sarahchen",
    time: "2m",
    text: "Just finished reading an amazing book on urban architecture. The way cities evolve over decades is genuinely fascinating. Any recommendations?",
    hidden: false,
    category: null,
    likes: "189",
    replies: "12",
  },
  {
    id: 2,
    avatar: <Landmark className="size-4" />,
    color: "bg-mint-veil text-forest-ink",
    name: "Hidden",
    handle: "",
    time: "",
    text: "",
    hidden: true,
    category: "Politics",
    keyword: "election",
    likes: "",
    replies: "",
  },
  {
    id: 3,
    avatar: "M",
    color: "bg-slate-hush text-forest-ink",
    name: "Marcus Rivera",
    handle: "@marcusdev",
    time: "8m",
    text: "TypeScript generics are actually beautiful once you understand them. Spent 2 hours debugging yesterday and now I get it",
    hidden: false,
    category: null,
    likes: "441",
    replies: "45",
  },
  {
    id: 4,
    avatar: <Swords className="size-4" />,
    color: "bg-mint-veil text-forest-ink",
    name: "Hidden",
    handle: "",
    time: "",
    text: "",
    hidden: true,
    category: "War & Conflict",
    keyword: "ceasefire",
    likes: "",
    replies: "",
  },
  {
    id: 5,
    avatar: "A",
    color: "bg-sage-mist text-forest-ink",
    name: "Aiko Tanaka",
    handle: "@aiko_t",
    time: "15m",
    text: "Café morning in Kyoto. There's something timeless about sitting by the window when it's raining outside.",
    hidden: false,
    category: null,
    likes: "312",
    replies: "8",
  },
];

export function FeedMockup() {
  const [revealed, setReveal] = useState<Set<number>>(new Set());

  return (
    <div>
      <div className="rounded-xl overflow-hidden bg-cream-paper">
        {/* URL bar */}
        <div className="px-4.5 py-3.5 flex items-center justify-between gap-3 border-b text-[12px]">
          <span className="text-charcoal">x.com/home</span>
          <span className="inline-flex items-center gap-1 text-forest-ink">
            <ShieldCheck className="size-3.5" />
            ZenX active
          </span>
        </div>

        {/* Feed header */}
        <div className="px-4.5 py-3.5 flex items-center justify-between border-b">
          <span className="text-body font-semibold text-forest-ink">For You</span>
          <span className="text-[12px] text-forest-ink bg-keylime-wash px-2.75 py-1 rounded-full">
            2 hidden
          </span>
        </div>

        {TWEETS.map((tweet) => {
          if (tweet.hidden && !revealed.has(tweet.id)) {
            return (
              <div
                key={tweet.id}
                className="px-4.5 py-3.5 flex items-center justify-between gap-3 border-b bg-keylime-wash"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`size-8 rounded-full flex items-center justify-center shrink-0 ${tweet.color}`}
                  >
                    {tweet.avatar}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[12px] text-charcoal">Tweet hidden by ZenX</p>
                    <span className="inline-block mt-1 text-[11px] px-2.25 py-0.5 rounded-full bg-cream-paper text-forest-ink">
                      {tweet.category} · &quot;{tweet.keyword}&quot;
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setReveal((p) => new Set([...p, tweet.id]))}
                  className="shrink-0 text-[12px] text-cream-paper bg-forest-ink hover:bg-forest-shadow px-3.5 py-1.75 rounded-xl transition-colors cursor-pointer"
                >
                  Reveal
                </button>
              </div>
            );
          }

          if (tweet.hidden) {
            return (
              <div
                key={tweet.id}
                className="px-4.5 py-3.5 flex gap-3 border-b bg-mint-veil"
              >
                <div className="size-8 rounded-full bg-cream-paper text-forest-ink flex items-center justify-center shrink-0">
                  {tweet.avatar}
                </div>
                <div>
                  <p className="text-[12px] text-charcoal italic">
                    This tweet was filtered ({tweet.category})
                  </p>
                  <p className="text-[12px] text-charcoal/70 mt-1">
                    Placeholder revealed tweet content...
                  </p>
                </div>
              </div>
            );
          }

          return (
            <div
              key={tweet.id}
              className="px-4.5 py-4.5 flex gap-3 border-b last:border-0"
            >
              <div
                className={`size-9 rounded-full flex items-center justify-center text-body font-semibold shrink-0 ${tweet.color}`}
              >
                {tweet.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-1 text-[12px]">
                  <span className="text-[13px] font-semibold text-charcoal truncate">
                    {tweet.name}
                  </span>
                  <span className="text-charcoal/70">{tweet.handle}</span>
                  <span className="text-charcoal/70">· {tweet.time}</span>
                </div>
                <p className="text-[13px] text-charcoal leading-relaxed">{tweet.text}</p>
                <div className="flex gap-5 mt-2.5 text-[11px] text-charcoal/70">
                  <span className="inline-flex items-center gap-1">
                    <MessageCircle className="size-3.5" /> {tweet.replies}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Heart className="size-3.5" /> {tweet.likes}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-center text-[12px] text-charcoal mt-3.5">
        Interactive preview — click &quot;Reveal&quot; to peek at a hidden tweet
      </p>
    </div>
  );
}
