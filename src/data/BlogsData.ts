export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
}

export interface BlogsData {
  title: string;
  subtitle: string;
  posts: BlogPost[];
  buttonText: string;
}

export const blogsData: BlogsData = {
  title: "Latest Insights & Updates",
  subtitle:
    "Stay informed with the latest developments in decentralized AI, blockchain technology, and the OpenxAI ecosystem.",
  posts: [
    {
      id: "blog-01",
      title: "DeFiGraph — Knowledge Graph (KG) for DeFi",
      description:
        "A versatile language model with multiple size options for different use cases in decentralized finance.",
      date: "24 May",
      image: "/qwen-hero.jpg",
    },
    {
      id: "blog-02",
      title: "The Future of Decentralized AI on Solana",
      description:
        "Exploring how Solana's high-performance blockchain is revolutionizing AI development and deployment.",
      date: "20 May",
      image: "/qwen-hero.jpg",
    },
    {
      id: "blog-03",
      title: "Building with OpenxAI: A Developer's Guide",
      description:
        "Learn how to integrate OpenxAI's decentralized AI services into your applications.",
      date: "18 May",
      image: "/qwen-hero.jpg",
    },
  ],
  buttonText: "View More",
};

export default blogsData;
