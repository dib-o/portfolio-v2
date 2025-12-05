"use client";

import clsx from "clsx";
import bgHomeL from "@/app/images/Home/landscapes.png";
import bgHomeP from "@/app/images/home/portrait.jpg";
import cover from "@/app/images/home/cover.jpg";
import { useEffect, useState } from "react";

export default function Home({width} : {width: number}) {
  const [viewName, setViewName] = useState(false);
  const text = "Junior Web Developer";
  const [display, setDisplay] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [hoverLink, setHoverLink] = useState<number | null>(null);
  const [currentWidth, setCurrentWidth] = useState(0);


  useEffect(() => {
    const handleResize = () => {
      setCurrentWidth(window.innerWidth);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let i = display.length;

    const speed = isDeleting ? 70 : 120; // delete faster

    const interval = setTimeout(() => {
      if (!isDeleting) {
        // typing
        if (i < text.length) {
          setDisplay(text.slice(0, i + 1));
        } else {
          // finished typing → start deleting
          setTimeout(() => {
            setIsDeleting(true);
          }, 1000);
        }
      } else {
        // deleting
        if (i > 0) {
          setDisplay(text.slice(0, i - 1));
        } else {
          // finished deleting → start typing again
          setIsDeleting(false);
        }
      }
    }, speed);
    return () => clearTimeout(interval);
  }, [display, isDeleting]);

  useEffect(() => {
    setTimeout(() => {});
  }, [viewName]);
  return (
    <div className={clsx("relative", "w-full h-auto", "mb-50")}>
      <div
        className={clsx(
          "absolute",
          "max-[750px]:bottom-[-50]  right-30 max-[1100px]:right-20 max-[1000px]:right-10 max-[900px]:right-[-50]",
          "w-300 max-[750px]:w-125 max-[650px]:w-100 h-full max-[750px]:h-125 max-[650px]:h-100",
          "bg-center bg-cover bg-no-repeat"
        )}
        style={{
          backgroundImage: `url(${
            width >= 750 ? bgHomeL.src : bgHomeP.src
          })`,
        }}
      ></div>
      <div
        className={clsx(
          "relative",
          "flex flex-col justify-start items-start",
          "w-full h-auto min-h-screen",
          "px-[8.5%] pt-60 max-[750px]:pt-50 max-[400px]:pt-30",
          "text-white text-[1.5rem]",
          "cursor-default",
          "gap-3"
        )}
      >
        <p className={clsx("text-[1rem]")}>Hello I'm</p>
        <h1
          className={clsx(
            "relative",
            "w-full h-30 max-[650px]:h-15",
            "text-[5rem] max-[650px]:text-[3rem]"
          )}
          onMouseEnter={() => setViewName(true)}
          onMouseLeave={() => setViewName(false)}
        >
          <p
            className={clsx(
              "absolute",
              "w-150 max-[650px]:w-100 max-[550px]:w-75",
              "transition-all duration-300 ease-in-out",
              viewName
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            )}
          >
            Mark Wilson
          </p>
          <p
            className={clsx(
              "absolute",
              "w-150 max-[650px]:w-100 max-[550px]:w-70",
              "transition-all duration-300 ease-in-out",
              !viewName
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            )}
          >
            Rain Lee
          </p>
        </h1>
        <h1
          className={clsx(
            "w-auto h-15 max-[650px]:h-10",
            "text-black text-[2.5rem] max-[650px]:text-[2rem] max-[550px]:text-[1.5rem]",
            "uppercase"
          )}
          style={{ WebkitTextStroke: "1px white" }}
        >
          {display}
        </h1>
        <div
          className={clsx(
            "relative",
            "flex flex-row justify-between items-center",
            "w-auto",
            "gap-10 max-[650px]:gap-5",
            "text-[1rem]"
          )}
        >
          {[
            {
              bgColor: "bg-black",
              beforeBg: "before:bg-white",
              textColor: "text-white",
              font: "font-normal",
              hoverText: "hover:text-black",
              hoverFont: "hover:font-bold",
              label: "Hire Me",
            },
            {
              bgColor: "bg-white",
              beforeBg: "before:bg-black",
              textColor: "text-black",
              font: "font-bold",
              hoverText: "hover:text-white",
              hoverFont: "hover:font-normal",
              label: "Contact Me",
            },
          ].map((item, i) => (
            <button
              key={i}
              className={clsx(
                "relative",
                "w-30",
                "p-2",
                item.bgColor,
                item.textColor,
                item.font,
                "border-white border",
                "overflow-hidden",
                "rounded-md",
                "cursor-pointer",
                "transition-all duration-300 ease-in-out",
                "z-10",

                "before:absolute",
                "before:left-0 before:top-0",
                "before:content-['']",
                "before:h-full before:w-0",
                item.beforeBg,
                "before:z-0",
                "before:transition-all before:duration-500 before:ease-in-out",

                "hover:before:w-full",
                item.hoverText,
                item.hoverFont
              )}
            >
              <span className="relative z-20">{item.label}</span>
            </button>
          ))}
        </div>
        <div
          className={clsx(
            "flex flex-row justify-center items-center",
            "gap-5 max-[650px]:gap-3",
            "mt-5 max-[650px]:mt-1",
            "rounded-md"
          )}
        >
          {[
            {
              label: "Facebook",
              name: "bx bxl-facebook",
              link: "https://www.facebook.com/ovre.kil",
            },
            { label: "Instagram", name: "bx bxl-instagram", link: "n/a" },
            { label: "Linkedin", name: "bx bxl-linkedin", link: "n/a" },
            { label: "Github", name: "bx bxl-github", link: "n/a" },
          ].map((item, i) => (
            <a
              key={i}
              className={clsx(
                item.name,
                "group",
                "relative",
                "cursor-pointer",
                "text-black text-[2rem] max-[650px]:text-[1.5rem]",
                "rounded-full",
                "p-1.5",
                "transition-all duration-300 ease-in-out",
                hoverLink !== null
                  ? hoverLink === i
                    ? "bg-white scale-[1.25]"
                    : "bg-white/30"
                  : "bg-white"
              )}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoverLink(i)}
              onMouseLeave={() => setHoverLink(null)}
            >
              {/* Tooltip */}
              <span
                className={clsx(
                  "absolute left-1/2 -translate-x-1/2 -bottom-8",
                  "px-2 py-1",
                  "text-[0.8rem] text-white",
                  "rounded-md",
                  "opacity-0 group-hover:opacity-100",
                  "transition-opacity duration-300",
                  "scale-none"
                )}
              >
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
