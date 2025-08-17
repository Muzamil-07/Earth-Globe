import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

export default function CurvedGradient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const curvedSvgRef = useRef<HTMLImageElement>(null);
  const flatSvgRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Create timeline for coordinated animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
        end: "bottom 5%",
        scrub: 1.5,
        markers: false,
        invalidateOnRefresh: true,
      }
    });

    // Animate container to expand and move up
    tl.to(containerRef.current, {
      marginTop: "-18rem",
      width: "100vw",
      height: "50rem",
      ease: "power2.inOut",
    });

    // Animate from curved to flat SVG
    tl.to(curvedSvgRef.current, {
      opacity: 0,
      ease: "power2.inOut",
    }, 0);

    tl.to(flatSvgRef.current, {
      opacity: 1,
      ease: "power2.inOut",
    }, 0);

  }, []);

  return (
    <div className="z-20 relative -mt-1 w-full">
      {/* SVG curved gradient */}
      <div ref={containerRef} className="relative w-full h-[10rem] sm:h-[15rem] md:h-[18rem] lg:h-[20rem] left-1/2 -translate-x-1/2 max-w-[100vw]">
        
        {/* Curved SVG */}
        <img 
          ref={curvedSvgRef}
          src="/curve-grad.svg"
          alt="Curved gradient"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 1 }}
        />

        {/* Flat SVG */}
        <img 
          ref={flatSvgRef}
          src="/flat-grad.svg"
          alt="Flat gradient"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0 }}
        />
      </div>
    </div>
  );
}
