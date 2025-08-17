import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";

interface TitleAnimationOptions {
  startTrigger?: string;
  endTrigger?: string;
  yOffset?: number;
  stagger?: number;
  duration?: number;
  ease?: string;
  markers?: boolean;
}

export const useTitleAnimation = (options: TitleAnimationOptions = {}) => {
  const {
    startTrigger = "top 90%",
    endTrigger = "top 50%",
    yOffset = 100,
    stagger = 0.05,
    duration = 0.6,
    ease = "back.out()",
    markers = false,
  } = options;

  const titleRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);

    if (!titleRef.current) return;

    const splitTitle = new SplitText(titleRef.current, {
      type: "words",
      charsClass: "words-animate",
    });

    // Set initial state
    gsap.set(splitTitle.words, {
      y: 100,
      opacity: 0,
    });

    // Title animation timeline
    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: startTrigger,
        end: endTrigger,
        markers,
        toggleActions: "play none none reverse",
      },
    });

    titleTl.to(splitTitle.words, {
      y: 0,
      opacity: 1,
      stagger,
      duration,
      ease,
    });

    return () => {
      splitTitle.revert();
    };
  }, [startTrigger, endTrigger, yOffset, stagger, duration, ease, markers]);

  return titleRef;
};
