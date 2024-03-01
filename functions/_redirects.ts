import { NextResponse } from "next/server";

export const handler = async (event: any) => {
  if (event.httpMethod === "GET" && event.path !== "/") {
    return new Response("Redirecting to /404...", {
      status: 302, // Found (redirect)
      headers: {
        Location: "/not-found", // Redirect to your custom 404 page route
      },
    });
  }

  return NextResponse.next();
};
