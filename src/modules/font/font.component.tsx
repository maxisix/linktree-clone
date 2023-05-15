import { FC, PropsWithChildren } from "react";
import { Work_Sans } from "next/font/google";
import clsx from "clsx";

const fontSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--work-sans",
});

export const Font: FC<PropsWithChildren> = ({ children }) => {
  return <div className={clsx("font-sans", fontSans.variable)}>{children}</div>;
};
