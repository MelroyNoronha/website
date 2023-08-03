import { getBlogData } from "@/lib/blogs";
import Date from "@/components/date";

import styles from "./page.module.css";

interface BlogParams {
  params: { id: string };
}

export default async function Blog({ params }: BlogParams) {
  const blogData = await getBlogData(params.id);

  return (
    <article className={styles.article}>
      <section className={styles.titleSection}>
        <h2>{blogData.title}</h2>
        <Date dateString={blogData.date} />
      </section>

      <div dangerouslySetInnerHTML={{ __html: blogData.contentHtml }} />
    </article>
  );
}
