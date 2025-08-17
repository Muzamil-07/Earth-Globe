import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";

type CtaVariant = "primary" | "outline";

interface CtaButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  variant?: CtaVariant;
  gradientImage?: string; // New prop for gradient background
}

export default function CtaButton({ 
  label, 
  onClick, 
  className = "", 
  variant = "outline",
  gradientImage 
}: CtaButtonProps) {
  const baseStyles =
    "group relative inline-flex items-center justify-between rounded-2xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 min-w-0 sm:min-w-[240px] md:min-w-[280px] h-12 sm:h-14 md:h-16 lg:h-18 px-3 sm:px-6 md:px-7 lg:px-8 overflow-hidden";

  const outlineStyles =
    "bg-white/5 hover:bg-white/10 text-white border border-white/20 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur";

  const primaryStyles = "bg-blue-600 hover:bg-blue-600/90 text-white shadow-lg";

  // Dynamic background style for gradient
  const backgroundStyle = gradientImage 
    ? {
        backgroundImage: `url(${gradientImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    : {};

  return (
    <Button
      className={`${baseStyles} ${variant === "primary" ? primaryStyles : outlineStyles} ${className}`}
      onClick={onClick}
      style={backgroundStyle}
    >
      {/* Background overlay for better text readability if using gradient */}
      {gradientImage && (
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] rounded-2xl" />
      )}
      
      {/* Content container */}
      <div className="relative z-10 flex items-center justify-between w-full">
        {/* Left side with icon and text */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          {/* Globe icon */}
          <div className="flex-shrink-0">
            <img 
              src="/hero-cta-globe.svg" 
              alt="Globe icon"
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"
            />
          </div>
          
          {/* Button text */}
          <span className="text-sm sm:text-base md:text-lg lg:text-xl font-medium whitespace-nowrap">
            {label}
          </span>
        </div>
        
        {/* Arrow icon */}
        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 shrink-0 transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
    </Button>
  );
}


