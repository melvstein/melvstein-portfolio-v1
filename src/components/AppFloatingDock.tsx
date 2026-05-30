"use client";

import { Dock, DockIcon } from "./ui/dock";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Menus from "@/data/Menus";
import Link from "next/link";
import { SidebarSeparator } from "./ui/sidebar";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

const data = {
  navbar: [
    Menus.navigation.home,
  ],
  social: [
    Menus.social.github,
    Menus.social.linkedIn,
    Menus.social.x,
    Menus.social.kofi,
  ],
  setting: [
    Menus.setting.themeToggle,
  ]
}

const AppFloatingDock = () => {
  return (
    <div className="fixed bottom-4 flex items-center justify-center w-full z-50">
      <TooltipProvider>
        <Dock direction="middle" className="bg-slate-950/10 backdrop-blur-sm border border-primary/20">
        {
          data.navbar.map((nav) => (
            <DockIcon key={nav.name} className="hover:bg-primary/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={nav.href}
                    aria-label={nav.name}
                    onClick={(e) => {
                      e.preventDefault();
                      if (nav.href === "/") {
                        window.scrollTo({ top: 0 });
                        window.history.replaceState(null, "", window.location.pathname + window.location.search);
                      }
                    }}
                    className={cn(
                      buttonVariants({ variant: "ghost" }),
                      "size-12 rounded-full hover:bg-primary!"
                    )}
                  >
                    {nav.icon && <nav.icon />}
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
          data.social.map((social) => (
            <DockIcon key={social.name} className="hover:bg-primary/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full hover:bg-primary!"
                    )}
                  >
                    {social.icon && <social.icon className="size-4" />}
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{social.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))
        }
          <SidebarSeparator orientation="vertical" />
        {
          data.setting.map((setting) => (
            <DockIcon key={setting.name} className="hover:bg-primary/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]">
              <p 
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "size-12 rounded-full hover:bg-primary!"
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