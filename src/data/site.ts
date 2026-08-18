// All the facts in one place. Everything marked TODO(tony) is waiting for
// your words — pages render cleanly with those fields empty, so fill them
// whenever. Find every open slot with:  grep -rn "TODO(tony)" src/

export const links = {
  github: 'https://github.com/tonyohalloran',
  linkedin: 'https://linkedin.com/in/tony-o-halloran-38098a142',
  scholar: 'https://scholar.google.com/citations?user=ywfC3g4AAAAJ',
  substack: '', // TODO(tony): real Substack URL (tonyo.substack.com was someone else's)
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
  // TODO(tony): two more papers pending — add when public.
];

// One talk/podcast intentionally omitted (Tony's call, Jul 2026).
export const talks: { title: string; venue: string; date: string; url: string; note: string }[] = [];

// Footer badge — current rotation.
export const smashMains = ['R.O.B.', 'Pikachu', 'Steve'];

// /rides — stats and one-liners are yours to write; empty fields don't render.
// TODO(tony): per ride — real stats ('92 km · 1,540 m') and a one-line review.
export const rides: { name: string; stats?: string; line?: string }[] = [
  { name: "Col d'Ares" },
  { name: 'Garrotxa volcanoes' },
  { name: 'Cap de Creus' },
  { name: 'Banyoles lake loop' },
];

// Every bike I have ever owned, as config files.
// TODO(tony): the real history, oldest first — one entry per bike, e.g.
//   { file: 'first_bike.yaml', yaml: 'frame: ...\nacquired: ...\nstatus: outgrown' }
export const bikes: { file: string; yaml: string }[] = [
  {
    file: 'fleet.yaml',
    yaml: `status: archive under reconstruction
source: memory, photographs, one aggrieved parent
entries: pending`,
  },
];

// /shelf — the actual current e-reader load (from the epubs on disk, Jul 2026).
// TODO(tony): one-line verdicts, in your voice; empty verdicts don't render.
export const shelf: { title: string; verdict?: string }[] = [
  { title: 'The Rider — Tim Krabbé' },
  { title: 'Small Things Like These — Claire Keegan' },
  { title: 'Klara and the Sun — Kazuo Ishiguro' },
  { title: 'Reasons and Persons — Derek Parfit' },
  { title: 'The Experience Machine — Andy Clark' },
  { title: 'The Scent of Time — Byung-Chul Han' },
  { title: 'Right Concentration — Leigh Brasington' },
  { title: 'Moral Ambition — Rutger Bregman' },
  { title: 'Golden Age — Wang Xiaobo' },
];

// /hikes — drop images into public/images/hikes/, list filenames per hike.
// TODO(tony): a line for Seoraksan, plus the Pyrenees one and the Irish one
// when they have a name, a line, and at least one photo.
export const hikes: { name: string; region: string; line?: string; images: string[] }[] = [
  {
    name: 'Seoraksan',
    region: 'South Korea · the week of ICML, via Sokcho',
    images: [],
  },
];

// The warm films canon — ten slots, when you write them. The section stays
// hidden until this has entries.
// TODO(tony): { title: 'Paddington 2', line: 'why it belongs' }, ...
export const films: { title: string; line: string }[] = [];
