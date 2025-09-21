import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { mockVideos, categories } from "@/lib/mock-videos";
import VideoPlayer from "./video-player";

export default function PortfolioSection() {
  const getVideosByCategory = (category: string) =>
    mockVideos.filter((video) => video.category === category);
  return (
    <div id="portfolio" className="bg-beige">
      <div className="container mx-auto px-4 flex flex-col gap-y-10 py-10 md:py-15">
        <h1 className="text-xl font-bold text-brand-highlight uppercase text-center underline">
          Portfolio
        </h1>

        <Tabs defaultValue="Relaxation" className="w-full">
          <TabsList className="grid grid-cols-4 gap-2 items-center h-12 mb-2 bg-cream rounded-lg border border-border">
            {categories.map((cat) => (
              <TabsTrigger
                className="text-brand-navlink data-[state=active]:bg-terracotta data-[state=active]:text-brand-inverse data-[state=active]:shadow-md hover:bg-cream hover:text-brand-accent rounded-lg transition-all duration-200"
                key={cat}
                value={cat}
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((cat) => (
            <TabsContent key={cat} value={cat}>
              <div className="grid grid-cols-1 sm:grid-cols-2  gap-6">
                {getVideosByCategory(cat).map((video) => (
                  <VideoPlayer key={video.id} src={video.src} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
