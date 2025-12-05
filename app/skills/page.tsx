"use client";

import clsx from "clsx";

import f1B from "@/app/images/skills/frontendSkills/f1B.jpg";
import f1C from "@/app/images/skills/frontendSkills/f1C.jpg";
import f2B from "@/app/images/skills/frontendSkills/f2B.jpg";
import f2C from "@/app/images/skills/frontendSkills/f2C.jpg";
import f3B from "@/app/images/skills/frontendSkills/f3B.jpg";
import f3C from "@/app/images/skills/frontendSkills/f3C.jpg";
import f4B from "@/app/images/skills/frontendSkills/f4B.jpg";
import f4C from "@/app/images/skills/frontendSkills/f4C.jpg";
import f5B from "@/app/images/skills/frontendSkills/f5B.jpg";
import f5C from "@/app/images/skills/frontendSkills/f5C.jpg";
import f6B from "@/app/images/skills/frontendSkills/f6B.jpg";
import f6C from "@/app/images/skills/frontendSkills/f6C.png";

import i1B from "@/app/images/skills/integration&Logic/i1B.jpg";
import i1C from "@/app/images/skills/integration&Logic/i1C.jpg";
import i2B from "@/app/images/skills/integration&Logic/i2B.jpg";
import i2C from "@/app/images/skills/integration&Logic/i2C.jpg";
import i3B from "@/app/images/skills/integration&Logic/i3B.jpg";
import i3C from "@/app/images/skills/integration&Logic/i3C.jpg";
import i4B from "@/app/images/skills/integration&Logic/i4B.jpg";
import i4C from "@/app/images/skills/integration&Logic/i4C.jpg";
import i5B from "@/app/images/skills/integration&Logic/i5B.jpg";
import i5C from "@/app/images/skills/integration&Logic/i5C.jpg";

import b1B from "@/app/images/skills/backendSkills/b1B.jpg";
import b1C from "@/app/images/skills/backendSkills/b1C.jpg";
import b2B from "@/app/images/skills/backendSkills/b2B.jpg";
import b2C from "@/app/images/skills/backendSkills/b2C.jpg";
import b3B from "@/app/images/skills/backendSkills/b3B.jpg";
import b3C from "@/app/images/skills/backendSkills/b3C.jpg";
import b4B from "@/app/images/skills/backendSkills/b4B.jpg";
import b4C from "@/app/images/skills/backendSkills/b4C.jpg";
import b5B from "@/app/images/skills/backendSkills/b5B.jpg";
import b5C from "@/app/images/skills/backendSkills/b5C.jpg";

import s1B from "@/app/images/skills/softSkills/s1B.jpg";
import s1C from "@/app/images/skills/softSkills/s1C.jpg";
import s2B from "@/app/images/skills/softSkills/s2B.jpg";
import s2C from "@/app/images/skills/softSkills/s2C.jpg";
import s3B from "@/app/images/skills/softSkills/s3B.jpg";
import s3C from "@/app/images/skills/softSkills/s3C.jpg";
import s4B from "@/app/images/skills/softSkills/s4B.jpg";
import s4C from "@/app/images/skills/softSkills/s4C.jpg";
import s5B from "@/app/images/skills/softSkills/s5B.jpg";
import s5C from "@/app/images/skills/softSkills/s5C.jpg";

import phMap from "@/app/images/skills/experience/phMap.png";
import creotec from "@/app/images/skills/experience/creotec.png";
import xinyx from "@/app/images/skills/experience/xinyx.jpg";

import { useEffect, useState } from "react";

export default function Skills() {
  const [viewSkill, setViewSkill] = useState<number | null>(null);
  const [skillSetNum, setSkillSetNum] = useState(0);
  const [viewExperience, setViewExperience] = useState<number | null>(null);

  const frontendSkills = [
    { label: "Responsive UI Building", bg: f1B.src, hoverBg: f1C.src },
    { label: "Component-Based Development", bg: f2B.src, hoverBg: f2C.src },
    // { label: "Reusable UI Patterns", bg: f3B.src, hoverBg: f3C.src },
    { label: "Basic Accessibility", bg: f4B.src, hoverBg: f4C.src },
    { label: "Styling with TailwindCSS", bg: f5B.src, hoverBg: f5C.src },
    { label: "State Management", bg: f6B.src, hoverBg: f6C.src },
  ];

  const integrationAndLogic = [
    { label: "API Integration", bg: i1B.src, hoverBg: i1C.src },
    { label: "Fetching & Handling Data", bg: i2B.src, hoverBg: i2C.src },
    { label: "Form Handling & Validation", bg: i3B.src, hoverBg: i3C.src },
    { label: "Basic Error Handling", bg: i4B.src, hoverBg: i4C.src },
    { label: "Debugging Common Issues", bg: i5B.src, hoverBg: i5C.src },
  ];

  const backendSkills = [
    { label: "Basic Full-Stack Development", bg: b1B.src, hoverBg: b1C.src },
    { label: "Building Simple APIs", bg: b2B.src, hoverBg: b2C.src },
    { label: "Basic Database Concepts", bg: b3B.src, hoverBg: b3C.src },
    { label: "JSON Handling", bg: b4B.src, hoverBg: b4C.src },
    { label: "Authentication basics", bg: b5B.src, hoverBg: b5C.src },
  ];

  const softSkills = [
    { label: "Problem-Solving", bg: s1B.src, hoverBg: s1C.src },
    { label: "Adaptability & Fast Learning", bg: s2B.src, hoverBg: s2C.src },
    { label: "Time Management", bg: s3B.src, hoverBg: s3C.src },
    { label: "Communication & Collaboration", bg: s4B.src, hoverBg: s4C.src },
    { label: "Attention to Detail", bg: s5B.src, hoverBg: s5C.src },
  ];

  const skillSet = [
    { name: "Frontend Skills", content: frontendSkills },
    { name: "Integration & Logic", content: integrationAndLogic },
    { name: "Backend Skills", content: backendSkills },
    { name: "Soft Skills", content: softSkills },
  ];

  const [prevNum, setPrevNum] = useState(0);
  const [numDirection, setNumDirection] = useState(false);

  useEffect(() => {
    if (prevNum !== skillSetNum) {
      setTimeout(() => {
        setPrevNum(skillSetNum);
      }, 300);
    }
  }, [skillSetNum]);

  return (
    <div
      className={clsx(
        "flex flex-col justify-center items-center",
        "w-full h-auto min-h-screen",
        "mb-50",
        "gap-20"
      )}
    >
      <h1 className={clsx("text-[3rem]", "uppercase")}>
        <span className={clsx("text-white")}>My</span>{" "}
        <span
          className={clsx("text-black")}
          style={{ WebkitTextStroke: "1px white" }}
        >
          Skills
        </span>
      </h1>
      <div
        className={clsx(
          "flex flex-row flex-wrap justify-between max-[1446px]:justify-center items-center",
          "w-full h-auto",
          "px-[8.5%]",
          "max-[1446px]:gap-20"
        )}
      >
        <div
          className={clsx(
            "flex flex-col justify-center items-center",
            "w-150 max-[800px]:w-full h-auto",
            "px-10 py-5 max-[800px]:px-0",
            "text-white",
            "gap-10"
          )}
        >
          <div
            className={clsx(
              "flex flex-col justify-center items-center",
              "w-full"
            )}
          >
            <div
              className={clsx(
                "flex flex-row justify-between items-center",
                "w-[85%] max-[800px]:w-full",
                "px-3 py-2",
                "rounded-3xl"
              )}
            >
              <i
                className={clsx(
                  "bx bx-chevron-left",
                  "text-[3rem]",
                  "cursor-pointer",
                  skillSetNum === 0 ? "text-white/30" : "text-white"
                )}
                onClick={() => {
                  setSkillSetNum(skillSetNum === 0 ? 0 : skillSetNum - 1);
                  setNumDirection(false);
                }}
              />
              <h1
                className={clsx(
                  "text-[1.5rem] text-center",
                  "uppercase",
                  "transition-all duration-500 ease-in-out",
                  prevNum === skillSetNum
                    ? "scale-100 opacity-100"
                    : "scale-0 opacity-0"
                )}
              >
                {skillSet[prevNum].name}
              </h1>
              <i
                className={clsx(
                  "bx bx-chevron-right",
                  "text-[3rem]",
                  "cursor-pointer",
                  skillSetNum === 3 ? "text-white/30" : "text-white"
                )}
                onClick={() => {
                  setSkillSetNum(skillSetNum === 3 ? 3 : skillSetNum + 1);
                  setNumDirection(true);
                }}
              />
            </div>
            <div
              className={clsx(
                "flex flex-row justify-center items-center",
                "w-full"
              )}
            >
              {skillSet.map((_, i) => (
                <div
                  key={i}
                  className={clsx(
                    "p-1",
                    "w-10",
                    "border-white border-[.1rem] border-solid",
                    "transition-all duration-500 ease-in-out",
                    skillSetNum === i && "bg-white"
                  )}
                ></div>
              ))}
            </div>
          </div>
          <ul
            className={clsx(
              "flex flex-col justify-center items-center",
              "w-full",
              "gap-1",
              "transition-all duration-500 ease-in-out",
              prevNum === skillSetNum
                ? "scale-100 opacity-100"
                : "scale-0 opacity-0"
            )}
          >
            {skillSet[skillSetNum].content.map((item, i) => (
              <li
                key={i}
                className={clsx(
                  "w-[75%] max-[800px]:w-[90%] h-20",
                  "text-[1rem]",
                  "border-white border-[.1rem] border-solid",
                  "cursor-pointer",
                  "transition-all duration-500 ease-in-out",
                  "hover:scale-[1.25] hover:z-3"
                )}
                onMouseEnter={() => setViewSkill(i)}
                onMouseLeave={() => setViewSkill(null)}
              >
                <div
                  className={clsx(
                    "relative",
                    "w-full h-full",
                    "bg-top bg-cover bg-no-repeat"
                  )}
                  style={{
                    backgroundImage: `url(${item.bg})`,
                    backgroundPosition:
                      viewSkill === i ? "center bottom" : "center top",
                    transition: "background-position 3s ease-in-out",
                  }}
                >
                  <div
                    className={clsx(
                      "absolute",
                      "flex justify-center items-center",
                      "w-full h-full",
                      "p-5",
                      "text-center",
                      "bg-black/80",
                      "shadow-[inset_0_0_5px_white]",
                      "text-shadow-[0_0_5px_white]",
                      "transition-all duration-1000 ease-in-out",
                      viewSkill === i ? "opacity-0" : "opacity-100",
                      "z-2"
                    )}
                  >
                    {item.label}
                  </div>
                  <div
                    className={clsx(
                      "absolute",
                      "top-0",
                      "w-full h-full",
                      "bg-top bg-cover bg-no-repeat",
                      "shadow-[inset_0_0_20px_rgba(0,0,0.2)]",
                      "transition-all duration-3000 ease-in-out",
                      viewSkill === i ? "opacity-100" : "opacity-0",
                      "text-shadow-[0_0_5px_rgba(0,0,0.2)]"
                    )}
                    style={{
                      backgroundImage: `url(${item.hoverBg})`,
                      backgroundPosition:
                        viewSkill === i ? "center bottom" : "center top",
                      transition: "background-position 3s ease-in-out",
                    }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={clsx(
            "flex flex-col justify-center items-center",
            "w-150 max-[800px]:w-full h-150 max-[550px]:h-130 max-[450px]:h-110"
          )}
        >
          <div
            className={clsx(
              "relative",
              "bg-center bg-cover bg-no-repeat",
              "w-full h-full"
            )}
            style={{ backgroundImage: `url(${phMap.src})` }}
          >
            {[
              {
                pic: creotec.src,
                name: "CREOTEC Philippines Inc.",
                location: "Laguna Center",
                xy: "top-[36%] left-[45%]",
                xy2: "top-[40%]",
                date: "(10/2019)",
                position: "PCB Quality Control Intern",
                summary:
                  "Performed PCB inspection and quality assessment, used PCB analysis tools, and evaluated PCB layouts for functionality and reliability. Contributed to quality assurance through effective teamwork and communication.",
              },
              {
                pic: xinyx.src,
                name: "Xinyx Design",
                location: "Alabang Muntinlupa City",
                xy: "top-[34%] left-[46%]",
                xy2: "top-[38%]",
                date: "(06/2023 – 07/2023)",
                position: "IC Layout Intern",
                summary:
                  "Worked on CMOS design and layout, followed design rule guidelines, used Synopsys Custom Compiler, and created 9-track standard cell layouts (90nm). Demonstrated strong teamwork and communication.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={clsx(
                  "absolute",
                  "flex flex-col justify-center items-center",
                  "w-full h-full",
                  "pointer-events-none"
                )}
              >
                <div
                  className={clsx(
                    "absolute",
                    "w-2 h-2",
                    item.xy,
                    "rounded-full",
                    "transition-all duration-300 ease-in-out",
                    "hover:scale-110",
                    "cursor-pointer",
                    "bg-red-500",
                    "pointer-events-auto"
                  )}
                  onMouseEnter={() => setViewExperience(i)}
                  onMouseLeave={() => setViewExperience(null)}
                ></div>
                <div
                  className={clsx(
                    "absolute",
                    "w-[65%] max-[600px]:w-[80%] max-[500px]:w-full h-auto",
                    item.xy2,
                    "bg-white",
                    "rounded-3xl",
                    "shadow-[0_0_5px_rgba(0,0,0.2)]",
                    "overflow-hidden",
                    "transition-all duration-300 ease-in-out",
                    viewExperience === i ? "opacity-100" : "opacity-0"
                  )}
                >
                  <div
                    className={clsx(
                      "w-full h-20",
                      "bg-top bg-cover bg-no-repeat",
                      "border-b-black border-b-[.1rem] border-solid"
                    )}
                    style={{ backgroundImage: `url(${item.pic})` }}
                  ></div>
                  <div
                    className={clsx(
                      "flex flex-col justify-center items-center",
                      "w-full",
                      "p-3"
                    )}
                  >
                    <div
                      className={clsx(
                        "flex flex-row flex-wrap justify-between items-center",
                        "w-full"
                      )}
                    >
                      <h1
                        className={clsx("uppercase", "text-[1rem] font-bold")}
                      >
                        {item.name}
                      </h1>
                      <h1 className={clsx("text-[.9rem]")}>{item.location}</h1>
                    </div>
                    <div
                      className={clsx(
                        "flex flex-row justify-start items-center",
                        "w-full",
                        "gap-1"
                      )}
                    >
                      <h2 className={clsx("text-[.8rem]", "font-semibold")}>
                        {item.position}
                      </h2>
                      <p className={clsx("text-[.7rem]")}>{item.date}</p>
                    </div>
                    <p className={clsx("w-full", "text-[.7rem] text-justify")}>
                      {item.summary}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
