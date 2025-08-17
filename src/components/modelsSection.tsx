import { modelsSectionData } from "@/data/ModelsSectionData";
import ImageCard from "./custom/imageCard";
import { SectionBadge } from "./custom/sectionBadge";
import { Brain } from "lucide-react";
// import { useTitleAnimation } from "@/hooks/useTitleAnimation";

export default function ModelsSection() {
  const data = modelsSectionData;
  // const titleRef = useTitleAnimation();

  return (
    <div className="my-24 md:my-32">
      <div className="text-center container mx-auto px-4 mb-12 md:mb-16 lg:mb-20">
        <div className="flex justify-center mb-6">
          <SectionBadge
            text="AI Models"
            icon={<Brain className="w-4 h-4" />}
            variant="glass"
          />
        </div>
        <h1
          // ref={titleRef}
          className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 overflow-hidden"
        >
          {data.title}
        </h1>
        <p className="text-gray-600 text-sm md:text-base lg:text-lg max-w-4xl mx-auto leading-relaxed">
          {data.subtitle}
        </p>
      </div>
      <div className="container mx-auto px-2 sm:px-4 lg:px-6">
        <div
          className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto overflow-y-hidden pb-4 snap-x snap-mandatory"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {data.models.map((model) => {
            return (
              <div key={model.id} className="flex-shrink-0 snap-start">
                <ImageCard
                  id={model.id}
                  name={model.name}
                  description={model.description}
                  category={model.category}
                  versions={model.versions}
                  lastUpdated={model.lastUpdated}
                  image={model.image}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
