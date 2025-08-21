interface CTACardData {
  title: string;
  description: string;
  image: string;
  cards: {
    imageOverlay: string;
    title: string;
    watchText: string;
  }[];
}

export const ctaData: CTACardData = {
  title: "Connect with OpenxAI",
  description: "OpenxAI community events join AI community to connect, network, and learn.",
  image: '/cta-bg.jpg',
  cards: [
    {
      imageOverlay: '/cta-card-bg.jpg',
      title: "Hack Node Australia",
      watchText: "Watch recap"
    },
    {
      imageOverlay: '/cta-card-bg.jpg',
      title: "Hack Node Australia",
      watchText: "Watch recap"
    },
    {
      imageOverlay: '/cta-card-bg.jpg',
      title: "Hack Node Australia",
      watchText: "Watch recap"
    }
  ]
};