"use client";

import React, { useEffect, useState } from "react";

import WhyJoin from "../../components/WhyJoin";
import EnrollmentTimeline from "@/components/EnrollmentTimeline";
import JoinFaqs from "@/components/JoinFaqs";
import PageWrapper from "@/components/PageWrapper";
import HackSessionTimeline from "@/components/HackSessionTimeline";
import FeaturedProjects from "@/components/FeaturedProjects";
import InfoSessionBanner from "@/components/InfoSessionBanner";
import TimeGatedRegister from "@/components/TimeGatedRegister";
import DemoDayRsvp from "@/components/DemoDayRsvp";
import Image from "next/image";

export default function Join() {
  return (
    <>
      {/*<Image
        alt="Mountains behind a lake"
        src={"/images/abstractgreenmountains1.jpg"}
        width={2827}
        height={1456}
        className="max-h-[40vh] object-cover"
      />*/}
      <PageWrapper active={"Project Series"} title={"Oasis | Project Series"}>
        {/* <InfoSessionBanner /> */}
        { /*<TimeGatedRegister /> */}

        <h1 className="my-4">{"What is the Project Series?"}</h1>
        <p className="mb-12">
          Originally the only Oasis offering, the Project Series is a
          one-semester curriculum focused on building a web app alongside a team
          of fellow beginners with help from mentors. Weekly Hack Sessions
          workshops will ensure you have the skills you need to bring your
          projects to life!
        </p>
        <div className="p-8 bg-oa-yellow-pastel bg-opacity-25 rounded-xl">
          <WhyJoin />
        </div>
        <EnrollmentTimeline />
        <div className="w-full bg-oa-green-pastel bg-opacity-25 rounded-xl mb-20">
          <HackSessionTimeline />
        </div>
        <JoinFaqs />
        <FeaturedProjects />
      </PageWrapper>
    </>
  );
}
