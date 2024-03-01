import { redirect } from "next/navigation";

export const runtime = "edge";

export async function GET() {
  redirect(
    "https://join.slack.com/t/oasisneu/shared_invite/zt-1mhgoa36a-nzrXvij7Q53Xr0ag5EeTyg"
  );
}
