import { redirect } from "next/navigation";

export const runtime = "edge";

export async function GET() {
  redirect(
    "https://www.notion.so/oasisneu/Resources-4e33d41a70ff420ba46f4e55ccb6e719?pvs=4#1a6a7c2ecf0d4023923a36c09de68869"
  );
}
