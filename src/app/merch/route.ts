import { redirect } from "next/navigation";

export const runtime = "edge";

export async function GET() {
  redirect("https://forms.gle/5k3kiR2Zvtw7Q1zM7");
}
