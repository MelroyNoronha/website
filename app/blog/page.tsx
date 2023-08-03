import Link from "next/link";
import { Metadata } from "next";

import { getBlogsIndexData } from "@/lib/blogs";

import { URLS } from "@/constants";
import styles from "./page.module.css";

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

export default function BlogsIndex() {
  const allBlogsIndexData = getBlogsIndexData();

  return (
    <ul className={styles.blogIndex}>
      {allBlogsIndexData.map(({ id, title }: BlogIndexItem) => (
        <BlogIndexItem id={id} title={title} key={id} />
      ))}
    </ul>
  );
}
