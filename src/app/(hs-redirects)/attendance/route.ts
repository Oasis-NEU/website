import { redirect } from "next/navigation";

export const runtime = "edge";

export async function GET() {
  redirect("https://forms.gle/2QzsrxGF1n4Pw1bU6");
}
