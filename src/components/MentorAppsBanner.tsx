import BannerCard from "./BannerCard";
import TimeGate from "./TimeGate";

export default function MentorAppsBanner({
  hideLearnMore,
}: {
  hideLearnMore?: boolean;
}) {
  const buttons = [
    {
      buttonTitle: "Click Here to Apply!",
      href: "https://forms.gle/fEsPFKKYs1nxa7sK9",
    },
    {
      buttonTitle: "Learn more",
      href: "/mentor",
    },
  ];
  return (
    <TimeGate
      openDate={new Date("Nov 15 2025 00:00")}
      closeDate={new Date("Dec 15 2025 23:59")}
      // waiting={
      //   <BannerCard title={"Eboard applications are opening soon"} buttons={[]}>
      //     {" "}
      //     Stay tuned ...
      //   </BannerCard>
      // }
    >
      <BannerCard
        title={"Mentor applications are open!"}
        buttons={hideLearnMore ? buttons.slice(0, 1) : buttons.slice(0, 2)}
      >
        <>
          <p>
            Have prior web development experience? Apply now! Applications due
            by{" "}
            <b className="text-oa-blue italic">
              midnight, Monday, December 15th
            </b>
            .
          </p>
        </>
      </BannerCard>
    </TimeGate>
  );
}
