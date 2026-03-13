# WAVE 2 PLAN — Angelfire Tab Necromancer

## What I reviewed
This plan is based on the **current post-Wave-1 build**, not the original brief alone.

I reviewed:
- `/Users/maertbot/Projects/angelfire-tab-necromancer/README.md`
- `/Users/maertbot/Projects/angelfire-tab-necromancer/BRIEF.md`
- `/Users/maertbot/Projects/angelfire-tab-necromancer/src/main.js`
- `/Users/maertbot/Projects/angelfire-tab-necromancer/src/style.css`

I also ran the actual app locally via Vite and walked through the current experience in-browser.

---

## Fresh-eyes verdict
Wave 1 succeeded at the hard part most retro-web experiments miss: **it is now a coherent artifact, not just a skin.**

The current build already has:
- a convincing late-90s visual language
- deterministic shrine generation and rerolls
- a real sense of canon/history/worldbuilding
- enough interaction to feel toy-like in the good way
- enough density to reward scrolling

It is no longer “ha ha, blinking badges.” It has the beginnings of an actual **micro-cult object**.

But the biggest remaining ceiling is now obvious:

> **The shrine fiction is stronger than the riff transformation.**

The app currently excels at shrine-writing and vibe-consistency, but the user’s musical offering still doesn’t feel meaningfully *translated* into the resulting page. The app feels like a smart seeded fiction engine wearing an audio ritual frame, rather than a haunted tab machine whose output could only have come from *this* riff.

That is the Wave 2 frontier.

---

## Biggest remaining ceilings after Wave 1

### 1. The input-to-output causality is still too weak
The audio features influence things, but as a first-time user I still mostly experience:
- “I clicked a cool generator”
not
- “my riff became this cursed relic.”

The app needs stronger perceptible mapping from input → tab contour → rhythm feel → shrine tone.

### 2. The page has one macro-beat after reveal
The reveal is fun, but after the shrine appears the user mostly scrolls and reads. There is no second-act deepening beyond reroll/play/print.

Wave 2 needs post-reveal verbs and discoveries.

### 3. The shrine families are distinct, but not distinct *enough*
The archetypes are a strong idea. In practice they currently read as layout-and-label variants more than truly different editorial objects.

A food-court heartbreak page, gear dossier, and youth-group warning page should feel authored by different humans with different obsessions.

### 4. The musical surface is evocative, but not yet legible as “song memory”
The backing track is charmingly synthetic, but it currently suggests mood more than remembered composition. The tab is denser and better than Wave 0, but it still often reads as procedural texture before it reads as “I can almost imagine the riff.”

### 5. The artifact does not yet produce enough keeper-worthy moments
Cult objects need quotable lines, screenshots, favorite modes, tiny myths, and “this specific one killed me” moments. Right now the app produces many good pages, but not enough truly unforgettable pages.

### 6. The UX still assumes a generous desktop user
The experience is visually rich on desktop, but the current artifact remains long, dense, and somewhat same-weighted. On phone or low-attention use, the hook-to-payoff path is still heavier than it should be.

---

## The 10x Wave 2 improvement plan

## Wave 2 thesis
**Turn the app from a deterministic shrine generator into a more convincing riff-to-memory transmutation machine.**

The user should feel that the app:
1. heard something specific,
2. mythologized it,
3. turned it into an alternate-internet relic,
4. and gave them reasons to linger, compare, share, and keep a favorite.

---

## Workstream 1 — Make the riff feel causally present

### Goal
Increase the user’s confidence that the output emerged from their input, not adjacent randomness.

### Build directions
1. **Expose a “riff reading” panel before or during reveal**
   - Show extracted descriptors derived from actual features:
     - attack shape
     - sustain length
     - density
     - brightness/grit proxy
     - likely emotional lane
   - Phrase them in ceremonial language, but tie them to observable feature changes.

2. **Map feature bands to visible tab structure more aggressively**
   - Low/feral inputs should create chunkier, more repetitive tab cells.
   - Shimmery/sustained inputs should create drones/open-string smear/sparser phrase repetition.
   - Rhythm maps should more clearly reflect amplitude contour.

3. **Add “why this shrine happened” inspectability**
   - Tiny expandable panel:
     - “long sustain pushed it toward shimmer heartbreak”
     - “higher peak and lower zero-crossing favored basement feral over glassy lead”
   - Not too technical. Just enough to make the magic feel rule-bound.

4. **Introduce 2–3 recognizable motif transforms**
   - Repetition engine
   - inversion/answer phrase
   - dropout bar
   These should recur enough to make pages feel musical, not statistically decorated.

### Outcome standard
A user should be able to submit two audibly different offerings and say: “yeah, I can tell why these became different shrines.”

---

## Workstream 2 — Differentiate the shrine archetypes into true editorial worlds

### Goal
Make each archetype feel like a different species of discovered web object.

### Upgrade each current archetype

#### 1. Catacomb archive
Lean into archivist pathology.
- marginalia
- version disputes
- mirror provenance
- update diffs
- “correction added 08/14/01” flavor

#### 2. Food-court heartbreak fanpage
Lean into teenage emotional specificity.
- more diaristic copy
- breakup-coded captions
- over-designed image shrine area
- “song lyric that definitely means one person” behavior

#### 3. Gearhead tape dossier
Lean into forensic musician obsession.
- pickup selector rumors
- amp settings grids
- mic placement myths
- take-comparison notes
- “this cannot be chorus, it’s double-tracked” discourse

#### 4. Youth-group warning page
Lean into the contradiction.
- moral panic rhetoric colliding with obvious fandom
- testimony cards
- “we do not endorse this riff / here is the complete tab” energy

### Structural ask
Do not just relabel sections. Give each archetype unique:
- copy style
- density profile
- module order
- favorite badges/stamps
- interaction affordances
- likely emotional register

### Outcome standard
A screenshot with the title cropped out should still let a user immediately identify which archetype they got.

---

## Workstream 3 — Add a second act after reveal

### Goal
Give the user something to do after the initial laugh/gasp.

### Build directions
1. **A/B shrine comparisons**
   - Let the user pin the current variant and compare it against rerolls.
   - “Which fake internet remembered your riff better?”

2. **Favorite / save locally**
   - Save a small local gallery of favorite shrines.
   - This turns the app from one-shot generator into collectible ritual.

3. **Variant lineage view**
   - Show variant 1, 2, 3 as sibling realities from the same riff recipe.
   - Tiny lineage strip: same offering, different archivists/mirrors/tone.

4. **Ritual reveal staging**
   - Don’t instantly dump the whole shrine every time.
   - Sequence it:
     1. reading the offering
     2. recovered band/song match
     3. shrine reveal
   - Fast enough to stay playful, staged enough to feel ceremonial.

### Outcome standard
The user should want to spend 2–5 minutes with one riff, not 20 seconds.

---

## Workstream 4 — Make the musical simulation more memorable without chasing “real transcription” yet

### Goal
Improve musical plausibility and emotional specificity while preserving the fake-ceremonial concept.

### Build directions
1. **Phrase-level tab grammar**
   - Use recurring phrase cells across strings instead of fully fresh token spray.
   - Better reuse = more “this is a song fragment” energy.

2. **Section contrast in backing**
   - intro, verse, chorus, turnaround should sound actually distinct.
   - Change density, octave emphasis, drum restraint, shimmer, and note duration by section.

3. **Micro-hooks in backing**
   - Add one tiny memorable contour per generated shrine.
   - The user should be able to hum back a shape, even if crude.

4. **Dynamic drum identity**
   - Current drums are charming but generalized.
   - Give patterns a scene-specific attitude: lazy sloshy hats, straight chug pulse, shy shimmer tick, etc.

### Outcome standard
The backing should still be lo-fi and synthetic, but should cross from “ambient accompaniment” toward “fake remembered arrangement.”

---

## Workstream 5 — Create screenshot bait and cult-memory hooks

### Goal
Increase the rate of pages that users want to save, send, or mention later.

### Build directions
1. **Author better quotables**
   - Forum posts and guestbook lines need a higher ceiling.
   - Add rarer lines with real sting, pathos, or scene-truth.

2. **Rare events / legendary pulls**
   - Ultra-rare badges
   - cursed mirror status
   - missing-tab fragments
   - disputed-authorship comment chain
   - “only on certain seeds” curiosities

3. **Signature hero moments**
   - Better title generation ceiling
   - occasional absurd-perfect combinations of title + band + line + badge

4. **One killer “keeper card” export concept later in Wave 2**
   - Not social platform integration yet
   - Just a beautiful screenshotable fold-out or “archive card” region

### Outcome standard
At least some generations should create the reaction: “I need to keep this one.”

---

## Workstream 6 — Improve legibility and pacing on smaller screens

### Goal
Preserve the density while reducing fatigue.

### Build directions
1. Stronger hierarchy in the shrine
   - clearer primary/secondary/tertiary sections
   - one obvious “start reading here” zone

2. Collapse or summarize low-priority sections on mobile
   - preserve richness, reduce wall-of-content feeling

3. Make the tab block feel less punishing on phone
   - horizontal pan affordance, chunk tabs into bars, or sectionized tab cards

4. Keep the top of page payoff tighter
   - the first generated screenful should hit immediately

### Outcome standard
A mobile user should still get the joke, the mood, and the key reward without scrolling a novel.

---

## 12+ incremental tests for Wave 2
These mix code/system checks with actual user-experience walkthroughs that should be manually performed during development.

## Code/system tests

### 1. Deterministic recipe test
**Method:** Generate from the same synthetic input twice with same vibe string and reroll index.
**Pass:** title, seed, archetype, canon band, tab block, and visible labels match exactly.

### 2. Variant divergence test
**Method:** Same input, reroll 0/1/2.
**Pass:** shared root identity remains legible, but title/archetype/canon details and page flavor shift in meaningful ways.

### 3. Feature-to-mood mapping test
**Method:** Feed at least three synthetic buffers representing feral, shimmery, and moody lanes.
**Pass:** the descriptor panel, tab density, backing style, and chosen copy pools visibly differ by lane.

### 4. Permalink hydration test
**Method:** Generate, reroll, copy URL, open in fresh tab.
**Pass:** restored page matches variant number, title, seed, and core content exactly.

### 5. Invalid hash resilience test
**Method:** Load page with truncated/corrupted hash.
**Pass:** app fails gracefully, returns to empty state or safe message, no blank screen.

### 6. No-audio-failure test
**Method:** Upload unsupported/bad audio blob and deny mic permission.
**Pass:** user gets clear recovery path; demo mode still feels like first-class fallback, not apology mode.

### 7. Mobile layout regression test
**Method:** Run at ~390x844 and ~320x568.
**Pass:** first screen remains attractive; primary controls are visible; shrine sections don’t become unreadable sludge.

### 8. Print stylesheet test
**Method:** Open print preview on a generated shrine.
**Pass:** no neon-on-black disasters, core content preserved, zine panel readable.

### 9. Backing playback repeatability envelope test
**Method:** Play backing three times on same shrine.
**Pass:** melodic/structural identity remains the same even if noise texture varies.

### 10. Performance smoke test
**Method:** Generate 10 shrines in one session with rerolls and one reload.
**Pass:** no runaway lag, no progressively broken audio, no UI stall on render.

## Simulated user-experience walkthroughs

### 11. “Zero-friction curious visitor” walkthrough
**I actually walked a version of this using the surprise demo.**
**Flow:** Open app → use surprise demo → inspect shrine.
**Current finding:** hook is strong; payoff is immediate; shrine density is satisfying.
**Wave 2 pass:** first-time user can articulate what was cool within 10 seconds.

### 12. “Same riff, alternate universe” walkthrough
**I actually walked this by rerolling the current shrine.**
**Flow:** Generate shrine → reroll same riff.
**Current finding:** reroll works and is meaningfully different, but the family resemblance could be more musically legible.
**Wave 2 pass:** user feels they are seeing sibling myths of the same song, not just another cool page.

### 13. “Permalink trust” walkthrough
**I actually walked this by opening the hashed URL in a fresh tab.**
**Flow:** Generate → copy/open permalink in new tab.
**Current finding:** restoration works; this is a real strength now.
**Wave 2 pass:** restoration also preserves enough visible identity markers that users trust what happened instantly.

### 14. “Desktop musician skeptic” walkthrough
**Flow:** user with real guitar-tab literacy scans title, tuning, tab block, comments, backing logic.
**Pass:** they still know it’s fictional, but they grin because the structure feels musically observant rather than random.

### 15. “Nostalgia civilian” walkthrough
**Flow:** user doesn’t care about guitar correctness, only emotional internet archaeology.
**Pass:** they find one line, badge, or canon detail that feels uncannily true to a lost web era.

### 16. “Phone in bed” walkthrough
**Flow:** open on phone-sized viewport after midnight, use demo, scroll once.
**Pass:** artifact still lands as moody/funny/beautiful rather than cluttered.

### 17. “Upload own file with emotional investment” walkthrough
**Flow:** user uploads a rough memo riff and expects something personal.
**Pass:** result feels more specific than generic; user can identify at least 2 visible traits that seem plausibly derived from their sound.

### 18. “Compare favorites” walkthrough
**Flow:** generate one shrine, reroll twice, choose favorite.
**Pass:** user has language for why variant B is better, which means the variants are meaningfully editorialized.

### 19. “Print and keep” walkthrough
**Flow:** generate unusually good shrine → print/save PDF.
**Pass:** printed output feels like an object worth keeping, not a debug convenience.

### 20. “Repeat session charisma” walkthrough
**Flow:** use all 3 demos in sequence.
**Pass:** each one lands in a meaningfully distinct tonal territory; user does not feel they have seen the entire trick after shrine #2.

---

## User personas and disappointment modes

## 1. The Scene Archaeologist
**Who they are:** Loves web ephemera, old forums, Geocities/Hypnospace texture, internet ruins.
**What they want:** uncanny historical specificity.
**Disappointment mode:** “This is aesthetically right but too generator-y. It doesn’t yet have enough weird human residue.”

## 2. The Working Musician / Guitar Nerd
**Who they are:** Reads tabs, knows gear clichés, notices fake musical structure fast.
**What they want:** enough pattern logic to believe in the illusion.
**Disappointment mode:** “Cool premise, but the tab/backing relationship still feels decorative rather than songlike.”

## 3. The Casual Nostalgia Tourist
**Who they are:** Wants immediate fun, no setup pain, no technical patience.
**What they want:** a quick magical payoff and one memorable joke/feeling.
**Disappointment mode:** “This is neat, but it’s a lot of page. I got the bit before I got the best part.”

## 4. The Sentimental Creator
**Who they are:** Uploads their own riff or melody memo and wants emotional transmutation.
**What they want:** to feel seen by the machine.
**Disappointment mode:** “It made something cool, but not something that feels like *my* riff became a shrine.”

## 5. The Collector / Share-Sender
**Who they are:** Loves favorites, rare pulls, collectible outcomes, weird URLs.
**What they want:** reasons to keep, compare, and send specific generations.
**Disappointment mode:** “I enjoyed this, but I don’t yet feel compelled to save a particular one.”

---

## What NOT to build yet
This matters. Wave 2 should deepen the artifact, not bloat it.

### Do NOT build yet:
1. **Real ML transcription or pitch detection ambition creep**
   - Not needed yet.
   - The app’s charm depends on evocative transformation, not technical correctness.

2. **Backend accounts, cloud storage, or social feeds**
   - Too early.
   - Local collectible ritual is enough for now.

3. **Too many new shrine families at once**
   - Better to make 4 archetypes truly singular than add 8 shallow ones.

4. **Full DAW-like audio controls**
   - This should stay toy-ritual, not become a production tool.

5. **Huge content-pool sprawl without better editorial logic**
   - More adjectives is not the answer.
   - Better composition rules are the answer.

6. **Public sharing gimmicks before keeper-worthiness exists**
   - First increase the percentage of pages people genuinely want to keep.
   - Then think about exports/sharing.

---

## What would make this cross into cult-favorite artifact territory
The app crosses the line when it reliably produces the following reaction:

> “This is funny for 5 seconds, but then strangely beautiful for 5 minutes.”

More concretely, it becomes a cult favorite when:
- users can tell their input mattered
- archetypes feel authored, not skinned
- at least 1 in 5 runs produces a line/title/page combination people want to screenshot
- rerolls feel like alternate histories of the same lost song
- the backing/tab combo creates a faint but real illusion of remembered music
- the app contains enough rarity and specificity that people compare favorite pulls
- the object feels too lovingly made to dismiss as a one-joke generator

The target is not “polished app.”
The target is:

**“a weird little internet machine that a certain kind of person becomes irrationally evangelical about.”**

---

## Suggested Wave 2 build order

### Phase 1 — Stronger causality
- descriptor panel
- feature-to-tab mapping improvements
- visible “why this happened” layer

### Phase 2 — Archetype differentiation
- rewrite content pools per archetype
- unique module sets/order
- stronger editorial voices

### Phase 3 — Better second act
- staged reveal
- compare/pin variants
- local favorites

### Phase 4 — Musical plausibility pass
- phrase grammar
- sectional backing contrast
- stronger motif recurrence

### Phase 5 — Cult-memory polish
- rare events
- better quotables
- keeper-card/export region

---

## Final blunt assessment
Wave 1 already proved the premise is real.

Wave 2 should **not** chase “more stuff.” It should chase **stronger conversion of riff into myth**.

If Wave 2 nails that, this stops being merely a stylish prototype and starts becoming the kind of web artifact musicians, nostalgists, and internet-art weirdos send each other with the message:

> “You have to try this. It weirdly understands something.”
