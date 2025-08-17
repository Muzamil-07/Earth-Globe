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
        color1: "rgba(0,0,0,1)", //rgb(0,0,0)
        color2: "rgba(3,28,56,1)", //rgb(3,28,56)
        color3: "rgba(23,84,146,1)", //rgb(23,84,146)
        color4: "rgba(71,146,207,0.65)", //rgb(71,146,207)
        color5: "rgba(242,248,252,0.6)" //rgb(242,248,252)
      },
      stops: {
        stop1: "0%",
        stop2: "25.39%",  
        stop3: "49.77%",
        stop4: "72.24%",
        stop5: "100%"
      },
      zIndex: 1
    }
  ]
};
