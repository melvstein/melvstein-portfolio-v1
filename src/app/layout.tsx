import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import AmbientBackground from "@/components/AmbientBackground";

const spaceGroteskHeading = Space_Grotesk({subsets:['latin'],variable:'--font-heading'});

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Melvstein Portfolio",
  description: "A portfolio website built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable, spaceGroteskHeading.variable)}
    >
      <body className="min-h-full h-screen w-screen overflow-x-auto overflow-y-hidden flex bg-background text-foreground selection:bg-blue-500/30 selection:text-blue-200 dark:selection:bg-blue-500/50 dark:selection:text-blue-200">
        <AmbientBackground />
        {children}
      </body>
    </html>
  );
}
  