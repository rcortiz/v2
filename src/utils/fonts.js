import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter_init = Inter({ subsets: ["latin"], variable: "--font-inter" });

const cera_round_pro_init = localFont({
  src: [
    {
      path: "./fonts/CeraRoundProThin.otf",
      weight: "100",
      style: "thin",
    },
    {
      path: "./fonts/CeraRoundProLight.otf",
      weight: "300",
      style: "light",
    },
    {
      path: "./fonts/CeraRoundProRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/CeraRoundProMedium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "./fonts/CeraRoundProBold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "./fonts/CeraRoundProBlack.otf",
      weight: "900",
      style: "black",
    },
  ],
  variable: "--font-cera",
});

const sf_pro_display_init = localFont({
  src: [
    {
      path: "./fonts/SFPRODISPLAYREGULAR.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/SFPRODISPLAYMEDIUM.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "./fonts/SFPRODISPLAYBOLD.otf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-sfpro",
});

export const inter = inter_init.variable;
export const ceraRoundPro = cera_round_pro_init.variable;
export const sfProDisplay = sf_pro_display_init.variable;
