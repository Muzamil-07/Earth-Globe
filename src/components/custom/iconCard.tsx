import {
  Monitor,
  Brain,
  TrendingUp,
  Network,
  Server,
  ShoppingCart,
  Cpu,
  Globe,
  FileText,
  Wrench,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";

// Icon mapping object
const iconMap: Record<string, LucideIcon> = {
  monitor: Monitor,
  brain: Brain,
  trending: TrendingUp,
  network: Network,
  server: Server,
  marketplace: ShoppingCart,
  gpu: Cpu,
  api: Globe,
  contract: FileText,
  tools: Wrench,
};

interface IconCardProps {
  iconName: string;
  title: string;
  description?: string;
  variant?: "style1" | "style2";
}

export default function IconCard({
  iconName,
  title,
  description,
  variant = "style1",
}: IconCardProps) {
  const IconComponent = iconMap[iconName] || Monitor;

  // Style 1:
  if (variant === "style1") {
    return (
      <div className="border border-gray-300 rounded-xl px-10 py-10 bg-white">
        <IconComponent className="w-10 h-10 mb-12 p-2 rounded-md text-blue-500 bg-blue-100" />
        <h1 className="text-2xl font-semibold mb-2">{title}</h1>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  }

  // Style 2:
  return (
    <div className="bg-white border border-gray-300 rounded-xl px-6 py-8 w-64 h-48 flex flex-col items-center justify-center text-center">
      <IconComponent className="w-10 h-10 mb-4 p-2 rounded-md text-blue-500 bg-blue-100 flex-shrink-0" />
      <h1 className="text-lg font-semibold mb-2 line-clamp-2">{title}</h1>
      {description && (
        <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
      )}
    </div>
  );
}
