import { redirect } from "next/navigation";

export const runtime = "edge";

export async function GET() {
  redirect(
    "https://docs.google.com/forms/d/e/1FAIpQLSddD295Wr4pvrqMMB6WcukOpBFXPVo3egTGvtwBi3R3U8CkJg/viewform?usp=header"
  );
}
