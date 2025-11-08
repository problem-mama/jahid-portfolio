"use client";
import { useRef, useEffect, useState } from "react";

type Props = {
  src: string;
  shouldPreload?: boolean; // from parent tab
  poster?: string | undefined;
};

export default function VideoPlayer({
  src,
  shouldPreload = false,
  poster,
}: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [loading, setLoading] = useState(true);
  const [hasSrc, setHasSrc] = useState(false);

  // When shouldPreload switches to true, set src so browser starts loading
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (shouldPreload && !hasSrc) {
      // assign src (this triggers browser to start fetching according to `preload`)
      video.src = src;
      setHasSrc(true);
      // use metadata preload to avoid full download; change to "auto" if you need full buffering
      video.preload = "metadata";
    }

    // If tab gets deactivated, you could optionally unload to free memory:
    if (!shouldPreload && hasSrc) {
      // keep poster but remove source (optional)
      // video.removeAttribute("src");
      // video.load();
      // setHasSrc(false);
      // We keep it loaded to allow quick back-and-forth switching; uncomment unloading lines if memory is a concern
    }
  }, [shouldPreload, src, hasSrc]);

  // Visual loading state until can play
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setLoading(false);
      // Start autoplay when visible (browser may block autoplay if not muted; ensure muted)
      video.muted = true;
      video.play().catch(() => {
        // autoplay may fail on some browsers without interaction; keep muted to maximize success
      });
    };

    const handleWaiting = () => setLoading(true);
    const handlePlaying = () => setLoading(false);

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("waiting", handleWaiting);
    video.addEventListener("playing", handlePlaying);

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("waiting", handleWaiting);
      video.removeEventListener("playing", handlePlaying);
    };
  }, []);

  // Optional: Autoplay only when in viewport (to save CPU) — we still preload via shouldPreload.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  // Render
  return (
    <div className="relative w-full h-[450px] rounded-lg overflow-hidden bg-black">
      {/* Poster / spinner over video while loading */}
      {loading && (
        <div
          className="absolute inset-0 flex items-center justify-center z-20"
          aria-hidden
        >
          {/* Poster as background */}
          {poster ? (
            <img
              src={poster}
              alt="video poster"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-black/60" />
          )}
          {/* loading overlay */}
          <div className="absolute z-30">
            <div className="animate-pulse px-4 py-2 rounded-md bg-black/50 text-white text-sm">
              Loading…
            </div>
          </div>
        </div>
      )}

      <video
        ref={videoRef}
        className="w-full h-full object-cover rounded-lg"
        muted
        loop
        playsInline
        controls={false}
        // don't set src here — we assign it in effect when shouldPreload is true
        // preload is set dynamically in effect, default to "metadata" for safety
        preload="metadata"
        poster={poster}
      />
    </div>
  );
}
