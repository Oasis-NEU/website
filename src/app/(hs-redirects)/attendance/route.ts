import { redirect } from "next/navigation";

export const runtime = "edge";

export async function GET() {
  redirect(
    "https://docs.google.com/forms/d/e/1FAIpQLSdQCayl0Y2ylpuYRpyKCAfmWGRIbSV6qyrvVhAZGYYBDtP4DA/viewform?usp=header"
  );
}
