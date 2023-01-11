import React from "react";
import { motion } from "framer-motion";

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div 
      initial={{
        opacity:0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.5, 0.8, 0.1, 1.0],
      }}
      transition={{
        duration: 2.5
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#333333] rounded-full h-[125px] w-[125px] sm:h-[200px] sm:w-[200px] mt-64 animate-ping-slow"/>
      <div className="absolute border border-[#333333] rounded-full h-[160px] w-[160px] sm:h-[300px] sm:w-[300px] mt-64"/>
      <div className="absolute border border-[#333333] rounded-full h-[250px] w-[250px] sm:h-[500px] sm:w-[500px] mt-64"/>
      <div className="absolute border-2 border-[#3c968b] opacity-20 rounded-full h-[325px] w-[325px] sm:h-[650px] sm:w-[650px] mt-64 animate-pulse"/>
      <div className="absolute border border-[#333333] rounded-full h-[400px] w-[400px] sm:h-[800px] sm:w-[800px] mt-64"/>
    </motion.div>
  );
}

export default BackgroundCircles;