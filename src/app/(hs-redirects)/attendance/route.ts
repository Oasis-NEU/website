import { redirect } from "next/navigation";

export const runtime = "edge";

export async function GET() {
  redirect(
    "https://docs.google.com/forms/d/e/1FAIpQLSc8iPmO3bJ_i2Pd5gE5vuv-vN1HlJ3NA9vpGyxUnOCnLUgbWA/viewform?usp=sharing"
  );
}
