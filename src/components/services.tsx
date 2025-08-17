import { useState } from "react";
import servicesData from "@/data/ServicesData";
import IconCard from "./custom/iconCard";
import ToggleButton from "./custom/toggleBtn";
import { SectionBadge } from "./custom/sectionBadge";
import { Settings } from "lucide-react";
// import { useTitleAnimation } from "@/hooks/useTitleAnimation";
import { usePopCardAnimation } from "@/hooks/usePopCardAnimation";

export default function Services() {
  const data = servicesData;
  const [selectedCategory, setSelectedCategory] = useState(data.categories[0]);
  // const titleRef = useTitleAnimation();
  const cardsRef = usePopCardAnimation();

  // Filter services based on selected category
  const filteredServices = data.services.filter(
    (service) => service.category === selectedCategory
  );

  return (
    <div className="container mx-auto my-24 md:my-32">
      <div className="text-center px-4 mb-12 md:mb-16 lg:mb-20">
        <div className="flex justify-center mb-6">
          <SectionBadge
            text="Our Services"
            icon={<Settings className="w-4 h-4" />}
            variant="glass"
          />
        </div>
        <h1
          // ref={titleRef}
          className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 overflow-hidden"
        >
          {data.title}
        </h1>
        <p className="text-gray-600 text-sm md:text-base lg:text-lg max-w-4xl mx-auto leading-relaxed mb-8">
          {data.subtitle}
        </p>

        {/* Category Toggle */}
        <div className="flex justify-center mb-8">
          <ToggleButton
            options={data.categories}
            defaultValue={selectedCategory}
            onToggle={setSelectedCategory}
          />
        </div>
      </div>

      <div
        ref={cardsRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 justify-items-center"
      >
        {filteredServices.map((service) => {
          return (
            <div className="icon-card" key={service.id}>
              <IconCard
                title={service.title}
                iconName={service.icon}
                variant="style2"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
