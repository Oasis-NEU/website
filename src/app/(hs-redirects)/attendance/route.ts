import { redirect } from "next/navigation";

export const runtime = "edge";

export async function GET() {
  redirect("https://forms.gle/k4JmeJS3q3s6SAJH9");
}
