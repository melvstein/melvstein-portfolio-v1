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
import LINK from "@/lib/link";
import Menus from "@/data/Menus";
import { Icons } from "./Icons";

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
                <SidebarMenuButton asChild>
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
            <Button variant="ghost" size="icon-sm" className="hover:text-secondary skin-bg-gradient">
              <Link href={LINK.GITHUB} target="_blank" rel="noopener noreferrer">
                <Icons.github />
              </Link>
            </Button>
            <Button variant="ghost" size="icon-sm" className="hover:text-secondary skin-bg-gradient">
              <Link href={LINK.LINKEDIN} target="_blank" rel="noopener noreferrer">
                <Icons.linkedin />
              </Link>
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