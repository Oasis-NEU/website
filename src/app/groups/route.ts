import { redirect } from "next/navigation";

export const runtime = "edge";

export async function GET() {
  redirect(
    "https://docs.google.com/spreadsheets/d/1CBmmeZO52ThYfYvklrMSZiqP5nEz5VdBcysGTjfzcrI/edit#gid=0"
  );
}

