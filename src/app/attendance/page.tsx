import { redirect } from "next/navigation";

export default function AttendanceRedirect() {
  redirect(
    "https://docs.google.com/forms/d/e/1FAIpQLSdQwI4KJfbHhrCko54X2e7QdUx9Ne6EGAlHZ-NkHR5rVS8wQg/viewform"
  );
}
