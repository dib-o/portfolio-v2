"use client";

import "boxicons/css/boxicons.min.css";
import clsx from "clsx";
import bgRootL from "@/app/images/root/landscape.jpg";
import bgRootP from "@/app/images/root/portrait.jpg";
import logoB from "@/app/images/root/logoB.png";
import logoC from "@/app/images/root/logoC.png";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Home from "./home/page";
import About from "./about/page";
import Skills from "./skills/page";
import Contact from "./contact/page";
import Project from "./project/page";

export default function Root() {
  const [currentPointer, setCurrentPointer] = useState("");
  const [currentPage, setCurrentPage] = useState("");
  const [viewMenu, setViewMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [entry, setEntry] = useState(true);
  const [currentWidth, setCurrentWidth] = useState(0);

  const [headerLogo, setHeaderLogo] = useState(false);
  const [footerName, setFooterName] = useState(false);
  const [footerLogo, setFooterLogo] = useState(false);
  const pages = [
    { label: "Home" },
    { label: "About" },
    { label: "Skills" },
    { label: "Project" },
    { label: "Contact" },
  ];

  useEffect(() => {
    if (viewMenu) {
      setTimeout(() => {
        setShowMenu(true);
      }, 300);
    } else {
      setShowMenu(false);
    }
  }, [viewMenu]);

  useEffect(() => {
    const handleResize = () => {
      setCurrentWidth(window.innerWidth);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    {
    }
  }, [currentPage]);

  const [yAxis, setYAxis] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setYAxis(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (currentPage === "") {
      setEntry(true);
      setCurrentPointer("");
      return;
    }
    entry &&
      setTimeout(() => {
        const foundId = document.getElementById(currentPage);
        foundId && foundId.scrollIntoView();
      }, 900);
    if (!yMode) {
      const foundId = document.getElementById(currentPage);
      foundId && foundId.scrollIntoView();
    }
    setTimeout(() => {
      setEntry(false);
      setHeaderLogo(false);
      setFooterLogo(false);
    }, 500);
  }, [currentPage]);

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [homeHeight, setHomeHeight] = useState(0);
  const [aboutHeight, setAboutHeight] = useState(0);
  const [skillsHeight, setSkillsHeight] = useState(0);
  const [projectHeight, setProjectHeight] = useState(0);
  const [contactHeight, setContactHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (
        homeRef.current &&
        aboutRef.current &&
        skillsRef.current &&
        projectRef.current &&
        contactRef.current
      ) {
        setHomeHeight(homeRef.current.offsetHeight);
        setAboutHeight(aboutRef.current.offsetHeight);
        setSkillsHeight(skillsRef.current.offsetHeight);
        setProjectHeight(projectRef.current.offsetHeight);
        setContactHeight(contactRef.current.offsetHeight);
      }
    };

    setTimeout(updateHeight, 3000); // will run as soon as layout is ready
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const [yMode, setYMode] = useState(false);
  useEffect(() => {
    if (currentPage !== "") {
      if (yAxis >= 0 && yAxis <= homeHeight) {
        setCurrentPage("Home");
      } else if (yAxis > homeHeight && yAxis <= homeHeight + aboutHeight) {
        setCurrentPage("About");
      } else if (
        yAxis > homeHeight + aboutHeight &&
        yAxis <= homeHeight + aboutHeight + skillsHeight
      ) {
        setCurrentPage("Skills");
      } else if (
        yAxis > homeHeight + aboutHeight + skillsHeight &&
        yAxis <= homeHeight + aboutHeight + skillsHeight + projectHeight
      ) {
        setCurrentPage("Project");
      } else {
        setCurrentPage("Contact");
      }
      setYMode(true);
    }
  }, [yAxis]);

  return (
    <div className={clsx("w-full min-h-screen h-auto", "bg-black")}>
      {entry ? (
        <div
          className={clsx(
            "w-full h-screen",
            "bg-center bg-contain bg-no-repeat",
            "transition-all duration-500 ease-in-out",
            currentPage === ""
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0"
          )}
          style={{
            backgroundImage: `url(${
              currentWidth >= 550 ? bgRootL.src : bgRootP.src
            })`,
          }}
        >
          <div
            className={clsx(
              "flex flex-row max-[550px]:flex-col justify-center items-center",
              "w-full h-full",
              "px-[8.5%]",
              "transition-all duration-300 ease-in-out",
              currentPointer !== "" && "backdrop-blur-sm bg-black/50"
            )}
          >
            {pages.map((item, i) => (
              <div
                key={i}
                className={clsx(
                  "flex justify-center items-center",
                  "w-50 max-[1000px]:w-30 max-[650px]:w-20 h-full max-[550px]:h-20",
                  "text-white text-[4.5rem] max-[1000px]:text-[3.5rem] max-[650px]:text-[2.5rem]",
                  "text-shadow-[0_0_5px_rgba(0,0,0.2)]",
                  "uppercase",
                  "cursor-pointer",
                  "transition-all duration-700 ease-in-out",
                  currentPointer === item.label
                    ? currentWidth >= 550
                      ? "translate-y-0 opacity-100"
                      : "translate-x-0 opacity-100"
                    : currentWidth >= 550
                    ? "-translate-y-10 opacity-0"
                    : "-translate-x-10 opacity-0"
                )}
                onClick={() => setCurrentPage(item.label)}
                style={{
                  writingMode: currentWidth >= 550 ? "vertical-rl" : "initial",
                  textOrientation: currentWidth >= 550 ? "upright" : "initial",
                }}
                onMouseEnter={() => setCurrentPointer(item.label)}
                onMouseLeave={() => setCurrentPointer("")}
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <header
            className={clsx(
              "fixed",
              "flex flex-col justify-center items-center",
              "w-full h-auto",
              "px-[8.5%] py-3",
              "backdrop-blur-xl", // stronger blur
              "bg-white/10", // transparent white
              "border-b border-white/20", // subtle border
              "text-white text-[1.5rem]",
              "z-10",
              "gap-5"
            )}
          >
            <div
              className={clsx(
                "flex flex-row justify-between items-center",
                "w-full"
              )}
            >
              <div
                className={clsx(
                  "flex flex-row justify-center items-center",
                  "w-auto",
                  "cursor-pointer"
                )}
                onClick={() => setCurrentPage("")}
                onMouseEnter={() => setHeaderLogo(true)}
                onMouseLeave={() => setHeaderLogo(false)}
              >
                <div className={clsx("relative", "w-15 h-15")}>
                  <div
                    className={clsx(
                      "w-full h-full",
                      "bg-center bg-cover bg-no-repeat",
                      "transition-all duration-1000 ease-in-out",
                      headerLogo ? "opacity-0" : "opacity-100"
                    )}
                    style={{ backgroundImage: `url(${logoB.src})` }}
                  ></div>
                  <div
                    className={clsx(
                      "absolute",
                      "top-0",
                      "w-full h-full",
                      "bg-center bg-cover bg-no-repeat",
                      "transition-all duration-1000 ease-in-out",
                      headerLogo ? "opacity-100" : "opacity-0"
                    )}
                    style={{ backgroundImage: `url(${logoC.src})` }}
                  ></div>
                </div>
                <p className={clsx("text-shadow-[0_0_5px_rgba(0,0,0.2)]")}>
                  RainL.
                </p>
              </div>
              <nav
                className={clsx(
                  "flex flex-row justify-center items-center",
                  "text-[1rem] text-center",
                  "gap-5"
                )}
              >
                {currentWidth >= 750 ? (
                  pages.map((item, i) => (
                    <a
                      key={i}
                      className={clsx(
                        "w-20",
                        "p-1.5",
                        "rounded-md",
                        "cursor-pointer",
                        "transition-all duration-500 ease-in-out",
                        currentPage === item.label
                          ? "text-black bg-white font-bold"
                          : "text-white bg-none text-shadow-[0_0_5px_rgba(0,0,0.2)]"
                      )}
                      onClick={() => {
                        setYMode(false);
                        setCurrentPage(item.label);
                      }}
                    >
                      {item.label}
                    </a>
                  ))
                ) : (
                  <a
                    className={clsx(
                      viewMenu ? "bx bx-x" : "bx bx-menu",
                      "w-20",
                      "text-[2rem] text-right",
                      "p-1.5",
                      "rounded-md",
                      "cursor-pointer",
                      "transition-all duration-500 ease-in-out"
                    )}
                    onClick={() => setViewMenu(!viewMenu)}
                  ></a>
                )}
              </nav>
            </div>
            {viewMenu && currentWidth <= 750 && (
              <div
                className={clsx(
                  "flex flex-col justify-center items-start",
                  "w-full",
                  "transition-all duration-300 ease-in-out",
                  showMenu
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-10 opacity-0"
                )}
              >
                <nav
                  className={clsx(
                    "flex flex-col justify-center items-center",
                    "w-full",
                    "text-[1rem] text-center",
                    "gap-5"
                  )}
                >
                  {pages.map((item, i) => (
                    <a
                      key={i}
                      className={clsx(
                        "w-full",
                        "p-1.5",
                        "rounded-md",
                        "cursor-pointer",
                        "transition-all duration-500 ease-in-out",
                        currentPage === item.label
                          ? "text-black bg-white font-bold"
                          : "text-white bg-none text-shadow-[0_0_5px_rgba(0,0,0.2)]"
                      )}
                      onClick={() => {
                        setYMode(false);
                        setCurrentPage(item.label);
                        setViewMenu(false);
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            )}
          </header>
          <div
            className={clsx(
              "w-full h-auto min-h-screen",
              "bg-black",
              "transition-all duration-500 ease-in-out",
              "overflow-hidden",
              currentPage !== ""
                ? "translate-y-0 opacity-100"
                : "-translate-y-10 opacity-0"
            )}
          >
            <section id="Home" ref={homeRef}>
              <Home width={currentWidth}/>
            </section>
            <section id="About" ref={aboutRef}>
              <About />
            </section>
            <section id="Skills" ref={skillsRef}>
              <Skills />
            </section>
            <section id="Project" ref={projectRef}>
              <Project />
            </section>
            <section id="Contact" ref={contactRef}>
              <Contact />
            </section>
          </div>
          <footer
            className={clsx(
              "flex flex-col justify-start items-center",
              "w-full h-auto",
              "px-[8.5%] py-10",
              "text-white",
              "backdrop-blur-xl",
              "bg-white/10",
              "divide-y-2 divide-white",
              "gap-10",
              "shadow-[0_0_5px_white]"
            )}
          >
            <div
              className={clsx(
                "flex flex-row flex-wrap justify-evenly items-start",
                "w-full",
                "pb-10",
                "gap-10"
              )}
            >
              <div
                className={clsx(
                  "flex flex-col justify-center items-center",
                  "w-30",
                  "gap-1",
                  "cursor-pointer"
                )}
                onClick={() => setCurrentPage("")}
                onMouseEnter={() => setFooterLogo(true)}
                onMouseLeave={() => setFooterLogo(false)}
              >
                <h1 className={clsx("w-full", "text-center")}>RainL.</h1>
                <div className={clsx("relative", "w-full h-30")}>
                  <div
                    className={clsx(
                      "w-full h-full",
                      "bg-center bg-cover bg-no-repeat",
                      "transition-all duration-1000 ease-in-out",
                      footerLogo ? "opacity-0" : "opacity-100"
                    )}
                    style={{ backgroundImage: `url(${logoB.src})` }}
                  ></div>
                  <div
                    className={clsx(
                      "absolute",
                      "top-0",
                      "w-full h-full",
                      "bg-center bg-cover bg-no-repeat",
                      "transition-all duration-1000 ease-in-out",
                      footerLogo ? "opacity-100" : "opacity-0"
                    )}
                    style={{ backgroundImage: `url(${logoC.src})` }}
                  ></div>
                </div>
              </div>
              <nav
                className={clsx(
                  "flex flex-col justify-center items-start",
                  "w-30",
                  "gap-3"
                )}
              >
                <h1 className={clsx("text-[1rem]", "uppercase")}>Navigation</h1>
                <div
                  className={clsx("flex flex-col justify-center items-start")}
                >
                  {pages.map((item, i) => (
                    <a
                      key={i}
                      className={clsx(
                        "text-white/70 text-[.8rem]",
                        "cursor-pointer",
                        "transition-all duration-300 ease-in-out",
                        "hover:text-white"
                      )}
                      onClick={() => setCurrentPage(item.label)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </nav>
              <div
                className={clsx(
                  "flex flex-col justify-center items-start",
                  "w-50",
                  "gap-3",
                  "cursor-default"
                )}
              >
                <h1 className={clsx("text-[1rem]", "uppercase")}>
                  Contact Information
                </h1>
                <div
                  className={clsx(
                    "flex flex-col justify-center items-start",
                    "gap-1"
                  )}
                >
                  {[
                    {
                      label: "Phone",
                      icon: "bx bx-phone",
                      value: "+639397178930",
                    },
                    {
                      label: "Email",
                      icon: "bx bx-envelope",
                      value: "mercillicious@gmail.com",
                    },
                    {
                      label: "Location",
                      icon: "bx bx-location-plus",
                      value: "Pritil Street Putatan Muntinlupa City",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={clsx(
                        "flex flex-row justify-start items-center",
                        "w-full",
                        "text-white/70",
                        "gap-2"
                      )}
                    >
                      <i className={clsx(item.icon, "text-[1.3rem]")} />
                      <p className={clsx("text-[.8rem]")}>{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className={clsx(
                  "flex flex-col justify-center items-start",
                  "w-30",
                  "gap-3",
                  "cursor-default"
                )}
              >
                <h1 className={clsx("text-[1rem]", "uppercase")}>
                  Social Media
                </h1>
                <div
                  className={clsx(
                    "flex flex-col justify-center items-start",
                    "gap-0.5"
                  )}
                >
                  {[
                    {
                      label: "Facebook",
                      name: "bx bxl-facebook",
                      color: "hover:text-blue-400",
                      link: "https://www.facebook.com/ovre.kil",
                    },
                    {
                      label: "Twitter",
                      name: "bx bxl-twitter",
                      color: "hover:text-[#00ffff]",
                      link: "",
                    },
                    {
                      label: "Instagram",
                      name: "bx bxl-instagram-alt",
                      color: "hover:text-[#E1306C]",
                      link: "",
                    },
                    {
                      label: "Tiktok",
                      name: "bx bxl-tiktok",
                      color: "hover:text-[#FE2C55]",
                      link: "",
                    },
                    {
                      label: "WhatsApp",
                      name: "bx bxl-whatsapp",
                      color: "hover:text-green-400",
                      link: "",
                    },
                    {
                      label: "Telegram",
                      name: "bx bxl-telegram",
                      color: "hover:text-blue-300",
                      link: "",
                    },
                  ].map((item, i) => (
                    <a
                      key={i}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={item.label}
                      className={clsx(
                        "flex flex-row justify-start items-center",
                        "w-full",
                        "text-white/70",
                        "transition-all duration-300 ease-in-out",
                        item.color,
                        "gap-2"
                      )}
                    >
                      <i className={clsx(item.name, "text-[1.3rem]")} />
                      <p className={clsx("text-[.8rem]")}>{item.label}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div
              className={clsx(
                "text-white/90 text-[1rem] text-center",
                "transition-all duration-300 ease-in-out"
              )}
            >
              Copyright © 2025 by{" "}
              <span
                onMouseEnter={() => setFooterName(true)}
                onMouseLeave={() => setFooterName(false)}
              >
                {footerName ? "Mark Wilson " : "Rain Lee "}
              </span>
              | All Rights Reserved.
            </div>
          </footer>
        </>
      )}
    </div>
  );
}
