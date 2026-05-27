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
import { LetsConnect, menus } from "./AppNavbar";
import { Button } from "./ui/button";
import Logo from "./Logo";
import { Github, Linkedin } from "./SvgIcons";
import Link from "next/link";
import { LINK } from "@/constants/link";

export function AppSidebar() {
  const { toggleSidebar } = useSidebar()

  return (
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
          {menus.map((menu) => (
            <SidebarMenuItem key={menu.name}>
              <SidebarMenuButton asChild>
                <a href={menu.href} onClick={toggleSidebar}>
                  <span>{menu.name}</span>
                </a>
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
          <Button variant="ghost" size="icon-sm" className="hover:text-secondary skin-bg-gradient">
            <Link href={LINK.GITHUB} target="_blank" rel="noopener noreferrer">
              <Github />
            </Link>
          </Button>
          <Button variant="ghost" size="icon-sm" className="hover:text-secondary skin-bg-gradient">
            <Link href={LINK.LINKEDIN} target="_blank" rel="noopener noreferrer">
              <Linkedin />
            </Link>
          </Button>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}