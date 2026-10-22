import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CASES, getCase, type Block } from "@/data/cases";
import { LINKS } from "@/data/content";
import { Footer, Header, T } from "@/components/Shared";

export const dynamicParams = false;

export function generateStaticParams() {
  return CASES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const c = getCase((await params).slug);
  return c ? { title: `${c.title} — Anastasiia Aleksiichuk, Product Owner`, description: c.lede } : {};
}

/** **bold** and [placeholder] inside case copy. */
function Rich({ children }: { children: string }) {
  return <>{children.split(/\*\*(.+?)\*\*/).map((part, i) => (i % 2 ? <b key={i}><T>{part}</T></b> : <T key={i}>{part}</T>))}</>;
}

function Blocks({ items }: { items: Block[] }) {
  return items.map((b, i) => {
    if ("p" in b) return <p key={i}><Rich>{b.p}</Rich></p>;
    if ("jtbd" in b) return <p key={i} className="jtbd">{b.jtbd}</p>;
    if ("list" in b) return (
      <div key={i}>
        {b.title && <h3>{b.title}</h3>}
        <ul>{b.list.map((li) => <li key={li}><Rich>{li}</Rich></li>)}</ul>
      </div>
    );
    if ("table" in b) return (
      <table key={i} className="table">
        <thead><tr><th>{b.table.head[0]}</th><th>{b.table.head[1]}</th></tr></thead>
        <tbody>{b.table.rows.map(([a, d]) => <tr key={a}><td>{a}</td><td>{d}</td></tr>)}</tbody>
      </table>
    );
    if ("road" in b) return (
      <div key={i} className="road">
        {b.road.map((r, k) => <div key={r.when} className={k === 0 ? "now" : undefined}><small>{r.when}</small><b>{r.what}</b><span>{r.note}</span></div>)}
      </div>
    );
    if ("stats" in b) return (
      <div key={i} className="cstats">{b.stats.map((s) => <div key={s.label}><b>{s.value}</b><span>{s.label}</span></div>)}</div>
    );
    if ("metrics" in b) return (
      <div key={i} className="metrics">
        <h3>What I measure</h3>
        <div className="ns"><small>North Star</small><b>{b.metrics.north.name}</b><span>= {b.metrics.north.formula}</span></div>
        <div className="inputs">
          {b.metrics.inputs.map((m) => <div key={m.name}><b>{m.name}</b><span>{m.why}</span></div>)}
        </div>
      </div>
    );
    return <figure key={i} className="shot"><img src={b.img} alt={b.caption} /><figcaption>{b.caption}</figcaption></figure>;
  });
}

const STEPS = [["01", "Problem", "problem"], ["02", "My role", "role"], ["03", "Decision", "decision"], ["04", "Outcome", "outcome"]] as const;

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const c = getCase((await params).slug);
  if (!c) notFound();
  const next = CASES[(CASES.indexOf(c) + 1) % CASES.length];

  return (
    <>
      <Header />
      <main>
        <section className="case-hero wrap">
          <Link href="/" className="back">← Back home</Link>
          <div className="tags case-tags">{c.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
          <h1>{c.title}</h1>
          <p className="lead">{c.lede}</p>
          <dl className="meta">
            {c.meta.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
          </dl>
          {c.link && (
            <div className="case-links">
              <a className="btn" href={c.link.href} target="_blank" rel="noopener">{c.link.label} <span className="arr">↗</span></a>
            </div>
          )}
        </section>

        <section className="wrap">
          <div className={c.coverWhole ? "case-cover whole" : "case-cover"}><img src={c.cover} alt="" /></div>
          {/* The whole case in four lines */}
          <div className="facts case-sum">
            <div className="fact"><small>Problem</small><p>{c.summary.problem}</p></div>
            <div className="fact"><small>My role</small><p>{c.summary.role}</p></div>
            <div className="fact"><small>Key decision</small><p>{c.summary.decision}</p></div>
            <div className="fact out"><small>Outcome</small><b>{c.summary.outcome.value}</b><p>{c.summary.outcome.label}</p></div>
          </div>
        </section>

        <section className="section wrap">
          <div className="prose case-body">
            {STEPS.map(([n, name, key]) => (
              <section key={key} className="step" id={key}>
                <h2><span className="sn">{n}</span>{name}</h2>
                <Blocks items={c[key]} />
              </section>
            ))}
            <div className="learn">
              <small>key {c.learnings.length > 1 ? "learnings" : "learning"}</small>
              {c.learnings.map((l) => <p key={l}>{l}</p>)}
            </div>
          </div>
        </section>

        <section className="section wrap case-next">
          <Link href={`/work/${next.slug}`} className="next">
            <small>Next case</small>
            <span>{next.title}</span>
            <span className="arr" aria-hidden="true">→</span>
          </Link>
          <div className="ctas">
            <a className="btn solid" href={LINKS.telegram} target="_blank" rel="noopener">Discuss a similar project <span className="arr">↗</span></a>
            <a className="btn" href={LINKS.cv} target="_blank" rel="noopener">Download CV <span className="arr">↗</span></a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
