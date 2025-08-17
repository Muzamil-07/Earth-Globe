import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { curvedGradientData } from "../data/CurvedGradientData";

export default function FooterCurvedGradient() {

  const containerRef = useRef<HTMLDivElement>(null);

  // Helper function to generate gradient string from config (upside down)
  const generateGradientString = (layer: typeof curvedGradientData.layers[0]) => {
    const { colors, stops } = layer;
    
    const gradientStops = [
      `${colors.color1} ${stops.stop1}`,
      `${colors.color2} ${stops.stop2}`,
      `${colors.color3} ${stops.stop3}`,
      `${colors.color4} ${stops.stop4}`,
      `${colors.color5} ${stops.stop5}`
    ];
    
    return `linear-gradient(180deg, ${gradientStops.join(', ')})`;
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.to(containerRef.current, {
      marginBottom: "-20rem",
      width: "100vw",
      ease: "none",
      scrollTrigger:{
        trigger: containerRef.current,
        start: "top 100%",
        end: "top 20%",
        scrub: 1.2,
        markers: false,        
      }
    })

  },[])

  return (
    <div className="overflow-hidden -mb-10 z-20 w-full">
      {/* curved gradient for footer */}
      <div ref={containerRef} className="relative w-full h-[40rem] overflow-hidden left-1/2 -translate-x-1/2 rotate-180 max-w-[100vw]">
        {curvedGradientData.layers.map((layer, index) => (
          <div
            key={index}
            className="absolute mx-auto w-full h-full"
            style={{
              background: generateGradientString(layer),
              zIndex: layer.zIndex,
            }}
          />
        ))}
      </div>
    </div>
  );
}
