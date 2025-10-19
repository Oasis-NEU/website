import { redirect } from "next/navigation";

export const runtime = "edge";

export async function GET() {
  redirect("https://forms.gle/GLGVJGTqQqDC2o1T6");
}
