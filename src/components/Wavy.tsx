"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";

export function Wavy() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center text-white">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full ">
        <h2 className="text-6xl font-bold ">Meet Our Instructors</h2>

        <p className="mt-3">
          Discover the talented profesionals who will guide your musical journey
        </p>
      </WavyBackground>
    </div>
  );
}
