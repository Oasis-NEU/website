// "use client";

import React from "react";

import PageWrapper from "@/components/PageWrapper";
import MentorBlock from "@/components/MentorBlock";
import MentorHeader from "@/components/MentorHeader";
import BannerCard from "@/components/BannerCard";
import EmailSignup from "@/components/EmailSignup";
import Link from "next/link";
import MentorAppsBanner from "@/components/MentorAppsBanner";
import MissionBlock from "@/components/MissionBlock";
import HistoryBlock from "@/components/HistoryBlock";
import HackSessionTimeline from "@/components/HackSessionTimeline";
import DemoDayRsvp from "@/components/DemoDayRsvp";

export default function Mentor() {
  return (
    <PageWrapper active={"Mentor"} title={"Oasis | Be a mentor!"}>
      <MentorAppsBanner hideLearnMore={true}/>
      <MentorHeader />
      {/* <MentorAppsBanner hideLearnMore={true} /> */}
      {/* <BannerCard title={""} buttons={[]}>
        Mentor applications are currently closed. Please feel free to reach out
        with questions by emailing{" "}
        <Link href="mailto:oasisneu@gmail.com">
          <b>oasisneu@gmail.com</b>
        </Link>
        , and stay up to date by signing up for our mailing list.
        <EmailSignup purpose={"websiteMentorAppsClosed"} />
      </BannerCard> */}
      {/* <h1 className="mt-12">Be a mentor!</h1> */}
      <div className="p-12 pt-0 mt-12 mb-8 bg-oa-green-pastel bg-opacity-50 rounded-xl">
        <MentorBlock />
      </div>
      <HackSessionTimeline />
      <div className="mt-6">
        <MissionBlock />
        <HistoryBlock />
      </div>
    </PageWrapper>
  );
}
