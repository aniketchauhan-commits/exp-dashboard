/* ═══════════════════════════════════════════════════════
   LOCKED FOUNDATION — DO NOT MODIFY
═══════════════════════════════════════════════════════ */
const API_KEY        = 'AIzaSyCTfKM2D2a932CqtsblRH-HmmauElFwmJ0';
const SPREADSHEET_ID = '1ODK5zyKmRmlG3Y1PME_hZY4wGw5ecyUFG8iyeCqnbAo';
const SHEET_TAB      = 'Agents_Master';
const WEBHOOK_URL    = 'https://hook.eu1.make.com/qvlk1tg4f5364mn39v39xvmquejf7gr9';
const FORM_BASE      = 'https://docs.google.com/forms/d/e/1FAIpQLScexHV5wmMdZx0Wv9chGzCnYLcu0pQnrrZmhFdMqYqnjfSL6Q/viewform?usp=pp_url';
const FORM_NAME      = '&entry.1018868615=';
const FORM_ID        = '&entry.184307567=';
const FORM_PILLAR    = '&entry.1824403378=';
const FORM_TASK      = '&entry.1865917462=';

/* ── SHEET FIELDS ── */
const SF = {
  facebook:  { key:'Facebook Handle eXp Branded',    label:'Facebook',          icon:'📘' },
  instagram: { key:'Instagram Handle eXp Branded',   label:'Instagram',         icon:'📸' },
  twitter:   { key:'eXp Branded', label:'Twitter / X',       icon:'𝕏'  },
  linkedin:  { key:'LinkedIn Handle eXp Branded',    label:'LinkedIn',          icon:'💼' },
  youtube:   { key:'YouTube Handle eXp Branded',     label:'YouTube',           icon:'▶️' },
  whatsapp:  { key:'WhatsApp Business',              label:'WhatsApp Business', icon:'📱' },
  slack:     { key:'Slack / eXp Hub',               label:'Slack / eXp Hub',  icon:'💬' },
  instacard: { key:'eXp Branded (Insta Card)',       label:'Insta Card',        icon:'🪪' },
  bizcard:   { key:'eXp Branded (Business Card)',    label:'Business Card',     icon:'🗂️' },
};

const TIERS = ['Bronze','Silver','Gold','Platinum','Diamond'];
const BADGE_ICON = {Bronze:'🥉',Silver:'🥈',Gold:'🥇',Platinum:'💎',Diamond:'💠'};

/* ── FOUR-PILLAR MISSIONS PER BADGE ─────────────────────
   manual:true  → not in sheet, always shows Submit button
   sheetId      → key into SF{} for auto-check from sheet
────────────────────────────────────────────────────── */
const MISSIONS = {
  Bronze: [
    { pillar:'Digital & Brand', icon:'🎨', tasks:[
      { id:'facebook',  label:'Facebook Profile — eXp Branded',    icon:'📘', sheetId:'facebook' },
      { id:'instagram', label:'Instagram Profile — eXp Branded',   icon:'📸', sheetId:'instagram' },
      { id:'linkedin',  label:'LinkedIn Profile — eXp Branded',    icon:'💼', sheetId:'linkedin' },
      { id:'bizcard',   label:'Business Card — eXp Co-Branded',    icon:'🗂️', sheetId:'bizcard' },
    ]},
    { pillar:'eXp Platform Mastery', icon:'⚙️', tasks:[
      { id:'whatsapp',  label:'WhatsApp Business Profile Active',  icon:'📱', sheetId:'whatsapp' },
      { id:'slack',     label:'Slack / eXp Hub Profile Complete',  icon:'💬', sheetId:'slack' },
      { id:'crm_5',     label:'Sell.do CRM — First 5 Contacts Logged', icon:'📋', manual:true },
    ]},
    { pillar:'Transaction & Business', icon:'🏠', tasks:[
      { id:'bz_leads_3',    label:'3 Buyer / Seller Leads Logged in Sell.do CRM', icon:'🏠', manual:true },
      { id:'bz_mandate_in', label:'First Exclusive Mandate Conversation Initiated', icon:'📝', manual:true },
    ]},
    { pillar:'Community & Leadership', icon:'🤝', tasks:[
      { id:'bz_onboard_1',  label:'1 eXp India Onboarding / Training Session Attended', icon:'🎓', manual:true },
      { id:'bz_workplace',  label:'eXp Workplace Profile Active & Introduction Posted', icon:'📣', manual:true },
    ]},
  ],
  Silver: [
    { pillar:'Digital & Brand', icon:'🎨', tasks:[
      { id:'youtube',   label:'YouTube Channel — eXp Branded',     icon:'▶️', sheetId:'youtube' },
      { id:'twitter',   label:'Twitter / X — eXp Branded Handle',  icon:'𝕏',  sheetId:'twitter' },
      { id:'instacard', label:'Insta Card (Bio Link Tool) — Live', icon:'🪪', sheetId:'instacard' },
      { id:'posts_12',  label:'12–15 Co-Branded Posts This Month', icon:'📸', manual:true },
      { id:'face_voice',label:'50%+ Posts — Face or Voice Forward', icon:'🎥', manual:true },
    ]},
    { pillar:'eXp Platform Mastery', icon:'⚙️', tasks:[
      { id:'crm_20',    label:'Sell.do CRM — 20+ Contacts with Follow-Up Tags', icon:'📊', manual:true },
      { id:'crm_seq',   label:'First Lead Follow-Up Sequence Created', icon:'🔄', manual:true },
      { id:'hub_groups',label:'eXp Hub — Joined & Active in 2+ Groups', icon:'💬', manual:true },
    ]},
    { pillar:'Transaction & Business', icon:'🏠', tasks:[
      { id:'sv_leads_10',  label:'10 Active Leads in CRM Pipeline with Follow-Up Dates', icon:'📊', manual:true },
      { id:'sv_mandate_1', label:'First Exclusive Mandate Formally Presented to a Seller', icon:'🏠', manual:true },
    ]},
    { pillar:'Community & Leadership', icon:'🤝', tasks:[
      { id:'training_2',  label:'2+ eXp India Training Sessions Attended', icon:'🎓', manual:true },
      { id:'workplace_2', label:'2+ Contributions to eXp Workplace Groups', icon:'📣', manual:true },
      { id:'sm_collab_1', label:'1+ SM Collaboration Post with eXp Associate', icon:'🤝', manual:true },
    ]},
  ],
  Gold: [
    { pillar:'Digital & Brand', icon:'🎨', tasks:[
      { id:'brandboost_pkg', label:'BrandBoost Ad Package Submitted', icon:'🚀', manual:true },
      { id:'brandboost_run', label:'First BrandBoost Campaign Live & Running', icon:'📡', manual:true },
      { id:'videos_15',      label:'15+ Videos Created (5 Promo + 10 AOP)',   icon:'🎬', manual:true },
    ]},
    { pillar:'eXp Platform Mastery', icon:'⚙️', tasks:[
      { id:'meta_bm',        label:'Meta Business Manager Account Active', icon:'📱', manual:true },
      { id:'meta_collab',    label:'Meta Partnership Request Accepted from eXp India', icon:'🤝', manual:true },
    ]},
    { pillar:'Transaction & Business', icon:'🏠', tasks:[
      { id:'mandates_5',     label:'5+ Exclusive Mandates Logged in Sell.do CRM', icon:'📝', manual:true },
      { id:'impressions',    label:'10K–1L+ Campaign Impressions in Micro-Market', icon:'📈', manual:true },
    ]},
    { pillar:'Community & Leadership', icon:'🤝', tasks:[
      { id:'rs_convo',       label:'1+ Revenue Share Conversation Documented', icon:'💬', manual:true },
      { id:'eXp_event',      label:'Attended or Spoken at eXp India Event', icon:'🎤', manual:true },
    ]},
  ],
  Platinum: [
    { pillar:'Digital & Brand', icon:'🎨', tasks:[
      { id:'campaigns_2',    label:'2+ Independent Campaigns Run Independently', icon:'🚀', manual:true },
      { id:'channels_4',     label:'4+ New Marketing Channels Activated', icon:'📡', manual:true },
      { id:'pr_feature',     label:'1 Media / PR Feature or Article Published', icon:'📰', manual:true },
    ]},
    { pillar:'eXp Platform Mastery', icon:'⚙️', tasks:[
      { id:'crm_50',         label:'50+ CRM Contacts with Active Deal Stages', icon:'📊', manual:true },
      { id:'webinar_1',      label:'1+ Webinar Hosted via eXp Zoom Platform', icon:'🎙️', manual:true },
    ]},
    { pillar:'Transaction & Business', icon:'🏠', tasks:[
      { id:'transactions_2', label:'2–5 Transactions Closed & Logged in CRM', icon:'🏠', manual:true },
      { id:'freelancer',     label:'Freelancer / Agency Hired for Campaign Execution', icon:'👥', manual:true },
    ]},
    { pillar:'Community & Leadership', icon:'🤝', tasks:[
      { id:'recruits_10',    label:'10+ Potential Recruits Formally Introduced to eXp', icon:'🤝', manual:true },
      { id:'mentor_1',       label:'1 New Associate Mentored Through Bronze', icon:'🎓', manual:true },
    ]},
  ],
  Diamond: [
    { pillar:'Digital & Brand', icon:'🎨', tasks:[
      { id:'email_500',      label:'Email List of 500+ Subscribers (30%+ Open Rate)', icon:'✉️', manual:true },
      { id:'youtube_1k',     label:'YouTube / Podcast Reaching 1K+ Views/Month', icon:'▶️', manual:true },
    ]},
    { pillar:'eXp Platform Mastery', icon:'⚙️', tasks:[
      { id:'crm_pipeline',   label:'Active CRM Pipeline with Full Deal Stages', icon:'📊', manual:true },
      { id:'webinars_2pm',   label:'2+ Webinars Hosted Monthly (Live & Recorded)', icon:'🎙️', manual:true },
    ]},
    { pillar:'Transaction & Business', icon:'🏠', tasks:[
      { id:'deals_5plus',    label:'5+ Transactions Closed This Milestone Period', icon:'🏆', manual:true },
      { id:'rs_recruit',     label:'1+ Revenue Share Recruit Formally Onboarded', icon:'👥', manual:true },
    ]},
    { pillar:'Community & Leadership', icon:'🤝', tasks:[
      { id:'speaker_1',      label:'Presented at 1+ eXp India Online or Offline Event', icon:'🎤', manual:true },
      { id:'knowledge_base', label:'1 Contribution to eXp India Knowledge Base', icon:'📚', manual:true },
    ]},
  ],
};

/* ── KPI COPY ── */
const KPI_DATA = {
  Bronze:   { title:'Bronze → Silver KPIs', list:['4+ social platforms aligned with eXp brand format','CTA buttons active on all profiles (WhatsApp / Email / Call)','Profile visuals consistent with eXp brand guidelines','eXp Hub profile 100% complete','Business Card designed and approved by eXp India'] },
  Silver:   { title:'Silver → Gold KPIs', list:['12+ unique content pieces published in last 30 days','3+ content types used (Reels, Carousels, Stories, etc.)','50%+ of posts include Associate face or voice','Sell.do CRM: 20+ active contacts with follow-up stages','2+ Workplace community contributions made'] },
  Gold:     { title:'Gold → Platinum KPIs', list:['10,000–1,00,000+ impressions in specific micro-market','Minimum 5 exclusive mandates logged in CRM','Meta Business Manager and Ad Account active','15+ videos created (5 personal promo + 10 AOP/mandate)','1+ Revenue Share conversation documented'] },
  Platinum: { title:'Platinum → Diamond KPIs', list:['2+ new marketing channels activated and independently managed','50+ CRM contacts with deal stages active','2–5 transactions closed and logged in CRM','1 media feature, radio/podcast appearance, or article published','1 new eXp India Associate mentored through Bronze milestone'] },
  Diamond:  { title:'Diamond Mastery KPIs', list:['2+ webinars hosted monthly (live and recorded)','Email list of 500+ subscribers with 30%+ open rate','YouTube / podcast: 1,000+ views or listens per month','1+ contribution to eXp India knowledge base','Active in eXp India leadership community'] },
};

/* ── SUPPORT PHILOSOPHY ── */
const SUPPORT_MODEL = {
  Bronze:   { icon:'🏗️', title:'eXp Works For You', desc:'At this stage, eXp India provides all tools, access, training, and hands-on support. Show up, complete modules, activate accounts.', tag:'works-for', tagLabel:'We Work For You' },
  Silver:   { icon:'🏗️', title:'eXp Works For You', desc:'eXp India provides assets, systems, creative support, ad subsidies, and training. Complete tasks, post content, engage platforms.', tag:'works-for', tagLabel:'We Work For You' },
  Gold:     { icon:'🤝', title:'eXp Works Alongside You', desc:'eXp India co-runs campaigns, provides ad support, and reviews results. Submit ad packages, secure mandates, and review metrics together.', tag:'works-with', tagLabel:'We Work Alongside You' },
  Platinum: { icon:'🧠', title:'eXp Consults For You', desc:'eXp India provides strategy advice, vendor introductions, and performance reviews. Run your own campaigns, manage CRM, host webinars, and close deals.', tag:'works-with', tagLabel:'We Consult For You' },
  Diamond:  { icon:'🌍', title:'eXp Partners With You', desc:'At Diamond, eXp India shifts from working for you to working with you — PR access, global opportunities, strategic advisory, and community leadership.', tag:'partners', tagLabel:'We Partner With You' },
};

/* ── CURRENT PERKS ── */
const CURRENT_PERKS = {
  Bronze: [
    {i:'📋',t:'SM Setup Checklist (PDF)',        d:'Guide for branded profile setup on all platforms'},
    {i:'📝',t:'eXp Naming Format Guide',          d:'Official handle naming conventions'},
    {i:'💬',t:'#support-bronze Channel',          d:'Onboarding Manager + weekly group call'},
    {i:'🎯',t:'One-on-One Profile Review',        d:'Available on request from your Territory Manager'},
  ],
  Silver: [
    {i:'🎨',t:'Canva Enterprise Toolkit',         d:'Full eXp logo pack, templates & brand colours'},
    {i:'🏢',t:'Regus Coworking Access',            d:'Professional workspace (as applicable)'},
    {i:'📣',t:'eXp India Social Shoutout',        d:'Badge creative shared across eXp India handles'},
    {i:'🎁',t:'eXp Welcome Gift Pack',            d:'T-shirt, Honour Badge and Sticker set'},
    {i:'💬',t:'#support-silver Channel',          d:'SM Content Manager + monthly group coaching call'},
  ],
  Gold: [
    {i:'🚀',t:'BrandBoost Meta Ads — ACTIVE',    d:'Subsidised sponsored campaigns in your micro-market'},
    {i:'🌐',t:'Personal Microsite',               d:'Your own page linked to the eXp India website'},
    {i:'🗂️',t:'Printed Business Cards',          d:'eXp co-branded cards printed & delivered'},
    {i:'📢',t:'Associate Spotlight Feature',      d:'Featured across eXp India social & newsletter'},
    {i:'💬',t:'#support-gold Channel',            d:'Aniket Chauhan + Agency; monthly review call'},
  ],
  Platinum: [
    {i:'⚡',t:'Priority BrandBoost Access',       d:'First access to additional ad campaign slots'},
    {i:'📞',t:'Telecalling Vendor Access',        d:'eXp Authorised Vendor for transaction support'},
    {i:'🎙️',t:'eXp Zoom Webinar Platform',       d:'Co-hosted webinars to grow your audience'},
    {i:'🎤',t:'Speaker Access — eXp CONNECT',    d:'Invited to speak at eXp India online & offline events'},
    {i:'💬',t:'#support-platinum Channel',       d:'Quarterly strategy review with eXp India leadership'},
  ],
  Diamond: [
    {i:'🧠',t:'Strategic Advisory Access',       d:'Direct relationship with eXp India leadership team'},
    {i:'✉️',t:'Free Email Campaign / Listing',   d:'Dedicated blast for every exclusive listing'},
    {i:'📷',t:'Brand Ambassador Status',         d:'Your face in eXp India AOP Ad Creatives'},
    {i:'🏆',t:'PR & Global Opportunities',       d:'Media, press, and international eXp events'},
    {i:'🌍',t:'Named Diamond Associate',         d:'Highest public recognition across all eXp India channels'},
  ],
};

/* ── DIAMOND HORIZON PERKS (always blurred) ── */
const DIAMOND_PERKS = [
  {i:'🧠',t:'Strategic Advisory with Leadership', d:'Direct access to eXp India leadership team'},
  {i:'✉️',t:'Free Email Campaign Per Listing',    d:'Dedicated blast for every exclusive listing at no cost'},
  {i:'📷',t:'Brand Ambassador in AOP Creatives',  d:'Your face and brand in eXp India project advertising'},
  {i:'🏆',t:'Priority PR & Media Access',         d:'Media features, interviews, and press opportunities'},
  {i:'🌍',t:'Global eXp Opportunities',           d:'International events and worldwide leadership network'},
  {i:'💠',t:'Named Diamond Associate',            d:'Top-tier recognition across all eXp India channels'},
];

/* ── MISSION FOCUS COPY ── */
const MISSION_FOCUS = {
  Bronze:   'Become instantly searchable and professionally branded across all major platforms as an eXp Realty India Associate.',
  Silver:   'Build audience trust through consistent, face-forward content — 12–15 posts/month, 50% face or voice, across Meta, LinkedIn, YouTube Shorts, and WhatsApp Status.',
  Gold:     'Run your first BrandBoost paid campaign, build your exclusive mandate pipeline, and begin generating inbound recognition in your micro-market.',
  Platinum: 'Operate like a business owner — run independent multi-channel campaigns, close transactions, host webinars, and begin your Revenue Share journey.',
  Diamond:  'Build your legacy — mentor associates, contribute to the eXp knowledge base, run media campaigns, and lead the eXp India community.',
};

/* ── CERT ACHIEVEMENT COPY ── */
const CERT_MSG = {
  Silver:   'has successfully completed the Digital Foundation milestone and is recognised as a professionally branded eXp Realty India Associate.',
  Gold:     'has demonstrated consistent content creation and audience engagement, earning recognition as a Personal Brand leader within eXp Realty India.',
  Platinum: 'has launched independent paid campaigns and built an exclusive mandate pipeline, achieving Transaction & Amplification mastery as an eXp Realty India Associate.',
  Diamond:  'has reached the pinnacle of the eXp India Prestige Ladder — operating as a multi-channel, community-building Digital Leader and eXp India Business Owner.',
};

const GOOD_VALS = ['branded yes','activated','updated','yes','active','done','complete','verified','approved'];

/* ── LOCALSTORAGE KEY BUILDER ── */
const lsKey = (emailHash, taskId) => `exp_pending_${emailHash}_${taskId}`;
const hashStr = s => s.split('').reduce((a,c)=>((a<<5)-a+c.charCodeAt(0))|0,0).toString(36);

/* ═══════════════════════════════════════════════════════
   MOCK DATA
═══════════════════════════════════════════════════════ */
const MOCK = [
  { 'Honor Title':'City Business Partner','Agent ID':'EXP-IN-2024-001',
    'Agent Name':'Priya Sharma','eXp Email ID':'priya.sharma@expglobalindia.com',
    'City':'Mumbai','Social Badge':'Silver','Launchpad Completed':'Completed',
    'Professional Headshot':'https://drive.google.com/mock-priya-headshot',
    'Instagram Handle':'@priyasharma_exp','Facebook Handle':'https://facebook.com/priyasharma.exp',
    'Facebook Handle eXp Branded':'Branded Yes','Instagram Handle eXp Branded':'Branded Yes',
    'eXp Branded':'Checked - no record found',
    'LinkedIn Handle eXp Branded':'Branded Yes','YouTube Handle eXp Branded':'Branded No',
    'WhatsApp Business':'Activated','Slack / eXp Hub':'Updated',
    'eXp Branded (Insta Card)':'Branded Yes','eXp Branded (Business Card)':'',
  },
  { 'Honor Title':'Territory Partner','Agent ID':'EXP-IN-2024-042',
    'Agent Name':'Rahul Mehta','eXp Email ID':'rahul.mehta@expglobalindia.com',
    'City':'Delhi','Social Badge':'Gold','Launchpad Completed':'Completed',
    'Professional Headshot':'https://drive.google.com/mock-rahul-headshot',
    'Instagram Handle':'@rahulmehta_exp','Facebook Handle':'https://facebook.com/rahulmehta.exp',
    'Facebook Handle eXp Branded':'Branded Yes','Instagram Handle eXp Branded':'Branded Yes',
    'eXp Branded':'Branded Yes','LinkedIn Handle eXp Branded':'Branded Yes',
    'YouTube Handle eXp Branded':'Branded Yes','WhatsApp Business':'Activated',
    'Slack / eXp Hub':'Updated','eXp Branded (Insta Card)':'Branded Yes',
    'eXp Branded (Business Card)':'Branded Yes',
  },
  { 'Honor Title':'Associate','Agent ID':'EXP-IN-2024-099',
    'Agent Name':'Sneha Patel','eXp Email ID':'sneha.patel@expglobalindia.com',
    'City':'Bangalore','Social Badge':'Bronze','Launchpad Completed':'Completed',
    'Professional Headshot':'https://drive.google.com/mock-sneha-headshot',
    'Instagram Handle':'@snehapatel_exp','Facebook Handle':'https://facebook.com/snehapatel.exp',
    'Facebook Handle eXp Branded':'Branded Yes','Instagram Handle eXp Branded':'Branded No',
    'eXp Branded':'','LinkedIn Handle eXp Branded':'Checked - no record found',
    'YouTube Handle eXp Branded':'','WhatsApp Business':'Activated',
    'Slack / eXp Hub':'needs to be looked at','eXp Branded (Insta Card)':'',
    'eXp Branded (Business Card)':'Branded No',
  },
  { 'Honor Title':'Associate','Agent ID':'EXP-IN-2024-200',
    'Agent Name':'Amit Joshi','eXp Email ID':'amit.joshi@expglobalindia.com',
    'City':'Pune','Social Badge':'Bronze','Launchpad Completed':'Not Completed',
    'Professional Headshot':'','Instagram Handle':'','Facebook Handle':'',
    'Facebook Handle eXp Branded':'','Instagram Handle eXp Branded':'',
    'eXp Branded':'','LinkedIn Handle eXp Branded':'',
    'YouTube Handle eXp Branded':'','WhatsApp Business':'',
    'Slack / eXp Hub':'','eXp Branded (Insta Card)':'','eXp Branded (Business Card)':'',
  },
];

/* ═══════════════════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════════════════ */
const isGood    = v => !!v && GOOD_VALS.some(g=>v.trim().toLowerCase().includes(g));
const nextTier  = b => { const i=TIERS.findIndex(t=>t.toLowerCase()===b.toLowerCase()); return (i<0||i===TIERS.length-1)?null:TIERS[i+1]; };
const tierIdx   = b => TIERS.findIndex(t=>t.toLowerCase()===b.toLowerCase());
const bpClass   = b => 'bp-'+b.toLowerCase();
const aiClass   = b => 'ai-'+b.toLowerCase();
const isPremium = a => {
  const sl=['city business partner','territory partner','country partner','national partner','regional partner'];
  const bl=['gold','platinum','diamond'];
  return sl.some(s=>(a['Honor Title']||'').toLowerCase().includes(s))||bl.includes((a['Social Badge']||'').toLowerCase());
};
const $ = id => document.getElementById(id);

/* ── ELIGIBILITY (Block 1 gate) ────────────────────────────
   PRD §4.1: ALL three conditions must pass for eligibility.
   Launchpad must equal exactly "Completed" (case-insensitive).
   Headshot, Instagram, Facebook must be non-empty strings.
──────────────────────────────────────────────────────────── */
function checkEligibility(a) {
  const str = key => {
    const v = a[key];
    if (v === undefined || v === null) return '';
    return String(v).trim();
  };
  const launchpadOk = str('Launchpad Completed').toLowerCase() === 'completed';
  const headshotOk  = str('Professional Headshot') !== '';
  const instagramOk = str('Instagram Handle') !== '';
  const facebookOk  = str('Facebook Handle') !== '';
  return {
    eligible:    launchpadOk && headshotOk && instagramOk && facebookOk,
    launchpadOk, headshotOk, instagramOk, facebookOk
  };
}

/* ── SAFE STORAGE WRAPPER ──────────────────────────────────
   localStorage is unavailable in data: URLs and some privacy
   modes. All storage access goes through these helpers so the
   app never crashes — it simply behaves as if nothing is stored.
──────────────────────────────────────────────────────────── */
const store = {
  get(key)       { try { return localStorage.getItem(key); }    catch { return null; } },
  set(key, val)  { try { localStorage.setItem(key, val); }      catch {} },
  remove(key)    { try { localStorage.removeItem(key); }        catch {} }
};

/* ── 72-HOUR PENDING UTILITY ───────────────────────────── */
const PENDING_TTL = 259200000; // 72 h in ms
const gateKey = emailHash => `exp_gate_pending_${emailHash}`;
function isGatePending(emailHash) {
  const t = store.get(gateKey(emailHash));
  if (!t) return false;
  if (Date.now() - Number(t) > PENDING_TTL) {
    store.remove(gateKey(emailHash));
    return false;
  }
  return true;
}

/* ── WEBHOOK POST ──────────────────────────────────────────
   URLSearchParams sends as application/x-www-form-urlencoded —
   a CORS-safe content type that Make.com auto-parses into
   discrete named variables. No preflight, no manual headers.
   Response is always opaque (no-cors); callers assume success.
──────────────────────────────────────────────────────────── */
function postToWebhook(payload) {
  const body = new URLSearchParams();
  Object.entries(payload).forEach(([k, v]) => body.append(k, v));
  return fetch(WEBHOOK_URL, { method: 'POST', mode: 'no-cors', body });
}

/* ═══════════════════════════════════════════════════════
   FETCH
═══════════════════════════════════════════════════════ */
async function fetchSheet() {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_TAB}!A:AZ?key=${API_KEY}&t=${Date.now()}`;
  const r = await fetch(url);
  if (!r.ok) throw new Error('HTTP '+r.status);
  const j = await r.json();
  const rows = j.values||[];
  if (rows.length<2) return [];
  const h=rows[0];
  return rows.slice(1).map(row=>{ const o={}; h.forEach((k,i)=>o[k]=row[i]||''); return o; });
}

/* ═══════════════════════════════════════════════════════
   LOGIN
═══════════════════════════════════════════════════════ */
$('btn-login').addEventListener('click',login);
$('inp-email').addEventListener('keydown',e=>e.key==='Enter'&&login());
$('inp-name').addEventListener('keydown', e=>e.key==='Enter'&&login());

let isLoggingIn = false;

async function login() {
  if (isLoggingIn) return;
  const name=($('inp-name').value||'').trim();
  const email=($('inp-email').value||'').trim();
  if (!name||!email) return;

  isLoggingIn = true;
  $('loading').style.display='flex';
  $('login-err').style.display='none';

  let rows=[],mock=false;
  try  { rows=await fetchSheet(); }
  catch{ rows=MOCK; mock=true; }

  const find=arr=>arr.find(r=>
    (r['Agent Name']||'').toLowerCase().trim()===name.toLowerCase().trim()&&
    (r['eXp Email ID']||'').toLowerCase().trim()===email.toLowerCase().trim()
  );
  let agent=find(rows);
  if (!agent&&!mock){ const m=find(MOCK); if(m){agent=m;mock=true;} }

  $('loading').style.display='none';
  isLoggingIn = false;
  if (!agent){ $('login-err').style.display='block'; return; }
  render(agent,mock);
}

/* ═══════════════════════════════════════════════════════
   RENDER
═══════════════════════════════════════════════════════ */
function render(a, mock) {
  $('login-screen').style.display='none';
  $('dashboard').style.display='block';
  window.scrollTo(0,0);
  document.body.classList.toggle('premium-theme',isPremium(a));

  const badge=a['Social Badge']||'Bronze';
  const next=nextTier(badge);
  const curIdx=tierIdx(badge);
  const emailHash=hashStr(a['eXp Email ID']||a['Agent Name']||'demo');

  if (mock) $('demo-notice').style.display='block';

  /* Topbar */
  $('tb-badge').innerHTML=`<span class="bp-sm ${bpClass(badge)}">${BADGE_ICON[badge]} ${badge}</span>`;

  /* ── ELIGIBILITY GATE (Block 1) ── */
  const eligibility = checkEligibility(a);
  console.log('Eligibility:', eligibility);

  $('orientation-mode').style.display = 'none';
  $('main-dashboard').style.display   = 'block';

  /* ── Gate overlay applied HERE, before any render code that could crash.
     Content renders into the blurred container; overlay always shows. ── */
  try {
    if (!eligibility.eligible) {
      $('main-dashboard').classList.add('gate-blurred');
      renderGate(a, eligibility, emailHash);
    } else {
      $('main-dashboard').classList.remove('gate-blurred');
      const prev = document.getElementById('gate-overlay');
      if (prev) prev.remove();
    }
  } catch(e) {
    console.error('Gate render error:', e);
  }

  /* ── IDENTITY CARD ── */
  $('id-name').textContent=a['Agent Name']||'—';
  const mEl=$('id-meta'); mEl.innerHTML='';
  [{v:a['Agent ID'],i:'🪪'},{v:a['City'],i:'📍'}]
    .filter(x=>x.v)
    .forEach(x=>mEl.insertAdjacentHTML('beforeend',`<span class="mpill">${x.i} ${x.v}</span>`));

  /* Avatar initials */
  const initials=(a['Agent Name']||'A').split(' ').map(w=>w[0]).slice(0,2).join('').toUpperCase();
  $('id-avatar').textContent=initials;
  $('id-avatar').style.fontFamily="'Manrope',sans-serif";
  $('id-avatar').style.fontWeight='800';
  $('id-avatar').style.fontSize='22px';
  $('id-avatar').style.color='var(--navy)';

  const ht=a['Honor Title']||'Business Associate';
  $('id-honor').innerHTML=`<div class="id-honor">🏅 ${ht}</div>`;
  $('id-badge-pill').innerHTML=`<span class="bp ${bpClass(badge)}">${BADGE_ICON[badge]} ${badge} Badge</span>`;

  const sm=SUPPORT_MODEL[badge];
  $('id-support-tag').innerHTML='';

  const ctxEl=$('id-context');
  if (badge.toLowerCase()==='bronze'){
    ctxEl.className='id-context';
    ctxEl.textContent='Welcome to eXp India! You are a Bronze Associate. Complete your digital foundation below to unlock Silver Milestone Badge status.';
  } else { ctxEl.className=''; ctxEl.textContent=''; }

  /* ── JOURNEY MAP ── */
  const jmEl=$('journey-map'); jmEl.innerHTML='<div class="jm-label">// YOUR PRESTIGE JOURNEY</div>';
  const track=document.createElement('div'); track.className='jm-track';
  TIERS.forEach((t,i)=>{
    const step=document.createElement('div'); step.className='jm-step';
    let nc='jm-node', lc='jm-label-name';
    if(i<curIdx){nc+=' done';}
    if(i===curIdx){nc+=` current ${t.toLowerCase()}`;lc+=' current-lbl';}
    if(i>curIdx){nc+=' future';lc+=' future-lbl';}
    step.innerHTML=`<div class="${nc}">${BADGE_ICON[t]}</div><div class="${lc}">${t}</div>`;
    track.appendChild(step);
    if(i<TIERS.length-1){
      const c=document.createElement('div');
      c.className='jm-conn'+(i<curIdx?' done-line':'');
      track.appendChild(c);
    }
  });
  jmEl.appendChild(track);

  /* Journey map legend */
  const legend = document.createElement('div');
  legend.className = 'jm-legend';
  legend.innerHTML = `<span class="jm-leg-item works-for">Bronze → Gold &nbsp;·&nbsp; <em>eXp Works For You</em></span><span class="jm-leg-sep">|</span><span class="jm-leg-item works-with">Platinum → Diamond &nbsp;·&nbsp; <em>eXp Works With You</em></span>`;
  jmEl.appendChild(legend);

  /* support-badge element removed from HTML — legend replaces it */

  /* ── CELEBRATION BANNER ── */
  const celEl=$('celebrate');
  if(['silver','gold','platinum','diamond'].includes(badge.toLowerCase())){
    celEl.style.display='flex';
    $('cel-sub').textContent=`You've earned your ${badge} Milestone Badge — share it on LinkedIn and Instagram.`;
    $('btn-open-cert').onclick=()=>openCertificate(a,badge);
  } else { celEl.style.display='none'; }

  /* ── SECTION A: ARSENAL ── */
  const arsenalEl=$('arsenal-card');
  const cp=(CURRENT_PERKS[badge]||[]).map(p=>`
    <div class="pk"><span class="pk-i">${p.i}</span>
    <div class="pk-t"><strong>${p.t}</strong><span>${p.d}</span></div></div>`).join('');
  const vendorHTML = badge.toLowerCase()==='silver' ? `
    <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:12px;padding:20px 24px;margin-top:18px;display:flex;align-items:flex-start;gap:16px">
      <div style="font-size:36px;flex-shrink:0;line-height:1">🤝</div>
      <div style="flex:1;min-width:0">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;flex-wrap:wrap">
          <span style="font-size:11px;font-weight:700;color:#166534;background:#dcfce7;padding:3px 10px;border-radius:20px;letter-spacing:.6px;text-transform:uppercase">● Active Benefit</span>
          <span style="font-size:13px;font-weight:700;color:#0c0f24">Unlocked Resource</span>
        </div>
        <div style="font-size:16px;font-weight:800;color:#0c0f24;margin-bottom:6px">eXp Authorised SM Vendor</div>
        <div style="font-size:13px;color:#374151;line-height:1.65;margin-bottom:14px">eXp India has negotiated exclusive rates with vetted social media freelancers who know our brand guidelines inside-out. Hand off your content calendar, Reels editing, or caption writing — stay consistent without burning out.</div>
        <a href="mailto:support@expglobalindia.com?subject=SM%20Vendor%20Request%20%E2%80%94%20${encodeURIComponent(a['Agent Name']||'')}" style="display:inline-block;text-decoration:none;font-size:13px;font-weight:700;color:#fff;background:#16a34a;padding:9px 20px;border-radius:8px">Connect with Vendor →</a>
      </div>
    </div>` : '';
  arsenalEl.innerHTML=`
    <div class="ars-col">
      <div class="ars-icon ${aiClass(badge)}">${BADGE_ICON[badge]}</div>
      <div class="ars-badge-nm">${badge}</div>
    </div>
    <div class="ars-content">
      <div class="ars-h">Your ${badge} Associate Benefits</div>
      <div class="ars-sub">You've earned these. Make the most of them right now.</div>
      <div class="perks-grid">${cp}</div>
      ${vendorHTML}
    </div>`;

  /* ── SECTION B: HORIZON ── */
  const hzEl=$('horizon-card');
  if(!next){
    hzEl.innerHTML=`<div class="hz-hdr"><div><div class="hz-ey">You have reached the summit</div>
      <div class="hz-title">💠 Diamond Associate</div></div></div>
      <div class="hz-body"><div class="hz-desc">You are an eXp India Diamond Associate — the highest tier. You are recognised as an eXp India Business Owner, community leader, and brand ambassador.</div></div>`;
  } else {
    const dp=DIAMOND_PERKS.map(p=>`<div class="dp"><span class="dp-i">${p.i}</span>
      <div class="dp-t"><strong>${p.t}</strong><span>${p.d}</span></div></div>`).join('');
    hzEl.innerHTML=`
      <div class="hz-hdr">
        <div><div class="hz-ey">The ultimate destination — every mission leads here</div>
        <div class="hz-title">💠 Diamond Associate Status</div></div>
        <div class="hz-lock">🔒 Locked</div>
      </div>
      <div class="hz-body">
        <div class="hz-desc">Diamond is the pinnacle of the eXp India Prestige Ladder. Strategic Advisory with Leadership, Brand Ambassador status, Free Email Campaigns, Global PR Access, and recognition as an eXp India Business Owner — this is what you are building towards.</div>
        <div class="diamond-perks">${dp}</div>
      </div>
      <div class="hz-footer">✨ Complete your missions consistently. Every task moves you closer to Diamond Associate status.</div>`;
  }

  /* ── WELCOME BANNER (Bronze only) ── */
  const wbEl=$('welcome-banner');
  if(badge.toLowerCase()==='bronze'){
    wbEl.style.display='block';
    wbEl.innerHTML=`
      <div class="welcome-banner">
        <div class="wb-eyebrow">🌟 Mission Goal — Bronze → Silver</div>
        <div class="wb-quote">"Become instantly searchable and professionally branded across all major platforms as an eXp Realty India Associate."</div>
        <div class="wb-sub">Welcome to eXp India. Your foundation is everything — complete each task below and you'll be ready for your Silver Milestone Badge review.</div>
      </div>`;
  } else {
    wbEl.style.display='none';
  }

  /* ── SECTION C: MISSION — route by badge ── */
  const isEligibleBronze = badge.toLowerCase() === 'bronze' && eligibility.eligible;
  const isSilver         = badge.toLowerCase() === 'silver';
  document.getElementById('dashboard').classList.toggle('bronze-mode', isEligibleBronze);

  if (isEligibleBronze) {
    $('mission-section').style.display = 'none';
    $('bronze-mission-control').style.display = 'block';
    renderBronzeMissionControl(a, emailHash);
  } else if (isSilver) {
    $('mission-section').style.display = 'none';
    $('bronze-mission-control').style.display = 'block';
    renderSilverMissionControl(a, emailHash);
  } else {
    $('mission-section').style.display = 'block';
    $('bronze-mission-control').style.display = 'none';
  }

  $('mission-title').textContent=next
    ?`Mission: Unlock ${next} Milestone Badge`
    :'Diamond Associate Achievement Record';

  const kpi=KPI_DATA[badge];
  if(kpi){
    $('kpi-banner').style.display='flex';
    $('kpi-title').textContent=kpi.title;
    $('kpi-list').innerHTML=kpi.list.map(k=>`· ${k}`).join('<br>');
  } else { $('kpi-banner').style.display='none'; }

  $('prog-title').textContent=next?`Progress to ${next} Milestone Badge`:'Overall Mastery Score';

  const pillars=MISSIONS[badge]||[];
  const allTasks=pillars.flatMap(p=>p.tasks);

  /* Score */
  let okCount=0, totalCount=allTasks.length||1;
  allTasks.forEach(task=>{
    if(store.get(lsKey(emailHash,task.id))==='pending'){okCount++;return;}
    if(!task.manual&&task.sheetId){const f=SF[task.sheetId];if(f&&isGood(a[f.key]))okCount++;}
  });
  const pct=Math.round((okCount/totalCount)*100);

  setTimeout(()=>{
    $('prog-fill').style.width=pct+'%';
    $('prog-num').textContent=pct;
    $('prog-sub').textContent=`${okCount} of ${allTasks.length} mission tasks complete`;
    $('prog-lbl').textContent=next
      ?(pct>=80?'✅ Ready for milestone review!': `⏳ ${80-pct}% more to unlock review`)
      :'🏆 All missions complete — Diamond Associate!';
  },200);

  /* CTA */
  if(pct>=80&&next){
    $('cta-review').style.display='flex';
    $('btn-review').onclick=()=>{
      const s=encodeURIComponent(`Milestone Review: ${a['Agent Name']} — ${a['Agent ID']}`);
      const b=encodeURIComponent(`Dear Support Team,\n\nMy Prestige Portal mission is over 80% complete. Please review my offline production, CRM contacts, and content consistency to upgrade me to ${next} Milestone Badge status.\n\nAssociate: ${a['Agent Name']}\nID: ${a['Agent ID']}\nCity: ${a['City']}\nCurrent Badge: ${badge}\n\nThank you.`);
      window.open(`mailto:support@expglobalindia.com?subject=${s}&body=${b}`);
    };
  } else { $('cta-review').style.display='none'; }

  /* Mission count tag */
  const rem=allTasks.length-okCount;
  $('mission-tag').textContent=rem>0?`${rem} task${rem>1?'s':''} remaining`:allTasks.length>0?'All tasks complete ✓':'';

  /* ── PILLARS ── */
  const pillarsEl=$('pillars-container'); pillarsEl.innerHTML='';

  if(pillars.length===0){
    pillarsEl.innerHTML=`<div style="padding:24px;background:var(--ok-bg);border:1px solid var(--ok-bdr);border-radius:12px;font-size:13px;color:var(--ok);font-weight:600;text-align:center">
      💠 You are a Diamond Associate — the pinnacle of the eXp India Prestige Ladder. Congratulations!
    </div>`;
  } else {
    pillars.forEach(pillar=>{
      const pOk=pillar.tasks.filter(t=>{
        if(store.get(lsKey(emailHash,t.id))==='pending') return true;
        if(!t.manual&&t.sheetId){const f=SF[t.sheetId];return f&&isGood(a[f.key]);}
        return false;
      }).length;
      const pRem=pillar.tasks.length-pOk;

      const sec=document.createElement('div'); sec.className='pillar-sec';
      sec.innerHTML=`<div class="pillar-hdr">
        <span class="pillar-icon">${pillar.icon}</span>
        <span class="pillar-name">${pillar.pillar}</span>
        <span class="pillar-stat">${pOk}/${pillar.tasks.length} complete${pRem>0?' · '+pRem+' remaining':' ✓'}</span>
      </div>`;

      const grid=document.createElement('div'); grid.className='task-grid';
      pillar.tasks.forEach(task=>{
        const isPend=store.get(lsKey(emailHash,task.id))==='pending';
        let good=false;
        if(!isPend&&!task.manual&&task.sheetId){const f=SF[task.sheetId];if(f)good=isGood(a[f.key]);}
        const state=isPend?'pending':good?'ok':'bad';
        const tagTxt=isPend?'Pending Verification':good?'Optimised':'Needs Update';
        const iconTxt=isPend?'⏳':good?'✅':'❌';
        const sheetVal=task.sheetId&&SF[task.sheetId]?a[SF[task.sheetId].key]||'':'';
        const valTxt=isPend?'Submitted — awaiting admin verification':
          task.manual?'Manual verification required':sheetVal||'No record found';

        const card=document.createElement('div');
        card.className=`sc is-${state}`;
        card.dataset.taskId=task.id;
        card.dataset.emailHash=emailHash;
        card.innerHTML=`
          <div class="sc-icon ${state}">${iconTxt}</div>
          <div class="sc-body">
            <div class="sc-name">${task.icon} ${task.label}</div>
            <span class="sc-tag ${state}">${tagTxt}</span>
            <div class="sc-val${isPend?' pnote':''}">${valTxt}</div>
          </div>
          ${(!good&&!isPend)?`<button class="btn-sub"
              data-taskid="${task.id}"
              data-pillar="${pillar.pillar}"
              data-tasklabel="${task.label}"
              data-name="${a['Agent Name']}"
              data-id="${a['Agent ID']}">Submit Proof →</button>`:''}`;
        grid.appendChild(card);
      });
      sec.appendChild(grid);
      pillarsEl.appendChild(sec);
    });

    /* Bind submit buttons — Google Form pre-fill + localStorage pending */
    pillarsEl.querySelectorAll('.btn-sub').forEach(btn=>{
      btn.addEventListener('click',()=>{
        const nm  = encodeURIComponent(btn.dataset.name||'');
        const id  = encodeURIComponent(btn.dataset.id||'');
        const pil = encodeURIComponent(btn.dataset.pillar||'');
        const tsk = encodeURIComponent(btn.dataset.tasklabel||'');
        const formUrl = `${FORM_BASE}${FORM_NAME}${nm}${FORM_ID}${id}${FORM_PILLAR}${pil}${FORM_TASK}${tsk}`;
        window.open(formUrl,'_blank');

        /* Flip to pending + persist */
        const taskId=btn.dataset.taskid;
        store.set(lsKey(emailHash,taskId),'pending');
        const card=btn.closest('.sc');
        card.classList.remove('is-bad'); card.classList.add('is-pending');
        card.querySelector('.sc-icon').className='sc-icon pending';
        card.querySelector('.sc-icon').textContent='⏳';
        const tag=card.querySelector('.sc-tag');
        tag.className='sc-tag pending'; tag.textContent='Pending Verification';
        const val=card.querySelector('.sc-val');
        val.className='sc-val pnote'; val.textContent='Submitted — awaiting admin verification';
        btn.remove();

        /* Live score recalc */
        const newOk=allTasks.filter(t=>{
          if(store.get(lsKey(emailHash,t.id))==='pending')return true;
          if(!t.manual&&t.sheetId){const f=SF[t.sheetId];return f&&isGood(a[f.key]);}
          return false;
        }).length;
        const newPct=Math.round((newOk/totalCount)*100);
        $('prog-fill').style.width=newPct+'%';
        $('prog-num').textContent=newPct;
        $('prog-sub').textContent=`${newOk} of ${allTasks.length} mission tasks complete`;
        $('prog-lbl').textContent=next
          ?(newPct>=80?'✅ Ready for milestone review!':`⏳ ${80-newPct}% more to unlock review`)
          :'🏆 All missions complete!';
        if(newPct>=80&&next) $('cta-review').style.display='flex';
      });
    });
  }

  /* ── BRANDBOOST ── */
  const bbEl=$('brandboost');
  if(bbEl){
    const bbOn=['gold','platinum','diamond'].includes(badge.toLowerCase());
    if(bbOn){
      bbEl.className='bb active';
      bbEl.innerHTML=`<div class="bb-icon active">🚀</div>
        <div class="bb-body"><div class="bb-title">BrandBoost Meta Ads</div>
        <div class="bb-desc">Your Meta Ads subsidy is active. Submit a complete ad package — vertical video (9:16, RERA tag), 2 high-quality property images, listing caption, CTA and Listing ID — to eXp India to run sponsored campaigns in your micro-market. Accept the Meta Partnership request and grant creative access to eXp India to begin.</div>
        <span class="bb-status active"><span class="bb-dot"></span> Active — ${badge} Milestone Badge Status</span></div>`;
    } else {
      bbEl.className='bb locked';
      bbEl.innerHTML=`<div class="bb-icon locked">🚀</div>
        <div class="bb-body"><div class="bb-title">BrandBoost Meta Ads</div>
        <div class="bb-desc">Subsidised Meta Ads campaigns are available to Gold, Platinum, and Diamond Associates. Complete your current mission to unlock this benefit.</div>
        <span class="bb-status locked"><span class="bb-dot"></span> Locked — Reach Gold Milestone Badge to unlock BrandBoost</span></div>`;
    }
  }

}

/* ═══════════════════════════════════════════════════════
   CERTIFICATE MODAL
═══════════════════════════════════════════════════════ */
function openCertificate(a,badge){
  const ex=document.getElementById('cert-ov-el'); if(ex) ex.remove();
  const date=new Date().toLocaleDateString('en-IN',{year:'numeric',month:'long',day:'numeric'});
  const msg=CERT_MSG[badge]||'has earned recognition within the eXp India Prestige Ladder.';
  const fname=(a['Agent Name']||'').split(' ')[0]||'This Associate';
  const ov=document.createElement('div');
  ov.className='cert-ov'; ov.id='cert-ov-el';
  ov.innerHTML=`
    <div class="cert-modal">
      <button class="cert-x" id="cert-x">✕</button>
      <div class="cert-body" id="cert-printable">
        <div class="cert-rule-t"></div>
        <div class="cert-logo-t">e<em>X</em>p</div>
        <div class="cert-org">Realty India &nbsp;·&nbsp; Prestige Portal</div>
        <div class="cert-presents">This certificate is proudly presented to</div>
        <div class="cert-desc-lbl">eXp Realty India Associate</div>
        <div class="cert-name">${a['Agent Name']||'—'}</div>
        <div class="cert-city">${a['City']||''}</div>
        <div class="cert-ach">${fname} ${msg}</div>
        <div class="cert-bp ${bpClass(badge)}">${BADGE_ICON[badge]} ${badge} Milestone Badge</div>
        <div class="cert-div"></div>
        <div class="cert-meta">
          <div class="cm-col"><div class="cm-lbl">Associate ID</div><div class="cm-val">${a['Agent ID']||'—'}</div></div>
          <div class="cm-col"><div class="cm-lbl">City</div><div class="cm-val">${a['City']||'—'}</div></div>
          <div class="cm-col"><div class="cm-lbl">Milestone Badge</div><div class="cm-val">${badge}</div></div>
          <div class="cm-col"><div class="cm-lbl">Honor Title</div><div class="cm-val">${a['Honor Title']||'—'}</div></div>
          <div class="cm-col"><div class="cm-lbl">Date Issued</div><div class="cm-val">${date}</div></div>
        </div>
        <div class="cert-rule-b"></div>
      </div>
      <div class="cert-actions">
        <button class="btn-print" id="cert-print">🖨️ Print / Save as PDF</button>
        <button class="btn-ccancel" id="cert-cancel">Close</button>
      </div>
    </div>`;
  document.body.appendChild(ov);
  $('cert-print').addEventListener('click',()=>{
    $('print-root').innerHTML=$('cert-printable').outerHTML;
    $('print-root').style.display='block';
    window.print();
    setTimeout(()=>{$('print-root').style.display='none';$('print-root').innerHTML='';},600);
  });
  const close=()=>ov.remove();
  $('cert-x').addEventListener('click',close);
  $('cert-cancel').addEventListener('click',close);
  ov.addEventListener('click',e=>{if(e.target===ov)close();});
}

/* LOGOUT */
$('btn-logout').addEventListener('click', () => {
  try { localStorage.clear(); } catch {}
  window.location.reload();
});