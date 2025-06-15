import Head from "next/head";

import { URLS } from "@/constants";
import Layout from "@/components/RootLayout";
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
            I'm a creator at heart. <br />
            I stumbled into web and app development as a university student and
            turned it into a career in software engineering.
            <br />
            I've created beautiful software for multiple early and late stage
            startups.
          </p>
          <p className={styles.intro}>
            When I'm not coding, I'm usually listening to music or working on
            music projects like
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
