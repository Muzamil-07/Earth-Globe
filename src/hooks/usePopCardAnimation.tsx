import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

interface options {
  duration?: number;
  stagger?: number;
  ease?: string;
  startTrigger?: string;
  endTrigger?: string;
  markers?: boolean;
}

export const usePopCardAnimation = (options: options = {}) => {
  const {
    duration = 0.8,
    stagger = 0.2,
    ease = "back.out(1.2)",
    startTrigger = "top 90%",
    endTrigger = "top 60%",
    markers = false,
  } = options;

  const cardsRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const cards = cardsRef.current?.querySelectorAll(".icon-card");
    if (cards) {
      gsap.set(cards, {
        y: 50,
        opacity: 0,
        scale: 0.9,
      });

      gsap.to(cards, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 90%",
          end: "top 60%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });
    }
  }, [duration, stagger, ease, startTrigger, endTrigger, markers]);

  return cardsRef;
};
