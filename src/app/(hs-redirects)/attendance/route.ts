import { redirect } from "next/navigation";

export const runtime = "edge";

export async function GET() {
  redirect("https://forms.gle/2Pqv5QuxFWd3cK2y7");
}
