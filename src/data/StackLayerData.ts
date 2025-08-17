export type StackLayerSide = "left" | "right";

export interface Cards {
  id: string;
  value: string;
  unit: string;
  title: string;
  description: string;
}

export interface StackLayerItem {
  imageSrc: string;
  title: string;
  description: string;
  side: StackLayerSide;
  labelTitle?: string;
  labelSubtitle?: string;
}

interface stackLayer {
  title: string;
  description: string;
  arrowSvg: string;
  layers: StackLayerItem[];
  card: Cards[];
}

export const hoverPoints = [
  {
    base: "bottom-[85%] left-[20%]",
    sm: "bottom-[84%] left-[18%]",
    md: "bottom-[83%] left-[16%]",
  },
  {
    base: "bottom-[65%] right-[20%]",
    sm: "bottom-[64%] right-[18%]",
    md: "bottom-[63%] right-[16%]",
  },
  {
    base: "bottom-[48%] left-[20%]",
    sm: "bottom-[47%] left-[18%]",
    md: "bottom-[46%] left-[16%]",
  },
  {
    base: "bottom-[37%] right-[20%]",
    sm: "bottom-[36%] right-[18%]",
    md: "bottom-[35%] right-[16%]",
  },
  {
    base: "bottom-[26%] left-[20%]",
    sm: "bottom-[25%] left-[18%]",
    md: "bottom-[24%] left-[16%]",
  },
  {
    base: "bottom-[15%] right-[20%]",
    sm: "bottom-[14%] right-[18%]",
    md: "bottom-[13%] right-[16%]",
  },
];

export const stackData: stackLayer = {
  title: "World-changing protocols and frameworks",
  description:
    "AI’s complexity excludes non-coders and 3B+ people, leaving its potential untapped",
  arrowSvg: "/Layers/arrow.svg",
  layers: [
    {
      imageSrc: "/Layers/layer1.svg",
      title: "Extensions & Apps",
      description:
        "Top-level experiences your team touches every day: dashboards, apps, and extensions connected to the stack.",
      side: "left",
      labelTitle: "On-chain execution",
      labelSubtitle: "(Monetization & tokenization)",
    },
    {
      imageSrc: "/Layers/layes2-3.svg",
      title: "APIs & Automations",
      description:
        "Composable APIs and automation glue that orchestrate workflows across systems and services.",
      side: "right",
      labelTitle: "Applications",
      labelSubtitle: "(Agents, dApps)",
    },
    {
      imageSrc: "/Layers/layer4.svg",
      title: "Orchestration Layer",
      description:
        "Queueing, scheduling, and policy controls to make complex jobs reliable and observable.",
      side: "left",
      labelTitle: "AI Infra",
      labelSubtitle: "(Monetization & tokenization)",
    },
    {
      imageSrc: "/Layers/layer5.svg",
      title: "Services & Runtimes",
      description:
        "Scalable services and runtimes where your business logic and AI workloads execute.",
      side: "right",
      labelTitle: "Virtualization",
      labelSubtitle: "(Agents, dApps)",
    },
    {
      imageSrc: "/Layers/layer6.svg",
      title: "Data & Models",
      description:
        "Vector stores, feature stores, and models that power retrieval, analytics, and inference.",
      side: "left",
      labelTitle: "Dependencies",
      labelSubtitle: "(Monetization & tokenization)",
    },
    {
      imageSrc: "/Layers/layer 7.svg",
      title: "Infrastructure",
      description:
        "Foundations like networking, compute, and observability that keep everything fast and secure.",
      side: "right",
      labelTitle: "Operating System",
    },
  ],
  card: [
    {
      id: "card-01",
      value: "4",
      unit: "X",
      title: "Speed Related",
      description: "Faster",
    },
    {
      id: "card-02",
      value: "4",
      unit: "X",
      title: "Speed Related",
      description: "Faster",
    },
    {
      id: "card-03",
      value: "4",
      unit: "X",
      title: "Speed Related",
      description: "Faster",
    },
  ],
};
