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
  useSidebar,
} from "@/components/ui/sidebar"
import { SidebarCustomTrigger } from "./SidebarCustomTrigger"
import { LetsConnect } from "./AppNavbar";
import { Button } from "./ui/button";
import Logo from "./Logo";
import Link from "next/link";
import Menus from "@/data/Menus";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";

export function AppSidebar() {
  const { toggleSidebar, isMobile } = useSidebar()

  return (
    <>
    {isMobile && (
      <Sidebar
        className="flex md:hidden z-50"
        side="right"
      >
        <SidebarHeader>
          <div className="flex items-center justify-between">
            <Logo onClick={toggleSidebar} />
            <SidebarCustomTrigger />
          </div>
        </SidebarHeader>
        <SidebarSeparator />
        <SidebarContent>
          <SidebarMenu>
            {Object.values(Menus.navigation).map((menu) => (
              <SidebarMenuItem key={menu.name}>
                <SidebarMenuButton className="hover:bg-primary/10 bg-transparent hover:rounded-none" asChild>
                  <Link href={menu.href} onClick={toggleSidebar}>
                    <span>{menu.name}</span>
                  </Link>
                </SidebarMenuButton>
                <SidebarSeparator />
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <LetsConnect onClick={toggleSidebar} />
        <SidebarSeparator />
          <div className="flex items-center justify-center gap-4">
            {
              Object.values(Menus.social).map((social) => (
                <Button key={social.name} variant="ghost" size="icon-sm" className="hover:bg-transparent">
                  <Link href={social.url} target="_blank" rel="noopener noreferrer">
                    <social.icon />
                  </Link>
                </Button>
              ))
            }

            <Button variant="ghost" size="icon-sm" className="hover:bg-transparent">
              <AnimatedThemeToggler
                variant="hexagon"
                className="flex items-center justify-center"
                fromCenter
              />
            </Button>
          </div>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      )
    }
    </>
  )
}