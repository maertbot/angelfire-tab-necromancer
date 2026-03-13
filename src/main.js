import './style.css'

const TAB_STRINGS = ['e', 'B', 'G', 'D', 'A', 'E']
const TITLE_PREFIXES = ['Velvet', 'Chrome', 'Basement', 'Candlelit', 'Laser', 'Ashtray', 'Midnight', 'Tape-Hiss', 'Blacklight', 'Mall', 'Sorcerer\'s', 'Dial-Up', 'Velour', 'Moonburn', 'Static', 'Dreamfax', 'Neon', 'Prayer Circle', 'Wet Cement', 'VHS', 'Pollen', 'Dogwood', 'Cascade', 'Exit Sign', 'Bus-Depot', 'Hydrangea', 'Screenburn']
const TITLE_SUBJECTS = ['Cathedral', 'Promenade', 'Telecaster', 'Funeral', 'Skatepark', 'Afterparty', 'Hex', 'Lifeguard Chair', 'Summer', 'Prophecy', 'Bus Ticket', 'Kiss-Off', 'Cigarette Halo', 'Parking Lot', 'Girlfriend', 'Stairwell', 'Data Ghost', 'Food Court', 'Practice Space', 'Slowdance', 'Dogwood', 'Overpass', 'Pine Barrens', 'Phone Pole', 'County Line', 'Ferry Slip', 'Rehearsal Hall']
const TITLE_SUFFIXES = ['Riff', 'Lament', 'Theme', 'Directive', 'Signal', 'Prayer', 'Demo', 'Memorial', 'Tab', 'Overture', 'Weather Report', 'Complaint', 'Flyer', 'Translation']
const FORUM_USERS = ['xX_TabGhoul_Xx', 'fretwizard77', 'DropD4Eva', 'mallgothdad', 'amphexed', 'shredmancer', 'modemtears', 'bossmetalzone', 'fenderbender99', 'cassetteoracle', 'webringwidow', 'd00m_capo', 'dogwoodfeedback', 'durhamdialup', 'i5ghostnote', 'trianglefloorpunch']
const BADGES = ['BEST VIEWED WHILE SHREDDING', 'TABS NEVER DIE', 'MIDI IS PEOPLE TOO', 'UNDER CONSTRUCTION FOREVER', 'DROP D OR DROP DEAD', 'POWERED BY MOUNTAIN DEW CODE RED', 'NETSCAPE FRIENDLY', 'HAND-CODED IN DESPERATION', 'NO NU METAL HATE MAIL', 'PRINT THIS BEFORE AOL DELETES IT', 'SCENE VERIFIED BY FLYER LAMINATE', 'ASK ABOUT THE MATINEE BILL']
const STAMPS = ['🕸️ haunted', '💿 cd-r verified', '📡 56k approved', '⚡ solo safe', '🦇 mallgoth tested', '🧃 surge compatible', '🌲 rain-soaked', '🌙 dogwood-night approved']
const TUNINGS = ['E A D G B E', 'D A D G B E', 'D G C F A D', 'D A D F# A D', 'Eb Ab Db Gb Bb Eb']
const KEYS = ['E minor', 'D minor', 'D mixolydian', 'G major', 'A dorian', 'B minor', 'C major', 'F# minor']
const ERAS = ['Summer 1998', 'Fall 1999', 'Y2K eve', 'that one LAN party weekend', 'the week everyone got a wah pedal', 'the month before somebody\'s starter jacket got stolen', 'late spring 2000 when the flyer toner ran blue', 'the semester everybody suddenly owned a four-track']

const REGIONAL_SCENES = {
  pnw: {
    id: 'pnw',
    label: 'Oregon / PNW rain-burn circuit',
    slug: 'pnw',
    descriptor: 'wet basements, all-ages halls, pedestrian-bridge acoustics, and copy-shop flyers from Eugene to Salem to Portland orbit',
    webrings: ['Pacific Northwest Bedroom Shred Ring', 'I-5 Ghost Chord Alliance', 'Willamette Valley All-Ages Tone Spiral', 'Cascadia Tape Hiss Preservation Ring'],
    badges: ['RAIN-SOAKED FLYER VERIFIED', 'I-5 EXIT SHRED APPROVED', 'ALL-AGES HALL SURVIVOR', 'FERN-SCENTED PRACTICE SPACE'],
    stamps: ['🌲 rain-soaked', '🚐 i-5 routed', '🌫️ bridge-reverb certified'],
    keeperHandles: ['kristin_from_gatewaypc', 'tabsaint77', 'stolenwahpedal', 'mallsaint', 'midnightfretprayer', 'willamettecopykid'],
    venues: ['WOW Hall in Eugene', 'the all-ages room behind the Salem skate shop', 'a VFW in Springfield', 'the Corvallis grange hall bill nobody archived correctly', 'the back room of a Portland coffeehouse with bad monitors'],
    smallTowns: ['Springfield', 'Cottage Grove', 'Albany', 'Dallas', 'Silverton', 'McMinnville', 'Bandon', 'Monmouth'],
    memoryTags: ['bridge condensation on a set list', 'copy-shop staple rust', 'Black Butte road-trip tape flip', 'borrowed hoodie smelling like rain and cigarettes'],
    flyerLanguage: ['ALL AGES / DON\'T BLOW IT', 'bring five bucks and your own sadness', 'flyer says 7 but nobody starts before 8:40', 'ask the kid by the merch Rubbermaid for directions'],
    gearTalk: ['Peavey Bandit with one scratchy knob', 'Small Clone somebody swore was always on', 'crate combo on a milk crate', 'pawn-shop Jazzmaster copy through a dying cable'],
    forumDrama: ['whether the pedal bridge was actually tracked under the Ferry Street bridge', 'the eternal argument about who stole the opener\'s holy Small Clone', 'a 19-post fight over whether this was emo or just Oregon weather'],
    recordingOrigins: ['a fourth-generation practice-space dub from Eugene', 'an mp3 rescued from a Salem fan webring mirror', 'a tab emailed from a UO library terminal and rehosted without permission', 'a cassette rip labelled only SIDE B / WET BASEMENT'],
    rareEvents: ['cursed mirror verified', 'missing verse fragment recovered', 'disputed authorship thread', 'one-hit guestbook prophecy', 'pedalboard polaroid surfaced'],
    rooms: {
      shimmery: ['food court after closing', 'upstairs bedroom with christmas lights', 'church youth room during setup', 'pedestrian bridge under sodium lights'],
      heavy: ['unfinished basement with concrete bloom', 'garage beside hockey pads', 'practice space behind the roller rink', 'storage unit by the bike path'],
    },
    guitars: ['Squier Strat with stickers', 'sunburst Yamaha Pacifica', 'pawn shop SG copy', 'black Epiphone Les Paul', 'mystery offset from a church rummage sale'],
    amps: ['Peavey Bandit', 'Crate half-stack', 'Fender Frontman 25R', 'borrowed Marshall combo', 'amp of unknown origin with one angry speaker'],
    pedals: {
      shimmery: ['Danelectro FAB Chorus', 'Big Muff clone', 'cheap digital delay', 'Small Clone rumor only'],
      heavy: ['Boss Metal Zone', 'DOD grunge pedal', 'Big Muff clone', 'one tuner and a dream'],
    },
  },
  nc: {
    id: 'nc',
    label: 'North Carolina triangle / piedmont circuit',
    slug: 'nc',
    descriptor: 'dogwood-night house shows, Triangle message-board fights, Charlotte warehouse bills, and Chapel Hill/Carrboro melodic weirdness',
    webrings: ['Triangle Feedback Preservation Ring', 'Piedmont Basement Signal Co-Op', 'Dogwood Distortion Webring', 'Carolina Late Show Tablature Circle'],
    badges: ['DOGWOOD NIGHT APPROVED', 'TRIANGLE BOARD DRAMA ARCHIVED', 'PIEDMONT HOUSE SHOW VOUCHED', 'QUEEN CITY LOAD-IN SAFE'],
    stamps: ['🌙 dogwood-night approved', '📍 triangle routed', '🚬 parking-lot argument saved'],
    keeperHandles: ['catscradleburner', 'durhamdialup', 'mergeboardlurker', 'queencitytapeop', 'chapelhillghost', 'dogwoodfeedback'],
    venues: ['Cat\'s Cradle back room in Carrboro', 'a Durham warehouse off Geer Street', 'a VFW outside Raleigh', 'a Charlotte practice spot by the freight tracks', 'the Winston-Salem coffeehouse matinee everybody misremembered'],
    smallTowns: ['Carrboro', 'Hillsborough', 'Saxapahaw', 'Mebane', 'Kannapolis', 'Boone', 'Pittsboro', 'Burlington'],
    memoryTags: ['dogwood petals mashed into a set list', 'Waffle House receipt with tunings on the back', 'I-40 overnight tape dub', 'parking-lot humidity curling the flyer corners'],
    flyerLanguage: ['ALL AGES / BRING CASH / DON\'T CALL THE COPS', 'matinee if the hardcore bill clears out in time', 'someone\'s cousin is running sound, be cool', 'if you miss the Carrboro exit you missed the whole summer'],
    gearTalk: ['JC-120 borrowed from somebody\'s older brother', 'rat pedal with the paint rubbed off', 'solid-state combo that somehow loved open chords', 'Mustang bass through an SVT nobody could afford to break'],
    forumDrama: ['whether the Carrboro clean tone was a Jazzmaster or just the JC-120 doing all the work', 'a 30-reply argument over Raleigh versus Durham flyer etiquette', 'who was subtweeting who before subtweets existed on the local board'],
    recordingOrigins: ['a four-track dub from a Carrboro duplex', 'an mp3 mirrored off a Chapel Hill student server', 'a CD-R passed around after a Raleigh matinee', 'a board-post attachment salvaged from a Charlotte scene forum backup'],
    rareEvents: ['Cat\'s Cradle flyer scan attached', 'guestbook beef reignited', 'Waffle House receipt tab corroborated', 'board-admin lock after page 4'],
    rooms: {
      shimmery: ['attic room over a Carrboro duplex porch', 'apartment living room with two box fans', 'back hallway at the arts center', 'warehouse office with Christmas lights and humidity'],
      heavy: ['Charlotte warehouse beside the loading dock', 'Durham rehearsal lockout with old posters on cinderblock', 'garage outside Hillsborough with two PA cabs and no insulation', 'boiler-room basement near campus'],
    },
    guitars: ['Japanese Jazzmaster with cigarette burns', 'black Mustang with mismatched knobs', 'Tele Deluxe copy with one dead switch', 'Epiphone Sheraton borrowed for exactly one chorus', 'partscaster offset with a Dogfish sticker'],
    amps: ['Roland JC-120', 'Peavey Classic 30', 'Ampeg combo with a torn grille', 'old Sunn head somebody\'s uncle found', 'Fender Hot Rod Deluxe from the practice lockout'],
    pedals: {
      shimmery: ['Boss CE-5', 'Memory Man rumor only', 'DD-3 with dying battery', 'Rat set weirdly low'],
      heavy: ['ProCo Rat', 'Big Muff Pi', 'Boss DS-1 from the glovebox', 'MXR Distortion+ with tape on the knob'],
    },
  },
}

const SHRINE_ARCHETYPES = [
  {
    id: 'catacomb',
    label: 'catacomb archive',
    className: 'archetype-catacomb',
    layoutLabel: 'archive ledger + marginalia rail',
    tagline: 'maintained by one obsessive transcriber after school on a family iMac',
    voices: {
      hero: 'Catalogued as if the page itself feared deletion.',
      inspect: 'Archivist logic insists the shrine happened for reasons, not vibes.',
    },
  },
  {
    id: 'foodcourt',
    label: 'food-court heartbreak fanpage',
    className: 'archetype-foodcourt',
    layoutLabel: 'center altar + diary strip + sticker weather',
    tagline: 'looks like it was updated between Orange Julius shifts',
    voices: {
      hero: 'Every section acts like this riff definitely meant one person.',
      inspect: 'The machine heard shimmer and wrote a diary around it.',
    },
  },
  {
    id: 'gearhead',
    label: 'gearhead tape dossier',
    className: 'archetype-gearhead',
    layoutLabel: 'signal-chain dossier + take sheet + rumor wall',
    tagline: 'forensically assembled by someone who rated picks by edge wear',
    voices: {
      hero: 'The shrine behaves like a technical argument with eyeliner.',
      inspect: 'Every phrase is treated as evidence from a scene crime lab.',
    },
  },
  {
    id: 'youthgroup',
    label: 'youth-group warning page',
    className: 'archetype-youthgroup',
    layoutLabel: 'tract banner + caution blocks + impossible devotion',
    tagline: 'half warning page, half impossible fan devotion',
    voices: {
      hero: 'Moral panic copy keeps accidentally becoming fandom.',
      inspect: 'The engine hears menace, then disguises obsession as concern.',
    },
  },
]

const BANDS = {
  pnw: [
    {
      name: 'The Votive District', hometown: 'Springfield, OR', years: '1997–2001',
      members: ['Nate “Latchkey” Corbin — guitar/voice', 'Mara Quince — bass', 'Dylan Stedd — drums'],
      albums: ['Prayer Xerox (1998)', 'Exit Through Food Court (2000)'],
      influences: ['Hum', 'Failure', 'that one local band with two choruses and no merch'],
      lore: 'They were locally famous for starting songs before the tuner pedal had finished muting.',
    },
    {
      name: 'Halo Arcade', hometown: 'Salem, OR', years: '1998–2002',
      members: ['Rin Vale — guitar', 'Jory Hask — bass', 'Ben Fitch — drums', 'Leah Pell — occasional glockenspiel'],
      albums: ['Parking Lot Glossary (1999)', 'Permanent Closing Time (2001)'],
      influences: ['Smashing Pumpkins B-sides', 'shoes squeaking on tile', 'goth kids borrowing emo chord voicings'],
      lore: 'People swore the clean parts were tracked in the mall after security stopped caring.',
    },
    {
      name: 'Cinder Psalm', hometown: 'Corvallis, OR', years: '1996–2000',
      members: ['Micah Sorrell — guitar/voice', 'Evan Wirth — bass', 'Paz Yarrow — drums'],
      albums: ['Basement Glossolalia (1997)', 'The Concrete Is Listening (1999)'],
      influences: ['Quicksand', 'Sunny Day Real Estate', 'one terrifying Peavey combo'],
      lore: 'Their drummer counted off every song like it was either a prayer or a threat.',
    },
    {
      name: 'Velour Static', hometown: 'Eugene, OR', years: '1998–2003',
      members: ['Tess Merrow — guitar/voice', 'Cole Aven — bass', 'Iris Holt — drums/sampler'],
      albums: ['Gloss Damage (1999)', 'Neon Wake Service (2002)'],
      influences: ['starry-eyed alt rock', 'cheap chorus pedals', 'the acoustics under pedestrian bridges'],
      lore: 'Half the scene thought the tabs were simple until they tried to make the voicings ring correctly.',
    },
    {
      name: 'June Choir Motel', hometown: 'Portland, OR', years: '1998–2002',
      members: ['Elis Vane — voice/guitar', 'Milo Creel — bass', 'Sera Dunn — drums'],
      albums: ['Bridge Condensation (1999)', 'Blue Copier Summer (2001)'],
      influences: ['The Promise Ring played slower', 'Pacific Northwest drizzle', 'overdriven clean channels'],
      lore: 'Their singer kept writing set times on the back of grocery receipts and losing them in guitar cases.',
    },
    {
      name: 'Trestle Youth', hometown: 'Albany, OR', years: '1997–2000',
      members: ['Wes Morrow — guitar', 'Lenna Pike — bass/voice', 'Olin Cates — drums'],
      albums: ['County Fair Elegies (1998)', 'Late Bus to Corvallis (2000)'],
      influences: ['Jawbox', 'ponded parking lots', 'one half-working distortion pedal'],
      lore: 'They allegedly broke up because no one would admit who kept detuning the borrowed SG between sets.',
    },
  ],
  nc: [
    {
      name: 'Dogwood Static', hometown: 'Carrboro, NC', years: '1997–2002',
      members: ['Mira Ashe — guitar/voice', 'Cal Vick — bass', 'Theo March — drums'],
      albums: ['Porchlight Receiver (1998)', 'Humidity for Choirs (2001)'],
      influences: ['Polvo after midnight', 'shimmer pedals through box fans', 'mall-emo chord honesty'],
      lore: 'They became local folklore because every tape dub seemed to add a different clean guitar that nobody remembered recording.',
    },
    {
      name: 'Geer Street Saints', hometown: 'Durham, NC', years: '1998–2003',
      members: ['Rafe Tilden — guitar', 'Nina Kade — bass/voice', 'Jules Mercer — drums'],
      albums: ['Warehouse Fluorescent (1999)', 'Matinee Complaint Dept. (2002)'],
      influences: ['Jawbox', 'Drive Like Jehu played by nicer people', 'warehouse slapback'],
      lore: 'They kept printing “be cool to the neighbors” on flyers because one bill nearly ended the whole warehouse run.',
    },
    {
      name: 'Queen City Veil', hometown: 'Charlotte, NC', years: '1997–2001',
      members: ['Avery Kell — guitar/voice', 'Jon Pruett — guitar', 'Mags Lenoir — bass', 'Pip Sloan — drums'],
      albums: ['Freight Track Psalms (1998)', 'No Parking After Soundcheck (2000)'],
      influences: ['Failure', 'Sunday warehouse echo', 'JC-120 clean panic'],
      lore: 'People argued for years about whether their second guitarist was real or just doubled live by excessive delay.',
    },
    {
      name: 'Roxboro Exit', hometown: 'Raleigh, NC', years: '1998–2002',
      members: ['Ian Vale — guitar/voice', 'Cori Dunn — bass', 'Miles Boone — drums'],
      albums: ['Board Admin Locked It (1999)', 'Interstate Lull (2001)'],
      influences: ['Braid', 'hot parking-lot air', 'cheap Rats and expensive feelings'],
      lore: 'Their board feud with a Durham promoter produced more surviving text than their first EP did.',
    },
    {
      name: 'Blue Room Gospel', hometown: 'Chapel Hill, NC', years: '1996–2000',
      members: ['Liza Rowan — voice/guitar', 'Derek Poe — bass', 'Sam Yates — drums', 'Em Fitch — organ when needed'],
      albums: ['Student Server Eulogies (1997)', 'Second Floor Feedback (1999)'],
      influences: ['Superchunk played wounded', 'open-string Appalachian ghosts', 'tiny room reverb'],
      lore: 'Half their mythology comes from a campus-hosted fan page that disappeared every finals week.',
    },
    {
      name: 'Hillsborough Thread', hometown: 'Hillsborough, NC', years: '1999–2003',
      members: ['Noah Baird — guitar', 'Elsie Trent — bass', 'Rook Latham — drums/voice'],
      albums: ['Dogwood Dial Tone (2000)', 'Receipt on the Dashboard (2002)'],
      influences: ['Codeine with better coffee', 'humid two-lane highways', 'Mustang bass through borrowed Ampeg'],
      lore: 'They got adopted by the Triangle scene after three opening slots and one impossibly good slow song.',
    },
  ],
}

const MOODS = {
  feral: {
    label: 'feral basement peak', descriptors: ['feral', 'amp-rattling', 'mosh-adjacent'],
    lane: 'basement feral', tabs: ['PM--', 'x', '/', '5', '7'],
    chordPool: ['D5', 'F5', 'G5', 'Bb5', 'C5'],
    drumStyle: ['kick', 'hat', 'kick', 'snare', 'kick', 'kick', 'snare', 'hat'],
    vocab: 'drop-D power-chord battery, octave answers, and palm-muted choke/release motion',
  },
  shimmery: {
    label: 'shimmery food-court ache', descriptors: ['shimmery', 'chorused', 'heartbruised'],
    lane: 'shimmer heartbreak', tabs: ['12', '10', '7', '~', '/'],
    chordPool: ['Em(add9)', 'Cmaj7', 'G6', 'Dsus2', 'Am7'],
    drumStyle: ['hat', 'hat', 'snare', 'hat', 'kick', 'hat', 'snare', 'hat'],
    vocab: 'open-string suspensions, chiming dyads, and top-string answer lines',
  },
  moody: {
    label: 'moody fluorescent yearning', descriptors: ['moody', 'slow-burn', 'rain-on-payphone'],
    lane: 'fluorescent yearning', tabs: ['0', '3', '5', '7', '~'],
    chordPool: ['Em', 'Cmaj7', 'G', 'Dsus2', 'Am7'],
    drumStyle: ['kick', 'hat', 'snare', 'hat', 'kick', 'hat', 'hat', 'snare'],
    vocab: 'drone-string figures, suspended grips, and small octave ghosts',
  },
}

const SONGBOOK = {
  feral: [
    {
      id: 'dropd-battery', tuning: 'D A D G B E', key: 'D minor', progression: ['D5', 'Bb5', 'F5', 'C5'],
      hero: 'A drop-D verse that slams low fifths, then answers itself with a higher octave stab.',
      motifSummary: 'low-string chug → octave jab on D/G strings → one-bar dropout → full return', hookShape: '0-0-3-5 / 7-7-5-3',
      rhythmMap: ['1e+a / 3+ · palm-muted chug', '2+ / 4e · octave answer', '1--- / answer · dropout bar', '1e+a / 3+ · full-rig return'],
      sections: [
        { name: 'verse', chord: 'D5', feature: 'open low-D chug under a 0-3-5 climb' },
        { name: 'answer', chord: 'Bb5', feature: 'octave stab on the D and G strings at 8/10' },
        { name: 'dropout', chord: 'F5', feature: 'single-note low-string crawl with space left open' },
        { name: 'turnaround', chord: 'C5', feature: 'slide back into the opening chug from 5/3' },
      ],
      tabLines: ['e|----------------|----------------|----------------|----------------|', 'B|----------------|----------------|----------------|----------------|', 'G|----------------|--10--10-------|----------------|---------5/7----|', 'D|----------------|---8---8-------|------3-----5---|-----5-5--------|', 'A|----------------|----------------|----3---3-------|---5------------|', 'D|-0-0-0-3-5-3-0--|-0-0-0-0-0-0-0-|-0-0-----3-3----|-5-5---3---0----|'],
      bassPattern: [0, 0, 8, 8, 3, 3, 10, 10], chordRoots: [0, 8, 3, 10],
      commentTemplates: ['The tab actually matches the page now: bar 1 is the low-D 0-3-5 climb, and bar 2 answers with those 8/10 octaves.', 'Do not flatten the dropout bar — the empty space before the F5 crawl is the whole point of the turnaround.', 'You can hear the pick hand open up when the chug stops and the octave jab takes over.', 'Forum consensus: this riff only works if the return slide really lands on the visible 5/3 move.'],
      guestbook: ['printed the drop-D shape and stole the turnaround for our bridge', 'the 8/10 octave answer is why the chorus finally makes sense', 'left the dropout bar untouched because the silence hits harder than another chord'],
    },
    {
      id: 'octave-riot', tuning: 'D A D G B E', key: 'D mixolydian', progression: ['D5', 'G5', 'Bb5', 'C5'],
      hero: 'A parking-lot riff built from low-string grind and a recurring octave siren.',
      motifSummary: 'open D pedal → 5/7 power move → octave siren at 7/9 → stomped ending', hookShape: '0-0-5-7 / 7-9-7-5',
      rhythmMap: ['1e+a / 3+ · open-string battery', '2+ / 4e · power-chord shove', '1--- / answer · octave siren', '1e+a / 3+ · stomp ending'],
      sections: [
        { name: 'verse', chord: 'D5', feature: 'open D pedal with short mutes' },
        { name: 'pre-chorus', chord: 'G5', feature: '5/7 shove across the two lowest strings' },
        { name: 'answer', chord: 'Bb5', feature: '7/9 octave siren on D/G strings' },
        { name: 'turnaround', chord: 'C5', feature: 'descending stomp back to the root' },
      ],
      tabLines: ['e|----------------|----------------|----------------|----------------|', 'B|----------------|----------------|----------------|----------------|', 'G|----------------|----------------|--9--9--9-7-----|----------------|', 'D|----------------|----------------|--7--7--7-5-----|--5---3---------|', 'A|----------------|-5-5-5-5-7-7---|----------------|--5---3---------|', 'D|-0-0-x-0-0-x-0--|-5-5-5-5-7-7---|-0-0-x-0-0-x-0--|--5---3---0-----|'],
      bassPattern: [0, 0, 7, 7, 8, 8, 10, 10], chordRoots: [0, 7, 8, 10],
      commentTemplates: ['The octave siren in bar 3 is literally the visible 7/9 shape on D and G — not a mystery lead overdub.', 'Bar 2 is just D5 shoved up to G5; stop rewriting it as separate chords.', 'This one inspires songs because the verse and answer are obviously related instead of random noodles.', 'The stomp ending works because the page keeps the root pedal alive underneath the move to C5.'],
      guestbook: ['used this as a verse immediately', 'the 5/7 shove into the siren is embarrassingly catchy', 'yes the tab finally reads like something a band would actually rehearse'],
    },
    {
      id: 'freight-yard-lurch', tuning: 'D A D G B E', key: 'F# minor', progression: ['F#5', 'A5', 'E5', 'B5'],
      hero: 'A tense stop-start builder that sounds like a chorus trying not to become a breakdown.',
      motifSummary: 'muted low-string scrape → two-note climb → octave flare → hard brake', hookShape: '4-4-7-9 / 9-11-7-4',
      rhythmMap: ['1e+a / 2e · scrape battery', '3+ / 4e · two-note climb', '1--- / answer · octave flare', '3+ / 4+ · hard brake'],
      sections: [
        { name: 'verse', chord: 'F#5', feature: 'low-string mutes with a 4-7 shove' },
        { name: 'lift', chord: 'A5', feature: 'openened-up power chord that widens the bar' },
        { name: 'answer', chord: 'E5', feature: '9/11 octave flare on the middle strings' },
        { name: 'turn', chord: 'B5', feature: 'descending brake that snaps back to the root' },
      ],
      tabLines: ['e|----------------|----------------|----------------|----------------|', 'B|----------------|----------------|----------------|----------------|', 'G|----------------|----------------|--11--11--9-----|----------------|', 'D|----------------|--7-----7-------|---9---9--7-----|--9---7---------|', 'A|----------------|--7-----7-------|----------------|--9---7---------|', 'D|-4-x-4-x-4-7-4--|-4-x-4-4-4-7-4--|-0-0-x-0-0-x-0--|--9---7---4-----|'],
      bassPattern: [6, 6, 9, 9, 4, 4, 11, 11], chordRoots: [6, 9, 4, 11],
      commentTemplates: ['Bar 1 is a scrape-and-release riff, not random chugging; the visible 4-7 shove is the whole contour.', 'The lift into A5 matters because it widens the verse instead of just getting louder.', 'That 9/11 flare in bar 3 is why the turnaround sounds authored.', 'Every rehearsal-room band in this fake universe would argue about where the brake actually lands.'],
      guestbook: ['this is exactly the kind of verse our drummer would overplay', 'the bar-3 flare makes the whole fake song believable', 'finally a heavy fragment that leaves room for a singer'],
    },
    {
      id: 'dogwood-battery', tuning: 'D A D G B E', key: 'E minor', progression: ['E5', 'C5', 'G5', 'D5'],
      hero: 'A Piedmont basement mover: open low string pulse, then a chorus-sized climb that still feels house-show mean.',
      motifSummary: 'open E grind → C/G shove → octave rally → D5 reset', hookShape: '2-2-5-7 / 7-9-5-2',
      rhythmMap: ['1e+a / 3+ · open-string grind', '2+ / 4e · chord shove', '1--- / answer · octave rally', '1e+a / 4+ · reset'],
      sections: [
        { name: 'verse', chord: 'E5', feature: 'open low-string pulse around the second fret' },
        { name: 'push', chord: 'C5', feature: 'compact power move that sets up the bigger G5' },
        { name: 'answer', chord: 'G5', feature: '7/9 octave rally with the pedal tone still implied' },
        { name: 'return', chord: 'D5', feature: 'snapped ending that tees the root back up' },
      ],
      tabLines: ['e|----------------|----------------|----------------|----------------|', 'B|----------------|----------------|----------------|----------------|', 'G|----------------|----------------|--9--9--7-------|----------------|', 'D|----------------|--5-----5-------|--7--7--5-------|--7---5---------|', 'A|----------------|--3-----5-------|----------------|--5---5---------|', 'D|-2-2-x-2-2-x-2--|-2-2---5-5-5----|-2-2-x-2-2-x-2--|--0---5---2-----|'],
      bassPattern: [2, 2, 0, 0, 7, 7, 2, 2], chordRoots: [4, 0, 7, 2],
      commentTemplates: ['You can feel the North Carolina version of this immediately: less bludgeon, more push-pull around the octave answer.', 'Bar 2 is the whole writing trick — the C5 only matters because it opens into the G5 shove.', 'The return to D5 gives the singer somewhere to fall back in.', 'This is the kind of tab somebody would print after a Raleigh matinee and start a new band over.'],
      guestbook: ['used the return for a chorus before the page finished loading', 'the answer bar sounds like a crowded Durham room', 'yes this feels way more Carolina than generic heavy'],
    },
  ],
  shimmery: [
    {
      id: 'shimmer-dyads', tuning: 'E A D G B E', key: 'E minor', progression: ['Em(add9)', 'Cmaj7', 'G6', 'Dsus2'],
      hero: 'A chiming open-string progression with a high-answer figure that keeps quoting the verse.',
      motifSummary: 'open E/B shimmer → upper-string answer at 7/8/10 → brief breath → full progression bloom', hookShape: '0-0-7-8 / 10-8-7-0',
      rhythmMap: ['2+ / 4e · open-string shimmer', '2+ / 4e · upper-register answer', '1--- / answer · breath bar', '2+ / 4e · progression bloom'],
      sections: [
        { name: 'verse', chord: 'Em(add9)', feature: 'open E and B ringing through a 0-7-8 figure' },
        { name: 'answer', chord: 'Cmaj7', feature: 'high dyad at 8/8 resolving to 7/7' },
        { name: 'breath', chord: 'G6', feature: 'single melodic thread while the open B keeps chiming' },
        { name: 'turnaround', chord: 'Dsus2', feature: 'return slide into the original suspended voicing' },
      ],
      tabLines: ['e|-0-----0---------|-8-----7-------|-7-----5-------|-0-----0---------|', 'B|-0-----0---------|-8-----8-------|-7-----7-------|-3-----3---------|', 'G|-0h2---0h2-------|-9-----9-------|-7-----7-------|-2-----2---------|', 'D|-2-----2---------|-10----9-------|-5-----4-------|-0-----0---------|', 'A|-2-----3---------|-10----10------|-5-----5-------|-----------------|', 'E|-0-----0---------|-8-----8-------|-3-----3-------|-----------------|'],
      bassPattern: [0, 0, 8, 8, 3, 3, 10, 10], chordRoots: [0, 8, 3, 10],
      commentTemplates: ['The comments keep calling it shimmer because you can literally see the open E and B strings ringing through every bar.', 'Bar 2 is the visible Cmaj7-ish answer at 8/8/9/10, not a separate solo part.', 'The little breath in bar 3 is why the last Dsus2 return lands like a chorus instead of filler.', 'This is one of the first outputs here that reads like a song fragment you could actually finish.'],
      guestbook: ['the suspended top strings are doing exactly the emotional labor people say they are', 'stole the bar 2 answer for a bridge immediately', 'thank you for keeping the open B drone in the tab and in the comments'],
    },
    {
      id: 'mall-glass', tuning: 'E A D G B E', key: 'G major', progression: ['G6', 'Dsus2', 'Em7', 'Cmaj7'],
      hero: 'A chorus-pedal postcard: airy dyads on top, open-string glue underneath.',
      motifSummary: 'high dyad descent → open-string answer → held suspension → repeat with wider ending', hookShape: '12-10-7-5 / 0-0-7-8',
      rhythmMap: ['2+ / 4e · high dyad descent', '2+ / 4e · open-string answer', '1--- / answer · held suspension', '2+ / 4e · wider ending'],
      sections: [
        { name: 'intro', chord: 'G6', feature: '12-10-7 descent against open G/B strings' },
        { name: 'answer', chord: 'Dsus2', feature: 'open-string reply with second-fret suspension' },
        { name: 'hold', chord: 'Em7', feature: 'let-ring dyad on the middle strings' },
        { name: 'turnaround', chord: 'Cmaj7', feature: 'resolve by widening the top interval' },
      ],
      tabLines: ['e|-12---10---7----|-0-----0-------|-7~~~~---------|-8-----7---------|', 'B|-12---10---8----|-3-----3-------|-8~~~~---------|-8-----8---------|', 'G|-12---11---7----|-2-----2-------|-7~~~~---------|-9-----9---------|', 'D|----------------|-0-----0-------|-9~~~~---------|-10----9---------|', 'A|----------------|----------------|-7~~~~---------|-10----10--------|', 'E|-3--------------|----------------|---------------|-8-----8---------|'],
      bassPattern: [7, 7, 2, 2, 4, 4, 9, 9], chordRoots: [7, 2, 4, 9],
      commentTemplates: ['The first bar is that visible 12-10-7 glassy descent; the page should talk about it because it is the riff.', 'Notice how the Dsus2 reply really is just the open-string version of the same contour.', 'Holding the Em7 in bar 3 gives the comments an actual thing to call “let it ring.”', 'This finally reads like a chorus someone forgot to finish, which is exactly the good version of fake musicianship.'],
      guestbook: ['this one sounds like fluorescent lights reflecting off wet asphalt', 'the top-string descent into the open reply is a real songwriting move', 'yes i printed it because the bar 3 hold is weirdly lovely'],
    },
    {
      id: 'carolina-porch-glow', tuning: 'E A D G B E', key: 'C major', progression: ['Cmaj7', 'Am7', 'Fmaj7', 'Gsus2'],
      hero: 'A humid porch-light progression where the top strings keep shining harder than the room deserves.',
      motifSummary: 'high common-tone shimmer → inner-motion answer → open-string hold → suspended lift', hookShape: '7-8-7-5 / 5-3-0-3',
      rhythmMap: ['2+ / 4e · common-tone shimmer', '2+ / 4e · inner-motion answer', '1--- / answer · open hold', '2+ / 4e · suspended lift'],
      sections: [
        { name: 'verse', chord: 'Cmaj7', feature: 'high common tones over a rooted major-7 shape' },
        { name: 'answer', chord: 'Am7', feature: 'same top contour with the bass turned inward' },
        { name: 'hold', chord: 'Fmaj7', feature: 'open e string floating over the grip' },
        { name: 'turnaround', chord: 'Gsus2', feature: 'suspended climb that begs for a vocal pickup' },
      ],
      tabLines: ['e|-7-----7---------|-5-----5-------|-0~~~~---------|-3-----3---------|', 'B|-8-----8---------|-5-----5-------|-1~~~~---------|-3-----3---------|', 'G|-9-----9---------|-5-----5-------|-2~~~~---------|-0-----0---------|', 'D|-10----9---------|-5-----5-------|-3~~~~---------|-0-----0---------|', 'A|-10----10--------|-0-----0-------|----------------|-2-----2---------|', 'E|-8-----8---------|----------------|-1~~~~---------|-3-----3---------|'],
      bassPattern: [0, 0, 9, 9, 5, 5, 7, 7], chordRoots: [0, 9, 5, 7],
      commentTemplates: ['The whole fragment hangs on those common top notes; that is why it feels like Chapel Hill and not anonymous indie wallpaper.', 'Bar 2 works because the Am7 inherits the shimmer instead of resetting it.', 'You can literally see the open string making the Fmaj7 bar glow.', 'This is exactly the kind of chorus that would cause three bands in Carrboro to get weirder on purpose.'],
      guestbook: ['this sounds like humidity on a porch rail in the best way', 'printed it for the suspended turnaround alone', 'the top-note logic is finally doing real songwriting work'],
    },
    {
      id: 'pedestrian-bridge-choir', tuning: 'E A D G B E', key: 'B minor', progression: ['Bm7', 'Gmaj7', 'D(add9)', 'A(add9)'],
      hero: 'A high-open-string progression that feels like somebody wrote it while waiting for rain to stop and it never did.',
      motifSummary: 'top-string glow → descending answer → sustained middle spread → open-voiced release', hookShape: '7-7-10-9 / 7-5-2-0',
      rhythmMap: ['2+ / 4e · top-string glow', '2+ / 4e · descending answer', '1--- / answer · held spread', '2+ / 4e · release'],
      sections: [
        { name: 'verse', chord: 'Bm7', feature: 'voicing built around two shared top strings' },
        { name: 'answer', chord: 'Gmaj7', feature: 'descending upper motion without losing the drone' },
        { name: 'hold', chord: 'D(add9)', feature: 'spread voicing that hangs in the middle register' },
        { name: 'return', chord: 'A(add9)', feature: 'open release setting up the loop again' },
      ],
      tabLines: ['e|-7-----7---------|-7-----5-------|-5~~~~---------|-0-----0---------|', 'B|-7-----7---------|-7-----7-------|-5~~~~---------|-0-----0---------|', 'G|-7-----7---------|-7-----6-------|-7~~~~---------|-6-----6---------|', 'D|-7-----9---------|-5-----5-------|-7~~~~---------|-7-----7---------|', 'A|-9-----9---------|-5-----5-------|-5~~~~---------|-0-----0---------|', 'E|----------------|-3-----3-------|----------------|-----------------|'],
      bassPattern: [11, 11, 7, 7, 2, 2, 9, 9], chordRoots: [11, 7, 2, 9],
      commentTemplates: ['The tab is honest about the drone: those top strings barely move, which is why the whole thing feels haunted.', 'Bar 2 does just enough to darken the verse without abandoning it.', 'Holding the D(add9) is not indulgent — it is the point.', 'This reads like a Eugene river-path band accidentally writing a perfect bridge.'],
      guestbook: ['the held third bar is all i needed', 'finally a shimmer fragment with a believable bass story', 'this is way too printable'],
    },
  ],
  moody: [
    {
      id: 'drone-figure', tuning: 'D A D G B E', key: 'A dorian', progression: ['Am7', 'G', 'Dsus2', 'Am7'],
      hero: 'A moody drone figure that keeps returning to the same open-string center while the melody shifts around it.',
      motifSummary: 'open-A style drone implied over DADGBE → small upper answer → suspended hold → restated opening', hookShape: '0-2-3-2 / 5-3-2-0',
      rhythmMap: ['2+ / 4e · drone figure', '2+ / 4e · answering melody', '1--- / answer · suspended hold', '2+ / 4e · opening restated'],
      sections: [
        { name: 'verse', chord: 'Am7', feature: 'repeating drone against a 0-2-3-2 melody' },
        { name: 'answer', chord: 'G', feature: 'the same contour shifted down to a darker landing' },
        { name: 'hold', chord: 'Dsus2', feature: 'open-string suspension with one note moving inside it' },
        { name: 'return', chord: 'Am7', feature: 'exact opening figure returns so the fragment feels authored' },
      ],
      tabLines: ['e|-0-----0---------|-3-----2-------|-0~~~~---------|-0-----0---------|', 'B|-1-----1---------|-3-----3-------|-3~~~~---------|-1-----1---------|', 'G|-0-----2---------|-0-----0-------|-2~~~~---------|-0-----2---------|', 'D|-2-----2---------|-0-----0-------|-0~~~~---------|-2-----2---------|', 'A|-0-----0---------|-2-----2-------|----------------|-0-----0---------|', 'D|-----------------|----------------|----------------|-----------------|'],
      bassPattern: [9, 9, 7, 7, 0, 0, 9, 9], chordRoots: [9, 7, 0, 9],
      commentTemplates: ['This one finally earns the “yearning” copy because the opening 0-2-3-2 figure literally comes back in bar 4.', 'Bar 3 is not empty; it is the visible Dsus2 suspension with only one interior note changing.', 'You could build a whole verse from the way the answer shadows the first contour instead of abandoning it.', 'Forum note: the tab, progression, and mood text are all talking about the same drone now.'],
      guestbook: ['the recurring opening figure is why this feels like a song fragment and not wallpaper', 'stole the Dsus2 hold for something slower', 'bless whoever kept the answer phrase related to the first bar'],
    },
    {
      id: 'overpass-lantern', tuning: 'E A D G B E', key: 'B minor', progression: ['Bm7', 'Aadd9', 'Gmaj7', 'D/F#'],
      hero: 'A slow-burn figure where the top note barely moves but the harmony keeps changing under it.',
      motifSummary: 'anchored top-string note → darkened answer → middle-register bloom → walking-bass return', hookShape: '7-7-5-7 / 9-7-5-2',
      rhythmMap: ['2+ / 4e · anchored top note', '2+ / 4e · darkened answer', '1--- / answer · middle bloom', '2+ / 4e · walking return'],
      sections: [
        { name: 'verse', chord: 'Bm7', feature: 'anchored top note over a roomy minor voicing' },
        { name: 'answer', chord: 'Aadd9', feature: 'same upper note with the bass stepping down' },
        { name: 'hold', chord: 'Gmaj7', feature: 'soft bloom in the middle strings' },
        { name: 'return', chord: 'D/F#', feature: 'bass-led return that feels like a withheld chorus' },
      ],
      tabLines: ['e|-7-----7---------|-7-----7-------|-7~~~~---------|-5-----2---------|', 'B|-7-----7---------|-0-----0-------|-7~~~~---------|-3-----3---------|', 'G|-7-----7---------|-6-----6-------|-4~~~~---------|-2-----2---------|', 'D|-9-----9---------|-7-----7-------|-5~~~~---------|-0-----0---------|', 'A|-9-----9---------|----------------|-5~~~~---------|-----------------|', 'E|----------------|-5-----5-------|-3~~~~---------|-2-----2---------|'],
      bassPattern: [11, 11, 9, 9, 7, 7, 6, 6], chordRoots: [11, 9, 7, 2],
      commentTemplates: ['The page can finally say “yearning” and point to an actual held top note.', 'Bar 2 is a bass move, not a new riff; that restraint is why it works.', 'The Gmaj7 hold is where the fake scene starts writing real songs.', 'This is exactly the fragment a Portland or Durham band would refuse to overplay.'],
      guestbook: ['the walking return is absurdly usable', 'every bar sounds related without getting boring', 'printed for the bar-3 hold and stayed for the whole thing'],
    },
    {
      id: 'dogwood-afterglow', tuning: 'E A D G B E', key: 'D major', progression: ['Dadd9', 'Bm7', 'Gmaj7', 'A6'],
      hero: 'A Carolina after-midnight progression that keeps one bright string alive while the rest of the room exhales.',
      motifSummary: 'open-string glow → inward minor turn → held major-7 breath → unresolved lift', hookShape: '0-2-5-4 / 2-0-2-0',
      rhythmMap: ['2+ / 4e · glow figure', '2+ / 4e · inward turn', '1--- / answer · held breath', '2+ / 4e · unresolved lift'],
      sections: [
        { name: 'verse', chord: 'Dadd9', feature: 'open top strings against a low D frame' },
        { name: 'answer', chord: 'Bm7', feature: 'same brightness with the bass pulled inward' },
        { name: 'hold', chord: 'Gmaj7', feature: 'let-ring shape that feels larger than the room' },
        { name: 'lift', chord: 'A6', feature: 'gentle lift that refuses full closure' },
      ],
      tabLines: ['e|-0-----0---------|-2-----2-------|-2~~~~---------|-0-----0---------|', 'B|-3-----3---------|-3-----3-------|-3~~~~---------|-2-----2---------|', 'G|-2-----2---------|-2-----2-------|-4~~~~---------|-2-----2---------|', 'D|-0-----0---------|-4-----4-------|-5~~~~---------|-2-----2---------|', 'A|----------------|-2-----2-------|-5~~~~---------|-0-----0---------|', 'E|----------------|----------------|-3~~~~---------|-----------------|'],
      bassPattern: [2, 2, 11, 11, 7, 7, 9, 9], chordRoots: [2, 11, 7, 9],
      commentTemplates: ['This feels Carolina because the bright string never stops doing emotional work.', 'Bar 2 is almost the same picture as bar 1, which is why it sounds like a song and not four chord names.', 'The Gmaj7 breath should stay spacious; do not crowd it with fake lead guitar.', 'If somebody posted this after a Chapel Hill show, three replies would just say “that third bar though.”'],
      guestbook: ['the Gmaj7 bar alone justified opening this site', 'used the A6 lift immediately', 'finally a slow fragment that knows what it is'],
    },
  ],
}

const DEMOS = [
  { id: 'cursed', label: '⚡ cursed mall demo', note: 'Dusty low riff with a fake tape-click pulse.', build() { return createSyntheticBuffer({ duration: 3.2, root: 110, overtone: 220, pulseRate: 8, clickStride: 1800, wobbleDepth: 0.7, decay: 1.1, noiseSeed: 1998 }) } },
  { id: 'dream', label: '🌙 shimmer heartbreak demo', note: 'A chorused, late-night lead line that thinks it is a movie ending.', build() { return createSyntheticBuffer({ duration: 4.1, root: 164.81, overtone: 329.63, pulseRate: 4, clickStride: 2600, wobbleDepth: 1.6, decay: 0.48, overtoneMix: 0.62, noiseSeed: 2000 }) } },
  { id: 'garage', label: '🔥 garage tantrum demo', note: 'Short, rude, distorted eighth-note chugger.', build() { return createSyntheticBuffer({ duration: 2.6, root: 98, overtone: 147, pulseRate: 11, clickStride: 1300, wobbleDepth: 0.28, decay: 1.7, overtoneMix: 0.3, grit: 0.2, noiseSeed: 666 }) } },
]

const app = document.querySelector('#app')
app.innerHTML = `
<div class="page-shell">
  <header class="masthead window chrome">
    <div class="title-strip"><span>~*~ ANGELFIRE TAB NECROMANCER 2000 ~*~</span><span class="blink">ONLINE</span></div>
    <div class="masthead-grid">
      <div>
        <p class="eyebrow">HUM A RIFF. SUMMON A SHRINE.</p>
        <h1>Angelfire Tab Necromancer</h1>
        <p class="lede">Feed it a hummed riff, a rough recording, or one of the cursed demos. It listens for the shape of the phrase, then resurrects a lost late-90s guitar shrine: tab, fake band lore, forum testimony, keeper notes, and sibling realities from the same offering.</p>
        <div class="hero-intro-grid">
          <div class="quickstart-box chrome inset">
            <div class="section-title">First move if you just got here</div>
            <p><strong>Hit <span class="inline-highlight">Use surprise demo</span>.</strong> You will get the full ritual in about two seconds, then you can reroll the same riff into alternate shrine histories.</p>
          </div>
          <div class="quickstart-box chrome inset alt">
            <div class="section-title">What comes back from the dead</div>
            <p>A playable backing track, readable tab, an invented scene-history, and the exact clues that pushed your riff toward this specific weird little corner of the internet.</p>
          </div>
        </div>
        <div class="masthead-marquee"><marquee scrollamount="4">best first click: ⚡ use surprise demo • then reroll sibling realities • pin one • save a relic • print the mini-zine before the mirror disappears</marquee></div>
      </div>
      <aside class="visitor-box">
        <div>visitor count</div>
        <strong id="visitorCount">001337</strong>
        <marquee scrollamount="3">new tabs uploaded from the astral practice space</marquee>
        <div class="tiny-counter">last updated: <span id="clockBadge">03/12/2000 11:59 PM</span></div>
      </aside>
    </div>
  </header>

  <main class="main-grid">
    <section class="window chrome control-panel">
      <h2>1. Feed the Necromancer</h2>
      <div class="button-row">
        <button id="recordBtn" class="retro-button">🎙️ Hum into mic</button>
        <label class="retro-button file-button">📼 Upload riff<input id="fileInput" type="file" accept="audio/*" hidden /></label>
        <button id="demoBtn" class="retro-button alt">⚡ Use surprise demo</button>
      </div>
      <div class="status-box" id="statusBox">Waiting for a riff. Fastest way in: hit surprise demo. Mic capture lasts 6 seconds.</div>
      <div class="ritual-box chrome inset">
        <div class="section-title">How the ritual works</div>
        <ol id="ritualSteps" class="ritual-steps">
          <li data-step="1" class="active">Offer a riff to the archive.</li>
          <li data-step="2">Read the static for contour, density, and scene of origin.</li>
          <li data-step="3">Bind that reading to a band / song myth.</li>
          <li data-step="4">Reveal one shrine reality, then its siblings.</li>
        </ol>
      </div>
      <div class="tiny-form two-up">
        <label>Band / vibe clue <input id="vibeInput" maxlength="64" placeholder="e.g. 'Smashing Pumpkins at the county fair'" /></label>
        <label>Starter demo
          <select id="demoSelect">${DEMOS.map((demo) => `<option value="${demo.id}">${demo.label}</option>`).join('')}</select>
        </label>
      </div>
      <div class="demo-note" id="demoNote"></div>
      <div class="wave-wrap"><canvas id="waveCanvas" width="640" height="120" aria-label="audio preview waveform"></canvas></div>
      <div class="reading-panel chrome inset" id="readingPanel"><div class="section-title">Riff reading</div><p class="placeholder-copy">Your riff reading appears here after the offering is examined.</p></div>
      <div class="tips-box"><div class="section-title">Best first run</div><ol><li>Start with <strong>Use surprise demo</strong> if you want the fantasy instantly.</li><li>Read the riff reading to see what the machine heard in your phrase.</li><li>Reroll sibling realities, pin a favorite, then save or print the keeper card.</li></ol></div>
      <div class="favorites-panel chrome inset"><div class="section-title">Saved relics</div><div id="favoritesList" class="favorites-list"><p class="placeholder-copy">No saved relics yet.</p></div></div>
    </section>

    <section class="window chrome shrine-panel">
      <div class="panel-head">
        <h2>2. Resurrected Shrine</h2>
        <div class="panel-actions">
          <button id="playBtn" class="retro-button small">▶ play backing track</button>
          <button id="pinBtn" class="retro-button small">📌 pin current</button>
          <button id="favoriteBtn" class="retro-button small">💾 save relic</button>
          <button id="shareBtn" class="retro-button small">🔗 copy permalink</button>
          <button id="printBtn" class="retro-button small">🖨️ print zine / pdf</button>
          <button id="rerollBtn" class="retro-button small alt">🎲 reroll same riff</button>
        </div>
      </div>
      <div id="lineagePanel" class="lineage-panel chrome inset"><div class="section-title">Sibling realities</div><div class="lineage-strip"><span class="placeholder-copy">Reveal a shrine to compare variants from the same offering.</span></div></div>
      <article id="shrine" class="shrine shrine-empty"><div><div class="construction">NO SHRINE SUMMONED YET</div><p>Start with <strong>⚡ Use surprise demo</strong> for the fastest resurrection, or feed the machine your own riff to see what kind of tab-forum myth it insists on preserving.</p></div></article>
    </section>
  </main>
</div>`

const state = {
  audioBuffer: null,
  audioContext: null,
  mediaRecorder: null,
  stream: null,
  generated: null,
  recipe: null,
  rerollCount: 0,
  pinned: null,
  favorites: loadFavorites(),
}

const el = {
  recordBtn: document.querySelector('#recordBtn'), fileInput: document.querySelector('#fileInput'), demoBtn: document.querySelector('#demoBtn'),
  demoSelect: document.querySelector('#demoSelect'), demoNote: document.querySelector('#demoNote'), playBtn: document.querySelector('#playBtn'), shareBtn: document.querySelector('#shareBtn'),
  printBtn: document.querySelector('#printBtn'), rerollBtn: document.querySelector('#rerollBtn'), vibeInput: document.querySelector('#vibeInput'), shrine: document.querySelector('#shrine'),
  statusBox: document.querySelector('#statusBox'), visitorCount: document.querySelector('#visitorCount'), clockBadge: document.querySelector('#clockBadge'), waveCanvas: document.querySelector('#waveCanvas'),
  ritualSteps: document.querySelector('#ritualSteps'), readingPanel: document.querySelector('#readingPanel'), lineagePanel: document.querySelector('#lineagePanel'), pinBtn: document.querySelector('#pinBtn'),
  favoriteBtn: document.querySelector('#favoriteBtn'), favoritesList: document.querySelector('#favoritesList'),
}

function hashString(input) { let h = 2166136261; for (let i = 0; i < input.length; i += 1) { h ^= input.charCodeAt(i); h = Math.imul(h, 16777619) } return h >>> 0 }
function mulberry32(seed) { return function rand() { let t = (seed += 0x6d2b79f5); t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296 } }
function escapeHtml(str = '') { return String(str).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;') }
function pick(rand, items) { return items[Math.floor(rand() * items.length)] }
function shuffle(rand, items) { const copy = [...items]; for (let i = copy.length - 1; i > 0; i -= 1) { const j = Math.floor(rand() * (i + 1)); [copy[i], copy[j]] = [copy[j], copy[i]] } return copy }
function clamp(value, min, max) { return Math.min(max, Math.max(min, value)) }

async function getAudioContext() { if (!state.audioContext) state.audioContext = new window.AudioContext(); if (state.audioContext.state === 'suspended') await state.audioContext.resume(); return state.audioContext }
function setStatus(message) { el.statusBox.textContent = message }
function setRitualStep(step) { Array.from(el.ritualSteps.querySelectorAll('li')).forEach((item, index) => { item.classList.toggle('active', index + 1 === step); item.classList.toggle('done', index + 1 < step) }) }
function updateClockBadge() { el.clockBadge.textContent = new Date().toLocaleString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }) }

function drawWaveform(samples = []) {
  const ctx = el.waveCanvas.getContext('2d'); const { width, height } = el.waveCanvas
  ctx.clearRect(0, 0, width, height); ctx.fillStyle = '#05010d'; ctx.fillRect(0, 0, width, height)
  ctx.strokeStyle = 'rgba(255,255,255,0.12)'; ctx.lineWidth = 1
  for (let x = 0; x < width; x += 32) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke() }
  ctx.beginPath(); ctx.strokeStyle = '#00f6ff'; ctx.lineWidth = 2
  const count = samples.length || 64
  for (let i = 0; i < count; i += 1) {
    const value = samples[i] ?? Math.sin(i / 4) * 0.2
    const x = (i / (count - 1 || 1)) * width; const y = height / 2 + value * height * 0.38
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y)
  }
  ctx.stroke(); ctx.beginPath(); ctx.strokeStyle = '#ff66d9'; ctx.moveTo(0, height / 2); ctx.lineTo(width, height / 2); ctx.stroke()
}

function createSyntheticBuffer({ duration = 3.2, root = 110, overtone = 220, pulseRate = 8, clickStride = 1800, wobbleDepth = 0.7, decay = 1.1, overtoneMix = 0.45, grit = 0.08, noiseSeed = 1 }) {
  const sampleRate = 22050; const length = Math.floor(sampleRate * duration); const buffer = new AudioBuffer({ length, numberOfChannels: 1, sampleRate }); const data = buffer.getChannelData(0); const noiseRand = mulberry32(noiseSeed)
  for (let i = 0; i < length; i += 1) {
    const t = i / sampleRate
    const envelope = Math.exp(-t * decay)
    const pulse = Math.sin(t * 2 * Math.PI * root + Math.sin(t * pulseRate) * wobbleDepth) * envelope
    const overt = overtoneMix * Math.sin(t * 2 * Math.PI * overtone + Math.sin(t * 5.2) * (wobbleDepth / 2))
    const click = (i % clickStride < clickStride * 0.12 ? 0.14 : 0) * Math.sin(t * 2 * Math.PI * 880)
    const noise = (noiseRand() * 2 - 1) * grit * envelope
    data[i] = Math.max(-1, Math.min(1, (pulse + overt + click + noise) * 0.65))
  }
  return buffer
}

function sampleFeatures(audioBuffer) {
  const data = audioBuffer.getChannelData(0)
  const slices = 72; const step = Math.max(1, Math.floor(data.length / slices)); const amplitudes = []
  let rmsSum = 0; let zeroCrossings = 0; let peak = 0; let attackPeak = 0; let tailAvg = 0; let brightEnergy = 0; let transitions = 0
  for (let i = 0; i < data.length; i += 1) {
    const sample = data[i]; const abs = Math.abs(sample); rmsSum += sample * sample; peak = Math.max(peak, abs)
    if (i < data.length * 0.15) attackPeak = Math.max(attackPeak, abs)
    if (i > data.length * 0.7) tailAvg += abs
    if (i > 0 && Math.sign(sample) !== Math.sign(data[i - 1])) zeroCrossings += 1
    if (i > 0) { const delta = Math.abs(sample - data[i - 1]); brightEnergy += delta; if (delta > 0.18) transitions += 1 }
  }
  for (let i = 0; i < slices; i += 1) {
    let sum = 0; const start = i * step; const end = Math.min(data.length, start + step)
    for (let j = start; j < end; j += 1) sum += Math.abs(data[j])
    amplitudes.push(end > start ? sum / (end - start) : 0)
  }
  const density = amplitudes.filter((v) => v > 0.08).length / amplitudes.length
  return {
    duration: audioBuffer.duration,
    rms: Math.sqrt(rmsSum / data.length),
    peak,
    zeroRate: zeroCrossings / data.length,
    amplitudes,
    attack: attackPeak,
    sustain: tailAvg / Math.max(1, Math.floor(data.length * 0.3)),
    brightness: brightEnergy / data.length,
    density,
    transitionRate: transitions / data.length,
  }
}

function classifyMood(meta) {
  if (meta.duration > 3.7 && meta.sustain > 0.08) return 'shimmery'
  if (meta.rms > 0.22 || meta.peak > 0.72 || meta.attack > 0.7) return 'feral'
  if (meta.zeroRate > 0.12 || meta.duration > 3.4 || (meta.sustain > 0.03 && meta.brightness > 0.015)) return 'shimmery'
  return 'moody'
}

function createReading(features, vibe = '') {
  const moodKey = classifyMood(features)
  const mood = MOODS[moodKey]
  const attackShape = features.attack > 0.72 ? 'hard first-strike attack' : features.attack > 0.5 ? 'present attack edge' : 'soft-edged arrival'
  const sustainShape = features.sustain > 0.034 ? 'long sustain tail' : features.sustain > 0.02 ? 'mid-length ring' : 'short clipped decay'
  const densityLabel = features.density > 0.64 ? 'crowded pulse density' : features.density > 0.4 ? 'steady phrase density' : 'airier phrase spacing'
  const brightnessLabel = features.brightness > 0.02 ? 'bright static scatter' : features.brightness > 0.013 ? 'balanced grit shimmer' : 'darker wooly grain'
  const emotion = mood.lane
  const why = []
  if (features.sustain > 0.03) why.push('long sustain pulled the shrine toward open-string smear and memory-drunk phrasing')
  if (features.attack > 0.65) why.push('strong attack made the tab chuggier and pushed the page toward more confrontational copy')
  if (features.density < 0.4) why.push('more air between phrases opened room for dropout bars and answer phrases')
  if (features.brightness > 0.018) why.push('extra top-end static favored shimmer, gloss, and more nervous forum testimony')
  if (features.zeroRate < 0.1) why.push('lower zero-crossing kept the myth heavier and more monolithic')
  if (why.length < 3) why.push('the offering landed in a middle lane, so the machine preserved ambiguity instead of over-solving it')
  return {
    moodKey,
    descriptors: [attackShape, sustainShape, densityLabel, brightnessLabel, emotion],
    why: why.slice(0, 4),
    emotionalLane: emotion,
    vibeEcho: vibe?.trim() ? `Vibe clue bent the page toward “${vibe.trim()}.”` : 'No extra vibe clue was given, so the archive leaned on the audio alone.',
  }
}

function buildGenerationRecipe(meta) {
  const features = { duration: meta.duration, rms: meta.rms, peak: meta.peak, zeroRate: meta.zeroRate, amplitudes: meta.amplitudes, attack: meta.attack, sustain: meta.sustain, brightness: meta.brightness, density: meta.density, transitionRate: meta.transitionRate }
  const vibe = meta.vibe || ''; const sourceLabel = meta.sourceLabel || 'unknown offering'; const reading = createReading(features, vibe)
  const recipeFingerprint = JSON.stringify({ features, sourceLabel, vibe, reading })
  return { version: 3, features, sourceLabel, vibe, reading, baseSeed: hashString(recipeFingerprint) }
}

function buildVariantMeta(recipe, reroll = 0) { return { ...recipe.features, sourceLabel: recipe.sourceLabel, vibe: recipe.vibe, reading: recipe.reading, exactSeed: hashString(`${recipe.baseSeed}:${reroll}`), baseSeed: recipe.baseSeed, reroll } }

function tabToken(rand, pool, fretBase) {
  const roll = rand()
  if (roll > 0.88) return `${fretBase + Math.floor(rand() * 5)}b${fretBase + 2}`
  if (roll > 0.73) return `${fretBase + Math.floor(rand() * 4)}${pick(rand, ['h', 'p', '/'])}${fretBase + 1 + Math.floor(rand() * 4)}`
  if (roll > 0.58) return `${pick(rand, pool)}`
  return `${Math.max(0, fretBase + Math.floor(rand() * 8) - 2)}`
}

function chooseSongProfile(rand, moodKey, meta) {
  const options = SONGBOOK[moodKey] || SONGBOOK.moody
  const index = Math.abs((meta.baseSeed ?? meta.exactSeed ?? 0) + meta.reroll) % options.length
  return options[index] || options[0]
}

function buildMotifs(profile) {
  const hook = profile.hookShape.split(' / ')
  return {
    motifA: hook[0].split('-'),
    answer: (hook[1] || hook[0]).split('-'),
    motifB: profile.sections.map((section) => section.chord),
    lane: profile.hero,
  }
}

function makeTabLines(profile) {
  return {
    lines: profile.tabLines.join('\n'),
    rhythmMap: profile.rhythmMap,
    motifs: buildMotifs(profile),
    bars: profile.tabLines[0].split('|').length - 2,
  }
}

function inferScene(rand, meta, moodKey) {
  const vibe = (meta.vibe || '').toLowerCase()
  const source = (meta.sourceLabel || '').toLowerCase()
  const southeastHints = ['raleigh', 'durham', 'chapel hill', 'carrboro', 'charlotte', 'greensboro', 'winston', 'wilmington', 'north carolina', 'triangle', 'piedmont']
  const pnwHints = ['eugene', 'salem', 'corvallis', 'portland', 'springfield', 'oregon', 'pnw', 'willamette', 'cascadia']
  const haystack = `${vibe} ${source}`
  if (southeastHints.some((hint) => haystack.includes(hint))) return REGIONAL_SCENES.nc
  if (pnwHints.some((hint) => haystack.includes(hint))) return REGIONAL_SCENES.pnw
  if (moodKey === 'shimmery' && meta.duration > 3.85 && meta.brightness > 0.017) return rand() > 0.42 ? REGIONAL_SCENES.nc : REGIONAL_SCENES.pnw
  if (moodKey === 'feral' && meta.attack > 0.66 && meta.density > 0.5) return rand() > 0.48 ? REGIONAL_SCENES.pnw : REGIONAL_SCENES.nc
  return rand() > 0.5 ? REGIONAL_SCENES.pnw : REGIONAL_SCENES.nc
}

function buildTracklist(rand, title, band, scene) {
  return [title, `${pick(rand, TITLE_PREFIXES)} ${pick(rand, TITLE_SUBJECTS)}`, `${band.albums[0].split(' (')[0]} (mirror rip)`, `${pick(rand, scene.smallTowns)} rehearsal dub`, `${pick(rand, TITLE_PREFIXES)} ${pick(rand, TITLE_SUFFIXES)}`]
}
function buildGear(rand, moodKey, scene) {
  return {
    guitar: pick(rand, scene.guitars),
    amp: pick(rand, scene.amps),
    pedal: pick(rand, moodKey === 'shimmery' ? scene.pedals.shimmery : scene.pedals.heavy),
    room: pick(rand, moodKey === 'shimmery' ? scene.rooms.shimmery : scene.rooms.heavy),
    talk: pick(rand, scene.gearTalk),
  }
}

function buildCanon(rand, meta, moodKey, title) {
  const scene = inferScene(rand, meta, moodKey)
  const band = pick(rand, BANDS[scene.id]); const archetypeIndex = meta.reading ? (Math.floor((meta.reading.descriptors.join('').length + meta.reroll) % SHRINE_ARCHETYPES.length)) : Math.floor(rand() * SHRINE_ARCHETYPES.length); const archetype = SHRINE_ARCHETYPES[archetypeIndex]
  const songSlot = 1 + Math.floor(rand() * 4); const recordingOrigin = pick(rand, scene.recordingOrigins)
  const shrineKeeper = pick(rand, scene.keeperHandles)
  const venue = pick(rand, scene.venues)
  const flyer = pick(rand, scene.flyerLanguage)
  const memoryTag = pick(rand, scene.memoryTags)
  const drama = pick(rand, scene.forumDrama)
  const songHistory = [
    `${band.name} formed in ${band.hometown} and spent ${band.years} haunting ${venue} and nearby all-ages rooms with amps louder than their flyers suggested.`,
    `${title} is generally listed by fans as track ${songSlot} from ${pick(rand, band.albums)}, though arguments continue because at least one tape rip reversed the order and one flyer promised a different title.`,
    `The surviving source appears to be ${recordingOrigin}; this shrine was canonized by ${shrineKeeper} after two prior mirrors vanished. Flyer residue still reads: “${flyer}.”`,
    `${band.lore} Local memory tag: ${memoryTag}. Ongoing forum drama: ${drama}. The consensus is that the tab is not exact, but emotionally binding.`,
  ]
  return { band, archetype, shrineKeeper, songHistory, recordingOrigin, scene, venue, flyer, memoryTag, drama }
}

function buildForumComments(rand, canon, title, backing, moodKey, profile) {
  const offset = canon.archetype.id === 'gearhead' ? 0 : canon.archetype.id === 'foodcourt' ? 2 : canon.archetype.id === 'youthgroup' ? 4 : 1
  return profile.commentTemplates.map((text, i) => ({ user: FORUM_USERS[(offset + i) % FORUM_USERS.length], score: `${7 + i}/1${i}`, text: `${text} ${i === profile.commentTemplates.length - 1 ? `Also: ${canon.drama}.` : ''}`.trim() }))
}

function buildGuestbook(rand, title, band, archetypeId, profile, scene) {
  const places = [band.hometown, `${pick(rand, scene.smallTowns)}, ${scene.id === 'pnw' ? 'OR' : 'NC'}`, 'AOL keyword: guitar', 'inside a Geo Prism', `${pick(rand, scene.venues)}`]
  return profile.guestbook.map((text) => ({ name: pick(rand, FORUM_USERS), place: pick(rand, places), text: `${text} (${pick(rand, scene.memoryTags)})` }))
}

function buildRarePull(rand, canon) {
  const roll = rand()
  if (roll < 0.18) return pick(rand, canon.scene.rareEvents)
  if (canon.archetype.id === 'catacomb' && roll < 0.36) return 'correction added 08/14/01'
  if (canon.archetype.id === 'foodcourt' && roll < 0.36) return canon.scene.id === 'nc' ? 'parking-lot polaroid attached' : 'photo-booth caption attached'
  if (canon.archetype.id === 'gearhead' && roll < 0.36) return 'amp-setting dispute unlocked'
  if (canon.archetype.id === 'youthgroup' && roll < 0.36) return 'testimony card went unreasonably hard'
  return null
}

function buildArchetypeModules(shrine) {
  const { archetype } = shrine.canon
  const commonTab = `<div class="tab-block chrome inset readable-tab"><div class="section-title">Recovered tablature</div><div class="tab-toolbar"><span>Tuning: ${escapeHtml(shrine.tuning)}</span><span>Progression: ${escapeHtml(shrine.chordHints.join(' → '))}</span><span>Seed: ${shrine.seed}</span></div><pre>${escapeHtml(shrine.tabs)}</pre><div class="tab-legend">Legend: h = hammer-on · p = pull-off · / = slide · b = bend · x = mute · PM = palm mute-ish</div><div class="rhythm-strip">${shrine.rhythmMap.map((map) => `<span>${escapeHtml(map)}</span>`).join('')}</div></div>`
  const whyBlock = `<details class="chrome inset inspect-block" ${shrine.reroll === 0 ? 'open' : ''}><summary>why this shrine happened</summary><ul>${shrine.reading.why.map((line) => `<li>${escapeHtml(line)}</li>`).join('')}</ul><p>${escapeHtml(shrine.reading.vibeEcho)}</p><p>${escapeHtml(archetype.voices.inspect)}</p></details>`
  const comments = `<div class="forum-block chrome inset"><div class="section-title">${escapeHtml(archetype.id === 'gearhead' ? 'take-comparison wall' : archetype.id === 'foodcourt' ? 'reply chain' : archetype.id === 'youthgroup' ? 'testimony cards' : 'annotation rail')}</div>${shrine.comments.map((comment) => `<div class="comment"><strong>${escapeHtml(comment.user)}</strong><span class="comment-score">cred score: ${escapeHtml(comment.score)}</span><p>${escapeHtml(comment.text)}</p></div>`).join('')}</div>`
  const guestbook = `<div class="chrome inset guestbook-block"><div class="section-title">${escapeHtml(archetype.id === 'foodcourt' ? 'diary residue' : archetype.id === 'gearhead' ? 'scene rumor log' : archetype.id === 'youthgroup' ? 'warning / witness notes' : 'guestbook / corrections')}</div>${shrine.guestbook.map((entry) => `<div class="guest-entry"><strong>${escapeHtml(entry.name)}</strong><span>${escapeHtml(entry.place)}</span><p>${escapeHtml(entry.text)}</p></div>`).join('')}</div>`
  const gear = `<div class="chrome inset gear-block"><div class="section-title">${escapeHtml(archetype.id === 'gearhead' ? 'signal chain dossier' : archetype.id === 'foodcourt' ? 'mall weather' : archetype.id === 'youthgroup' ? 'caution inventory' : 'archive hardware')}</div><ul><li><strong>guitar:</strong> ${escapeHtml(shrine.gear.guitar)}</li><li><strong>amp:</strong> ${escapeHtml(shrine.gear.amp)}</li><li><strong>pedal:</strong> ${escapeHtml(shrine.gear.pedal)}</li><li><strong>room tone:</strong> ${escapeHtml(shrine.gear.room)}</li><li><strong>scene talk:</strong> ${escapeHtml(shrine.gear.talk)}</li><li><strong>motif transform:</strong> ${escapeHtml(shrine.motifSummary)}</li><li><strong>flyer line:</strong> ${escapeHtml(shrine.flyerLine)}</li></ul></div>`
  const track = `<div class="chrome inset"><div class="section-title">${escapeHtml(archetype.id === 'foodcourt' ? 'memory stack' : archetype.id === 'gearhead' ? 'take sheet' : archetype.id === 'youthgroup' ? 'sanitized order of play' : 'page lore / tracklist')}</div><div class="tracklist">${shrine.tracklist.map((track, index) => `<div><span>${index + 1}.</span><span>${escapeHtml(track)}</span></div>`).join('')}</div><div class="setlist-box">${shrine.sections.map((section) => `<span>${escapeHtml(section)}</span>`).join('')}</div></div>`
  if (archetype.id === 'foodcourt') return `<section class="content-grid top-content-grid"><div class="sidebar-stack">${whyBlock}${guestbook}${gear}</div><div>${commonTab}${comments}</div></section><section class="content-grid lower-grid"><div>${track}</div><div class="chrome inset love-note"><div class="section-title">one-person evidence</div><p>${escapeHtml(shrine.heroLine)}</p><p>${escapeHtml(archetype.voices.hero)}</p></div></section>`
  if (archetype.id === 'gearhead') return `<section class="content-grid top-content-grid"><div>${gear}${commonTab}</div><div class="sidebar-stack">${whyBlock}${comments}${guestbook}</div></section><section class="content-grid lower-grid"><div>${track}</div><div class="chrome inset love-note"><div class="section-title">forensic summary</div><p>${escapeHtml(shrine.heroLine)}</p><p>${escapeHtml(archetype.voices.hero)}</p></div></section>`
  if (archetype.id === 'youthgroup') return `<section class="content-grid top-content-grid"><div class="chrome inset warning-sheet"><div class="section-title">warning tract</div><p>${escapeHtml(shrine.heroLine)}</p><p>${escapeHtml(archetype.voices.hero)}</p></div><div class="sidebar-stack">${whyBlock}${comments}</div></section><section class="content-grid lower-grid"><div>${commonTab}</div><div>${gear}${guestbook}${track}</div></section>`
  return `<section class="content-grid top-content-grid"><div>${whyBlock}${commonTab}</div><div class="sidebar-stack">${comments}${gear}</div></section><section class="content-grid lower-grid"><div>${track}</div><div>${guestbook}<div class="chrome inset love-note"><div class="section-title">archive marginalia</div><p>${escapeHtml(shrine.heroLine)}</p><p>${escapeHtml(archetype.voices.hero)}</p></div></div></section>`
}

function progressionRoots(progression) {
  const map = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 }
  return progression.map((chord) => {
    const normalized = chord.replace('Bb', 'A#').replace('Eb', 'D#')
    const note = normalized[0]
    const accidental = normalized[1] === '#' ? 1 : 0
    return (map[note] + accidental + 12) % 12
  })
}

function generateShrine(meta) {
  const seed = meta.exactSeed ?? hashString(JSON.stringify(meta)); const rand = mulberry32(seed); const moodKey = classifyMood(meta); const mood = MOODS[moodKey]
  const title = `${pick(rand, TITLE_PREFIXES)} ${pick(rand, TITLE_SUBJECTS)} ${pick(rand, TITLE_SUFFIXES)}`; const bpm = 76 + Math.floor(rand() * 72)
  const canon = buildCanon(rand, meta, moodKey, title); const profile = chooseSongProfile(rand, moodKey, meta); const tuning = profile.tuning || pick(rand, TUNINGS); const key = profile.key || pick(rand, KEYS); const era = pick(rand, ERAS)
  const badges = shuffle(rand, [...BADGES, ...canon.scene.badges]).slice(0, 4); const stamps = shuffle(rand, [...STAMPS, ...canon.scene.stamps]).slice(0, 3); const tab = makeTabLines(profile); const chordHints = profile.progression
  const sections = profile.sections.map((section, index) => `${section.name} · ${section.chord} · ${section.feature}`)
  const roots = profile.chordRoots || progressionRoots(chordHints)
  const backing = { tempo: bpm, rootMidi: 38 + roots[0], progression: chordHints, bassPattern: profile.bassPattern || roots.flatMap((root) => [root, root]), drumPattern: mood.drumStyle, shimmer: moodKey === 'shimmery', form: profile.sections.map((section) => section.name), hookShape: profile.hookShape, chordRoots: roots }
  const comments = buildForumComments(rand, canon, title, backing, moodKey, profile); const gear = buildGear(rand, moodKey, canon.scene); const guestbook = buildGuestbook(rand, title, canon.band, canon.archetype.id, profile, canon.scene); const rarePull = buildRarePull(rand, canon)
  const heroLine = canon.archetype.id === 'foodcourt'
    ? `${profile.hero} Nobody can prove ${title} was about one person, which is why everyone knows it was.`
    : canon.archetype.id === 'gearhead'
      ? `${profile.hero} ${title} feels reconstructed from the exact voicings shown below, not vague room-tone lore.`
      : canon.archetype.id === 'youthgroup'
        ? `${profile.hero} This page condemns the riff with one hand and preserves the visible chord shapes with the other.`
        : `${profile.hero} ${title} survives because the recurrence is strong enough to feel authored.`

  return { version: 8, seed, baseSeed: meta.baseSeed ?? seed, reroll: meta.reroll ?? 0, title, mood: mood.label, bpm, tuning, key, era, vibe: meta.vibe || 'mysterious mall-goth intention', tabs: tab.lines, rhythmMap: tab.rhythmMap, comments, badges, stamps, backdrop: pick(rand, ['radial-gradient(circle at top, rgba(255,0,255,0.22), transparent 30%), repeating-linear-gradient(0deg, #12051f 0 2px, #0b0312 2px 4px)', 'radial-gradient(circle at 20% 20%, rgba(0,255,255,0.16), transparent 25%), linear-gradient(180deg, #190019, #03030a)', 'linear-gradient(180deg, #1f0935, #07040b 60%), repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 8px)', 'radial-gradient(circle at 80% 0%, rgba(255,238,99,0.15), transparent 28%), linear-gradient(180deg, #250026, #080811 66%)']), backing, relicText: `Recovered from ${canon.recordingOrigin} during ${era}. Source offering: ${meta.sourceLabel}.`, waveform: meta.amplitudes, tracklist: buildTracklist(rand, title, canon.band, canon.scene), gear, webring: pick(rand, canon.scene.webrings), guestbook, chordHints, sections, sourceLabel: meta.sourceLabel, stats: { duration: `${meta.duration.toFixed(3)} sec`, rms: meta.rms.toFixed(6), zeroRate: meta.zeroRate.toFixed(6), peak: meta.peak.toFixed(6), attack: meta.attack.toFixed(6), sustain: meta.sustain.toFixed(6), brightness: meta.brightness.toFixed(6), density: meta.density.toFixed(6) }, counter: String(120000 + (seed % 700000)).padStart(6, '0'), canon, reading: meta.reading, rarePull, heroLine, motifSummary: profile.motifSummary, songProfile: profile, vocabNote: mood.vocab, sceneLabel: canon.scene.label, flyerLine: canon.flyer, memoryTag: canon.memoryTag }
}

function renderReading(recipe) {
  if (!recipe?.reading) return
  el.readingPanel.innerHTML = `<div class="section-title">Riff reading</div><div class="descriptor-grid">${recipe.reading.descriptors.map((d) => `<span class="descriptor-chip">${escapeHtml(d)}</span>`).join('')}</div><p class="reading-lede">Likely emotional lane: <strong>${escapeHtml(recipe.reading.emotionalLane)}</strong>.</p><p>${escapeHtml(recipe.reading.vibeEcho)}</p>`
}

function renderLineage() {
  if (!state.recipe) return
  const variants = [0, 1, 2].map((reroll) => generateShrine(buildVariantMeta(state.recipe, reroll)))
  const compareMessage = !state.pinned
    ? '<div class="compare-banner">Pin one variant to compare your favorite remembered reality.</div>'
    : state.pinned.seed === state.generated.seed
      ? `<div class="compare-banner">Pinned <strong>${escapeHtml(state.pinned.title)}</strong>. Jump to another sibling to compare alternate histories.</div>`
      : `<div class="compare-banner">Pinned against current: <strong>${escapeHtml(state.pinned.title)}</strong> ↔ <strong>${escapeHtml(state.generated.title)}</strong></div>`
  el.lineagePanel.innerHTML = `<div class="section-title">Sibling realities</div><div class="lineage-strip">${variants.map((variant) => `<button class="lineage-card ${variant.reroll === state.rerollCount ? 'active' : ''} ${state.pinned?.seed === variant.seed ? 'pinned' : ''}" data-reroll="${variant.reroll}"><strong>v${variant.reroll + 1}</strong><span>${escapeHtml(variant.title)}</span><em>${escapeHtml(variant.canon.archetype.label)}</em></button>`).join('')}</div>${compareMessage}`
  el.lineagePanel.querySelectorAll('[data-reroll]').forEach((button) => button.addEventListener('click', () => {
    state.rerollCount = Number(button.dataset.reroll)
    state.generated = generateShrine(buildVariantMeta(state.recipe, state.rerollCount))
    renderShrine(state.generated); persistToHash(); setStatus(`Jumped to sibling reality #${state.rerollCount + 1}.`)
  }))
}

function renderFavorites() {
  if (!state.favorites.length) { el.favoritesList.innerHTML = '<p class="placeholder-copy">No saved relics yet.</p>'; return }
  el.favoritesList.innerHTML = state.favorites.map((favorite, index) => `<button class="favorite-card" data-favorite="${index}"><strong>${escapeHtml(favorite.title)}</strong><span>${escapeHtml(favorite.archetype)}</span><em>${escapeHtml(favorite.note || 'saved permalink')}</em></button>`).join('')
  el.favoritesList.querySelectorAll('[data-favorite]').forEach((button) => button.addEventListener('click', () => { window.location.href = state.favorites[Number(button.dataset.favorite)].url }))
}

function renderShrine(shrine) {
  document.body.style.background = shrine.backdrop; el.visitorCount.textContent = shrine.counter; el.shrine.className = `shrine ${shrine.canon.archetype.className}`
  el.shrine.innerHTML = `
  <section class="hero-banner chrome inset hero-gradient">
    <div>
      <div class="gif-row"><span class="gif-pill blink">NEW!!</span><span class="gif-pill">${escapeHtml(shrine.canon.archetype.label)}</span><span class="gif-pill blink">RIFF → MYTH</span>${shrine.stamps.map((stamp) => `<span class="gif-pill alt">${escapeHtml(stamp)}</span>`).join('')}</div>
      <h3>${escapeHtml(shrine.title)}</h3>
      <p class="subtitle">${escapeHtml(shrine.vibe)} · ${escapeHtml(shrine.key)} · ${shrine.bpm} BPM · ${escapeHtml(shrine.mood)}</p>
      <p class="source-note">Source offering: ${escapeHtml(shrine.sourceLabel)} · Webring: ${escapeHtml(shrine.webring)} · Layout: ${escapeHtml(shrine.canon.archetype.layoutLabel)} · Variant: ${shrine.reroll + 1}</p>
      <div class="reading-summary">${shrine.reading.descriptors.slice(0, 3).map((d) => `<span class="descriptor-chip small">${escapeHtml(d)}</span>`).join('')}</div>
    </div>
    <div class="cd-box"><div class="cd-disc"></div><div class="rating-box"><strong>riff potency</strong><span>${7 + (shrine.seed % 4)} / 10 skull picks</span>${shrine.rarePull ? `<span class="rare-pull">rare pull: ${escapeHtml(shrine.rarePull)}</span>` : ''}</div></div>
  </section>
  <section class="stats-grid"><div class="mini-window"><strong>Tuning</strong><span>${escapeHtml(shrine.tuning)}</span></div><div class="mini-window"><strong>Era recovered</strong><span>${escapeHtml(shrine.era)}</span></div><div class="mini-window"><strong>Scene cluster</strong><span>${escapeHtml(shrine.sceneLabel)}</span></div><div class="mini-window"><strong>Band canon</strong><span>${escapeHtml(shrine.canon.band.name)} · ${escapeHtml(shrine.canon.band.hometown)}</span></div><div class="mini-window"><strong>Archive note</strong><span>${escapeHtml(shrine.relicText)}</span></div></section>
  <section class="canon-strip chrome inset"><div class="section-title">CANON SHRINE HISTORY</div><div class="canon-grid"><div><strong>keeper of record</strong><p>${escapeHtml(shrine.canon.shrineKeeper)} — ${escapeHtml(shrine.canon.archetype.tagline)}</p></div><div><strong>scene cluster</strong><p>${escapeHtml(shrine.sceneLabel)}</p></div><div><strong>members</strong><p>${escapeHtml(shrine.canon.band.members.join(' · '))}</p></div><div><strong>records</strong><p>${escapeHtml(shrine.canon.band.albums.join(' / '))}</p></div><div><strong>motif logic</strong><p>${escapeHtml(shrine.motifSummary)}</p></div><div><strong>memory tag</strong><p>${escapeHtml(shrine.memoryTag)}</p></div></div><div class="history-spine">${shrine.canon.songHistory.map((line) => `<p>${escapeHtml(line)}</p>`).join('')}</div></section>
  ${buildArchetypeModules(shrine)}
  <section class="zine-sheet chrome inset"><div class="section-title">KEEPER CARD / FOLD-OUT MINI ZINE</div><div class="zine-grid"><div><h4>cover</h4><p>${escapeHtml(shrine.title)}</p></div><div><h4>band canon</h4><p>${escapeHtml(shrine.canon.band.name)} / ${escapeHtml(shrine.canon.band.hometown)}</p></div><div><h4>riff reading</h4><p>${escapeHtml(shrine.reading.descriptors.join(' · '))}</p></div><div><h4>rare pull</h4><p>${escapeHtml(shrine.rarePull || 'none this time')}</p></div><div><h4>hero line</h4><p>${escapeHtml(shrine.heroLine)}</p></div><div><h4>hook shape</h4><p>${escapeHtml(shrine.backing.hookShape)}</p></div></div></section>
  <footer class="badge-wall chrome inset">${shrine.badges.map((badge) => `<span class="badge blink">${escapeHtml(badge)}</span>`).join('')}</footer>`
  drawWaveform(shrine.waveform.map((value, index) => ((index % 2 === 0 ? 1 : -1) * value * 1.8))); renderLineage(); renderFavorites()
}

function encodeState(recipe, reroll) { return btoa(unescape(encodeURIComponent(JSON.stringify({ v: 3, f: recipe.features, s: recipe.sourceLabel, i: recipe.vibe, b: recipe.baseSeed, x: reroll })))) }
function decodeState(hash) { const payload = JSON.parse(decodeURIComponent(escape(atob(hash)))); if (payload.v !== 3) throw new Error('Unsupported permalink version'); return { version: payload.v, features: payload.f, sourceLabel: payload.s, vibe: payload.i, baseSeed: payload.b, reroll: payload.x } }

function persistToHash() { if (!state.recipe) return; window.location.hash = encodeState(state.recipe, state.rerollCount) }
function hydrateFromHash() {
  if (!window.location.hash.slice(1)) return false
  try {
    const restored = decodeState(window.location.hash.slice(1)); state.recipe = { version: restored.version, features: restored.features, sourceLabel: restored.sourceLabel, vibe: restored.vibe, baseSeed: restored.baseSeed, reading: createReading(restored.features, restored.vibe) }
    el.vibeInput.value = restored.vibe || ''; state.rerollCount = restored.reroll || 0; state.generated = generateShrine(buildVariantMeta(state.recipe, state.rerollCount)); renderReading(state.recipe); renderShrine(state.generated); setRitualStep(4); setStatus('Shrine restored from its permalink. Reroll it, pin it, or print the zine.'); return true
  } catch (error) { console.warn('Failed to restore shrine from hash', error); setStatus('That permalink is busted. Offer a new riff or use a demo to raise a fresh shrine.'); return false }
}

async function analyzeBuffer(audioBuffer, sourceLabel = 'unknown offering') {
  setRitualStep(2); const features = sampleFeatures(audioBuffer)
  state.recipe = buildGenerationRecipe({ ...features, sourceLabel, vibe: el.vibeInput.value.trim() }); state.audioBuffer = audioBuffer; state.rerollCount = 0; renderReading(state.recipe)
  setRitualStep(3); state.generated = generateShrine(buildVariantMeta(state.recipe, state.rerollCount)); setRitualStep(4); renderShrine(state.generated); persistToHash(); setStatus(`Shrine raised from ${sourceLabel}. Permalink updated.`)
}

function rerollShrine() { if (!state.recipe) return setStatus('No riff loaded yet. Raise a shrine first.'); state.rerollCount += 1; state.generated = generateShrine(buildVariantMeta(state.recipe, state.rerollCount)); renderShrine(state.generated); persistToHash(); setStatus(`Sibling reality #${state.rerollCount + 1} revealed from the same offering.`) }
async function decodeFile(file) { const context = await getAudioContext(); const bytes = await file.arrayBuffer(); return context.decodeAudioData(bytes.slice(0)) }
async function handleUpload(event) { const [file] = event.target.files || []; if (!file) return; setStatus(`Decoding ${file.name}...`); try { const buffer = await decodeFile(file); await analyzeBuffer(buffer, file.name) } catch (error) { console.error(error); setStatus('The necromancer choked on that file. Try mp3, wav, or m4a, or use the demo path.') } }

async function recordMic() {
  if (!navigator.mediaDevices?.getUserMedia) return setStatus('Microphone capture is not available in this browser. Surprise demo is still first-class.')
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true }); state.stream = stream; const recorder = new MediaRecorder(stream); const chunks = []; state.mediaRecorder = recorder
  recorder.ondataavailable = (event) => { if (event.data.size) chunks.push(event.data) }
  recorder.onstop = async () => { try { const blob = new Blob(chunks, { type: recorder.mimeType || 'audio/webm' }); const file = new File([blob], 'mic-riff.webm', { type: blob.type }); const buffer = await decodeFile(file); await analyzeBuffer(buffer, 'live microphone ritual') } catch (error) { console.error(error); setStatus('Mic capture worked, but decoding failed. Use the demo riff or upload a file.') } finally { stream.getTracks().forEach((track) => track.stop()) } }
  recorder.start(); setStatus('Recording... hum, chug, or whisper your riff. Capturing for 6 seconds.'); setTimeout(() => recorder.state !== 'inactive' && recorder.stop(), 6000)
}

function midiToFreq(midi) { return 440 * (2 ** ((midi - 69) / 12)) }
function scheduleNote(context, destination, { type = 'triangle', frequency, start, duration, gainValue = 0.04, filterFrequency = 1800 }) {
  const osc = context.createOscillator(); const gain = context.createGain(); const filter = context.createBiquadFilter(); osc.type = type; osc.frequency.setValueAtTime(frequency, start); filter.type = 'lowpass'; filter.frequency.setValueAtTime(filterFrequency, start); gain.gain.setValueAtTime(0.0001, start); gain.gain.exponentialRampToValueAtTime(gainValue, start + 0.02); gain.gain.exponentialRampToValueAtTime(0.0001, start + duration); osc.connect(filter).connect(gain).connect(destination); osc.start(start); osc.stop(start + duration + 0.03)
}
function scheduleNoiseHit(context, destination, start, strength = 0.02, length = 0.07) {
  const buffer = context.createBuffer(1, Math.floor(context.sampleRate * length), context.sampleRate); const data = buffer.getChannelData(0)
  for (let i = 0; i < data.length; i += 1) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length)
  const source = context.createBufferSource(); const filter = context.createBiquadFilter(); const gain = context.createGain(); source.buffer = buffer; filter.type = 'bandpass'; filter.frequency.value = 1800; gain.gain.setValueAtTime(strength, start); gain.gain.exponentialRampToValueAtTime(0.0001, start + length); source.connect(filter).connect(gain).connect(destination); source.start(start); source.stop(start + length)
}
async function playBacking() {
  if (!state.generated) return setStatus('Generate a shrine first, then I can play the backing track.')
  const context = await getAudioContext(); const master = context.createGain(); master.gain.value = 0.8; master.connect(context.destination)
  const now = context.currentTime + 0.05; const beat = 60 / state.generated.bpm
  const { rootMidi, bassPattern, drumPattern, shimmer, chordRoots } = state.generated.backing
  const chordFlavor = shimmer ? [0, 7, 11, 14] : [0, 7, 12, 15]
  bassPattern.forEach((offset, step) => {
    const sectionGain = step < 2 ? 0.028 : step < 4 ? 0.036 : step < 6 ? 0.048 : 0.03
    const start = now + step * beat
    const chordRoot = chordRoots[step % chordRoots.length]
    scheduleNote(context, master, { type: shimmer ? 'triangle' : 'sawtooth', frequency: midiToFreq(rootMidi + offset), start, duration: beat * 0.9, gainValue: shimmer ? sectionGain : sectionGain + 0.01, filterFrequency: shimmer ? 1600 + step * 40 : 1100 + step * 30 })
    chordFlavor.forEach((interval, index) => scheduleNote(context, master, { type: index === 0 ? 'square' : 'triangle', frequency: midiToFreq(45 + chordRoot + interval + (step % 2 === 0 ? 12 : 0)), start, duration: beat * (step === bassPattern.length - 2 ? 0.45 : 0.75), gainValue: 0.012 + index * 0.004, filterFrequency: shimmer ? 2400 : 1700 }))
    const hit = drumPattern[step % drumPattern.length]
    if (hit === 'kick') scheduleNoiseHit(context, master, start, 0.012, 0.09)
    if (hit === 'snare') scheduleNoiseHit(context, master, start, 0.02, 0.05)
    if (hit === 'hat') scheduleNoiseHit(context, master, start, 0.008, 0.025)
  })
  setStatus(`Playing ${state.generated.title} backing track.`)
}

async function copyPermalink() { if (!state.generated) return setStatus('No shrine yet. Summon one first.'); const url = window.location.href; await navigator.clipboard.writeText(url); setStatus(`Permalink copied (${url.length} chars). Mail it to your band forum nemesis.`) }
function getSelectedDemo() { return DEMOS.find((demo) => demo.id === el.demoSelect.value) || DEMOS[0] }
function refreshDemoNote() { const demo = getSelectedDemo(); el.demoNote.textContent = `Selected demo: ${demo.note}` }
function pinCurrent() { if (!state.generated) return setStatus('Nothing to pin yet.'); state.pinned = { seed: state.generated.seed, title: state.generated.title, reroll: state.generated.reroll }; renderLineage(); setStatus(`Pinned ${state.generated.title} for comparison.`) }
function saveFavorite() { if (!state.generated) return setStatus('Nothing to save yet.'); const favorite = { title: state.generated.title, archetype: state.generated.canon.archetype.label, url: window.location.href, note: `variant ${state.generated.reroll + 1} · ${state.generated.canon.band.name}` }; state.favorites = [favorite, ...state.favorites.filter((item) => item.url !== favorite.url)].slice(0, 8); localStorage.setItem('angelfire-tab-necromancer:favorites', JSON.stringify(state.favorites)); renderFavorites(); setStatus(`Saved ${state.generated.title} to local relics.`) }
function loadFavorites() { try { return JSON.parse(localStorage.getItem('angelfire-tab-necromancer:favorites') || '[]') } catch { return [] } }

el.fileInput.addEventListener('change', handleUpload)
el.recordBtn.addEventListener('click', async () => { try { await recordMic() } catch (error) { console.error(error); setStatus('Microphone permission denied or unavailable. Surprise demo still works.') } })
el.demoBtn.addEventListener('click', async () => { const demo = getSelectedDemo(); setStatus(`Raising ${demo.label.replace(/^.+?\s/, '')}...`); setRitualStep(1); await analyzeBuffer(demo.build(), demo.label) })
el.demoSelect.addEventListener('change', refreshDemoNote)
el.playBtn.addEventListener('click', playBacking)
el.shareBtn.addEventListener('click', copyPermalink)
el.printBtn.addEventListener('click', () => window.print())
el.rerollBtn.addEventListener('click', rerollShrine)
el.pinBtn.addEventListener('click', pinCurrent)
el.favoriteBtn.addEventListener('click', saveFavorite)

drawWaveform(); updateClockBadge(); setRitualStep(1); refreshDemoNote(); renderFavorites(); hydrateFromHash()
