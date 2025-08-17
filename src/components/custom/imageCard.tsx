interface ImageCardProps {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  versions: string;
  lastUpdated: string;
}

export default function ImageCard({
  name,
  description,
  category,
  image,
  versions,
  lastUpdated,
}: ImageCardProps) {
  return (
    <div className="rounded-2xl bg-gray-100 border border-gray-50 overflow-hidden w-80 h-[400px] p-4 hover:bg-gray-50 hover:border hover:border-gray-200 cursor-pointer">
      {/* Header with full image background */}
      <div className="relative h-48 flex items-center justify-center p-6">
        {/* Full background image */}
        {image && (
          <img
            src={image}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
        )}

        {/* Category badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-blue-600 text-white text-xs font-medium px-3 py-1.5 rounded-full">
            {category}
          </span>
        </div>

        {/* Last updated badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full">
            {lastUpdated}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col h-52">
        {/* Category label */}
        <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2">
          {category}
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
          {name}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed flex-1 overflow-hidden">
          <span className="line-clamp-3">{description}</span>
        </p>

        {/* Versions info */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-4">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            Versions
          </span>
          <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
            {versions}
          </span>
        </div>
      </div>
    </div>
  );
}
