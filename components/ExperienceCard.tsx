import React from "react";
import { motion } from "framer-motion";

type Props = {}

function ExperienceCard({}: Props) {
  return <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
    <motion.img
      initial={{
        y: -100,
        opacity: 0,
      }}
      transition={{ duration: 1.2 }}
      whileInView={{ 
        y: 0,
        opacity:1,
      }}
      viewport={{ once: true }}
      className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      src="https://statewideguttercompany.com/wp-content/uploads/2012/07/logo-placeholder.jpg"
      alt=""
    />

    <div className="px-0 md:px-10">
      <h4 className="text-4xl font-light">ML and Software Engineer</h4>
      <p className="font-bold text-2xl mt-1">ERNI + Boehringer Ingelheim</p>
      <div className="flex space-x-2 my-2">
        <img 
          className="h-10 w-10 rounded-full"
          src="https://cdn.worldvectorlogo.com/logos/python-5.svg"
          alt=""
        />
        <img 
          className="h-10 w-10 rounded-full"
          src="https://cdn.worldvectorlogo.com/logos/fastapi-1.svg"
          alt=""
        />
        <img 
          className="h-10 w-10 rounded-full"
          src="https://avatars.githubusercontent.com/u/45109972?s=400&amp;v=4"
          alt=""
        />
        <img 
          className="h-10 w-10 rounded-full"
          src="https://cdn.worldvectorlogo.com/logos/docker.svg"
          alt=""
        />
      </div>
      <p className="uppercase py-5 text-gray-300">Started work - Ended</p>

      <ul className="list-disc space-y-4 ml-5 test-lg">
        <li>summary point summary point summary point summary point summary point</li>
        <li>summary point summary point summary point summary point summary point</li>
        <li>summary point summary point summary point summary point summary point</li>
        <li>summary point summary point summary point summary point summary point</li>
        <li>summary point summary point summary point summary point summary point</li>
      </ul>
    </div>
  </article>;
}

export default ExperienceCard