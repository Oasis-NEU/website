import Link from "next/link";
import BannerCard from "./BannerCard";
import TimeGate from "./TimeGate";

export default function EboardApps() {
  return (
    <TimeGate
      openDate={new Date("Mar 31 2024 11:59")}
      closeDate={new Date("Apr 14 2024 23:59")}
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
              Applications close at midnight on Sunday, April 14th. We look
              forward to reading them! Email{" "}
              <a
                href="mailto:oasisneu@gmail.com"
                className="text-oa-green underline italic"
              >
                oasisneu@gmail.com
              </a>{" "}
              if you have any questions.
            </p>
            <Link
              className="ring-2 ring-oa-extra-light rounded-lg shadow-md hover:ring-4 hover:shadow-lg transition-all duration-150 z-20 text-oa-extra-light bg-oa-green p-2 px-4 md:mx-auto mr-auto"
              href="https://forms.gle/GakESbVcwk42pp8q7"
            >
              Click here to apply!
            </Link>
          </div>
        </BannerCard>
      </div>
    </TimeGate>
  );
}
