"use client";

import BannerCard from "./BannerCard";
import dynamic from "next/dynamic";

const od = new Date("Sep 17 2024 17:00 EDT");

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
              href: "https://forms.gle/TYJoTM9ftp8rBhWR9",
            },
          ]}
        >
          <p>
            Registration places you on the waiting list. We will send the
            Commitment form to confirm your spot before end-of-day on Wednesday,
            September 18th. Good luck!
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
