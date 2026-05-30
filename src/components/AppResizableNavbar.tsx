"use client";
import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Menus from "@/data/Menus";
import { KofiLink, LetsConnect } from "@/components/AppNavbar";

type NavItem = { name: string; link: string };

const navItems: NavItem[] = Object.values(Menus.navigation).map((menu) => ({
  name: menu.name,
  link: menu.href,
}));

const handleNavClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
) => {
  if (href === "/") {
    e.preventDefault();
    window.scrollTo({ top: 0 });
    window.history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search,
    );
  } else if (href.startsWith("#")) {
    e.preventDefault();
    document.getElementById(href.slice(1))?.scrollIntoView();
  }
};

const PortfolioNavItems = ({ className }: { className?: string }) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-2",
        className,
      )}
    >
      {navItems.map((item, idx) => (
        <a
          key={`link-${idx}`}
          href={item.link}
          onMouseEnter={() => setHovered(idx)}
          onClick={(e) => handleNavClick(e, item.link)}
          className="relative px-4 py-2 font-semibold text-neutral-600 dark:text-neutral-300"
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-primary/20"
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};

export function AppResizableNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar className="fixed top-0 z-50">
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <PortfolioNavItems />
        <div className="flex items-center gap-4">
          <LetsConnect />
          <KofiLink />
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={(e) => {
                handleNavClick(e, item.link);
                setIsMobileMenuOpen(false);
              }}
              className="relative font-semibold text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-4">
            <LetsConnect onClick={() => setIsMobileMenuOpen(false)} />
            <NavbarButton
              href={Menus.social.kofi.url}
              as="a"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              className="flex w-full items-center justify-center gap-2"
            >
              <Menus.social.kofi.icon className="w-5 h-5" />
              <span>Support on Ko-fi</span>
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
