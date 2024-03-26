import Footer from "@/components/Footer";
import NavBar, { NavBarTheme } from "@/components/NavBar";
import Sock from "@/components/Sock";
import Head from "next/head";
import { ReactNode } from "react";

type Props = {
  title?: string;
  active: string;
  theme?: NavBarTheme;
  fullWidthHeight?: boolean;
  children?: ReactNode;
};

export default function PageWrapper({
  title,
  active,
  theme,
  fullWidthHeight,
  children,
}: Props) {
  return (
    <>
      <div className="bg-oa-light">
        <NavBar active={active} theme={theme} />
        <div
          className={`${
            fullWidthHeight ? "" : "max-w-6xl pt-8 px-6 mb-16"
          } flex flex-col items-center mx-auto`}
        >
          {children}
        </div>
        <Sock />
        <Footer />
      </div>
    </>
  );
}
