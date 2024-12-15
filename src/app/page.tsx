"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { useRouter } from "next/navigation";

export default function Explore() {
  const router=useRouter();
  return (
    <div className="h-full w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-5xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Hi, I&apos;m Mohit
        </h1>
        <h1 className="relative z-10 text-5xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Full Stack Developer
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-lg text-center relative z-10">
          I love building intuitive web applications using modern technologies. Constantly exploring new ideas to solve
          real-world challenges and deliver impactful solutions.
        </p>
        <button className="p-[3px] z-10 relative mt-6 mx-auto block" onClick={()=>{router.push("/experience")}}>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
          View My Experience
        </div>
      </button>
      </div>
      <BackgroundBeams />
    </div>
  );
}
