// The diagram-webkit standalone app with ready-made tags: the reader opens any
// draw.io SVG, and the tags below work without a definition of their own.
import { standaloneDefinition } from "diagram-webkit";
import { about } from "./content/about.js";
import css from "./content/css.js";
import page from "./content/page.js";
import { groups, meta } from "./config/tags.js";

const base = standaloneDefinition();

export default base.extend({
  requires: "^0.1.0",
  tags: { groups, meta },
  camera: { defaultAlign: ["center", "center"] },
  baseState: { camera: { fit: true } }, // the whole diagram first
  content: {
    page,
    about: base.content.about + about,
    css,
  },
});
