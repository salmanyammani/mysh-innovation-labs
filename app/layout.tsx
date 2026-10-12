import type { Metadata } from "next";
import { fontVariables } from "./fonts";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Mysh Innovation Labs",
    template: "%s — Mysh Innovation Labs",
  },
  description:
    "Mysh Innovation Labs — brand identity, UI/UX design, and development for teams who care about the details.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontVariables} dark h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col">
        <div className="min-h-screen bg-blue-800 text-zinc-800">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
