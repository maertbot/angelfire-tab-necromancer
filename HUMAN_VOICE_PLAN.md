# Angelfire Tab Necromancer — Human Voice Pass

## Problem
The site feels LLM-generated. Everything is equally clever, structurally parallel, and poetically monotone. Real late-90s web content is lumpy, uneven, sometimes boring, sometimes broken, and occasionally transcendent.

## North Star
Make the generated output feel like it was made by a real teenager with FrontPage Express in 1999, not a language model in 2026. The unevenness IS the realism.

## 15 Implementation Items

### Voice & Register (1–4)

**1. Break the poetic monotone.**
- Add a `REGISTER` system to string pools: tag entries as `poetic`, `mundane`, `dumb`, `hostile`, or `broken`.
- Generation should mix registers: ~40% mundane, ~25% poetic, ~15% dumb/hostile, ~20% period-accurate filler.
- Guestbook especially: add entries like "cool tabs", "hey", "nice site", "first!!", empty-feeling signatures, alongside the emotional confessions.
- Forum comments: add "this rules", "does anyone have the POWER TAB???", "FIRST POST", "bump", "nice", "can someone re-upload the mp3 link is dead", "this tab is wrong lol".

**2. Add period-accurate internet garbage.**
- Add to shrine rendering: occasional broken image placeholders (`[IMG]`), "CLICK HERE TO SIGN MY GUESTBOOK", "best viewed at 800x600", "this page optimized for Netscape Navigator 4.0", dead link text ("link removed — geocities mirror expired 2002"), random AIM away messages, "UNDER CONSTRUCTION" gifs described as text.
- These should appear randomly (30-50% of shrines get 1-3 garbage elements), not on every page.

**3. Make some forum comments useless.**
- Expand comment templates with short/useless entries: one-word reactions, requests for guitar pro files, complaints about tab accuracy, dead link reports, off-topic posts, someone replying to the wrong thread.
- At least 30% of comments per shrine should be these short/useless types.

**4. Make guestbook entries chaotic.**
- Add guestbook pool entries that are: empty/near-empty ("hey", ".", "cool"), spam-like ("FREE RINGTONES AT..."), wrong-page ("is this the dragonball z page?"), repeat posters, broken HTML attempts, someone just posting their AIM screen name.
- Mix ratio: ~40% real reactions, ~30% mundane/empty, ~20% chaotic/broken, ~10% current poetic style.

### Structural Variation (5–7)

**5. Make band data deliberately uneven.**
- Some bands should have: no members listed ("lineup unknown / disputed"), only one album, no lore, or extra-long lore paragraphs.
- Add optional fields: `membersUnknown: true`, `loreExtra: [...]` for bands with more history, `albums: []` for bands with no recorded output.
- When rendering, show gaps honestly: "members: not documented" or just skip the section.

**6. Vary comment count per shrine.**
- Instead of always showing all comments from the profile, randomly select 1-7 comments.
- Add rare states: "comments disabled after spam attack 11/2001", "guestbook corrupted — 2 entries recovered", "forum thread locked by admin".

**7. Add incomplete/corrupted shrine states.**
- ~15% of shrines should have a "damage" roll that removes or corrupts one section:
  - "tab section unavailable (geocities mirror 404'd)"
  - only first 4 bars of tab survived
  - "guestbook entries lost in server migration"
  - "band photo: [broken image]"
  - gear section replaced with "signal chain unknown — practice space burned down 2001"
- These make the complete shrines feel more valuable.

### Naming & Language (8–10)

**8. Diversify band name patterns.**
- Add new name patterns beyond [Adjective] [Noun]:
  - Single words: "Trestle", "Casket", "Landlord", "Anthem"
  - The + plural: "The Receipts", "The Jeffs", "The Goodnight Janes"
  - Inside jokes: "Aunt Bethany's Jello Mold", "Kevin's Other Band"
  - Place + thing: "Durham Floor Punch", "Salem Exit Ramp"
  - Numbers/abbreviations: "454", "HWY 99", "Room 114"
  - Bad names that stuck: "Moist Cathedral", "The Guys", "Buttermilk"
- At least 40% of bands should NOT follow the [Adjective] [Noun] pattern.

**9. Make badge/stamp text less uniformly witty.**
- Add mundane badges: "BUILT WITH NOTEPAD", "UPDATED WEEKLY (MAYBE)", "EMAIL ME IF LINKS ARE BROKEN", "MADE ON A SCHOOL COMPUTER", "BEST VIEWED AT 800x600", "FRAMES VERSION AVAILABLE", "MIDI ON = YOUR PROBLEM".
- Mix ratio: ~50% mundane, ~30% funny, ~20% scene-specific.

**10. Reduce hyphenated-compound density.**
- Audit all string pools and cut ~60% of hyphenated atmospheric compounds (rain-soaked, mall-goth, copy-shop, etc.).
- Replace with either: plain descriptions ("it was raining"), specific details ("the copy shop on Franklin"), or nothing.
- In memory-tags especially: replace poetic tags with specific mundane ones: "sean's blue hoodie nobody gave back", "the gas station on 15-501", "that time the van wouldn't start in the Food Lion parking lot".

### Content Logic (11–13)

**11. Add mundane specificity instead of poetic specificity.**
- Create a new pool of `mundaneMemories` per scene that are logistically specific rather than atmospheric:
  - "mike's mom drove the van but only if we were back by 11"
  - "the practice space key was hidden in the gutter"
  - "somebody left a half-eaten sub in the amp case"
  - "we owed the VFW $40 for the broken mic stand"
- These should appear in memory-tags, guestbook, and lore at ~40% frequency.

**12. Make gear talk boring sometimes.**
- Add mundane gear entries: "what gauge strings does he use", "my cable crackles when I move", "the input jack is loose again", "does anyone know where to get straps cheap", "who has a tuner I can borrow", "the 9V died during the set".
- Mix into gear-talk pool at ~40% frequency alongside the atmospheric ones.

**13. Give forum drama actual pettiness.**
- Add petty drama entries: "who owes who $15 for the practice space", "the promoter put us on at 11pm on a Tuesday again", "why does [band] always get the opening slot", "someone stole our set time slot", "the door guy kept $20", "nobody helped load out", "we got 4 minutes of soundcheck".
- These should appear alongside the clever aesthetic debates at ~50% frequency.

### Meta/Framing (14–15)

**14. Remove self-aware meta-commentary.**
- Delete or rewrite all archetype voice strings that reference "the machine", "the engine", or acknowledge generation:
  - "the machine heard shimmer and wrote a diary around it" → cut entirely or replace with in-fiction voice like "this page was maintained between shifts at the dollar theater"
  - "the engine hears menace" → "whoever made this page was scared of something"
  - All `voices.inspect` and `voices.hero` strings must speak from inside the fiction, never about the generation process.

**15. Let some elements exist without explanation.**
- Remove ~30% of `section-title` labels from rendered shrine HTML.
- Some sections should just BE there with no header: a list of dates with no label, a gear list with no "signal chain dossier" title, a tracklist that just appears.
- Add occasional unexplained elements: a random date with no context, a cryptic note like "do not play this at the memorial show", an unexplained list of names.

## Verification Plan
After implementation, verify by generating 6+ shrines and checking:
1. At least one shrine has a useless/short forum comment
2. At least one shrine has a corrupted/incomplete section
3. At least one band has a non-[Adj][Noun] name pattern
4. Guestbook entries show visible quality variance (short + long + broken)
5. Memory tags include mundane specific details alongside (fewer) poetic ones
6. No remaining strings reference "the machine" or "the engine" in generated output
7. Badge/stamp mix includes mundane entries
8. Band data shows structural unevenness (missing members, variable album counts)
9. At least one comment is just "bump" or "nice" or "this tab is wrong"
10. Some shrine sections render without headers
11. Build passes
12. Browser walkthrough confirms the overall vibe feels more human/chaotic
