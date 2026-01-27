"use client";

import { useEffect, useState } from "react";
import BannerCard from "./BannerCard";

const openDate = new Date("2026-01-27T18:00:00-05:00");
const openDateString = openDate.toLocaleDateString("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit",
});

type Status = "loading" | "waiting" | "open" | "error";

export default function TimeGatedRegister() {
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    fetch("/api/time")
      .then((response) => response.json())
      .then((data) => {
        const currTime = new Date(data.datetime);
        setStatus(currTime >= openDate ? "open" : "waiting");
      })
      .catch(() => setStatus("error"));
  }, []);

  if (status === "loading") {
    return (
      <div className="animate-pulse">
        <p className="animate-bounce text-oa-dark">
          Loading registration banner...
        </p>
      </div>
    );
  }

  if (status === "error") {
    return (
      <BannerCard title={"Unable to load registration status"} buttons={[]}>
        <p>Please refresh the page.</p>
      </BannerCard>
    );
  }

  if (status === "waiting") {
    return (
      <BannerCard title={"Registration is almost open!"} buttons={[]}>
        <p>
          Registration opens on {openDateString}. You&apos;ll need to reload this
          page after it opens to see the registration link.
        </p>
      </BannerCard>
    );
  }

  return (
    <BannerCard
      title={"Registration is open!"}
      buttons={[
        {
          buttonTitle: "Register!",
          href: "https://docs.google.com/forms/d/e/1FAIpQLSdF52guyp-NL0sA0civ_-k9DRZsrjKRZSf67se2ursAAJaUpw/viewform?usp=header",
        },
      ]}
    >
      <p>
        Registration places you on the waiting list. If you are accepted, you
        must fill out the commitment form by end-of-day on Thursday, January
        29th. Good luck!
      </p>
    </BannerCard>
  );
}
