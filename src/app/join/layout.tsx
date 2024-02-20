import { Metadata, ResolvingMetadata } from "next";
import { LayoutProps } from "../../../.next/types/app/layout";

export const metadata = {
  title: "Oasis | Project Series",
};

export default function JoinLayout(props: LayoutProps) {
  return <>{props.children}</>;
}
