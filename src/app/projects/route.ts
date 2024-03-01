import { redirect } from "next/navigation";

export const runtime = "edge";

export async function GET() {
  redirect(
    "https://oasisneu.notion.site/f9c8a070d398482ba7a45e42c7982e6a?v=309fabb92ec54fe8bdfcc37523d0c6da&pvs=4"
  );
}
