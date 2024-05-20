import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaNodeJs,
  FaGitAlt,
  FaJava,
  FaDocker,
} from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import rmtdevImg from "../../public/rmtdev.png";
import wordanalyticsImg from "../../public/wordanalytics.png";
import corpcommentImg from "../../public/corpcomment.png";
import {
  SiExpress,
  SiMongodb,
  SiNestjs,
  SiPostgresql,
  SiPrisma,
  SiSpring,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Developer",
    location: "Recife, PE",
    description:
      "After starting studies at college. I participated in a 3-month project, where we developed an application for a company called Gerens.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Demonstrator ",
    location: "Recife, PE",
    description:
      "As a Web Programming Demonstrator I had the incredible opportunity to assist and guide students on their journey of learning the latest web technologies, including React, Angular, NodeJS, NestJs and much more.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Scientific Researcher",
    location: "Jaboatão dos Guararapes, PE",
    description:
      "I am participating in educational and technological research, focusing on improving teaching and learning through emerging technologies such as IoT, Cloud, AI and Big Data. I believe that these technologies can revolutionize the way we learn and I am dedicated to developing innovative solutions that use them. Sharing my knowledge with the community through extension courses and presentations of the solutions I develop.",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - present",
  },
  {
    title: "Full-Stack Developer",
    location: "Recife, PE",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, Node.js, Spring, PostgreSQL and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Sistema Condominio",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Deafy",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Restaurant Food",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  { title: "HTML", icon: React.createElement(FaHtml5) },
  { title: "CSS", icon: React.createElement(FaCss3) },
  { title: "JavaScript", icon: React.createElement(FaJsSquare) },
  { title: "TypeScript", icon: React.createElement(SiTypescript) },
  { title: "Java", icon: React.createElement(FaJava) },
  { title: "React", icon: React.createElement(FaReact) },
  { title: "React Native", icon: React.createElement(TbBrandReactNative) },
  { title: "Next.js", icon: React.createElement(RiNextjsFill) },
  { title: "Node.js", icon: React.createElement(FaNodeJs) },
  { title: "Nest.js", icon: React.createElement(SiNestjs) },
  { title: "Express", icon: React.createElement(SiExpress) },
  { title: "Spring", icon: React.createElement(SiSpring) },
  { title: "Git", icon: React.createElement(FaGitAlt ) },
  { title: "Docker", icon: React.createElement(FaDocker ) },
  { title: "Prisma", icon: React.createElement(SiPrisma) },
  { title: "PostgreSQL", icon: React.createElement(SiPostgresql) },
  { title: "MongoDB", icon: React.createElement(SiMongodb) },
] as const;
