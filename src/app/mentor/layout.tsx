import { PropsWithChildren } from "react";

export const metadata = {
  title: "Oasis | Mentor",
};

export default function MentorLayout(props: PropsWithChildren) {
  return <>{props.children}</>;
}
