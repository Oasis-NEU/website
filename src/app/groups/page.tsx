import { redirect } from "next/navigation";

export default function GroupsRedirect() {
  redirect(
    "https://docs.google.com/spreadsheets/d/1CBmmeZO52ThYfYvklrMSZiqP5nEz5VdBcysGTjfzcrI/edit#gid=0"
  );
}
