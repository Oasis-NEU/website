import { redirect } from "next/navigation";

export const runtime = "edge";

export async function GET() {
  redirect(
    "https://oasisneu.notion.site/People-600c85abae9d4d4d98090cf2874afc62?pvs=4"
  );
}
