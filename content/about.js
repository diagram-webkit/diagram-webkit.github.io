import { PRIORITIES } from "../config/tags.js";
import { CSS_TAGS } from "./css.js";

// Appended to the standalone About: the tags this site understands.
const rows = (items) => items.map(({ tag, label, description }) => `<li><code>${tag}</code> ${label ? `${label} - ` : ""}${description}</li>`).join("");

export const about = `<h4>Ready-made tags</h4>
<p>Put these in a shape's <code>tags</code> property in draw.io (Edit Data, <code>Ctrl+M</code>), separated by spaces.</p>
<ul class="about-list">
${rows(PRIORITIES)}
<li><code>level-1</code>, <code>level-2</code>, … shown from that detail level on; without one, always shown</li>
<li><code>Network</code>, <code>Network.Ingress</code>, … topics; a dot nests one under the other (write the parent too)</li>
${rows(CSS_TAGS)}
</ul>
<p>Add <code>help</code> (first line is the title) and a <code>slug</code> (for pins and links) to explain a shape.</p>`;
