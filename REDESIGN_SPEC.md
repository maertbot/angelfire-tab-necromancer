# Local Tab Archive — Redesign Spec

## Identity
**Name:** Local Tab Archive  
**Conceit:** One obsessive internet person found a massive cache of dead Angelfire/Geocities/zine sites from the late-90s/early-2000s local guitar scene and is preserving as much as possible here.  
**Tone of the wrapper:** Contemporary but clearly made by one weirdo who devoted years to this. Not corporate, not academic. A labor of love.

## Architecture

### Outer Shell (Modern)
- Clean, contemporary design
- Site header/name: "Local Tab Archive" with a short tagline from the archivist character
- **Two ways in:**
  1. **Browse the catalog** — list/grid of all entries, browsable by band/song/scene
  2. **Hum a riff** — mic input that "searches" the archive and pulls up a match
- Navigation, catalog list, and controls are all modern/clean

### Inner Portal (Old Web)
- A large viewport area (the main content zone) that renders the recovered artifacts
- Everything inside this portal looks old — Angelfire/Geocities-styled
- Each entry is a **collage of visually distinct artifact fragments:**
  - Tab pages (one visual style — maybe dark bg, monospace, visitor counter)
  - Guestbook entries (different visual style — lighter, bordered, with signatures)
  - Forum thread snippets (yet another style — phpBB-ish, usernames with post counts)
  - Flyers (monospaced, box-drawn, like xerox scans)
  - Classified ads (newspaper-column feel)
  - Email fragments (plain text, headers visible)
  - Dead link notices, mirror notes, partial recoveries
- Each fragment should be visually distinct enough that you can tell "this came from a different site"
- **No narrator voice.** Everything the user learns about the band comes from the artifacts.

## Data Format

Each entry is a JSON object in a catalog array. Structure:

```json
{
  "id": "landlord-duplex-hymn",
  "band": "Landlord",
  "song": "Duplex Hymn",
  "scene": "nc-triangle",
  "tags": ["drop-d", "slow", "hillsborough"],
  "fragments": [
    {
      "type": "tab-page",
      "source": "catscradleburner's Angelfire page",
      "cached": "2002-08-14",
      "content": "..." // the full text of the tab page fragment
    },
    {
      "type": "guestbook",
      "source": "catscradleburner's guestbook",
      "cached": "2001-11-03",
      "content": "..." // guestbook entries
    },
    {
      "type": "forum-thread",
      "source": "Triangle Scenester Board",
      "thread": "bands from hillsborough?",
      "cached": "2002-01-18",
      "content": "..." // forum posts
    },
    {
      "type": "flyer",
      "content": "..."
    },
    {
      "type": "email",
      "content": "..."
    }
  ]
}
```

## Fragment Visual Styles

Each fragment type gets its own CSS treatment inside the portal:

### tab-page
- Dark background (#1a1a2e or #000033 or similar)
- Monospace font (Courier)
- Tiled star or generic bg pattern feel
- Visitor counter, "last updated" line
- "~*~" decorators, horizontal rules
- Links shown as [DEAD] or colored

### guestbook
- Lighter background (#f0f0e8 or similar aged-paper tone)
- Each entry separated by horizontal rule
- Signature + date format
- Maybe a "Sign my guestbook!" header

### forum-thread
- Gray/white background, bordered
- Username | post date | post count layout
- Quoted text in indented blocks
- "thread locked by admin" possible

### flyer
- Monospace, box-drawn borders
- ALL CAPS
- Centered
- Looks like a xerox

### email
- Plain monospace
- From/To/Date/Subject headers
- Indented reply quotes with >

### classified-ad
- Small, compact
- Newspaper column feel
- [NUMBER REMOVED] redactions

### dead-link / mirror-note
- Italic or muted text
- "FILE NOT FOUND" / "MIRROR EXPIRED" / "[DEAD]"
- Source URL shown but struck through or grayed

## The 5 Initial Entries

Use the content from SAMPLE_ENTRIES_V2.md but:
- Fix screen names: only ~1 in 8 should reference a location. Most should be dumb AIM handles, first-name-plus-numbers, band references, or random junk from 1998.
- Convert from markdown to the JSON data format above.

The 5 entries:
1. **Landlord — "Duplex Hymn"** (deep, NC Triangle, 5-6 fragments)
2. **Trestle Youth — "Exit Sign Elegy"** (medium, PNW, 3 fragments)
3. **Screenburn — "Dollar Theater"** (sparse, NC, 2 fragments)
4. **Buttermilk — "Practice Space Key"** (medium, PNW, 4 fragments)
5. **The Gravel Sermons — "Waffle House Parking Lot at 2am"** (deep, NC, 5 fragments)

## Catalog Browse UI
- Simple list/grid showing band name, song title, scene tag
- Clicking an entry loads it into the portal
- Maybe a scene filter (NC / PNW / All)
- Entry count visible: "5 recovered entries" (will grow to 150+)

## Riff Search
- Keep the existing mic/demo input system
- When activated, it "searches the archive" and loads a matching entry
- For now with 5 entries, it can pick one based on the audio features or randomly
- The demo presets can each map to a specific entry

## What to Preserve from Current Build
- The Web Audio backing-track player (if feasible to keep)
- The mic capture / demo system
- The permalink/sharing system (adapt to new entry IDs)
- The overall Vite + vanilla JS stack

## What to Remove
- All procedural shrine generation code
- The "shrine" terminology throughout
- The sibling realities system (entries are now fixed, not generated variants)
- The pin/compare/keeper-card features (not needed for a catalog)
- The riff-reading analysis display

## Build Output
- Complete redesign of src/main.js and src/style.css
- New data file: src/catalog.js (or inline) with the 5 entries in JSON
- Working browse + portal + riff-search
- npm run build must succeed
