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
import deafy from "../../public/deafy.png";
import wordanalyticsImg from "../../public/wordanalytics.png";
import sistemaCondominio from "../../public/sistema-condominio.png";
import {
  SiCsharp,
  SiExpress,
  SiMongodb,
  SiNestjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiSpring,
  SiTypescript,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { link } from "fs";

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
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, Node.js, Spring, PostgreSQL and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
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
    title: "Demonstrator ",
    location: "Recife, PE",
    description:
      "As a Web Programming Demonstrator I had the incredible opportunity to assist and guide students on their journey of learning the latest web technologies, including React, Angular, NodeJS, NestJs and much more.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Recife, PE",
    description:
      "I participated in a 6-month project, where I developed an application for a company called Gerens. I developed the interface with React Native, created APIs with Nodejs and Express, applied Git for versioning and Trello to organize tasks. With the project being delivered on time and in accordance with the client's expectations.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "Sistema Condominio",
    description:
      "I worked on this project in the web programming discipline, where our objective was to create a system for a condominium, which would control access and exit.",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Nest.js",
      "SQL",
      "TypeORM",
    ],
    imageUrl: sistemaCondominio,
    link: "https://github.com/AllysonAlves1/sistema-condominio",
  },
  {
    title: "Deafy",
    description:
      "The Deafy project was a project in which I sought to create an application, where people with difficulty hearing could send the audios they received, on WhatsApp for example, and an AI would transcribe the respective audio.",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Nest.js",
      "SQL",
      "Prisma",
      "Azure",
    ],
    imageUrl: deafy,
    link: "https://github.com/AllysonAlves1/deafy-front",
  },
  {
    title: "Restaurant Food",
    description:
      "Restaurant food is an application aimed at local businesses, with a good UX/UI, with the aim of increasing sales of the store's products.",
    tags: ["React", "Next.js", , "Tailwind", "Spring", "MongoDB"],
    imageUrl: wordanalyticsImg,
    link: "",
  },
] as const;

export const skillsData = [
  { title: "HTML", icon: React.createElement(FaHtml5) },
  { title: "CSS", icon: React.createElement(FaCss3) },
  { title: "JavaScript", icon: React.createElement(FaJsSquare) },
  { title: "TypeScript", icon: React.createElement(SiTypescript) },
  { title: "C#", icon: React.createElement(SiCsharp) },
  { title: "Java", icon: React.createElement(FaJava) },
  { title: "Python", icon: React.createElement(SiPython) },
  { title: "React", icon: React.createElement(FaReact) },
  { title: "React Native", icon: React.createElement(TbBrandReactNative) },
  { title: "Next.js", icon: React.createElement(RiNextjsFill) },
  { title: "Node.js", icon: React.createElement(FaNodeJs) },
  { title: "Nest.js", icon: React.createElement(SiNestjs) },
  { title: "Express", icon: React.createElement(SiExpress) },
  { title: "Spring", icon: React.createElement(SiSpring) },
  { title: "Git", icon: React.createElement(FaGitAlt) },
  { title: "Docker", icon: React.createElement(FaDocker) },
  { title: "Prisma", icon: React.createElement(SiPrisma) },
  { title: "PostgreSQL", icon: React.createElement(SiPostgresql) },
  { title: "MongoDB", icon: React.createElement(SiMongodb) },
] as const;
