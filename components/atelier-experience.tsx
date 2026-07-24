"use client";
import { useEffect, useState } from "react";
import { collections, gallery, process } from "@/content/atelier";

const Arrow = () => <span aria-hidden="true">↗</span>;

export function AtelierExperience() {
  const [loaded, setLoaded] = useState(false);
  const [menu, setMenu] = useState(false);
  useEffect(() => { const timer = setTimeout(() => setLoaded(true), 1450); return () => clearTimeout(timer); }, []);
  useEffect(() => { const onMove = (e: MouseEvent) => document.documentElement.style.setProperty("--mx", `${e.clientX / innerWidth * 100}%`); window.addEventListener("mousemove", onMove); return () => window.removeEventListener("mousemove", onMove); }, []);
  return <>
    <div className={`loader ${loaded ? "is-loaded" : ""}`} aria-hidden="true"><div className="loader-mark">SA</div><div className="loader-line"><i /></div><small>THE ATELIER · 2025</small></div>
    <main>
      <nav><a className="monogram" href="#home">SA</a><span className="nav-title">Shahid Afridi<br/>The Atelier</span><button aria-expanded={menu} aria-label="Open menu" onClick={() => setMenu(!menu)} className="menu-btn"><i /><i /></button></nav>
      <div className={`menu-overlay ${menu ? "open" : ""}`}><a href="#identity" onClick={() => setMenu(false)}>Identity</a><a href="#collections" onClick={() => setMenu(false)}>Collections</a><a href="#cinema" onClick={() => setMenu(false)}>Cinema</a><a href="#contact" onClick={() => setMenu(false)}>Contact</a></div>

      <section id="home" className="hero grain">
        <div className="hero-image" /> <div className="hero-shadow" />
        <div className="hero-meta"><span>New Delhi · India</span><span>Est. 2004</span></div>
        <div className="hero-copy"><p className="eyebrow">Fashion designer · Couturier · Costume designer</p><h1>SHAHID<br/><em>AFRIDI</em></h1><p className="hero-quote">Where fabric becomes emotion.</p><a className="round-link" href="#collections">Explore<br/>the work <Arrow /></a></div>
        <div className="scroll-cue">SCROLL TO ENTER <b>↓</b></div>
      </section>

      <section className="statement"><p className="eyebrow">00 — Arrival</p><h2>Luxury begins where<br/><em>craftsmanship</em> refuses<br/>compromise.</h2><div className="statement-detail">Each creation is a quiet dialogue between the hand, the material, and the woman who will inhabit it.</div></section>

      <section id="identity" className="identity grain"><div className="image-frame"><img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1300&q=85" alt="Fashion atelier portrait" /></div><div className="identity-copy"><p className="eyebrow">01 — Identity</p><h2>An instinct<br/>for the <em>extraordinary.</em></h2><p>For two decades, Shahid Afridi has shaped a world where Indian heritage meets modern drama. Every line is considered. Every embellishment carries a memory.</p><a className="text-link" href="#craft">Discover the philosophy <Arrow /></a></div><div className="vertical-word">ATELIER</div></section>

      <section id="craft" className="craft"><header><p className="eyebrow">02 — The craft</p><h2>Made slowly.<br/>Felt <em>forever.</em></h2><p>From first instinct to final stitch, the atelier is a place of obsessive devotion.</p></header><div className="process-track">{process.map((item, i) => <article className="process-card" key={item}><span>0{i + 1}</span><h3>{item}</h3><div className="process-image" style={{ backgroundImage: `url(https://images.unsplash.com/photo-${["1551488831-00ddcb6c6bd3","1455390582262-044cdead277a","1455390582262-044cdead277a","1496747611176-843222e1e57c","1523779917675-b6ed3a42a561","1551488831-00ddcb6c6bd3","1509631179647-0177331693ae"][i]}?auto=format&fit=crop&w=800&q=80)` }} /></article>)}</div></section>

      <section id="collections" className="collections"><header><p className="eyebrow">03 — Collections</p><h2>Stories in<br/><em>silhouette.</em></h2><p>A vocabulary of ceremony, made for moments that deserve to be remembered.</p></header><div className="collection-list">{collections.map((c) => <article className="collection" key={c.name}><div className="collection-number">{c.number}</div><div className="collection-photo"><img src={c.image} alt={c.name}/></div><div className="collection-info"><h3>{c.name}</h3><p>{c.type}</p><button aria-label={`Explore ${c.name}`}>+</button></div></article>)}</div></section>

      <section id="cinema" className="cinema"><div className="cinema-bg" /><div className="cinema-content"><p className="eyebrow">04 — Cinema</p><h2>Clothed in<br/><em>character.</em></h2><p>Costume is not an accessory to a story. It is the story’s first breath — its most intimate language.</p><button className="play"><span>▶</span> Play the fashion film</button></div><div className="cinema-label">THREADS OF EMOTION · 03:48</div></section>

      <section className="recognition"><p className="eyebrow">05 — Recognition</p><div className="recognition-grid"><h2>For the <em>ones</em><br/>who notice<br/>everything.</h2><div><p className="big-stat">20<sup>+</sup></p><p>Years of devotion to the art of dressing.</p></div><div><p className="big-stat">500<sup>+</sup></p><p>Custom narratives, meticulously made.</p></div><blockquote>“Elegance is engineered.”<cite>— Shahid Afridi</cite></blockquote></div></section>

      <section className="gallery"><header><p className="eyebrow">06 — Editorial diary</p><h2>Fragments of<br/><em>the world.</em></h2></header><div className="gallery-grid">{gallery.map((src, i) => <figure key={src}><img src={src} alt={`Shahid Afridi editorial ${i + 1}`} /><figcaption>Editorial / 0{i + 1}</figcaption></figure>)}</div></section>

      <section id="contact" className="contact"><p className="eyebrow">07 — The next chapter</p><h2>Until<br/>the next<br/><em>runway.</em></h2><div className="contact-bottom"><p>For commissions, collaborations<br/>and costume enquiries.</p><a href="mailto:studio@shahidafridi.com">Begin a conversation <Arrow /></a></div></section>
      <footer><span>© 2025 Shahid Afridi</span><span>New Delhi · Mumbai</span><span>Instagram · Pinterest · Vimeo</span></footer>
    </main>
  </>;
}
