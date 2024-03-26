import { redirect } from "next/navigation";

export const runtime = "edge";

export async function GET() {
  redirect(
    "https://www.notion.so/oasisneu/Hack-Session-5-Spring-2024-7549facb29a947789503f0de61387257?pvs=4"
  );
}
