import { Metadata, ResolvingMetadata } from "next";
import { LayoutProps } from "../../../.next/types/app/layout";

export const metadata = {
  title: "Oasis | HS1 Downloads",
};

export default function Layout(props: LayoutProps) {
  return <>{props.children}</>;
}
