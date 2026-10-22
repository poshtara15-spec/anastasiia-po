import Link from "next/link";
import { LINKS } from "@/data/content";

/** Renders copy and highlights any [placeholder] that still needs real content. */
export function T({ children }: { children: string }) {
  return <>{children.split(/(\[[^\]]+\])/).map((part, i) => (part.startsWith("[") ? <span key={i} className="todo">{part}</span> : part))}</>;
}

export function Label({ children }: { children: string }) {
  return <p className="label">.{children}</p>;
}

export function Header() {
  return (
    <header className="top">
      <div className="wrap">
        <Link href="/" className="logo">a.<b>product</b></Link>
        <nav className="nav" aria-label="Sections">
          <Link href="/#work">work</Link>
          <Link href="/#how">how I work</Link>
          <Link href="/#journey">journey</Link>
          <Link href="/#contact">contact</Link>
        </nav>
        <a className="btn" href={LINKS.cv} target="_blank" rel="noopener">CV <span className="arr">↗</span></a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <span>© 2026 Anastasiia Aleksiichuk · Product Owner</span>
        <span>Built with Claude Code</span>
      </div>
    </footer>
  );
}
