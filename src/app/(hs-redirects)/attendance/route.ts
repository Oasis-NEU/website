import { redirect } from "next/navigation";

export const runtime = "edge";

export async function GET() {
  redirect("https://forms.gle/LEinKf6rxs3D6ZA99");
}
