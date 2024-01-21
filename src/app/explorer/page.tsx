"use client";

import PageWrapper from "@/components/PageWrapper";
import twMerge from "../../../twMerge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faReact } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Image from "next/image";
import { faDatabase, faMobilePhone, faProjectDiagram, faServer } from "@fortawesome/free-solid-svg-icons";
import * as ics from "ics";
import { faCalendarPlus } from "@fortawesome/free-regular-svg-icons";
import { useRef } from "react";

function formatDate(
  year: number,
  month: number,
  day: number,
  hr24: number,
  min60: number
): string {
  let options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "short",
    hour: "numeric",
    minute: "numeric",
  };

  // return new Date(month + "-" + day + "-" + year + "T" + hr24 + ":" + min60 + ":00")

  return new Date(year, month - 1, day, hr24, min60, 0, 0)
    .toLocaleDateString("en-US", options)
    .replace(":00", "")

  // return new Date(year + "/0" + month + "/0" + day + "T" + hr24 + ":" + min60);
}

function downloadICS(
  title: string,
  year: number,
  month: number,
  day: number,
  hr24: number,
  min60: number,
  durationMins: number,
  description: string,
  location: string
) {
  ics.createEvent(
    {
      title: title,
      busyStatus: "BUSY",
      start: [year, month, day, hr24, min60],
      duration: { minutes: durationMins },
      description: description,
      location: location,
    },
    (error, value) => {
      if (error) {
        console.log(error);
      }

      const element = document.createElement("a");
      const file = new Blob([value], {
        type: "text/calendar",
      });
      element.href = URL.createObjectURL(file);
      element.download = title.replaceAll(" ", "") + ".ics";
      document.body.appendChild(element); // Required for this to work in FireFox
      element.click();
    }
  );
}

export default function ExplorerJoin() {
  const events = [
    {
      title: "HS0 / EX 0",
      description:
        "Learn the basics of teaming, ideation, project management, and UI/UX design so you're prepared with the skills you need to plan your project.",
      icon: faProjectDiagram,
      year: 2024,
      month: 1,
      day: 21,
      hr24: 12,
      min60: 0,
      durationMins: 60,
      location: "Behrakis 010",
      redacted: false,
    },
    {
      title: "HS1/EX1: Git Started",
      description:
        "Learn the foundational basics of Git, HTML, and CSS so you can build websites collaboratively with a team, either as part of the Project Series or on your own with the help of our Resources.",
      icon: faGithub,
      year: 2024,
      month: 1,
      day: 28,
      hr24: 12+7,
      min60: 0,
      durationMins: 90,
      location: "WVH 110",
      redacted: false,
    },
    {
      title: "EX2: React Essentials",
      description:
        "Expand on the basics of Git and learn essential React skills such as components and state.",
      icon: faReact,
      year: 2024,
      month: 2,
      day: 8,
      hr24: 12+7,
      min60: 0,
      durationMins: 60,
      location: "WVH 110",
      redacted: false,
    },
    {
      title: "EX3: APIs & Databases",
      description:
        "Learn to connect your web app with an API and then design a relational database in Supabase and connect it to your app.",
      icon: faDatabase,
      year: 2024,
      month: 2,
      day: 15,
      hr24: 12+7,
      min60: 0,
      durationMins: 90,
      location: "Richards 254",
      redacted: false,
    },
    {
      title: "EX4: iOS Apps",
      description:
        "Learn the basics of app development for iOS using Xcode. It's required to have a Mac with Xcode downloaded for this session.",
      icon: faMobilePhone,
      year: 2024,
      month: 3,
      day: 21,
      hr24: 12+7,
      min60: 0,
      durationMins: 90,
      location: "TBA",
      redacted: false,
    },
    {
      title: "EX5: Deployment",
      description:
        "Learn to deploy your web app to the public using Netlify. Then we will have open Q&A to help you troubleshoot your web apps.",
      icon: faServer,
      year: 2024,
      month: 3,
      day: 28,
      hr24: 12+7,
      min60: 0,
      durationMins: 90,
      location: "TBA",
      redacted: false,
    },
  ];

  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <Image
        alt="Mountains behind a lake"
        src={"/images/explorer.png"}
        width={2827}
        height={1456}
        className="max-h-[40vh] object-cover"
      />
      <div ref={ref}>
        <PageWrapper
          active={"Explorer Series"}
          title={"Oasis | Explorer Series"}
          theme={{
            bgColor: "bg-ex-blue-dark",
            hoverBg: "hover:bg-ex-blue",
            textColor: "hover:text-oa-extra-light",
            selectColor: "bg-ex-blue",
          }}
        >
          <h1 className="text-ex-blue-dark">Explorer Series</h1>
          <h2 className="text-ex-blue text-xl italic">
            Major events, open to all.
          </h2>
          <div className="flex flex-col gap-8 mt-4 mb-16">
            {events.map(
              (
                {
                  title,
                  description,
                  year,
                  month,
                  day,
                  hr24,
                  min60,
                  durationMins,
                  location,
                  icon,
                  redacted,
                },
                i
              ) => (
                <div
                  key={i}
                  className={twMerge(
                    "flex gap-0 md:flex-row flex-col w-full items-start max-w-3xl p-4 bg-ex-blue-pastel bg-opacity-30 shadow-md rounded-lg relative group -ml-0",
                    i % 2 === 0 ? "md:mr-24 mr-12" : "md:ml-24 ml-0"
                  )}
                >
                  {i % 2 === 0 ? (
                    <div
                      className={
                        i === events.length - 1 ? "hidden" : "md:block hidden"
                      }
                    >
                      <div className="absolute translate-x-4 md:translate-x-12 right-0 bottom-0 w-2 h-1/2 bg-ex-orange-pastel flex flex-row-reverse"></div>
                      <div className="absolute translate-x-4 md:translate-x-12 translate-y-8 right-0 bottom-0 w-2 h-1/2 bg-ex-orange-pastel flex flex-row-reverse"></div>
                      <div className="absolute translate-x-4 md:translate-x-12 right-0 top-1/2 bottom-0 w-4 md:w-12 h-2 bg-ex-orange-pastel flex flex-row-reverse"></div>
                    </div>
                  ) : (
                    <div
                      className={
                        i === events.length - 1 ? "hidden" : "md:block hidden"
                      }
                    >
                      <div className="absolute -translate-x-4 md:-translate-x-12 left-0 bottom-0 w-2 h-1/2 bg-ex-orange-pastel flex flex-row-reverse"></div>
                      <div className="absolute -translate-x-4 md:-translate-x-12 translate-y-8 left-0 bottom-0 w-2 h-1/2 bg-ex-orange-pastel flex flex-row-reverse"></div>
                      <div className="absolute -translate-x-4 md:-translate-x-12 left-0 top-1/2 bottom-0 md:w-12 w-4 h-2 bg-ex-orange-pastel flex flex-row-reverse"></div>
                    </div>
                  )}
                  <div className="rounded-lg absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-tr from-ex-blue to-oa-extra-light opacity-[15%] group-hover:opacity-20 transition-all duration-50"></div>
                  <div className="rounded-md shadow-md bg-oa-light p-4 z-10 md:mb-0 mb-4">
                    <FontAwesomeIcon
                      size="3x"
                      className="text-ex-orange drop-shadow-sm"
                      icon={icon}
                    />
                  </div>
                  <div className="flex flex-col z-10 w-full flex-1 md:pl-4">
                    <h3 className="text-ex-dark">{title}</h3>
                    {!redacted && (
                      <p className="text-ex-blue-dark">{description}</p>
                    )}
                    <button
                      onClick={() =>
                        downloadICS(
                          title,
                          year,
                          month,
                          day,
                          hr24,
                          min60,
                          durationMins,
                          description,
                          location
                        )
                      }
                      className="text-oa-dark italic p-2 bg-oa-light hover:bg-ex-blue-pastel rounded-full px-4 mt-4 w-fit shadow-sm hover:shadow-md hover:ring-2 ring-ex-blue-dark transition-all duration-150 flex flex-row gap-2 group/download"
                    >
                      <FontAwesomeIcon
                        size="lg"
                        className=" text-ex-orange drop-shadow-sm group-hover/download:text-ex-dark group-hover/download:animate-bounce"
                        icon={faCalendarPlus}
                      />
                      <span
                        suppressHydrationWarning={true}
                        className="group-hover/download:text-ex-blue-dark"
                      >
                        {formatDate(year, month, day, hr24, min60)} | {location}{" "}
                        -{" "}
                        {durationMins / 60 === 1
                          ? "1hr"
                          : durationMins / 60 + "hrs"}{" "}
                      </span>
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
          <h1 className="text-ex-blue-dark mb-4">
            Built with{" "}
            <span className="relative group hover:drop-shadow-xl">
              <Link
                target="_blank"
                className="text-ex-blue relative group-hover:text-red-500  transition-all duration-150"
                href="/resources"
              >
                Resources
              </Link>
              <div className="absolute left-0 right-0 h-[0.3rem] -translate-y-2 rounded-full bg-ex-blue  group-hover:bg-red-500 group-hover:drop-shadow-md transition-all duration-150 bottom-0"></div>
            </span>{" "}
            in mind
          </h1>
          <p className="mb-12 max-w-3xl">
            Sessions are designed to set you up for success on your own. Learn
            the basics, and then use async resources to continue your journey.
            Our tailor-made resources match up with presentations and provide
            supplemental materials for you to reference long afterwards.
          </p>
          <h1 className="text-ex-blue-dark mb-4">By the numbers</h1>
          <div className="max-w-3xl grid grid-rows-2 grid-cols-1 sm:grid-cols-3 md:grid-rows-1 gap-8 items-center justify-center">
            {[
              { count: 158, content: "HS0 Attendees" },
              { count: 32, content: "Resource Pages" },
              { count: 5, content: "Topic Areas" },
            ].map((obj, i) => (
              <div
                key={i}
                className="bg-oa-extra-light rounded-3xl flex flex-col items-center justify-center max-w-md w-full p-4 h-48 shadow-md"
              >
                <h2 className="text-ex-orange text-6xl mb-2">{obj.count}</h2>
                <p className="text-oa-gray text-center">{obj.content}</p>
              </div>
            ))}
          </div>
        </PageWrapper>
      </div>
    </>
  );
}
