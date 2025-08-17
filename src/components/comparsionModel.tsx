import React, { useRef } from "react";
import { comparisonData } from "../data/ComparisonData";
import { SectionBadge } from "./custom/sectionBadge";
import { BarChart3 } from "lucide-react";
// import { useTitleAnimation } from "@/hooks/useTitleAnimation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const ComparisonModel: React.FC = () => {
  // const titleRef = useTitleAnimation();
  const leftCard = useRef<HTMLDivElement>(null);
  const rightCard = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // Left card animation - slide in from left with smooth ease
    gsap.fromTo(
      leftCard.current,
      {
        opacity: 0,
        x: -60,
        y: 20,
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "power1.out",
        scrollTrigger: {
          trigger: leftCard.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      }
    );

    // Right card animation - slide in from right with smooth ease and delay
    gsap.fromTo(
      rightCard.current,
      {
        opacity: 0,
        x: 60,
        y: 20,
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.8,
        // delay: 0.15,
        ease: "power1.out",
        scrollTrigger: {
          trigger: rightCard.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      }
    );
  }, []);

  return (
    <section className="px-4 sm:px-6 lg:px-8 my-24 md:my-32 overflow-x-hidden">
      <div className="max-w-7xl container mx-auto">
        {/* Header */}
        <div className="text-center mb-20 md:mb-24 lg:mb-28">
          <div className="flex justify-center mb-6">
            <SectionBadge
              text="Model Comparison"
              icon={<BarChart3 className="w-4 h-4" />}
              variant="glass"
            />
          </div>
          <h2
            // ref={titleRef}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 overflow-hidden"
          >
            {comparisonData.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
            {comparisonData.subtitle}
          </p>
        </div>

        {/* Comparison Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto overflow-x-hidden">
          {/* Today's AI Card */}
          <div
            ref={leftCard}
            className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-all duration-300"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {comparisonData.todaySection.subtitle}
              </h3>
              <div className="text-4xl font-semibold text-gray-900 mb-2">
                Current
              </div>
              <p className="text-gray-500 text-sm">Limitations we face</p>
            </div>

            <div className="space-y-4 mb-8">
              {comparisonData.todaySection.description.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                  <span className="text-gray-700 text-sm leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-4 mb-8">
              {comparisonData.metrics.map((metric) => (
                <div
                  key={metric.id}
                  className="flex items-center justify-between py-2"
                >
                  <span className="text-xs font-medium text-gray-600">
                    {metric.title}
                  </span>
                  <span className="text-sm font-semibold text-gray-900">
                    {metric.todayValue}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tomorrow's AI Card */}
          <div
            ref={rightCard}
            className="bg-white rounded-lg p-8 border-2 border-gray-900 relative hover:shadow-xl transition-all duration-300"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {comparisonData.tomorrowSection.subtitle}
              </h3>
              <div className="text-4xl font-semibold text-gray-900 mb-2">
                Future
              </div>
              <p className="text-gray-500 text-sm">Solutions we're building</p>
            </div>

            <div className="space-y-4 mb-8">
              {comparisonData.tomorrowSection.description.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-4 mb-8">
              {comparisonData.metrics.map((metric) => (
                <div
                  key={metric.id}
                  className="flex items-center justify-between py-2"
                >
                  <span className="text-xs font-medium text-gray-600">
                    {metric.title}
                  </span>
                  <span className="text-sm font-semibold text-green-600">
                    {metric.tomorrowValue}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonModel;
