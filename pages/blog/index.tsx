import Link from "next/link";
import { Metadata } from "next";

import { getBlogsIndexData } from "@/lib/blogs";

import { URLS } from "@/constants";
import styles from "./index.module.css";

export const metadata: Metadata = {
  title: "Melroy Noronha's Blogs",
};

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
    <ul className={styles.blogIndex}>
      {allBlogsIndexData.map(({ id, title }: BlogIndexItem) => (
        <BlogIndexItem id={id} title={title} key={id} />
      ))}
    </ul>
  );
}
