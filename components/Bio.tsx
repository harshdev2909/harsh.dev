"use client";
import React from "react";
import myImg from "../public/myImg.jpg";
import { Spotlight } from "../components/ui/Spotlight";
import Image from "next/image";

import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { TextEffect } from "./ui/TextEffect";


export function Bio() {
  return (
    <div className="bg-grid-white/[0.02] relative  flex  h-full w-full overflow-hidden bg-black/[0.96] py-8 antialiased md:items-center md:justify-center">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <Spotlight
        className="-top-40 right-0 md:-top-20 md:right-60"
        fill="gray"
      />
      <div className=" relative z-10  mx-auto flex w-full max-w-[800px] flex-col items-center justify-center  p-4 pt-4 sm:pt-20 md:pt-0">
        <Image
          src={myImg}
          alt=""
          className="h-[300px] w-[400px] rounded-sm object-contain sm:h-[400px] sm:w-[600px]"
        />
        
        <h1 className="mt-4 w-full text-left  text-[24px] font-medium text-neutral-300">
          Short Bio
        </h1>
        <div className="flex h-[400px] w-full items-center justify-center overflow-hidden  sm:h-full text-green-500 font-semibold">
        <TextEffect words={"I'm a  product maker(designer And a Full Stack WebDeveloper) Currently Based in India. I'm Passionate about building products that helps people and make difference in the world. currently I'm Working on web3 Technologies."}>
                
        </TextEffect>
        </div>
      </div>
    </div>
  );
}
