import { Metadata, ResolvingMetadata } from "next";
import { PropsWithChildren } from "react";

export const metadata = {
  title: "Oasis | Attendance",
};

export default function Layout(props: PropsWithChildren) {
  return <>{props.children}</>;
}
