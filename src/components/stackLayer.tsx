import { stackData } from "@/data/StackLayerData";
import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";
import { useMemo, useState } from "react";
import { MetricCard } from "./custom/metric-card";
import { useBreakpoint } from "@/hooks/useBreakpoint";

export default function StackLayer() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isHover, setIsHover] = useState<boolean>(false);
  const breakpoint = useBreakpoint();

  const hoverPoints = useMemo(
    () => [
      { bottom: "65%", left: ["xs", "sm"].includes(breakpoint) ? "5%" : "20%" },
      {
        bottom: "50%",
        right: ["xs", "sm"].includes(breakpoint) ? "5%" : "20%",
      },
      { bottom: "40%", left: ["xs", "sm"].includes(breakpoint) ? "5%" : "20%" },
      {
        bottom: "30%",
        right: ["xs", "sm"].includes(breakpoint) ? "5%" : "20%",
      },
      { bottom: "22%", left: ["xs", "sm"].includes(breakpoint) ? "5%" : "20%" },
      {
        bottom: "15%",
        right: ["xs", "sm"].includes(breakpoint) ? "5%" : "20%",
      },
    ],
    [breakpoint]
  );

  return (
    <div className="my-24 md:my-32">
      <div className="text-center container mx-auto px-4 mb-12 md:mb-16 lg:mb-20">
        <div className="flex flex-col justify-center items-center">
          <div className="text-center w-full max-w-[90%] md:max-w-[60%] lg:max-w-[40%]">
            <h1 className="text-2xl sm:text-3xl md:text-4xl pb-4 font-semibold">
              {stackData.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 font-light">
              {stackData.description}
            </p>
          </div>
        </div>

        {/* Stack container */}
        <div className="relative flex items-center justify-center min-h-[30rem] sm:min-h-[35rem] md:min-h-[45rem] lg:min-h-[55rem] scale-[0.65] sm:scale-90 md:scale-100 origin-center">
          {/* Layers */}
          {stackData.layers.map((layer, i) => (
            <img
              key={i}
              src={layer.imageSrc}
              alt={layer.title}
              className="absolute w-[70%] sm:w-[50%] md:w-[40%]"
              style={{
                bottom: `calc(40% - ${i * 8}%)`,
                zIndex: 6 - i,
              }}
            />
          ))}

          {/* Hover points */}
          {hoverPoints.map((pos, i) => (
            <div
              key={i}
              className={cn(
                "group absolute w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center cursor-pointer"
              )}
              style={pos}
              onMouseEnter={() => {
                setActiveIndex(i);
                setIsHover(true);
              }}
              onMouseLeave={() => {
                setActiveIndex(null);
                setIsHover(false);
              }}
              onTouchStart={() => {
                setActiveIndex(i);
                setIsHover(true);
              }}
              onTouchEnd={() => {
                setActiveIndex(null);
                setIsHover(false);
              }}
            >
              <div className="bg-blue-500 text-white rounded-sm p-1 border border-blue-500 hover:text-black transition-all duration-300 hover:bg-white hover:border hover:border-gray-800">
                {isHover && activeIndex === i ? <Minus size={14} /> : <Plus size={14} />}
              </div>

              {/* Tooltip content - positioned to avoid center image overlap */}
              <div
                className={cn(
                  "absolute top-full mt-3 p-2 w-32 sm:w-40 md:w-48 z-50 transition-all duration-300 ease-in-out",
                  activeIndex === i ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2",
                  // Position based on icon location to avoid center image overlap and other icons
                  pos.left ? "right-0 text-right" : "left-0 text-left"
                )}
              >
                <h4 className="text-xs sm:text-lg md:text-xl lg:text-2xl font-semibold text-black mb-1">
                  {stackData.layers[i].labelTitle}
                </h4>
                {stackData.layers[i].labelSubtitle && (
                  <p className="text-[8px] sm:text-xs md:text-sm lg:text-base text-gray-400 whitespace-nowrap">
                    {stackData.layers[i].labelSubtitle}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="mt-20 sm:mt-32 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {stackData.card.map((el) => (
            <MetricCard
              key={el.id}
              title={el.title}
              description={el.description}
              value={el.value}
              unit={el.unit}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
