import blogsData from "@/data/BlogsData";
import BlogCard from "@/components/custom/BlogCard";
import CommonBtn from "./custom/commonBtn";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { SectionBadge } from "./custom/sectionBadge";
// import { useTitleAnimation } from "@/hooks/useTitleAnimation";
import { usePopCardAnimation } from "@/hooks/usePopCardAnimation";

export default function Blogs() {
  const data = blogsData;
  // const titleRef = useTitleAnimation();
  const cardsRef = usePopCardAnimation();

  return (
    <div className="container mx-auto -mb-32 md:-mb-20 my-24 md:my-32 z-50">
      <div className="text-center px-4 mb-12 md:mb-16 lg:mb-20">
        <div className="flex justify-center mb-6">
          <SectionBadge
            text="Latest Blogs"
            icon={<BookOpen className="w-4 h-4" />}
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
      </div>

      {/* Blog Cards Grid */}
      <div className="px-4">
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {data.posts.map((post) => (
            <div className="icon-card" key={post.id}>
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center pt-20 pb-5">
        <CommonBtn className="text-sm sm:text-base md:text-lg !py-3 sm:!py-4 md:!py-5 !px-2 bg-black text-white hover:bg-black/60 cursor-pointer group">
          <span className="px-2 sm:px-3">{data.buttonText}</span>
          <div className="bg-white rounded-full p-1.5 sm:p-2 w-8 h-8 text-black overflow-hidden relative">
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-in-out group-hover:translate-x-4 group-hover:-translate-y-4" />
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 absolute top-1/2 left-1/2 -translate-x-6 translate-y-6 transition-transform duration-300 ease-in-out group-hover:-translate-x-1/2 group-hover:-translate-y-1/2" />
          </div>
        </CommonBtn>
      </div>
    </div>
  );
}
