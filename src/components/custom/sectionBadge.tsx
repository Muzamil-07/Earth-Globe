import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const sectionBadgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm font-medium w-fit whitespace-nowrap shrink-0 gap-2 transition-all duration-300 backdrop-blur-md",
  {
    variants: {
      variant: {
        glass:
          "bg-white/20 border-gray-300 text-gray-900 backdrop-blur-md shadow-lg hover:bg-white/30 hover:border-gray-300",
      },
    },
    defaultVariants: {
      variant: "glass",
    },
  }
);

interface SectionBadgeProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof sectionBadgeVariants> {
  text: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

function SectionBadge({
  className,
  variant,
  text,
  icon,
  iconPosition = "left",
  ...props
}: SectionBadgeProps) {
  return (
    <div
      className={cn(sectionBadgeVariants({ variant }), className)}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span className="flex items-center justify-center w-4 h-4">{icon}</span>
      )}
      <span className="font-medium">{text}</span>
      {icon && iconPosition === "right" && (
        <span className="flex items-center justify-center w-4 h-4">{icon}</span>
      )}
    </div>
  );
}

export { SectionBadge };
