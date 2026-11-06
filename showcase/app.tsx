import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  createRootRoute,
  createRoute,
  createRouter,
  Link,
  Outlet,
  RouterProvider,
} from "@tanstack/react-router";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  X,
  Menu,
  ShieldCheck,
  Sparkles,
  Search,
  LockKeyhole,
} from "lucide-react";
import logo from "../src/assets/logo.png";
import "./style.css";
import { profiles, type Profile } from "./profiles";

const niches = [
  "Lifestyle",
  "Food & drink",
  "Beauty",
  "Fashion",
  "Travel",
  "Wellness",
];
function CreatorPhoto({ profile }: { profile: Profile }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="creator-photo">
      {failed ? (
        <div
          className="photo-fallback"
          role="img"
          aria-label={profile.title + " — photo unavailable"}
        >
          {profile.title
            .split(" ")
            .map((part) => part[0])
            .join("")}
        </div>
      ) : (
        <img
          src={profile.photo}
          alt={profile.title}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
function Artwork({
  kind,
  className = "",
}: {
  kind: string;
  className?: string;
}) {
  return (
    <div className={`artwork art-${kind} ${className}`} aria-hidden="true">
      <div className="art-orbit" />
      <div className="art-object">
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
      <span className="art-stamp">
        MIAMI
        <br />
        STATE OF MIND.
      </span>
      <span className="art-cross">✳</span>
    </div>
  );
}
function AppLayout() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <Link to="/" className="wordmark" onClick={() => setMenu(false)}>
          <img src={logo} alt="" />
          <span>
            miami<span className="wordmark-light">creators</span>
            <b>®</b>
          </span>
        </Link>
        <button
          className="menu-toggle"
          aria-expanded={menu}
          aria-controls="main-nav"
          aria-label={menu ? "Close menu" : "Open menu"}
          onClick={() => setMenu(!menu)}
        >
          {menu ? <X /> : <Menu />}
        </button>
        <nav
          id="main-nav"
          aria-label="Main navigation"
          className={menu ? "is-open" : ""}
        >
          <Link
            to="/catalog"
            activeProps={{ className: "active" }}
            onClick={() => setMenu(false)}
          >
            Explore creators
          </Link>
          <Link to="/" hash="how-it-works" onClick={() => setMenu(false)}>
            How it works
          </Link>
          <Link
            to="/creators/apply"
            className="button small"
            onClick={() => setMenu(false)}
          >
            Become a creator <ArrowUpRight size={16} />
          </Link>
        </nav>
      </header>
      <Outlet />
      <footer className="site-footer">
        <div>
          <Link to="/" className="footer-logo">
            miamicreators<span>®</span>
          </Link>
          <p>Local energy. Creative possibilities.</p>
        </div>
        <div className="footer-end">
          <p>
            Miami creators. Original perspectives.
            <br />
            Discover featured profiles and request access to the wider catalog.
          </p>
          <span>MIAMI, FL</span>
        </div>
      </footer>
    </>
  );
}
function Home() {
  const [faq, setFaq] = useState<number | null>(0);
  const questions = [
    [
      "What is Miami Creators?",
      "Miami Creators brings together content creators and brands exploring fresh creative perspectives. Browse our featured creators and request catalog access to discuss your needs.",
    ],
    [
      "How do I get catalog access?",
      "Visit our access page to request catalog access. We will discuss availability, scope and pricing before any purchase. Online checkout is not currently available.",
    ],
    [
      "Are these real creator profiles?",
      "Yes. These creators applied to the original platform. Their public-facing profiles are featured with permission. A featured profile does not imply current availability or a completed collaboration.",
    ],
  ];
  return (
    <main id="main">
      <section className="hero page-width">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="tiny-star">✳</span> A CREATIVE CONNECTION, MADE IN
            MIAMI
          </div>
          <h1>
            Good content.
            <br />
            Great chemistry.
            <br />
            <em>Miami energy.</em>
          </h1>
          <p className="hero-description">
            A place for brands to discover creative perspectives — and for
            creators to introduce their own.
          </p>
          <div className="hero-actions">
            <Link to="/catalog" className="button">
              Explore the creators <ArrowUpRight size={19} />
            </Link>
            <Link to="/creators/apply" className="text-link">
              I'm a creator <ArrowRight size={17} />
            </Link>
          </div>
          <div className="hero-note">
            <span className="note-icon">
              <Sparkles size={18} />
            </span>
            <p>
              Built around people and their creativity.
              <br />
              <strong>Explore the experience, at your own pace.</strong>
            </p>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-vertical">THE CITY IS YOUR CREATIVE STUDIO</div>
          <div className="hero-art">
            <Artwork kind="citrus" />
            <div className="hero-art-caption">
              <span>
                FRESH IDEAS.
                <br />
                LOCAL FLAVOR.
              </span>
              <ArrowUpRight />
            </div>
          </div>
          <div className="mini-art">
            <Artwork kind="bottle" />
            <span>THE LITTLE DETAILS ↗</span>
          </div>
          <div className="floating-label">
            <span className="tiny-star">✳</span> Made to
            <br />
            <strong>stand out.</strong>
          </div>
          <div className="visual-footnote">
            <span>LOCAL ENERGY / FRESH PERSPECTIVES</span>
            <span>01 — 04</span>
          </div>
        </div>
      </section>
      <div className="ticker" aria-hidden="true">
        <span>LOCAL PERSPECTIVES</span>
        <b>✳</b>
        <span>FRESH CONTENT</span>
        <b>✳</b>
        <span>CREATIVE CONNECTIONS</span>
        <b>✳</b>
        <span>MIAMI ENERGY</span>
        <b>✳</b>
      </div>
      <section id="how-it-works" className="section page-width">
        <div className="section-heading">
          <div>
            <p className="eyebrow">LESS GUESSWORK. MORE CONNECTION.</p>
            <h2>
              A little discovery.
              <br />A lot of possibility.
            </h2>
          </div>
          <p>
            Two ways to explore one creative community.
            <br />A clear next step, whichever side you're on.
          </p>
        </div>
        <div className="path-grid">
          <article className="path-card">
            <span className="index">01 / FOR BRANDS</span>
            <h3>
              Find a perspective
              <br />
              that fits your brand.
            </h3>
            <p>
              Browse creator profiles by niche, explore their content focus and
              see what makes each perspective different.
            </p>
            <Link to="/catalog" className="text-link">
              Explore the catalog <ArrowUpRight size={20} />
            </Link>
          </article>
          <article className="path-card peach">
            <span className="index">02 / FOR CREATORS</span>
            <h3>
              Your point of view.
              <br />
              Your next introduction.
            </h3>
            <p>
              Share your interests, social profiles and a little about yourself
              through a simple, guided application.
            </p>
            <Link to="/creators/apply" className="text-link">
              Creator applications <ArrowUpRight size={20} />
            </Link>
          </article>
        </div>
      </section>
      <section className="section page-width featured">
        <div className="section-heading">
          <div>
            <p className="eyebrow">DIFFERENT STYLES. SHARED CREATIVE SPIRIT.</p>
            <h2>A taste of the catalog.</h2>
          </div>
          <Link to="/catalog" className="text-link">
            Explore the creators <ArrowUpRight size={19} />
          </Link>
        </div>
        <div className="preview-grid">
          {profiles.slice(0, 3).map((p) => (
            <article className="preview-card" key={p.id}>
              <CreatorPhoto profile={p} />
              <div>
                <span className="eyebrow">
                  {p.category.toUpperCase()} / CREATOR PROFILE
                </span>
                <h3>{p.title}</h3>
              </div>
            </article>
          ))}
        </div>
        <p className="caption">
          A selection of creators who applied to the original platform. Profiles
          shown with permission; no collaboration or performance results
          implied.
        </p>
      </section>
      <section className="section page-width faq-section">
        <div>
          <p className="eyebrow">A FEW THINGS TO KNOW</p>
          <h2>
            Before you
            <br />
            jump in.
          </h2>
        </div>
        <div className="faq-list">
          {questions.map(([q, a], i) => (
            <div className="faq-item" key={q}>
              <h3>
                <button
                  aria-expanded={faq === i}
                  aria-controls={`faq-${i}`}
                  onClick={() => setFaq(faq === i ? null : i)}
                >
                  {q}
                  <ChevronDown
                    className={faq === i ? "rotated" : ""}
                    size={18}
                  />
                </button>
              </h3>
              <div id={`faq-${i}`} hidden={faq !== i}>
                <p>{a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="closing-cta page-width">
        <span className="closing-star" aria-hidden="true">
          ✳
        </span>
        <div>
          <p className="eyebrow">YOUR PERSPECTIVE BELONGS HERE</p>
          <h2>Let's make an introduction.</h2>
        </div>
        <Link className="button" to="/creators/apply">
          Become a creator <ArrowUpRight size={19} />
        </Link>
      </section>
    </main>
  );
}
function Catalog() {
  const [selected, setSelected] = useState<Profile | null>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();
  const filtered = profiles;
  function showProfile(profile: Profile, button: HTMLButtonElement | null) {
    trigger.current = button;
    dialog.current?.showModal();
    setSelected(profile);
  }
  function close() {
    setSelected(null);
  }
  function finishClose() {
    dialog.current?.close();
    trigger.current?.focus({ preventScroll: true });
  }
  useEffect(() => {
    if (!selected) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus({ preventScroll: true });
    return () => {
      document.body.style.overflow = previous;
    };
  }, [selected]);
  return (
    <main id="main" className="catalog-main page-width">
      <div className="catalog-heading">
        <p className="eyebrow">
          <span className="tiny-star">✳</span> THE CREATIVE LINEUP / FEATURED
          CREATORS
        </p>
        <h1>
          Different perspectives.
          <br />
          <em>One creative city.</em>
        </h1>
        <p>
          Explore content styles, interests and platforms.
          <br />
          Find the kind of creative perspective you're looking for.
        </p>
      </div>
      <div className="catalog-toolbar">
        <div
          className="filters"
          role="group"
          aria-label="Filter creator profiles by niche"
        >
          <button className="selected" aria-pressed="true">
            Featured
          </button>
          {niches.map((n) => (
            <button
              key={n}
              disabled
              title="Category browsing requires catalog access"
            >
              <LockKeyhole size={11} />
              {n}
            </button>
          ))}
        </div>
        <p className="results" role="status">
          {filtered.length} {filtered.length === 1 ? "profile" : "profiles"}
        </p>
      </div>
      <div className="catalog-notice">
        <ShieldCheck size={17} />
        <span>
          Real applicants, featured with permission. Profiles are a snapshot;
          current availability is not represented.
        </span>
      </div>
      <div className="catalog-grid">
        {filtered.map((p) => (
          <motion.article
            className="catalog-card"
            key={p.id}
            layoutId={reduceMotion ? undefined : "creator-card-" + p.id}
            transition={{ type: "spring", stiffness: 350, damping: 32 }}
            onClick={(e) =>
              showProfile(p, e.currentTarget.querySelector("button"))
            }
          >
            <motion.div
              className="catalog-art"
              layoutId={reduceMotion ? undefined : "creator-photo-" + p.id}
            >
              <CreatorPhoto profile={p} />
            </motion.div>
            <div className="catalog-card-content">
              <div className="card-meta">
                <span>{p.category}</span>
                <span>FROM THE ORIGINAL PLATFORM</span>
              </div>
              <motion.h2
                layoutId={reduceMotion ? undefined : "creator-title-" + p.id}
              >
                {p.title}
              </motion.h2>
              <p>{p.bio}</p>
              <div className="platforms">
                {p.platforms.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
              <button
                className="profile-link"
                onClick={(e) => {
                  e.stopPropagation();
                  showProfile(p, e.currentTarget);
                }}
              >
                Explore creator profile <ArrowUpRight size={18} />
              </button>
            </div>
          </motion.article>
        ))}
      </div>
      {!filtered.length && (
        <div className="empty-state">
          <Search />
          <h2>No featured creators in this niche.</h2>
          <p>Browse our featured selection of creators.</p>
          <button className="button">
            View all creators <ArrowRight size={17} />
          </button>
        </div>
      )}
      <section className="locked-catalog" aria-labelledby="locked-title">
        <div className="locked-preview-grid" aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <div className="locked-preview" key={i}>
              <div className="locked-avatar" />
              <div className="locked-line" />
              <div className="locked-line short" />
              <div className="locked-line" />
            </div>
          ))}
        </div>
        <div className="locked-message">
          <span className="locked-icon">
            <LockKeyhole size={23} />
          </span>
          <p className="eyebrow">BEYOND THE FEATURED LINEUP</p>
          <h2 id="locked-title">
            More perspectives.
            <br />
            More possibilities.
          </h2>
          <p>
            Explore access to the wider creator catalog and category browsing.
          </p>
          <Link to="/plans" className="button">
            View more creators <ArrowRight size={18} />
          </Link>
          <span className="small-note">
            Request access to discuss options and availability.
          </span>
        </div>
      </section>
      <div className="catalog-bottom">
        <div>
          <p className="eyebrow">ON THE OTHER SIDE OF THE CAMERA?</p>
          <h2>Introduce your perspective.</h2>
        </div>
        <Link to="/creators/apply" className="button">
          Creator applications <ArrowUpRight size={18} />
        </Link>
      </div>
      <dialog
        ref={dialog}
        className="profile-overlay"
        aria-labelledby="profile-title"
        onCancel={(e) => {
          e.preventDefault();
          close();
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <AnimatePresence onExitComplete={finishClose}>
          {selected && (
            <motion.div
              key={selected.id}
              className="profile-dialog"
              layoutId={
                reduceMotion ? undefined : "creator-card-" + selected.id
              }
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : {
                      type: "spring",
                      stiffness: 350,
                      damping: 32,
                      opacity: { duration: 0.16 },
                    }
              }
            >
              <button
                ref={closeButton}
                className="dialog-close icon-button"
                onClick={close}
                aria-label="Close creator profile"
              >
                <X />
              </button>
              <motion.div
                className="profile-photo"
                layoutId={
                  reduceMotion ? undefined : "creator-photo-" + selected.id
                }
              >
                <CreatorPhoto profile={selected} />
              </motion.div>
              <div className="dialog-content">
                <p className="eyebrow">ORIGINAL PLATFORM / CREATOR PROFILE</p>
                <motion.h2
                  id="profile-title"
                  layoutId={
                    reduceMotion ? undefined : "creator-title-" + selected.id
                  }
                >
                  {selected.title}
                </motion.h2>
                <p>{selected.bio}</p>
                <h3>Content interests</h3>
                <div className="platforms">
                  {selected.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <h3>Platforms</h3>
                <p>{selected.platforms.join(" · ")}</p>
                {selected.links.length > 0 && (
                  <div className="creator-social-links">
                    {selected.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                        <ArrowUpRight size={15} />
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    ))}
                  </div>
                )}
                <p className="small-note">
                  Published profile from the original platform, featured with
                  permission. No current availability, partnership or
                  performance claims.
                </p>
                <button className="button" onClick={close}>
                  Back to the catalog <ArrowRight size={17} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </dialog>
    </main>
  );
}

function Application() {
  return (
    <main id="main" className="confirmation-wrap page-width">
      <section className="confirmation-card">
        <p className="eyebrow">MIAMI CREATORS / CREATOR APPLICATIONS</p>
        <h1>
          Your perspective.
          <br />
          <em>Your next connection.</em>
        </h1>
        <p>
          Creator applications are currently closed. Browse the featured lineup
          while we prepare the next intake.
        </p>
        <Link to="/catalog" className="button">
          Explore featured creators <ArrowUpRight size={18} />
        </Link>
      </section>
    </main>
  );
}
function Plans() {
  return (
    <main id="main" className="plans-page page-width">
      <p className="eyebrow">MIAMI CREATORS / CATALOG ACCESS</p>
      <h1>
        A wider world
        <br />
        of <em>creative possibilities.</em>
      </h1>
      <p className="plans-intro">
        Looking beyond the featured lineup? Tell us about your brand and the
        creators you want to work with.
      </p>
      <section className="access-card">
        <div>
          <p className="eyebrow">CATALOG ACCESS</p>
          <h2>
            Find the right access
            <br />
            for your next project.
          </h2>
          <p>
            Discuss the wider catalog, browsing categories and the scope of
            access for your team.
          </p>
        </div>
        <div>
          <p>
            Access, availability and pricing are agreed directly before any
            purchase.
          </p>
          <a
            className="button"
            href="https://calendly.com/collabs-miamicreator/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            Request catalog access <ArrowUpRight size={18} />
          </a>
          <p className="small-note">
            Opens our scheduling page. No payment is collected on this website.
          </p>
        </div>
      </section>
      <Link to="/catalog" className="back-link">
        <ArrowLeft size={16} />
        Back to featured creators
      </Link>
    </main>
  );
}
function NotFound() {
  return (
    <main id="main" className="confirmation-wrap page-width">
      <section className="confirmation-card">
        <p className="eyebrow">404 / OFF THE BEATEN PATH</p>
        <h1>
          Let's get you
          <br />
          <em>back to Miami.</em>
        </h1>
        <p>We couldn't find this page.</p>
        <Link to="/" className="button">
          Back to home <ArrowRight size={17} />
        </Link>
      </section>
    </main>
  );
}
const rootRoute = createRootRoute({
  component: AppLayout,
  notFoundComponent: NotFound,
});
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});
const catalogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/catalog",
  component: Catalog,
});
const applyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/creators/apply",
  component: Application,
});
const plansRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/plans",
  component: Plans,
});
const router = createRouter({
  routeTree: rootRoute.addChildren([
    homeRoute,
    catalogRoute,
    applyRoute,
    plansRoute,
  ]),
  scrollRestoration: true,
});
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
export default function ShowcaseApp() {
  return <RouterProvider router={router} />;
}
