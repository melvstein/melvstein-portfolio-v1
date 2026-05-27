"use client";

import { Pointer } from "./ui/pointer";

const CursorPointer = () => {
  return (
      <Pointer className="hidden md:flex fill-blue-500 z-60 hover:cursor-crosshair!" />
  )
  };

export default CursorPointer;