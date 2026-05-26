"use client";

import { useSidebar } from "@/components/ui/sidebar"
import { Button } from "./ui/button";
import MelvsteinLogoSvg from "./MelvsteinLogoSvg";

export function SidebarCustomTrigger() {
  const { toggleSidebar } = useSidebar()

  return <Button
      asChild
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon-sm"
      onClick={toggleSidebar}
      className="flex md:hidden hover:text-secondary hover:bg-transparent!"
    >
      <MelvsteinLogoSvg />
    </Button>
}