import { redirect } from "next/navigation";

export const runtime = "edge";

export async function GET() {
  redirect(
    "https://www.notion.so/oasisneu/HS8-306b365bda5741268f14ac5f31927155?pvs=4"
  );
}
