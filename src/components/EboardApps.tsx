import Link from "next/link";
import BannerCard from "./BannerCard";
import TimeGate from "./TimeGate";

export default function EboardApps() {
  return (
    <TimeGate
      openDate={new Date("Nov 15 2025 00:00")}
      closeDate={new Date("Dec 15 2025 23:59")}
      waiting={
        <BannerCard title={"Eboard applications are opening soon"} buttons={[]}>
          {" "}
          Stay tuned ...
        </BannerCard>
      }
    >
      <div>
        <BannerCard title={"Eboard applications are open!"} buttons={[]}>
          <div className="flex mb-0 flex-col gap-4 md:items-start">
            <p>
              Applications close at{" "}
              <b className="text-oa-blue italic">
                midnight, Monday, December 15th
              </b>
              . Email{" "}
              <a
                href="mailto:oasisneu@gmail.com"
                className="text-oa-green underline italic"
              >
                oasis.neu@gmail.com
              </a>{" "}
              if you have any questions.
            </p>
            <Link
              className="ring-2 ring-oa-extra-light rounded-lg shadow-md hover:ring-4 hover:shadow-lg transition-all duration-150 z-20 text-oa-extra-light bg-oa-green p-2 px-4 md:mx-auto mr-auto"
              href="https://forms.gle/NofiVC2m1ftVzHNk7"
            >
              Click here to apply!
            </Link>
          </div>
        </BannerCard>
      </div>
    </TimeGate>
  );
}
