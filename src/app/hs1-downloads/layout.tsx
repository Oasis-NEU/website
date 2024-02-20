import { Metadata, ResolvingMetadata } from "next";
import { PropsWithChildren } from "react";

export const metadata = {
  title: "Oasis | HS1 Downloads",
};

export default function Layout(props: PropsWithChildren) {
  return <>{props.children}</>;
}
