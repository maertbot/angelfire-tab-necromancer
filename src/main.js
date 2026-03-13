import './style.css'

// ─── UTILITY ──────────────────────────────────────────────
function hashString(input) { let h = 2166136261; for (let i = 0; i < input.length; i += 1) { h ^= input.charCodeAt(i); h = Math.imul(h, 16777619) } return h >>> 0 }
function mulberry32(seed) { return function rand() { let t = (seed += 0x6d2b79f5); t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296 } }
function escapeHtml(str = '') { return String(str).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;') }
function pick(rand, items) { return items[Math.floor(rand() * items.length)] }
function shuffle(rand, items) { const copy = [...items]; for (let i = copy.length - 1; i > 0; i -= 1) { const j = Math.floor(rand() * (i + 1)); [copy[i], copy[j]] = [copy[j], copy[i]] } return copy }
function maybe(rand, chance) { return rand() < chance }
function pickMany(rand, items, count) { return shuffle(rand, items).slice(0, count) }
function weightedPick(rand, options) {
  // options: [[weight, value], ...]
  const total = options.reduce((s, o) => s + o[0], 0)
  let r = rand() * total
  for (const [w, v] of options) { r -= w; if (r <= 0) return v }
  return options[options.length - 1][1]
}

// ─── EXPANDED DATA POOLS ──────────────────────────────────

// Item 9: 50+ usernames
const FORUM_USERS = [
  'xX_TabGhoul_Xx','fretwizard77','DropD4Eva','mallgothdad','amphexed','shredmancer','modemtears',
  'bossmetalzone','fenderbender99','cassetteoracle','webringwidow','d00m_capo','dogwoodfeedback',
  'durhamdialup','i5ghostnote','trianglefloorpunch','mike_g','chris1999','guitardude','emily_nc',
  'anonymous','admin','sk8ordie420','punxnotdead','xXemeralddreamXx','catscradlekid','trianglerock',
  'pdxbasement','user12847','default_user','test_account','tabmaster2k','noisegirl','chordmonkey',
  'bassdrop99','halfstackharry','midi_witch','distortionpedal','flannel_ghost','vhsbandit','scenepoints',
  'AOLguitar','riffvault','punkgrl','dial_up_warrior','setlist_hoarder','pit_boss_98','wah_pedal_wes',
  'open_d_dave','string_snap','reverb_junkie','stage_left_steve','tuning_fork','pedalboard_pete',
  'six_string_sam','feedback_queen','garage_oracle','church_amp_kid','lofi_tab_guy'
]

// Item 10: 30+ posting locations
const POSTING_LOCATIONS = [
  'the computer lab','work','dorm room','my room','dial-up','library',"friend's house",
  "the office when nobody's looking","mom's computer",'my dorm','campus','AOL','WebTV',
  'behind the counter at Blockbuster','the basement','coffeeshop wifi','Netscape','CompuServe',
  'Juno email terminal','school library','my aunt\'s house','inside a Geo Prism','the van',
  'band practice','the break room','Radio Shack','after church','Kinko\'s','Best Buy demo computer',
  'the garage','lunch period','study hall','a Denny\'s booth','someone else\'s login'
]

const TAB_STRINGS = ['e', 'B', 'G', 'D', 'A', 'E']

// Item 1+7: Title diversity system
function generateTitle(rand) {
  return weightedPick(rand, [
    [30, () => generateBluntTitle(rand)],
    [20, () => generateAtmosphericTitle(rand)],
    [20, () => generateMinimalTitle(rand)],
    [15, () => generateOverlySpecificTitle(rand)],
    [15, () => generateBrokenTitle(rand)],
  ])()
}

function generateBluntTitle(rand) {
  return pick(rand, [
    'Heart Shaped Box TAB','wonderwall tab (CORRECT VERSION)','Nirvana chords','smells like teen spirit INTRO',
    'creep radiohead tab','zombie cranberries chords','black hole sun solo','plush stone temple pilots',
    'TODAY (smashing pumpkins)','comedown bush tab','glycerine acoustic','Lightning Crashes LIVE tab',
    'Say It Aint So TAB (weezer)','lullaby cure tab','everlong tab','my hero foo fighters',
    'fade into you mazzy star','rhiannon live version tab'
  ])
}

const TITLE_PREFIXES = ['Velvet','Chrome','Basement','Candlelit','Laser','Ashtray','Midnight','Tape-Hiss','Blacklight','Mall','Dial-Up','Velour','Moonburn','Static','Neon','Wet Cement','VHS','Pollen','Dogwood','Cascade','Exit Sign','Bus-Depot','Hydrangea','Screenburn']
const TITLE_SUBJECTS = ['Cathedral','Promenade','Telecaster','Funeral','Skatepark','Afterparty','Hex','Summer','Bus Ticket','Parking Lot','Girlfriend','Stairwell','Food Court','Practice Space','Slowdance','Overpass','Phone Pole','County Line','Ferry Slip','VFW','Receipt','Snack Machine']
const TITLE_SUFFIXES = ['Riff','Lament','Theme','Demo','Memorial','Tab','Overture','Complaint','Flyer','Translation']

function generateAtmosphericTitle(rand) {
  return `${pick(rand, TITLE_PREFIXES)} ${pick(rand, TITLE_SUBJECTS)} ${pick(rand, TITLE_SUFFIXES)}`
}

function generateMinimalTitle(rand) {
  return pick(rand, [
    'untitled','track 3','new song demo','that one about the parking lot','no name',
    'song 2','the slow one','demo 4','rehearsal take','outro','intro','(no title)',
    'track 7 maybe','the long one','set closer','that riff','january song','bridge idea'
  ])
}

function generateOverlySpecificTitle(rand) {
  return pick(rand, [
    'the riff from the 9/14 show','bridge section FIXED','intro only sorry',
    'verse riff (NOT the chorus)','the part after the breakdown','main riff tab',
    'chorus section with the weird chord','solo transcription attempt','the quiet part before the solo',
    'that 7/8 thing from the VFW set','the riff jake played at the party','outro from the demo tape version'
  ])
}

function generateBrokenTitle(rand) {
  return pick(rand, [
    'asdfjkl guitar','DELETE THIS','test page do not link','??????',
    'IGNORE — wrong version','fixthislater','untitled-2 FINAL final','copy of copy of tab',
    'dsklfjsd','NEW PAGE (old page got deleted)','DO NOT LINK THIS PAGE','aaaaaaa',
    'placeholder','asdf tab','[no title recovered]'
  ])
}

// Item 8: Simplified webring names
const SIMPLE_WEBRINGS = [
  'Guitar Tab Ring','NC Music Links','Punk Pages Webring','Alternative Music Ring','Tab Archive Ring',
  'Indie Rock Pages','Band Homepage Ring','Guitar Players Ring','Music Tab Webring','Rock Pages Ring',
  'Bass Tab Ring','DIY Music Pages','Underground Music Ring','Garage Rock Webring','Alt Rock Tab Ring'
]
const FANCY_WEBRINGS = [
  'Pacific Northwest Bedroom Shred Ring','I-5 Ghost Chord Alliance','Willamette Valley All-Ages Tone Spiral',
  'Triangle Feedback Preservation Ring','Piedmont Basement Signal Co-Op','Dogwood Distortion Webring',
  'Cascadia Tape Hiss Preservation Ring','Carolina Late Show Tablature Circle'
]

function pickWebring(rand, scene) {
  if (maybe(rand, 0.2)) return pick(rand, FANCY_WEBRINGS)
  if (maybe(rand, 0.3) && scene.webrings) return pick(rand, scene.webrings)
  return pick(rand, SIMPLE_WEBRINGS)
}

// Item 16: Simplified era descriptions
function pickEra(rand) {
  return weightedPick(rand, [
    [60, () => pick(rand, ['1996','1997','1998','1999','2000','2001','2002',"fall '98","spring '99","summer '97","fall '99","sometime around 2000","late 90s","early 2000s","'99","2001 maybe"])],
    [20, () => pick(rand, ['right before Y2K','after the breakup show','the summer we all had jobs','before the van died','the semester before graduation','right after Napster','that winter everyone got mono','between jobs'])],
    [20, () => pick(rand, ['the week everyone got a wah pedal',"the month before somebody's starter jacket got stolen",'late spring 2000 when the flyer toner ran blue','the semester everybody suddenly owned a four-track','that one LAN party weekend','Y2K eve'])],
  ])()
}

// Item 11: Messy member names
function generateMemberName(rand) {
  return weightedPick(rand, [
    [25, () => pick(rand, ['Mike','Chris','Sarah','Jake','Nate','Liz','Derek','Em','Tess','Cole','Mara','Dylan','Rin','Ben','Leah','Wes','Rafe','Nina','Jules','Avery','Ian','Cori','Liza','Noah','Elsie'])],
    [20, () => pick(rand, ['Jake R.','Chris S.','Mike T.','Sarah P.','Nate C.','Em F.','Liz K.','Cole A.','Mara Q.','Derek P.'])],
    [20, () => pick(rand, ['Hambone','Twig','Squeak','Scooter','Big Mike','Lil Steve','Bones','The Kid','Smitty','Dirtbag','Chops','Tex','Slim','Red','Patches'])],
    [15, () => pick(rand, ['this guy Brian who also plays in another band','whoever was around','Jake (sometimes)','Mike\'s roommate','that kid from the record store','someone\'s cousin from Charlotte','the girl who worked at Kinko\'s'])],
    [10, () => pick(rand, ['we don\'t know the drummer\'s real name','???','nobody remembers','[disputed]','(left before anyone wrote it down)'])],
    [10, () => pick(rand, ['Jake — guitar/screaming','Mike — everything','Chris — bass (left halfway through)','Sarah — drums and yelling','Nate — guitar/voice/booking','Em — organ when needed','Derek — bass and driving'])],
  ])()
}

const BADGES = ['BUILT WITH NOTEPAD','UPDATED WEEKLY (MAYBE)','EMAIL ME IF LINKS ARE BROKEN','MADE ON A SCHOOL COMPUTER','BEST VIEWED AT 800x600','FRAMES VERSION AVAILABLE','MIDI ON = YOUR PROBLEM','TABS NEVER DIE','UNDER CONSTRUCTION FOREVER','DROP D OR DROP DEAD','POWERED BY MOUNTAIN DEW CODE RED','NETSCAPE FRIENDLY','PRINT THIS BEFORE AOL DELETES IT','SCENE VERIFIED BY FLYER LAMINATE']
const STAMPS = ['💿 cd-r verified','📡 56k approved','⚡ solo safe','🧃 surge compatible','🌲 rainy practice room','🌙 dogwood night','📠 built on dial-up','🖱️ school lab approved']
const TUNINGS = ['E A D G B E','D A D G B E','D G C F A D','D A D F# A D','Eb Ab Db Gb Bb Eb']
const KEYS = ['E minor','D minor','D mixolydian','G major','A dorian','B minor','C major','F# minor']

// Item 12: Dumber forum comments (30+ simple ones)
const DUMB_COMMENTS = [
  'what tuning??','anyone got this in GUITAR PRO','the solo starts at like 2:14',
  'is the second chord a C or a Cadd9','close enough lol','can someone tab the intro',
  'wrong key','thx','how do you play the second part','is this standard tuning',
  'my version is better','sounds right to me','FIRST POST','lol okay',
  'sounds like every band at the mall','does anyone have the POWER TAB???',
  'bump','re-up the mp3 please','anyone got the guitar pro file','link is dead',
  'nice','this rules','cool','what key is this in','where is the bridge',
  'can you do the bass tab too','how fast is this supposed to be',
  'i think the 3rd chord is wrong','*','...','ok','good enough',
  'is there a midi of this','can someone tab the whole song not just the intro'
]

const POETIC_COMMENTS = [
  'this sounded better in my room than it did at the show',
  'the quiet part in bar 3 feels like missing your ride home',
  'that suspended chord made my whole dumb week better',
  'the first four bars actually feel like a real song somebody forgot to finish',
  'the return lands harder because the page finally leaves space for it'
]

// Item 15: Forum drama embedded in comments
const DRAMA_COMMENTS = [
  '[this post removed by admin]',
  'why is this page so slow',
  'can you guys stop fighting about the tuning',
  'LOCKED. take it to email. — admin',
  'i literally saw them play this live and this tab is WRONG',
  'stop saying this is emo','you all hear what you want to hear',
  'wrong thread but whatever','my browser froze when the midi started',
  '[quote]where is the solo[/quote]',
  'i think you posted the bass tab by accident',
  'nobody asked for your opinion dude',
  'mods please delete the spam above'
]

// Item 2: Lore fragment system (30+ fragments)
const LORE_FRAGMENTS = [
  // Mundane
  { text: 'They played Thursdays at the VFW.', len: 'short' },
  { text: 'The practice space key was hidden in the gutter.', len: 'short' },
  { text: 'Somebody left a half-eaten sub in the amp case.', len: 'short' },
  { text: 'The singer worked at the copy shop.', len: 'short' },
  { text: 'They owed the VFW $40 for the broken mic stand.', len: 'short' },
  { text: 'Mike\'s mom drove the van but only if they were back by 11.', len: 'short' },
  { text: 'The van wouldn\'t start in the Food Lion parking lot.', len: 'short' },
  { text: 'Nobody helped load out.', len: 'short' },
  { text: 'The door guy kept $20 and acted confused.', len: 'short' },
  { text: 'They got 4 minutes of soundcheck.', len: 'short' },

  // Location-only metadata
  { text: (rand, scene) => `${pick(rand, scene.smallTowns)}, ${scene.id === 'pnw' ? 'OR' : 'NC'}. ${pickEra(rand)}.`, len: 'short' },
  { text: (rand, scene) => `Recorded at ${pick(rand, scene.venues)}.`, len: 'short' },

  // Mid-length
  { text: 'Half their mythology comes from a fan page that disappeared every finals week.', len: 'medium' },
  { text: 'People swore the clean parts were tracked in the mall after security stopped caring.', len: 'medium' },
  { text: 'Their drummer counted off every song like it was either a prayer or a threat.', len: 'medium' },
  { text: 'Half the scene thought the tabs were simple until they tried to make the voicings ring correctly.', len: 'medium' },
  { text: 'Their singer kept writing set times on the back of grocery receipts and losing them in guitar cases.', len: 'medium' },
  { text: 'They allegedly broke up because no one would admit who kept detuning the borrowed SG between sets.', len: 'medium' },
  { text: 'Every tape dub seemed to add a different clean guitar that nobody remembered recording.', len: 'medium' },
  { text: 'They kept printing "be cool to the neighbors" on flyers because one bill nearly ended the whole warehouse run.', len: 'medium' },
  { text: 'People argued for years about whether the second guitarist was real or just doubled live by excessive delay.', len: 'medium' },
  { text: 'Their board feud with a local promoter produced more surviving text than their first EP did.', len: 'medium' },
  { text: 'They got adopted by the scene after three opening slots and one impossibly good slow song.', len: 'medium' },

  // Contradictions
  { text: 'The band broke up in 2000. They played a show in 2002 but nobody talks about it.', len: 'medium' },
  { text: 'The singer quit twice. Or once. Depends who you ask.', len: 'short' },
  { text: 'Two different people claim to have named the band.', len: 'short' },

  // Long/detailed
  { text: 'The only surviving recording is a fourth-generation tape dub from a practice space. Someone\'s cousin brought a boombox and hit record halfway through the second song. The tape ran out during the best part. Everyone agrees on this. Nobody agrees on which song it was.', len: 'long' },
  { text: 'They were locally famous for starting songs before the tuner pedal had finished muting. Whether this was intentional or incompetence was itself the subject of a 30-reply forum thread that got locked by admin.', len: 'long' },
  { text: 'The flyer for their last show is the only one anyone saved. It\'s photocopied so many times the band name is barely readable. Someone wrote the set time in pen: "9:45ish." The show started at 10:30.', len: 'long' },

  // Scene-specific generators
  { text: (rand, scene) => `Flyer residue still reads: "${pick(rand, scene.flyerLanguage)}."`, len: 'short' },
  { text: (rand, scene) => `Local memory tag: ${pick(rand, scene.memoryTags)}.`, len: 'short' },
  { text: (rand, scene) => `The surviving source appears to be ${pick(rand, scene.recordingOrigins)}.`, len: 'medium' },
  { text: (rand) => `${pick(rand, ['Sean\'s','Jake\'s','Mike\'s','Nate\'s','Chris\'s'])} blue hoodie never got given back.`, len: 'short' },
  { text: () => 'The promoter put them on at 11pm on a Tuesday again.', len: 'short' },
  { text: () => 'Someone stole their set time slot.', len: 'short' },
]

// Item 3: Pooled closing lines (was verbatim "Whoever kept this page...")
const CLOSING_LINES = [
  'Whoever kept this page took the clean guitar way too personally.',
  'The person who maintained this shrine clearly had too much free time and exactly the right taste.',
  'This page survived because someone cared more about the riff than the band cared about their own website.',
  'Whoever ran this page was deeply invested in a band that played maybe twelve shows.',
  'The dedication of this page\'s keeper is either admirable or concerning.',
  'This shrine was maintained with a devotion usually reserved for pet fan fiction.',
  'Somebody spent real hours on this. At school. On a shared computer.',
  'The keeper of this page knew every chord but never played in a band.',
  'This page was updated religiously by someone who definitely had homework to do instead.',
  'You can feel the keeper\'s dial-up patience in every hand-coded section.',
  'Someone loved this band enough to maintain a page nobody visited.',
  'This exists because one person thought this riff was the most important thing in the world for about six months.',
  'The keeper did more archiving than the band did recording.',
  'Maintained by someone who checked their Geocities stats every morning before school.',
  'This was clearly someone\'s main creative outlet, which is both sad and beautiful.',
  'The HTML alone suggests this person had strong opinions and no one to share them with.',
  'Whoever kept this page also had a Buddy List away message about it.',
  'This shrine outlived the band, the label, the message board, and the keeper\'s AOL account.',
  'Built with the same intensity people now apply to Instagram stories but with 100x more effort.',
  'Someone spent an entire summer on this and it was not wasted.'
]

// Item 3: Pooled keeper descriptions (was verbatim "looks like it was updated between Orange Julius shifts")
const KEEPER_DESCRIPTIONS = [
  'looks like it was updated between Orange Julius shifts',
  'maintained by someone with too much study hall',
  'kept alive from a library computer',
  'updated sporadically from mom\'s desktop',
  'ran this from the computer lab at lunch',
  'maintained from a dial-up connection that dropped every 20 minutes',
  'clearly updated during work hours',
  'kept going from a WebTV terminal',
  'updated whenever the AOL free trial hours refreshed',
  'maintained by someone who should have been doing homework',
  'looks like it was updated at 2am on school nights',
  'ran this site from a shared family computer',
  'updated between shifts at the record store',
  'maintained from a dorm room with one ethernet port',
  'built during every free period for a semester',
  'kept alive from a public library terminal',
  'updated from behind the counter at a video rental place',
  'maintained by someone whose parents didn\'t know what Geocities was',
  'ran this page from a Pentium II that overheated constantly'
]

// Item 20: Unexplained random elements
const UNEXPLAINED_ELEMENTS = [
  '<p style="opacity:0.6;font-size:0.8em;">04/19/00 — 05/12/00 — 08/31/00</p>',
  '<p style="opacity:0.6;font-style:italic;">do not play this at the memorial show</p>',
  '<p style="opacity:0.6;">ask derek</p>',
  '<p style="opacity:0.6;font-size:0.8em;">[photo: parking lot, December]</p>',
  '<p style="opacity:0.6;">DOWNLOAD MP3 (56k warning) — <span style="text-decoration:line-through">LINK DEAD</span></p>',
  '<p style="opacity:0.6;font-family:Courier New,monospace;">you are visitor #<span style="color:lime">__COUNTER__</span> to this tab</p>',
  '<p style="opacity:0.6;font-size:0.8em;">Nate / Leah / benji / sara</p>',
  '<p style="opacity:0.6;">ask drew about the van title</p>',
  '<p style="opacity:0.6;font-size:0.8em;">call before 10pm: 555-___</p>',
  '<p style="opacity:0.6;">if you\'re reading this, email me the chords to the second verse</p>',
  '<p style="opacity:0.6;font-size:0.8em;">last seen: floor, practice space, under the amp head</p>',
  '<p style="opacity:0.6;">UNDER CONSTRUCTION</p>',
  '<p style="opacity:0.6;font-size:0.8em;">FRAMES VERSION COMING SOON</p>',
  '<p style="opacity:0.6;">NO FRAMES VERSION — click here for frames</p>',
]

const REGISTER_POOLS = {
  guestbook: {
    mundane: ['cool tabs','hey','nice site','first!!','cool','.','i printed this at school','thanks for putting the chords up','bookmarked','signed','*waves*','hey from AOL'],
    poetic: ['this sounded better in my room than it did at the show','the quiet part in bar 3 feels like missing your ride home','that suspended chord made my whole dumb week better'],
    dumb: ['do u have the blink tab','my band is better but this is ok','this page loads slow lol','where is the dragonball z page','FREE RINGTONES','is this myspace'],
    hostile: ['this tab is wrong lol','fix your links','why is the midi so loud','your color scheme hurts my eyes'],
    broken: ['<b>rock on</i>','AIM: xXsadfretsXx','FREE RINGTONES AT ringtone-heaven-2000.biz','is this the dragonball z page?','&lt;marquee&gt;yo&lt;/marquee&gt;']
  },
  filler: ['[IMG]','CLICK HERE TO SIGN MY GUESTBOOK','best viewed at 800x600','this page optimized for Netscape Navigator 4.0','link removed — geocities mirror expired 2002','AIM away: at taco bell brb','UNDER CONSTRUCTION','frames version coming soon','email me if links are broken'],
  mundaneMemories: ["mike's mom drove the van but only if they were back by 11",'the practice space key was hidden in the gutter','somebody left a half-eaten sub in the amp case','they owed the VFW $40 for the broken mic stand','the singer worked at the copy shop on Franklin',"the van wouldn't start in the Food Lion parking lot","sean's blue hoodie never got given back",'the door guy kept $20 and acted confused'],
}

const NAME_PATTERNS = {
  single: ['Trestle','Casket','Landlord','Anthem','Buttermilk','454','HWY 99','Room 114'],
  thePlural: ['The Receipts','The Jeffs','The Goodnight Janes','The Guys','The Halogens'],
  insideJoke: ["Aunt Bethany's Jello Mold","Kevin's Other Band",'Youth Rally Fight Club','Stacy Owed Us $5'],
  placeThing: ['Durham Floor Punch','Salem Exit Ramp','Franklin Copy Room','Geer Street Soda Machine','Burlington Parking Deck'],
  adjectiveNoun: ['Velour Static','Dogwood Static','Cinder Psalm','Queen City Veil']
}

const REGIONAL_SCENES = {
  pnw: {
    id: 'pnw', label: 'Oregon / PNW rain-burn circuit', slug: 'pnw',
    webrings: ['Pacific Northwest Bedroom Shred Ring','I-5 Ghost Chord Alliance','Willamette Valley All-Ages Tone Spiral','Cascadia Tape Hiss Preservation Ring'],
    badges: ['RAIN-SOAKED FLYER VERIFIED','I-5 EXIT SHRED APPROVED','ALL-AGES HALL SURVIVOR','FERN-SCENTED PRACTICE SPACE'],
    stamps: ['🌲 rainy','🚐 i-5 routed','🌫️ bridge-reverb certified'],
    keeperHandles: ['kristin_from_gatewaypc','tabsaint77','stolenwahpedal','mallsaint','midnightfretprayer','willamettecopykid'],
    venues: ['WOW Hall in Eugene','the all-ages room behind the Salem skate shop','a VFW in Springfield','the Corvallis grange hall','the back room of a Portland coffeehouse with bad monitors'],
    smallTowns: ['Springfield','Cottage Grove','Albany','Dallas','Silverton','McMinnville','Bandon','Monmouth','Roseburg','Grants Pass','Ashland','Bend','Hood River','The Dalles','Sweet Home','Lebanon','Newberg','Woodburn','Sandy','Canby','Stayton','Junction City','Florence','Coos Bay','Philomath'],
    memoryTags: ['bridge condensation on a set list','copy shop staple rust','Black Butte road-trip tape flip','borrowed hoodie smelling like rain and cigarettes'],
    flyerLanguage: ['ALL AGES / DON\'T BLOW IT','bring five bucks and your own sadness','flyer says 7 but nobody starts before 8:40','ask the kid by the merch Rubbermaid for directions'],
    gearTalk: ['Peavey Bandit with one scratchy knob','Small Clone somebody swore was always on','crate combo on a milk crate','pawn-shop Jazzmaster copy through a dying cable'],
    forumDrama: ['whether the pedal bridge was actually tracked under the Ferry Street bridge','the eternal argument about who stole the Small Clone','a 19-post fight over whether this was emo or just Oregon weather'],
    recordingOrigins: ['a fourth-generation practice space dub from Eugene','an mp3 rescued from a Salem fan webring mirror','a tab emailed from a UO library terminal','a cassette rip labelled only SIDE B / WET BASEMENT'],
    rareEvents: ['cursed mirror verified','missing verse fragment recovered','disputed authorship thread','pedalboard polaroid surfaced'],
    rooms: {
      shimmery: ['food court after closing','upstairs bedroom with christmas lights','church youth room during setup','pedestrian bridge under sodium lights'],
      heavy: ['unfinished basement with concrete bloom','garage beside hockey pads','practice space behind the roller rink','storage unit by the bike path'],
    },
    guitars: ['Squier Strat with stickers','sunburst Yamaha Pacifica','pawn shop SG copy','black Epiphone Les Paul','mystery offset from a church rummage sale'],
    amps: ['Peavey Bandit','Crate half-stack','Fender Frontman 25R','borrowed Marshall combo','amp of unknown origin with one angry speaker'],
    pedals: {
      shimmery: ['Danelectro FAB Chorus','Big Muff clone','cheap digital delay','Small Clone rumor only'],
      heavy: ['Boss Metal Zone','DOD grunge pedal','Big Muff clone','one tuner and a dream'],
    },
  },
  nc: {
    id: 'nc', label: 'North Carolina triangle / piedmont circuit', slug: 'nc',
    webrings: ['Triangle Feedback Preservation Ring','Piedmont Basement Signal Co-Op','Dogwood Distortion Webring','Carolina Late Show Tablature Circle'],
    badges: ['DOGWOOD NIGHT APPROVED','TRIANGLE BOARD DRAMA ARCHIVED','PIEDMONT HOUSE SHOW VOUCHED','QUEEN CITY LOAD-IN SAFE'],
    stamps: ['🌙 dogwood night approved','📍 triangle routed','🚬 parking-lot argument saved'],
    keeperHandles: ['catscradleburner','durhamdialup','mergeboardlurker','queencitytapeop','chapelhillghost','dogwoodfeedback'],
    venues: ['Cat\'s Cradle back room in Carrboro','a Durham warehouse off Geer Street','a VFW outside Raleigh','a Charlotte practice spot by the freight tracks','the Winston-Salem coffeehouse matinee'],
    smallTowns: ['Carrboro','Hillsborough','Saxapahaw','Mebane','Kannapolis','Boone','Pittsboro','Burlington','Sanford','Gastonia','Asheville','Hickory','Morganton','Shelby','Kings Mountain','Lexington','Thomasville','Graham','Siler City','Asheboro','Erwin','Lumberton','Hendersonville','Brevard','Waynesville'],
    memoryTags: ['dogwood petals mashed into a set list','Waffle House receipt with tunings on the back','I-40 overnight tape dub','parking-lot humidity curling the flyer corners'],
    flyerLanguage: ['ALL AGES / BRING CASH / DON\'T CALL THE COPS','matinee if the hardcore bill clears out in time','someone\'s cousin is running sound, be cool','if you miss the Carrboro exit you missed the whole summer'],
    gearTalk: ['JC-120 borrowed from somebody\'s older brother','rat pedal with the paint rubbed off','solid-state combo that somehow loved open chords','Mustang bass through an SVT nobody could afford to break'],
    forumDrama: ['whether the clean tone was a Jazzmaster or just the JC-120','a 30-reply argument over flyer etiquette','who was subtweeting who before subtweets existed'],
    recordingOrigins: ['a four-track dub from a Carrboro duplex','an mp3 mirrored off a Chapel Hill student server','a CD-R passed around after a Raleigh matinee','a board-post attachment salvaged from a Charlotte scene forum backup'],
    rareEvents: ['Cat\'s Cradle flyer scan attached','guestbook beef reignited','Waffle House receipt tab corroborated','board-admin lock after page 4'],
    rooms: {
      shimmery: ['attic room over a Carrboro duplex porch','apartment living room with two box fans','back hallway at the arts center','warehouse office with Christmas lights and humidity'],
      heavy: ['Charlotte warehouse beside the loading dock','Durham rehearsal lockout with old posters on cinderblock','garage outside Hillsborough with two PA cabs','boiler-room basement near campus'],
    },
    guitars: ['Japanese Jazzmaster with cigarette burns','black Mustang with mismatched knobs','Tele Deluxe copy with one dead switch','Epiphone Sheraton borrowed for exactly one chorus','partscaster offset with a Dogfish sticker'],
    amps: ['Roland JC-120','Peavey Classic 30','Ampeg combo with a torn grille','old Sunn head somebody\'s uncle found','Fender Hot Rod Deluxe from the practice lockout'],
    pedals: {
      shimmery: ['Boss CE-5','Memory Man rumor only','DD-3 with dying battery','Rat set weirdly low'],
      heavy: ['ProCo Rat','Big Muff Pi','Boss DS-1 from the glovebox','MXR Distortion+ with tape on the knob'],
    },
  },
}

const BANDS = {
  pnw: [
    { name: 'The Votive District', hometown: 'Springfield, OR', years: '1997–2001', members: ['Nate — guitar/voice','Mara — bass','Dylan — drums'], albums: ['Prayer Xerox (1998)','Exit Through Food Court (2000)'], influences: ['Hum','Failure'], lore: 'They were locally famous for starting songs before the tuner pedal had finished muting.' },
    { name: 'Halo Arcade', hometown: 'Salem, OR', years: '1998–2002', members: ['Rin — guitar','Jory — bass','Ben — drums','Leah — occasional glockenspiel'], albums: ['Parking Lot Glossary (1999)','Permanent Closing Time (2001)'], influences: ['Smashing Pumpkins B-sides'], lore: 'People swore the clean parts were tracked in the mall after security stopped caring.' },
    { name: 'Cinder Psalm', hometown: 'Corvallis, OR', years: '1996–2000', members: ['Micah — guitar/voice','Evan — bass','Paz — drums'], albums: ['Basement Glossolalia (1997)','The Concrete Is Listening (1999)'], influences: ['Quicksand','Sunny Day Real Estate'], lore: 'Their drummer counted off every song like it was either a prayer or a threat.' },
    { name: 'Velour Static', hometown: 'Eugene, OR', years: '1998–2003', members: ['Tess — guitar/voice','Cole — bass','Iris — drums/sampler'], albums: ['Gloss Damage (1999)','Neon Wake Service (2002)'], influences: ['starry-eyed alt rock','cheap chorus pedals'], lore: 'Half the scene thought the tabs were simple until they tried to make the voicings ring correctly.' },
    { name: 'June Choir Motel', hometown: 'Portland, OR', years: '1998–2002', members: ['Elis — voice/guitar','Milo — bass','Sera — drums'], albums: ['Bridge Condensation (1999)','Blue Copier Summer (2001)'], influences: ['The Promise Ring played slower'], lore: 'Their singer kept writing set times on the back of grocery receipts and losing them in guitar cases.' },
    { name: 'Trestle Youth', hometown: 'Albany, OR', years: '1997–2000', members: ['Wes — guitar','Lenna — bass/voice','Olin — drums'], albums: ['County Fair Elegies (1998)','Late Bus to Corvallis (2000)'], influences: ['Jawbox','ponded parking lots'], lore: 'They allegedly broke up because no one would admit who kept detuning the borrowed SG between sets.' },
  ],
  nc: [
    { name: 'Dogwood Static', hometown: 'Carrboro, NC', years: '1997–2002', members: ['Mira — guitar/voice','Cal — bass','Theo — drums'], albums: ['Porchlight Receiver (1998)','Humidity for Choirs (2001)'], influences: ['Polvo after midnight'], lore: 'Every tape dub seemed to add a different clean guitar that nobody remembered recording.' },
    { name: 'Geer Street Saints', hometown: 'Durham, NC', years: '1998–2003', members: ['Rafe — guitar','Nina — bass/voice','Jules — drums'], albums: ['Warehouse Fluorescent (1999)','Matinee Complaint Dept. (2002)'], influences: ['Jawbox','Drive Like Jehu played by nicer people'], lore: 'They kept printing "be cool to the neighbors" on flyers because one bill nearly ended the whole warehouse run.' },
    { name: 'Queen City Veil', hometown: 'Charlotte, NC', years: '1997–2001', members: ['Avery — guitar/voice','Jon — guitar','Mags — bass','Pip — drums'], albums: ['Freight Track Psalms (1998)','No Parking After Soundcheck (2000)'], influences: ['Failure','Sunday warehouse echo'], lore: 'People argued for years about whether their second guitarist was real or just doubled live by excessive delay.' },
    { name: 'Roxboro Exit', hometown: 'Raleigh, NC', years: '1998–2002', members: ['Ian — guitar/voice','Cori — bass','Miles — drums'], albums: ['Board Admin Locked It (1999)','Interstate Lull (2001)'], influences: ['Braid','hot parking-lot air'], lore: 'Their board feud with a Durham promoter produced more surviving text than their first EP did.' },
    { name: 'Blue Room Gospel', hometown: 'Chapel Hill, NC', years: '1996–2000', members: ['Liza — voice/guitar','Derek — bass','Sam — drums','Em — organ when needed'], albums: ['Student Server Eulogies (1997)','Second Floor Feedback (1999)'], influences: ['Superchunk played wounded'], lore: 'Half their mythology comes from a campus-hosted fan page that disappeared every finals week.' },
    { name: 'Hillsborough Thread', hometown: 'Hillsborough, NC', years: '1999–2003', members: ['Noah — guitar','Elsie — bass','Rook — drums/voice'], albums: ['Dogwood Dial Tone (2000)','Receipt on the Dashboard (2002)'], influences: ['Codeine with better coffee'], lore: 'They got adopted by the Triangle scene after three opening slots and one impossibly good slow song.' },
  ],
}

const MOODS = {
  feral: { label: 'feral basement peak', lane: 'basement feral', tabs: ['PM--','x','/','5','7'], chordPool: ['D5','F5','G5','Bb5','C5'], drumStyle: ['kick','hat','kick','snare','kick','kick','snare','hat'], vocab: 'drop-D power-chord battery, octave answers, and palm-muted choke/release motion' },
  shimmery: { label: 'shimmery food-court ache', lane: 'shimmer heartbreak', tabs: ['12','10','7','~','/'], chordPool: ['Em(add9)','Cmaj7','G6','Dsus2','Am7'], drumStyle: ['hat','hat','snare','hat','kick','hat','snare','hat'], vocab: 'open-string suspensions, chiming dyads, and top-string answer lines' },
  moody: { label: 'moody fluorescent yearning', lane: 'fluorescent yearning', tabs: ['0','3','5','7','~'], chordPool: ['Em','Cmaj7','G','Dsus2','Am7'], drumStyle: ['kick','hat','snare','hat','kick','hat','hat','snare'], vocab: 'drone-string figures, suspended grips, and small octave ghosts' },
}

// ─── SONGBOOK (keeping existing songs) ─────────────────────
const SONGBOOK = {
  feral: [
    { id: 'dropd-battery', tuning: 'D A D G B E', key: 'D minor', progression: ['D5','Bb5','F5','C5'], hero: 'A drop-D verse that slams low fifths, then answers itself with a higher octave stab.', motifSummary: 'low-string chug → octave jab → dropout → full return', hookShape: '0-0-3-5 / 7-7-5-3', rhythmMap: ['1e+a / 3+ · palm-muted chug','2+ / 4e · octave answer','1--- / dropout bar','1e+a / 3+ · full-rig return'], sections: [{ name: 'verse', chord: 'D5', feature: 'open low-D chug under a 0-3-5 climb' },{ name: 'answer', chord: 'Bb5', feature: 'octave stab on D and G strings at 8/10' },{ name: 'dropout', chord: 'F5', feature: 'single-note low-string crawl' },{ name: 'turnaround', chord: 'C5', feature: 'slide back into the opening chug' }], tabLines: ['e|----------------|----------------|----------------|----------------|','B|----------------|----------------|----------------|----------------|','G|----------------|--10--10-------|----------------|---------5/7----|','D|----------------|---8---8-------|------3-----5---|-----5-5--------|','A|----------------|----------------|----3---3-------|---5------------|','D|-0-0-0-3-5-3-0--|-0-0-0-0-0-0-0-|-0-0-----3-3----|-5-5---3---0----|'], bassPattern: [0,0,8,8,3,3,10,10], chordRoots: [0,8,3,10], commentTemplates: ['Bar 1 is the low-D 0-3-5 climb, bar 2 answers with those 8/10 octaves.','Do not flatten the dropout bar.','You can hear the pick hand open up when the chug stops.'], guestbook: ['printed the drop-D shape and stole the turnaround','the 8/10 octave answer is why the chorus makes sense','left the dropout bar untouched because the silence hits harder'] },
    { id: 'octave-riot', tuning: 'D A D G B E', key: 'D mixolydian', progression: ['D5','G5','Bb5','C5'], hero: 'A parking-lot riff built from low-string grind and a recurring octave siren.', motifSummary: 'open D pedal → 5/7 power move → octave siren → stomped ending', hookShape: '0-0-5-7 / 7-9-7-5', rhythmMap: ['1e+a / 3+ · open-string battery','2+ / 4e · power-chord shove','1--- / octave siren','1e+a / 3+ · stomp ending'], sections: [{ name: 'verse', chord: 'D5', feature: 'open D pedal with short mutes' },{ name: 'pre-chorus', chord: 'G5', feature: '5/7 shove across lowest strings' },{ name: 'answer', chord: 'Bb5', feature: '7/9 octave siren on D/G strings' },{ name: 'turnaround', chord: 'C5', feature: 'descending stomp to root' }], tabLines: ['e|----------------|----------------|----------------|----------------|','B|----------------|----------------|----------------|----------------|','G|----------------|----------------|--9--9--9-7-----|----------------|','D|----------------|----------------|--7--7--7-5-----|--5---3---------|','A|----------------|-5-5-5-5-7-7---|----------------|--5---3---------|','D|-0-0-x-0-0-x-0--|-5-5-5-5-7-7---|-0-0-x-0-0-x-0--|--5---3---0-----|'], bassPattern: [0,0,7,7,8,8,10,10], chordRoots: [0,7,8,10], commentTemplates: ['The octave siren in bar 3 is the 7/9 shape — not a mystery overdub.','Bar 2 is just D5 shoved up to G5.','This one inspires songs because the verse and answer are obviously related.'], guestbook: ['used this as a verse immediately','the 5/7 shove into the siren is catchy','the tab reads like something a band would rehearse'] },
    { id: 'freight-yard-lurch', tuning: 'D A D G B E', key: 'F# minor', progression: ['F#5','A5','E5','B5'], hero: 'A tense stop-start builder that sounds like a chorus trying not to become a breakdown.', motifSummary: 'muted scrape → two-note climb → octave flare → hard brake', hookShape: '4-4-7-9 / 9-11-7-4', rhythmMap: ['1e+a / 2e · scrape battery','3+ / 4e · two-note climb','1--- / octave flare','3+ / 4+ · hard brake'], sections: [{ name: 'verse', chord: 'F#5', feature: 'low-string mutes with a 4-7 shove' },{ name: 'lift', chord: 'A5', feature: 'opened-up power chord' },{ name: 'answer', chord: 'E5', feature: '9/11 octave flare on middle strings' },{ name: 'turn', chord: 'B5', feature: 'descending brake back to root' }], tabLines: ['e|----------------|----------------|----------------|----------------|','B|----------------|----------------|----------------|----------------|','G|----------------|----------------|--11--11--9-----|----------------|','D|----------------|--7-----7-------|---9---9--7-----|--9---7---------|','A|----------------|--7-----7-------|----------------|--9---7---------|','D|-4-x-4-x-4-7-4--|-4-x-4-4-4-7-4--|-0-0-x-0-0-x-0--|--9---7---4-----|'], bassPattern: [6,6,9,9,4,4,11,11], chordRoots: [6,9,4,11], commentTemplates: ['Bar 1 is a scrape-and-release riff — the 4-7 shove is the contour.','The lift into A5 widens the verse instead of just getting louder.','That 9/11 flare is why the turnaround sounds authored.'], guestbook: ['this is exactly the kind of verse our drummer would overplay','the bar-3 flare makes the whole thing believable','heavy fragment that leaves room for a singer'] },
    { id: 'dogwood-battery', tuning: 'D A D G B E', key: 'E minor', progression: ['E5','C5','G5','D5'], hero: 'A Piedmont basement mover: open low string pulse, then a chorus-sized climb.', motifSummary: 'open E grind → C/G shove → octave rally → D5 reset', hookShape: '2-2-5-7 / 7-9-5-2', rhythmMap: ['1e+a / 3+ · open-string grind','2+ / 4e · chord shove','1--- / octave rally','1e+a / 4+ · reset'], sections: [{ name: 'verse', chord: 'E5', feature: 'open low-string pulse around fret 2' },{ name: 'push', chord: 'C5', feature: 'compact power move' },{ name: 'answer', chord: 'G5', feature: '7/9 octave rally' },{ name: 'return', chord: 'D5', feature: 'snapped ending' }], tabLines: ['e|----------------|----------------|----------------|----------------|','B|----------------|----------------|----------------|----------------|','G|----------------|----------------|--9--9--7-------|----------------|','D|----------------|--5-----5-------|--7--7--5-------|--7---5---------|','A|----------------|--3-----5-------|----------------|--5---5---------|','D|-2-2-x-2-2-x-2--|-2-2---5-5-5----|-2-2-x-2-2-x-2--|--0---5---2-----|'], bassPattern: [2,2,0,0,7,7,2,2], chordRoots: [4,0,7,2], commentTemplates: ['Less bludgeon, more push-pull around the octave answer.','Bar 2 is the writing trick — the C5 only matters because it opens into the G5.','The return to D5 gives the singer somewhere to fall back in.'], guestbook: ['used the return for a chorus','the answer bar sounds like a crowded Durham room','feels way more Carolina than generic heavy'] },
  ],
  shimmery: [
    { id: 'shimmer-dyads', tuning: 'E A D G B E', key: 'E minor', progression: ['Em(add9)','Cmaj7','G6','Dsus2'], hero: 'A chiming open-string progression with a high-answer figure.', motifSummary: 'open E/B shimmer → upper-string answer → breath → bloom', hookShape: '0-0-7-8 / 10-8-7-0', rhythmMap: ['2+ / 4e · open-string shimmer','2+ / 4e · upper answer','1--- / breath bar','2+ / 4e · bloom'], sections: [{ name: 'verse', chord: 'Em(add9)', feature: 'open E and B ringing through a 0-7-8 figure' },{ name: 'answer', chord: 'Cmaj7', feature: 'high dyad at 8/8 resolving to 7/7' },{ name: 'breath', chord: 'G6', feature: 'single melodic thread with open B chiming' },{ name: 'turnaround', chord: 'Dsus2', feature: 'return slide into original suspended voicing' }], tabLines: ['e|-0-----0---------|-8-----7-------|-7-----5-------|-0-----0---------|','B|-0-----0---------|-8-----8-------|-7-----7-------|-3-----3---------|','G|-0h2---0h2-------|-9-----9-------|-7-----7-------|-2-----2---------|','D|-2-----2---------|-10----9-------|-5-----4-------|-0-----0---------|','A|-2-----3---------|-10----10------|-5-----5-------|-----------------|','E|-0-----0---------|-8-----8-------|-3-----3-------|-----------------|'], bassPattern: [0,0,8,8,3,3,10,10], chordRoots: [0,8,3,10], commentTemplates: ['You can see the open E and B strings ringing through every bar.','Bar 2 is the Cmaj7 answer at 8/8/9/10.','The breath in bar 3 is why the Dsus2 return lands.'], guestbook: ['the suspended top strings are doing the emotional labor','stole the bar 2 answer for a bridge','thank you for keeping the open B drone'] },
    { id: 'mall-glass', tuning: 'E A D G B E', key: 'G major', progression: ['G6','Dsus2','Em7','Cmaj7'], hero: 'A chorus-pedal postcard: airy dyads on top, open-string glue underneath.', motifSummary: 'high dyad descent → open-string answer → held suspension → wider ending', hookShape: '12-10-7-5 / 0-0-7-8', rhythmMap: ['2+ / 4e · high dyad descent','2+ / 4e · open-string answer','1--- / held suspension','2+ / 4e · wider ending'], sections: [{ name: 'intro', chord: 'G6', feature: '12-10-7 descent against open G/B strings' },{ name: 'answer', chord: 'Dsus2', feature: 'open-string reply with second-fret suspension' },{ name: 'hold', chord: 'Em7', feature: 'let-ring dyad on middle strings' },{ name: 'turnaround', chord: 'Cmaj7', feature: 'resolve by widening the top interval' }], tabLines: ['e|-12---10---7----|-0-----0-------|-7~~~~---------|-8-----7---------|','B|-12---10---8----|-3-----3-------|-8~~~~---------|-8-----8---------|','G|-12---11---7----|-2-----2-------|-7~~~~---------|-9-----9---------|','D|----------------|-0-----0-------|-9~~~~---------|-10----9---------|','A|----------------|----------------|-7~~~~---------|-10----10--------|','E|-3--------------|----------------|---------------|-8-----8---------|'], bassPattern: [7,7,2,2,4,4,9,9], chordRoots: [7,2,4,9], commentTemplates: ['The first bar is the 12-10-7 glassy descent — that is the riff.','The Dsus2 reply is just the open-string version of the same contour.','Holding the Em7 in bar 3 gives something to call "let it ring."'], guestbook: ['sounds like fluorescent lights reflecting off wet asphalt','the top-string descent into the open reply is a real move','printed it because the bar 3 hold is weirdly lovely'] },
    { id: 'carolina-porch-glow', tuning: 'E A D G B E', key: 'C major', progression: ['Cmaj7','Am7','Fmaj7','Gsus2'], hero: 'A humid porch-light progression where the top strings keep shining.', motifSummary: 'high common-tone shimmer → inner-motion answer → open hold → suspended lift', hookShape: '7-8-7-5 / 5-3-0-3', rhythmMap: ['2+ / 4e · common-tone shimmer','2+ / 4e · inner-motion answer','1--- / open hold','2+ / 4e · suspended lift'], sections: [{ name: 'verse', chord: 'Cmaj7', feature: 'high common tones over rooted major-7 shape' },{ name: 'answer', chord: 'Am7', feature: 'same top contour with bass turned inward' },{ name: 'hold', chord: 'Fmaj7', feature: 'open e string floating over the grip' },{ name: 'turnaround', chord: 'Gsus2', feature: 'suspended climb that begs for a vocal pickup' }], tabLines: ['e|-7-----7---------|-5-----5-------|-0~~~~---------|-3-----3---------|','B|-8-----8---------|-5-----5-------|-1~~~~---------|-3-----3---------|','G|-9-----9---------|-5-----5-------|-2~~~~---------|-0-----0---------|','D|-10----9---------|-5-----5-------|-3~~~~---------|-0-----0---------|','A|-10----10--------|-0-----0-------|----------------|-2-----2---------|','E|-8-----8---------|----------------|-1~~~~---------|-3-----3---------|'], bassPattern: [0,0,9,9,5,5,7,7], chordRoots: [0,9,5,7], commentTemplates: ['The fragment hangs on those common top notes.','Bar 2 works because the Am7 inherits the shimmer.','You can see the open string making the Fmaj7 bar glow.'], guestbook: ['sounds like humidity on a porch rail','printed it for the suspended turnaround alone','the top-note logic is doing real songwriting work'] },
    { id: 'pedestrian-bridge-choir', tuning: 'E A D G B E', key: 'B minor', progression: ['Bm7','Gmaj7','D(add9)','A(add9)'], hero: 'A high-open-string progression that feels like waiting for rain to stop.', motifSummary: 'top-string glow → descending answer → sustained spread → open release', hookShape: '7-7-10-9 / 7-5-2-0', rhythmMap: ['2+ / 4e · top-string glow','2+ / 4e · descending answer','1--- / held spread','2+ / 4e · release'], sections: [{ name: 'verse', chord: 'Bm7', feature: 'voicing built around two shared top strings' },{ name: 'answer', chord: 'Gmaj7', feature: 'descending upper motion without losing the drone' },{ name: 'hold', chord: 'D(add9)', feature: 'spread voicing in the middle register' },{ name: 'return', chord: 'A(add9)', feature: 'open release setting up the loop again' }], tabLines: ['e|-7-----7---------|-7-----5-------|-5~~~~---------|-0-----0---------|','B|-7-----7---------|-7-----7-------|-5~~~~---------|-0-----0---------|','G|-7-----7---------|-7-----6-------|-7~~~~---------|-6-----6---------|','D|-7-----9---------|-5-----5-------|-7~~~~---------|-7-----7---------|','A|-9-----9---------|-5-----5-------|-5~~~~---------|-0-----0---------|','E|----------------|-3-----3-------|----------------|-----------------|'], bassPattern: [11,11,7,7,2,2,9,9], chordRoots: [11,7,2,9], commentTemplates: ['Those top strings barely move — that is why it feels haunted.','Bar 2 does just enough to darken the verse.','Holding the D(add9) is not indulgent — it is the point.'], guestbook: ['the held third bar is all i needed','a shimmer fragment with a believable bass story','way too printable'] },
  ],
  moody: [
    { id: 'drone-figure', tuning: 'D A D G B E', key: 'A dorian', progression: ['Am7','G','Dsus2','Am7'], hero: 'A moody drone figure that keeps returning to the same open-string center.', motifSummary: 'drone → small upper answer → suspended hold → restated opening', hookShape: '0-2-3-2 / 5-3-2-0', rhythmMap: ['2+ / 4e · drone figure','2+ / 4e · answering melody','1--- / suspended hold','2+ / 4e · opening restated'], sections: [{ name: 'verse', chord: 'Am7', feature: 'repeating drone against a 0-2-3-2 melody' },{ name: 'answer', chord: 'G', feature: 'same contour shifted to a darker landing' },{ name: 'hold', chord: 'Dsus2', feature: 'open-string suspension with one note moving' },{ name: 'return', chord: 'Am7', feature: 'exact opening figure returns' }], tabLines: ['e|-0-----0---------|-3-----2-------|-0~~~~---------|-0-----0---------|','B|-1-----1---------|-3-----3-------|-3~~~~---------|-1-----1---------|','G|-0-----2---------|-0-----0-------|-2~~~~---------|-0-----2---------|','D|-2-----2---------|-0-----0-------|-0~~~~---------|-2-----2---------|','A|-0-----0---------|-2-----2-------|----------------|-0-----0---------|','D|-----------------|----------------|----------------|-----------------|'], bassPattern: [9,9,7,7,0,0,9,9], chordRoots: [9,7,0,9], commentTemplates: ['The opening 0-2-3-2 figure literally comes back in bar 4.','Bar 3 is not empty — it is the Dsus2 suspension.','You could build a whole verse from how the answer shadows the first contour.'], guestbook: ['the recurring opening figure is why this feels like a song','stole the Dsus2 hold for something slower','bless whoever kept the answer phrase related'] },
    { id: 'overpass-lantern', tuning: 'E A D G B E', key: 'B minor', progression: ['Bm7','Aadd9','Gmaj7','D/F#'], hero: 'A slow-burn figure where the top note barely moves but the harmony changes under it.', motifSummary: 'anchored top note → darkened answer → middle bloom → walking return', hookShape: '7-7-5-7 / 9-7-5-2', rhythmMap: ['2+ / 4e · anchored top note','2+ / 4e · darkened answer','1--- / middle bloom','2+ / 4e · walking return'], sections: [{ name: 'verse', chord: 'Bm7', feature: 'anchored top note over roomy minor voicing' },{ name: 'answer', chord: 'Aadd9', feature: 'same upper note with bass stepping down' },{ name: 'hold', chord: 'Gmaj7', feature: 'soft bloom in middle strings' },{ name: 'return', chord: 'D/F#', feature: 'bass-led return like a withheld chorus' }], tabLines: ['e|-7-----7---------|-7-----7-------|-7~~~~---------|-5-----2---------|','B|-7-----7---------|-0-----0-------|-7~~~~---------|-3-----3---------|','G|-7-----7---------|-6-----6-------|-4~~~~---------|-2-----2---------|','D|-9-----9---------|-7-----7-------|-5~~~~---------|-0-----0---------|','A|-9-----9---------|----------------|-5~~~~---------|-----------------|','E|----------------|-5-----5-------|-3~~~~---------|-2-----2---------|'], bassPattern: [11,11,9,9,7,7,6,6], chordRoots: [11,9,7,2], commentTemplates: ['The held top note earns the "yearning" label.','Bar 2 is a bass move, not a new riff.','The Gmaj7 hold is where real songs get written.'], guestbook: ['the walking return is absurdly usable','every bar sounds related without getting boring','printed for the bar-3 hold'] },
    { id: 'dogwood-afterglow', tuning: 'E A D G B E', key: 'D major', progression: ['Dadd9','Bm7','Gmaj7','A6'], hero: 'A Carolina after-midnight progression keeping one bright string alive.', motifSummary: 'open-string glow → inward minor turn → held major-7 breath → unresolved lift', hookShape: '0-2-5-4 / 2-0-2-0', rhythmMap: ['2+ / 4e · glow figure','2+ / 4e · inward turn','1--- / held breath','2+ / 4e · unresolved lift'], sections: [{ name: 'verse', chord: 'Dadd9', feature: 'open top strings against a low D frame' },{ name: 'answer', chord: 'Bm7', feature: 'same brightness with bass pulled inward' },{ name: 'hold', chord: 'Gmaj7', feature: 'let-ring shape larger than the room' },{ name: 'lift', chord: 'A6', feature: 'gentle lift refusing full closure' }], tabLines: ['e|-0-----0---------|-2-----2-------|-2~~~~---------|-0-----0---------|','B|-3-----3---------|-3-----3-------|-3~~~~---------|-2-----2---------|','G|-2-----2---------|-2-----2-------|-4~~~~---------|-2-----2---------|','D|-0-----0---------|-4-----4-------|-5~~~~---------|-2-----2---------|','A|----------------|-2-----2-------|-5~~~~---------|-0-----0---------|','E|----------------|----------------|-3~~~~---------|-----------------|'], bassPattern: [2,2,11,11,7,7,9,9], chordRoots: [2,11,7,9], commentTemplates: ['The bright string never stops doing emotional work.','Bar 2 is almost the same picture as bar 1 — that is why it sounds like a song.','The Gmaj7 breath should stay spacious.'], guestbook: ['the Gmaj7 bar alone justified opening this site','used the A6 lift immediately','a slow fragment that knows what it is'] },
  ],
}

const DEMOS = [
  { id: 'cursed', label: '⚡ cursed mall demo', note: 'Dusty low riff with a fake tape-click pulse.', build() { return createSyntheticBuffer({ duration: 3.2, root: 110, overtone: 220, pulseRate: 8, clickStride: 1800, wobbleDepth: 0.7, decay: 1.1, noiseSeed: 1998 }) } },
  { id: 'dream', label: '🌙 shimmer heartbreak demo', note: 'A chorused, late-night lead line.', build() { return createSyntheticBuffer({ duration: 4.1, root: 164.81, overtone: 329.63, pulseRate: 4, clickStride: 2600, wobbleDepth: 1.6, decay: 0.48, overtoneMix: 0.62, noiseSeed: 2000 }) } },
  { id: 'garage', label: '🔥 garage tantrum demo', note: 'Short, rude, distorted eighth-note chugger.', build() { return createSyntheticBuffer({ duration: 2.6, root: 98, overtone: 147, pulseRate: 11, clickStride: 1300, wobbleDepth: 0.28, decay: 1.7, overtoneMix: 0.3, grit: 0.2, noiseSeed: 666 }) } },
]

// ─── SHRINE ARCHETYPES (Item 5) ────────────────────────────
// These are the genuinely different page structures
const SHRINE_ARCHETYPES = {
  tabdump: {
    id: 'tabdump', label: 'tab dump', weight: 25,
    // Tab first, minimal framing, short
    buildSections(shrine) {
      const parts = []
      parts.push(shrine._tabBlock)
      if (maybe(shrine.rand, 0.6)) parts.push(shrine._oneOrTwoComments)
      if (maybe(shrine.rand, 0.3)) parts.push(shrine._oneLoreFragment)
      return parts.filter(Boolean).join('\n')
    }
  },
  obsessive: {
    id: 'obsessive', label: 'obsessive shrine', weight: 25,
    // Everything and more: lore, gear, tab, long comment threads, guestbook
    buildSections(shrine) {
      const parts = []
      parts.push(shrine._loreBlock)
      parts.push(shrine._gearBlock)
      parts.push(shrine._tabBlock)
      parts.push(shrine._commentsBlock)
      parts.push(shrine._guestbookBlock)
      if (maybe(shrine.rand, 0.5)) parts.push(shrine._tracklistBlock)
      return parts.filter(Boolean).join('\n')
    }
  },
  fanpage: {
    id: 'fanpage', label: 'fan page', weight: 20,
    // Band info first, tab secondary or incomplete
    buildSections(shrine) {
      const parts = []
      parts.push(shrine._bandInfoBlock)
      parts.push(shrine._loreBlock)
      if (maybe(shrine.rand, 0.7)) parts.push(shrine._gearBlock)
      parts.push(shrine._tabBlock) // might be incomplete
      if (maybe(shrine.rand, 0.5)) parts.push(shrine._guestbookBlock)
      return parts.filter(Boolean).join('\n')
    }
  },
  forumrip: {
    id: 'forumrip', label: 'forum rip', weight: 15,
    // Forum thread format, tab appears mid-thread
    buildSections(shrine) {
      const parts = []
      parts.push(shrine._forumThreadBlock)
      return parts.filter(Boolean).join('\n')
    }
  },
  stub: {
    id: 'stub', label: 'dead page / stub', weight: 15,
    // Very short: title, maybe broken tab, one comment
    buildSections(shrine) {
      const parts = []
      if (maybe(shrine.rand, 0.5)) parts.push(shrine._stubTabBlock)
      if (maybe(shrine.rand, 0.4)) parts.push(shrine._oneOrTwoComments)
      parts.push(shrine._stubFooter)
      return parts.filter(Boolean).join('\n')
    }
  },
}

function pickArchetype(rand) {
  return weightedPick(rand, [
    [25, SHRINE_ARCHETYPES.tabdump],
    [25, SHRINE_ARCHETYPES.obsessive],
    [20, SHRINE_ARCHETYPES.fanpage],
    [15, SHRINE_ARCHETYPES.forumrip],
    [15, SHRINE_ARCHETYPES.stub],
  ])
}

function pickArchetypeForMeta(rand, meta) {
  // Ensure reroll sequences have visible structural variety:
  // cycle through all 5 archetypes in a seeded order before repeating.
  const cycle = shuffle(mulberry32((meta.baseSeed ?? meta.exactSeed ?? 1) ^ 0x51f15e), [
    SHRINE_ARCHETYPES.tabdump,
    SHRINE_ARCHETYPES.obsessive,
    SHRINE_ARCHETYPES.fanpage,
    SHRINE_ARCHETYPES.forumrip,
    SHRINE_ARCHETYPES.stub,
  ])
  const rerollIndex = Number(meta.reroll || 0)
  // For first render and rerolls, use cycle; fallback to weighted for non-reroll contexts
  if (Number.isFinite(rerollIndex)) return cycle[rerollIndex % cycle.length]
  return pickArchetype(rand)
}

// ─── AUDIO ENGINE (unchanged) ──────────────────────────────
function createSyntheticBuffer({ duration = 3.2, root = 110, overtone = 220, pulseRate = 8, clickStride = 1800, wobbleDepth = 0.7, decay = 1.1, overtoneMix = 0.45, grit = 0.08, noiseSeed = 1 }) {
  const sampleRate = 22050; const length = Math.floor(sampleRate * duration); const buffer = new AudioBuffer({ length, numberOfChannels: 1, sampleRate }); const data = buffer.getChannelData(0); const noiseRand = mulberry32(noiseSeed)
  for (let i = 0; i < length; i += 1) {
    const t = i / sampleRate; const envelope = Math.exp(-t * decay)
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
  return { duration: audioBuffer.duration, rms: Math.sqrt(rmsSum / data.length), peak, zeroRate: zeroCrossings / data.length, amplitudes, attack: attackPeak, sustain: tailAvg / Math.max(1, Math.floor(data.length * 0.3)), brightness: brightEnergy / data.length, density, transitionRate: transitions / data.length }
}

function classifyMood(meta) {
  if (meta.duration > 3.7 && meta.sustain > 0.08) return 'shimmery'
  if (meta.rms > 0.22 || meta.peak > 0.72 || meta.attack > 0.7) return 'feral'
  if (meta.zeroRate > 0.12 || meta.duration > 3.4 || (meta.sustain > 0.03 && meta.brightness > 0.015)) return 'shimmery'
  return 'moody'
}

function createReading(features, vibe = '') {
  const moodKey = classifyMood(features); const mood = MOODS[moodKey]
  const attackShape = features.attack > 0.72 ? 'hard first-strike attack' : features.attack > 0.5 ? 'present attack edge' : 'soft-edged arrival'
  const sustainShape = features.sustain > 0.034 ? 'long sustain tail' : features.sustain > 0.02 ? 'mid-length ring' : 'short clipped decay'
  const densityLabel = features.density > 0.64 ? 'crowded pulse density' : features.density > 0.4 ? 'steady phrase density' : 'airier phrase spacing'
  const brightnessLabel = features.brightness > 0.02 ? 'bright static scatter' : features.brightness > 0.013 ? 'balanced grit shimmer' : 'darker wooly grain'
  const why = []
  if (features.sustain > 0.03) why.push('long sustain pulled the shrine toward open-string smear')
  if (features.attack > 0.65) why.push('strong attack pushed the page toward more confrontational copy')
  if (features.density < 0.4) why.push('air between phrases opened room for dropout bars')
  if (features.brightness > 0.018) why.push('top-end static favored shimmer and nervous forum testimony')
  if (features.zeroRate < 0.1) why.push('lower zero-crossing kept the myth heavier')
  if (why.length < 3) why.push('the offering landed in a middle lane, so the page kept some ambiguity')
  return {
    moodKey, descriptors: [attackShape, sustainShape, densityLabel, brightnessLabel, mood.lane],
    why: why.slice(0, 4), emotionalLane: mood.lane,
    vibeEcho: vibe?.trim() ? `Vibe clue bent the page toward "${vibe.trim()}."` : 'No extra vibe clue was given.',
  }
}

function buildGenerationRecipe(meta) {
  const features = { duration: meta.duration, rms: meta.rms, peak: meta.peak, zeroRate: meta.zeroRate, amplitudes: meta.amplitudes, attack: meta.attack, sustain: meta.sustain, brightness: meta.brightness, density: meta.density, transitionRate: meta.transitionRate }
  const vibe = meta.vibe || ''; const sourceLabel = meta.sourceLabel || 'unknown offering'; const reading = createReading(features, vibe)
  return { version: 3, features, sourceLabel, vibe, reading, baseSeed: hashString(JSON.stringify({ features, sourceLabel, vibe, reading })) }
}

function buildVariantMeta(recipe, reroll = 0) { return { ...recipe.features, sourceLabel: recipe.sourceLabel, vibe: recipe.vibe, reading: recipe.reading, exactSeed: hashString(`${recipe.baseSeed}:${reroll}`), baseSeed: recipe.baseSeed, reroll } }

// ─── SCENE INFERENCE ───────────────────────────────────────
function inferScene(rand, meta, moodKey) {
  const vibe = (meta.vibe || '').toLowerCase(); const source = (meta.sourceLabel || '').toLowerCase()
  const haystack = `${vibe} ${source}`
  const southeastHints = ['raleigh','durham','chapel hill','carrboro','charlotte','north carolina','triangle','piedmont']
  const pnwHints = ['eugene','salem','corvallis','portland','springfield','oregon','pnw','willamette','cascadia']
  if (southeastHints.some((h) => haystack.includes(h))) return REGIONAL_SCENES.nc
  if (pnwHints.some((h) => haystack.includes(h))) return REGIONAL_SCENES.pnw
  return rand() > 0.5 ? REGIONAL_SCENES.pnw : REGIONAL_SCENES.nc
}

function pickBandName(rand) {
  const roll = rand()
  if (roll < 0.2) return pick(rand, NAME_PATTERNS.single)
  if (roll < 0.4) return pick(rand, NAME_PATTERNS.thePlural)
  if (roll < 0.6) return pick(rand, NAME_PATTERNS.insideJoke)
  if (roll < 0.8) return pick(rand, NAME_PATTERNS.placeThing)
  return pick(rand, NAME_PATTERNS.adjectiveNoun)
}

function chooseSongProfile(rand, moodKey, meta) {
  const options = SONGBOOK[moodKey] || SONGBOOK.moody
  const index = Math.abs((meta.baseSeed ?? meta.exactSeed ?? 0) + (meta.reroll ?? 0)) % options.length
  return options[index] || options[0]
}

// ─── VARIABLE TAB LENGTH (Item 6) ──────────────────────────
function makeTabLines(rand, profile, archetype) {
  const fullLines = profile.tabLines
  // Determine how many bars to show
  let barCount
  if (archetype.id === 'stub') {
    barCount = maybe(rand, 0.5) ? 1 : 0 // stubs might have no tab or just 1 bar
  } else {
    barCount = weightedPick(rand, [
      [10, 1],  // just the main lick
      [20, 2],  // riff fragment
      [40, 4],  // standard
      [20, 8],  // longer passage
      [10, 0],  // "tab incomplete"
    ])
  }

  if (barCount === 0) {
    return { lines: null, incomplete: true, rhythmMap: [], bars: 0 }
  }

  if (barCount <= 4) {
    // Extract subset of bars from the full tab
    const trimmedLines = fullLines.map(line => {
      const parts = line.split('|').filter(p => p !== '')
      const selected = parts.slice(0, barCount)
      return line.substring(0, 2) + '|' + selected.join('|') + '|'
    })
    return {
      lines: trimmedLines.join('\n'),
      incomplete: false,
      rhythmMap: profile.rhythmMap.slice(0, barCount),
      bars: barCount,
    }
  }

  // 8 bars: repeat the full 4-bar tab twice with slight variation note
  return {
    lines: fullLines.join('\n') + '\n\n  (repeats with variation)',
    incomplete: false,
    rhythmMap: [...profile.rhythmMap, ...profile.rhythmMap.map(r => r + ' (var)')],
    bars: 8,
  }
}

// ─── LORE FRAGMENT SYSTEM (Item 2) ─────────────────────────
function buildLoreFragments(rand, scene, band) {
  // Select 1-5 fragments, weighted toward 2-3
  const count = weightedPick(rand, [
    [15, 1], [35, 2], [30, 3], [15, 4], [5, 5]
  ])
  const selected = pickMany(rand, LORE_FRAGMENTS, count)
  const fragments = selected.map(f => {
    if (typeof f.text === 'function') return f.text(rand, scene)
    return f.text
  })
  // Maybe add band-specific lore
  if (band.lore && maybe(rand, 0.6)) fragments.push(band.lore)
  return fragments
}

// ─── VISUAL CHAOS (Item 19) ────────────────────────────────
function buildShrineStyle(rand) {
  const bgColors = [
    '#000033','#330033','#003333','#1a001a','#000000','#0d0d2b','#1c0a00',
    '#ffffff','#eeeeee','#003300','#330000','#000066','#1a0033',
    '#2b0040','#002244','#0a0a0a','#111111',
    'linear-gradient(180deg, #000033, #000000)',
    'linear-gradient(180deg, #1a001a, #000000)',
    'linear-gradient(180deg, #330033, #0a0a0a)'
  ]
  const bg = pick(rand, bgColors)
  const textColor = (bg === '#ffffff' || bg === '#eeeeee') ? '#000000' : '#f8dcff'
  const linkColor = (bg === '#ffffff' || bg === '#eeeeee') ? '#0000ff' : '#6bf7ff'

  // Build inline style
  let style = `background: ${bg}; color: ${textColor};`
  if (maybe(rand, 0.2)) style += ' text-align: center;'
  if (maybe(rand, 0.15)) style += ' font-family: "Times New Roman", serif;'
  if (maybe(rand, 0.1)) style += ' font-size: 0.9em;'

  return { style, textColor, linkColor, isLight: bg === '#ffffff' || bg === '#eeeeee' }
}

// ─── COMMENT GENERATION ────────────────────────────────────
function buildForumComments(rand, count, profile) {
  const out = []
  for (let i = 0; i < count; i++) {
    let text
    const roll = rand()
    if (roll < 0.50) {
      // Item 12: 50% simple/dumb comments
      text = pick(rand, DUMB_COMMENTS)
    } else if (roll < 0.70 && profile.commentTemplates) {
      text = pick(rand, profile.commentTemplates)
    } else if (roll < 0.85) {
      text = pick(rand, POETIC_COMMENTS)
    } else {
      text = pick(rand, DRAMA_COMMENTS)
    }
    out.push({
      user: pick(rand, FORUM_USERS),
      text,
      timestamp: maybe(rand, 0.4) ? `${pick(rand, ['01','02','03','04','05','06','07','08','09','10','11','12'])}/${pick(rand, ['01','05','12','14','19','22','28'])}/${pick(rand, ['99','00','01','02'])}` : null
    })
  }
  return out
}

function buildGuestbook(rand, profile, scene) {
  const total = 1 + Math.floor(rand() * 5)
  const out = []
  for (let i = 0; i < total; i++) {
    let text
    const roll = rand()
    if (roll < 0.3 && profile.guestbook) text = pick(rand, profile.guestbook)
    else if (roll < 0.5) text = pick(rand, REGISTER_POOLS.guestbook.mundane)
    else if (roll < 0.7) text = pick(rand, REGISTER_POOLS.guestbook.dumb)
    else if (roll < 0.85) text = pick(rand, REGISTER_POOLS.guestbook.hostile)
    else text = pick(rand, REGISTER_POOLS.guestbook.poetic)
    out.push({
      name: pick(rand, FORUM_USERS),
      place: pick(rand, POSTING_LOCATIONS),
      text
    })
  }
  return out
}

// ─── GEAR ──────────────────────────────────────────────────
function buildGear(rand, moodKey, scene) {
  return {
    guitar: pick(rand, scene.guitars),
    amp: pick(rand, scene.amps),
    pedal: pick(rand, moodKey === 'shimmery' ? scene.pedals.shimmery : scene.pedals.heavy),
    room: pick(rand, moodKey === 'shimmery' ? scene.rooms.shimmery : scene.rooms.heavy),
  }
}

// ─── SHRINE GENERATION ─────────────────────────────────────
function progressionRoots(progression) {
  const map = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 }
  return progression.map((chord) => {
    const normalized = chord.replace('Bb', 'A#').replace('Eb', 'D#')
    const note = normalized[0]; const accidental = normalized[1] === '#' ? 1 : 0
    return (map[note] + accidental + 12) % 12
  })
}

function generateShrine(meta) {
  const seed = meta.exactSeed ?? hashString(JSON.stringify(meta))
  const rand = mulberry32(seed)
  const moodKey = classifyMood(meta)
  const mood = MOODS[moodKey]

  // Item 5: Pick archetype
  const archetype = pickArchetypeForMeta(rand, meta)

  // Basic song info
  const title = generateTitle(rand)
  const bpm = 76 + Math.floor(rand() * 72)
  const scene = inferScene(rand, meta, moodKey)
  const band = JSON.parse(JSON.stringify(pick(rand, BANDS[scene.id])))
  // Item 11: sometimes replace band name
  if (maybe(rand, 0.4)) band.name = pickBandName(rand)
  // Item 11: messy members
  if (maybe(rand, 0.3)) {
    band.members = Array.from({ length: 2 + Math.floor(rand() * 3) }, () => generateMemberName(rand))
  }

  const profile = chooseSongProfile(rand, moodKey, meta)
  const tuning = profile.tuning || pick(rand, TUNINGS)
  const key = profile.key || pick(rand, KEYS)
  const era = pickEra(rand) // Item 16

  // Item 6: Variable tab length
  const tab = makeTabLines(rand, profile, archetype)

  // Item 2: Lore fragments
  const loreFragments = buildLoreFragments(rand, scene, band)

  // Item 19: Visual chaos
  const shrineStyle = buildShrineStyle(rand)

  // Comments (variable count by archetype)
  const commentCount = archetype.id === 'stub' ? (maybe(rand, 0.5) ? 1 : 0) :
    archetype.id === 'tabdump' ? (maybe(rand, 0.6) ? 1 + Math.floor(rand() * 2) : 0) :
    archetype.id === 'obsessive' ? 4 + Math.floor(rand() * 6) :
    archetype.id === 'forumrip' ? 5 + Math.floor(rand() * 8) :
    2 + Math.floor(rand() * 4)
  const comments = buildForumComments(rand, commentCount, profile)
  const guestbook = buildGuestbook(rand, profile, scene)
  const gear = buildGear(rand, moodKey, scene)

  // Item 3: Pooled keeper line (sometimes omitted)
  const keeperLine = maybe(rand, 0.6) ? pick(rand, KEEPER_DESCRIPTIONS) : null
  const closingLine = maybe(rand, 0.6) ? pick(rand, CLOSING_LINES) : null

  const shrineKeeper = pick(rand, scene.keeperHandles)
  const webring = pickWebring(rand, scene)

  // Item 13: Riff potency — make it dumb/inconsistent or omit
  const riffPotency = weightedPick(rand, [
    [30, null], // no rating
    [20, `${7 + Math.floor(rand() * 4)}/10`],
    [15, '11/10'],
    [10, '??/10'],
    [10, `${1 + Math.floor(rand() * 4)}/10 but it\'s a grower`],
    [10, '—'],
    [5, `${Math.floor(rand() * 3)}/10 honestly`],
  ])

  const badges = shuffle(rand, [...BADGES, ...scene.badges]).slice(0, 2 + Math.floor(rand() * 3))
  const stamps = shuffle(rand, [...STAMPS, ...scene.stamps]).slice(0, 1 + Math.floor(rand() * 3))

  // Item 20: Random unexplained elements
  const unexplainedElements = maybe(rand, 0.4) ? pickMany(rand, UNEXPLAINED_ELEMENTS, 1 + Math.floor(rand() * 2)) : []

  // Item 4: "Why this shrine happened" — collapsed or absent
  const showWhySection = archetype.id === 'obsessive' ? maybe(rand, 0.8) :
    archetype.id === 'fanpage' ? maybe(rand, 0.5) :
    archetype.id === 'forumrip' ? maybe(rand, 0.3) :
    archetype.id === 'tabdump' ? maybe(rand, 0.1) :
    false // stubs never

  const whyLines = [
    'nobody knows why this one survived',
    'this page outlasted everything around it',
    'someone mirrored it before the host went down',
    'the keeper was more dedicated than the band',
    'this survived because somebody cared',
    'found in a geocities backup',
    'recovered from a webring cache',
    'the ISP purged everything else',
    'someone printed this and retyped it years later',
    'hosted on a student server that nobody remembered to delete',
    'the original URL died but the content got scraped',
    'this was the only page in the webring that still resolved',
    'it survived because it was small enough to email',
    'someone burned this to a CD-R and re-uploaded it in 2003',
    'the wayback machine caught it once, barely',
  ]

  const chordHints = profile.progression
  const roots = profile.chordRoots || progressionRoots(chordHints)
  const backing = {
    tempo: bpm, rootMidi: 38 + roots[0], progression: chordHints,
    bassPattern: profile.bassPattern || roots.flatMap(r => [r, r]),
    drumPattern: mood.drumStyle, shimmer: moodKey === 'shimmery',
    form: profile.sections.map(s => s.name), hookShape: profile.hookShape, chordRoots: roots
  }

  // ─── BUILD HTML BLOCKS ─────────────────────────────────
  // These are the modular pieces the archetype assembler picks from

  // Tab block
  const _tabBlock = (() => {
    if (tab.incomplete || !tab.lines) {
      return `<div class="tab-block chrome inset readable-tab" style="padding:12px;">
        <p style="opacity:0.7;font-family:'Courier New',monospace;">${pick(rand, [
          'tab incomplete — transcription in progress, check back',
          'TAB COMING SOON (last updated ' + pick(rand, ['1999','2000','2001']) + ')',
          'tab section unavailable (geocities mirror 404\'d)',
          '[tab removed at request of band]',
          'transcription in progress',
          'sorry, only got the intro done so far',
        ])}</p>
      </div>`
    }
    return `<div class="tab-block chrome inset readable-tab">
      <div class="tab-toolbar"><span>Tuning: ${escapeHtml(tuning)}</span><span>${escapeHtml(chordHints.join(' → '))}</span></div>
      <pre>${escapeHtml(tab.lines)}</pre>
      ${tab.bars <= 2 ? '<p style="opacity:0.6;font-size:0.8em;margin-top:8px;">[ fragment only — full transcription pending ]</p>' : ''}
      ${tab.rhythmMap.length ? `<div class="rhythm-strip">${tab.rhythmMap.map(m => `<span>${escapeHtml(m)}</span>`).join('')}</div>` : ''}
    </div>`
  })()

  // Stub tab block — even more minimal
  const _stubTabBlock = (() => {
    if (maybe(rand, 0.4)) {
      return `<div style="padding:8px;border:1px dashed rgba(255,255,255,0.3);margin:8px 0;">
        <p style="opacity:0.6;font-family:'Courier New',monospace;">${pick(rand, [
          'tab section unavailable',
          'transcription in progress — check back',
          'more tabs coming soon (last updated 1999)',
          '[broken]',
          'tab goes here eventually',
        ])}</p>
      </div>`
    }
    // Show just 1 bar
    const oneLine = profile.tabLines.map(line => {
      const parts = line.split('|').filter(p => p !== '')
      return line.substring(0, 2) + '|' + (parts[0] || '---') + '|'
    }).join('\n')
    return `<div style="padding:8px;border:1px dashed rgba(255,255,255,0.3);margin:8px 0;">
      <pre style="font-size:0.8em;">${escapeHtml(oneLine)}</pre>
    </div>`
  })()

  // One or two comments (for tab dumps)
  const _oneOrTwoComments = (() => {
    const c = comments.slice(0, maybe(rand, 0.5) ? 1 : 2)
    if (!c.length) return ''
    return c.map(comment => `<p style="opacity:0.8;font-size:0.85em;margin:6px 0;"><strong>${escapeHtml(comment.user)}</strong>${comment.timestamp ? ` <span style="opacity:0.5">(${comment.timestamp})</span>` : ''}: ${escapeHtml(comment.text)}</p>`).join('')
  })()

  // One lore fragment
  const _oneLoreFragment = (() => {
    if (!loreFragments.length) return ''
    return `<p style="opacity:0.7;margin:8px 0;">${escapeHtml(loreFragments[0])}</p>`
  })()

  // Full lore block
  const _loreBlock = (() => {
    if (!loreFragments.length) return ''
    const useHr = maybe(rand, 0.3)
    const useHeader = maybe(rand, 0.6)
    let html = ''
    if (useHeader) html += `<div class="section-title">${pick(rand, ['PAGE HISTORY','ABOUT THIS TAB','SHRINE LORE','BAND HISTORY','HOW THIS GOT HERE','CONTEXT','NOTES'])}</div>`
    html += loreFragments.map(f => `<p>${escapeHtml(f)}</p>`).join(useHr ? '<hr style="border-color:rgba(255,255,255,0.2);">' : '')
    if (closingLine) html += `<p style="opacity:0.7;font-style:italic;">${escapeHtml(closingLine)}</p>`
    return `<div class="chrome inset" style="padding:12px;margin:10px 0;">${html}</div>`
  })()

  // Band info block (for fan pages)
  const _bandInfoBlock = (() => {
    let html = `<div class="chrome inset" style="padding:12px;margin:10px 0;">`
    html += `<div class="section-title" ${maybe(rand, 0.3) ? 'style="text-transform:uppercase;letter-spacing:0.2em;"' : ''}>${escapeHtml(band.name)}</div>`
    html += `<p><strong>${escapeHtml(band.hometown)}</strong> · ${escapeHtml(band.years)}</p>`
    if (band.members.length) {
      if (maybe(rand, 0.3)) {
        // ALL CAPS members section
        html += `<p style="text-transform:uppercase;letter-spacing:0.1em;font-size:0.85em;">${band.members.map(m => escapeHtml(m)).join(' / ')}</p>`
      } else {
        html += `<ul style="margin:8px 0;padding-left:18px;">${band.members.map(m => `<li>${escapeHtml(m)}</li>`).join('')}</ul>`
      }
    }
    if (band.albums.length) html += `<p style="opacity:0.8;">Records: ${band.albums.map(a => escapeHtml(a)).join(' / ')}</p>`
    if (band.influences?.length) html += `<p style="opacity:0.7;font-size:0.85em;">sounds like: ${band.influences.join(', ')}</p>`
    html += '</div>'
    return html
  })()

  // Gear block
  const _gearBlock = (() => {
    const useHeader = maybe(rand, 0.6)
    let html = ''
    if (useHeader) html += `<div class="section-title">${pick(rand, ['GEAR','SIGNAL CHAIN','EQUIPMENT','WHAT THEY PLAYED THROUGH','RIG NOTES'])}</div>`
    html += `<ul style="margin:0;padding-left:18px;">
      <li><strong>guitar:</strong> ${escapeHtml(gear.guitar)}</li>
      <li><strong>amp:</strong> ${escapeHtml(gear.amp)}</li>
      <li><strong>pedal:</strong> ${escapeHtml(gear.pedal)}</li>
      <li><strong>room:</strong> ${escapeHtml(gear.room)}</li>
    </ul>`
    return `<div class="chrome inset gear-block" style="padding:12px;margin:10px 0;">${html}</div>`
  })()

  // Full comments block
  const _commentsBlock = (() => {
    if (!comments.length) return ''
    const useHeader = maybe(rand, 0.6)
    let html = ''
    if (useHeader) html += `<div class="section-title">${pick(rand, ['COMMENTS','REPLIES','THREAD','ANNOTATIONS','FORUM POSTS','DISCUSSION'])}</div>`
    html += comments.map(c => {
      // Item 13: CRED SCORE — make it dumb/inconsistent or omit
      const showScore = maybe(rand, 0.3)
      const score = showScore ? ` <span class="comment-score" style="opacity:0.5">[${Math.floor(rand()*10)}/${Math.floor(rand()*20)}]</span>` : ''
      return `<div class="comment"><strong>${escapeHtml(c.user)}</strong>${c.timestamp ? ` <span style="opacity:0.5;font-size:0.75em">${c.timestamp}</span>` : ''}${score}<p>${escapeHtml(c.text)}</p></div>`
    }).join('')
    return `<div class="forum-block chrome inset" style="padding:12px;margin:10px 0;">${html}</div>`
  })()

  // Guestbook block
  const _guestbookBlock = (() => {
    if (!guestbook.length) return ''
    const useHeader = maybe(rand, 0.7)
    let html = ''
    if (useHeader) html += `<div class="section-title">${pick(rand, ['GUESTBOOK','SIGN THE GUESTBOOK','VISITOR LOG','DIARY RESIDUE','NOTES'])}</div>`
    html += guestbook.map(g => `<div class="guest-entry"><strong>${escapeHtml(g.name)}</strong><span>${escapeHtml(g.place)}</span><p>${escapeHtml(g.text)}</p></div>`).join('')
    return `<div class="chrome inset guestbook-block" style="padding:12px;margin:10px 0;">${html}</div>`
  })()

  // Tracklist block
  const _tracklistBlock = (() => {
    const tracks = [title]
    if (band.albums[0]) tracks.push(`${band.albums[0].split(' (')[0]} (mirror rip)`)
    tracks.push(`${pick(rand, scene.smallTowns)} rehearsal dub`)
    if (maybe(rand, 0.5)) tracks.push(generateTitle(rand))
    let html = `<div class="section-title">TRACKLIST</div>`
    html += `<div class="tracklist">${tracks.map((t, i) => `<div><span>${i + 1}.</span><span>${escapeHtml(t)}</span></div>`).join('')}</div>`
    return `<div class="chrome inset" style="padding:12px;margin:10px 0;">${html}</div>`
  })()

  // Forum thread block (for forum rip archetype)
  const _forumThreadBlock = (() => {
    let html = `<div class="chrome inset" style="padding:12px;margin:10px 0;">`
    html += `<div class="section-title" style="border-bottom:2px solid rgba(255,255,255,0.2);padding-bottom:6px;">
      THREAD: ${escapeHtml(title)} — ${pick(rand, ['Tab Request','Tab Discussion','Anyone got this tab?','NEW TAB — ' + escapeHtml(band.name),'Re: ' + escapeHtml(title)])}
    </div>`

    // First post: someone asking or posting
    html += `<div style="border-bottom:1px dotted rgba(255,255,255,0.2);padding:10px 0;">
      <strong>${escapeHtml(pick(rand, FORUM_USERS))}</strong>
      <span style="opacity:0.5;font-size:0.75em;margin-left:8px;">${pick(rand, ['01','02','03','04','05','06','07','08','09','10','11','12'])}/${pick(rand, ['01','05','12','14','19','22','28'])}/${pick(rand, ['99','00','01','02'])}</span>
      <p>${pick(rand, [
        'does anyone have the tab for this? heard it at ' + escapeHtml(pick(rand, scene.venues)) + ' and cant figure out the chords',
        'here\'s my attempt at tabbing this. corrections welcome',
        'found this tab on a dead geocities page, reposting here',
        'transcribed this from the demo tape. pretty sure it\'s right',
        escapeHtml(band.name) + ' — ' + escapeHtml(title) + '. tab below.',
      ])}</p>
    </div>`

    // Tab appears mid-thread
    if (!tab.incomplete && tab.lines) {
      html += `<div style="border-bottom:1px dotted rgba(255,255,255,0.2);padding:10px 0;">
        <strong>${escapeHtml(pick(rand, FORUM_USERS))}</strong>
        <span style="opacity:0.5;font-size:0.75em;margin-left:8px;">RE:</span>
        <pre style="margin-top:8px;font-size:0.85em;">${escapeHtml(tab.lines)}</pre>
        <p style="font-size:0.85em;opacity:0.7;">tuning: ${escapeHtml(tuning)}</p>
      </div>`
    }

    // Reply chain
    comments.forEach(c => {
      html += `<div style="border-bottom:1px dotted rgba(255,255,255,0.2);padding:10px 0;">
        <strong>${escapeHtml(c.user)}</strong>
        ${c.timestamp ? `<span style="opacity:0.5;font-size:0.75em;margin-left:8px;">${c.timestamp}</span>` : ''}
        <p>${escapeHtml(c.text)}</p>
      </div>`
    })

    html += '</div>'
    return html
  })()

  // Stub footer
  const _stubFooter = (() => {
    return `<div style="padding:8px;opacity:0.6;text-align:center;margin:12px 0;">
      <p>${pick(rand, [
        'this page under construction',
        'more tabs coming soon (last updated 1999)',
        'page not found — cached version shown',
        '[ this space intentionally left blank ]',
        'content removed by owner',
        'geocities mirror — original site offline',
        'last updated: ' + pick(rand, ['03/14/99','11/22/00','07/08/01','01/01/00','??/??/??']),
      ])}</p>
    </div>`
  })()

  // "Why" section
  const _whyBlock = (() => {
    if (!showWhySection) return ''
    return `<details class="chrome inset inspect-block" style="padding:12px;margin:10px 0;">
      <summary>${pick(rand, ['why this shrine happened','how this page survived','archive notes','why this exists'])}</summary>
      <p style="margin-top:8px;">${escapeHtml(pick(rand, whyLines))}</p>
      ${meta.reading ? `<ul>${meta.reading.why.slice(0, 2).map(w => `<li style="opacity:0.7;">${escapeHtml(w)}</li>`).join('')}</ul>` : ''}
    </details>`
  })()

  // ─── ASSEMBLE SHRINE ──────────────────────────────────
  // Attach all blocks to a shrine object for the archetype builder
  const shrineObj = {
    rand, _tabBlock, _stubTabBlock, _oneOrTwoComments, _oneLoreFragment,
    _loreBlock, _bandInfoBlock, _gearBlock, _commentsBlock, _guestbookBlock,
    _tracklistBlock, _forumThreadBlock, _stubFooter, _whyBlock,
  }

  const contentHtml = archetype.buildSections(shrineObj)

  // Item 19: per-shrine visual mutations
  const hrDividers = maybe(rand, 0.4)
  const allCapsSection = maybe(rand, 0.15)

  // Item 20: unexplained elements
  const unexplainedHtml = unexplainedElements.map(e =>
    e.replace('__COUNTER__', String(100 + Math.floor(rand() * 9900)))
  ).join('')

  // Build the complete shrine HTML
  const heroHtml = archetype.id === 'stub' ? '' : `
    <section class="hero-banner chrome inset hero-gradient" style="${shrineStyle.style}">
      <div>
        ${archetype.id !== 'tabdump' ? `<div class="gif-row">${stamps.map(s => `<span class="gif-pill alt">${escapeHtml(s)}</span>`).join('')}</div>` : ''}
        <h3>${escapeHtml(title)}</h3>
        <p class="subtitle">${escapeHtml(key)} · ${bpm} BPM · ${escapeHtml(mood.label)}</p>
        ${archetype.id !== 'tabdump' ? `<p class="source-note">Webring: ${escapeHtml(webring)}${keeperLine ? ` · Keeper: ${escapeHtml(shrineKeeper)} — ${escapeHtml(keeperLine)}` : ''}</p>` : ''}
        ${riffPotency ? `<p style="opacity:0.7;font-size:0.8em;">riff potency: ${escapeHtml(riffPotency)}</p>` : ''}
      </div>
      ${archetype.id === 'obsessive' ? `<div class="cd-box"><div class="cd-disc"></div></div>` : ''}
    </section>`

  const stubTitleHtml = archetype.id === 'stub' ? `
    <div style="padding:12px;${shrineStyle.style}">
      <h3 style="margin-bottom:4px;">${escapeHtml(title)}</h3>
      ${maybe(rand, 0.5) ? `<p style="opacity:0.5;font-size:0.8em;">${escapeHtml(band.name)} · ${escapeHtml(era)}</p>` : ''}
    </div>` : ''

  const tabdumpTitleHtml = archetype.id === 'tabdump' ? `
    <div style="padding:8px 12px;${shrineStyle.style}">
      <h3 style="margin-bottom:2px;font-size:1.2em;">${escapeHtml(title)}</h3>
      <p style="opacity:0.6;font-size:0.8em;margin:0;">${escapeHtml(tuning)} · ${escapeHtml(key)}</p>
    </div>` : ''

  // Item 19: frames disclaimer
  const framesDisclaimer = maybe(rand, 0.1) ? '<p style="text-align:center;font-size:0.75em;opacity:0.5;margin:4px 0;">NO FRAMES VERSION — click here for frames</p>' : ''

  const statsGrid = (archetype.id !== 'stub' && archetype.id !== 'tabdump') ? `
    <section class="stats-grid">
      <div class="mini-window"><strong>Era</strong><span>${escapeHtml(era)}</span></div>
      <div class="mini-window"><strong>Scene</strong><span>${escapeHtml(scene.label)}</span></div>
      <div class="mini-window"><strong>Band</strong><span>${escapeHtml(band.name)} · ${escapeHtml(band.hometown)}</span></div>
      <div class="mini-window"><strong>Source</strong><span>${escapeHtml(meta.sourceLabel)}</span></div>
    </section>` : ''

  const badgeWall = archetype.id !== 'stub' ? `
    <footer class="badge-wall chrome inset">${badges.map(b => `<span class="badge ${maybe(rand, 0.3) ? 'blink' : ''}">${escapeHtml(b)}</span>`).join('')}</footer>` : ''

  const fullHtml = `
    ${framesDisclaimer}
    ${stubTitleHtml}
    ${tabdumpTitleHtml}
    ${heroHtml}
    ${statsGrid}
    ${hrDividers ? '<hr style="border-color:rgba(255,255,255,0.15);margin:8px 0;">' : ''}
    ${_whyBlock}
    ${allCapsSection ? `<div style="text-transform:uppercase;letter-spacing:0.08em;">${contentHtml}</div>` : contentHtml}
    ${unexplainedHtml}
    ${hrDividers ? '<hr style="border-color:rgba(255,255,255,0.15);margin:8px 0;">' : ''}
    ${badgeWall}
  `

  return {
    version: 10, seed, baseSeed: meta.baseSeed ?? seed, reroll: meta.reroll ?? 0,
    title, mood: mood.label, bpm, tuning, key, era, tabs: tab.lines, tabBars: tab.bars,
    archetype, shrineKeeper, band, scene, profile, moodKey,
    comments, guestbook, gear, loreFragments, keeperLine, closingLine,
    riffPotency, badges, stamps, webring, shrineStyle,
    showWhySection, backing, reading: meta.reading,
    unexplainedElements, contentHtml: fullHtml,
    sourceLabel: meta.sourceLabel, vibe: meta.vibe || '',
    waveform: meta.amplitudes,
    counter: String(120000 + (seed % 700000)).padStart(6, '0'),
    relicText: `Recovered from ${pick(rand, scene.recordingOrigins)} during ${era}. Source offering: ${meta.sourceLabel}.`,
    motifSummary: profile.motifSummary, hookShape: profile.hookShape,
  }
}

// ─── APP SHELL ─────────────────────────────────────────────
const app = document.querySelector('#app')
app.innerHTML = `
<div class="page-shell">
  <header class="masthead window chrome">
    <div class="title-strip"><span>~*~ ANGELFIRE TAB NECROMANCER 2000 ~*~</span><span class="blink">ONLINE</span></div>
    <div class="masthead-grid">
      <div>
        <p class="eyebrow">HUM A RIFF. SUMMON A SHRINE.</p>
        <h1>Angelfire Tab Necromancer</h1>
        <p class="lede">Feed it a hummed riff, a rough recording, or one of the cursed demos. It resurrects a lost late-90s guitar shrine: tab, band lore, forum testimony, and sibling realities.</p>
        <div class="hero-intro-grid">
          <div class="quickstart-box chrome inset">
            <div class="section-title">First move</div>
            <p><strong>Hit <span class="inline-highlight">Use surprise demo</span>.</strong> Full ritual in two seconds.</p>
          </div>
          <div class="quickstart-box chrome inset alt">
            <div class="section-title">What comes back</div>
            <p>A playable backing track, readable tab, an invented scene-history, and the clues that shaped this weird corner of the internet.</p>
          </div>
        </div>
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
      <div class="status-box" id="statusBox">Waiting for a riff. Fastest way in: hit surprise demo.</div>
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
      <article id="shrine" class="shrine shrine-empty"><div><div class="construction">NO SHRINE SUMMONED YET</div><p>Start with <strong>⚡ Use surprise demo</strong> for the fastest resurrection.</p></div></article>
    </section>
  </main>
</div>`

const state = { audioBuffer: null, audioContext: null, mediaRecorder: null, stream: null, generated: null, recipe: null, rerollCount: 0, pinned: null, favorites: loadFavorites() }
const el = {
  recordBtn: document.querySelector('#recordBtn'), fileInput: document.querySelector('#fileInput'), demoBtn: document.querySelector('#demoBtn'),
  demoSelect: document.querySelector('#demoSelect'), demoNote: document.querySelector('#demoNote'), playBtn: document.querySelector('#playBtn'), shareBtn: document.querySelector('#shareBtn'),
  printBtn: document.querySelector('#printBtn'), rerollBtn: document.querySelector('#rerollBtn'), vibeInput: document.querySelector('#vibeInput'), shrine: document.querySelector('#shrine'),
  statusBox: document.querySelector('#statusBox'), visitorCount: document.querySelector('#visitorCount'), clockBadge: document.querySelector('#clockBadge'), waveCanvas: document.querySelector('#waveCanvas'),
  ritualSteps: document.querySelector('#ritualSteps'), readingPanel: document.querySelector('#readingPanel'), lineagePanel: document.querySelector('#lineagePanel'), pinBtn: document.querySelector('#pinBtn'),
  favoriteBtn: document.querySelector('#favoriteBtn'), favoritesList: document.querySelector('#favoritesList'),
}

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

function renderReading(recipe) {
  if (!recipe?.reading) return
  el.readingPanel.innerHTML = `<div class="section-title">Riff reading</div><div class="descriptor-grid">${recipe.reading.descriptors.map((d) => `<span class="descriptor-chip">${escapeHtml(d)}</span>`).join('')}</div><p class="reading-lede">Likely emotional lane: <strong>${escapeHtml(recipe.reading.emotionalLane)}</strong>.</p><p>${escapeHtml(recipe.reading.vibeEcho)}</p>`
}

function renderLineage() {
  if (!state.recipe) return
  const variants = [0, 1, 2].map((reroll) => generateShrine(buildVariantMeta(state.recipe, reroll)))
  el.lineagePanel.innerHTML = `<div class="section-title">Sibling realities</div><div class="lineage-strip">${variants.map((variant) => `<button class="lineage-card ${variant.reroll === state.rerollCount ? 'active' : ''} ${state.pinned?.seed === variant.seed ? 'pinned' : ''}" data-reroll="${variant.reroll}"><strong>v${variant.reroll + 1}</strong><span>${escapeHtml(variant.title)}</span><em>${escapeHtml(variant.archetype.label)}</em></button>`).join('')}</div>`
  el.lineagePanel.querySelectorAll('[data-reroll]').forEach((button) => button.addEventListener('click', () => {
    state.rerollCount = Number(button.dataset.reroll)
    state.generated = generateShrine(buildVariantMeta(state.recipe, state.rerollCount))
    renderShrine(state.generated); persistToHash(); setStatus(`Jumped to sibling reality #${state.rerollCount + 1}.`)
  }))
}

function renderFavorites() {
  if (!state.favorites.length) { el.favoritesList.innerHTML = '<p class="placeholder-copy">No saved relics yet.</p>'; return }
  el.favoritesList.innerHTML = state.favorites.map((favorite, index) => `<button class="favorite-card" data-favorite="${index}"><strong>${escapeHtml(favorite.title)}</strong><span>${escapeHtml(favorite.archetype)}</span></button>`).join('')
  el.favoritesList.querySelectorAll('[data-favorite]').forEach((button) => button.addEventListener('click', () => { window.location.href = state.favorites[Number(button.dataset.favorite)].url }))
}

function renderShrine(shrine) {
  el.visitorCount.textContent = shrine.counter
  el.shrine.className = `shrine archetype-${shrine.archetype.id}`
  el.shrine.style.cssText = shrine.shrineStyle.style
  el.shrine.innerHTML = shrine.contentHtml
  drawWaveform(shrine.waveform.map((value, index) => ((index % 2 === 0 ? 1 : -1) * value * 1.8)))
  renderLineage(); renderFavorites()
}

function encodeState(recipe, reroll) { return btoa(unescape(encodeURIComponent(JSON.stringify({ v: 3, f: recipe.features, s: recipe.sourceLabel, i: recipe.vibe, b: recipe.baseSeed, x: reroll })))) }
function decodeState(hash) { const payload = JSON.parse(decodeURIComponent(escape(atob(hash)))); if (payload.v !== 3) throw new Error('Unsupported permalink version'); return { version: payload.v, features: payload.f, sourceLabel: payload.s, vibe: payload.i, baseSeed: payload.b, reroll: payload.x } }

function persistToHash() { if (!state.recipe) return; window.location.hash = encodeState(state.recipe, state.rerollCount) }
function hydrateFromHash() {
  if (!window.location.hash.slice(1)) return false
  try {
    const restored = decodeState(window.location.hash.slice(1)); state.recipe = { version: restored.version, features: restored.features, sourceLabel: restored.sourceLabel, vibe: restored.vibe, baseSeed: restored.baseSeed, reading: createReading(restored.features, restored.vibe) }
    el.vibeInput.value = restored.vibe || ''; state.rerollCount = restored.reroll || 0; state.generated = generateShrine(buildVariantMeta(state.recipe, state.rerollCount)); renderReading(state.recipe); renderShrine(state.generated); setRitualStep(4); setStatus('Shrine restored from its permalink.'); return true
  } catch (error) { console.warn('Failed to restore shrine from hash', error); setStatus('That permalink is busted. Offer a new riff or use a demo.'); return false }
}

async function analyzeBuffer(audioBuffer, sourceLabel = 'unknown offering') {
  setRitualStep(2); const features = sampleFeatures(audioBuffer)
  state.recipe = buildGenerationRecipe({ ...features, sourceLabel, vibe: el.vibeInput.value.trim() }); state.audioBuffer = audioBuffer; state.rerollCount = 0; renderReading(state.recipe)
  setRitualStep(3); state.generated = generateShrine(buildVariantMeta(state.recipe, state.rerollCount)); setRitualStep(4); renderShrine(state.generated); persistToHash(); setStatus(`Shrine raised from ${sourceLabel}. Permalink updated.`)
}

function rerollShrine() { if (!state.recipe) return setStatus('No riff loaded yet.'); state.rerollCount += 1; state.generated = generateShrine(buildVariantMeta(state.recipe, state.rerollCount)); renderShrine(state.generated); persistToHash(); setStatus(`Sibling reality #${state.rerollCount + 1} revealed.`) }
async function decodeFile(file) { const context = await getAudioContext(); const bytes = await file.arrayBuffer(); return context.decodeAudioData(bytes.slice(0)) }
async function handleUpload(event) { const [file] = event.target.files || []; if (!file) return; setStatus(`Decoding ${file.name}...`); try { const buffer = await decodeFile(file); await analyzeBuffer(buffer, file.name) } catch (error) { console.error(error); setStatus('The necromancer choked on that file. Try mp3, wav, or m4a.') } }

async function recordMic() {
  if (!navigator.mediaDevices?.getUserMedia) return setStatus('Microphone capture is not available.')
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true }); state.stream = stream; const recorder = new MediaRecorder(stream); const chunks = []; state.mediaRecorder = recorder
  recorder.ondataavailable = (event) => { if (event.data.size) chunks.push(event.data) }
  recorder.onstop = async () => { try { const blob = new Blob(chunks, { type: recorder.mimeType || 'audio/webm' }); const file = new File([blob], 'mic-riff.webm', { type: blob.type }); const buffer = await decodeFile(file); await analyzeBuffer(buffer, 'live microphone ritual') } catch (error) { console.error(error); setStatus('Mic capture worked, but decoding failed.') } finally { stream.getTracks().forEach((track) => track.stop()) } }
  recorder.start(); setStatus('Recording... hum your riff. Capturing for 6 seconds.'); setTimeout(() => recorder.state !== 'inactive' && recorder.stop(), 6000)
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
  if (!state.generated) return setStatus('Generate a shrine first.')
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

async function copyPermalink() { if (!state.generated) return setStatus('No shrine yet.'); const url = window.location.href; await navigator.clipboard.writeText(url); setStatus(`Permalink copied.`) }
function getSelectedDemo() { return DEMOS.find((demo) => demo.id === el.demoSelect.value) || DEMOS[0] }
function refreshDemoNote() { const demo = getSelectedDemo(); el.demoNote.textContent = `Selected demo: ${demo.note}` }
function pinCurrent() { if (!state.generated) return setStatus('Nothing to pin yet.'); state.pinned = { seed: state.generated.seed, title: state.generated.title, reroll: state.generated.reroll }; renderLineage(); setStatus(`Pinned ${state.generated.title}.`) }
function saveFavorite() { if (!state.generated) return setStatus('Nothing to save yet.'); const favorite = { title: state.generated.title, archetype: state.generated.archetype.label, url: window.location.href }; state.favorites = [favorite, ...state.favorites.filter((item) => item.url !== favorite.url)].slice(0, 8); localStorage.setItem('angelfire-tab-necromancer:favorites', JSON.stringify(state.favorites)); renderFavorites(); setStatus(`Saved ${state.generated.title}.`) }
function loadFavorites() { try { return JSON.parse(localStorage.getItem('angelfire-tab-necromancer:favorites') || '[]') } catch { return [] } }

el.fileInput.addEventListener('change', handleUpload)
el.recordBtn.addEventListener('click', async () => { try { await recordMic() } catch (error) { console.error(error); setStatus('Microphone permission denied.') } })
el.demoBtn.addEventListener('click', async () => { const demo = getSelectedDemo(); setStatus(`Raising ${demo.label.replace(/^.+?\s/, '')}...`); setRitualStep(1); await analyzeBuffer(demo.build(), demo.label) })
el.demoSelect.addEventListener('change', refreshDemoNote)
el.playBtn.addEventListener('click', playBacking)
el.shareBtn.addEventListener('click', copyPermalink)
el.printBtn.addEventListener('click', () => window.print())
el.rerollBtn.addEventListener('click', rerollShrine)
el.pinBtn.addEventListener('click', pinCurrent)
el.favoriteBtn.addEventListener('click', saveFavorite)

drawWaveform(); updateClockBadge(); setRitualStep(1); refreshDemoNote(); renderFavorites(); hydrateFromHash()