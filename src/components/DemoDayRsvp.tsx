import BannerCard from "./BannerCard";
import LumaRegister from "./LumaRegister";
import TimeGate from "./TimeGate";

export default function DemoDayRsvp() {
  return (
    <TimeGate closeDate={new Date("Apr 7 2024 13:00 EST")}>
      <div>
        <BannerCard title={"Join us at Demo Day!"} buttons={[]}>
          <div className="flex mb-0 flex-col gap-4 md:items-start">
            <p>
              Come to our end-of-semester showcase,{" "}
              <b className="no-underline italic">Demo Day</b>, from{" "}
              <b className="no-underline italic">
                12-2pm on Sunday, April 7th in Hurtig 130
              </b>{" "}
              to see what our{" "}
              <b className="no-underline italic">Project Series</b> teams have
              learned to build this semester!
            </p>
            <LumaRegister eventId={"evt-AmgpIFYvnbtjvrl"} />
          </div>
        </BannerCard>
      </div>
    </TimeGate>
  );
}
