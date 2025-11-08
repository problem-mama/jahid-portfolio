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
    src: "https://res.cloudinary.com/deido9945/video/upload/v1762603405/Feature-1_i84zql.mp4",
  },
  {
    id: 1.1,
    title: "Morning Peace",
    category: "Featured",
    src: "https://res.cloudinary.com/deido9945/video/upload/v1762603710/Feature-2_fvymbu.mp4",
  },
  {
    id: 1.2,
    title: "Morning Peace",
    category: "Featured",
    src: "https://res.cloudinary.com/deido9945/video/upload/v1762603706/Feature-3_sj3uyr.mp4",
  },
  {
    id: 1.3,
    title: "Morning Peace",
    category: "Featured",
    src: "https://res.cloudinary.com/deido9945/video/upload/v1762603748/Feature-4_k4uhvo.mp4",
  },
  {
    id: 2.1,
    title: "Deep Focus",
    category: "Rain",
    src: "https://res.cloudinary.com/deido9945/video/upload/v1762604132/jahid-portfolio/Rain-4_em1jtt.mp4",
  },
  {
    id: 2.2,
    title: "Stress Relief",
    category: "Rain",
    src: "https://res.cloudinary.com/deido9945/video/upload/v1762604129/jahid-portfolio/Rain-1_pk6lsu.mp4",
  },
  {
    id: 2.3,
    title: "Stress Relief",
    category: "Rain",
    src: "https://res.cloudinary.com/deido9945/video/upload/v1762604130/jahid-portfolio/Rain-2_wogj4d.mp4",
  },
  {
    id: 2.4,
    title: "Stress Relief",
    category: "Rain",
    src: "https://res.cloudinary.com/deido9945/video/upload/v1762604127/jahid-portfolio/Rain-3_nplmv0.mp4",
  },
  {
    id: 3.1,
    title: "Sleep Meditation",
    category: "Seasonal",
    src: "https://res.cloudinary.com/deido9945/video/upload/v1762604347/jahid-portfolio/Seasonal-1_bcu43p.mp4",
  },
  {
    id: 3.2,
    title: "Night Calm",
    category: "Seasonal",
    src: "https://res.cloudinary.com/deido9945/video/upload/v1762604387/jahid-portfolio/Seasonal-2_ykgkzs.mp4",
  },
  {
    id: 3.3,
    title: "Night Calm",
    category: "Seasonal",
    src: "https://res.cloudinary.com/deido9945/video/upload/v1762604449/jahid-portfolio/Seasonal-3_eauj4z.mp4",
  },
  {
    id: 3.4,
    title: "Night Calm",
    category: "Seasonal",
    src: "https://res.cloudinary.com/deido9945/video/upload/v1762604496/jahid-portfolio/Seasonal-4_qu21dh.mp4",
  },
  {
    id: 4.1,
    title: "Mindfulness",
    category: "Nature",
    src: "https://res.cloudinary.com/deido9945/video/upload/v1762604651/jahid-portfolio/Nature-1_r7cmot.mp4",
  },
  {
    id: 4.2,
    title: "Mindfulness",
    category: "Nature",
    src: "https://res.cloudinary.com/deido9945/video/upload/v1762604718/jahid-portfolio/Nature-2_n7thd3.mp4",
  },
  {
    id: 4.3,
    title: "Mindfulness",
    category: "Nature",
    src: "https://res.cloudinary.com/deido9945/video/upload/v1762604783/jahid-portfolio/Nature-3_bnzoh1.mp4",
  },
  {
    id: 4.4,
    title: "Mindfulness",
    category: "Nature",
    src: "https://res.cloudinary.com/deido9945/video/upload/v1762604825/jahid-portfolio/Nature-4_envro4.mp4",
  },
  {
    id: 5.1,
    title: "Body Scan",
    category: "Fantasy",
    src: "https://res.cloudinary.com/deido9945/video/upload/v1762605013/jahid-portfolio/Fantasy-1_zjocjv.mp4",
  },
  {
    id: 5.2,
    title: "Body Scan",
    category: "Fantasy",
    src: "https://res.cloudinary.com/deido9945/video/upload/v1762605199/jahid-portfolio/Fantasy-2_zkjy4u.mp4",
  },
  {
    id: 5.3,
    title: "Body Scan",
    category: "Fantasy",
    src: "https://res.cloudinary.com/deido9945/video/upload/v1762605158/jahid-portfolio/Fantasy-3_wdcp9c.mp4",
  },
  {
    id: 5.4,
    title: "Body Scan",
    category: "Fantasy",
    src: "https://res.cloudinary.com/deido9945/video/upload/v1762605231/jahid-portfolio/Fantasy-4_wfs5x5.mp4",
  },
];

// Categories
export const categories = ["Featured", "Rain", "Seasonal", "Nature", "Fantasy"];
