export interface ComparisonMetric {
  id: string;
  title: string;
  todayValue: string;
  tomorrowValue: string;
  todayProgress: number; // 0-100 percentage for progress bar
  tomorrowProgress: number; // 0-100 percentage for progress bar
}

export interface ComparisonData {
  title: string;
  subtitle: string;
  todaySection: {
    title: string;
    subtitle: string;
    description: string[];
  };
  tomorrowSection: {
    title: string;
    subtitle: string;
    description: string[];
  };
  metrics: ComparisonMetric[];
}

export const comparisonData: ComparisonData = {
  title: "AI Evolution Comparison",
  subtitle:
    "See how Tomorrow's AI with OpenxAI compares to Today's centralized solutions",
  todaySection: {
    title: "Today's AI",
    subtitle: "Other AI",
    description: [
      "Decentralized & owned by people, not corporations.",
      "Your AI, your data, your control, no Middlemen.",
      "AI for everyone. Free, open, and unstoppable.",
    ],
  },
  tomorrowSection: {
    title: "Tomorrow's AI",
    subtitle: "OpenxAI",
    description: [
      "Decentralized & owned by people, not corporations.",
      "Your AI, your data, your control, no Middlemen.",
      "AI for everyone. Free, open, and unstoppable.",
    ],
  },
  metrics: [
    {
      id: "cost-energy",
      title: "Cost & Energy Consumption",
      todayValue: "25x",
      tomorrowValue: "45x",
      todayProgress: 60,
      tomorrowProgress: 100,
    },
    {
      id: "censorship",
      title: "Content Censorship & Restrictions",
      todayValue: "20x",
      tomorrowValue: "32x",
      todayProgress: 50,
      tomorrowProgress: 80,
    },
    {
      id: "ownership",
      title: "Model Ownership, Data Control & Privacy",
      todayValue: "1x",
      tomorrowValue: "5x",
      todayProgress: 10,
      tomorrowProgress: 40,
    },
  ],
};

export default comparisonData;
