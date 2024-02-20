import { Metadata, ResolvingMetadata } from "next";
import { PropsWithChildren } from "react";

export const metadata = {
  title: "Oasis | Project Series",
};

export default function JoinLayout(props: PropsWithChildren) {
  return <>{props.children}</>;
}
