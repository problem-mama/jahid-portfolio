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
    id: 2.1,
    title: "Deep Focus",
    category: "Rain",
    src: "/portfolio/Rain-1.mp4",
  },
  {
    id: 2.2,
    title: "Stress Relief",
    category: "Rain",
    src: "/portfolio/Rain-2.mp4",
  },
  {
    id: 2.3,
    title: "Stress Relief",
    category: "Rain",
    src: "/portfolio/Rain-3.mp4",
  },
  {
    id: 2.4,
    title: "Stress Relief",
    category: "Rain",
    src: "/portfolio/Rain-4.mp4",
  },
  {
    id: 3.1,
    title: "Sleep Meditation",
    category: "Seasonal",
    src: "/portfolio/Seasonal-1.mp4",
  },
  {
    id: 3.2,
    title: "Night Calm",
    category: "Seasonal",
    src: "/portfolio/Seasonal-2.mp4",
  },
  {
    id: 3.3,
    title: "Night Calm",
    category: "Seasonal",
    src: "/portfolio/Seasonal-3.mp4",
  },
  {
    id: 3.4,
    title: "Night Calm",
    category: "Seasonal",
    src: "/portfolio/Seasonal-4.mp4",
  },
  {
    id: 4.1,
    title: "Mindfulness",
    category: "Nature",
    src: "/portfolio/Nature-1.mp4",
  },
  {
    id: 4.2,
    title: "Mindfulness",
    category: "Nature",
    src: "/portfolio/Nature-2.mp4",
  },
  {
    id: 4.3,
    title: "Mindfulness",
    category: "Nature",
    src: "/portfolio/Nature-3.mp4",
  },
  {
    id: 4.4,
    title: "Mindfulness",
    category: "Nature",
    src: "/portfolio/Nature-4.mp4",
  },
  {
    id: 5.1,
    title: "Body Scan",
    category: "Fantasy",
    src: "/portfolio/Fantasy-1.mp4",
  },
  {
    id: 5.2,
    title: "Body Scan",
    category: "Fantasy",
    src: "/portfolio/Fantasy-2.mp4",
  },
  {
    id: 5.3,
    title: "Body Scan",
    category: "Fantasy",
    src: "/portfolio/Fantasy-3.mp4",
  },
  {
    id: 5.4,
    title: "Body Scan",
    category: "Fantasy",
    src: "/portfolio/Fantasy-4.mp4",
  },
];

// Categories
export const categories = ["Featured", "Rain", "Seasonal", "Nature", "Fantasy"];
