import { Metadata, ResolvingMetadata } from "next";
import { PropsWithChildren } from "react";

export const metadata = {
  title: "Oasis | Info Session, Spring 2024",
};

export default function Layout(props: PropsWithChildren) {
  return <>{props.children}</>;
}
