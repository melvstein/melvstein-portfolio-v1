"use client";

import { FloatingDock } from "@/components/ui/floating-dock";

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconHome,
} from "@tabler/icons-react";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";

const AppFloatingDock = () => {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Theme Toggle",
      icon: (
        <AnimatedThemeToggler
                      variant="hexagon"
                      fromCenter
                    />
      ),
      href: "#",
    },
  ];

  return (
    <div className="fixed bottom-4 flex items-center justify-center w-full z-50">
      <FloatingDock
        items={links}
      />
    </div>
  );
}

export default AppFloatingDock;
