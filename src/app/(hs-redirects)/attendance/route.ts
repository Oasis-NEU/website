import { redirect } from "next/navigation";

export const runtime = "edge";

export async function GET() {
  redirect(
    "https://forms.gle/y2fNukNM9PnzQ4zWA"
  );
}
