"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { ScrollProgress } from "@/components/ui/scroll-progress"

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
import { SidebarCustomTrigger } from "./SidebarCustomTrigger";
import Logo from "./Logo";
import Menus from "@/data/Menus";

const AppNavbar = () => {
  return (
    <nav className="fixed z-40 top-0 inset-x-0 w-full h-16 flex items-center justify-between px-8 bg-slate-950/10 backdrop-blur-sm border-b border-primary/20">
        <Logo />
        <DesktopMenus />
        <MobileSidebarMenus />
        <ScrollProgress className="top-16.25 bg-linear-to-r from-primary via-secondary to-primary" />
    </nav>
  );
}

export default AppNavbar;

const DesktopMenus = () => {
  return (
    <div className="hidden md:flex items-center gap-4">
      <NavigationMenus />
      <LetsConnect />
      <Link
        href={Menus.social.kofi.url}
        target="_blank"
        rel="noopener noreferrer"
      >
          <Menus.social.kofi.icon className="w-5 h-5 hover:text-secondary" />
      </Link>
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
        className="bg-slate-950 text-slate-100 border-primary z-50"
      >
        <SheetHeader>
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <Logo />
        </SheetHeader>
        <div className="flex flex-col items-start px-4 w-full">
          <NavigationMenus />
        </div>
        <SheetFooter className="flex flex-col gap-3">
          <LetsConnect />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

const MobileSidebarMenus = () => {
  return <SidebarCustomTrigger />;
};

const NavigationMenus = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex flex-col md:flex-row items-start md:items-center justify-start">

        {
          Object.values(Menus.navigation).map((menu) => (
            <NavigationMenuItem key={menu.name}>
              <NavigationMenuLink
                href={menu.href}
                onClick={(e) => {
                    if (menu.href === "/") {
                        e.preventDefault();
                        window.scrollTo({ top: 0 });
                        window.history.replaceState(null, "", window.location.pathname + window.location.search);
                    } else if (menu.href.startsWith("#")) {
                        e.preventDefault();
                        document.getElementById(menu.href.slice(1))?.scrollIntoView();
                    }
                }}
                className="font-semibold hover:bg-primary/20 hover:border-primary/60 transition-all duration-300 active:bg-primary/30 active:hover:bg-primary/40 focus:bg-primary/30 focus:hover:bg-primary/40"
              >
                  {menu.name}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))
        }

      </NavigationMenuList>
    </NavigationMenu>
  )
};

export const LetsConnect = ({ onClick }: { onClick?: () => void }) => {
  return (
    <Link
      href="#contact"
      onClick={(e) => {
        e.preventDefault();
        document.getElementById("contact")?.scrollIntoView();
        onClick?.();
      }}
      className="flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-primary/30 bg-primary/10 hover:bg-primary/20 hover:border-primary/60 transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.1)]"
    >
      {"Let's Connect"}
    </Link>
  );
};