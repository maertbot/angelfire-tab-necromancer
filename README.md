# Angelfire Tab Necromancer

A local-only web app that turns a hummed, recorded, or uploaded riff into an absurdly sincere late-90s guitar tab shrine.

Wave 2 is aimed at the actual ceiling the Wave 1 build exposed: making the output feel more like **your riff became this shrine**, not just “a cool seeded shrine generator happened.” The app now surfaces a riff reading, explains why the shrine took the shape it did, differentiates the four shrine families more aggressively, and adds post-reveal behaviors so one riff can become a small collectible ritual instead of a single page refresh.

## What it does now
- Record a 6-second mic riff or upload an audio file
- Includes **3 instant demo riffs** for out-of-the-box exploration
- Samples simple audio traits and turns them into a stable recipe using:
  - duration
  - RMS / peak
  - zero-crossing rate
  - attack
  - sustain tail
  - brightness proxy
  - density proxy
- Shows a **riff reading** panel with ceremonial-but-causal descriptors
- Adds an expandable **why this shrine happened** explanation block inside the shrine
- Generates deterministic shrine variants with:
  - stronger motif recurrence in the tab
  - phrase / answer / dropout behavior tied more directly to the sampled input
  - curated song-fragment templates so the chord names, visible tab, section blurbs, and comments agree more often
  - more section contrast in the lo-fi backing track
- Makes the four shrine archetypes feel more distinct:
  - catacomb archive
  - food-court heartbreak fanpage
  - gearhead tape dossier
  - youth-group warning page
- Adds a real second act:
  - **sibling reality / lineage strip** for variant jumping
  - **pin current** for compare-minded browsing
  - **save relic** to local browser storage
- Adds more keeper-worthy output hooks:
  - rare pull labels
  - stronger hero lines
  - keeper-card / fold-out mini zine region
- Preserves **deterministic permalink replay** from a compact recipe + reroll index
- Keeps a print-friendly output for PDF / zine saving

## Stack
- Vite
- Vanilla JS
- Web Audio API
- No backend

## Run locally
```bash
cd /Users/maertbot/Projects/angelfire-tab-necromancer
npm install
npm run dev -- --host 127.0.0.1 --port 4173
```

Then open:
- `http://127.0.0.1:4173/`

## Build / preview
```bash
npm run build
npm run preview -- --host 127.0.0.1 --port 4173
```

## Best Wave 2 demo path
1. Open the app.
2. Pick a demo from **Demo ritual**.
3. Click **Use surprise demo**.
4. Read the **Riff reading** box before scrolling.
5. Open **why this shrine happened** inside the generated page.
6. Click **reroll same riff** once or twice, or use the **Sibling realities** strip.
7. Click **pin current** to compare a favorite against another sibling reality.
8. Click **save relic** to keep a local favorite.
9. Click **copy permalink** and open it in a fresh tab.
10. Optionally click **play backing track** or **print zine / pdf**.

## Verification checklist
1. **Demo generation**: a shrine should render with title, reading chips, causal explanation, lineage strip, tab, lore, and badges.
2. **Variant divergence**: rerolling the same riff should preserve family resemblance while shifting title/archetype/editorial treatment.
3. **Permalink trust**: copied URL should rehydrate the same variant in a fresh tab.
4. **Hash resilience**: a broken hash should fail gracefully back to a usable state/message.
5. **Favorites**: saving a relic should add it to the local saved list and survive reload in the same browser.
6. **Pin/compare**: pinning a current shrine should visibly mark comparison state in the lineage strip.
7. **Backing playback**: clicking play should produce the same structural identity for the same shrine.
8. **Print path**: print dialog should open with simplified readable output.
9. **Mobile-ish layout**: key controls and first-screen payoff should still be usable on narrow widths.

## Honest limitations
- This is still **procedural shrine fiction**, not transcription or pitch detection.
- The current pass uses a small curated library of archetype-aware song fragments so demo outputs stay musically legible; it is intentionally biased toward coherent fake songwriting over open-ended tab chaos.
- The “riff reading” is based on lightweight sampled features, not ML audio understanding.
- Backing playback keeps deterministic structure, but noise hits are still live-generated, so texture is not sample-for-sample identical across button presses.
- Favorites are local browser storage only; there is no sync.
- Archetypes are materially more distinct than Wave 1, but this is still a single-page artifact generator, not a large authored archive.
- Mic decoding can still fail in some browsers depending on `MediaRecorder` output/decoder support.

## Notes
- The app stays intentionally fake-ceremonial: the magic is rule-bound enough to feel causal, but not so technical that it stops feeling haunted.
- Deterministic sharing is still based on recipe + reroll, not serialized shrine HTML.
- The keeper-card area is optimized for screenshots / print / PDF, not social API export.
