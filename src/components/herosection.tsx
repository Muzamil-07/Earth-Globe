import EarthGlobe from "./EarthGlobe";
import { useEffect, useRef, useState } from "react";

export default function Herosection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const progress = scrollHeight > 0 ? Math.min(scrollTop / scrollHeight, 1) : 0;
      
      setScrollProgress(progress);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Pass scroll progress to EarthGlobe component
  useEffect(() => {
    // Update a custom CSS variable that EarthGlobe can read
    document.documentElement.style.setProperty('--scroll-progress', scrollProgress.toString());
  }, [scrollProgress]);

  return (
    <div className="h-screen flex items-center justify-center relative overflow-hidden z-10">
      {/* Internal scrollable container */}
      <div 
        ref={scrollContainerRef}
        className="absolute inset-0 overflow-y-auto hide-scrollbar"
        style={{
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none', // IE/Edge
        }}
      >
        {/* Spacer div to enable scrolling */}
        <div className="h-[200vh] relative">
          {/* EarthGlobe Background - positioned to stay in viewport */}
          <div className="fixed inset-0 z-10">
            <EarthGlobe />
          </div>
          
          {/* Content overlay that scrolls over the globe */}
          <div className="relative z-20 h-full flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 opacity-0">
                Welcome to Earth Globe
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-0">
                Scroll to explore the interactive globe
              </p>
              
              {/* Scroll indicator */}
              <div className="flex flex-col items-center space-y-2 opacity-0">
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                  <div 
                    className="w-1 h-3 bg-white rounded-full mt-2 transition-all duration-300"
                    style={{
                      transform: `translateY(${scrollProgress * 12}px)`,
                      opacity: 1 - scrollProgress
                    }}
                  />
                </div>
                <span className="text-sm opacity-0">Scroll to animate</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS for hiding scrollbar */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `
      }} />
    </div>
  );
}
