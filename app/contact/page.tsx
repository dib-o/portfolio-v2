"use client";

import clsx from "clsx";
import { useState } from "react";
import emailjs from "emailjs-com";

import nameB from "@/app/images/contact/form/nameB.png";
import nameC from "@/app/images/contact/form/nameC.png";
import emailB from "@/app/images/contact/form/emailB.png";
import emailC from "@/app/images/contact/form/emailC.png";
import phoneB from "@/app/images/contact/form/phoneB.png";
import phoneC from "@/app/images/contact/form/phoneC.png";
import subjectB from "@/app/images/contact/form/subjectB.png";
import subjectC from "@/app/images/contact/form/subjectC.png";
import check from "@/app/images/contact/form/check.png";
import wrong from "@/app/images/contact/form/wrong.png";
import online from "@/app/images/contact/form/online.png";
import offline from "@/app/images/contact/form/offline.png";
import buildings from "@/app/images/contact/buildings.png";

export default function Contact() {
  const [hoverPhone, setHoverPhone] = useState(false);
  const [hoverMail, setHoverMail] = useState(false);
  const [hoverLocation, setHoverLocation] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [status, setStatus] = useState("");

  const [hoverIcon, setHoverIcon] = useState<number | null>(null);

  const resetInputs = () => {
    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        e.currentTarget,
        process.env.NEXT_PUBLIC_PUBLIC_KEY as string
      );

      console.log("Email sent successfully");
      setStatus("Message sent successfully!");
      setSuccess(true);
      resetInputs();
    } catch (error: any) {
      console.error("EmailJS error:", error.text || error);
      setSuccess(false);
      setStatus("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

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
          className={clsx("text-black", )}
          style={{ WebkitTextStroke: "1px white" }}
        >
          Contact
        </span>
      </h1>
      <div
        className={clsx(
          "flex flex-row flex-wrap justify-between max-[1446px]:justify-center items-center",
          "w-full h-auto",
          "px-[8.5%]",
          "text-white",
          "max-[1446px]:gap-10"
        )}
      >
        <div
          className={clsx(
            "flex flex-col max-[1446px]:flex-row max-[961px]:flex-col justify-center items-start max-[961px]:items-center",
            "w-100 max-[1446px]:w-full",
            "gap-10"
          )}
        >
          <div
            className={clsx(
              "flex flex-col justify-center items-start max-[1446px]:items-center",
              "w-full  max-[1446px]:w-100 max-[551px]:w-full",
              "gap-5"
            )}
          >
            <h1 className={clsx("text-[1.5rem]", "font-bold")}>
              Contact Information
            </h1>
            <div
              className={clsx(
                "flex flex-col justify-center items-start max-[1446px]:items-center",
                "w-full",
                "gap-5"
              )}
            >
              {[
                {
                  label: "Phone",
                  icon: "bx bx-phone",
                  hoverIcon: "bx bxs-phone",
                  value: "+639397178930",
                  hover: hoverPhone,
                  enter: () => setHoverPhone(true),
                  leave: () => setHoverPhone(false),
                },
                {
                  label: "Email",
                  icon: "bx bx-envelope",
                  hoverIcon: "bx bxs-envelope",
                  value: "mercillicious@gmail.com",
                  hover: hoverMail,
                  enter: () => setHoverMail(true),
                  leave: () => setHoverMail(false),
                },
                {
                  label: "Location",
                  icon: "bx bx-location-plus",
                  hoverIcon: "bx bxs-location-plus",
                  value: "Pritil Street Putatan Muntinlupa City",
                  hover: hoverLocation,
                  enter: () => setHoverLocation(true),
                  leave: () => setHoverLocation(false),
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={clsx(
                    "relative",
                    "flex flex-row justify-start items-center",
                    "w-full max-[961px]:w-60",
                    "gap-5",
                    "transition-all duration-300 ease-in-out",
                    "cursor-pointer"
                  )}
                  onMouseEnter={item.enter}
                  onMouseLeave={item.leave}
                >
                  <i
                    className={clsx(
                      item.icon,
                      "text-[2rem]",
                      "transition-all duration-300 ease-in-out",
                      !item.hover ? "opacity-100" : "opacity-0"
                    )}
                  ></i>
                  <i
                    className={clsx(
                      "absolute",
                      item.hoverIcon,
                      "text-[2rem]",
                      "transition-all duration-300 ease-in-out",
                      item.hover ? "opacity-100" : "opacity-0"
                    )}
                  ></i>
                  <div
                    className={clsx("flex flex-col justify-center items-start")}
                  >
                    <h2
                      className={clsx("text-[1rem]", "uppercase", "font-bold")}
                    >
                      {item.label}
                    </h2>
                    <p className={clsx("text-[.8rem]")}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className={clsx(
              "flex flex-col justify-center items-start max-[1446px]:items-center",
              "w-full  max-[1446px]:w-100 max-[551px]:w-full",
              "gap-5"
            )}
          >
            <h2 className={clsx("text-[1.5rem]", "font-bold")}>Social Media</h2>
            <div
              className={clsx(
                "flex flex-row flex-wrap justify-start max-[1446px]:justify-center items-center",
                "w-50",
                "gap-5"
              )}
            >
              {[
                {
                  label: "Facebook",
                  name: "bx bxl-facebook",
                  color: "text-blue-400",
                  link: "https://www.facebook.com/ovre.kil",
                },
                {
                  label: "Twitter",
                  name: "bx bxl-twitter",
                  color: "text-[#00ffff]",
                  link: "",
                },
                {
                  label: "Instagram",
                  name: "bx bxl-instagram-alt",
                  color: "text-[#E1306C]",
                  link: "",
                },
                {
                  label: "Tiktok",
                  name: "bx bxl-tiktok",
                  color: "text-[#FE2C55]",
                  link: "",
                },
                {
                  label: "WhatsApp",
                  name: "bx bxl-whatsapp",
                  color: "text-green-400",
                  link: "",
                },
                {
                  label: "Telegram",
                  name: "bx bxl-telegram",
                  color: "text-blue-300",
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
                    "relative",
                    "flex justify-center items-center",
                    "w-12 h-12",
                    "cursor-pointer",
                    "rounded-xl"
                  )}
                  onMouseEnter={() => setHoverIcon(i)}
                  onMouseLeave={() => setHoverIcon(null)}
                >
                  <span
                    className={clsx(
                      "flex justify-center items-center",
                      "w-full h-full",
                      "rounded-xl",
                      "bg-white",
                      "border-white border",
                      "transition-all duration-800 ease-in-out",
                      hoverIcon === i
                        ? "transform-[rotateX(45deg)_translateZ(-15px)] shadow-[inset_0px_0px_10px_black]"
                        : ""
                    )}
                  >
                    <i
                      className={clsx(
                        item.name,
                        "text-black text-[2.5rem] text-center",
                        "transition-all duration-500 ease-in-out",
                        hoverIcon === i ? "opacity-0" : "opacity-100"
                      )}
                    ></i>
                  </span>
                  <span
                    className={clsx(
                      "absolute",
                      "flex justify-center items-center",
                      "w-full h-full",
                      "rounded-xl"
                    )}
                  >
                    <i
                      className={clsx(
                        "bx-tada",
                        item.name,
                        item.color,
                        "text-[2.5rem] text-center",
                        "transition-all duration-500 ease-in-out",
                        "text-shadow-[0_0_5px_rgba(0,0,0.2)]",
                        hoverIcon === i ? "opacity-100" : "opacity-0"
                      )}
                    ></i>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div
          className={clsx(
            "flex flex-col justify-center items-start",
            "w-200 max-[961px]:w-full h-auto"
          )}
        >
          <div
            className={clsx(
              "flex flex-row justify-center items-center",
              "w-full h-15",
              "px-5",
              "gap-5",
              "overflow-hidden"
            )}
          >
            <h1
              className={clsx("w-60", "uppercase", "text-[1.5rem] text-center")}
            >
              Let's Connect
            </h1>
          </div>
          <form
            className={clsx(
              "flex flex-col justify-start items-center",
              "w-full h-110 max-[961px]:h-auto ",
              "p-5",
              "gap-5",
              "border-white border",
              "shadow-[10px_10px_1px_gray]"
            )}
            onSubmit={(e) => sendEmail(e)}
          >
            <div
              className={clsx(
                "flex flex-row flex-wrap justify-center items-center",
                "w-full",
                "gap-5"
              )}
            >
              {[
                {
                  label: "Full Name",
                  type: "text",
                  value: name,
                  change: (e: React.ChangeEvent<HTMLInputElement>) =>
                    setName(e.target.value),
                  iconB: nameB.src,
                  iconC: nameC.src,
                  condition: name.length > 5,
                },
                {
                  label: "Email Address",
                  type: "email",
                  value: email,
                  change: (e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value),
                  iconB: emailB.src,
                  iconC: emailC.src,
                  condition: email.includes("@"),
                },
                {
                  label: "Phone Number",
                  type: "number",
                  value: phone,
                  change: (e: React.ChangeEvent<HTMLInputElement>) =>
                    setPhone(e.target.value),
                  iconB: phoneB.src,
                  iconC: phoneC.src,
                  condition: phone.length >= 10 && phone.length <= 12,
                },
                {
                  label: "Email Subject",
                  type: "text",
                  value: subject,
                  change: (e: React.ChangeEvent<HTMLInputElement>) =>
                    setSubject(e.target.value),
                  iconB: subjectB.src,
                  iconC: subjectC.src,
                  condition: subject.length >= 5,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={clsx(
                    "flex flex-row justify-between items-center",
                    "w-92 max-[961px]:w-full h-13",
                    "bg-white",
                    "shadow-[inset_0_0_5px_rgba(0,0,0.2)]",
                    "text-black",
                    "rounded-xl",
                    "border-white border",
                    "overflow-hidden"
                  )}
                >
                  <input
                    className={clsx(
                      "w-70 max-[551px]:w-[80%]",
                      "py-3 px-5",
                      "text-[1rem]"
                    )}
                    title={item.label}
                    name={item.label}
                    type={item.type}
                    value={item.value}
                    placeholder={item.label}
                    onChange={item.change}
                    required
                  />
                  <div
                    className={clsx(
                      "relative",
                      "w-15 max-[551px]:w-[20%] h-13",
                      "bg-center bg-contain bg-no-repeat",
                      "shadow-[0_0_5px_rgba(0,0,0.2)]"
                    )}
                    style={{ backgroundImage: `url(${item.iconB})` }}
                  >
                    <div
                      className={clsx(
                        "absolute",
                        "left-0",
                        "w-full h-full",
                        "bg-center bg-contain bg-no-repeat",
                        "transition-all duration-300 ease-in-out",
                        item.condition ? "opacity-100" : "opacity-0"
                      )}
                      style={{ backgroundImage: `url(${item.iconC})` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div
              className={clsx(
                "w-full h-full",
                "bg-white",
                "rounded-xl",
                "shadow-[inset_0_0_5px_rgba(0,0,0.2)]",
                "border-white border",
                "overflow-hidden"
              )}
            >
              <textarea
                className={clsx(
                  "w-full h-full max-[961px]:h-50",
                  "rounded-xl",
                  "py-3 px-5",
                  "text-black text-[1rem]",
                  "resize-none"
                )}
                title="Message"
                name="Message"
                value={message}
                placeholder="Enter a message"
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <div
              className={clsx(
                "flex flex-row max-[635px]:flex-col justify-between items-center",
                "w-full",
                "gap-10"
              )}
            >
              <div
                className={clsx(
                  "flex flex-row justify-center items-center",
                  "w-65 max-[551px]:w-full",
                  "gap-5"
                )}
              >
                <div
                  className={clsx(
                    "w-30 max-[551px]:w-[50%]",
                    "bg-white",
                    "rounded-xl",
                    "border-white border",
                    "shadow-[inset_0_0_5px_rgba(0,0,0.2)]",
                    "overflow-hidden"
                  )}
                >
                  <div
                    className={clsx(
                      "w-full",
                      "p-3",
                      "rounded-xl",
                      "text-black text-center",
                      "uppercase",
                      "cursor-pointer",
                      "transition-all duration-300 ease-in-out",
                      "hover:shadow-[inset_0_0_10px_rgba(0,0,0.2)]"
                    )}
                    onClick={resetInputs}
                  >
                    Reset
                  </div>
                </div>
                <div
                  className={clsx(
                    "w-30 max-[551px]:w-[50%]",
                    "bg-white",
                    "rounded-xl",
                    "border-white border",
                    "shadow-[inset_0_0_5px_rgba(0,0,0.2)]",
                    "overflow-hidden"
                  )}
                >
                  <button
                    type="submit"
                    className={clsx(
                      "w-full",
                      "p-3",
                      "rounded-xl",
                      "text-black text-center",
                      "uppercase",
                      "cursor-pointer",
                      "transition-all duration-300 ease-in-out",
                      "hover:shadow-[inset_0_0_10px_rgba(0,0,0.2)]"
                    )}
                  >
                    Submit
                  </button>
                </div>
              </div>
              <div
                className={clsx(
                  "flex flex-row justify-center items-center",
                  "w-auto max-[551px]:w-full h-13",
                  "bg-white",
                  "rounded-xl",
                  "shadow-[inset_0_0_5px_rgba(0,0,0.2)]",
                  "border-white border",
                  "overflow-hidden",
                  "text-black",
                  "cursor-default"
                )}
              >
                <p
                  className={clsx(
                    "flex justify-center items-center",
                    "text-left",
                    "w-auto max-[551px]:w-full min-w-30 h-full",
                    "px-3",
                    "text-shadow-[0_0_1px_black]",
                    "shadow-[inset_0_0_3px_rgba(0,0,0.2)]",
                    status !== ""
                      ? success
                        ? "text-green-300"
                        : "text-red-300"
                      : new Date().getHours() >= 8 &&
                        new Date().getHours() <= 20
                      ? "text-green-300"
                      : "text-red-300"
                  )}
                >
                  {status === ""
                    ? new Date().getHours() >= 8 && new Date().getHours() <= 20
                      ? "Online"
                      : "Offline"
                    : status}
                </p>
                <p
                  className={clsx(
                    "w-10 h-8",
                    "px-8",
                    "bg-center bg-contain bg-no-repeat"
                  )}
                  style={{
                    backgroundImage: `url(${
                      status === ""
                        ? new Date().getHours() >= 8 &&
                          new Date().getHours() <= 20
                          ? online.src
                          : offline.src
                        : success
                        ? check.src
                        : wrong.src
                    }
          )`,
                  }}
                ></p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
