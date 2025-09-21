"use client";

import BannerCard from "./BannerCard";
import dynamic from "next/dynamic";

const od = new Date("Sep 21 2025 20:00 EST");

async function TimeGatedRegisterContents() {
  const openDate = od;
  const openDateString = od.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

  const currTime = await fetch("https://worldtimeapi.org/api/timezone/est")
    .then((response) => response.json())
    .then((data) => {
      return new Date(data.datetime);
    });

  return (
    <>
      {currTime === null || (openDate !== null && currTime < openDate) ? (
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
              href: "https://docs.google.com/forms/d/e/1FAIpQLSdF52guyp-NL0sA0civ_-k9DRZsrjKRZSf67se2ursAAJaUpw/viewform?usp=header",
            },
          ]}
        >
          <p>
            Registration places you on the waiting list. We will send the
            Commitment form to confirm your spot end-of-day on Tuesday,
            September 24th. Good luck!
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
