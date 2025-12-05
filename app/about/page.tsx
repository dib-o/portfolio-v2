"use client";

import clsx from "clsx";
import profile from "@/app/images/about/profile.jpg";
import zodiac from "@/app/images/about/zodiac.jpg";

import nextjsIcon from "@/app/images/about/frameworks/nextJS.png";
import nextjsIcon2 from "@/app/images/about/frameworks/nextJS2.png";
import reactjsIcon from "@/app/images/about/frameworks/reactJS.png";
import reactjsIcon2 from "@/app/images/about/frameworks/reactJS2.png";
import nodejsIcon from "@/app/images/about/frameworks/nodeJS.png";
import nodejsIcon2 from "@/app/images/about/frameworks/nodeJS2.png";
import vuejsIcon from "@/app/images/about/frameworks/vueJS.png";
import vuejsIcon2 from "@/app/images/about/frameworks/vueJS2.png";

import tailwindIcon from "@/app/images/about/css/tailwind.png";
import tailwindIcon2 from "@/app/images/about/css/tailwind2.png";
import bootstrapIcon from "@/app/images/about/css/bootstrap.png";
import bootstrapIcon2 from "@/app/images/about/css/bootstrap2.png";

import assemblyIcon from "@/app/images/about/languages/assembly.png";
import assemblyIcon2 from "@/app/images/about/languages/assembly2.png";
import cIcon from "@/app/images/about/languages/c.png";
import cIcon2 from "@/app/images/about/languages/c2.png";
import cplusplusIcon from "@/app/images/about/languages/c++.png";
import cplusplusIcon2 from "@/app/images/about/languages/c++2.png";
import csharpIcon from "@/app/images/about/languages/csharp.png";
import csharpIcon2 from "@/app/images/about/languages/csharp2.png";
import javaIcon from "@/app/images/about/languages/java.png";
import javaIcon2 from "@/app/images/about/languages/java2.png";
import javascriptIcon from "@/app/images/about/languages/javascript.png";
import javascriptIcon2 from "@/app/images/about/languages/javascript2.png";
import pythonIcon from "@/app/images/about/languages/python.png";
import pythonIcon2 from "@/app/images/about/languages/python2.png";

import mysqlIcon from "@/app/images/about/databases/mysql.png";
import mysqlIcon2 from "@/app/images/about/databases/mysql2.png";
import mongodbIcon from "@/app/images/about/databases/mongodb.png";
import mongodbIcon2 from "@/app/images/about/databases/mongodb2.png";
import firebaseIcon from "@/app/images/about/databases/firebase.png";
import firebaseIcon2 from "@/app/images/about/databases/firebase2.png";

import { useState } from "react";

export default function About() {
  const [viewProfile, setViewProfile] = useState(false);
  const [viewTool, setViewTool] = useState<number | null>(null);
  const [techNum, setTechNum] = useState(0);
  const [viewQuote, setViewQuote] = useState(false);
  const [viewGoal, setViewGoal] = useState(false);

  const frameworks = [
    {
      label: "Next.js",
      image: nextjsIcon,
      hover: nextjsIcon2,
    },
    {
      label: "React.js",
      image: reactjsIcon,
      hover: reactjsIcon2,
    },
    {
      label: "Node.js",
      image: nodejsIcon,
      hover: nodejsIcon2,
    },
    {
      label: "Vue.js",
      image: vuejsIcon,
      hover: vuejsIcon2,
    },
  ];

  const css = [
    {
      label: "Tailwind",
      image: tailwindIcon,
      hover: tailwindIcon2,
    },
    {
      label: "Bootstrap",
      image: bootstrapIcon,
      hover: bootstrapIcon2,
    },
  ];

  const languages = [
    {
      label: "Assembly",
      image: assemblyIcon,
      hover: assemblyIcon2,
    },
    {
      label: "C",
      image: cIcon,
      hover: cIcon2,
    },
    {
      label: "C++",
      image: cplusplusIcon,
      hover: cplusplusIcon2,
    },
    {
      label: "C#",
      image: csharpIcon,
      hover: csharpIcon2,
    },
    {
      label: "Java",
      image: javaIcon,
      hover: javaIcon2,
    },
    {
      label: "Javascript",
      image: javascriptIcon,
      hover: javascriptIcon2,
    },
    {
      label: "Python",
      image: pythonIcon,
      hover: pythonIcon2,
    },
  ];

  const databases = [
    {
      label: "MySQL",
      image: mysqlIcon,
      hover: mysqlIcon2,
    },
    {
      label: "MongoDB",
      image: mongodbIcon,
      hover: mongodbIcon2,
    },
    {
      label: "Firebase",
      image: firebaseIcon,
      hover: firebaseIcon2,
    },
  ];

  const techStackOverview = [
    { content: frameworks, name: "Frameworks & Runtimes" },
    { content: css, name: "CSS Frameworks" },
    { content: languages, name: "Programming Languages" },
    { content: databases, name: "Databases & Storage" },
  ];

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
        <span
          className={clsx("text-black")}
          style={{ WebkitTextStroke: "1px white" }}
        >
          About
        </span>{" "}
        <span className={clsx("text-white")}>Me</span>
      </h1>
      <div
        className={clsx(
          "flex flex-row flex-wrap justify-between max-[1494px]:justify-center items-center",
          "w-full h-auto",
          "px-[8.5%]",
          "gap-10 max-[830px]:gap-15"
        )}
      >
        <div
          className={clsx(
            "flex flex-col justify-center items-center",
            "w-100 max-[830px]:w-70",
            "gap-5"
          )}
        >
          <div
            className={clsx(
              "relative",
              "flex flex-col justify-center items-center",
              "w-full h-100 max-[830px]:h-70",
              "p-5",
              "rounded-full"
            )}
          >
            <div
              className={clsx(
                "absolute",
                "w-full h-full",
                "border-x-white border-y-black border-[.2rem] border-solid",
                "rounded-full",
                "spin-border"
              )}
            ></div>
            <div
              className={clsx(
                "relative",
                "flex justify-center items-center",
                "w-90 max-[830px]:w-60 h-90 max-[830px]:h-60",
                "p-3",
                "border-white border-[.2rem] border-dashed",
                "rounded-full",
                "shadow-[inset_0_0_10px_white]",
                "overflow-hidden"
              )}
              onMouseEnter={() => setViewProfile(true)}
              onMouseLeave={() => setViewProfile(false)}
            >
              <div
                className={clsx(
                  "w-full h-full",
                  "rounded-full",
                  "bg-center bg-cover bg-no-repeat",
                  "transition-all duration-700 ease-in-out",
                  !viewProfile ? "opacity-100" : "opacity-0",
                  "z-1"
                )}
                style={{ backgroundImage: `url(${zodiac.src})` }}
              ></div>
              <div
                className={clsx(
                  "absolute",
                  "w-82 max-[830px]:w-52 h-82 max-[830px]:h-52",
                  "rounded-full",
                  "bg-center bg-cover bg-no-repeat"
                )}
                style={{ backgroundImage: `url(${profile.src})` }}
              ></div>
            </div>
          </div>
          <p className={clsx("w-full", "text-white text-center")}>
            I’m a junior web developer passionate about building clean,
            responsive, and user-friendly websites.
          </p>
        </div>
        <div
          className={clsx(
            "flex flex-col justify-center items-center",
            "w-200 max-[830px]:w-full h-auto",
            "text-white text-center",
            "gap-10",
            "cursor-default"
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
                "flex flex-row max-[830px]:flex-col max-[830px]:justify-center max-[830px]:items-start max-[500px]:items-center justify-between items-center",
                "w-full"
              )}
            >
              <h1 className={clsx("text-[1.3rem]", "uppercase")}>
                Tech Stack Overview
              </h1>
              <div
                className={clsx(
                  "flex flex-row flex-wrap justify-evenly items-center",
                  "w-auto max-[490px]:w-full",
                  "border-white border-x-[.2rem] border-t-[.2rem] border-b-0 border-solid",
                  "divide-white divide-x-[.2rem] max-[490px]:divide-none"
                )}
              >
                {techStackOverview.map((item, i) => (
                  <button
                    key={i}
                    className={clsx(
                      "text-[.7rem] text-center",
                      "w-25 max-[490px]:w-full",
                      "px-3 py-1",
                      "cursor-pointer",
                      "transition-all duration-300 ease-in-out",
                      techNum === i ? "bg-white text-black" : "bg-white/20"
                    )}
                    onClick={() => setTechNum(i)}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
            <div
              className={clsx(
                "flex flex-col justify-start items-center",
                "w-full h-30",
                "overflow-hidden"
              )}
            >
              <div
                className={clsx(
                  "relative",
                  "w-full",
                  "border-y-[.2rem] border-y-white border-solid"
                )}
              >
                <ul
                  className={clsx(
                    "marquee-track",
                    viewTool !== null && "paused",
                    "flex flex-row items-center",
                    "w-full",
                    "p-3",
                    "gap-10"
                  )}
                >
                  {techStackOverview[techNum].content
                    .toReversed()
                    .map((item, i) => (
                      <li
                        key={i}
                        className={clsx(
                          "group",
                          "relative",
                          "text-[3rem]",
                          "cursor-pointer",
                          "transition-all duration-300 ease-in-out",
                          "hover:scale-[1.25]"
                        )}
                        onMouseEnter={() => setViewTool(i)}
                        onMouseLeave={() => setViewTool(null)}
                      >
                        <div
                          className={clsx(
                            "w-10 h-10",
                            "bg-center bg-contain bg-no-repeat"
                          )}
                          style={{ backgroundImage: `url(${item.image.src})` }}
                        ></div>
                        <div
                          className={clsx(
                            "absolute",
                            "top-0",
                            "w-10 h-10",
                            "transition-all duration-300 ease-in-out",
                            "bg-center bg-contain bg-no-repeat",
                            viewTool === i ? "opacity-100" : "opacity-0"
                          )}
                          style={{ backgroundImage: `url(${item.hover.src})` }}
                        ></div>
                        <span
                          className={clsx(
                            "absolute left-1/2 -translate-x-1/2 -bottom-10",
                            "px-2 py-1",
                            "text-[0.8rem] text-white",
                            "rounded-md",
                            "opacity-0 group-hover:opacity-100",
                            viewTool === i ? "opacity-100" : "opacity-0",
                            "transition-opacity duration-300"
                          )}
                        >
                          {item.label}
                        </span>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>

          <div
            className={clsx(
              "flex flex-row flex-wrap justify-start max-[1494px]:justify-between max-[825px]:justify-center items-center",
              "w-full h-auto",
              "-mt-5",
              "gap-10"
            )}
          >
            <div
              className={clsx(
                "relative",
                "w-80 h-58",
                "shadow-[0_0_3px_white]",
                "overflow-hidden"
              )}
              onMouseEnter={() => setViewQuote(true)}
              onMouseLeave={() => setViewQuote(false)}
            >
              <div
                className={clsx(
                  "flex flex-col justify-start items-center",
                  "text-black text-[.9rem] text-justify",
                  "w-full h-full",
                  "px-5 py-5",
                  "bg-white",
                  "border-black border-[.1rem] border-solid",
                  "transition-all duration-300 ease-in-out",
                  !viewQuote ? "opacity-100" : "opacity-0",
                  "shadow-[inset_0_0_100px_rgba(0,0,0.2)]",
                  "gap-4",
                  "cursor-pointer"
                )}
              >
                <h1 className={clsx("uppercase", "font-extrabold")}>
                  Motivation
                </h1>
                <i
                  className={clsx(
                    "flex justify-center items-center",
                    "w-full h-full"
                  )}
                >
                  I’m motivated by the challenge of transforming ideas into
                  functional, visually appealing digital experiences. Every
                  project I build strengthens my skills and fuels my desire to
                  grow in the world of web development.
                </i>
              </div>
              <div
                className={clsx(
                  "absolute",
                  "top-0",
                  "flex flex-col justify-start items-center",
                  "text-white text-[.9rem] text-center",
                  "w-full h-full",
                  "px-5 py-5",
                  "bg-white/30",
                  "border-black border-[.1rem] border-solid",
                  "transition-all duration-300 ease-in-out",
                  viewQuote ? "opacity-100" : "opacity-0",
                  "shadow-[inset_0_0_250px_black]",
                  "gap-4",
                  "cursor-pointer"
                )}
              >
                <h1
                  className={clsx(
                    "w-full",
                    "uppercase",
                    "font-medium",
                    "text-[1.1rem]",
                    "tracking-[.1rem]",
                    "text-shadow-[0_0_5px_white]"
                  )}
                >
                  Quote
                </h1>
                <i
                  className={clsx(
                    "flex justify-center items-center",
                    "w-[45%] h-full",
                    "text-[1rem]",
                    "text-shadow-[0_0_3px_rgba(0,0,0.2)]"
                  )}
                >
                  I build what I once thought was impossible
                </i>
              </div>
            </div>
            <div
              className={clsx(
                "relative",
                "w-80 h-58",
                "shadow-[0_0_3px_white]",
                "overflow-hidden"
              )}
              onMouseEnter={() => setViewGoal(true)}
              onMouseLeave={() => setViewGoal(false)}
            >
              <div
                className={clsx(
                  "flex flex-col justify-start items-center",
                  "text-black text-[.9rem] text-center",
                  "w-full h-full",
                  "px-5 py-5",
                  "bg-white",
                  "border-black border-[.1rem] border-solid",
                  "transition-all duration-300 ease-in-out",
                  !viewGoal ? "opacity-100" : "opacity-0",
                  "shadow-[inset_0_0_100px_rgba(0,0,0.2)]",
                  "gap-4",
                  "cursor-pointer"
                )}
              >
                <h1 className={clsx("uppercase", "font-extrabold")}>
                  Career Goals
                </h1>
                <ul
                  className={clsx(
                    "flex flex-col justify-start items-start",
                    "text-[.8rem]",
                    "gap-2",
                    "list-disc"
                  )}
                >
                  <li>Become a full-stack developer.</li>
                  <li>Build fast and reliable web applications.</li>
                  <li>Keep improving my skills.</li>
                  <li>Work on impactful projects.</li>
                  <li>Learn and adapt to new technologies.</li>
                  <li>Work effectively with other developers.</li>
                </ul>
              </div>
              <div
                className={clsx(
                  "absolute",
                  "top-0",
                  "flex flex-col justify-start items-center",
                  "text-white text-[.9rem] text-center",
                  "w-full h-full",
                  "px-5 py-5",
                  "bg-white/30",
                  "border-black border-[.1rem] border-solid",
                  "transition-all duration-300 ease-in-out",
                  viewGoal ? "opacity-100" : "opacity-0",
                  "shadow-[inset_0_0_250px_black]",
                  "gap-4",
                  "cursor-pointer"
                )}
              >
                <h1
                  className={clsx(
                    "w-full",
                    "uppercase",
                    "font-medium",
                    "text-[1.1rem]",
                    "tracking-[.1rem]",
                    "text-shadow-[0_0_5px_white]"
                  )}
                >
                  Main Goal
                </h1>
                <p
                  className={clsx(
                    "flex justify-center items-center",
                    "w-full h-full",
                    "text-[1rem]",
                    "text-shadow-[0_0_3px_rgba(0,0,0.2)]"
                  )}
                >
                  To grow as a highly skilled web developer and contribute to
                  impactful, high-quality projects worldwide.
                </p>
              </div>
            </div>
          </div>
          <div
            className={clsx(
              "flex flex-row flex-wrap justify-start max-[825px]:justify-center items-center",
              "w-full",
              "gap-5"
            )}
          >
            <p>For more information: </p>
            <a
              className={clsx(
                "w-auto",
                "p-3",
                "rounded-xl",
                "border-white border-[.1rem]",
                "transition-all duration-200 ease-in-out",
                "shadow-[0_4px_0_rgba(255,255,255,0.3)]",
                "hover:translate-y-1 hover:shadow-[0_0_0_rgba(255,255,255,1)]"
              )}
              href="/CV.pdf"
              download="MWB_CV.pdf"
            >
              Download My CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
