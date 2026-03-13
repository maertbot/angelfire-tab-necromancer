import './style.css'

const TAB_STRINGS = ['e', 'B', 'G', 'D', 'A', 'E']
const TITLE_PREFIXES = ['Velvet', 'Chrome', 'Basement', 'Candlelit', 'Laser', 'Ashtray', 'Midnight', 'Tape-Hiss', 'Blacklight', 'Mall', 'Sorcerer\'s', 'Dial-Up', 'Velour', 'Moonburn', 'Static', 'Dreamfax', 'Neon', 'Prayer Circle', 'Wet Cement', 'VHS']
const TITLE_SUBJECTS = ['Cathedral', 'Promenade', 'Telecaster', 'Funeral', 'Skatepark', 'Afterparty', 'Hex', 'Lifeguard Chair', 'Summer', 'Prophecy', 'Bus Ticket', 'Kiss-Off', 'Cigarette Halo', 'Parking Lot', 'Girlfriend', 'Stairwell', 'Data Ghost', 'Food Court', 'Practice Space', 'Slowdance']
const TITLE_SUFFIXES = ['Riff', 'Lament', 'Theme', 'Directive', 'Signal', 'Prayer', 'Demo', 'Memorial', 'Tab', 'Overture']
const FORUM_USERS = ['xX_TabGhoul_Xx', 'fretwizard77', 'DropD4Eva', 'mallgothdad', 'amphexed', 'shredmancer', 'modemtears', 'bossmetalzone', 'fenderbender99', 'cassetteoracle', 'webringwidow', 'd00m_capo']
const BADGES = ['BEST VIEWED WHILE SHREDDING', 'TABS NEVER DIE', 'MIDI IS PEOPLE TOO', 'UNDER CONSTRUCTION FOREVER', 'DROP D OR DROP DEAD', 'POWERED BY MOUNTAIN DEW CODE RED', 'NETSCAPE FRIENDLY', 'HAND-CODED IN DESPERATION', 'NO NU METAL HATE MAIL', 'PRINT THIS BEFORE AOL DELETES IT']
const STAMPS = ['🕸️ haunted', '💿 cd-r verified', '📡 56k approved', '⚡ solo safe', '🦇 mallgoth tested', '🧃 surge compatible']
const WEBRINGS = ['Pacific Northwest Bedroom Shred Ring', 'Dial-Up Doom Guitarists Alliance', 'Angsty Tabs for Sensitive Delinquents', 'Geocities Axe Altar Webring']
const TUNINGS = ['E A D G B E', 'D A D G B E', 'D G C F A D', 'C G C F A D', 'D A D F# A D', 'Eb Ab Db Gb Bb Eb']
const KEYS = ['E minor', 'A dorian', 'D mixolydian', 'G minor pentatonic', 'C# phrygian-ish', 'B natural minor', 'F lydian if you squint']
const ERAS = ['Summer 1998', 'Fall 1999', 'Y2K eve', 'that one LAN party weekend', 'the week everyone got a wah pedal', 'the month before somebody\'s starter jacket got stolen']
const RARE_EVENTS = ['cursed mirror verified', 'missing verse fragment recovered', 'disputed authorship thread', 'one-hit guestbook prophecy', 'prom-night bootleg provenance']

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

const BANDS = [
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
]

const MOODS = {
  feral: {
    label: 'feral basement peak', descriptors: ['feral', 'amp-rattling', 'mosh-adjacent'],
    lane: 'basement feral', tabs: ['PM--', 'x-', '/-', 'h', 'p'],
    chordPool: ['E5', 'G5', 'A5', 'C5', 'D5'],
    drumStyle: ['kick', 'hat', 'kick', 'snare', 'kick', 'hat', 'snare', 'kick'],
  },
  shimmery: {
    label: 'shimmery food-court ache', descriptors: ['shimmery', 'chorused', 'heartbruised'],
    lane: 'shimmer heartbreak', tabs: ['12', '10', '7', '~', '/'],
    chordPool: ['Em(add9)', 'Cmaj7', 'G', 'Dsus2', 'A7sus4'],
    drumStyle: ['hat', 'hat', 'snare', 'hat', 'kick', 'hat', 'snare', 'hat'],
  },
  moody: {
    label: 'moody fluorescent yearning', descriptors: ['moody', 'slow-burn', 'rain-on-payphone'],
    lane: 'fluorescent yearning', tabs: ['0', '3', '5', '7', '~'],
    chordPool: ['Em', 'C', 'G/B', 'Dsus4', 'Am'],
    drumStyle: ['kick', 'hat', 'snare', 'hat', 'kick', 'hat', 'hat', 'snare'],
  },
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
  if (meta.rms > 0.22 || meta.peak > 0.72 || meta.attack > 0.7) return 'feral'
  if (meta.zeroRate > 0.12 || meta.duration > 3.8 || meta.sustain > 0.03) return 'shimmery'
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

function buildMotifs(rand, meta, moodKey) {
  const base = Math.round(clamp(meta.rms * 26 + meta.duration * 1.8 + meta.attack * 5, 2, 13))
  const lane = MOODS[moodKey]
  const motifA = [0, 2, 3, 2].map((v, i) => `${Math.max(0, base + v - (i === 3 ? 1 : 0))}`)
  const motifB = moodKey === 'shimmery'
    ? [0, 3, 7, '7~']
    : moodKey === 'feral'
      ? [0, 0, 'x', 3]
      : [0, 2, 5, 3]
  const answer = shuffle(rand, motifA).slice(0, 4)
  return { motifA, motifB, answer, lane }
}

function buildRhythmMap(meta, bars) {
  const amp = meta.amplitudes
  return Array.from({ length: bars }, (_, bar) => {
    const slice = amp.slice(bar * 12, bar * 12 + 12)
    const avg = slice.reduce((sum, n) => sum + n, 0) / Math.max(1, slice.length)
    const note = avg > 0.18 ? 'choke-hit' : avg > 0.1 ? 'open ring' : 'dropout bar'
    const accent = avg > 0.17 ? '1e+a / 3+' : avg > 0.1 ? '2+ / 4e' : '1--- / answer'
    return `${accent} · ${note}`
  })
}

function makeTabLines(rand, meta, moodKey) {
  const mood = MOODS[moodKey]; const fretBase = Math.max(0, Math.min(12, Math.round(meta.rms * 28 + meta.duration * 1.4))); const bars = 4; const motifs = buildMotifs(rand, meta, moodKey); const rhythmMap = buildRhythmMap(meta, bars)
  const phrases = [motifs.motifA, motifs.answer, motifs.motifB, meta.density < 0.46 ? ['--', '--', `${Math.max(0, fretBase - 2)}`, '--'] : motifs.motifA]
  const lines = TAB_STRINGS.map((stringName, stringIndex) => {
    let line = `${stringName}|`
    for (let bar = 0; bar < bars; bar += 1) {
      const phrase = phrases[bar]
      for (let step = 0; step < 8; step += 1) {
        const motifToken = phrase[step % 4]
        let token = motifToken
        if (stringIndex > 3 && moodKey === 'feral') token = step % 2 === 0 ? '0' : 'x'
        else if (stringIndex < 2 && moodKey === 'shimmery' && step % 4 === 3) token = `${motifToken}`.replace(/\d+/, `${Math.max(0, fretBase + 7)}`)
        else if (step % 4 === 1 && rand() > 0.55) token = tabToken(rand, mood.tabs, fretBase + ((bar + stringIndex) % 3))
        line += `${String(token).padStart(4, '-')}`
      }
      line += '|'
    }
    return line
  })
  return { lines: lines.join('\n'), rhythmMap, motifs, bars }
}

function buildTracklist(rand, title, band) { return [title, `${pick(rand, TITLE_PREFIXES)} ${pick(rand, TITLE_SUBJECTS)}`, `${band.albums[0].split(' (')[0]} (mirror rip)`, `${pick(rand, TITLE_PREFIXES)} ${pick(rand, TITLE_SUFFIXES)}`] }
function buildGear(rand, moodKey) {
  const guitars = ['Squier Strat with stickers', 'sunburst Yamaha Pacifica', 'pawn shop SG copy', 'black Epiphone Les Paul', 'mystery offset from a church rummage sale']
  const amps = ['Peavey Bandit', 'Crate half-stack', 'Fender Frontman 25R', 'borrowed Marshall combo', 'amp of unknown origin with one angry speaker']
  const pedals = moodKey === 'shimmery' ? ['Danelectro FAB Chorus', 'Big Muff clone', 'cheap digital delay', 'Small Clone rumor only'] : ['Boss Metal Zone', 'DOD grunge pedal', 'Big Muff clone', 'one tuner and a dream']
  return { guitar: pick(rand, guitars), amp: pick(rand, amps), pedal: pick(rand, pedals), room: pick(rand, moodKey === 'shimmery' ? ['food court after closing', 'upstairs bedroom with christmas lights', 'church youth room during setup'] : ['unfinished basement with concrete bloom', 'garage beside hockey pads', 'practice space behind the roller rink']) }
}

function buildCanon(rand, meta, moodKey, title) {
  const band = pick(rand, BANDS); const archetypeIndex = meta.reading ? (Math.floor((meta.reading.descriptors.join('').length + meta.reroll) % SHRINE_ARCHETYPES.length)) : Math.floor(rand() * SHRINE_ARCHETYPES.length); const archetype = SHRINE_ARCHETYPES[archetypeIndex]
  const songSlot = 1 + Math.floor(rand() * 4); const recordingOrigin = pick(rand, ['a fourth-generation practice-space dub', 'an mp3 rescued from a fan webring mirror', 'a tab emailed as plain text and rehosted without permission', 'a cassette rip labelled only SIDE B / LATE'])
  const shrineKeeper = pick(rand, ['kristin_from_gatewaypc', 'tabsaint77', 'stolenwahpedal', 'mallsaint', 'midnightfretprayer'])
  const songHistory = [
    `${band.name} formed in ${band.hometown} and spent ${band.years} haunting all-ages rooms with amps louder than their flyers suggested.`,
    `${title} is generally listed by fans as track ${songSlot} from ${pick(rand, band.albums)}, though arguments continue because at least one tape rip reversed the order.`,
    `The surviving source appears to be ${recordingOrigin}; this shrine was canonized by ${shrineKeeper} after two prior mirrors vanished.`,
    `${band.lore} The consensus is that the tab is not exact, but emotionally binding.`,
  ]
  return { band, archetype, shrineKeeper, songHistory, recordingOrigin }
}

function buildForumComments(rand, canon, title, backing, moodKey) {
  if (canon.archetype.id === 'gearhead') return Array.from({ length: 4 }, (_, i) => ({ user: FORUM_USERS[i], score: `${8 + i}/1${i}`, text: [
    `This is not chorus; it is clearly doubled clean takes with ${backing.progression[1]} ringing over the root.`,
    `Bar 2 reads like pickup-switch change plus palm angle shift, not a different riff.`,
    `Mic placement rumor: one 57 on axis, one room mic beside a broken arcade machine.`,
    `The answer phrase finally explains why the verse droops before the turnaround.`][i] }))
  if (canon.archetype.id === 'foodcourt') return Array.from({ length: 4 }, (_, i) => ({ user: FORUM_USERS[i + 2], score: `${7 + i}/1${i}`, text: [
    `${title} still feels like missing somebody in the mall parking lot after rain.`,
    `Whoever archived this knew exactly which top strings had to smear together.`,
    `I am not saying this was about one person, but it was definitely about one person.`,
    `Printed this for my trapper keeper because the chorus hurts correctly.`][i] }))
  if (canon.archetype.id === 'youthgroup') return Array.from({ length: 4 }, (_, i) => ({ user: FORUM_USERS[i + 4], score: `${7 + i}/1${i}`, text: [
    `We do not endorse this riffing posture and yet the tab below is unusually complete.`,
    `Please notice the caution box while also observing the bridge voicing on string 2.`,
    `This page condemns obsession in theory and annotates it in practice.`,
    `Testimony update: the dropout bar makes resistance difficult.`][i] }))
  return Array.from({ length: 4 }, (_, i) => ({ user: FORUM_USERS[i + 1], score: `${7 + i}/1${i}`, text: [
    `Archive correction: bar 3 is copied from the second mirror, not the vanished first host.`,
    `The phrase answer looks wrong until you hear the sustain logic that caused it.`,
    `Added 08/14/01: title disputed, emotional posture not disputed.`,
    `Please preserve the marginal note about open strings or this whole page collapses.`][i] }))
}

function buildGuestbook(rand, title, band, archetypeId) {
  const sets = {
    catacomb: ['mirror still alive as of tonight', 'signed because the correction log is basically poetry', 'please keep the provenance notes intact'],
    foodcourt: [`${title} is making my lip gloss sad again`, 'this shrine absolutely knew the orange julius lighting', `i hope ${band.name} never learns what this page did to me`],
    gearhead: ['pick scrape rumor remains unresolved', 'someone post the amp knob positions immediately', 'the dropout bar is where the room mic proves itself'],
    youthgroup: ['respectfully requesting fewer warnings and more bridge tabs', 'this page says avoid temptation and then labels every phrase', 'i came to rebuke this and stayed for the turnaround'],
  }
  return sets[archetypeId].map((text, index) => ({ name: pick(rand, FORUM_USERS), place: pick(rand, ['Salem, OR', 'AOL keyword: guitar', 'inside a Geo Prism', 'Corvallis basement scene', 'food court booth']), text }))
}

function buildRarePull(rand, canon) {
  const roll = rand()
  if (roll < 0.18) return pick(rand, RARE_EVENTS)
  if (canon.archetype.id === 'catacomb' && roll < 0.36) return 'correction added 08/14/01'
  if (canon.archetype.id === 'foodcourt' && roll < 0.36) return 'photo-booth caption attached'
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
  const gear = `<div class="chrome inset gear-block"><div class="section-title">${escapeHtml(archetype.id === 'gearhead' ? 'signal chain dossier' : archetype.id === 'foodcourt' ? 'mall weather' : archetype.id === 'youthgroup' ? 'caution inventory' : 'archive hardware')}</div><ul><li><strong>guitar:</strong> ${escapeHtml(shrine.gear.guitar)}</li><li><strong>amp:</strong> ${escapeHtml(shrine.gear.amp)}</li><li><strong>pedal:</strong> ${escapeHtml(shrine.gear.pedal)}</li><li><strong>room tone:</strong> ${escapeHtml(shrine.gear.room)}</li><li><strong>motif transform:</strong> ${escapeHtml(shrine.motifSummary)}</li></ul></div>`
  const track = `<div class="chrome inset"><div class="section-title">${escapeHtml(archetype.id === 'foodcourt' ? 'memory stack' : archetype.id === 'gearhead' ? 'take sheet' : archetype.id === 'youthgroup' ? 'sanitized order of play' : 'page lore / tracklist')}</div><div class="tracklist">${shrine.tracklist.map((track, index) => `<div><span>${index + 1}.</span><span>${escapeHtml(track)}</span></div>`).join('')}</div><div class="setlist-box">${shrine.sections.map((section) => `<span>${escapeHtml(section)}</span>`).join('')}</div></div>`
  if (archetype.id === 'foodcourt') return `<section class="content-grid top-content-grid"><div class="sidebar-stack">${whyBlock}${guestbook}${gear}</div><div>${commonTab}${comments}</div></section><section class="content-grid lower-grid"><div>${track}</div><div class="chrome inset love-note"><div class="section-title">one-person evidence</div><p>${escapeHtml(shrine.heroLine)}</p><p>${escapeHtml(archetype.voices.hero)}</p></div></section>`
  if (archetype.id === 'gearhead') return `<section class="content-grid top-content-grid"><div>${gear}${commonTab}</div><div class="sidebar-stack">${whyBlock}${comments}${guestbook}</div></section><section class="content-grid lower-grid"><div>${track}</div><div class="chrome inset love-note"><div class="section-title">forensic summary</div><p>${escapeHtml(shrine.heroLine)}</p><p>${escapeHtml(archetype.voices.hero)}</p></div></section>`
  if (archetype.id === 'youthgroup') return `<section class="content-grid top-content-grid"><div class="chrome inset warning-sheet"><div class="section-title">warning tract</div><p>${escapeHtml(shrine.heroLine)}</p><p>${escapeHtml(archetype.voices.hero)}</p></div><div class="sidebar-stack">${whyBlock}${comments}</div></section><section class="content-grid lower-grid"><div>${commonTab}</div><div>${gear}${guestbook}${track}</div></section>`
  return `<section class="content-grid top-content-grid"><div>${whyBlock}${commonTab}</div><div class="sidebar-stack">${comments}${gear}</div></section><section class="content-grid lower-grid"><div>${track}</div><div>${guestbook}<div class="chrome inset love-note"><div class="section-title">archive marginalia</div><p>${escapeHtml(shrine.heroLine)}</p><p>${escapeHtml(archetype.voices.hero)}</p></div></div></section>`
}

function generateShrine(meta) {
  const seed = meta.exactSeed ?? hashString(JSON.stringify(meta)); const rand = mulberry32(seed); const moodKey = classifyMood(meta); const mood = MOODS[moodKey]
  const title = `${pick(rand, TITLE_PREFIXES)} ${pick(rand, TITLE_SUBJECTS)} ${pick(rand, TITLE_SUFFIXES)}`; const bpm = 76 + Math.floor(rand() * 72)
  const canon = buildCanon(rand, meta, moodKey, title); const tuning = pick(rand, TUNINGS); const key = pick(rand, KEYS); const era = pick(rand, ERAS)
  const badges = shuffle(rand, BADGES).slice(0, 4); const stamps = shuffle(rand, STAMPS).slice(0, 3); const tab = makeTabLines(rand, meta, moodKey); const chordHints = shuffle(rand, mood.chordPool).slice(0, 4)
  const sections = ['reading', 'verse', 'chorus', 'turnaround'].map((section, index) => `${section} · ${chordHints[index % chordHints.length]} · ${tab.rhythmMap[index % tab.rhythmMap.length]}`)
  const backing = { tempo: bpm, rootMidi: 40 + Math.floor(rand() * 8), progression: chordHints, bassPattern: [0, 0, 7, 0, 5, 0, 7, 0], drumPattern: mood.drumStyle, shimmer: moodKey === 'shimmery', form: ['intro', 'verse', 'chorus', 'turnaround'], hookShape: tab.motifs.motifA.join('-') }
  const comments = buildForumComments(rand, canon, title, backing, moodKey); const gear = buildGear(rand, moodKey); const guestbook = buildGuestbook(rand, title, canon.band, canon.archetype.id); const rarePull = buildRarePull(rand, canon)
  const heroLine = canon.archetype.id === 'foodcourt'
    ? `Nobody can prove ${title} was about one person, which is why everyone knows it was.`
    : canon.archetype.id === 'gearhead'
      ? `${title} feels less transcribed than reconstructed from room tone, pick angle, and stubborn memory.`
      : canon.archetype.id === 'youthgroup'
        ? `This page condemns the riff with one hand and preserves it with the other.`
        : `${title} survives because enough people copied the feeling, even when they missed the notes.`

  return { version: 7, seed, baseSeed: meta.baseSeed ?? seed, reroll: meta.reroll ?? 0, title, mood: mood.label, bpm, tuning, key, era, vibe: meta.vibe || 'mysterious mall-goth intention', tabs: tab.lines, rhythmMap: tab.rhythmMap, comments, badges, stamps, backdrop: pick(rand, ['radial-gradient(circle at top, rgba(255,0,255,0.22), transparent 30%), repeating-linear-gradient(0deg, #12051f 0 2px, #0b0312 2px 4px)', 'radial-gradient(circle at 20% 20%, rgba(0,255,255,0.16), transparent 25%), linear-gradient(180deg, #190019, #03030a)', 'linear-gradient(180deg, #1f0935, #07040b 60%), repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 8px)', 'radial-gradient(circle at 80% 0%, rgba(255,238,99,0.15), transparent 28%), linear-gradient(180deg, #250026, #080811 66%)']), backing, relicText: `Recovered from ${canon.recordingOrigin} during ${era}. Source offering: ${meta.sourceLabel}.`, waveform: meta.amplitudes, tracklist: buildTracklist(rand, title, canon.band), gear, webring: pick(rand, WEBRINGS), guestbook, chordHints, sections, sourceLabel: meta.sourceLabel, stats: { duration: `${meta.duration.toFixed(3)} sec`, rms: meta.rms.toFixed(6), zeroRate: meta.zeroRate.toFixed(6), peak: meta.peak.toFixed(6), attack: meta.attack.toFixed(6), sustain: meta.sustain.toFixed(6), brightness: meta.brightness.toFixed(6), density: meta.density.toFixed(6) }, counter: String(120000 + (seed % 700000)).padStart(6, '0'), canon, reading: meta.reading, rarePull, heroLine, motifSummary: `motif ${tab.motifs.motifA.join('-')} → answer ${tab.motifs.answer.join('-')} → ${meta.density < 0.46 ? 'dropout bar' : 'return phrase'}` }
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
  <section class="stats-grid"><div class="mini-window"><strong>Tuning</strong><span>${escapeHtml(shrine.tuning)}</span></div><div class="mini-window"><strong>Era recovered</strong><span>${escapeHtml(shrine.era)}</span></div><div class="mini-window"><strong>Band canon</strong><span>${escapeHtml(shrine.canon.band.name)} · ${escapeHtml(shrine.canon.band.hometown)}</span></div><div class="mini-window"><strong>Archive note</strong><span>${escapeHtml(shrine.relicText)}</span></div></section>
  <section class="canon-strip chrome inset"><div class="section-title">CANON SHRINE HISTORY</div><div class="canon-grid"><div><strong>keeper of record</strong><p>${escapeHtml(shrine.canon.shrineKeeper)} — ${escapeHtml(shrine.canon.archetype.tagline)}</p></div><div><strong>members</strong><p>${escapeHtml(shrine.canon.band.members.join(' · '))}</p></div><div><strong>records</strong><p>${escapeHtml(shrine.canon.band.albums.join(' / '))}</p></div><div><strong>motif logic</strong><p>${escapeHtml(shrine.motifSummary)}</p></div></div><div class="history-spine">${shrine.canon.songHistory.map((line) => `<p>${escapeHtml(line)}</p>`).join('')}</div></section>
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
  const now = context.currentTime + 0.05; const beat = 60 / state.generated.bpm; const { rootMidi, bassPattern, drumPattern, shimmer } = state.generated.backing; const intervals = [0, 7, 12, shimmer ? 14 : 10]
  bassPattern.forEach((offset, step) => {
    const sectionGain = step < 2 ? 0.028 : step < 4 ? 0.036 : step < 6 ? 0.048 : 0.03
    const start = now + step * beat
    scheduleNote(context, master, { type: shimmer ? 'triangle' : 'sawtooth', frequency: midiToFreq(rootMidi + offset), start, duration: beat * 0.9, gainValue: shimmer ? sectionGain : sectionGain + 0.01, filterFrequency: shimmer ? 1600 + step * 40 : 1100 + step * 30 })
    intervals.forEach((interval, index) => scheduleNote(context, master, { type: index === 0 ? 'square' : 'triangle', frequency: midiToFreq(rootMidi + interval + (step % 2 === 0 ? 12 : 0)), start, duration: beat * (step === 6 ? 0.45 : 0.75), gainValue: 0.012 + index * 0.004, filterFrequency: shimmer ? 2400 : 1700 }))
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
