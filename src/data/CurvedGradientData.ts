interface GradientLayer {
  name: string;
  direction: string;
  colors: {
    color1: string;
    color2: string;
    color3: string;
    color4: string;
    color5: string;
  };
  stops: {
    stop1: string;
    stop2: string;
    stop3: string;
    stop4: string;
    stop5: string;
  };
  zIndex: number;
}

interface CurvedGradientConfig {
  layers: GradientLayer[];
}

export const curvedGradientData: CurvedGradientConfig = {
  layers: [
    {
      name: "Main gradient",
      direction: "180deg",
      colors: {
        color1: "#000000", // Black at top
        color2: "#031C38", // Deep navy blue
        color3: "#175492", // Medium blue
        color4: "#4792CF", // Light blue
        color5: "#F2F8FC"  // Very light blue/white at bottom
      },
      stops: {
        stop1: "0%",
        stop2: "25%",  
        stop3: "50%",
        stop4: "75%",
        stop5: "100%"
      },
      zIndex: 1
    }
  ]
};
