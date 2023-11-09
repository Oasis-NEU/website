import BannerCard from "./BannerCard";

export default function MentorAppsBanner({
  hideLearnMore,
}: {
  hideLearnMore?: boolean;
}) {
  const buttons = [
    {
      buttonTitle: "Click Here to Apply!",
      href: "https://docs.google.com/forms/d/e/1FAIpQLScRNM6L61jOBsWZZLRXU75EVRcrYAjEFxN-NC6wIHqdwhSW2Q/viewform?usp=sf_link",
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
        Apply now for our mentor role for the upcoming Spring 2024 semester!
        Applications close{" "}
        <b className="text-oa-blue italic">Monday, December 18th</b>.
      </>
    </BannerCard>
  );
}
