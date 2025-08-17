import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface ToggleButtonProps {
  options: string[];
  defaultValue?: string;
  onToggle?: (value: string) => void;
  className?: string;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  options,
  defaultValue = options[0],
  onToggle,
  className,
}) => {
  const [activeOption, setActiveOption] = useState(defaultValue);

  const handleToggle = (option: string) => {
    setActiveOption(option);
    onToggle?.(option);
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full bg-gray-900 p-1 transition-all",
        className
      )}
    >
      {options.map((option) => (
        <button
          key={option}
          onClick={() => handleToggle(option)}
          className={cn(
            "relative px-6 py-2 text-sm font-medium rounded-full transition-all duration-200 ease-in-out cursor-pointer",
            activeOption === option
              ? "bg-white text-gray-900 shadow-md"
              : "text-white hover:text-gray-300"
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default ToggleButton;
