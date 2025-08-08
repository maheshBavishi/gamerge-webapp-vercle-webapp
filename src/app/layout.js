import { Plus_Jakarta_Sans, Poppins, Unbounded } from "next/font/google";
import "./globals.css";
import "./theme.css";
import Header from "@/components/header";
import "../scss/main.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@rainbow-me/rainbowkit/styles.css";
import Footer from "@/components/footer";
import Providers from "./providers"
import ApolloClientProvider from "@/components/ApolloClientProvider";
import { Toaster } from "react-hot-toast";
import TelegramIconFixed from "@/components/telegramIconFixed";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "800", "700"],
  display: "swap",
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["400", "500", "600", "800", "700", "800", "900"],
  display: "swap",
});

const plus_jakarta = Plus_Jakarta_Sans({
  variable: "--plus-jakarta",
  subsets: ["latin"],
  weight: ["800"],
  display: "swap",
  
});

export const metadata = {
  title: "gamerge.ai",
  description: "GAMERGE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="video" href="/assets/video/video.mp4" fetchPriority="high" />
      </head>
      <body className={`${poppins.variable} ${unbounded.variable} ${plus_jakarta.variable}`}>
        <Providers>
          <Toaster position="top-right" />
          <Header />
          <TelegramIconFixed/>
          {children}
          <Footer />
        </Providers>
      </body >
    </html >
  );
}
