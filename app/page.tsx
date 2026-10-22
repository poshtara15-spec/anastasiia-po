import Link from "next/link";
import { FEATURED, HANDS, HERO, JOURNEY, LINKS, PILLARS, RECOMMENDATIONS, RESULTS, TOOLKIT, WORK } from "@/data/content";
import { Footer, Header, Label, T } from "@/components/Shared";
import { ToolIcon } from "@/components/ToolIcon";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="hero wrap">
          <div className="hero-meta">
            <span>{HERO.hello}</span>
            <span className="dot">available for new projects</span>
          </div>
          <h1>Product Owner for <mark>B2B SaaS</mark> &amp; E‑commerce</h1>
          <div className="hero-row">
            <div>
              <p className="thesis">{HERO.thesis}</p>
              <p className="lead">{HERO.lede}</p>
              <p className="lead currently"><b>Currently</b> · {HERO.currently}</p>
              <div className="ctas">
                <a className="btn solid" href={LINKS.cv} target="_blank" rel="noopener">Download CV <span className="arr">↗</span></a>
                <a className="btn" href="#contact">Contact</a>
              </div>
            </div>
            <div className="portrait"><img src="/assets/portrait.jpg" alt="Anastasiia Aleksiichuk" /></div>
          </div>
        </section>

        {/* Selected work */}
        <section className="section wrap" id="work">
          <Label>selected work</Label>
          <Link className="featured" href={FEATURED.href}>
            <div className="featured-top">
              <span className="eyebrow">Featured case</span>
              <div className="tags">{FEATURED.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
            </div>
            <h3>{FEATURED.title}</h3>
            <div className="facts">
              <div className="fact"><small>Problem</small><p>{FEATURED.problem}</p></div>
              <div className="fact"><small>My role</small><p>{FEATURED.role}</p></div>
              <div className="fact"><small>Key decision</small><p>{FEATURED.decision}</p></div>
              <div className="fact out"><small>Outcome</small><b>{FEATURED.outcome.value}</b><p>{FEATURED.outcome.label}</p></div>
            </div>
            <span className="more">Read the case <span aria-hidden="true">→</span></span>
          </Link>
          <ul className="list">
            {WORK.map((w) => (
              <li key={w.n}>
                {w.external ? (
                  <a href={w.href} target="_blank" rel="noopener">
                    <span className="n">{w.n}</span><span className="t">{w.title}</span>
                    <span className="tags">{w.tags.map((t) => <span key={t} className="tag">{t}</span>)}</span>
                    <span className="arr" aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <Link href={w.href}>
                    <span className="n">{w.n}</span><span className="t">{w.title}</span>
                    <span className="tags">{w.tags.map((t) => <span key={t} className="tag">{t}</span>)}</span>
                    <span className="arr" aria-hidden="true">→</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </section>

        {/* How I own products */}
        <section className="section wrap" id="how">
          <Label>how I own products</Label>
          <h2 className="h2">From the first interview to the shipped release</h2>
          <p className="lead">I started out selling a product to customers. Now I decide what that product becomes — and I measure whether it worked.</p>
          <div className="pillars">
            {PILLARS.map((p) => (
              <article key={p.name} className="pillar">
                <small>{p.name}</small>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <div className="tags">{p.skills.map((s) => <span key={s} className="tag">{s}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        {/* Proven results */}
        <section className="section wrap">
          <Label>proven results</Label>
          <h2 className="h2">Decisions measured by outcomes, not opinions</h2>
          <div className="results">
            {RESULTS.map((r) => (
              <div key={r.src} className="result"><b><T>{r.value}</T></b><span><T>{r.label}</T></span><small>{r.src}</small></div>
            ))}
          </div>
        </section>

        {/* Designer's hands */}
        <section className="wrap">
          <div className="hands">
            <Label>my AI-native workflow</Label>
            <h2 className="h2">From a problem to a tested solution — in days, <mark>not sprints</mark></h2>
            <p className="lead">Most POs write requirements and wait for design. AI is part of every step of my work — so I go from a customer problem to a working, tested prototype, and the team builds only what’s already proven.</p>
            <ol className="steps">
              {HANDS.map((h) => <li key={h.step}><b>{h.step}</b><span>{h.text}</span><small className="ai">{h.ai}</small></li>)}
            </ol>
          </div>
        </section>

        {/* Recommendations */}
        <section className="section wrap">
          <Label>recommendations</Label>
          <h2 className="h2">What it’s like to work with me</h2>
          <div className="quotes">
            {RECOMMENDATIONS.map((r) => (
              <figure key={r.name} className="quote">
                <blockquote><p>“{r.text.split(/==(.+?)==/).map((part, i) => (i % 2 ? <mark key={i}>{part}</mark> : part))}”</p></blockquote>
                <figcaption><b>{r.name}</b><span>{r.role}</span><small>{r.relation}</small></figcaption>
              </figure>
            ))}
          </div>
          <a className="btn quotes-more" href={LINKS.recommendations} target="_blank" rel="noopener">All recommendations on LinkedIn <span className="arr">↗</span></a>
        </section>

        {/* Journey */}
        <section className="section wrap" id="journey">
          <Label>my journey</Label>
          <h2 className="h2">From selling the product to owning it</h2>
          <div className="jobs">
            {JOURNEY.map((j) => (
              <article key={j.org + j.role} className="job">
                <time><T>{j.dates}</T></time>
                <div>
                  <h3><T>{j.role}</T></h3>
                  <p className="org"><T>{j.org}</T><span><T>{j.meta}</T></span></p>
                  {j.intro && <p className="intro"><T>{j.intro}</T></p>}
                  <ul>{j.points.map((pt) => <li key={pt}><T>{pt}</T></li>)}</ul>
                  <div className="tags">{j.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Toolkit */}
        <section className="section wrap">
          <Label>toolkit</Label>
          <div className="kit">
            {TOOLKIT.map((g) => (
              <div key={g.group}><h3>{g.group}</h3><div className="tags">{g.items.map((i) => <span key={i} className="tag tool"><ToolIcon name={i} />{i}</span>)}</div></div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="section wrap contact" id="contact">
          <Label>say hello</Label>
          <h2>Let’s build something people <mark>pay for</mark></h2>
          <p className="lead">Open to Product Owner roles in B2B SaaS and e-commerce. The fastest way to reach me is Telegram.</p>
          <div className="socials">
            <a className="btn solid" href={LINKS.telegram} target="_blank" rel="noopener">Telegram <span className="arr">↗</span></a>
            <a className="btn" href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
            <a className="btn" href={LINKS.linkedin} target="_blank" rel="noopener">LinkedIn <span className="arr">↗</span></a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
