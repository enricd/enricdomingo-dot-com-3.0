import { motion } from "framer-motion";
import React from "react";

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
        initial={{ opacity:0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            About
        </h3>

        <motion.img 
            initial={{
                x: -200,
                opacity: 0
            }}
            transition={{
                duration: 1.2,
            }}
            whileInView={{ 
                x: 0,
                opacity: 1
            }}
            src="https://github.com/enricd/enricdomingo-dot-com-3.0/blob/main/public/profile1.png?raw=true" 
            className="-mb-32 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-72 md:h-96 xl:w-[400px] xl:h-[500px]"
        />

        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">
                Some of my{" "}<span className="underline decoration-[#3c968b]">background</span>
            </h4>
            <p className="text-base">
                👋 I'm Enric and I'm from Barcelona. I'm currently working at ERNI in a Boehringer Ingelheim's pharma 
                project as a Senior ML and Software Engineer. I'm also a Technical Coach and the Lead of the Data and AI Community at ERNI.
            </p>
            <p className="text-base">
                I studied 60% of the Aerospace Engineering degree and co-founded Venturi Unmanned 
                Technologies during that time, a startup designing, building and operating VTOL drones for 
                long range industrial inspections. During those years, I started learning more about software   
                and AI, and later I switched my studies to the Computer Engineering degree while learning more 
                about Machine Learning and MLOps by my own.
            </p>
            
        </div>
    </motion.div>
  )
}