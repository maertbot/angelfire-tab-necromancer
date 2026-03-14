# Local Tab Archive — Authoring Brief for Subagents

## What you're writing
You are writing entries for a fictional music archive website. Each entry represents a band/song that "existed" in the late 90s / early 2000s underground music scene. The entries are collages of recovered web artifacts — tab pages, guestbook entries, forum threads, flyers, emails, classified ads, and dead-link notices.

## CRITICAL RULE: No narrator
Band info is NEVER told via summary paragraphs. Everything is revealed through recovered web fragments. The story of the band emerges from the gaps between artifacts. There is no narrator voice anywhere.

## Entry data structure
Each entry is a JS object:
```js
{
  id: "band-name-song-name",           // kebab-case, unique
  band: "Band Name",
  song: "Song Title",
  scene: "nc" | "pnw",                 // exactly one of these
  sceneLabel: "NC Triangle" | "NC Charlotte" | "PNW" | etc.,
  tags: ["drop-d", "slow", "cityname"],  // tuning, tempo, location
  fragments: [/* array of fragment objects */]
}
```

## Fragment types
Each fragment must be one of these types:

### tab-page
```js
{ type: "tab-page", source: "username's Angelfire page", cached: "2001-04-22", content: `...` }
```
The content is a single string with the tab. Include tuning, maybe a note about errors, the actual ASCII tab, and maybe some dead links. The tab must be musically coherent — real chord shapes, real tuning, real fret numbers that make physical sense on a guitar neck.

### guestbook
```js
{ type: "guestbook", source: "site guestbook", cached: "2001-11-03", entries: [ { name: "screenname", date: "MM/DD/YY", text: "..." }, ... ] }
```
Entries should be varied: some useful, some useless ("cool site", ".", "is this the dragonball z page"), some with scene gossip, some correcting the tab, some asking questions.

### forum-thread
```js
{ type: "forum-thread", source: "Board Name", thread: "thread title", cached: "2002-01", board: "sub-board name", posts: [ { user: "username", date: "MM/DD/YY HH:MM AM/PM", text: "..." }, ... ] }
```
Add `isAdmin: true` for mod/admin posts, `isSystem: true` for system messages. Forum posts should include petty arguments, corrections, scene politics, bump posts, "FIRST POST", etc.

### flyer
```js
{ type: "flyer", source: "description of where scanned", cached: "~2001", content: `...` }
```
Use box-drawing characters or simple text formatting. Include venue, date, bands, price, age restriction.

### email
```js
{ type: "email", source: "backup source", cached: "2001-06-07", content: `From: ...\nTo: ...\nDate: ...\nSubject: ...\n\nbody text` }
```
Use [REDACTED] for email addresses. Emails should feel like real correspondence — tab corrections, show logistics, band drama.

### classified-ad
```js
{ type: "classified-ad", source: "Paper Name classifieds", cached: "2001-08-16", content: `...` }
```
"Bassist wanted," "gear for sale," show listings from alt-weeklies.

### dead-link
```js
{ type: "dead-link", source: "mirror/archive name", cached: "unknown", content: `...` }
```
Chord charts, partial notes, remembrances of a page that's gone. This is the ghost of a page.

## Screen name rules
- Only ~1 in 8 screen names should reference a location
- Most should be dumb AIM/forum handles a 19-year-old picked in 1998: sk8erdude317, burritokid, toaster99, fabordie, guitardude22, meltdown_kid, etc.
- Some can be band-related: stolenwahpedal, catscradleburner, ampjunkie
- A few can be just first names: jake, reese, chris

## Entry depth variation
Not every entry needs 5 fragments. Vary depth:
- 2-3 entries with just 2 fragments (sparse)
- 4-5 entries with 3 fragments (medium)  
- 2-3 entries with 4-5 fragments (deep)

## Musical coherence rules
- Tabs must use real chord shapes and real fret numbers
- If it says "drop D," the tab must actually be in drop D
- Tuning must be specified
- Chord progressions should make musical sense
- Tab transcribers should have opinions and make small errors they acknowledge

## Band name rules
- Mix styles: some are one-word names (Landlord, Buttermilk, Screenburn), some are "The [Noun]s" (The Gravel Sermons, The Receipts), some are two-word phrases (Trestle Youth, Exit Sign, Dust Angel)
- Avoid overly poetic/LLM-sounding names. Think of what a 20-year-old in 2001 would name their band.
- Some names should be slightly dumb or meaningless

## Venue/location rules
Use real venue names, real street names, real town features for the assigned scene. The locations should feel lived-in and specific. Reference real geographic features, real alt-weeklies, real types of venues (VFW halls, coffee shops, skate shops, houses, church basements).

## Voice rules
- Write like a 19-year-old in 2001 who types in lowercase and doesn't care about grammar
- Tab transcribers are earnest but imperfect
- Forum posters argue about dumb things
- Some content should be boring, some should be broken, some should be transcendent
- Avoid uniform quality — some entries should be thin and unremarkable, a few should be genuinely moving

## Output format
Output a single JS file that exports an array. No imports. Example:
```js
export const entries = [
  { id: "...", band: "...", ... },
  // ... more entries
];
```
