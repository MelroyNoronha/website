import Link from "next/link";
import { Metadata } from "next";

import { URLS } from "@/constants";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Melroy Noronha",
};

export default function Home() {
  const bottomLinkClassNames = `${styles.link} ${styles.xLargeFont}`;

  return (
    <main className={styles.main}>
      <h1>Melroy Noronha</h1>

      <section>
        <p className={styles.intro}>
          I'm a creator at heart. <br />I stumbled into web and app development
          as a university student and turned it into a career.
        </p>
        <p className={styles.intro}>
          I have a deep passion for music and have worked on projects like
          <br />
          <Link href={URLS.tronicDisease} target="_blank">
            tronicDisease
          </Link>
          &nbsp;and&nbsp;
          <Link href={URLS.melAndTheDragon} target="_blank">
            Mel and the Dragon
          </Link>
          .
        </p>
      </section>

      <section className={styles.linksContainer}>
        <Link className={styles.xLargeFont} href={URLS.github} target="_blank">
          Github
        </Link>
        <Link className={styles.xLargeFont} href={URLS.blog}>
          Blog
        </Link>
        <Link
          className={styles.xLargeFont}
          href={URLS.linkedIn}
          target="_blank"
        >
          LinkedIn
        </Link>
      </section>
    </main>
  );
}
