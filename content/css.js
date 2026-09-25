// css-<name> tags add the class custom-<name> to a cell. These are ready to use.
// Children are styled, not the cell itself: the cell's own opacity and filter
// belong to the engine (fading, dimming).

export const CSS_TAGS = [
  { tag: "css-dashed", description: "dashed outline" },
  { tag: "css-thick", description: "thicker lines" },
  { tag: "css-faded", description: "half transparent" },
  { tag: "css-muted", description: "grey" },
  { tag: "css-glow", description: "blue glow" },
];

const SHAPES = ":is(rect, ellipse, path, polygon, polyline, line)";

export default `
/* Around the diagram: the page colour instead of black. */
.dwk-root.diagram-fit-all,
.dwk-root .dwk-image-wrapper,
.dwk-root .dwk-main-image { background: var(--page-bg); }
/* The footer pill sits on that light page colour, not on the diagram. */
.dwk-root:not([data-theme="dark"]) .footer-github { background: rgba(15, 23, 42, 0.78); }
.dwk-root:not([data-theme="dark"]) .footer-github a { color: #bae6fd; }

.dwk-root .dwk-main-image .custom-dashed ${SHAPES} { stroke-dasharray: 6 4; }
.dwk-root .dwk-main-image .custom-thick ${SHAPES} { stroke-width: 3px; }
.dwk-root .dwk-main-image .custom-faded > * { opacity: 0.45; }
.dwk-root .dwk-main-image .custom-muted > * { filter: grayscale(1); }
.dwk-root .dwk-main-image .custom-glow > * { filter: drop-shadow(0 0 4px rgba(37, 99, 235, 0.85)); }
`;
