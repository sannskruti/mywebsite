"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  BsArrowRight,
  BsEnvelope,
  BsEnvelopeAtFill,
  BsHouseAdd,
  BsLinkedin,
  BsMailbox,
  BsMailbox2,
} from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import RotatingText from "./rotatingtext";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/mypic.png"
              alt=" sanskruti_pic"
              width={300}
              height={300}
              quality={100}
              priority={true}
              className="h-48 w-48 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-1 right-5 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.25 }}
      >
        <span className="font-bold text-4xl sm:text-5xl">
          Hello, I’m Sanskruti Manoria.
        </span>

        <div className="mt-6 flex flex-col items-center gap-3">
          <div className="flex items-center justify-center gap-3 text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
            <span>I build</span>
            <RotatingText
              items={[
                "Full-Stack SaaS Apps",
                "AI-Powered Solutions",
                "Scalable Cloud Apps",
                "Innovative Products",
              ]}
            />
          </div>

          <p className="mt-4 text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
            Experienced in building scalable applications, cloud infrastructure,
            and AI-powered solutions using React, Java, Python, AWS, Azure, and
            modern DevOps technologies.
          </p>
        </div>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        {/* <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a> */}

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/sanskruti-manoria/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="mailto:manoriasanskruti@gmail.com"
          target="_blank"
        >
          <BsEnvelopeAtFill />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/Sannskruti"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
