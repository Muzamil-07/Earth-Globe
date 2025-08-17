import { ctaData } from "../../data/CTAData";
import { ArrowRight } from "lucide-react";

export default function CTACard() {
  const { title, description, image, cards } = ctaData;

  return (
    <div className="mt-24 md:mt-32">
      <div className="relative min-h-[110vh] md:min-h-[80vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={image}
            alt="Background Pattern"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-7xl font-semibold text-white mb-4">
              {title}
            </h2>
            <p className="text-[#ffffff] max-w-2xl mx-auto text-[1.1rem]">{description}</p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-gradient-to-t from-blue-800/70 to-transparent rounded-xl overflow-hidden border border-gray-600 relative cursor-pointer transform hover:scale-105 transition-transform duration-300"
              >
                {/* Timestamp */}
                <div className="absolute top-3 left-7 z-20">
                  <div className=" backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                    <span className="text-white text-xs font-medium">04</span>
                    <span className="text-white/60 mx-1 text-xs">|</span>
                    <span className="text-white text-xs font-medium">25</span>
                  </div>
                </div>

                {/* Card background */}
                <div className="absolute inset-0 opacity-70">
                  <img
                    src={card.imageOverlay}
                    alt="Card Background"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Card content */}
                <div className="p-8 flex flex-col h-full relative z-10 justify-between">
                  <h3 className="text-2xl font-semibold text-white mt-12 mb-3">
                    {card.title}
                  </h3>
                  <button className="text-[#ffffff] text-sm font-medium flex items-center gap-1 transition-colors">
                    <span>{card.watchText}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
