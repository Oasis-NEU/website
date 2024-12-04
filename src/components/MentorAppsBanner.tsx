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
      href: "https://forms.gle/AiETqXr8u9zUpuET9",
    },
    {
      buttonTitle: "Learn more",
      href: "/mentor",
    },
  ];
  return (
    <TimeGate
      openDate={new Date("December 4 2024 00:00")}
      closeDate={new Date("December 10 2024 23:59")}
      // waiting={
      //   <BannerCard title={"Eboard applications are opening soon"} buttons={[]}>
      //     {" "}
      //     Stay tuned ...
      //   </BannerCard>
      // }
    >
      <BannerCard
        title={"Mentor Applications are back OPEN!"}
        buttons={hideLearnMore ? buttons.slice(0, 1) : buttons.slice(0, 2)}
      >
        <>
          <p>
            Have prior web development experience? Mentor Applications are open
            for Spring 2025. Apply now! Applications close at{" "}
            <b className="text-oa-blue italic">
              midnight, Tuesday, December 10th
            </b>
            .
          </p>
        </>
      </BannerCard>
    </TimeGate>
  );
}
