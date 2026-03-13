# Angelfire Tab Necromancer — Structural Overhaul

## Problem
The human-voice pass added good surface noise, but the underlying template is still perfectly rigid. Every shrine is the same shape, same section order, same lore template, same title cadence. The skeleton is a machine even when the flesh is chaotic.

## North Star
Each shrine should feel like a different person made it. Not a different fill-in-the-blank from the same template — a different person with different priorities, different HTML skills, and different ideas about what matters.

---

## 20 Implementation Items

### 1. Shrine Title Diversity
Replace the current [Atmospheric-Noun][Noun][Document-Type] formula with a weighted mix:
- 30% blunt/functional: "Nirvana - Heart Shaped Box TAB", "[bandname] chords", "wonderwall tab (CORRECT VERSION)"
- 20% current atmospheric style (keep some)
- 20% minimal: "untitled", "track 3", "new song demo", "that one about the parking lot"
- 15% overly specific: "the riff from the 9/14 show", "bridge section FIXED", "intro only sorry"
- 15% broken/weird: "asdfjkl guitar", "DELETE THIS", "test page do not link", "??????"

### 2. Break the Lore Mad-Libs
The current 4-paragraph lore template must be dismantled. Replace with a LORE FRAGMENT system:
- Create 30+ individual lore fragments of varying length (1 sentence to 3 paragraphs)
- Each shrine randomly selects 1-5 fragments (weighted toward 2-3)
- Some fragments are mundane: "They played Thursdays at the VFW."
- Some are detailed: multi-paragraph stories
- Some are contradictory: "The band broke up in 2000." next to "They played a show in 2002 but nobody talks about it."
- Some are just metadata: "Raleigh, NC. 1998-2001."
- The current fill-in-the-blank sentences ("usually listed as track [N]", "one tape rip reversed the order", "this shrine got mirrored by [user] after two earlier pages died") must be broken up — use at most ONE of these per shrine, not all three every time.

### 3. Kill Repeated Verbatim Lines
These lines appear on every single shrine and must be either pooled or removed:
- "Whoever kept this page took the clean guitar way too personally." → pool of 20+ closing lines, or 40% chance of no closing line
- "looks like it was updated between Orange Julius shifts" → pool of 20+ keeper descriptions, or sometimes just the username with no editorial
- "though one tape rip reversed the order and somebody's flyer used another title" → use on max 20% of shrines
- "after two earlier pages died" → use on max 30% of shrines

### 4. Overhaul "WHY THIS SHRINE HAPPENED"
The current implementation shows raw analysis-engine sentences verbatim. Fix:
- Put this behind a `<details>` disclosure by default (collapsed)
- Rewrite the 4 stock sentences into 15+ varied phrasings
- Sometimes replace with a one-liner: "nobody knows why this one survived"
- Sometimes omit entirely (30% of shrines)

### 5. Variable Page Structure
This is the most important change. Create 4-5 shrine "archetypes" that have genuinely different section orders and content:

**Archetype A: "Tab Dump" (25%)**
- Tab is the FIRST thing on the page, right after the title
- Maybe 1-2 comments below
- No lore section, no gear section, minimal framing
- Like someone just pasted a tab and left

**Archetype B: "Obsessive Shrine" (25%)**
- Current full structure but with MORE: extra lore, multiple gear sections, long comment threads
- This is the "someone cared too much" page

**Archetype C: "Fan Page" (20%)**
- Band info and lore come first, tab comes late or is secondary
- Emphasis on band history, scene context, member drama
- Tab might be incomplete or labeled "coming soon"

**Archetype D: "Forum Rip" (15%)**
- Presented as a forum thread that got saved
- Comments/discussion is the main content
- Tab might appear mid-thread as a reply
- Different visual framing (numbered posts, timestamps)

**Archetype E: "Stub / Dead Page" (15%)**
- Very short: just a title, maybe a broken tab, one comment
- "this page under construction", "more tabs coming soon (last updated 1999)"
- Some sections explicitly missing: "tab section unavailable"

### 6. Variable Tab Length
Instead of always 4 bars:
- 20% → 2 bars (just a riff fragment)
- 40% → 4 bars (current, fine for a verse/chorus section)
- 20% → 8 bars (a longer passage)
- 10% → 1 bar (literally just the main lick)
- 10% → "tab incomplete" or "transcription in progress — check back"

### 7. Fix Song Title Cadence
New title generation:
- Pull from a much larger word pool, not just atmospheric-compound + noun
- Add simple patterns: single words, "the [noun]", "[name]'s [thing]"
- Add functional patterns: "intro riff", "main riff tab", "chorus section"
- Add scene-specific: "Carrboro 9/14", "VFW set closer", "the slow one"
- Reduce hyphenated compounds by 80% in title generation

### 8. Simplify Webring Names
Replace elaborate names with period-accurate ones:
- "Guitar Tab Ring", "NC Music Links", "Punk Pages Webring", "Alternative Music Ring", "Tab Archive Ring", "Indie Rock Pages", "Band Homepage Ring", "[City] Music Scene Ring", "Guitar Players Ring"
- Keep ~20% elaborate ones for variety

### 9. Expand Username Pool to 50+
Add many more period-accurate usernames:
- Simple: "mike_g", "chris1999", "guitardude", "emily_nc", "anonymous", "admin"
- AIM-style: "sk8ordie420", "punxnotdead", "xXemeralddreamXx"
- Scene-specific: "catscradlekid", "trianglerock", "pdxbasement"
- Realistic junk: "user12847", "default_user", "test_account"
- Mix in and weight toward the simpler ones

### 10. Expand Location Pool to 30+
Add many more posting locations:
- "the computer lab", "work", "dorm room", "my room", "dial-up", "library", "friend's house", "the office when nobody's looking", "mom's computer", "my dorm", "campus", "AOL", "WebTV", "behind the counter at [store]", "the basement", "coffeeshop wifi" (slightly anachronistic but period-adjacent), "netscape", "compuserve", "juno email terminal"

### 11. Fix Member Name Patterns
Replace the current uniform first-last pattern:
- First name only: "Mike", "Chris", "Sarah"
- First + last initial: "Jake R.", "Chris S."
- Nickname: "Hambone", "Twig", "Squeak"
- Qualified: "this guy Brian who also plays in [other band]"
- Partial: "Jake (sometimes)", "whoever was around"
- Unknown: "we don't know the drummer's real name"
- Band roles should vary too: not always guitar/bass/drums — add "guitar/screaming", "everything", "bass (left halfway through)", "drums and yelling"

### 12. Make Forum Comments Dumber
The existing smart comments need to be diluted further:
- Add 30+ simple tab-site forum posts: "what tuning??", "anyone got this in GUITAR PRO", "the solo starts at like 2:14", "is the second chord a C or a Cadd9", "close enough lol", "can someone tab the intro", "wrong key", "thx", "how do you play the second part", "is this standard tuning", "my version is better", "sounds right to me"
- Weight these at 50% of all forum comments

### 13. Remove or Rethink Invented Metrics
- "riff potency: X/10 skull picks" — either remove or make it clearly a joke ("riff potency" label is fine if the scoring is dumb/inconsistent: "11/10", "??/10", "4/10 but it's a grower", "—" for no rating)
- "CRED SCORE: X/Y" — same treatment: make scores obviously arbitrary or remove
- These metrics have no real-world equivalent and break the fiction

### 14. Make Layout Labels Do Something (or remove them)
"center altar + diary strip + sticker weather" is a cool idea but currently does nothing. Either:
- Actually vary the CSS layout per archetype (different background tints, section arrangements, font treatments)
- Or remove the labels entirely

### 15. Unfold Forum Drama into Comments
Remove the "Ongoing forum drama: [one-line summary]" from lore. Instead, embed the drama into the actual comment thread:
- A reply chain where two users argue about something petty
- A deleted/moderated post: "[this post removed by admin]"
- Someone complaining about the page itself: "why is this page so slow"
- Let drama emerge from content, don't meta-summarize it

### 16. Simplify Era Descriptions
Replace literary era descriptions with period-accurate ones:
- 60% simple: "1998", "fall '99", "sometime around 2000", "late 90s"
- 20% slightly specific: "right before Y2K", "after the breakup show", "the summer we all had jobs"
- 20% keep current literary style for the "obsessive shrine" archetype

### 17. Vary Content Volume Dramatically
Shrine archetypes should produce very different amounts of content:
- Tab dumps: 200-400 chars of rendered text
- Fan pages: 1000-2000 chars
- Obsessive shrines: 3000+ chars (current level)
- Stubs: 50-150 chars
- Forum rips: varies, mostly comments

### 18. Tab-First Layout Sometimes
For "tab dump" archetypes, render the tab as the very first element after the title. No lore preamble, no gear section, no analysis. Just: title → tab → maybe one comment.

### 19. Add Visual Chaos
Add per-shrine CSS mutations (small, authentic):
- Random background color (not always the current dark gradient): `bgcolor="#000033"`, `bgcolor="#330033"`, plain white, ugly teal
- Occasional centered text sections (`text-align: center` on some blocks)
- Occasional ALL CAPS sections
- Occasional `<hr>` dividers between sections (the most common Angelfire design element)
- Occasional font-size variation (some sections slightly bigger/smaller)
- One-in-ten shrines gets a "frames page" disclaimer: "NO FRAMES VERSION — click here for frames"
- These should be inline styles on the shrine article, not global CSS changes

### 20. Let Some Elements Simply Exist
Extend the headerless-section work from the previous pass:
- 40% of sections should have no header (up from current 30%)
- Add unexplained elements that appear randomly:
  - A list of dates with no context
  - A cryptic one-liner: "do not play this at the memorial show", "ask derek"
  - A seemingly unrelated image description: "[photo: parking lot, December]"
  - A dead download link: "DOWNLOAD MP3 (56k warning) — [LINK DEAD]"
  - An abandoned counter: "you are visitor #[number] to this tab"

---

## Verification Plan (12 checkpoints)
1. Generate 10+ shrines; at least 2 should be "tab dump" (tab first, minimal framing)
2. At least 1 shrine should be a "stub" (under 200 chars of content)
3. No two consecutive shrines should have the same section order
4. Lore paragraphs should NOT follow the same 4-paragraph template on any shrine
5. "Whoever kept this page..." should NOT appear verbatim on more than 1 in 5 shrines
6. At least 2 shrines should have non-atmospheric song titles (blunt/functional/minimal)
7. Forum comments should include at least 3 genuinely dumb/simple posts across the 10 shrines
8. Tab length varies: at least one 2-bar and one 8-bar tab
9. At least one shrine should have visually different styling (background color, centered text, etc.)
10. No shrine shows raw analysis-engine sentences in the main body (WHY section collapsed or absent)
11. Build passes: `npm run build` succeeds
12. Browser walkthrough confirms genuine variety — shrines feel like different people made them
