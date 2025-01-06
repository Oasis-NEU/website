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
      openDate={new Date("January 6 2025 00:00")}
      closeDate={new Date("January 11 2025 23:59")}
      // waiting={
      //   <BannerCard title={"Eboard applications are opening soon"} buttons={[]}>
      //     {" "}
      //     Stay tuned ...
      //   </BannerCard>
      // }
    >
      <BannerCard
        title={"Mentor Applications are OPEN!"}
        buttons={hideLearnMore ? buttons.slice(0, 1) : buttons.slice(0, 2)}
      >
        <>
          <p>
            Have prior web development experience? Mentor Applications are open
            for Spring 2025. Apply now! Applications close at{" "}
            <b className="text-oa-blue italic">
              midnight, Saturday, January 11th
            </b>
            .
          </p>
        </>
      </BannerCard>
    </TimeGate>
  );
}
