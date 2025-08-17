import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

interface ScrollRevealOptions {
  duration?: number;
  stagger?: number;
  ease?: string;
  startTrigger?: string;
  endTrigger?: string;
  markers?: boolean;
  yOffset?: number;
  xOffset?: number;
  scale?: number;
  rotation?: number;
  opacity?: number;
  animationType?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scaleUp" | "rotateIn" | "custom";
}

export const useScrollReveal = (options: ScrollRevealOptions = {}) => {
  const {
    duration = 0.8,
    stagger = 0.1,
    ease = "power2.out",
    startTrigger = "top 85%",
    endTrigger = "top 60%",
    markers = false,
    yOffset = 50,
    xOffset = 0,
    scale = 1,
    rotation = 0,
    opacity = 1,
    animationType = "fadeUp",
  } = options;

  const elementRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!elementRef.current) return;

    const element = elementRef.current;
    const children = element.children;

    // Set initial state based on animation type
    const setInitialState = () => {
      switch (animationType) {
        case "fadeUp":
          gsap.set(children, { y: yOffset, opacity: 0 });
          break;
        case "fadeIn":
          gsap.set(children, { opacity: 0 });
          break;
        case "slideLeft":
          gsap.set(children, { x: -xOffset, opacity: 0 });
          break;
        case "slideRight":
          gsap.set(children, { x: xOffset, opacity: 0 });
          break;
        case "scaleUp":
          gsap.set(children, { scale: 0.8, opacity: 0 });
          break;
        case "rotateIn":
          gsap.set(children, { rotation: rotation, opacity: 0, scale: 0.8 });
          break;
        default:
          gsap.set(children, { y: yOffset, opacity: 0 });
      }
    };

    // Set target state based on animation type
    const setTargetState = () => {
      switch (animationType) {
        case "fadeUp":
          return { y: 0, opacity: opacity };
        case "fadeIn":
          return { opacity: opacity };
        case "slideLeft":
        case "slideRight":
          return { x: 0, opacity: opacity };
        case "scaleUp":
          return { scale: scale, opacity: opacity };
        case "rotateIn":
          return { rotation: 0, opacity: opacity, scale: scale };
        default:
          return { y: 0, opacity: opacity };
      }
    };

    setInitialState();

    // Create animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: startTrigger,
        end: endTrigger,
        markers,
        toggleActions: "play none none reverse",
      },
    });

    tl.to(children, {
      ...setTargetState(),
      duration,
      stagger,
      ease,
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [duration, stagger, ease, startTrigger, endTrigger, markers, yOffset, xOffset, scale, rotation, opacity, animationType]);

  return elementRef;
}; 