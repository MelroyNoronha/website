import Link from "next/link";

import { getBlogsIndexData } from "@/lib/blogs";

import { URLS } from "@/constants";
import styles from "./page.module.css";

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
