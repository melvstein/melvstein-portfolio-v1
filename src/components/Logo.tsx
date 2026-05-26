"use client";

import Link from "next/link";
import MelvsteinLogoSvg from "@/assets/svgs/melvstein_logo.svg";

const Logo = () => {
  return (
    <Link
      href="/"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0 });
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
      }}
      className="flex items-center justify-start md:justify-center gap-2"
    >
      <MelvsteinLogoSvg
        className="hidden md:flex w-6 h-6 md:w-7 md:h-7 fill-current text-primary"
      />
      <p className="font-heading text-lg md:text-xl font-bold tracking-wider bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
        MELVSTEIN.DEV
      </p>
    </Link>
  );
};

export default Logo;