import "./layout.module.css";
import { Glory } from "next/font/google";

const inter = Glory({ subsets: ["latin"], weight: "400" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div lang="en" className={inter.className}>
      {children}
    </div>
  );
}
