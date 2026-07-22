import { Inter, Roboto_Mono } from "next/font/google";
import localFont from "next/font/local";

const inter_init = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});
const roboto_init = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500", "600", "700"],
});

const cera_round_pro_init = localFont({
  src: [
    {
      path: "./fonts/CeraRoundProRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/CeraRoundProMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/CeraRoundProBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/CeraRoundProBlack.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-cera",
});

export const inter = inter_init.variable;
export const roboto = roboto_init.variable;
export const ceraRoundPro = cera_round_pro_init.variable;
