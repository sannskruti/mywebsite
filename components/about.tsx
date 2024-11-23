"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        During my time developing applications for{" "}
        <span className="font-medium">
          Financial and Pharmaceutical Services in the Netherlands and India
        </span>
        , I decided to broaden my expertise in application development. I
        enrolled in
        <span className="font-medium">
          {" "}
          Masters in Information Systems
        </span>{" "}
        from
        <span className="font-medium"> Northeastern University</span>, Boston
        and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving through brainstorming aspect. I{" "}
        <span className="underline">love</span> the feeling of finally figuring
        out a solution to a problem and discuss it with teammates. My core stack
        is <span className="font-medium">React, Node.js, and MongoDB</span>. I
        am also an expert in TypeScript and Java. I am always looking to learn
        new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer, Site Reliabity Engineer or Full Stack developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        badminton, making potrait sketches, and definately experimenting in
        cooking! I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar, and honing my skills in swimming!
      </p>
    </motion.section>
  );
}
