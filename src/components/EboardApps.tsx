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
      <BannerCard
        title="Eboard applications are open!"
        buttons={[
          {
            buttonTitle: "Click here to apply!",
            href: "https://forms.gle/GakESbVcwk42pp8q7",
          },
        ]}
      >
        Applications close at midnight on Sunday, April 14th. We look forward to reading them! Email <a href="mailto:oasisneu@gmail.com" className="text-oa-green underline italic">oasisneu@gmail.com</a> if you have any questions.
      </BannerCard>
    </TimeGate>
  );
}
