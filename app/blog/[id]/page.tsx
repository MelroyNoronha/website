import { Metadata } from "next";

import { getBlogData } from "@/lib/blogs";
import Date from "@/components/date";

import styles from "./page.module.css";

interface GenerateMetadataProps {
  params: { id: string };
}

interface BlogParams {
  params: { id: string };
}

export async function generateMetadata({
  params,
}: GenerateMetadataProps): Promise<Metadata> {
  const blogData = await getBlogData(params.id);

  return {
    title: blogData.title,
  };
}

export default async function Blog({ params }: BlogParams) {
  const blogData = await getBlogData(params.id);

  return (
    <main>
      <section className={styles.titleSection}>
        <h2>{blogData.title}</h2>
        <Date dateString={blogData.date} />
      </section>
      <hr />
      <section className={styles.content}>
        <article dangerouslySetInnerHTML={{ __html: blogData.contentHtml }} />
      </section>
    </main>
  );
}
