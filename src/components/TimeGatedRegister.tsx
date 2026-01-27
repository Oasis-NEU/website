"use client";

import BannerCard from "./BannerCard";
import dynamic from "next/dynamic";

const od = new Date("2026-01-27T18:00:00-05:00");

async function TimeGatedRegisterContents() {
  const openDate = od;
  const openDateString = od.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

  const currTime = await fetch("/api/time")
    .then((response) => response.json())
    .then((data) => new Date(data.datetime))
    .catch(() => null);

  return (
    <>
      {currTime === null ? (
        <BannerCard title={"Unable to load registration status"} buttons={[]}>
          <p>Please refresh the page.</p>
        </BannerCard>
      ) : currTime < openDate ? (
        <BannerCard title={"Registration is almost open!"} buttons={[]}>
          <p>{`Registration opens on ${
            openDateString ?? "... "
          }. You'll need to reload this page after it opens to see the registration link.`}</p>
        </BannerCard>
      ) : (
        <BannerCard
          title={"Registration is open!"}
          buttons={[
            {
              buttonTitle: "Register!",
              href: "https://forms.gle/UYUyiZMSuh42a7768",
            },
          ]}
        >
          <p>
            Registration places you on the waiting list. If you are accepted, you must fill out the commitment form by end-of-day on Thursday,
            January 29th. Good luck!
          </p>
        </BannerCard>
      )}
    </>
  );
}

const TimeGatedRegister = dynamic(
  () => Promise.resolve(TimeGatedRegisterContents),
  {
    ssr: false,
    loading: () => (
      <div className="animate-pulse">
        <p className="animate-bounce text-oa-dark">
          Loading registration banner ...{" "}
        </p>
      </div>
    ),
  }
);

export default TimeGatedRegister;
