import BannerCard from "./BannerCard";
import EmailSignup from "./EmailSignup";

interface Props {}

export default function InfoSessionBanner (props: Props) {
   return <BannerCard title={"Join us at our Info Session!"} buttons={[]}>
      <p>Learn more about what Oasis is and <b className="text-inherit no-underline italic" >how you can join our Spring Semester Project Series cohort</b> and our other offerings on <b className="no-underline italic">Sunday, January 14th in Behrakis 010 from 12:00-12:30pm</b>!</p>
      <p className="mt-8 font-bold italic text-oa-blue text-2xl">To stay up to date and receive a reminder, sign up for our Mailing List!</p>
      <EmailSignup purpose="infoSessionBannerS23" />
   </BannerCard>
}