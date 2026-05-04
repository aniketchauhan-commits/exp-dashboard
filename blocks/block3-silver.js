/* ═══════════════════════════════════════════════════════
   BLOCK 3 — SILVER MISSION CONTROL
   Reuses #bronze-mission-control container.
   Routes from core.js when badge === 'Silver'.
═══════════════════════════════════════════════════════ */

/* Tier-scoped localStorage key — isolated from Bronze to prevent
   namespace collision on shared task IDs (youtube, twitter, etc.) */
const silverKey = (hash, id) => `exp_silver_${hash}_${id}`;

const SILVER_ASSETS = [
  /* ── CONTENT CREATION PACK ── */
  {
    id: 'posts_12', label: '12–15 Co-Branded Posts This Month', icon: '📸', pack: 'content',
    why: 'Consistency is your biggest trust signal — 12+ posts/month tells the algorithm and your audience you are serious about real estate in your micro-market.',
    watchTitle: '60-sec content calendar guide', watchUrl: '#',
    readSteps: [
      { t: 'Plan your content calendar', d: 'Block 3 posting days per week. Mix property walkthroughs, area insights, and personal brand posts.' },
      { t: 'Use eXp Canva templates', d: 'Access your Canva Enterprise library for co-branded carousels, Reels covers, and story templates.' },
      { t: 'Track your post count', d: 'Use Instagram Insights or a simple tally. Aim for 12–15 unique pieces by month end.' },
    ]
  },
  {
    id: 'face_voice', label: '50%+ Posts — Face or Voice Forward', icon: '🎥', pack: 'content',
    why: 'People buy from people. Face or voice-forward content drives 3× more engagement and builds the personal trust that converts followers into leads.',
    watchTitle: '60-sec Reels filming guide', watchUrl: '#',
    readSteps: [
      { t: 'Aim for 2 Reels per week', d: 'Short-form video (15–60 sec) with your face or voiceover performs best for reach and saves.' },
      { t: 'Record property walkthroughs', d: 'Even a 30-second tour with your voice adds massive credibility to listings.' },
      { t: 'Track your ratio', d: 'At least half your posts should show your face or feature your voice.' },
    ]
  },
  {
    id: 'sm_collab_1', label: '1+ SM Collaboration with eXp Associate', icon: '🤝', pack: 'content',
    why: 'A collaboration post instantly doubles your reach, introduces you to a new audience, and demonstrates your eXp community engagement.',
    watchTitle: '60-sec collab post guide', watchUrl: '#',
    readSteps: [
      { t: 'Choose your collab partner', d: 'Tag an eXp India associate from #support-silver or your territory group.' },
      { t: 'Create a joint post', d: 'A Reel duet, tag-and-share, or joint property recommendation all count.' },
      { t: 'Mark it tracked once live', d: 'Self-mark this task once your collaboration post is published.' },
    ]
  },
  /* ── PLATFORM EXPANSION PACK ── */
  {
    id: 'youtube', label: 'YouTube Channel — eXp Branded', icon: '▶️', pack: 'platform',
    sheetId: 'youtube', brandedCol: 'YouTube Handle eXp Branded',
    why: 'Video builds authority faster than any other format. An eXp-branded YouTube channel positions you as the undisputed expert in your micro-market.',
    watchTitle: '60-sec YouTube channel setup guide', watchUrl: '#',
    readSteps: [
      { t: 'Create or claim your channel', d: 'Name: "Your Name | eXp Realty India". Apply the eXp-branded banner from your Canva pack.' },
      { t: 'Upload a 60-sec intro video', d: 'Record who you are, what city you serve, and what you help clients with.' },
      { t: 'Include your channel URL in your portfolio', d: 'The audit team will review your channel for brand compliance.' },
    ]
  },
  {
    id: 'twitter', label: 'Twitter / X — eXp Branded Handle', icon: '𝕏', pack: 'platform',
    sheetId: 'twitter', brandedCol: 'Twitter Handle (X) eXp Branded',
    why: 'X is where real estate conversations happen in real time. An eXp-branded handle lets you join the narrative and build micro-market thought leadership.',
    watchTitle: '60-sec X (Twitter) branding guide', watchUrl: '#',
    readSteps: [
      { t: 'Update your display name', d: '"Your Name | eXp Realty India"' },
      { t: 'Pin a co-branded intro post', d: 'Announce yourself as an eXp India Associate with your city and specialty.' },
      { t: 'Self-mark once your handle is branded', d: 'The audit team will verify your profile in the portfolio review.' },
    ]
  },
  {
    id: 'instacard', label: 'Insta Card (Bio Link) — Live', icon: '🪪', pack: 'platform',
    sheetId: 'instacard', brandedCol: 'eXp Branded (Insta Card)',
    why: 'Your Insta Card is your all-in-one digital hub — one bio link drives WhatsApp enquiries, listing views, and profile visits simultaneously.',
    watchTitle: '60-sec Insta Card setup guide', watchUrl: '#',
    readSteps: [
      { t: 'Log in to your Insta Card dashboard', d: 'Access via the link provided by your Territory Manager.' },
      { t: 'Add all updated links', d: 'Include WhatsApp, all social handles, listings page, and eXp India website.' },
      { t: 'Self-mark once your Insta Card is live', d: 'The team will review it during your portfolio audit.' },
    ]
  },
  /* ── CRM & COMMUNITY PACK ── */
  {
    id: 'crm_20', label: 'Sell.do — 20+ Contacts with Follow-Up Tags', icon: '📊', pack: 'crm',
    why: 'A tagged CRM is your business engine. 20+ contacts with follow-up stages means you have a pipeline — not just a phonebook.',
    watchTitle: '60-sec CRM contact guide', watchUrl: '#',
    readSteps: [
      { t: 'Import or add all contacts', d: 'Log every lead, past client, referral, and prospect in Sell.do — even cold ones.' },
      { t: 'Tag with follow-up stages', d: 'Use: Hot Lead, Warm Lead, Cold Lead, Past Client, Referral Source.' },
      { t: 'Prepare a screenshot for your portfolio', d: 'Show 20+ contacts with tags visible. Submit the screenshot URL in your portfolio audit.' },
    ]
  },
  {
    id: 'crm_seq', label: 'First Lead Follow-Up Sequence Created', icon: '🔄', pack: 'crm',
    why: 'A follow-up sequence ensures no lead falls through the cracks. One automated sequence can convert a 3-month-old cold lead into a site visit.',
    watchTitle: '60-sec Sell.do sequence guide', watchUrl: '#',
    readSteps: [
      { t: 'Create a new sequence in Sell.do', d: 'Name it "New Lead Nurture — 7 Days". Add 3 touch points: Day 1, Day 3, Day 7.' },
      { t: 'Write your message templates', d: 'Day 1: Introduction. Day 3: Value add. Day 7: Soft CTA (site visit invitation).' },
      { t: 'Self-mark once your sequence is live', d: 'The audit team will verify your CRM setup during portfolio review.' },
    ]
  },
  {
    id: 'hub_groups', label: 'eXp Hub — Joined & Active in 2+ Groups', icon: '💬', pack: 'crm',
    why: 'eXp Hub groups are where your team shares deal intel, training updates, and market insights. Membership opens collaboration and referrals.',
    watchTitle: '60-sec eXp Hub groups guide', watchUrl: '#',
    readSteps: [
      { t: 'Log in to eXp Hub (Workplace)', d: 'Access via your eXp India onboarding email credentials.' },
      { t: 'Join 2+ relevant groups', d: 'Recommended: #support-silver, your city/territory group, and eXp India Announcements.' },
      { t: 'Post in at least one group', d: 'Share a market insight or introduce yourself. Then self-mark this task.' },
    ]
  },
  {
    id: 'training_2', label: '2+ eXp India Training Sessions Attended', icon: '🎓', pack: 'crm',
    why: 'Training is leverage — every session gives you a script, technique, or system that compounds your deal conversion rate.',
    watchTitle: 'eXp India Training calendar', watchUrl: '#',
    readSteps: [
      { t: 'Check the eXp India training calendar', d: 'Sessions are posted in #support-silver and your territory WhatsApp group.' },
      { t: 'Attend and take one note per session', d: 'Apply one takeaway before the next session.' },
      { t: 'Self-mark after your second session', d: 'Keep your attendance confirmation — the audit team may ask for it.' },
    ]
  },
  {
    id: 'workplace_2', label: '2+ Contributions to eXp Workplace Groups', icon: '📣', pack: 'crm',
    why: 'Workplace contributions build your reputation inside the brokerage. Peers who know your name are far more likely to co-broke and refer clients.',
    watchTitle: '60-sec Workplace contribution guide', watchUrl: '#',
    readSteps: [
      { t: 'Find 2 Workplace posts to respond to', d: 'Comment on a market update, training recap, or success story.' },
      { t: 'Post your own update', d: 'Share a lesson learned, a new listing, or a client win — keep it genuine and brief.' },
      { t: 'Self-mark once both contributions are live', d: 'The audit team will scan your Workplace profile during review.' },
    ]
  },
  {
    id: 'sv_leads_10', label: '10 Active Leads — CRM Pipeline with Follow-Up Dates', icon: '📋', pack: 'crm',
    why: '10 active leads with follow-up dates is a real estate pipeline. Without dates, leads die. With dates, you have a business.',
    watchTitle: '60-sec pipeline management guide', watchUrl: '#',
    readSteps: [
      { t: 'Audit your Sell.do pipeline', d: 'Flag every lead with contact in the last 60 days as Active.' },
      { t: 'Set a follow-up date for each lead', d: 'No lead should be without a next-action date. Even "call in 30 days" counts.' },
      { t: 'Prepare a pipeline screenshot', d: 'Show 10+ active leads with dates visible. Submit the screenshot URL in your portfolio.' },
    ]
  },
  {
    id: 'sv_mandate_1', label: 'First Exclusive Mandate Formally Presented', icon: '🏠', pack: 'crm',
    why: 'A formally presented mandate — even if not yet signed — means you have a real commercial relationship. This is where Silver agents separate from the field.',
    watchTitle: '60-sec mandate presentation guide', watchUrl: '#',
    readSteps: [
      { t: 'Prepare your mandate pitch', d: 'Use the eXp India mandate presentation template. Focus on market data.' },
      { t: 'Schedule the seller meeting', d: 'A WhatsApp message counts as booking — confirm the agenda upfront.' },
      { t: 'Self-mark after the meeting', d: 'Note any outcome in your CRM. The audit team will verify this during portfolio review.' },
    ]
  },
];

const SILVER_PACKS = {
  content:  { label: 'Content Creation',   icon: '🎬', desc: 'Consistency and personal brand engine' },
  platform: { label: 'Platform Expansion', icon: '📡', desc: 'New channels and digital footprint' },
  crm:      { label: 'CRM & Community',    icon: '📊', desc: 'Pipeline, platform mastery and network' },
};

/* ── Audit: state is ok (sheet-verified) | tracked (self-marked) | active ── */
function runSilverAudit(a, emailHash) {
  return SILVER_ASSETS.map(asset => {
    const stored    = store.get(silverKey(emailHash, asset.id));
    const isTracked = stored === 'tracked';
    let branded = false, brandedVal = '';
    if (asset.sheetId && SF[asset.sheetId]) {
      brandedVal = (a[SF[asset.sheetId].key] || '').trim();
      branded    = isGood(brandedVal);
    }
    const state = branded ? 'ok' : isTracked ? 'tracked' : 'active';
    return { ...asset, brandedVal, branded, isTracked, state };
  });
}

/* ── Inject the Gold Audit modal into the DOM (once) ── */
function ensureAuditModal() {
  if (document.getElementById('sv-audit-modal')) return;
  const m = document.createElement('dialog');
  m.id = 'sv-audit-modal';
  m.innerHTML = `
    <div class="ev-inner" style="max-width:480px">
      <div class="ev-head">
        <div>
          <div class="ev-title">Gold Portfolio Audit</div>
          <div class="ev-sub">Submit your 30-day body of work for the eXp India team</div>
        </div>
        <button class="ev-close" id="sv-audit-close">✕</button>
      </div>
      <div style="background:#fefce8;border:1px solid #fde68a;border-radius:10px;padding:14px 16px;display:flex;gap:12px;margin-bottom:4px">
        <div style="font-size:20px;flex-shrink:0">🎯</div>
        <div style="font-size:13px;color:#374151;line-height:1.6">
          <strong style="color:#0c0f24;display:block;margin-bottom:4px">Gold is an evaluative milestone.</strong>
          Our team reviews your profile for brand consistency, content quality, and effort over the last 30 days — like a teacher grading your portfolio, not just counting checkboxes. Aim for quality over quantity.
        </div>
      </div>
      <div class="ev-body" style="padding-top:16px">
        <label class="ev-label">Primary Social Profile URL <span style="color:#dc2626">*</span></label>
        <input class="ev-input" id="sv-profile-url" type="url"
          placeholder="https://instagram.com/yourhandle or facebook.com/yourpage…">
        <label class="ev-label" style="margin-top:16px;display:block">CRM Dashboard Screenshot URL</label>
        <input class="ev-input" id="sv-crm-url" type="url"
          placeholder="Paste a Google Drive or Dropbox link to your CRM screenshot…">
        <div class="ev-hint">Our marketing team reviews within 5 business days. You'll be notified on WhatsApp.</div>
      </div>
      <div class="ev-footer">
        <button class="ev-cancel" id="sv-audit-cancel">Cancel</button>
        <button class="ev-submit" id="sv-audit-send">Submit Portfolio for Gold Audit →</button>
      </div>
      <div id="sv-audit-err" style="display:none;color:#dc2626;font-size:12px;padding:8px 0 0;font-weight:600"></div>
    </div>`;
  document.body.appendChild(m);
}

/* ── Determine portfolio submit state with 48h cooldown reset ── */
const PORTFOLIO_KEY = hash => silverKey(hash, 'portfolio_state');

function getSilverSubmitState(emailHash) {
  let state;
  try { state = JSON.parse(store.get(PORTFOLIO_KEY(emailHash)) || 'null'); } catch { state = null; }
  if (!state || state.status !== 'submitted') return 'idle';
  if ((Date.now() - state.timestamp) >= 172800000) {
    store.remove(PORTFOLIO_KEY(emailHash));
    return 'idle';
  }
  return 'under_review';
}

/* ═══════════════════════════════════════════════════════
   SILVER MISSION CONTROL RENDERER
   Wipes and reuses #bronze-mission-control container.
═══════════════════════════════════════════════════════ */
function renderSilverMissionControl(a, emailHash) {
  ensureAuditModal();

  const el = $('bronze-mission-control');
  el.innerHTML = '';

  const audited     = runSilverAudit(a, emailHash);
  const total       = audited.length;
  const okCount     = audited.filter(t => t.state === 'ok').length;
  const trackCount  = audited.filter(t => t.state === 'tracked').length;
  const actCount    = audited.filter(t => t.state === 'active').length;
  const doneCount   = okCount + trackCount;
  const pct         = Math.round((doneCount / total) * 100);
  const submitState = getSilverSubmitState(emailHash);
  const canSubmit   = pct >= 80 && submitState === 'idle';

  const R = 54, CIRC = +(2 * Math.PI * R).toFixed(2);

  const portHeading = submitState === 'under_review'
    ? '✅ Portfolio Submitted for Gold Audit'
    : '🎯 Ready to go for Gold?';
  const portSub = submitState === 'under_review'
    ? "Our team is reviewing your portfolio. You'll be notified on WhatsApp within 48 hours."
    : pct < 80
      ? `You need ${80 - pct}% more progress to unlock submission. Keep self-tracking tasks below.`
      : 'Your portfolio is ready — submit for the Gold Audit now.';
  const portBtnLabel = submitState === 'under_review'
    ? 'Under Review ⏳'
    : canSubmit
      ? 'Submit Portfolio for Gold Audit →'
      : `Submit Portfolio (${pct}% / 80% needed)`;

  el.innerHTML = `
  <div class="bmc-wrap">
    <div class="bmc-header">
      <div class="bmc-title">Silver Mission Control</div>
      <div class="bmc-rule"></div>
      <div class="bmc-tag">🥈 Silver → Gold</div>
    </div>

    <!-- Master Portfolio Submit -->
    <div style="background:#0c0f24;border-radius:12px;padding:20px 24px;margin-bottom:20px;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap">
      <div>
        <div id="sv-portfolio-heading" style="font-size:15px;font-weight:700;color:#fff;margin-bottom:4px">${portHeading}</div>
        <div id="sv-portfolio-sub" style="font-size:12px;color:#9ca3af;line-height:1.5">${portSub}</div>
      </div>
      <button id="btn-sv-portfolio"
        class="btn-bmc-review${!canSubmit || submitState === 'under_review' ? ' btn-sv-locked' : ''}"
        style="white-space:nowrap;flex-shrink:0"
        ${!canSubmit || submitState === 'under_review' ? 'disabled' : ''}>
        ${portBtnLabel}
      </button>
    </div>

    <div class="bmc-grid">
      <!-- Left column: orbit + packs -->
      <div>
        <div class="bmc-orbit-wrap">
          <div class="bmc-orbit-svg-wrap">
            <svg class="bmc-orbit-svg" width="128" height="128" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="orbitGradSilver" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%"   stop-color="#9ca3af"/>
                  <stop offset="50%"  stop-color="#d1d5db"/>
                  <stop offset="100%" stop-color="#f0c040"/>
                </linearGradient>
              </defs>
              <circle class="orbit-track" cx="64" cy="64" r="${R}"/>
              <circle class="orbit-fill orbit-fill-silver" id="orbit-fill-circle"
                cx="64" cy="64" r="${R}"
                stroke="url(#orbitGradSilver)"
                stroke-dasharray="${CIRC}"
                stroke-dashoffset="${CIRC}"/>
            </svg>
            <div class="bmc-orbit-center">
              <span class="bmc-orbit-pct" id="bmc-pct-num">0</span>
              <span class="bmc-orbit-pct-label">tracked</span>
            </div>
          </div>

          <div class="bmc-orbit-info">
            <div class="bmc-orbit-heading">Portfolio Progress</div>
            <div class="bmc-orbit-sub">Self-track tasks as you complete them. Submit your full portfolio when ready for the Gold Audit.</div>
            <div class="bmc-orbit-stat">
              <span class="bmc-stat-pill active">✅ ${okCount} Verified</span>
              <span class="bmc-stat-pill">${trackCount > 0 ? `☑️ ${trackCount} Self-Tracked` : `🎯 ${actCount} Remaining`}</span>
            </div>
            <div class="bmc-strength-bar-wrap">
              <div class="bmc-strength-label">
                <span>Portfolio Completeness</span>
                <span class="bmc-strength-val" id="bmc-strength-val">0%</span>
              </div>
              <div class="bmc-strength-track">
                <div class="bmc-strength-fill" id="bmc-strength-fill"></div>
              </div>
            </div>
          </div>

          <!-- Gold carrot — the next unlock -->
          <div class="bmc-silver-unlock">
            <div class="bmc-silver-unlock-header">
              <div class="bmc-silver-chest-icon">🥇</div>
              <div class="bmc-silver-unlock-label">Gold Rewards — Unlock Next</div>
              <span class="bmc-silver-lock-icon">🔒</span>
            </div>
            <div class="bmc-silver-divider"></div>
            <div class="bmc-silver-rewards-grid">
              <div class="bmc-silver-reward-item">
                <span class="bmc-silver-reward-icon">🌐</span>
                <div class="bmc-silver-reward-name">Personal Microsite</div>
              </div>
              <div class="bmc-silver-reward-item">
                <span class="bmc-silver-reward-icon">🗂️</span>
                <div class="bmc-silver-reward-name">Printed Business Cards</div>
              </div>
              <div class="bmc-silver-reward-item">
                <span class="bmc-silver-reward-icon">🚀</span>
                <div class="bmc-silver-reward-name">BrandBoost Meta Ads</div>
              </div>
              <div class="bmc-silver-reward-item">
                <span class="bmc-silver-reward-icon">📢</span>
                <div class="bmc-silver-reward-name">Associate Spotlight</div>
              </div>
            </div>
            <div class="bmc-silver-unlock-cta">🎯 Complete portfolio to unlock Gold</div>
          </div>
        </div>

        <!-- Mission Packs -->
        <div id="bmc-packs-container"></div>
      </div>

      <!-- Right column: aspirational sidebar (Platinum + Diamond) -->
      <div class="bmc-sidebar">
        <div class="bmc-sidebar-heading">// What's waiting for you</div>

        <div class="bmc-aspire-card platinum-card">
          <div class="bmc-aspire-bg-glyph">💎</div>
          <div class="bmc-aspire-inner">
            <div class="bmc-aspire-eyebrow">Platinum Milestone — The Business Owner</div>
            <div class="bmc-aspire-title">Transaction Independence</div>
            <div class="bmc-aspire-desc">Run independent campaigns, close transactions, host webinars. eXp India consults for you.</div>
            <div class="bmc-aspire-perks">
              <div class="bmc-aspire-perk">⚡ Priority BrandBoost Access</div>
              <div class="bmc-aspire-perk">📞 Telecalling Vendor Access</div>
              <div class="bmc-aspire-perk">🎙️ eXp Zoom Webinar Platform</div>
              <div class="bmc-aspire-perk">🎤 Speaker Access — eXp CONNECT</div>
            </div>
            <div class="bmc-aspire-lock">🔒 Locked — Complete Silver &amp; Gold first</div>
          </div>
        </div>

        <div class="bmc-aspire-card" style="background:linear-gradient(135deg,#080818 0%,#12122a 100%);border:1px solid #2a2a4a">
          <div class="bmc-aspire-bg-glyph">💠</div>
          <div class="bmc-aspire-inner">
            <div class="bmc-aspire-eyebrow">Diamond Milestone — The Legacy Builder</div>
            <div class="bmc-aspire-title">Lead Generation Independence</div>
            <div class="bmc-aspire-desc">Sponsored campaigns, strategic advisory, global events, and Brand Ambassador status.</div>
            <div class="bmc-aspire-perks">
              <div class="bmc-aspire-perk">🧠 Strategic Advisory Access</div>
              <div class="bmc-aspire-perk">✉️ Free Email Campaign per Listing</div>
              <div class="bmc-aspire-perk">📷 Brand Ambassador in AOP Ads</div>
              <div class="bmc-aspire-perk">🌍 Global eXp Opportunities</div>
            </div>
            <div class="bmc-aspire-lock">🔒 Locked — The Ultimate Goal</div>
          </div>
        </div>
      </div>
    </div>
  </div>`;

  /* ── Animate orbit after paint ── */
  setTimeout(() => {
    const circle = document.getElementById('orbit-fill-circle');
    const pctNum = $('bmc-pct-num');
    const sf     = $('bmc-strength-fill');
    const sv     = $('bmc-strength-val');

    if (circle) {
      circle.style.strokeDashoffset = +(CIRC * (1 - pct / 100)).toFixed(2);
    }
    let frame = 0;
    const totalFrames = 60;
    const tick = () => {
      frame++;
      const eased = 1 - Math.pow(1 - frame / totalFrames, 3);
      if (pctNum) pctNum.textContent = Math.round(pct * eased) + '%';
      if (sf)     sf.style.width     = (pct * eased) + '%';
      if (sv)     sv.textContent     = Math.round(pct * eased) + '%';
      if (frame < totalFrames) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, 120);

  /* ── Portfolio submit button ── */
  const portfolioBtn = document.getElementById('btn-sv-portfolio');
  if (portfolioBtn && submitState === 'idle') {
    portfolioBtn.addEventListener('click', () => openAuditModal(a, emailHash));
  }

  /* ── Render Mission Packs ── */
  const packsEl   = document.getElementById('bmc-packs-container');
  const packOrder = ['content', 'platform', 'crm'];

  packOrder.forEach(packKey => {
    const meta    = SILVER_PACKS[packKey];
    const assets  = audited.filter(t => t.pack === packKey);
    const done    = assets.filter(t => t.state === 'ok' || t.state === 'tracked').length;
    const allDone = done === assets.length;

    const packEl = document.createElement('div');
    packEl.className = 'bmc-pack';
    packEl.innerHTML = `
      <div class="bmc-pack-hdr">
        <span class="bmc-pack-icon">${meta.icon}</span>
        <span class="bmc-pack-name">${meta.label}</span>
        <span class="bmc-pack-stat${allDone ? ' all-done' : ''}">${done}/${assets.length}${allDone ? ' ✓ Complete' : ' complete'}</span>
      </div>
      <div class="bmc-cards-grid" id="bmc-grid-${packKey}"></div>`;
    packsEl.appendChild(packEl);

    const gridEl = document.getElementById(`bmc-grid-${packKey}`);
    assets.forEach(task => renderSilverCard(task, gridEl, a, emailHash));
  });

  /* ── Bind Resource buttons ── */
  el.querySelectorAll('.btn-bmc-resource').forEach(btn => {
    btn.addEventListener('click', () => {
      const asset = SILVER_ASSETS.find(t => t.id === btn.dataset.taskid);
      if (asset) openResourceModal(asset);
    });
  });

  /* ── Bind self-track buttons ── */
  bindTrackButtons(el, a, emailHash);
}

/* Render a single Silver task card */
function renderSilverCard(task, gridEl, a, emailHash) {
  const card = document.createElement('div');
  card.className = `bmc-card state-${task.state}`;
  card.dataset.taskId = task.id;
  card.id = `sv-card-${task.id}`;

  const iconState   = task.state === 'ok' ? 'ok' : task.state === 'tracked' ? 'ok' : 'active';
  const statusIcon  = task.state === 'ok' ? '✅' : task.state === 'tracked' ? '☑️' : '🎯';
  const statusLabel = task.state === 'ok' ? 'Verified' : task.state === 'tracked' ? 'Self-Tracked' : 'Active Mission';

  let footerHTML;
  if (task.state === 'ok') {
    footerHTML = `<div class="bmc-card-done-note">✅ Verified by admin — well done!</div>`;
  } else {
    const isTracked = task.state === 'tracked';
    footerHTML = `
      <div class="bmc-card-footer">
        <button class="btn-bmc-resource" data-taskid="${task.id}" data-tasklabel="${task.label}">📖 Resources</button>
        <button class="btn-sv-toggle${isTracked ? ' sv-toggle-done' : ''}"
          data-taskid="${task.id}" data-tracked="${isTracked}">
          ${isTracked ? 'Completed ✓' : 'Mark as Complete'}
        </button>
      </div>`;
  }

  card.innerHTML = `
    <div class="bmc-card-head">
      <div class="bmc-card-icon-wrap ${iconState}">${task.icon}</div>
      <div class="bmc-card-body-text">
        <div class="bmc-card-label">${task.label}</div>
        <span class="bmc-card-status-badge ${iconState}">${statusIcon} ${statusLabel}</span>
      </div>
    </div>
    <div class="bmc-card-why">${task.why}</div>
    ${footerHTML}`;

  gridEl.appendChild(card);
}

/* Bind toggle buttons within a container */
function bindTrackButtons(container, a, emailHash) {
  container.querySelectorAll('.btn-sv-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const taskId    = btn.dataset.taskid;
      const wasTracked = btn.dataset.tracked === 'true';
      if (wasTracked) {
        store.remove(silverKey(emailHash, taskId));
      } else {
        store.set(silverKey(emailHash, taskId), 'tracked');
      }
      refreshSilverCard(taskId, a, emailHash);
      recalcSilverOrbit(a, emailHash);
    });
  });
}

/* Refresh a single card in-place after a track/untrack */
function refreshSilverCard(taskId, a, emailHash) {
  const audited = runSilverAudit(a, emailHash);
  const task    = audited.find(t => t.id === taskId);
  if (!task) return;

  const card = document.getElementById(`sv-card-${taskId}`);
  if (!card) return;

  /* Find the pack grid and re-render this card */
  const gridEl = card.parentElement;
  card.remove();

  const tempDiv = document.createElement('div');
  renderSilverCard(task, tempDiv, a, emailHash);
  gridEl.appendChild(tempDiv.firstElementChild);

  bindTrackButtons(gridEl, a, emailHash);

  /* Update pack stat */
  const packEl  = gridEl.closest('.bmc-pack');
  if (packEl) {
    const allCards  = gridEl.querySelectorAll('.bmc-card');
    const doneCards = gridEl.querySelectorAll('.bmc-card.state-ok, .bmc-card.state-tracked');
    const statEl    = packEl.querySelector('.bmc-pack-stat');
    if (statEl) {
      const d = doneCards.length, t = allCards.length;
      const allDone = d === t;
      statEl.className = 'bmc-pack-stat' + (allDone ? ' all-done' : '');
      statEl.textContent = `${d}/${t}${allDone ? ' ✓ Complete' : ' complete'}`;
    }
  }
}

/* Recalculate orbit ring + completeness bar + portfolio button gate */
function recalcSilverOrbit(a, emailHash) {
  const audited   = runSilverAudit(a, emailHash);
  const total     = audited.length;
  const doneCount = audited.filter(t => t.state === 'ok' || t.state === 'tracked').length;
  const pct       = Math.round((doneCount / total) * 100);

  const R = 54, CIRC = +(2 * Math.PI * R).toFixed(2);
  const circle = document.getElementById('orbit-fill-circle');
  if (circle) circle.style.strokeDashoffset = +(CIRC * (1 - pct / 100)).toFixed(2);

  const pctNum = $('bmc-pct-num');
  if (pctNum) pctNum.textContent = pct + '%';

  const sf = $('bmc-strength-fill');
  const sv = $('bmc-strength-val');
  if (sf) sf.style.width = pct + '%';
  if (sv) sv.textContent = pct + '%';

  /* Update portfolio button gate */
  const btn = document.getElementById('btn-sv-portfolio');
  const submitState = getSilverSubmitState(emailHash);
  if (btn && submitState === 'idle') {
    const canSubmit = pct >= 80;
    btn.disabled = !canSubmit;
    btn.classList.toggle('btn-sv-locked', !canSubmit);
    btn.textContent = canSubmit
      ? 'Submit Portfolio for Gold Audit →'
      : `Submit Portfolio (${pct}% / 80% needed)`;
  }
  const subEl = document.getElementById('sv-portfolio-sub');
  if (subEl && submitState === 'idle') {
    subEl.textContent = pct < 80
      ? `You need ${80 - pct}% more progress to unlock submission. Keep self-tracking tasks below.`
      : 'Your portfolio is ready — submit for the Gold Audit now.';
  }
}

/* ── Gold Audit Modal ── */
function openAuditModal(a, emailHash) {
  const modal = document.getElementById('sv-audit-modal');
  if (!modal) return;

  document.getElementById('sv-profile-url').value = '';
  document.getElementById('sv-crm-url').value     = '';
  document.getElementById('sv-audit-err').style.display = 'none';

  modal.showModal();

  /* On any close: remove + recreate modal for a clean slate next open */
  modal.addEventListener('close', () => {
    modal.remove();
    ensureAuditModal();
  }, { once: true });

  const close = () => modal.close();
  document.getElementById('sv-audit-close').onclick  = close;
  document.getElementById('sv-audit-cancel').onclick = close;
  modal.addEventListener('click', e => { if (e.target === modal) close(); });

  document.getElementById('sv-audit-send').onclick = () => {
    const profileUrl = document.getElementById('sv-profile-url').value.trim();
    const crmUrl     = document.getElementById('sv-crm-url').value.trim();
    const errEl      = document.getElementById('sv-audit-err');

    if (!profileUrl) {
      errEl.textContent = 'Please enter your primary social profile URL to continue.';
      errEl.style.display = 'block';
      return;
    }
    errEl.style.display = 'none';

    /* Build completed tasks list for the reviewer */
    const audited = runSilverAudit(a, emailHash);
    const completedTasksList = audited
      .filter(t => t.state === 'ok' || t.state === 'tracked')
      .map(t => t.label)
      .join(', ');

    postToWebhook({
      timestamp:          new Date().toISOString(),
      associateName:      a['Agent Name'] || '',
      associateId:        a['Agent ID']   || '',
      currentBadge:       'Silver',
      pillar:             'Silver',
      task_id:            'portfolio_audit',
      taskName:           'Gold Portfolio Audit Submission',
      proofUrl:           [profileUrl, crmUrl].filter(Boolean).join(' | '),
      crmScreenshot:      crmUrl,
      completedTasksList,
      notes:              'Gold Portfolio Audit — qualitative review requested',
    });

    store.set(PORTFOLIO_KEY(emailHash), JSON.stringify({ status: 'submitted', timestamp: Date.now() }));

    /* Update dashboard button inline — no full re-render needed */
    const dashBtn = document.getElementById('btn-sv-portfolio');
    if (dashBtn) {
      dashBtn.disabled = true;
      dashBtn.classList.add('btn-sv-locked');
      dashBtn.textContent = 'Under Review ⏳';
    }
    const headEl = document.getElementById('sv-portfolio-heading');
    if (headEl) headEl.textContent = '✅ Portfolio Submitted for Gold Audit';
    const subEl  = document.getElementById('sv-portfolio-sub');
    if (subEl)  subEl.textContent  = "Our team is reviewing your portfolio. You'll be notified on WhatsApp within 48 hours.";

    /* Replace modal body with success screen */
    const evInner = modal.querySelector('.ev-inner');
    evInner.innerHTML = `
      <div style="padding:48px 32px;text-align:center">
        <div style="font-size:52px;margin-bottom:20px;line-height:1">🎉</div>
        <div style="font-family:'Manrope',sans-serif;font-size:20px;font-weight:800;color:var(--navy);letter-spacing:-.02em;margin-bottom:12px">Portfolio Submitted!</div>
        <div style="font-size:14px;color:var(--t2);line-height:1.7;max-width:300px;margin:0 auto 28px">
          Thank you for submitting! Our team will review your portfolio and update your status within <strong>48 hours</strong>.
        </div>
        <button id="sv-success-close" class="ev-submit" style="padding:11px 28px">Close</button>
      </div>`;
    document.getElementById('sv-success-close').onclick = () => modal.close();
  };
}
