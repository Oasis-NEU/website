import { redirect } from "next/navigation";

export const runtime = "edge";

export async function GET() {
  redirect("https://forms.gle/NWzk3ULkX2U3P2bv7");
}
