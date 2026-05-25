"use client";

import Link from "next/link";
import MelvsteinLogo from "@/assets/svgs/melvstein_logo.svg";
import { Menu } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";

type Menu = {
  title: string;
  href: string;
  description: string;
};

const menus: Menu[] = [
  {
    title: "Projects",
    href: "#projects",
    description: "A collection of my projects, showcasing my skills and experience.",
  },
  {
    title: "Skills",
    href: "#skills",
    description: "A list of my technical skills and proficiencies.",
  },
  {
    title: "Experience",
    href: "#experience",
    description: "A summary of my work experience and professional background.",
  }
];

const Navbar = () => {
  return (
    <nav className="fixed z-10 top-0 inset-x-0 w-full h-16 flex items-center justify-between px-8 border-b border-primary bg-slate-950/10 backdrop-blur-sm">
        <Logo />
        <DesktopMenus />
        <MobileMenus />
    </nav>
  );
}

export default Navbar;

const DesktopMenus = () => {
  return (
    <div className="hidden md:flex items-center gap-4">
      <NavigationMenus />
      <LetsConnect />
    </div>
  );
};

const MobileMenus = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Menu className="w-6 h-6" />
      </SheetTrigger>

      <SheetContent
        showCloseButton={false}
        className="bg-slate-950 text-slate-100 border-primary"
      >
        <SheetHeader>
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <Logo />
        </SheetHeader>
        <div className="flex flex-col items-center w-full">
          <NavigationMenus />
        </div>
        <SheetFooter className="flex flex-col gap-3">
          <LetsConnect />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

const Logo = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.dispatchEvent(new CustomEvent("scroll-home"));
      
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }
    }
  };

  return (
    <Link href="/" onClick={handleClick} className="flex items-center justify-center gap-2">
      <MelvsteinLogo
        className="w-7 h-7 fill-current text-primary"
      />
      <p className="font-heading text-xl font-bold tracking-wider bg-linear-to-r from-primary to-cyan-300 bg-clip-text text-transparent">
        MELVSTEIN.DEV
      </p>
    </Link>
  );
};

const NavigationMenus = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex flex-col md:flex-row items-center md:items-center justify-center">

        {
          menus.map((menu) => (
            <NavigationMenuItem key={menu.title}>
              <NavigationMenuLink asChild className="font-semibold hover:bg-primary/20 hover:border-primary/60 transition-all duration-300 active:bg-primary/30 active:hover:bg-primary/40 focus:bg-primary/30 focus:hover:bg-primary/40">
                <Link href={menu.href} className="flex items-center">
                  {menu.title}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))
        }

      </NavigationMenuList>
    </NavigationMenu>
  )
};

const LetsConnect = () => {
  return (
    <Link
      href="#contact"
      className="flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-primary/30 bg-primary/10 hover:bg-primary/20 hover:border-primary/60 transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.1)]"
    >
      {"Let's Connect"}
    </Link>
  );
};