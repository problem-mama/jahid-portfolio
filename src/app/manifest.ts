import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jahid Visuals",
    short_name: "JahidVisuals",
    description: "Ambience and relaxation visuals by Jahid Visuals.",
    id: "/?source=pwa",
    lang: "en-US",
    start_url: "/",
    scope: "/",
    display: "standalone",
    display_override: ["standalone", "browser"],
    background_color: "#ffffff",
    theme_color: "#ffffff",
    orientation: "portrait",
    categories: ["productivity", "health", "media", "video"],
    shortcuts: [
      {
        name: "View Services",
        url: "/#services",
        description: "Explore ambience and wellness content services.",
      },
      {
        name: "Contact Jahid",
        url: "/#contact",
        description: "Start a project or request more information.",
      },
    ],
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
