import styles from "./layout.module.css";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className={styles.blogLayout}>{children}</section>;
}
