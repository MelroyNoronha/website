import Head from "next/head";

import { URLS } from "@/constants";
import Layout from "@/components/layout";
import StyledLink from "@/components/StyledLink";

import styles from "./index.module.css";

export default function Page() {
  return (
    <Layout>
      <Head>
        <title>Melroy Noronha</title>
      </Head>
      <main className={styles.main}>
        <h1>Melroy Noronha</h1>

        <section>
          <p className={styles.intro}>
            I'm a creator at heart. <br />I stumbled into web and app
            development as a university student and turned it into a career.
          </p>
          <p className={styles.intro}>
            I have a deep passion for music and have worked on projects like
            <br />
            <StyledLink href={URLS.tronicDisease} target="_blank">
              tronicDisease
            </StyledLink>
            &nbsp;and&nbsp;
            <StyledLink href={URLS.melAndTheDragon} target="_blank">
              Mel and the Dragon
            </StyledLink>
            .
          </p>
        </section>

        <section className={styles.linksContainer}>
          <StyledLink
            className={styles.xLargeFont}
            href={URLS.github}
            target="_blank"
          >
            Github
          </StyledLink>
          <StyledLink className={styles.xLargeFont} href={URLS.blog}>
            Blog
          </StyledLink>
          <StyledLink
            className={styles.xLargeFont}
            href={URLS.linkedIn}
            target="_blank"
          >
            LinkedIn
          </StyledLink>
        </section>
      </main>
    </Layout>
  );
}
