import BannerCard from "./BannerCard";

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
    <BannerCard
      title={"Mentor Applications are open!!"}
      buttons={hideLearnMore ? buttons.slice(0, 1) : buttons.slice(0, 2)}
    >
      <>
        Have prior web development experience? Mentor Applications are open for Fall 2024. Apply now!
        Priority applications close at{" "}
        <b className="text-oa-blue italic">midnight, Friday, April 19th</b>.
      </>
    </BannerCard>
  );
}
