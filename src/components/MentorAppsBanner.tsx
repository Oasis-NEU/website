import BannerCard from "./BannerCard";

export default function MentorAppsBanner({
  hideLearnMore,
}: {
  hideLearnMore?: boolean;
}) {
  const buttons = [
    {
      buttonTitle: "Click Here to Apply!",
      href: "https://forms.gle/s2WDFkG3QEtKCP45A",
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
        Mentor Applications are shortly re-opened for the Spring semester. Apply now!
        Applications close again at{" "}
        <b className="text-oa-blue italic">midnight, Monday, January 15th</b>.
      </>
    </BannerCard>
  );
}
