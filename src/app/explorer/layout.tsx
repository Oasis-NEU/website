import { PropsWithChildren } from "react";

export const metadata = {
  title: "Oasis | Explorer Series",
};

export default function Layout(props: PropsWithChildren) {
  return <>{props.children}</>;
}
