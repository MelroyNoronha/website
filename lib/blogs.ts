import fs from "fs";
import path from "path";
import { remark } from "remark";
import remarkHtml from "remark-html";
import remarkRehype from "remark-rehype";
import rehypeExternalLinks from "rehype-external-links";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import matter from "gray-matter";

import { BLOGS_DIRECTORY } from "@/constants";

const getFileContents = (fileName: string) => {
  const fullPath = path.join(BLOGS_DIRECTORY, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  return fileContents;
};

export function getBlogsIndexData() {
  const fileNames = fs.readdirSync(BLOGS_DIRECTORY);

  const allBlogsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    // Use gray-matter to parse the blog metadata section
    const frontMatter = matter(getFileContents(fileName));
    const { title } = frontMatter.data;
    // Combine the data with the id
    return {
      id,
      title,
    };
  });

  // Sort blogs by date
  return allBlogsData.sort((a: any, b: any) => (a.date < b.date ? 1 : -1));
}

export async function getBlogData(id: string): Promise<{
  id: string;
  title: string;
  date: string;
  contentHtml: string;
}> {
  const matterResult = matter(getFileContents(`${id}.md`));
  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(remarkHtml)
    .use(remarkRehype) // so we can use rehype plugins to modify the HTML output
    .use(rehypeExternalLinks, {
      target: "_blank",
      rel: ["noopener", "noreferrer", "nofollow"],
    }) // we want links in the blog to open in a new tab while avoiding XSS attacks
    .use(rehypeSanitize) // protect against XSS attacks
    .use(rehypeStringify)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  const { title, date } = matterResult.data;

  return {
    id,
    contentHtml,
    title,
    date,
  };
}

export function getAllBlogIds() {
  const fileNames = fs.readdirSync(BLOGS_DIRECTORY);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}
