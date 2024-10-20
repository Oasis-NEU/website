import { redirect } from "next/navigation";

export const runtime = "edge";

export async function GET() {
  redirect("https://forms.gle/qmS8Rgf6eUcMz5JL7");
}
