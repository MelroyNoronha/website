import Head from "next/head";

import { getBlogData, getAllBlogIds } from "@/lib/blogs";
import Date from "@/components/Date";
import Layout from "@/components/BlogLayout";

import styles from "./index.module.css";

interface BlogParams {
  params: { id: string };
}

interface BlogData {
  title: string;
  date: string;
  contentHtml: string;
}

export async function getStaticPaths() {
  const paths = getAllBlogIds();
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({ params }: BlogParams) => {
  const blogData = await getBlogData(params.id);

  return { props: { blogData } };
};

export default function Blog({ blogData }: { blogData: BlogData }) {
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
