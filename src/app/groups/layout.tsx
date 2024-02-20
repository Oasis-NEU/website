import { Metadata, ResolvingMetadata } from "next";
import { PropsWithChildren } from "react";

export const metadata = {
  title: "Oasis | Groups",
};

export default function Layout(props: PropsWithChildren) {
  return <>{props.children}</>;
}
