import { Glory } from "next/font/google";

import ToggleTheme from "@/components/ToggleTheme";

const inter = Glory({ subsets: ["latin"], weight: "400" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div lang="en" className={inter.className}>
      <ToggleTheme />
      {children}
    </div>
  );
}
