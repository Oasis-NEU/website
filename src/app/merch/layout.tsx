import { PropsWithChildren } from "react";

export const metadata = {
  title: "Oasis | Merch Order",
};

export default function MerchLayout(props: PropsWithChildren) {
  return <>{props.children}</>;
}
