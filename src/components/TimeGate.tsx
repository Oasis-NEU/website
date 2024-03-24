"use client";

import { ReactNode } from "react";
import dynamic from "next/dynamic";

interface Props {
  openDate?: Date;
  closeDate?: Date;
  waiting?: ReactNode;
  children: ReactNode;
}

const simpleDateString = (date: Date): string =>
  date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

export { simpleDateString };

async function TimeGateComp({ openDate, closeDate, waiting, children }: Props) {
  const currTime = await fetch("https://worldtimeapi.org/api/timezone/est") // NOTE: EST time zone
    .then((response) => response.json())
    .then((data) => {
      return new Date(data.datetime);
    });

  return (
    <>
      {openDate === undefined ||
      (currTime &&
        currTime > openDate &&
        (closeDate === undefined || currTime < closeDate)) ? (
        children
      ) : currTime && currTime < openDate ? (
        waiting
      ) : (
        <></>
      )}
    </>
  );
}

const TimeGate = dynamic(() => Promise.resolve(TimeGateComp), {
  ssr: false,
  loading: () => (
    //  <></>
    <div className="animate-pulse">
      <p className="animate-bounce text-oa-dark">{"Loading ... "}</p>
    </div>
  ),
});

export default TimeGate;
