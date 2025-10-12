import { redirect } from "next/navigation";

export const runtime = "edge";

export async function GET() {
  redirect("https://forms.gle/6cwsbZRubNQ3uD7S7");
}
