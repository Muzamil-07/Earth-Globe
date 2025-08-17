import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  description: string;
  value: string;
  unit?: string;
  className?: string;
}

export function MetricCard({
  title,
  description,
  value,
  unit,
  className,
}: MetricCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-gray-100 bg-blue-50 p-6",
        className
      )}
    >
      <div className="space-y-40">
        <p className="text-lg text-start text-gray-900 ">
          {title}
        </p>
        <div className="flex items-baseline gap-1">
          <span className="text-5xl font-medium text-gray-900 ">
            {value}
          </span>
          {unit && (
            <sup
              className="text-lg font-medium text-gray-900 "
              style={{ position: "relative", top: "-0.9em" }}
            >
              {unit}
            </sup>
          )}
          <span className="text-xl font-medium text-gray-900">
            {description}
          </span>
        </div>
      </div>
    </div>
  );
}
