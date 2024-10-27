"use client";
import React from "react";
import myImg from "../public/myImg.jpg";
import { Spotlight } from "../components/ui/Spotlight";
import Image from "next/image";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { TextEffect } from "./ui/TextEffect";
import IconCloud from "@/components/ui/icon-cloud";
const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export function Bio() {
  return (
    <NeonGradientCard>
      <h1 className="mt-4 w-full text-center  text-[34px] font-medium text-neutral-300">
         Dynamic About
        </h1>
    <div className="flex space-x-1">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <Spotlight
        className="-top-40 right-0 md:-top-20 md:right-60"
        fill="gray"
      />
      
      <div className=" relative z-10 gap-5  mx-auto flex w-full max-w-[8000px] space-x-1 items-center justify-center  p-4 pt-4 sm:pt-20 md:pt-0">
        
        <Image
          src={myImg}
          alt=""
          className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 "
        />
        
        
        
        <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
      </div>
    </div>
    </NeonGradientCard>
  );
}
