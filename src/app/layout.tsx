import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ThemeProvider from "@/components/providers/ThemeProvider";
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar";
import AppNavbar from "@/components/AppNavbar";
import AppFloatingDock from "@/components/AppFloatingDock";
import CustomCursor from "@/components/CustomCursor";

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
      className={cn("overflow-auto scroll-smooth scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable, spaceGroteskHeading.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-screen w-full bg-background text-foreground selection:bg-primary/30 selection:text-blue-200 dark:selection:bg-primary/50 dark:selection:text-blue-200">
        <CustomCursor />
        <ThemeProvider>
          <SidebarProvider>
            <AppSidebar />
            <AppNavbar />
            {children}
            <AppFloatingDock />
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
  