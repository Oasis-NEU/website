import Footer from "@/components/Footer";
import NavBar, { NavBarTheme } from "@/components/NavBar";
import Sock from "@/components/Sock";
import Head from "next/head";
import { ReactNode } from "react";

type Props = {
  title?: string;
  active: string;
  theme?: NavBarTheme;
  children?: ReactNode;
};

export default function PageWrapper({ title, active, theme, children }: Props) {
  return (
    <>
      <div className="bg-oa-light">
        <NavBar active={active} theme={theme} />
        <div className="max-w-6xl flex flex-col items-center mx-auto pt-8 px-6 mb-16">
          {children}
        </div>
        <Sock />
        <Footer />
      </div>
    </>
  );
}
