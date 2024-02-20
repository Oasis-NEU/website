import { PropsWithChildren } from "react";

export const metadata = {
  title: "Oasis | People",
};

export default function Layout(props: PropsWithChildren) {
  return <>{props.children}</>;
}
