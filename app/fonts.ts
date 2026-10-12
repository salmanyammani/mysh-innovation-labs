import localFont from "next/font/local";
import {
  Bebas_Neue,
  Cookie,
  Inter,
  Montserrat,
  Playfair_Display,
  Plus_Jakarta_Sans,
  Poppins,
  Prata,
} from "next/font/google";

/*
  Every family the starter pulled in over the network is loaded through
  `next/font` instead: self-hosted, subset, and preloaded with no layout shift.
  Each one is exposed as a `--ff-*` CSS variable that app/globals.css maps onto
  a Tailwind `font-*` utility.
*/

export const helvetica = localFont({
  src: "./fonts/Helvetica.ttf",
  variable: "--ff-helvetica",
  display: "swap",
});

export const spaceGrotesk = localFont({
  src: "./fonts/SpaceGrotesk.ttf",
  variable: "--ff-space",
  display: "swap",
});

export const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--ff-jakarta",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--ff-inter",
  display: "swap",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--ff-montserrat",
  display: "swap",
});

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--ff-playfair",
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--ff-poppins",
  display: "swap",
});

export const prata = Prata({
  subsets: ["latin"],
  weight: "400",
  variable: "--ff-prata",
  display: "swap",
});

export const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--ff-bebas",
  display: "swap",
});

export const cookie = Cookie({
  subsets: ["latin"],
  weight: "400",
  variable: "--ff-cookie",
  display: "swap",
});

/** Every font variable, ready to drop on <html>. */
export const fontVariables = [
  helvetica.variable,
  spaceGrotesk.variable,
  jakarta.variable,
  inter.variable,
  montserrat.variable,
  playfairDisplay.variable,
  poppins.variable,
  prata.variable,
  bebasNeue.variable,
  cookie.variable,
].join(" ");
