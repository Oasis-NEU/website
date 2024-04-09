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
      href: "https://forms.gle/LLQofQoZN7pXA8Jy7",
    },
    {
      buttonTitle: "Learn more",
      href: "/mentor",
    },
  ];
  return (
    <TimeGate
    openDate={new Date("Mar 31 2024 11:59")}
    closeDate={new Date("Apr 19 2024 23:59")}
    waiting={
      <BannerCard title={"Eboard applications are opening soon"} buttons={[]}>
        {" "}
        Stay tuned ...
      </BannerCard>
    }
    >

        <BannerCard
          title={"Mentor Applications are open!!"}
          buttons={hideLearnMore ? buttons.slice(0, 1) : buttons.slice(0, 2)}
        >
          <>
          <p>Have prior web development experience? Mentor Applications are open for Fall 2024. Apply now!
            Priority applications close at{" "}
            <b className="text-oa-blue italic">midnight, Friday, April 19th</b>.
          </p>
          </>
        </BannerCard>

    </TimeGate>
  );
}
