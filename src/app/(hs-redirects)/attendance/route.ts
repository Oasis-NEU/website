import { redirect } from "next/navigation";

export const runtime = "edge";

export async function GET() {
  redirect("https://forms.gle/5hGbzV9CQUDEeWiL6");
}
