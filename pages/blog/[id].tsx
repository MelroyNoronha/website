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
  return (
    <Layout>
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
    </Layout>
  );
}
