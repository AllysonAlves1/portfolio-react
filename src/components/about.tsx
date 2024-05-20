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
        When starting the <span className="font-bold">Systems Analysis and Development</span> course, I decided to
        follow my passion for programming. That's when I started participating
        in some projects at college. My favorite part of programming is the
        problem-solving aspect. I love the feeling of finally discovering a
        solution to a problem. My core stack is <span className="italic">React, Next.js, Node.js, NestJs,
        Java, Spring, Postgresql and MongoDB</span>. I'm also familiar with <span className="italic">TypeScript
        and Prisma</span>. I'm always looking to learn new technologies. I am currently
        seeking a full-time position as a software developer. When I'm not
        programming, I like playing video games, watching movies and playing
        football. I also like reading and learning new things.
      </p>
    </motion.section>
  );
}
