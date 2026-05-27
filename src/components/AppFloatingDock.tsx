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
            <DockIcon key={nav.name} className="bg-black/10 dark:bg-white/10">
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
            <DockIcon key={social.name} className="bg-black/10 dark:bg-white/10">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
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
            <DockIcon key={setting.name} className="bg-black/10 dark:bg-white/10">
              {setting.element}
            </DockIcon>
          ))
        }
        </Dock>
      </TooltipProvider>
    </div>
  );
}

export default AppFloatingDock;