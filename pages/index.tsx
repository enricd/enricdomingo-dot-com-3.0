import Head from "next/head";

import Header from "../components/Header";
import Start from "../components/Start";
import About from "../components/About";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Link from "next/link";


export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#3c968b]/80">
      <Head>
        <title>Enric Domingo&apos;s Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section id="start" className="snap-start">
        <Start />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <footer className="sticky bottom-5 w-full">
        <div className="flex items-start justify-end px-8 2xl:px-20">
          <Link href="#start">
            <img 
              className="h-12 w-12 lg:h-16 lg:w-16 rounded-full grayscale hover:grayscale-0 cursor-pointer"
              src="favicon.ico" 
              alt="" 
            />
          </Link>
        </div>
      </footer>
      
    </div>
  );
}


