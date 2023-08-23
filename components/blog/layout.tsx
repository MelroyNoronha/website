import RootLayout from "../layout";
import styles from "./layout.module.css";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RootLayout>
      <div className={styles.blogLayout}>{children}</div>
    </RootLayout>
  );
}
