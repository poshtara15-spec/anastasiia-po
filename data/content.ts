/** All copy for the site lives here. Text in [square brackets] is a placeholder still to fill in. */

export const LINKS = {
  email: "poshtar.a15@gmail.com",
  telegram: "https://t.me/nastia_a15",
  linkedin: "https://www.linkedin.com/in/anastasiia-aleksiichuk-09a139225/",
  behance: "https://www.behance.net/8f1a613f",
  recommendations: "https://www.linkedin.com/in/anastasiia-aleksiichuk-09a139225/details/recommendations/?detailScreenTabIndex=0",
  cv: "https://drive.google.com/file/d/1lB_7AaJrg_ReTTdmcuzaJe-cEg3v_JPu/view",
  /** The product-design portfolio, where the full design-side cases live. */
  designPortfolio: "https://anastasiiaaportfolio.vercel.app",
};

export const HERO = {
  hello: "Hello, I’m Anastasiia",
  title: "Product Owner for B2B SaaS & E-commerce",
  thesis: "I’m a Product Owner with a designer’s hands.",
  lede: "I set the roadmap and OKRs, prioritise the work — and turn ideas into working prototypes fast, so we test them before they’re built.",
  currently: "building Gotta, my own EdTech product. Background in product design and sales; AI is part of my everyday workflow.",
};

export type Featured = {
  id: string; title: string; tags: string[]; href: string;
  problem: string; role: string; decision: string;
  outcome: { value: string; label: string };
};

export const FEATURED: Featured = {
  id: "onboarding",
  title: "Onboarding + Monetisation · LLM API",
  tags: ["B2B SaaS", "Activation", "Monetisation"],
  href: "/work/onboarding",
  problem: "People used the product on free credits, and almost nobody paid.",
  role: "Owned the onboarding redesign — discovery, hypothesis, metrics and rollout.",
  decision: "Rebuilt onboarding around setting up the organisation; the free $10 became a welcome-page bonus.",
  outcome: { value: "×6.6", label: "sign-up → payment in the first 24 hours" },
};

export const WORK: { n: string; title: string; tags: string[]; href: string; external?: boolean }[] = [
  { n: "02", title: "Gotta — spoken English as it really sounds", tags: ["Own product", "EdTech", "0-to-1"], href: "/work/gotta" },
  { n: "03", title: "Carma — B2B marketplace for auto parts", tags: ["0-to-1", "Roadmap", "Backlog"], href: "/work/carma" },
  { n: "04", title: "Atomic-shop — one homepage for four regions", tags: ["E-commerce", "Stakeholders"], href: "/work/atomic-shop" },
  { n: "05", title: "MUSÉ Flora — size guide that lifted checkout clicks", tags: ["E-commerce", "Conversion", "JTBD"], href: "/work/muse" },];

export const PILLARS = [
  {
    name: "Discovery & strategy",
    title: "Build the right thing first",
    text: "Interviews, usability tests and the job customers hire the product for — before anything reaches the backlog.",
    skills: ["JTBD", "User Story Mapping", "Customer interviews", "Usability testing"],
  },
  {
    name: "Prioritisation & roadmap",
    title: "Every item earns its place",
    text: "A roadmap tied to business goals, and a backlog ranked by impact — not by who asked loudest.",
    skills: ["RICE", "ICE", "Kano", "Roadmap", "Backlog"],
  },
  {
    name: "Goals & metrics",
    title: "If it isn’t measured, it isn’t done",
    text: "OKRs for the quarter, a North Star for the product, and cohorts to check what really changed.",
    skills: ["OKR", "North Star", "AARRR", "Cohort analysis"],
  },
  {
    name: "Delivery & team",
    title: "Clear stories, steady flow",
    text: "Stories with acceptance criteria, a Kanban flow, and alignment across product, engineering, marketing and leadership.",
    skills: ["Kanban", "User stories", "Acceptance criteria", "Stakeholder management"],
  },
];

export const RESULTS = [
  { value: "×6.6", label: "sign-up → payment", src: "LLM API onboarding" },
  { value: "+33%", label: "checkout clicks", src: "MUSÉ Flora size guide" },
  { value: "1 week", label: "from idea to a live product", src: "Gotta" },
  { value: "10+", label: "digital products launched", src: "B2B SaaS · E-commerce · EdTech" },];

/** The AI-native workflow; `ai` is what does the heavy lifting at each step. */
export const HANDS = [
  { step: "Frame the problem", text: "Interviews, sales calls and analytics synthesised into one problem — and the metric it moves.", ai: "Claude · Clarity · Grafana" },
  { step: "Write the story", text: "User stories and acceptance criteria drafted with AI, sharpened by me.", ai: "Claude · Jira" },
  { step: "Prototype in code", text: "A working prototype built on the real design system — in hours, not a sprint.", ai: "Claude Code · Figma MCP · Figma Make" },
  { step: "Test with users", text: "People click through the real thing; I fix where they stumble the same day.", ai: "Maze · Clarity" },
  { step: "Hand it to the team", text: "A validated item with code the team can build on — less guessing in the sprint.", ai: "Claude Code → Jira" },
];

export type Job = { dates: string; role: string; org: string; meta: string; intro?: string; points: string[]; tags: string[] };

export const JOURNEY: Job[] = [
  {
    dates: "Oct 2026 — Present", role: "Founder & Product Owner", org: "Gotta", meta: "Own product · Remote",
    intro: "A catalog of everyday English phrases that shows how they really sound — in songs and live speech.",
    points: [
      "Defined the problem and the job to be done for learners of spoken English.",
      "Scoped the MVP from the JTBD and left retention features for later, on purpose.",
      "Built and launched in a week with Claude Code — Next.js, Supabase, Vercel.",
      "Designed for legal and SEO constraints from day one.",
    ],
    tags: ["0-to-1", "JTBD", "MVP scope", "Roadmap"],
  },
  {
    dates: "Jul 2026 — Present", role: "Product Designer", org: "LLM API · Spendbase", meta: "B2B SaaS · Remote",
    points: [
      "Redesigned onboarding around organisation setup — ×6.6 sign-up → payment in the first 24 hours.",
      "Measured the change with equal-window cohorts, and named the activation trade-off openly.",
      "Refactored the AI-built product into a design system AI agents can follow.",
    ],
    tags: ["Activation", "Monetisation", "AARRR", "Cohort analysis"],
  },
  {
    dates: "Jun 2024 — Jun 2026", role: "Product Designer → acting Product Owner", org: "Carma", meta: "B2B marketplace · GCC · Remote",
    intro: "A marketplace connecting auto-parts distributors with workshops. The only designer from zero to launch.",
    points: [
      "Owned the roadmap and set OKRs; prioritised the backlog with the PO and BA.",
      "Ran discovery: competitive analysis and interviews with workshops and suppliers.",
      "Turned sales-team feedback into features and backlog items.",
      "Mapped every role’s workflows — buyer, supplier, admin — with User Story Mapping.",    ],
    tags: ["0-to-1", "Roadmap", "OKR", "Backlog", "Kanban"],
  },
  {
    dates: "Aug 2025 — Feb 2026", role: "Mentor", org: "Designly School", meta: "UX/UI Design: START",
    points: [
      "Mentored 21 students — 736 video reviews of their work: what works, what to fix and why.",
      "Gave students regular feedback on their work and progress.",
      "Ran workshops and brainstorming sessions with students.",
    ],
    tags: ["Mentoring", "Feedback", "Workshops"],
  },
  {
    dates: "2023", role: "UX/UI Designer", org: "Subsocial", meta: "Startup · Remote",
    points: [
      "Designed user flows for core scenarios of a Web3 social product — onboarding, posting and interacting with content.",
      "Turned flows into wireframes and interactive prototypes in Figma.",
      "Designed UI screens and reusable components for web and mobile.",
      "Tested prototypes with users and iterated on what slowed them down.",
      "Worked with developers and the product team to ship designs as built.",
      "Spoke on stage at Web3 Summit in Lisbon about why UX matters in Web3 products.",
    ],
    tags: ["User flows", "Prototyping", "Web3", "Public speaking"],
  },
  {
    dates: "2017 — 2022", role: "Regional Sales Manager · Pharmaceuticals", org: "Sandoz", meta: "Chernivtsi region, Ukraine",
    intro: "Owned sales of medicines in the Chernivtsi region end to end — the first place I learned what customers actually pay for.",
    points: [
      "Set sales goals with SMART and tracked plan vs actual every month.",
      "Segmented clients by potential (ABC) and planned visits around it — my first prioritisation framework.",
      "Used SPIN to uncover what doctors and pharmacists really needed — the same questions I now ask in customer interviews.",
      "Built the brand in the region — from first awareness to doctors and pharmacies choosing it.",
      "Worked with key opinion leaders (KOLs); organised events and presentations for top-level doctors, pharmacies and clinics.",
      "Worked directly with clients and reported to top management.",    ],
    tags: ["SMART", "ABC segmentation", "SPIN", "KOL management", "Brand building"],
  },
];

export const TOOLKIT = [
  { group: "Product & delivery", items: ["Jira", "Notion", "Miro", "Confluence"] },
  { group: "Analytics", items: ["Clarity", "Grafana", "Google Analytics", "Shopify Analytics", "Amplitude", "Mixpanel", "Hotjar"] },
  { group: "Testing & experiments", items: ["Maze"] },
  { group: "Research & discovery", items: ["Google Forms", "Typeform", "Calendly", "Similarweb", "Ahrefs"] },
  { group: "Design & prototyping", items: ["Figma", "Figma Make", "Claude Code"] },
];

/** Recommendations from LinkedIn, quoted as written. ==text== is highlighted. */
export const RECOMMENDATIONS = [
  {
    text: "I had the pleasure of working with this designer on the Carma.Team project, where she was responsible for both desktop and mobile application design. What ==I especially appreciated was her strong sense of ownership and genuine interest in the final result.== She was always ==proactive, detail-oriented, and fully engaged in the process,== consistently going beyond expectations.",
    name: "Alex Maznyi", role: "CEO & Founder, CODERA", relation: "Managed Anastasiia directly · Carma",
  },
  {
    text: "It was a pleasure to work with Anastasiia. During short period she ==jumped really quickly in business domain==, found proper competitors, reviewed whole design of the project. Before, the design was fully vibe-coded, then ==Anastasiia gave him a life!== I would like to recommend her as Product Designer, she learns fast and could bring a lot!",
    name: "Andrii Prokhorovych", role: "Development Team Lead", relation: "Worked with Anastasiia in different teams",
  },
];
