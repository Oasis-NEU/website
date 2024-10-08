"use client";

import React, { useRef } from "react";
import Hook from "@/components/Hook";
import PageWrapper from "@/components/PageWrapper";
import SeriesBlock from "@/components/SeriesBlock";
import MissionBlock from "@/components/MissionBlock";
import Eboard from "@/components/Eboard";
import HistoryBlock from "@/components/HistoryBlock";
import InfoSessionBanner from "@/components/InfoSessionBanner";
import MentorAppsBanner from "@/components/MentorAppsBanner";
import BannerCard from "@/components/BannerCard";
import EmailSignup from "@/components/EmailSignup";
import Link from "next/link";
import TimeGatedRegister from "@/components/TimeGatedRegister";
import DemoDayEmbed from "@/components/LumaRegister";
import LumaRegister from "@/components/LumaRegister";
import DemoDayRsvp from "@/components/DemoDayRsvp";
import EboardApps from "@/components/EboardApps";

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <Hook
        scrollJump={() => {
          if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }}
      />
      <div ref={ref}>
        <PageWrapper active="Home">
          {/* <div className="flex md:flex-row flex-col md:gap-8 mb-12">
            <EboardApps />
            <MentorAppsBanner />
          </div> */}
          {/* <TimeGatedRegister /> */}
          {/* <InfoSessionBanner /> */}
          {/* <div className="flex md:flex-row flex-col md:gap-8">
            <MentorAppsBanner />
            <BannerCard
              title={"Leadership Team Applications are open!!"}
              buttons={[{ buttonTitle: "Click here to apply!", href: "https://forms.gle/tqNP5uFCW2SK2xBA7" }]}
              titleColor="oa-dark"
              bgColor="oa-green-pastel"
            >
              <span className="text-oa-dark">
                We have roles open in{" "}
                <i className="italic">Program, Operations, and Marketing</i>.
                Applications close{" "}
                <b className="text-oa-green italic">Tuesday, December 5th</b>.
              </span>
            </BannerCard>
          </div> */}
          <SeriesBlock />
          <MissionBlock />
          <HistoryBlock />
          <Eboard />
        </PageWrapper>
      </div>
    </>
  );
}
