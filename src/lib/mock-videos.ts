export type TPortfolio = {
  id: number | string;
  title: string;
  category: string;
  src: string;
};

// Mock video data
export const mockVideos: TPortfolio[] = [
  {
    id: 1.0,
    title: "Evening Calm",
    category: "Featured",
    src: "/portfolio/Feature-1.mp4",
  },
  {
    id: 1.1,
    title: "Morning Peace",
    category: "Featured",
    src: "/portfolio/Feature-2.mp4",
  },
  {
    id: 1.2,
    title: "Morning Peace",
    category: "Featured",
    src: "/portfolio/Feature-3.mp4",
  },
  {
    id: 1.3,
    title: "Morning Peace",
    category: "Featured",
    src: "/portfolio/Feature-4.mp4",
  },
  {
    id: 3,
    title: "Deep Focus",
    category: "Rain",
    src: "/portfolio/Rain-1.mp4",
  },
  {
    id: 4,
    title: "Stress Relief",
    category: "Rain",
    src: "/portfolio/Rain-2.mp4",
  },
  {
    id: "rain-3",
    title: "Stress Relief",
    category: "Rain",
    src: "/portfolio/Rain-3.mp4",
  },
  {
    id: 4,
    title: "Stress Relief",
    category: "Rain",
    src: "/portfolio/Rain-4.mp4",
  },
  {
    id: 5,
    title: "Sleep Meditation",
    category: "Seasonal",
    src: "/portfolio/Feature-4.mp4",
  },
  {
    id: 6,
    title: "Night Calm",
    category: "Seasonal",
    src: "/portfolio/Feature-4.mp4",
  },
  {
    id: 7,
    title: "Mindfulness",
    category: "Nature",
    src: "/portfolio/Feature-4.mp4",
  },
  {
    id: 8,
    title: "Body Scan",
    category: "Nature",
    src: "/portfolio/Feature-4.mp4",
  },
  {
    id: 9,
    title: "Body Scan",
    category: "Fantasy",
    src: "/portfolio/Feature-4.mp4",
  },
];

// Categories
export const categories = ["Featured", "Rain", "Seasonal", "Nature", "Fantasy"];
