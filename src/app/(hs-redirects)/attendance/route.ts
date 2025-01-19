import { redirect } from "next/navigation";

export const runtime = "edge";

export async function GET() {
    redirect("https://forms.gle/7zbQP6wiRgtkN5mt5");
}
