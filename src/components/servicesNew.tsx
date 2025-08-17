import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import ToggleButton from './custom/toggleBtn';
import {
  Server,
  ShoppingCart,
  Cpu,
  Globe,
  FileText,
  Wrench,
  Database,
  Lock,
  Layers,
  Box
} from 'lucide-react';

// Icon mapping for services
const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  server: Server,
  marketplace: ShoppingCart,
  gpu: Cpu,
  api: Globe,
  contract: FileText,
  tools: Wrench,
  database: Database,
  lock: Lock,
  layers: Layers,
  box: Box,
};

// Service tile component
const ServiceTile = ({ title, icon, isHighlighted = false, showContent = true, category, selectedCategory }: {
  title: string;
  icon: string;
  isHighlighted?: boolean;
  showContent?: boolean;
  category?: string;
  selectedCategory?: string;
}) => {
  const IconComponent = iconMap[icon] || Server;
  const hasContent = showContent && (title || icon);
  
  // Determine opacity based on category selection
  const getOpacity = () => {
    if (!category || !selectedCategory) return 1; // Default full opacity for empty tiles
    if (category === selectedCategory) return 1; // Full opacity for selected category
    return 0.2; // 20% opacity for non-selected category
  };

  return (
    <div className={cn(
      "relative p-6 h-50 transition-all duration-300 border flex items-center justify-center",
      isHighlighted
        ? "bg-black text-white border-blue-500"
        : hasContent
          ? "bg-black text-gray-300 border-gray-700 hover:border-blue-500 hover:bg-blue-500 cursor-pointer"
          : "bg-black text-gray-300 border-gray-700"
    )}>
      {showContent && (
        <div 
          className="flex flex-col items-center text-center space-y-4 transition-opacity duration-300"
          style={{ opacity: getOpacity() }}
        >
          {icon &&
            <IconComponent className="w-12 h-12" />
          }
          <h3 className="font-light text-lg leading-tight whitespace-pre-line">
            {title}
          </h3>
        </div>
      )}
    </div>
  );
};

const ServicesNew = () => {
  const [selectedCategory, setSelectedCategory] = useState('Creator');
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  // Handle category change with scroll control
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);

    // Scroll to appropriate position based on category
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;

      if (category === 'Creator') {
        // Scroll to 30px for Creator (5% of 600px)
        smoothScrollTo(container, 30, 800);
      } else if (category === 'Consumer') {
        // Scroll to 220px for Consumer
        smoothScrollTo(container, 220, 800);
      }
    }
  };

  // Custom smooth scroll function with slower speed
  const smoothScrollTo = (element: HTMLElement, target: number, duration: number = 1500) => {
    const start = element.scrollTop;
    const change = target - start;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smoother animation
      const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      const easedProgress = easeInOutCubic(progress);
      
      element.scrollTop = start + change * easedProgress;
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  // Initial scroll position on mount
  useEffect(() => {
    if (scrollContainerRef.current && selectedCategory === 'Creator') {
      const container = scrollContainerRef.current;
      smoothScrollTo(container, 30, 800);
    }
  }, []);

  // Define the services based on the image
  const creatorServices = [

    { title: '', icon: '', isHighlighted: false },
    { title: '', icon: '', isHighlighted: false },
    { title: '', icon: '', isHighlighted: false },
    { title: '', icon: '', isHighlighted: false },
    { title: '', icon: '', isHighlighted: false },
    { title: '', icon: '', isHighlighted: false },

    { title: '', icon: '', isHighlighted: false },
    { title: 'Decentralized\nHosting and VMs', icon: 'layers', isHighlighted: false, category: 'Creator' },
    { title: 'Immutable\n Storage', icon: 'lock', isHighlighted: false, category: 'Creator' },
    { title: 'Decentralized\nDatabase', icon: 'database', isHighlighted: false, category: 'Creator' },
    { title: 'Web3 Node\nas Servise', icon: 'box', isHighlighted: false, category: 'Creator' },
    { title: '', icon: '', isHighlighted: false },

    { title: '', icon: '', isHighlighted: false },
    { title: 'Decentralized\nDatabase', icon: 'database', isHighlighted: false, category: 'Consumer' },
    { title: 'Web3 Node\nas Service', icon: 'package', isHighlighted: false, category: 'Consumer' },
    { title: 'AI Model\nMarketplace', icon: 'marketplace', isHighlighted: false, category: 'Consumer' },
    { title: 'API Gateway', icon: 'api', isHighlighted: false, category: 'Consumer' },
    { title: '', icon: '', isHighlighted: false },

    { title: '', icon: '', isHighlighted: false },
    { title: '', icon: '', isHighlighted: false },
    { title: '', icon: '', isHighlighted: false },
    { title: '', icon: '', isHighlighted: false },
    { title: '', icon: '', isHighlighted: false },
    { title: '', icon: '', isHighlighted: false },
    { title: '', icon: '', isHighlighted: false },

  ];


  const shouldPreventScroll = () => typeof window !== 'undefined' && window.innerWidth >= 768

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 md:p-8">
      {/* Header */}
      <div className="text-center mb-12 md:mb-16 max-w-4xl relative z-[9999] shadow-2xl" >
        <h1 className="text-4xl md:text-6xl font-semibold text-white mb-4 md:mb-6">
          OpenxAI makes AI accessible to everyone
        </h1>
        <p className="text-base md:text-xl text-gray-400 mb-8 md:mb-12 leading-relaxed">
          Build ontop of the most established industry frameworks for AI on Solana,
          <br />
          including the Tars proprietary framework.
        </p>

        {/* Toggle Button */}
        <div className="flex justify-center">
          <ToggleButton
            options={['Creator', 'Consumer']}
            defaultValue={selectedCategory}
            onToggle={handleCategoryChange}
            className="bg-gray-800 border border-gray-700"
          />
        </div>
      </div>

      {/* Services Grid Container */}
      <div className="relative w-full -translate-y-50" style={{ zIndex: 1 }}>
        {/* Fixed Gradient Overlay */}
        <div
          className="w-full h-[420px] md:h-[520px] z-20 absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, transparent 20%, rgb(0, 0, 0) 100%)',
          }}
        ></div>

        {/* Scrollable Content */}
        <div
          ref={scrollContainerRef}
          className="max-h-[420px] md:max-h-[520px] overflow-hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onWheel={(e) => { if (shouldPreventScroll()) e.preventDefault() }}
          onTouchMove={(e) => { if (shouldPreventScroll()) e.preventDefault() }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 relative z-10">

            {creatorServices.map((service, index) => (
              <div key={`creator-${index}`}>
                <ServiceTile
                  title={service.title}
                  icon={service.icon}
                  isHighlighted={service.isHighlighted}
                  category={service.category}
                  selectedCategory={selectedCategory}
                  showContent={true} // Show all tiles, opacity will control visibility
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default ServicesNew;