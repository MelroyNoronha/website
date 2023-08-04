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
