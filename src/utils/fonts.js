import { Inter, Space_Grotesk } from "next/font/google";

const inter_init = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});
const space_grotesk_init = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["400", "500", "600", "700"],
});

export const inter = inter_init.variable;
export const spaceGrotesk = space_grotesk_init.variable;
