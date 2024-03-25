import { redirect } from "next/navigation";

export const runtime = "edge";

export async function GET() {
  redirect(
    "https://www.notion.so/oasisneu/Hack-Session-1-Explorer-Session-1-Spring-2024-9de4b84dca114bca9ec9f7c4f703ab04?pvs=4"
  );
}
