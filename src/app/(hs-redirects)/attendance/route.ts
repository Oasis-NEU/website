import { redirect } from "next/navigation";

export const runtime = "edge";

export async function GET() {
  redirect("https://forms.gle/eMFwuwp9HR7XmhYP8");
}
