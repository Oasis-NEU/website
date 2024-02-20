import { PropsWithChildren } from "react";

export const metadata = {
  title: "Oasis | Slack",
};

export default function Layout(props: PropsWithChildren) {
  return <>{props.children}</>;
}
