import { Metadata } from "next";

import { getBlogData, getAllPostIds } from "@/lib/blogs";
import Date from "@/components/date";

import styles from "./id.module.css";

interface GenerateMetadataProps {
  params: { id: string };
}

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

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const blogData = await getBlogData(params.id);

  return { props: { blogData } };
};

export default function Blog({
  blogData,
}: {
  blogData: { title: string; date: string; contentHtml: string };
}) {
  return (
    <main>
      <header className={styles.titleSection}>
        <h1>{blogData.title}</h1>
        <Date dateString={blogData.date} />
      </header>
      <hr />
      <section className={styles.content}>
        <div dangerouslySetInnerHTML={{ __html: blogData.contentHtml }} />
      </section>
    </main>
  );
}
