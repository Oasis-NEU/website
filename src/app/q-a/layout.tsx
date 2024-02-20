import { Metadata, ResolvingMetadata } from "next";
import { LayoutProps } from "../../../.next/types/app/layout";

export const metadata = {
  title: "Oasis | Q&A",
};

export default function Layout(props: LayoutProps) {
  return <>{props.children}</>;
}
