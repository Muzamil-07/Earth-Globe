export interface Service {
  id: string;
  title: string;
  icon: string;
  category: string;
}

export interface ServicesData {
  title: string;
  subtitle: string;
  categories: string[];
  services: Service[];
}

export const servicesData: ServicesData = {
  title: "How OpenxAI can help you",
  subtitle:
    "Build ontop of the most established industry frameworks for AI on Solana, including the Tars proprietary framework.",
  categories: ["Creator", "Consumer"],
  services: [
    {
      id: "service-01",
      title: "Decentralized Hosting & VMs",
      icon: "server",
      category: "Creator",
    },
    {
      id: "service-02",
      title: "AI Model Marketplace",
      icon: "marketplace",
      category: "Consumer",
    },
    {
      id: "service-03",
      title: "Compute Resources",
      icon: "gpu",
      category: "Creator",
    },
    {
      id: "service-04",
      title: "API Gateway",
      icon: "api",
      category: "Consumer",
    },
    {
      id: "service-05",
      title: "Smart Contracts",
      icon: "contract",
      category: "Creator",
    },
    {
      id: "service-06",
      title: "Developer Tools",
      icon: "tools",
      category: "Creator",
    },
  ],
};

export default servicesData;
