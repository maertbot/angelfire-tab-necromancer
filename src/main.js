import './style.css'
import { catalog, demoPresets } from './catalog.js'

// ─── UTILITY ───────────────────────────────────
function escapeHtml(str = '') {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

// ─── AUDIO ENGINE (for riff search) ────────────
function mulberry32(seed) {
  return function rand() {
    let t = (seed += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function createSyntheticBuffer(opts) {
  const { duration = 3.2, root = 110, overtone = 220, pulseRate = 8, clickStride = 1800, wobbleDepth = 0.7, decay = 1.1, overtoneMix = 0.45, grit = 0.08, noiseSeed = 1 } = opts
  const sampleRate = 22050
  const length = Math.floor(sampleRate * duration)
  const buffer = new AudioBuffer({ length, numberOfChannels: 1, sampleRate })
  const data = buffer.getChannelData(0)
  const noiseRand = mulberry32(noiseSeed)
  for (let i = 0; i < length; i++) {
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

const demoBuildConfigs = {
  cursed: { duration: 3.2, root: 110, overtone: 220, pulseRate: 8, clickStride: 1800, wobbleDepth: 0.7, decay: 1.1, noiseSeed: 1998 },
  dream: { duration: 4.1, root: 164.81, overtone: 329.63, pulseRate: 4, clickStride: 2600, wobbleDepth: 1.6, decay: 0.48, overtoneMix: 0.62, noiseSeed: 2000 },
  garage: { duration: 2.6, root: 98, overtone: 147, pulseRate: 11, clickStride: 1300, wobbleDepth: 0.28, decay: 1.7, overtoneMix: 0.3, grit: 0.2, noiseSeed: 666 },
}

function sampleFeatures(audioBuffer) {
  const data = audioBuffer.getChannelData(0)
  let rmsSum = 0, peak = 0
  for (let i = 0; i < data.length; i++) {
    rmsSum += data[i] * data[i]
    peak = Math.max(peak, Math.abs(data[i]))
  }
  const rms = Math.sqrt(rmsSum / data.length)
  return { rms, peak, duration: audioBuffer.duration }
}

function pickEntryFromAudio(features) {
  if (features.rms > 0.22 || features.peak > 0.72) {
    return catalog.find(e => e.id === 'buttermilk-practice-space-key') || catalog[0]
  }
  if (features.duration > 3.7) {
    return catalog.find(e => e.id === 'gravel-sermons-waffle-house') || catalog[0]
  }
  return catalog.find(e => e.id === 'landlord-duplex-hymn') || catalog[0]
}

// ─── PSEUDO-RANDOM FROM STRING (for per-entry variation) ─
function hashCode(str) {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i)
    hash |= 0
  }
  return Math.abs(hash)
}

// ─── FRAGMENT RENDERERS ────────────────────────

const tabColorSchemes = [
  { text: '#33ff33', bg: 'linear-gradient(180deg, #050510 0%, #0a0a1a 100%)', shadow: 'rgba(51, 255, 51, 0.3)' },
  { text: '#ffff00', bg: 'linear-gradient(180deg, #000028 0%, #000040 100%)', shadow: 'rgba(255, 255, 0, 0.25)' },
  { text: '#00ffff', bg: 'linear-gradient(180deg, #0a0a0a 0%, #0f0f18 100%)', shadow: 'rgba(0, 255, 255, 0.2)' },
  { text: '#ff8844', bg: 'linear-gradient(180deg, #0a0505 0%, #120808 100%)', shadow: 'rgba(255, 136, 68, 0.2)' },
]

function renderTabPage(fragment, entryId) {
  const scheme = tabColorSchemes[hashCode(entryId || '') % tabColorSchemes.length]
  const visitorNum = String(hashCode(fragment.source || '') % 999).padStart(5, '0')

  const content = escapeHtml(fragment.content)
    .replace(/\[DEAD\]/g, '<span class="dead-link">[DEAD]</span>')
    .replace(/\[EMAIL REMOVED\]/g, '<span class="tab-email">[EMAIL REMOVED]</span>')
    .replace(/^-{5,}$/gm, '<span class="tab-hr">────────────────────────────────</span>')

  return `<div class="fragment frag-tab-page" style="color: ${scheme.text}; background: ${scheme.bg}; text-shadow: 0 0 6px ${scheme.shadow};">
    <div class="fragment-source" style="color: ${scheme.text}88;">[RECOVERED: ${escapeHtml(fragment.source)} — last cached ${escapeHtml(fragment.cached)}]</div>
    <div class="tab-content">${content}</div>
    <div class="visitor-counter">⊞ you are visitor ${visitorNum} to this page ⊞</div>
  </div>`
}

function renderGuestbook(fragment) {
  const entries = fragment.entries || []
  return `<div class="fragment frag-guestbook">
    <div class="fragment-source">[RECOVERED: ${escapeHtml(fragment.source)} — cached ${escapeHtml(fragment.cached)}]</div>
    <div class="gb-header">✧ Sign My Guestbook!!! ✧</div>
    <div class="gb-header-hr">·411·✿·.·´¯\`·.·✿·411·✿·.·´¯\`·.·✿·411·</div>
    ${entries.map(e => `<div class="gb-entry">
      <div class="gb-meta">${escapeHtml(e.name)} <span class="gb-date">— ${escapeHtml(e.date)}</span></div>
      <div class="gb-text">${escapeHtml(e.text)}</div>
    </div>`).join('')}
    <div class="gb-footer">guestbook powered by FreeGuestbooks.net™ — © 2001</div>
  </div>`
}

function renderForumThread(fragment) {
  const posts = fragment.posts || []
  const rand = mulberry32(hashCode(fragment.thread || ''))

  return `<div class="fragment frag-forum-thread">
    <div class="fragment-source">[RECOVERED: cached ${escapeHtml(fragment.cached)}]</div>
    <div class="forum-header">${escapeHtml(fragment.source)} &raquo; ${escapeHtml(fragment.board || 'general')} &raquo; ${escapeHtml(fragment.thread)}</div>
    ${posts.map(p => {
      const textClass = p.isAdmin ? 'post-text admin-text' : p.isSystem ? 'post-text system-text' : 'post-text'
      const postCount = Math.floor(rand() * 500) + 3
      const rank = postCount > 200 ? 'Senior Member' : postCount > 50 ? 'Member' : 'Newbie'

      return `<div class="forum-post">
        <div class="post-user-col">
          ${escapeHtml(p.user || 'anonymous')}
          ${!p.isSystem ? `<span class="post-rank">${rank}</span><span class="post-count">Posts: ${postCount}</span>` : ''}
          <span class="post-date">${escapeHtml(p.date)}</span>
        </div>
        <div class="${textClass}">${escapeHtml(p.text)}</div>
      </div>`
    }).join('')}
    <div class="thread-footer">Powered by vBulletin® · All times are GMT-5</div>
  </div>`
}

function renderFlyer(fragment) {
  return `<div class="fragment frag-flyer">
    <div class="fragment-source">[RECOVERED: ${escapeHtml(fragment.source || 'flyer scan')} — cached ${escapeHtml(fragment.cached || 'unknown')}]</div>
    <div class="flyer-inner">
      <div class="flyer-content">${escapeHtml(fragment.content)}</div>
    </div>
  </div>`
}

function renderEmail(fragment) {
  // Try to parse the email content for header fields
  const raw = fragment.content || ''
  const lines = raw.split('\n')
  let headerLines = []
  let bodyLines = []
  let inHeader = true

  for (const line of lines) {
    if (inHeader && /^(From|To|Date|Subject|CC|BCC):/i.test(line.trim())) {
      headerLines.push(line.trim())
    } else if (inHeader && line.trim() === '') {
      inHeader = false
    } else {
      inHeader = false
      bodyLines.push(line)
    }
  }

  const headerHtml = headerLines.length > 0
    ? `<div class="email-header">${headerLines.map(h => {
        const [label, ...rest] = h.split(':')
        return `<div><strong>${escapeHtml(label)}:</strong> ${escapeHtml(rest.join(':').trim())}</div>`
      }).join('')}</div>`
    : ''

  const bodyContent = bodyLines.length > 0 ? bodyLines.join('\n') : raw

  return `<div class="fragment frag-email">
    <div class="fragment-source">[RECOVERED: cached email fragment — ${escapeHtml(fragment.source || 'source unknown')}]</div>
    ${headerHtml}
    <div class="email-body">${escapeHtml(bodyContent)}</div>
  </div>`
}

function renderClassifiedAd(fragment) {
  return `<div class="fragment frag-classified-ad">
    <div class="fragment-source">[RECOVERED: ${escapeHtml(fragment.source)} — cached ${escapeHtml(fragment.cached)}]</div>
    <div class="ad-section-header">Music / Musicians</div>
    <div class="ad-content">${escapeHtml(fragment.content)}</div>
  </div>`
}

function renderDeadLink(fragment) {
  const content = escapeHtml(fragment.content)
  return `<div class="fragment frag-dead-link">
    <div class="fragment-source">[RECOVERED: ${escapeHtml(fragment.source || 'partial chord chart')} — cached ${escapeHtml(fragment.cached || 'unknown')}]</div>
    <div class="dead-content">${content}</div>
  </div>`
}

function renderFragment(fragment, entryId) {
  switch (fragment.type) {
    case 'tab-page': return renderTabPage(fragment, entryId)
    case 'guestbook': return renderGuestbook(fragment)
    case 'forum-thread': return renderForumThread(fragment)
    case 'flyer': return renderFlyer(fragment)
    case 'email': return renderEmail(fragment)
    case 'classified-ad': return renderClassifiedAd(fragment)
    case 'dead-link': return renderDeadLink(fragment)
    default: return `<div class="fragment frag-dead-link"><div class="dead-content">[unrecognized fragment type: ${escapeHtml(fragment.type)}]</div></div>`
  }
}

function renderEntry(entry) {
  return `<div class="portal-content">
    <div class="portal-source-bar">
      <span>LOCAL TAB ARCHIVE — recovered artifacts for: ${escapeHtml(entry.band)} — "${escapeHtml(entry.song)}"</span>
      <span>${entry.fragments.length} fragment${entry.fragments.length !== 1 ? 's' : ''} recovered · scene: ${escapeHtml(entry.sceneLabel)}</span>
    </div>
    ${entry.fragments.map(f => renderFragment(f, entry.id)).join('')}
  </div>`
}

// ─── APP SHELL ─────────────────────────────────

const app = document.querySelector('#app')
app.innerHTML = `
<div class="shell">
  <header class="site-header">
    <h1>Local Tab Archive <span>v0.1</span></h1>
    <p class="tagline">One person's attempt to preserve every guitar tab page that died with its free hosting account. This is what survived.</p>
    <div class="entry-ways">
      <button class="entry-way-btn active" id="browseBtn">Browse the catalog</button>
      <button class="entry-way-btn" id="riffBtn">Hum a riff</button>
    </div>
  </header>

  <section class="catalog-panel" id="catalogPanel">
    <div class="catalog-filters">
      <label>Scene:</label>
      <button class="filter-btn active" data-filter="all">All</button>
      <button class="filter-btn" data-filter="nc">NC</button>
      <button class="filter-btn" data-filter="pnw">PNW</button>
      <span class="entry-count" id="entryCount">${catalog.length} recovered entries</span>
    </div>
    <div class="catalog-list" id="catalogList"></div>
  </section>

  <section class="riff-panel hidden" id="riffPanel">
    <div class="riff-controls">
      <button class="riff-btn" id="micBtn">🎙️ Hum into mic</button>
      <label class="riff-btn" style="cursor:pointer;">📼 Upload riff<input id="fileInput" type="file" accept="audio/*" hidden /></label>
    </div>
    <p class="riff-status" id="riffStatus">Hum a riff or pick a demo preset to search the archive.</p>
    <div class="demo-select-row" id="demoRow">
      ${demoPresets.map(d => `<button class="demo-preset-btn" data-demo="${d.id}">${d.label}<br><small style="opacity:0.6">${escapeHtml(d.note)}</small></button>`).join('')}
    </div>
  </section>

  <section class="portal-wrapper">
    <div class="portal-label">⬡ recovered artifact viewport</div>
    <div class="portal" id="portal">
      <div class="portal-empty">Select an entry from the catalog or hum a riff to begin.</div>
    </div>
  </section>

  <footer class="site-footer">
    <p>Local Tab Archive · A preservation project · ${catalog.length} entries recovered so far · ∞ still missing</p>
  </footer>
</div>
`

// ─── STATE & ELEMENTS ──────────────────────────
let currentEntry = null
let currentFilter = 'all'
let audioContext = null

const el = {
  browseBtn: document.getElementById('browseBtn'),
  riffBtn: document.getElementById('riffBtn'),
  catalogPanel: document.getElementById('catalogPanel'),
  riffPanel: document.getElementById('riffPanel'),
  catalogList: document.getElementById('catalogList'),
  entryCount: document.getElementById('entryCount'),
  portal: document.getElementById('portal'),
  micBtn: document.getElementById('micBtn'),
  fileInput: document.getElementById('fileInput'),
  riffStatus: document.getElementById('riffStatus'),
  demoRow: document.getElementById('demoRow'),
}

// ─── CATALOG RENDERING ─────────────────────────

// Fragment type icons for visual hints
const fragTypeIcons = {
  'tab-page': '⌨',
  'guestbook': '📝',
  'forum-thread': '💬',
  'flyer': '📋',
  'email': '✉',
  'classified-ad': '📰',
  'dead-link': '💀',
}

function renderCatalog() {
  const filtered = currentFilter === 'all'
    ? catalog
    : catalog.filter(e => e.scene === currentFilter)

  el.entryCount.textContent = `${filtered.length} recovered entr${filtered.length === 1 ? 'y' : 'ies'}`

  el.catalogList.innerHTML = filtered.map(entry => {
    const typeHints = [...new Set(entry.fragments.map(f => fragTypeIcons[f.type] || '?'))].join(' ')
    return `
    <button class="catalog-entry ${currentEntry?.id === entry.id ? 'active' : ''}" data-id="${entry.id}">
      <div class="band-song">
        <span class="band-name">${escapeHtml(entry.band)}</span>
        <span class="song-name">"${escapeHtml(entry.song)}"</span>
      </div>
      <span class="scene-tag">${escapeHtml(entry.sceneLabel)}</span>
      <span class="frag-count">${typeHints} ${entry.fragments.length}f</span>
    </button>
  `}).join('')

  el.catalogList.querySelectorAll('[data-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      const entry = catalog.find(e => e.id === btn.dataset.id)
      if (entry) loadEntry(entry)
    })
  })
}

function loadEntry(entry) {
  currentEntry = entry
  el.portal.innerHTML = renderEntry(entry)
  el.portal.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  window.location.hash = entry.id
  renderCatalog()
}

// ─── PANEL SWITCHING ───────────────────────────
function showBrowse() {
  el.catalogPanel.classList.remove('hidden')
  el.riffPanel.classList.add('hidden')
  el.browseBtn.classList.add('active')
  el.riffBtn.classList.remove('active')
}

function showRiff() {
  el.catalogPanel.classList.add('hidden')
  el.riffPanel.classList.remove('hidden')
  el.browseBtn.classList.remove('active')
  el.riffBtn.classList.add('active')
}

// ─── AUDIO / RIFF SEARCH ──────────────────────
async function getAudioContext() {
  if (!audioContext) audioContext = new window.AudioContext()
  if (audioContext.state === 'suspended') await audioContext.resume()
  return audioContext
}

async function analyzeAndLoad(audioBuffer, label) {
  el.riffStatus.textContent = `Analyzing ${label}...`
  const features = sampleFeatures(audioBuffer)
  const entry = pickEntryFromAudio(features)
  el.riffStatus.textContent = `Match found: ${entry.band} — "${entry.song}"`
  loadEntry(entry)
}

async function handleDemoClick(demoId) {
  const preset = demoPresets.find(d => d.id === demoId)
  if (!preset) return

  const entry = catalog.find(e => e.id === preset.entryId)
  if (entry) {
    el.riffStatus.textContent = `Demo matched: ${entry.band} — "${entry.song}"`
    loadEntry(entry)
    return
  }

  const config = demoBuildConfigs[demoId]
  if (config) {
    const buffer = createSyntheticBuffer(config)
    await analyzeAndLoad(buffer, preset.label)
  }
}

async function handleMicCapture() {
  if (!navigator.mediaDevices?.getUserMedia) {
    el.riffStatus.textContent = 'Microphone not available in this browser.'
    return
  }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    const recorder = new MediaRecorder(stream)
    const chunks = []
    recorder.ondataavailable = (e) => { if (e.data.size) chunks.push(e.data) }
    recorder.onstop = async () => {
      stream.getTracks().forEach(t => t.stop())
      try {
        const blob = new Blob(chunks, { type: recorder.mimeType || 'audio/webm' })
        const file = new File([blob], 'mic-riff.webm', { type: blob.type })
        const ctx = await getAudioContext()
        const arrayBuf = await file.arrayBuffer()
        const audioBuffer = await ctx.decodeAudioData(arrayBuf)
        await analyzeAndLoad(audioBuffer, 'microphone input')
      } catch (err) {
        console.error(err)
        el.riffStatus.textContent = 'Failed to decode mic audio. Try a demo preset instead.'
      }
    }
    recorder.start()
    el.riffStatus.textContent = 'Recording... hum your riff (6 seconds)'
    setTimeout(() => { if (recorder.state !== 'inactive') recorder.stop() }, 6000)
  } catch (err) {
    console.error(err)
    el.riffStatus.textContent = 'Mic permission denied.'
  }
}

async function handleFileUpload(e) {
  const file = e.target.files?.[0]
  if (!file) return
  el.riffStatus.textContent = `Decoding ${file.name}...`
  try {
    const ctx = await getAudioContext()
    const arrayBuf = await file.arrayBuffer()
    const audioBuffer = await ctx.decodeAudioData(arrayBuf)
    await analyzeAndLoad(audioBuffer, file.name)
  } catch (err) {
    console.error(err)
    el.riffStatus.textContent = 'Could not decode that file. Try mp3, wav, or m4a.'
  }
}

// ─── EVENT LISTENERS ───────────────────────────
el.browseBtn.addEventListener('click', showBrowse)
el.riffBtn.addEventListener('click', showRiff)

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'))
    btn.classList.add('active')
    currentFilter = btn.dataset.filter
    renderCatalog()
  })
})

el.demoRow.querySelectorAll('[data-demo]').forEach(btn => {
  btn.addEventListener('click', () => handleDemoClick(btn.dataset.demo))
})

el.micBtn.addEventListener('click', handleMicCapture)
el.fileInput.addEventListener('change', handleFileUpload)

// ─── HASH ROUTING ──────────────────────────────
function hydrateFromHash() {
  const hash = window.location.hash.slice(1)
  if (!hash) return false
  const entry = catalog.find(e => e.id === hash)
  if (entry) {
    loadEntry(entry)
    return true
  }
  return false
}

window.addEventListener('hashchange', hydrateFromHash)

// ─── INIT ──────────────────────────────────────
renderCatalog()
hydrateFromHash()
