import { motion } from "framer-motion";
import React from "react";

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
        initial={{ opacity:0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-5 md:px-10 justify-evenly mx-auto items-center"
    >
        <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
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
            className="mt-14 -mb-16 md:mb-0 flex-shrink-0 w-44 h-44 rounded-full object-cover md:rounded-lg md:w-72 md:h-96 xl:w-[400px] xl:h-[500px]"
        />

        <div className="space-y-6 sm:space-y-10 px-0 md:px-10">
            <h4 className="text-xl md:text-4xl font-semibold">
                Some of my{" "}<span className="underline decoration-[#3c968b]">background</span>
            </h4>
            <p className="text-sm sm:text-base">
                👋 I&apos;m Enric and I&apos;m from Barcelona. I&apos;m currently working as a Senior ML and Software Engineer at ERNI 
                in a Boehringer Ingelheim&apos;s pharma project. I&apos;m also a Technical Coach and the Lead of the Data and AI Community at ERNI.
            </p>
            <p className="text-sm sm:text-base">
                I studied 60% of the Aerospace Engineering degree and co-founded Venturi Unmanned 
                Technologies during that time, a startup designing, building and operating VTOL drones for 
                long range industrial inspections. During those years, I started learning more about software   
                and AI, and later I switched my studies to the online Computer Engineering degree (currently part time finishing 
                the 3rd year) while learning more about Machine Learning, MLOps and Bioinformatics by my own.
            </p>
            
        </div>
    </motion.div>
  )
}