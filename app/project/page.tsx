"use client";
import clsx from "clsx";
import N1D from "@/app/images/project/next/N1D.png";
import N1M from "@/app/images/project/next/N1M.png";
import N2 from "@/app/images/project/next/N2.png";
import N3 from "@/app/images/project/next/N3.png";
import book from "@/app/images/project/book2.jpg";

import { useState } from "react";
export default function Project() {
  const [currentProject, setCurrentProject] = useState(0);
  const [hoverImage, setHoverImage] = useState("");
  const nextProjects = [
    {
      label: "Task Tracker v2",
      imageD: N1D.src,
      imageM: N1M.src,
      link: "https://task-tracker-v2-1ovq.vercel.app/",
      description:
        "A full-stack task management app built with Next.js and TypeScript. It features a responsive UI, reusable components, RESTful API routes, and MongoDB for data storage. Users can easily create, update, and manage tasks with a smooth and efficient experience.",
    },
    {
      label: "CineMarket",
      imageD: N2.src,
      link: "https://cine-market-pyqb.vercel.app/",
      description:
        "A modern movie browsing platform built with Next.js, featuring dynamic pages, responsive UI, and clean component architecture. It showcases how I work with APIs, server-side data fetching, reusable components, and smooth page transitions to deliver a fast and user-friendly movie catalog experience.",
    },
    {
      label: "STSP Market",
      imageD: N3.src,
      link: "https://stsp-v1.vercel.app/",
      description:
        "It's a full-stack Next.js marketplace platform featuring product browsing, user authentication, and an admin dashboard for managing inventory and users. The application is designed with a clean UI, seamless navigation, and dynamic data handling through API routes.",
    },
  ];
  return (
    <div
      className={clsx(
        "flex flex-col justify-center items-center",
        "w-full min-h-screen",
        "mb-50"
      )}
    >
      <div
        className={clsx(
          "relative",
          "flex flex-col justify-center items-center",
          "w-full",
          "px-[8.5%]",
          "gap-20"
        )}
      >
        <h1 className={clsx("text-[3rem]", "uppercase")}>
          <span className={clsx("text-white")}>My</span>{" "}
          <span
            className={clsx("text-black")}
            style={{ WebkitTextStroke: "1px white" }}
          >
            Project
          </span>
        </h1>
        <div
          className={clsx(
            "flex flex-col justify-center items-center",
            "w-full",
            "text-white",
            "gap-20"
          )}
        >
          <ul
            className={clsx(
              "flex flex-row flex-wrap justify-center items-center",
              "w-full h-auto",
              "gap-5"
            )}
          >
            {nextProjects.map((item, i) => (
              <li
                key={i}
                className={clsx(
                  "flex flex-col justify-center items-center",
                  "w-80 h-auto",
                  "gap-3",
                  "cursor-default"
                )}
              >
                <div className={clsx("relative", "group", "w-full h-45")}>
                  <div
                    className={clsx(
                      "w-full h-full",
                      "bg-center bg-contain bg-no-repeat",
                      "transition-all duration-700 ease-in-out",
                      "border-white border",
                      "shadow-[inset_0_0_10px_rgba(0,0,0.2)]",
                      "backface-hidden", // ← prevents reverse text
                      "group-hover:rotate-y-180"
                    )}
                    style={{ backgroundImage: `url(${item.imageD})` }}
                  ></div>
                  <div
                    className={clsx(
                      "absolute top-0",
                      "flex flex-col justify-between items-center",
                      "border-white border",
                      "w-full h-full",
                      "p-3",
                      "text-white text-[.7rem] text-justify",
                      "text-shadow-[0_0_5px_rgba(0,0,0.2)]",
                      "backface-hidden", // ← prevents mirroring
                      "bg-white/50",
                      "shadow-[inset_0_0_10px_rgba(0,0,0.2)]",
                      "transition-all duration-700 ease-in-out",
                      "-rotate-y-180", // ← INITIAL ROTATION FIX
                      "group-hover:rotate-y-0" // ← ends upright
                    )}
                  >
                    <p>{item.description}</p>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        className={clsx(
                          "bx bx-link",
                          "text-[2rem]",
                          "transition-all duration-300 ease-in-out",
                          "text-shadow=[0_0_5px_rgba(0,0,0.2)]",
                          "hover:text-black"
                        )}
                        title={`${item.label} Link`}
                      ></i>
                    </a>
                  </div>
                </div>
                <h1 className={clsx("text-[1.2rem]", "uppercase")}>
                  {item.label}
                </h1>
              </li>
            ))}
          </ul>
          {/* <div
            className={clsx(
              "flex flex-row justify-center items-center",
              "w-250 h-150"
            )}
          >
            <div
              className={clsx(
                "relative",
                "w-[50%] h-full",
                "bg-center bg-cover bg-no-repeat",
                "rounded-bl-4xl",
                "rounded-tl-4xl",
                "overflow-hidden"
              )}
              style={{ backgroundImage: `url(${book.src})` }}
            >
              <div
                className={clsx(
                  "absolute",
                  "w-full h-full",
                  "rounded-bl-4xl",
                  "rounded-tl-4xl",
                  "shadow-[inset_0_0_50px_rgba(0,0,0.2)]",
                  "border-white/50 border-[.2rem] border-solid",
                  "overflow-hidden",
                  "z-5"
                )}
              >
                <div className={clsx("w-full h-full", "bg-black/50")}></div>
              </div>
              <div
                className={clsx(
                  "absolute",
                  "w-full h-full",
                  "shadow-[inset_-5px_0_10px_rgba(0,0,0.2)]"
                )}
              ></div>
            </div>
            <div
              className={clsx(
                "relative",
                "w-[50%] h-full",
                "bg-center bg-cover bg-no-repeat",
                "rounded-br-4xl",
                "rounded-tr-4xl",
                "overflow-hidden"
              )}
              style={{ backgroundImage: `url(${book.src})` }}
            >
              <div
                className={clsx(
                  "absolute",
                  "w-full h-full",
                  "rounded-br-4xl",
                  "rounded-tr-4xl",
                  "shadow-[inset_0_0_50px_rgba(0,0,0.2)]",
                  "border-white/50 border-[.2rem] border-solid",
                  "overflow-hidden",
                  "cursor-default",
                  "z-5"
                )}
              >
                <div
                  className={clsx(
                    "flex flex-col justify-start items-center",
                    "w-full h-full",
                    "py-5",
                    "bg-black/50",
                    "gap-5"
                  )}
                >
                  <h1
                    className={clsx(
                      "w-full",
                      "px-[5%]",
                      "text-white text-[1.5rem] text-center",
                      "text-shadow-[0_0_5px_rgba(0,0,0.2)]",
                      "uppercase",
                      "shadow-[0_0_5px_white]",
                      "bg-black/50"
                    )}
                  >
                    {nextProjects[currentProject].label}
                  </h1>
                  <div
                    className={clsx(
                      "flex flex-row justify-between items-center",
                      "w-full h-45",
                      "px-[5%] "
                    )}
                  >
                    <div
                      className={clsx(
                        "group",
                        "flex flex-col justify-center items-center",
                        "w-80 h-full",
                        "text-shadow-[0_0_5px_rgba(0,0,0.2)]"
                      )}
                    >
                      <div
                        className={clsx(
                          "w-full h-full",
                          "bg-center bg-contain bg-no-repeat",
                          "rounded-xl",
                          "shadow-[inset_0_0_10px_rgba(0,0,0.2)]",
                          "cursor-pointer",
                          "overflow-hidden"
                        )}
                        style={{
                          backgroundImage: `url(${nextProjects[currentProject].imageD})`,
                        }}
                      >
                        <div
                          className={clsx(
                            "flex justify-center items-center",
                            "w-full h-full",
                            "text-center",
                            "uppercase",
                            "opacity-0",
                            "transitiom-all duration-300 ease-in-out",
                            "group-hover:bg-black/80",
                            "group-hover:opacity-100"
                          )}
                        >
                          Desktop
                          <br />
                          Preview
                        </div>
                      </div>
                    </div>
                    <div
                      className={clsx(
                        "group",
                        "flex flex-col justify-center items-center",
                        "w-[6.3rem] h-full",
                        "text-shadow-[0_0_5px_rgba(0,0,0.2)]"
                      )}
                    >
                      <div
                        className={clsx(
                          "w-full h-full",
                          "bg-center bg-contain bg-no-repeat",
                          "rounded-xl",
                          "shadow-[inset_0_0_10px_rgba(0,0,0.2)]",
                          "cursor-pointer",
                          "overflow-hidden"
                        )}
                        style={{
                          backgroundImage: `url(${nextProjects[currentProject].imageM})`,
                        }}
                      >
                        <div
                          className={clsx(
                            "flex justify-center items-center",
                            "w-full h-full",
                            "text-center",
                            "uppercase",
                            "opacity-0",
                            "transitiom-all duration-300 ease-in-out",
                            "group-hover:bg-black/80",
                            "group-hover:opacity-100"
                          )}
                        >
                          Mobile
                          <br />
                          Preview
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={clsx(
                      "w-full",
                      "px-[5%] py-3",
                      "text-white text-[.8rem] text-justify",
                      "text-shadow-[0_0_5px_rgba(0,0,0.2)]",
                      "shadow-[0_0_5px_white]",
                      "bg-black/50"
                    )}
                  >{nextProjects[currentProject].description}</div>
                </div>
              </div>
              <div
                className={clsx(
                  "absolute",
                  "w-full h-full",
                  "shadow-[inset_5px_0_10px_rgba(0,0,0.2)]"
                )}
              ></div>
            </div>
          </div>   */}
        </div>
      </div>
    </div>
  );
}
