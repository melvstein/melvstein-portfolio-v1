import { Icons } from "@/components/Icons";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { HomeIcon } from "lucide-react"
import LINK from "../lib/link";

export type Menu = {
  href: string;
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>> | null;
}

export type Social = {
  name: string;
  url: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  tooltip: string;
}

export type Menus = {
  navigation: {
    home: Menu;
    about: Menu;
    skills: Menu;
    experience: Menu;
    projects: Menu;
  },
  social: {
    github: Social;
    linkedIn: Social;
    x: Social;
    kofi: Social;
  },
  setting: {
    themeToggle: {
      name: string;
      element: React.ReactElement;
    }
  }
}

const Menus : Menus = {
  navigation: {
    home: {
      href: "/",
      name: "Home",
      icon: HomeIcon,
    },
    about: {
      href: "#about",
      name: "About",
      icon: null,
    },
    experience: {
      href: "#experience",
      name: "Experience",
      icon: null,
    },
    skills: {
      href: "#skills",
      name: "Skills",
      icon: null,
    },
    projects: {
      href: "#projects",
      name: "Projects",
      icon: null,
    },
  },
  social: {
    github: {
      name: "GitHub",
      url: LINK.GITHUB,
      icon: Icons.github,
      tooltip: "GitHub",
    },
    linkedIn: {
      name: "LinkedIn",
      url: LINK.LINKEDIN,
      icon: Icons.linkedin,
      tooltip: "LinkedIn",
    },
    x: {
      name: "X",
      url: LINK.X,
      icon: Icons.x,
      tooltip: "X (formerly Twitter)",
    },
    kofi: {
      name: "Ko-fi",
      url: LINK.KOFI,
      icon: Icons.kofi,
      tooltip: "Buy me a coffee on Ko-fi!",
    },
  },
  setting: {
    themeToggle: {
      name: "Theme Toggle",
      element: <AnimatedThemeToggler
        variant="hexagon"
        className="flex items-center justify-center"
        fromCenter
      />,
    }
  }
}

export default Menus;