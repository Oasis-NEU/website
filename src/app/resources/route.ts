import { redirect } from "next/navigation";

export const runtime = "edge";

export async function GET() {
  redirect(
    "https://oasisneu.notion.site/Resources-4e33d41a70ff420ba46f4e55ccb6e719?pvs=4"
  );
}
