"use client";
import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export function BentoGridSecondDemo() {
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center ">
    <BentoGrid className="max-w-9xl scale-110 mx-auto md:auto-rows-[20rem] ">
      {items.map((item, i) => (
        // <Link href={`/${item.link}`}>
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
    </div>
  );
}

export default function Page()
{
  return(
    <HeroHighlight>
      <BentoGridSecondDemo />
    </HeroHighlight>
  )
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "Smart Glasses",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: 
    <div onClick={()=> {window.location.href = '/distance'}} className=" cursor-pointer rounded-3xl flex justify-center overflow-hidden"><Image src='/Smart Glasses.png' width={650} height={150} alt="smartglass"/></div>,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    link: "distance"
  },
  {
    title:"Smart Monitoring",
    description: "Dive into the transformative power of technology.",
    header: <div onClick={()=> {window.location.href = '/dashboard'}} className=" cursor-pointer rounded-3xl flex justify-center overflow-hidden"><Image src='/smartband.png' width={300} height={150} alt="smartband"/></div>,
    
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Scial Engagement platform",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <div onClick={()=> {window.location.href = '/socials'}} className="rounded-3xl flex justify-center overflow-hidden"><Image src='/care.jpg' width={300} height={150} alt="smartband"/></div>,
    
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Care NET",
    description:
      "Seamless integration of Medical History, appointment and TeleMedicine ",
    header:<div onClick={()=> {window.location.href = '/appointments'}} className=" cursor-pointer rounded-3xl flex justify-center overflow-hidden"><Image src='/carenet.jpg' width={650} height={150} alt="smartband"/></div>,
    
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];

