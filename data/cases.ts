/**
 * Case studies, each told as Problem · Role · Decision · Outcome.
 * **text** is bold, [text] is a placeholder still to fill in.
 * Only multipliers and relative changes ship — never the underlying conversion rates.
 */

export type Block =
  | { p: string }
  | { list: string[]; title?: string }
  | { jtbd: string }
  | { table: { head: [string, string]; rows: [string, string][] } }
  | { road: { when: string; what: string; note: string }[] }
  | { stats: { value: string; label: string }[] }
  | { metrics: { north: { name: string; formula: string }; inputs: { name: string; why: string }[] } }
  | { img: string; caption: string };

export type Case = {
  slug: string;
  title: string;
  lede: string;
  tags: string[];
  cover: string;
  /** Show the cover at its own proportions instead of cropping it to the banner. */
  coverWhole?: boolean;
  meta: [string, string][];
  /** Optional product link shown in the meta row. */
  link?: { label: string; href: string };
  /** One line per step, for the summary strip at the top. */
  summary: { problem: string; role: string; decision: string; outcome: { value: string; label: string } };
  problem: Block[];
  role: Block[];
  decision: Block[];
  outcome: Block[];
  learnings: string[];
};


export const CASES: Case[] = [
  {
    slug: "onboarding",
    title: "Onboarding that sells: ×6.6 sign-up → payment in the first day",
    lede: "LLM API gave every new sign-up $10 of free credits. People used them — and almost nobody paid. I rebuilt onboarding around what customers actually pay for.",
    tags: ["B2B SaaS", "Activation", "Monetisation"],
    cover: "/cases/llmapi-cover.jpg",
    meta: [["Product", "LLM API · Spendbase"], ["Role", "Owned onboarding & paywall"], ["Timeline", "Aug — Sep 2026 · shipped 3 Sep"], ["Team", "Growth, engineering, front-end, solutions"]],
    link: { label: "llmapi.ai", href: "https://llmapi.ai/" },
    summary: {
      problem: "People used the product on free credits, and almost nobody paid.",
      role: "Owned the onboarding redesign — discovery, hypothesis, metric, prototype and rollout.",
      decision: "Onboarding sets up the organisation; the free $10 became a welcome-page bonus.",
      outcome: { value: "×6.6", label: "sign-up → payment in the first 24 hours" },
    },
    problem: [
      { p: "Every new sign-up could claim $10 of free credits, and most did. People sent requests and kept using the router — by every activation metric, onboarding was working. But **almost nobody paid**." },
      { p: "The product was being used, not bought. A free trial nobody pays after isn’t a funnel step — it’s a cost." },
      { list: ["Onboarding was optimised for the first request, not for the first payment", "Questions in onboarding personalised nothing", "The one thing competitors didn’t offer — a transparent discount — was hidden"], title: "What I found" },
    ],
    role: [
      { p: "I owned the change end to end — from the question “why don’t people pay?” to the cohort analysis after release." },
      { list: ["**Discovery:** talked to the team and went through hundreds of prospect calls", "**Hypothesis & metric:** sign-up → payment as the goal, activation as the guardrail", "**Prototype:** a working onboarding in Claude Code, not a static mock", "**Rollout & measurement:** equal-window cohorts in Clarity and Grafana"] },
      { p: "Worked with a growth hacker, a software engineer, a front-end developer and a solutions engineer." },
    ],
    decision: [
      { p: "Cost was the top concern in every call. “The router works” isn’t an aha-moment — it’s the wheels on the car. A transparent discount from day one is the cruise control. So the aha-moment moved from **“send your first request”** to **“see what you’ll save”**." },
      { list: ["**Set up the organisation** — onboarding creates the company workspace: organisation, team and use case", "**Fewer questions** — dropped “which models do you use” and “which IDE”: neither personalised anything", "**$10 as a welcome bonus** — claiming credits moved to the welcome page, a nice extra rather than the main action", "**Lead with discounts** — savings are the first thing on the paywall"], title: "What changed" },
      { list: ["Fewer people would reach their first request — the expected price of a paywall", "We agreed to measure it openly instead of hiding it"], title: "The trade-off I accepted" },
    ],
    outcome: [
      { p: "The new cohort is younger, so cumulative numbers would flatter it. The fair comparison gives every user the same window from sign-up." },
      { stats: [{ value: "×6.6", label: "sign-up → payment, first 24 hours" }, { value: "×7.0", label: "first 3 days" }, { value: "×8.7", label: "first 7 days" }] },
      { p: "Activation dropped, as expected — and a new gap appeared: some people pay but don’t send their first request yet. That’s the next item in the backlog." },
    ],
    learnings: [
      "Pick the aha-moment your customers pay for, not the one that’s easiest to measure.",
      "Activation is only a good metric if the people who activate are the people who pay.",
      "Shipping isn’t the finish line — revenue is. Payment conversion moved because product, growth, sales calls and engineering pulled in one direction.",
    ],
  },
  {
    slug: "gotta",
    title: "Gotta: from a job to be done to a live product in a week",
    lede: "Textbooks teach “I don’t know”. Real people say “I dunno”. Gotta is my own product: a catalog of everyday phrases that shows how English really sounds — first in a song, then in live speech.",
    tags: ["Own product", "EdTech", "0-to-1"],
    cover: "/cases/gotta-phone-cover.jpg",
    meta: [["Product", "Gotta"], ["Role", "Founder · Product Owner"], ["Timeline", "Oct 2026 · live"], ["Team", "Solo + Claude Code"]],
    link: { label: "gottaenglish.com", href: "https://gottaenglish.com" },
    summary: {
      problem: "Learners understand English on paper and almost nothing in real speech.",
      role: "Founder and PO — the problem, the scope, the build and the launch.",
      decision: "An MVP scoped strictly from the job to be done; retention features left for later.",
      outcome: { value: "1 week", label: "from the idea to a live product" },
    },
    problem: [
      { p: "People who learn English from textbooks understand every word on paper and almost nothing in a song, a series or a call. Native speech follows sound rules nobody teaches: “want to” becomes “wanna”, “did you” becomes “didja”." },
      { jtbd: "When I hear native speakers and can’t catch what they’re saying, I want to hear how everyday phrases actually sound, so I can understand people without subtitles and sound natural myself." },
      { list: ["**Emotional:** stop feeling lost when people talk fast", "**Social:** sound natural, not like a textbook, at work and in conversation"] },
    ],
    role: [
      { p: "Founder and Product Owner. I defined the problem and the job, cut the scope, built the product with Claude Code (Next.js, Supabase, Vercel) and launched it." },
      { list: ["**Legal by design:** videos are never downloaded or stored — only YouTube IDs and timecodes, through the official embed", "**Ready for launch:** SEO, privacy and terms pages, and analytics before day one", "**Easy to grow:** an admin panel with CSV import from Notion, so adding phrases doesn’t need code"], title: "Constraints I designed around" },
    ],
    decision: [
      { p: "Each part of the job became one MVP decision — and nothing else made the cut." },
      { table: { head: ["The job needs…", "MVP decision"], rows: [
        ["Real contexts, not textbook audio", "Every phrase comes with a song fragment first, then live speech from YouTube"],
        ["Hearing, not reading", "Loop, 0.75× speed and a second of context around each fragment"],
        ["Understanding the rule", "A one-line explanation, so the learner spots the same pattern elsewhere"],
        ["Finding the phrase fast", "Search and two-level filters by sound phenomenon and rule"],
      ] } },
      { list: ["**Shadowing** — valuable, but not needed to prove people come back to listen", "**My phrases with spaced repetition** — a retention feature for when there’s something to retain", "**Phrase requests** — next, so real demand, not my guesses, decides what gets added"], title: "What I left out — on purpose" },
    ],
    outcome: [
      { stats: [{ value: "1 week", label: "from the idea to a live product" }, { value: "60", label: "phrases at launch" }, { value: "5", label: "sound phenomena covered" }] },
      { road: [
        { when: "Now", what: "Catalog & player", note: "Live · 60 phrases, five sound phenomena" },
        { when: "Next", what: "Shadowing", note: "Record and compare your own voice" },
        { when: "Later", what: "My phrases · Requests", note: "Spaced repetition and a demand-driven catalog" },
      ] },
      { metrics: {
        north: { name: "Weekly phrases listened", formula: "weekly visitors × phrases per user" },
        inputs: [
          { name: "Play-through rate", why: "% of people who press ▶ and listen to the end — is the fragment worth hearing?" },
          { name: "Phrases per visit", why: "how deep one session goes through the catalog" },
          { name: "Return frequency", why: "how often people come back — the first sign of a habit" },
        ],
      } },
    ],
    learnings: [
      "Building took a week. Deciding what not to build was the real work — shadowing, spaced repetition and requests all wait, so the MVP answers one question: do people come back to listen?",
      "AI made the build cheap — so the expensive part moved. It’s no longer “can we make it?”, it’s “will anyone care?”. That’s a product question, not a coding one.",
    ],
  },
  {
    slug: "carma",
    title: "Carma: from the first flow to a live B2B marketplace",
    lede: "Carma connects auto-parts distributors with workshops and service centres across the GCC. I was the only designer from zero to launch — and grew into owning the roadmap.",
    tags: ["B2B marketplace", "0-to-1", "Roadmap", "Backlog"],
    cover: "/cases/carma-1.jpg",
    meta: [["Product", "carma.team · GCC"], ["Role", "Product Designer → acting PO"], ["Timeline", "Jun 2024 — Jun 2026"], ["Team", "PO, BA, AI team, PM, developers"]],
    summary: {
      problem: "A dense domain — OEM catalogs, VIN search, pricing, many roles — and no product yet.",
      role: "The only designer from zero to launch; owned the roadmap and OKRs with the PO and BA.",
      decision: "Map every role’s workflow first, then build the buyer’s path to an order.",
      outcome: { value: "0 → live", label: "a marketplace for buyers, suppliers and admins" },
    },
    problem: [
      { p: "Workshops search for parts across many suppliers by phone and spreadsheets. The domain is dense: OEM catalogs, VIN-based search, pricing logic, availability matching and several roles with different goals." },
      { list: ["**Buyers** need the right part, fast, at the best price and lead time", "**Suppliers** need to keep catalogs, price lists and stock up to date at scale", "**Admins** need to verify companies and keep the marketplace trustworthy"], title: "Three roles, three jobs" },
    ],
    role: [
      { p: "I was the only designer on Carma through the whole project, with a junior designer joining at times. I started in UX/UI and grew into an acting Product Owner role." },
      { list: ["Owned the **roadmap** and set **OKRs**; prioritised the backlog with the PO and BA", "Mapped every role’s workflows — buyer, supplier, admin — with **User Story Mapping**", "Ran **discovery**: competitive analysis and interviews with workshops and suppliers", "Turned business logic into workflows with the AI team and developers", "Ran **usability tests** on selected features"] },
    ],
    decision: [
      { p: "Instead of designing screens one by one, I mapped the journey of each role first — so the backlog followed the order people actually get work done." },
      { list: ["**Search** by VIN, OEM number and catalog (make → model → generation)", "**Compare offers** by price, availability and delivery time", "**Multi-supplier cart** grouped by supplier, with minimum order amounts", "**Checkout and order tracking** — statuses, history and reordering"], title: "Buyer’s path first — it’s where money moves" },
      { list: ["**Bulk import** of catalogs and price lists for suppliers", "**Role-based access** and company verification", "**AI features**: part matching, request recognition and offer matching", "A **design system** with dense tables, so new modules ship without new design debt"], title: "Then what makes it scale" },
    ],
    outcome: [
      { img: "/cases/carma-3.jpg", caption: "The design system in Figma — form controls, date picker, alerts and the colour palette" },
    ],
    learnings: [
      "I started by designing screens and ended up shaping what gets built. The best UX decisions in B2B are product decisions.",
      "Complex domains don’t need complex interfaces. They need someone who understands the business logic well enough to hide it.",
    ],
  },
  {
    slug: "atomic-shop",
    title: "Atomic-shop: one homepage for four regions",
    lede: "Atomic-shop sells performance auto parts in Ukraine, Europe, the US and the UAE. The team had built targeted vehicle collections — but shoppers couldn’t find them.",
    tags: ["E-commerce", "Stakeholders", "Discovery"],
    cover: "/cases/auto-cover.jpg",
    meta: [["Product", "Atomic-shop · UA, EU, US, UAE"], ["Role", "Product designer"], ["Timeline", "Oct — Nov 2025"], ["Team", "Marketing, SEO, category managers, PM"]],
    summary: {
      problem: "One homepage for every market hid the vehicle collections people came for.",
      role: "Ran the audit and aligned marketing, SEO, category managers and the PM.",
      decision: "Navigation starts from the vehicle and the region — and each team sees its goal in it.",
      outcome: { value: "↑ CTR", label: "collection CTR, add-to-cart and session depth grew" },
    },
    problem: [
      { p: "The homepage was the same for every market and didn’t lead people to the vehicle-specific collections." },
      { list: ["Collections were hard to reach from the homepage", "Vehicle groupings didn’t match how people search", "Navigation ignored regional demand"], title: "What got in the way" },
      { list: ["Low click-through to collections", "People left before exploring products", "A weaker add-to-cart rate"], title: "What it cost" },
    ],
    role: [
      { p: "I ran a technical and business audit with marketing, SEO, automotive category managers and the product manager: how people search for parts, which collections and models perform in each region, and the limits of the current structure." },
      { p: "Each team looked at the homepage through its own goals, so I worked with every department individually — learned what success meant for them and brought their constraints into the design early." },
    ],
    decision: [
      { p: "Shoppers think in cars, not categories. I reorganised the collection hierarchy around vehicles and regions — for example Porsche GT4 / GT4 RS by generation, or Ford Raptor models for the UAE." },
      { list: ["**Marketing** — space to promote priority collections for each region without breaking the layout", "**SEO** — a hierarchy and landing pages that keep search visibility", "**Category managers** — groupings that follow real demand by brand, model and generation", "**Product manager** — clear metrics: collection CTR, add-to-cart rate and session depth", "**Operations** — a structure that’s easy to update as new vehicles and markets are added"], title: "One structure, a goal for every team" },
    ],
    outcome: [
      { img: "/cases/auto-porsche.jpg", caption: "Vehicle collections by model and generation, right from the homepage" },
      { list: ["**Collection CTR** and **add-to-cart rate** increased", "**Homepage engagement** increased", "**Product visits from collections** and **session depth** increased", "Decisions were made faster, with no last-minute rework"], title: "What we tracked — and grew" },
    ],
    learnings: ["One homepage serves many teams. Talking to each of them about their own goals turned competing requests into one shared structure — and that’s what moved the numbers."],
  },
  {
    slug: "muse",
    title: "MUSÉ Flora: a size guide that lifted checkout clicks by 33%",
    lede: "In floral e-commerce people buy a bouquet they have only seen in close-up photos — usually as a gift. The question they kept getting stuck on: how big is it, really?",
    tags: ["E-commerce", "Conversion", "JTBD"],
    cover: "/cases/muse-1.jpg",
    coverWhole: true,
    meta: [["Product", "musefloralstudio.com"], ["Role", "Product designer"], ["Timeline", "Sep 2025"], ["Team", "Directly with the client"]],
    summary: {
      problem: "In photos every size looked the same, so choosing one felt like a risk.",
      role: "Worked directly with the owner; set the goal as conversion to order.",
      decision: "Show scale instead of describing it — an illustrated S / M / L guide by the selector.",
      outcome: { value: "+33%", label: "clicks on the checkout button" },
    },
    problem: [
      { p: "Bouquets are photographed up close, so in photos every size looks the same. Sizes were plain text buttons with no sense of scale. For a gift that uncertainty feels like a risk — people picked the smallest option or left without ordering." },
      { jtbd: "When I order flowers as a gift, I want to know how the bouquet will look in someone’s hands, so I don’t send something that disappoints." },
    ],
    role: [
      { p: "I worked directly with the studio owner and set the goals together:" },
      { list: ["Increase conversion to order", "Let customers choose a size confidently without asking the studio", "Grow the share of Medium and Large bouquets"] },
    ],
    decision: [
      { p: "An illustrated size guide shows Small, Medium and Large side by side in the same signature box, with dimensions — from 14 × 12 in to 20 × 18 in. It sits in the product gallery and next to the size selector, and the page says which size is in the photos." },
      { p: "Delivery date, time and gifting add-ons sit on the same page, so the whole gift decision happens in one place." },
      { img: "/cases/muse-size-guide.jpg", caption: "Size guide — Small, Medium and Large in the same signature box" },
    ],
    outcome: [
      { stats: [{ value: "+33%", label: "clicks on the checkout button" }, { value: "M & L", label: "a higher share in orders" }] },
      { list: ["The size is clear before buying, without asking the studio", "Size, delivery date, time and add-ons are chosen in one place"] },
    ],
    learnings: ["People don’t buy a size — they buy how the bouquet will look in someone’s hands. Showing scale works better than describing it."],
  },
];

export const getCase = (slug: string) => CASES.find((c) => c.slug === slug);
