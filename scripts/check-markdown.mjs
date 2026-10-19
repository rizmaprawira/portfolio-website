import assert from "node:assert/strict";
import { createMarkdownProcessor } from "@astrojs/markdown-remark";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// Internal rendering fixture only. This is never added to a content collection or published.
const processor = await createMarkdownProcessor({
  remarkPlugins: [remarkMath],
  rehypePlugins: [[rehypeKatex, { trust: false, strict: "warn" }]],
});
const sample = [
  "## Rendering check",
  "",
  "Inline math: $x^2$.",
  "",
  "$$",
  "\\sum_{i=1}^{n} x_i",
  "$$",
  "",
  "```python",
  'print("rendering check")',
  "```",
  "",
  '<figure><img src="/example.png" alt="Internal test image" /><figcaption>Internal caption.</figcaption></figure>',
  "",
  "[Reference](https://example.com/)",
].join("\n");
const result = await processor.render(sample);
assert.match(result.code, /class="katex"/);
assert.match(result.code, /katex-display/);
assert.match(result.code, /<pre/);
assert.match(result.code, /<figcaption>Internal caption\.<\/figcaption>/);
assert.match(result.code, /href="https:\/\/example\.com\/"/);
assert.ok(
  result.metadata.headings.some(
    (heading) => heading.slug === "rendering-check",
  ),
);
console.log(
  "Markdown renders inline/display equations, highlighted code, captions, links, and heading IDs.",
);
