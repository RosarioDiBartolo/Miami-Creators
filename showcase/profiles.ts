export type Profile = {
  id: string;
  category: string;
  title: string;
  bio: string;
  platforms: string[];
  photo: string;
  tags: string[];
  links: { label: string; url: string }[];
};

// Public-facing snapshot from the original catalog, 2026-11-06.
// Portfolio use authorized by the project owner in this chat.
// No application ids, private contacts, tokens, ratings or performance claims.
export const profiles: Profile[] = [
  {
    id: "alana-hunter",
    title: "Alana Hunter",
    category: "Lifestyle",
    bio: "Lifestyle creator that loves to travel and create content about fashion and beauty trends",
    platforms: ["Instagram", "TikTok"],
    photo: "/creators/alana-hunter.jpg",
    tags: ["Fashion", "Travel", "Beauty", "Food & drink", "UGC"],
    links: [
      { label: "Instagram", url: "https://instagram.com/alanasunny" },
      { label: "TikTok", url: "https://tiktok.com/@alanasunny10" },
    ],
  },
  {
    id: "julia-see",
    title: "Julia See",
    category: "Food & drink",
    bio: "I'm a medical student by day and foodie by night. While I predominantly create F&B content, I am open to expanding my niches.",
    platforms: ["Instagram", "TikTok"],
    photo: "/creators/julia-see.png",
    tags: ["Food & drink", "UGC", "Miami lifestyle"],
    links: [
      { label: "Instagram", url: "https://www.instagram.com/hungryorsnacky/" },
      {
        label: "TikTok",
        url: "https://www.tiktok.com/@hungryorsnacky?lang=en",
      },
    ],
  },
  {
    id: "daniella-pita",
    title: "Daniella Pita",
    category: "Beauty",
    bio: "Content creator based in Miami that specializes in beauty, skincare, fashion content on Tiktok",
    platforms: ["Instagram", "TikTok"],
    photo: "/creators/daniella-pita.png",
    tags: [
      "Fashion",
      "Beauty",
      "Skincare",
      "Self improvement",
      "Miami lifestyle",
    ],
    links: [
      { label: "Instagram", url: "https://instagram.com/daniipitaa" },
      { label: "TikTok", url: "https://tiktok.com/@danipita" },
    ],
  },
  {
    id: "sabina-ruzmetov",
    title: "Sabina Ruzmetov",
    category: "Fashion",
    bio: "My name is Sabina Ruzmetov and I am a content creator on Instagram based out of Miami, Florida. I mainly focus on lifestyle and fashion, additionally I love to incorporate my bengal cat in my content.",
    platforms: ["Instagram"],
    photo: "/creators/sabina-ruzmetov.jpg",
    tags: ["Fashion", "Gym lifestyle", "Beauty", "Travel", "Luxury lifestyle"],
    links: [],
  },
];
