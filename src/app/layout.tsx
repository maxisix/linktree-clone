import { AnalyticsWrapper } from "@/modules/analytics/analytics.component";
import { Font } from "@/modules/font/font.component";

import "./globals.css";

export const metadata = {
  title: "Linktree Clone",
  description: "A Linktree clone built with NextJs and TailwindCSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Font>{children}</Font>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
