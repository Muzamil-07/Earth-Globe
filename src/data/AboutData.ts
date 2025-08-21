export interface AboutStatistic {
  id: string;
  value: string;
  unit: string;
  description: string;
}

export interface AboutData {
  title: string;
  text: string;
  statistics: AboutStatistic[];
}

export const aboutData: AboutData = {
  title: "OpenxAI Vision",

  text: "AI is humanity’s most powerful technology, but it's still centralized, costly, and inaccessible to billions. Over the next 2–5 years, it must become cheaper and more accessible to unlock its full global impact.",
  statistics: [
    {
      id: "stat-01",
      value: ">50",
      unit: "K",
      description: "Transaction /s",
    },
    {
      id: "stat-02",
      value: "600",
      unit: "ms",
      description: "Time to Finality (avg)",
    },
    {
      id: "stat-03",
      value: ">50",
      unit: "K",
      description: "Transaction /s",
    },
    {
      id: "stat-04",
      value: "600",
      unit: "ms",
      description: "Time to Finality (avg)",
    },
  ],
};

export default aboutData;
