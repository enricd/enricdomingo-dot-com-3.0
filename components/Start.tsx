import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import BackgroundCircles from "./BackgroundCircles";
import profile0 from "../public/profile0.png";

type Props = {}

export default function Start({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, my name is Enric!!",
      "MLOps, Pytorch, Tensorflow, Sklearn",
      "data, data and more data...",
      "🐍 Python 🐍",
      "🧬 Learning Bioinformatics",
      "Random Kaggler",
      "Frontend (Javascript, React.js)", 
      "Backend (FastAPI, Flask, Next.js)", 
      "Databases (PostgreSQL, SQLite, ORMs)",
      "Cloud (AWS, GCP, Azure)",
      "Drones 📡🛩️",
      "but also 🏂 🧗 🏄 🏔️ 🏃",
    ],
    loop: true,
    delaySpeed: 1500,
  });

  return (
    <div className="h-screen flex flex-col space-y-20 sm:space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image 
        priority
        className="relative rounded-full bottom-4 sm:bottom-0 h-32 w-32 sm:h-48 sm:w-48 mx-auto object-cover bg-[#3c968b]/80"
        src={profile0} 
        alt="Enric Domingo profile" 
      />
      <div className="z-20">
        <h2 className="text-xs sm:text-sm uppercase text-gray-400 pb-5 tracking-[5px]">
          Machine Learning and Software Engineer
        </h2>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold px-6">
          <span>{text}</span>
          <Cursor cursorColor="#3c968b" />
        </h1>

        <div className="pt-10">
          <Link href="#about">    {/* the href will point to the section id that has been assigned in the index.tsx */}
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}