import Head from "next/head";

import { getBlogData, getAllPostIds } from "@/lib/blogs";
import Date from "@/components/date";
import Layout from "@/components/blog/layout";

import styles from "./id.module.css";

interface BlogParams {
  params: { id: string };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({ params }: BlogParams) => {
  const blogData = await getBlogData(params.id);

  return { props: { blogData } };
};

export default function Blog({
  blogData,
}: {
  blogData: { title: string; date: string; contentHtml: string };
}) {
  const { title, date, contentHtml } = blogData;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <header className={styles.titleSection}>
          <h1>{title}</h1>
          <Date dateString={date} />
        </header>
        <hr />
        <section className={styles.content}>
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </section>
      </main>
    </Layout>
  );
}
