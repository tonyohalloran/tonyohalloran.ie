// All the facts in one place. Anything marked TODO(tony) is a placeholder
// awaiting the real thing — nothing ships until those are filled or cut.

export const links = {
  github: 'https://github.com/tonyohalloran',
  linkedin: 'https://linkedin.com/in/tony-o-halloran-38098a142',
  scholar: 'https://scholar.google.com/citations?user=ywfC3g4AAAAJ',
  substack: 'https://tonyo.substack.com',
};

// Unified writing/work stream. type: 'paper' | 'talk' | 'post' handled in pages.
export const papers = [
  {
    title: 'House Rules: Institutional Design in Multi-Agent LLM Code Markets',
    venue: 'ICML 2026 · AIWILD workshop, Seoul',
    date: '2026-07',
    url: '', // TODO(tony): paper/poster link
    note: 'Give agents a marketplace and change one rule at a time: the scoring rule, public reviews, how payment settles. Behaviour reorganises around each change. The market is downstream of the rulebook.',
  },
  {
    title: 'HashEvict: Pre-Attention KV Cache Eviction via Locality-Sensitive Hashing',
    venue: 'NeurIPS 2024 · RegML workshop',
    date: '2024-12',
    url: 'https://arxiv.org/abs/2412.16187',
    note: 'Decide which tokens to evict before attention, not after.',
  },
  // TODO(tony): two more papers pending — details in private notes, add when public.
];

// One talk/podcast intentionally omitted (Tony's call, Jul 2026).
export const talks: { title: string; venue: string; date: string; url: string; note: string }[] = [];

// Footer badge — current rotation.
export const smashMains = ['R.O.B.', 'Pikachu', 'Steve'];

// /rides — route notes are DRAFT copy in Tony's register; he edits before launch.
export const rides = [
  {
    name: "Col d'Ares",
    stats: '~90 km · 1,500 m', // TODO(tony): real numbers from your files
    line: 'The proper one. Long, steady, and France at the top if you keep going.',
  },
  {
    name: 'Garrotxa volcanoes',
    stats: '~80 km · 1,100 m', // TODO(tony)
    line: 'Riding through extinct volcano country. The scenery does not care about your watts.',
  },
  {
    name: 'Cap de Creus',
    stats: '~120 km · 1,400 m', // TODO(tony)
    line: 'Wind. All of it. Dalí lived out here, which explains a lot.',
  },
  {
    name: 'Banyoles lake loop',
    stats: '~50 km · flat', // TODO(tony)
    line: 'Recovery spin around the lake, or so the plan says.',
  },
];

// Every bike I have ever owned, as config files.
// TODO(tony): the real history, oldest first — each bike gets a file.
// Until then: the archive opens with one lost record and the current build.
export const bikes = [
  {
    file: 'bike_01.yaml',
    yaml: `frame: unknown        # records lost, circa the stabilisers era
acquired: cork
status: outgrown
survived_by: this file`,
  },
  {
    file: 'tarmac_sl8.yaml',
    yaml: `frame: Specialized Tarmac SL8
groupset: dura-ace di2
wheels: farsports
fit: custom          # money well spent
location: girona
status: the one`,
  },
];

// /shelf — the actual current e-reader load (found via the epubs on disk,
// Jul 2026). Verdicts are DRAFT copy — Tony edits to taste.
export const shelf = [
  { title: 'The Rider — Tim Krabbé', verdict: 'The best 150 pages ever written about riding a bike too hard.' },
  { title: 'Small Things Like These — Claire Keegan', verdict: 'Short, Irish, devastating in the gentlest possible way.' },
  { title: 'Klara and the Sun — Kazuo Ishiguro', verdict: 'An artificial mind, written with more care than most real ones get.' },
  { title: 'Reasons and Persons — Derek Parfit', verdict: 'Reading it slowly. Being rearranged by it slowly.' },
  { title: 'The Experience Machine — Andy Clark', verdict: 'Your brain is a prediction engine; the title is a Nozick joke and it commits.' },
  { title: 'The Scent of Time — Byung-Chul Han', verdict: 'An argument for slowness that I read too fast.' },
  { title: 'Right Concentration — Leigh Brasington', verdict: 'The practical manual for the jhānas. I practice; this is the map.' },
  { title: 'Moral Ambition — Rutger Bregman', verdict: 'Stop wasting your talent, it says. I read it on a work trip, so.' },
  { title: 'Golden Age — Wang Xiaobo', verdict: 'Verdict pending.' }, // TODO(tony): real verdict
];

// /hikes — best hikes, with photos. Drop images into public/images/hikes/
// and list the filenames here; empty array shows a "photos to come" slot.
// TODO(tony): add the Pyrenees one and the Irish one when they have a name,
// a line, and at least one photo — one real hike beats three stubs.
export const hikes = [
  {
    name: 'Seoraksan',
    region: 'South Korea · the week of ICML, via Sokcho',
    line: 'Conference in Seoul, granite in Sokcho. Only one of them had a cable car.', // DRAFT — Tony edits
    images: [] as string[],
  },
];

// The warm films canon. Ten slots; eight known loves, two open.
export const films = [
  { title: 'Paddington 2', line: 'The doctrine itself. Craft, heart, marmalade.' },
  { title: 'School of Rock', line: 'Rewatched more times than is defensible. All of them worth it.' },
  { title: 'The Grand Budapest Hotel', line: 'Every frame built by hand.' },
  { title: 'Hot Fuzz', line: 'The greater good.' },
  { title: 'The Commitments', line: 'Dublin soul. Non-negotiable.' },
  { title: 'In Bruges', line: 'The funniest sad film ever made in Belgium.' },
  { title: 'Waking Ned Devine', line: 'A whole village commits fraud and you root for every one of them.' },
  { title: 'Almost Famous', line: 'Music-driven, warm, and it knows it.' },
  { title: '(vacant)', line: 'Auditions ongoing. The bar is Paddington 2.' },
  { title: '(vacant)', line: 'Reserved. Lobbying is welcome and has never once worked.' },
];
