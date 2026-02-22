# CLAUDE.md — Nuwan Withanage Portfolio

## Who I Am
I'm **Nuwan Withanage**, a Staff Product Designer with 8+ years designing B2B SaaS products. I think in systems, ship with taste, and lead cross-functional design work. I'm building this portfolio to land a Staff or Principal Designer role at a Series B–D SaaS company.

---

## Project Goal
Build a **world-class personal portfolio website** that communicates:
- Strategic depth & systems thinking
- AI fluency & forward thinking
- Taste & craft at a high level

This is not a template. It should feel like a product a senior designer built — with intention, not decoration.

---

## Design System

### Colors
```
--bg: #080808
--surface: #111111
--surface-2: #161616
--border: #1e1e1e
--text: #f0f0f0
--text-muted: #555555
--text-mid: #999999
--accent: #c8ff00
```

### Typography
- **Display / Headings:** DM Sans, weight 300 — large, low line-height, negative letter-spacing
- **Body:** DM Sans, weight 300–400, 16–17px, line-height 1.7
- **Labels / Mono:** DM Mono, weight 300–400, uppercase with letter-spacing

### Motion Rules
- Fade + translateY(24px) on scroll reveal — subtle, not theatrical
- Custom cursor: 10px dot + lagging ring, mix-blend-mode: difference
- Hover states on cards: top accent line reveal, arrow translate
- Nav: glass blur on scroll past 60px
- **No** heavy JS animations, no particle effects, no 3D gimmicks

### Layout Principles
- Asymmetric grids — tension creates interest
- Generous negative space
- Full-bleed sections separated by 1px `#1e1e1e` borders
- Mobile-first responsive at 900px breakpoint

---

## Site Structure

```
/ Home
  ├── Hero — Name + positioning statement
  ├── Stats bar — seniority signals
  ├── Selected Work — 3 case studies
  ├── How I Work — 3 principles
  ├── About — human, opinionated
  └── CTA + Footer

/work/[project-slug]
  ├── Problem framing (before any UI)
  ├── My role + decisions owned
  ├── Process (selective — interesting parts only)
  ├── Outcomes with metrics
  └── What I'd do differently
```

---

## Current Projects (Placeholder)

| # | Name | Type | Key Signal |
|---|------|------|------------|
| 01 | **Meridian** | Enterprise dashboard redesign | Design system, 0→1, data viz |
| 02 | **Loops** | AI-powered workflow tool | AI/ML product, strategy, ambiguity |
| 03 | **Atlas** | Navigation & IA overhaul | Research-led, org influence, scaled product |

---

## Voice & Tone
- **Confident, not boastful** — let the work speak, use language that claims without overselling
- **Human, not corporate** — write like a sharp person, not a LinkedIn post
- **Specific over vague** — "reduced onboarding time by 60%" beats "improved user experience"
- Copy style: short sentences. Active voice. No filler words.

---

## Tech Stack
- **Framework:** Plain HTML/CSS/JS (single file per page for portability)
- No build tools required unless we add a framework later
- Fonts loaded via Google Fonts (DM Sans + DM Mono)
- No external JS libraries unless absolutely necessary
- All animations: CSS transitions + vanilla JS IntersectionObserver

---

## File Structure
```
/
├── CLAUDE.md           ← this file
├── index.html          ← homepage
├── work/
│   ├── meridian.html
│   ├── loops.html
│   └── atlas.html
├── about.html
└── assets/
    ├── images/
    └── icons/
```

---

## What to Prioritize When Building
1. **Performance** — no bloat, fast load, clean markup
2. **Typography precision** — spacing, sizing, weight contrast
3. **Interaction details** — cursor, hover states, scroll reveals
4. **Semantic HTML** — accessibility matters, it signals craft
5. **Consistency** — design tokens used everywhere, no magic numbers

---

## What to Avoid
- Generic AI-looking design (purple gradients, card grids with rounded corners everywhere)
- Overuse of the accent color `#c8ff00` — it's a *moment*, not a theme
- Bullet-point-heavy layouts — this portfolio uses prose and whitespace
- Stock photography or icon packs — illustration or code-drawn visuals only
- Any template-looking patterns — every section should feel considered

---

## Key Copywriting

**Hero headline:** Nuwan Withanage
**Hero subline:** Designing systems clarity and scalable growth for B2B SaaS products that earn trust at scale.

**Positioning:** Staff Product Designer · B2B SaaS · Systems Thinking · AI-forward

**CTA:** "I'm looking for teams who believe design is how you earn trust at scale — not just how you make things look good."

---

## How to Work With Me (Instructions for Claude Code)
- Always read this file before making changes
- Ask before making structural changes to layout or navigation
- Suggest improvements but implement what's asked
- When adding new sections, match the existing design token system exactly
- Keep components self-contained and well-commented
- If something looks off aesthetically, flag it — don't just ship it
