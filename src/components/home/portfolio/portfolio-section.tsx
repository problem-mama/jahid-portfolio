import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { mockVideos, categories } from "@/lib/mock-videos";
import VideoPlayer from "./video-player";

export default function PortfolioSection() {
  const getVideosByCategory = (category: string) =>
    mockVideos.filter((video) => video.category === category);
  return (
    <div id="portfolio">
      <div className="container mx-auto px-4 flex flex-col gap-y-10 py-10 md:py-15">
        <h1 className="text-5xl font-extrabold uppercase text-center">
          My <span className="gradient-text10"> Portfolio</span>
        </h1>

        <Tabs defaultValue="Featured" className="w-full ">
          <div className="flex justify-center">
            <TabsList className="grid grid-cols-5 gap-2 items-center  h-12 mb-2 bg-brand-secondary/10 rounded-lg border border-brand-secondary/20 p-1">
              {categories.map((cat) => (
                <TabsTrigger
                  className=" data-[state=active]:bg-brand-secondary data-[state=active]:text-brand-inverse data-[state=active]:shadow-md hover:bg-brand-secondary/20 rounded-lg transition-all uppercase text-xs md:text-sm font-medium duration-200"
                  key={cat}
                  value={cat}
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

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
