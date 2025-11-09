import { redirect } from "next/navigation";

export const runtime = "edge";

export async function GET() {
  redirect(
    "https://docs.google.com/forms/d/e/1FAIpQLSfbmQpSNGahjH6S0oi298PxC6zGtjOnGlj43Ru24qXQricAzA/viewform?usp=header"
  );
}
