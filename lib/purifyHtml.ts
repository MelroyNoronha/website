import { JSDOM } from "jsdom";
import DOMPurify from "dompurify";

const window = new JSDOM("").window;

export default (dangerousHtml: string) =>
  DOMPurify(window).sanitize(dangerousHtml);
