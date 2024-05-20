"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40 max-w-[50rem] sm:mx-10">
      <SectionHeading>My experience</SectionHeading>
      <div className="flex flex-col gap-10">
        {experiencesData.map((experience, index) => (
          <div
            key={index}
            className={`flex flex-col gap-4 sm:gap-6 ${
              index === 0
                ? ""
                : "border-t border-gray-300 dark:border-gray-700"
            }`}
          >
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-2">
              <h3 className="text-xl font-semibold">{experience.title}</h3>
              <span>{experience.icon}</span>
              </div>
              
              
              <p className="text-gray-500 dark:text-gray-400">
                {experience.date}
              </p>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              {experience.location}
            </p>
            <p className="
              text-gray-700 dark:text-gray-300
            ">{experience.description}</p>
            
          </div>
        ))}
      </div>
    </section>
  );
}
