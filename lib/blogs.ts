import fs from "fs";
import path from "path";
import { remark } from "remark";
import remarkHtml from "remark-html";
import matter from "gray-matter";

import { BLOGS_DIRECTORY } from "@/constants";
import purifyHTML from "@/lib/purifyHtml";

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
    .use(remarkHtml, { sanitize: false }) // we will sanitize using purifyHTML later
    .process(matterResult.content);

  const contentHtml = purifyHTML(processedContent.toString());

  const { title, date } = matterResult.data;

  return {
    id,
    contentHtml,
    title,
    date,
  };
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(BLOGS_DIRECTORY);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}
