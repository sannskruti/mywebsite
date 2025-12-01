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
        While working on web applications for{" "}
        <span className="underline">Financial</span> and{" "}
        <span className="underline">Pharmaceutical Services</span> in{" "}
        <span className="font-medium"> the Netherlands 🇳🇱</span> and
        <span className="font-medium"> India 🇮🇳</span> , I uncovered a passion
        for creating efficient software solutions. To expand my expertise, I
        pursued a{" "}
        <span className="font-medium"> Master’s in Information Systems </span>{" "}
        at{" "}
        <span className="font-medium"> Northeastern University, Boston </span>
        where I specialized in{" "}
        <span className="font-medium">full-stack web development </span>. During
        my <span className="font-medium">internship</span> at NBCUniversal,NY,
        USA 🇺🇸 as a Software Engineer, I gained exposure to Ansible automation,{" "}
        <span className="font-medium">optimizing deployment processes</span>,{" "}
        <span className="font-medium">front-end development</span> and{" "}
        <span className="underline"> Media-tech industry</span>.
        <br /> <br />I love <span className="font-medium">
          problem-solving
        </span>{" "}
        journey in programming, from brainstorming to the “aha!” moment. Skilled
        in React, Node.js, MongoDB, and{" "}
        <span className="font-medium">Agile</span>, I’m passionate about
        crafting innovative solutions,
        <span className="font-medium"> collaborating</span> with teammates, and
        staying ahead in evolving technologies. <br /> <br />
        <span className="italic">When I'm not coding </span>, I channel my
        creativity into drawing{" "}
        <span className="font-medium">portrait sketches</span> and{" "}
        <span className="font-medium">
          experimenting with new recipes in the kitchen
        </span>
        . I’m also an <span className="font-medium">avid learner</span>,
        currently exploring
        <span className="font-medium"> history</span> and{" "}
        <span className="font-medium">philosophy</span>, while working on
        improving my <span className="font-medium">swimming</span> skills.
      </p>
    </motion.section>
  );
}
