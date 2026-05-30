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
}

export type Menus = {
  navigation: {
    home: Menu;
    projects: Menu;
    skills: Menu;
    experience: Menu;
  },
  social: {
    github: Social;
    linkedIn: Social;
    x: Social;
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
    },
    linkedIn: {
      name: "LinkedIn",
      url: LINK.LINKEDIN,
      icon: Icons.linkedin,
    },
    x: {
      name: "X",
      url: LINK.X,
      icon: Icons.x,
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