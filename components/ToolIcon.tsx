import {
  siCalendly, siClaude, siConfluence,siGoogleanalytics, siGoogleforms, siGrafana, siHotjar,
  siJira, siMaze, siMiro, siMixpanel, siNotion, siShopify, siSimilarweb, siTypeform,
} from "simple-icons";

type SimpleIcon = { path: string; hex: string };

/** Brand marks: Simple Icons where available, otherwise the official icon from the vendor's own site. */
const ICONS: Record<string, SimpleIcon | { src: string }> = {
  Jira: siJira, Notion: siNotion, Miro: siMiro, Confluence: siConfluence,
  Grafana: siGrafana, "Google Analytics": siGoogleanalytics, "Shopify Analytics": siShopify,
  Mixpanel: siMixpanel, Hotjar: siHotjar, Maze: siMaze,
  "Google Forms": siGoogleforms, Typeform: siTypeform, Calendly: siCalendly, Similarweb: siSimilarweb,
  // Simple Icons only has the one-colour Figma mark; the official logo is multi-colour.
  Figma: { src: "/logos/figma.svg" }, "Figma Make": { src: "/logos/figma.svg" }, "Claude Code": siClaude,
  Clarity: { src: "/logos/clarity.png" },
  Amplitude: { src: "/logos/amplitude.png" },
  Ahrefs: { src: "/logos/ahrefs.svg" },
};

export function ToolIcon({ name }: { name: string }) {
  const icon = ICONS[name];
  if (!icon) return null;
  if ("src" in icon) return <img className="ti" src={icon.src} alt="" aria-hidden="true" />;
  return (
    <svg className="ti" viewBox="0 0 24 24" aria-hidden="true" fill={`#${icon.hex}`}>
      <path d={icon.path} />
    </svg>
  );
}
