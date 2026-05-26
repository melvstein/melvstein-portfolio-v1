"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { SidebarCustomTrigger } from "./SidebarCustomTrigger"
import { LetsConnect, menus } from "./AppNavbar";
import { Home, Search, Settings } from "lucide-react"
import { Dock, DockIcon } from "@/components/ui/dock"
import { Button } from "./ui/button";
import Logo from "./Logo";

export function AppSidebar() {
  return (
    <Sidebar
      className="flex md:hidden z-50"
      side="right"
    >
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <SidebarCustomTrigger />
          <Logo />
        </div>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarMenu>
          {menus.map((menu) => (
            <SidebarMenuItem key={menu.name}>
              <SidebarMenuButton asChild>
                <a href={menu.href}>
                  <span>{menu.name}</span>
                </a>
              </SidebarMenuButton>
              <SidebarSeparator />
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <LetsConnect />
      <SidebarSeparator />
        <div className="flex items-center justify-between gap-4 px-8">
          <Button variant="ghost" size="icon-sm" className="hover:text-secondary hover:bg-transparent!">
            <Home />
          </Button>
          <Button variant="ghost" size="icon-sm" className="hover:text-secondary hover:bg-transparent!">
            <Settings />
          </Button>
          <Button variant="ghost" size="icon-sm" className="hover:text-secondary hover:bg-transparent!">
            <Search />
          </Button>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}