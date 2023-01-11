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
      <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-64 animate-ping-slow"/>
      <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-64"/>
      <div className="absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-64"/>
      <div className="absolute border-2 border-[#3c968b] opacity-20 rounded-full h-[650px] w-[650px] mt-64 animate-pulse"/>
      <div className="absolute border border-[#333333] rounded-full h-[800px] w-[800px] mt-64"/>
    </motion.div>
  );
}

export default BackgroundCircles;