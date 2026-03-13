# Angelfire Tab Necromancer — Brief

## Goal
Build a one-night prototype web app that turns a hummed/uploaded riff into a lovingly authentic late-90s guitar tab shrine.

## Product shape
- Single-page playable experience with strong Geocities / Angelfire / Hypnospace energy
- User can:
  - hum into microphone or upload a short audio file
  - get a generated shrine page with song title, ASCII tab, fake forum drama, blinking badges, backing track, and replayable permalink
  - print/download a zine-friendly layout via browser print stylesheet
- Hard ML can be faked/simplified; the feeling matters more than accuracy

## Scope decisions
- No server; local-only Vite app for speed and shareability
- Audio analysis will be heuristic/faux-mystical:
  - inspect duration / filename / average volume shape from Web Audio when possible
  - combine with seeded random generation for title, tuning, tab phrases, and forum lore
- Backing track will be synthesized in-browser with Web Audio from the generated riff data
- Permalink will serialize shrine state into URL hash
- Printable zine/PDF will be implemented as a dedicated print layout + one-click print button

## Build phases
1. Scaffold app and author brief
2. Build visual system + retro shrine shell
3. Implement input pipeline (mic/upload)
4. Implement riff necromancy generator (titles, tabs, forum drama, badges)
5. Implement backing track synthesis + replay
6. Implement permalink hydration and print/zine mode
7. Verify with build + local browser run

## Verification plan
- After each phase, run either build or quick smoke checks
- Final proof includes:
  - file paths changed
  - commands run
  - npm build output
  - exact launch command
  - browser verification that the app loads and generates a shrine
