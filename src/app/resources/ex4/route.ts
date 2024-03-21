import { redirect } from "next/navigation";

export const runtime = "edge";

export async function GET() {
  redirect(
    "https://www.notion.so/oasisneu/Explorer-Session-4-1627d53185944ad0828dae3d5931c241?pvs=4"
  );
}
