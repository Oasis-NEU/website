import { PropsWithChildren } from "react";


export const metadata = {
  title: "Oasis | Projects",
};

export default function Layout(props: PropsWithChildren) {
  return <>{props.children}</>;
}
