import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {}

export default function Hero({}: Props) {
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
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img 
        className="relative rounded-full h-48 w-48 mx-auto object-cover bg-[#3c968b]/80"
        src="https://github.com/enricd/enricdomingo-dot-com-3.0/blob/main/public/profile0.png?raw=true" 
        alt="" 
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[7px]">
          Machine Learning and Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="#3c968b" />
        </h1>

        <div className="pt-5">
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