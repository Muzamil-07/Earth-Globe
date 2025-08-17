import type { BlogPost } from "@/data/BlogsData";
import { Calendar } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="w-full max-w-sm mx-auto border border-gray-50 bg-gray-100 rounded-lg overflow-hidden p-4 hover:bg-gray-50 hover:border hover:border-gray-200 cursor-pointer">
      {/* Fixed height image container */}
      <div className="h-60 rounded-lg relative overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Fixed height content container */}
      <div className="p-6 h-54 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 leading-tight">
            {post.title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed mb-4">
            {post.description}
          </p>
        </div>

        {/* Modern separation line */}
        <div className="w-72 h-px bg-gray-300 px-6 mx-auto my-2"></div>

        {/* Date with icon at bottom */}
        <div className="flex items-center gap-2 text-gray-500 text-sm mt-auto">
          <Calendar/>
          <span>{post.date}</span>
        </div>
      </div>
    </div>
  );
}
