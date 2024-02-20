import { Metadata, ResolvingMetadata } from "next";
import { LayoutProps } from "../../../.next/types/app/layout";

export const metadata = {
  title: "Oasis | Mentor",
};

export default function MentorLayout(props: LayoutProps) {
  return <>{props.children}</>;
}
