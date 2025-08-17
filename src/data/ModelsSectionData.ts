export interface Model {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  versions: string;
  lastUpdated: string;
}

export interface ModelsSectionData {
  title: string;
  subtitle: string;
  categories: string[];
  models: Model[];
}

export const modelsSectionData: ModelsSectionData = {
  title: "Ultimate apps are at OpenxAI",
  subtitle:
    "Build ontop of the most established industry frameworks for AI on Solana, including the Tars proprietary framework.",
  categories: ["All", "General", "Code", "Vision", "Audio", "Multimodal"],
  models: [
    {
      id: "qwen-01",
      name: "Qwen",
      description:
        "A versatile language model with multiple size options for different use cases.",
      category: "General",
      image: "/qwen-hero.jpg",
      versions: "6+",
      lastUpdated: "9 months ago",
    },
    {
      id: "qwen-02",
      name: "Qwen Coder",
      description:
        "Specialized version of Qwen optimized for code generation and programming tasks.",
      category: "Code",
      image: "/qwen-hero.jpg",
      versions: "6+",
      lastUpdated: "9 months ago",
    },
    {
      id: "qwen-03",
      name: "Qwen VL",
      description:
        "Vision-language model capable of understanding and generating content from both text and images.",
      category: "Vision",
      image: "/qwen-hero.jpg",
      versions: "6+",
      lastUpdated: "9 months ago",
    },
    {
      id: "qwen-04",
      name: "Qwen Audio",
      description:
        "Audio-focused model for speech recognition, audio analysis, and audio generation tasks.",
      category: "Audio",
      image: "/qwen-hero.jpg",
      versions: "6+",
      lastUpdated: "9 months ago",
    },
    {
      id: "qwen-05",
      name: "Qwen Max",
      description:
        "The most powerful version of Qwen with enhanced capabilities and larger parameter count.",
      category: "General",
      image: "/qwen-hero.jpg",
      versions: "6+",
      lastUpdated: "9 months ago",
    },
    {
      id: "qwen-06",
      name: "Qwen Multimodal",
      description:
        "Advanced multimodal model that can process and generate content across text, images, and audio.",
      category: "Multimodal",
      image: "/qwen-hero.jpg",
      versions: "6+",
      lastUpdated: "9 months ago",
    },
  ],
};
