"use client";

import { Dock, DockIcon } from "./ui/dock";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Menus from "@/lib/Menus";
import Link from "next/link";
import { SidebarSeparator } from "./ui/sidebar";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

const DATA = {
  navbar: [
    Menus.navigation.home,
  ],
  social: [
    Menus.social.github,
    Menus.social.linkedIn,
  ],
  setting: [
    Menus.setting.themeToggle,
  ]
}

const AppFloatingDock = () => {
  return (
    <div className="fixed bottom-4 flex items-center justify-center w-full z-50">
      <TooltipProvider>
        <Dock direction="middle" className="bg-slate-950/10 backdrop-blur-sm border border-primary/20 rounded-full">
        {
          DATA.navbar.map((nav) => (
            <DockIcon key={nav.name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={nav.href}
                    aria-label={nav.name}
                    onClick={(e) => {
                      e.preventDefault();
                      window.scrollTo({ top: 0 });
                      window.history.replaceState(null, "", window.location.pathname + window.location.search);
                    }}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full"
                    )}
                  >
                    {nav.icon && <nav.icon className="size-4" />}
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{nav.name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))
        }
          <SidebarSeparator orientation="vertical" />
        {
          DATA.social.map((social) => (
            <DockIcon key={social.name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full"
                    )}
                  >
                    {social.icon && <social.icon className="size-4" />}
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{social.name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))
        }
          <SidebarSeparator orientation="vertical" />
        {
          DATA.setting.map((setting) => (
            <DockIcon key={setting.name}>
              <p 
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "size-12 rounded-full"
                )}
              >
                {setting.element}
              </p>
            </DockIcon>
          ))
        }
        </Dock>
      </TooltipProvider>
    </div>
  );
}

export default AppFloatingDock;