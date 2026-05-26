"use client";

import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import LogoSvg from "@/assets/svgs/melvstein_logo.svg";

type MelvsteinLogoSvgProps = ComponentProps<"svg">;

const MelvsteinLogoSvg = ({ className, ...props }: MelvsteinLogoSvgProps) => {
    return <LogoSvg
        className={cn("w-6 h-6 md:w-7 md:h-7 fill-current text-primary", className)}
        {...props}
      />
};

export default MelvsteinLogoSvg;