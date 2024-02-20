import { PropsWithChildren } from "react";

export const metadata = {
  title: "Oasis | Resources",
};

export default function Layout(props: PropsWithChildren) {
  return <>{props.children}</>;
}
