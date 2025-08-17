import aboutData from "@/data/AboutData";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

export default function About() {
  const data = aboutData;
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);

    if (!titleRef.current || !descriptionRef.current) return;

    // Split text into words for both title and description
    const splitTitle = new SplitText(titleRef.current, {
      type: "words",
      charsClass: "word-animate",
    });

    const splitDescription = new SplitText(descriptionRef.current, {
      type: "words",
      charsClass: "word-animate",
    });

    // Set initial state - completely hidden
    gsap.set([splitTitle.words, splitDescription.words], {
      opacity: 0,
      y: 30,
    });

    // Create timeline for coordinated animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%", // Start when title enters viewport
        end: "top 30%",   // End when title is well positioned
        scrub: 1,
        markers: false,
      },
    });

    // Animate title words first
    tl.to(splitTitle.words, {
      opacity: 1,
      y: 0,
      stagger: 0.05,
      ease: "power2.out",
      duration: 0.8,
    });

    // Then animate description words with slight delay
    tl.to(splitDescription.words, {
      opacity: 1,
      y: 0,
      stagger: 0.02,
      ease: "power2.out",
      duration: 1.2,
    }, "-=0.4"); // Start 0.4 seconds before title animation ends

    return () => {
      splitTitle.revert();
      splitDescription.revert();
    };
  }, []);

  return (
    <div className="container mx-auto mt-3 md:mt-2 mb-30 md:mb-42 px-4">
      <div className="text-center mb-17 md:mb-40 lg:mb-55">
        <div className="flex flex-col justify-center items-center">
          <h1 ref={titleRef} className="text-xl md:text-3xl lg:text-4xl">{data.title}</h1>
          <div 
            ref={descriptionRef}
            className="max-w-[900px] font-normal text-l md:text-[20px] p-6 md:p-10"
          >
            {data.text}
          </div>
        </div>
      </div>
      {/* Stats Section */}
      <div className="flex flex-wrap justify-center mx-auto mt-8 md:mt-12">
        {data.statistics.map((stat, index) => (
          <div 
            key={stat.id} 
            className={`flex flex-col items-center justify-center py-8 px-4 w-1/2 md:w-1/4 ${(index === 0 || index === 2) ? 'border-r border-gray-500' : ''} ${index === 1 ? 'md:border-r md:border-gray-500' : ''} ${index < 2 ? 'border-b border-gray-500 md:border-b-0' : ''}`}
          >
            <div className="flex items-baseline">
              <span className="text-4xl md:text-5xl lg:text-6xl font-medium">{stat.value}</span>

              <span className="text-xl md:text-2xl font-medium ml-1 align-top lg:align-text-top lg:text-2xl lg:relative lg:top-[-0.5em]">{stat.unit}</span>
            </div>
            <p className="text-sm md:text-base font-light mt-3 text-center">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
