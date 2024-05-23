import { Metadata, ResolvingMetadata } from "next";
import { PropsWithChildren } from "react";

export const metadata = {
  title: "Oasis | About",
};

export default function Layout(props: PropsWithChildren) {
  return <>{props.children}</>;
}
 