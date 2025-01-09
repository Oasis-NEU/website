import { redirect } from "next/navigation";

export const runtime = "edge";

export async function GET() {
    redirect("https://forms.gle/HMwqg2w1pVLjTnyp7");
}
