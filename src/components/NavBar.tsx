"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import strings from "@/app/strings";
import twMerge from "../../twMerge";

export interface NavBarTheme {
  bgColor: string;
  hoverBg: string;
  textColor: string;
  selectColor: string;
}

export default function NavBar({
  active,
  theme,
}: {
  active: string;
  theme?: NavBarTheme;
}) {
  const [dropdown, setDropdown] = useState(false);

  const { bgColor, hoverBg, textColor, selectColor } = theme ?? {
    bgColor: "bg-oa-green",
    textColor: "hover:text-oa-green",
    hoverBg: "hover:bg-oa-green-pastel",
    selectColor: "bg-oa-green-pastel"
  };

  return (
    <>
      <nav
        className={`sticky top-0 z-50 ${bgColor} text-oa-extra-light text-xl flex flex-col items-center justify-center shadow-2xl`}
      >
        <div className="flex flex-row justify-between items-center max-w-7xl w-full h-16 px-8">
          <Link target="" href="/">
            <Logo className="w-10 h-10 fill-oa-extra-light hover:drop-shadow-xl drop-shadow-md" />
          </Link>
          <ul className="flex-row lg:flex w-full justify-end hidden group gap-1">
            {strings.NavBar.destinations.map(({ name, link, target }, i) => (
              <Link
                className={twMerge(
                  `shadow-sm hover:shadow-md ${textColor} transition-all duration-150 ${hoverBg} hover:rounded-md p-2 px-4`,
                  active === name
                    ? `bg-opacity-50 ${selectColor} rounded-md `
                    : ""
                )}
                href={link}
                target={target}
                key={i}
              >
                {name}
              </Link>
            ))}
          </ul>
          <div
            className="relative pt-3 pb-2 pl-16 visible lg:hidden"
            onMouseOver={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <div>
              <FontAwesomeIcon
                className="text-oa-extra-light w-8 h-8 shadow-sm"
                icon={faBars}
              />
            </div>
            <ul
              className={
                "absolute right-0 mt-1 flex-col lg:hidden flex p-2 rounded-md bg-oa-extra-light transition-all duration-300 origin-top-right text-oa-green shadow-md" +
                (dropdown ? "  " : " scale-0 -translate-y-12 opacity-0 ")
              }
            >
              {strings.NavBar.destinations.map(({ name, link, target }, i) => (
                <Link
                  className={`hover:shadow-md hover:text-oa-green transition-all duration-150 ${hoverBg} hover:rounded-md p-2 px-4`}
                  href={link}
                  target={target}
                  key={i}
                >
                  {name}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
