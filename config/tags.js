// Tags that work in any diagram opened here. Priorities: the lowest pri-N on
// a cell wins, then info. Everything else is a topic; "." nests (Network.Ingress).

const badge = (background, color, border) => ({
  style: { background, color, borderColor: border, borderWidth: "2px", borderStyle: "solid", fontWeight: "600" },
  panelStyle: { borderColor: border, borderWidth: "2px", boxShadow: `inset 0 0 0 1px ${border}55` },
});

export const PRIORITIES = [
  { tag: "pri-1", label: "Critical", description: "Act now", colors: ["#FECACA", "#7F1D1D", "#B91C1C"] },
  { tag: "pri-2", label: "High", description: "Act soon", colors: ["#FED7AA", "#7C2D12", "#C2410C"] },
  { tag: "pri-3", label: "Medium", description: "Plan it", colors: ["#FEF08A", "#713F12", "#A16207"] },
  { tag: "pri-4", label: "Low", description: "When there is time", colors: ["#D9F99D", "#365314", "#4D7C0F"] },
  { tag: "pri-5", label: "Minor", description: "Good to know", colors: ["#E5E7EB", "#374151", "#6B7280"] },
  { tag: "info", label: "Info", description: "Background, no action", colors: ["#DBEAFE", "#1E3A8A", "#1D4ED8"] },
];

export const groups = [
  { id: "priority", label: "Priority", order: 1, layout: "flat" },
  { id: "general", label: "Topics", order: 10, layout: "tree" },
];

export const meta = Object.fromEntries(
  PRIORITIES.map(({ tag, label, description, colors }, index) => [
    tag,
    { label, description, group: "priority", order: index + 1, ...badge(...colors) },
  ]),
);
