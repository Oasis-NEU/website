import { redirect } from "next/navigation";

export const runtime = "edge";

export async function GET() {
  redirect("https://github.com/Oasis-NEU/dog-generator");
}
