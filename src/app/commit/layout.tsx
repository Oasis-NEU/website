import { Metadata, ResolvingMetadata } from "next";
import { PropsWithChildren } from "react";

export const metadata = {
  title: "Oasis | Commitment Form",
};

export default function Layout(props: PropsWithChildren) {
  return <>{props.children}</>;
}
