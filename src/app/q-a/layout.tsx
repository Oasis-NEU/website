import { PropsWithChildren } from "react";


export const metadata = {
  title: "Oasis | Q&A",
};

export default function Layout(props: PropsWithChildren) {
  return <>{props.children}</>;
}
