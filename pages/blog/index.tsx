import Link from "next/link";
import Head from "next/head";

import { getBlogsIndexData } from "@/lib/blogs";
import Layout from "@/components/blog/layout";
import { URLS } from "@/constants";

import styles from "./index.module.css";

interface BlogIndexItem {
  id: string;
  title: string;
}

function BlogIndexItem({ id, title }: BlogIndexItem) {
  return (
    <li className={styles.blogIndexListItem}>
      <Link href={`${URLS.blog}/${id}`} className={styles.blogIndexLink}>
        {title}
      </Link>
    </li>
  );
}

export const getStaticProps = async () => {
  const allBlogsIndexData = getBlogsIndexData();
  return { props: { allBlogsIndexData } };
};

export default function BlogsIndex({
  allBlogsIndexData,
}: {
  allBlogsIndexData: [];
}) {
  return (
    <Layout>
      <Head>
        <title>Melroy Noronha's Blogs</title>
      </Head>
      <ul className={styles.blogIndex}>
        {allBlogsIndexData.map(({ id, title }: BlogIndexItem) => (
          <BlogIndexItem id={id} title={title} key={id} />
        ))}
      </ul>
    </Layout>
  );
}
