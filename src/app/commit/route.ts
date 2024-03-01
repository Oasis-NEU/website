import { redirect } from "next/navigation";

export const runtime = "edge";

export async function GET() {
  redirect(
    "https://docs.google.com/forms/d/e/1FAIpQLSc6Y5rDnch2x-tjHSH2ZZaAfYl4hqrg1KDDBnotHx_tOsq5mw/viewform?usp=sf_link"
  );
}
