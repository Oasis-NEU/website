import { redirect } from "next/navigation";

export const runtime = "edge";

export async function GET() {
  redirect(
    "https://oasisneu.notion.site/Oasis-Resources-Page-86e288dffdbd431faf13d9fa53e1ac4a"
  );
}
