"use client";

import { useSidebar } from "@/components/ui/sidebar"
import { Button } from "./ui/button";
import { Menu, XIcon } from "lucide-react";

export function SidebarCustomTrigger() {
  const { toggleSidebar, openMobile, isMobile, open } = useSidebar()
  const isOpen = isMobile ? openMobile : open

  return (
    <Button
      asChild
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon-sm"
      onClick={toggleSidebar}
      aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      aria-expanded={isOpen}
      className="flex md:hidden bg-transparent! hover:bg-transparent!"
      data-cursor="hover"
    >
      {isOpen ? <XIcon className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </Button>
  )
}