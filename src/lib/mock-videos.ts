export type TPortfolio = {
  id: number;
  title: string;
  category: string;
  src: string;
};

// Mock video data
export const mockVideos: TPortfolio[] = [
  {
    id: 1.0,
    title: "Evening Calm",
    category: "Relaxation",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 1.1,
    title: "Morning Peace",
    category: "Relaxation",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 1.2,
    title: "Morning Peace",
    category: "Relaxation",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 1.3,
    title: "Morning Peace",
    category: "Relaxation",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 3,
    title: "Deep Focus",
    category: "Focus",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 4,
    title: "Stress Relief",
    category: "Focus",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 5,
    title: "Sleep Meditation",
    category: "Sleep",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 6,
    title: "Night Calm",
    category: "Sleep",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 7,
    title: "Mindfulness",
    category: "Wellness",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 8,
    title: "Body Scan",
    category: "Wellness",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

// Categories
export const categories = ["Relaxation", "Focus", "Sleep", "Wellness"];
