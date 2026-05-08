/* ═══════════════════════════════════════════════════════
   BLOCK 2 — BRONZE AUDIT ENGINE
═══════════════════════════════════════════════════════ */

/* Tier-scoped localStorage key — isolated from Silver to prevent
   namespace collision on shared task IDs (youtube, twitter, etc.) */
const bronzeKey = (hash, id) => `exp_bronze_${hash}_${id}`;

/* Asset definition: each Bronze task with its sheet columns,
   pack grouping, and resource content. */
const BRONZE_ASSETS = [
  /* ── PROFESSIONAL IDENTITY PACK ── */
  {
    id:'instacard', label:'Insta Card (Bio Link) — Live', icon:'🪪', pack:'identity',
    linkCol: null, brandedCol:'eXp Branded (Insta Card)',
    why:'Your Insta Card is your all-in-one digital business card — one link in your Instagram bio gives buyers instant access to your WhatsApp, listings, and all profiles.',
    watchTitle:'60-sec Insta Card setup guide',
    watchUrl:'#',
    readSteps:[
      {t:'Create your eXp Insta Card',    d:'Use the eXp India branded template link provided by your Territory Manager.'},
      {t:'Add all your links',             d:'Include: WhatsApp, Facebook, LinkedIn, your listings page, and eXp India website.'},
      {t:'Paste into your Instagram bio',  d:'Copy the generated link and replace your Instagram bio link.'},
    ]
  },
  {
    id:'bizcard', label:'Business Card — eXp Co-Branded', icon:'🗂️', pack:'identity',
    linkCol: null, brandedCol:'eXp Branded (Business Card)',
    why:'A physical eXp co-branded business card is still the fastest trust signal in Indian real estate — it tells clients you\'re professional, affiliated, and invested.',
    watchTitle:'60-sec business card design guide',
    watchUrl:'#',
    readSteps:[
      {t:'Download the Canva template',  d:'Get the official eXp India business card template from the #support-bronze channel.'},
      {t:'Fill in your details',          d:'Add your name, mobile, email, city, RERA number, and your QR code.'},
      {t:'Submit for approval',           d:'Submit your design here for eXp India Marketing sign-off before printing.'},
    ]
  },
  /* ── SOCIAL DOMINATION PACK ── */
  {
    id:'facebook', label:'Facebook Profile — eXp Branded', icon:'📘', pack:'social',
    linkCol:'Facebook Handle', brandedCol:'Facebook Handle eXp Branded',
    why:'Facebook is your highest-reach platform in India. An eXp-branded profile builds instant trust — buyers and sellers will check it before calling you.',
    watchTitle:'60-sec Facebook branding guide',
    watchUrl:'#',
    readSteps:[
      {t:'Update your profile photo',   d:'Use your professional headshot with the eXp circular frame from Canva.'},
      {t:'Update your bio and title',   d:'Format: "Real Estate Associate | eXp Realty India | [City]"'},
      {t:'Pin a co-branded post',       d:'Pin an eXp India introduction post to the top of your profile.'},
    ]
  },
  {
    id:'instagram', label:'Instagram Profile — eXp Branded', icon:'📸', pack:'social',
    linkCol:'Instagram Handle', brandedCol:'Instagram Handle eXp Branded',
    why:'Instagram is where buyers discover agents visually. A clean, eXp-branded profile with a clear bio drives inbound leads without a single cold call.',
    watchTitle:'60-sec Instagram branding guide',
    watchUrl:'#',
    readSteps:[
      {t:'Switch to Professional Account', d:'Settings → Account → Switch to Professional Account → Real Estate.'},
      {t:'Update your bio',                d:'"🏠 Real Estate | eXp Realty India | 📍[City] | 👇 WhatsApp link"'},
      {t:'Add your Insta Card link',       d:'Paste your Insta Card link as the single link in your bio.'},
    ]
  },
  {
    id:'linkedin', label:'LinkedIn Profile — eXp Branded', icon:'💼', pack:'social',
    linkCol:'LinkedIn Handle', brandedCol:'LinkedIn Handle eXp Branded',
    why:'LinkedIn is your B2B credibility anchor. Clients, developers, and investors Google you before meeting you — your LinkedIn is your digital handshake.',
    watchTitle:'60-sec LinkedIn branding guide',
    watchUrl:'#',
    readSteps:[
      {t:'Update your headline',     d:'"Real Estate Associate at eXp Realty India | [Specialty] | [City]"'},
      {t:'Add eXp as your employer', d:'Add eXp Realty India as your current company with your joining date.'},
      {t:'Upload the eXp banner',    d:'Download your branded LinkedIn banner from the SM Setup Checklist PDF.'},
    ]
  },
  {
    id:'youtube', label:'YouTube Channel — eXp Branded', icon:'▶️', pack:'social',
    linkCol:'YouTube Handle', brandedCol:'YouTube Handle eXp Branded',
    why:'Video builds authority faster than any other format. An eXp-branded YouTube channel positions you as the undisputed expert in your micro-market.',
    watchTitle:'60-sec YouTube branding guide',
    watchUrl:'#',
    readSteps:[
      {t:'Create or claim your channel', d:'Use "Your Name | eXp Realty India" as your channel name.'},
      {t:'Upload channel art',           d:'Apply the eXp-branded YouTube banner from your Canva template pack.'},
      {t:'Write your channel About',     d:'Include your city, specialisation, and eXp India affiliation + contact details.'},
    ]
  },
  {
    id:'twitter', label:'Twitter / X — eXp Branded', icon:'𝕏', pack:'social',
    linkCol:'Twitter Handle (X)', brandedCol:'eXp Branded',
    why:'X is where real estate conversations happen in real-time. An eXp-branded handle lets you join the narrative and build micro-market authority as a thought leader.',
    watchTitle:'60-sec X (Twitter) branding guide',
    watchUrl:'#',
    readSteps:[
      {t:'Update your display name',  d:'"Your Name | eXp Realty India"'},
      {t:'Update your bio',           d:'Include city, specialty, and a link to your WhatsApp or Insta Card.'},
      {t:'Pin an intro post',         d:'Pin a co-branded tweet introducing yourself as an eXp Realty India Associate.'},
    ]
  },
  /* ── ECOSYSTEM MASTERY PACK ── */
  {
    id:'whatsapp', label:'WhatsApp Business — Active', icon:'📱', pack:'ecosystem',
    linkCol: null, brandedCol:'WhatsApp Business',
    why:'WhatsApp Business is your primary inbound channel in India. A professional profile means every enquiry message starts with an impression of credibility.',
    watchTitle:'60-sec WhatsApp Business setup guide',
    watchUrl:'#',
    readSteps:[
      {t:'Install WhatsApp Business',    d:'Download from App Store or Play Store on your primary business number.'},
      {t:'Set up your business profile', d:'Name: "Your Name | eXp Realty India". Category: Real Estate. Add photo and city.'},
      {t:'Set your Away Message',        d:'"Hi! I\'m [Name], eXp Realty India for [City]. I\'ll respond shortly — or call directly."'},
    ]
  },
  {
    id:'slack', label:'Slack / eXp Hub — Profile Complete', icon:'💬', pack:'ecosystem',
    linkCol: null, brandedCol:'Slack / eXp Hub',
    why:'eXp Hub is your digital office — where your team collaborates, learns, and supports you. A complete profile makes you visible, credible, and connected inside eXp.',
    watchTitle:'60-sec eXp Hub profile guide',
    watchUrl:'#',
    readSteps:[
      {t:'Upload your profile photo',          d:'Use your professional eXp-branded headshot.'},
      {t:'Complete your bio',                  d:'Add your city, specialisation, and #bronze milestone tag.'},
      {t:'Introduce yourself in #support-bronze', d:'Post: "Hi! I\'m [Name] from [City] — excited to start the Bronze Mission!"'},
    ]
  },
];

/* Pack metadata */
const BRONZE_PACKS = {
  identity:  { label:'Professional Identity',  icon:'🪪', desc:'Your offline and bio-link presence' },
  social:    { label:'Social Domination',       icon:'📣', desc:'Your branded social media footprint' },
  ecosystem: { label:'Ecosystem Mastery',       icon:'⚙️', desc:'Your eXp platform connections' },
};

/* Run the audit: return assets with computed state */
function runBronzeAudit(a, emailHash) {
  return BRONZE_ASSETS.map(asset => {
    const isPend = store.get(bronzeKey(emailHash, asset.id)) === 'pending';
    const brandedVal = (a[asset.brandedCol] || '').trim();
    const branded = isGood(brandedVal);

    /* Link detection: if linkCol defined, check it; else fall back to branded col presence */
    const hasLink = asset.linkCol
      ? !!(a[asset.linkCol] || '').trim()
      : !!brandedVal;

    let state;
    if (isPend)    state = 'review';
    else if (branded) state = 'ok';
    else           state = 'active'; /* active mission: needs branding */

    return { ...asset, brandedVal, hasLink, branded, isPend, state };
  });
}

/* ═══════════════════════════════════════════════════════
   BLOCK 2 — BRONZE MISSION CONTROL RENDERER
═══════════════════════════════════════════════════════ */
function renderBronzeMissionControl(a, emailHash) {
  const el = $('bronze-mission-control');
  el.innerHTML = '';

  const auditedAssets = runBronzeAudit(a, emailHash);
  const totalTasks    = auditedAssets.length;
  const okCount       = auditedAssets.filter(t => t.state === 'ok').length;
  const reviewCount   = auditedAssets.filter(t => t.state === 'review').length;
  const activeCount   = auditedAssets.filter(t => t.state === 'active').length;
  const pct           = Math.round(((okCount + reviewCount) / totalTasks) * 100);
  const brandStrength = Math.round((okCount / totalTasks) * 100);

  /* ── SVG orbit constants ── */
  const R = 54, CIRC = +(2 * Math.PI * R).toFixed(2); /* 339.29 */

  /* ── Section header ── */
  const headerHTML = `
  <div class="bmc-wrap">
    <div class="bmc-header">
      <div class="bmc-title">Bronze Mission Control</div>
      <div class="bmc-rule"></div>
      <div class="bmc-tag">🥉 Bronze → Silver</div>
    </div>

    <!-- Review CTA (hidden until 80%) -->
    <div class="bmc-review-cta" id="bmc-review-cta" style="display:none">
      <div>
        <strong>🎉 80% reached — request your Silver Milestone Badge!</strong>
        <span>Your profile is over 80% optimised. Request a review from the eXp India team now.</span>
      </div>
      <button class="btn-bmc-review" id="btn-bmc-review">Request Silver Review →</button>
    </div>

    <div class="bmc-grid">
      <!-- Left column: orbit + packs -->
      <div>
        <!-- Progress Orbit -->
        <div class="bmc-orbit-wrap">
          <div class="bmc-orbit-svg-wrap">
            <svg class="bmc-orbit-svg" width="128" height="128" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%"   stop-color="#cd7f32"/>
                  <stop offset="50%"  stop-color="#e8a26a"/>
                  <stop offset="100%" stop-color="#f0d080"/>
                </linearGradient>
              </defs>
              <circle class="orbit-track" cx="64" cy="64" r="${R}"/>
              <circle class="orbit-fill" id="orbit-fill-circle"
                cx="64" cy="64" r="${R}"
                stroke-dasharray="${CIRC}"
                stroke-dashoffset="${CIRC}"/>
            </svg>
            <div class="bmc-orbit-center">
              <span class="bmc-orbit-pct" id="bmc-pct-num">0</span>
              <span class="bmc-orbit-pct-label">to Silver</span>
            </div>
          </div>

          <!-- Centre: progress stats -->
          <div class="bmc-orbit-info">
            <div class="bmc-orbit-heading">Mission Progress</div>
            <div class="bmc-orbit-sub">Complete your branding missions to unlock the Silver Milestone Badge.</div>

            <div class="bmc-orbit-stat">
              <span class="bmc-stat-pill active">✅ ${okCount} Optimised</span>
              <span class="bmc-stat-pill">${reviewCount > 0 ? `⏳ ${reviewCount} Under Review` : `🎯 ${activeCount} Active`}</span>
            </div>

            <div class="bmc-strength-bar-wrap">
              <div class="bmc-strength-label">
                <span>Brand Strength</span>
                <span class="bmc-strength-val" id="bmc-strength-val">0%</span>
              </div>
              <div class="bmc-strength-track">
                <div class="bmc-strength-fill" id="bmc-strength-fill"></div>
              </div>
            </div>
          </div>

          <!-- Right: compact Silver loot box -->
          <div class="bmc-silver-unlock">
            <div class="bmc-silver-unlock-header">
              <div class="bmc-silver-chest-icon">🏆</div>
              <div class="bmc-silver-unlock-label">Silver Rewards — Locked</div>
              <span class="bmc-silver-lock-icon">🔒</span>
            </div>
            <div class="bmc-silver-divider"></div>
            <div class="bmc-silver-rewards-grid">
              <div class="bmc-silver-reward-item">
                <span class="bmc-silver-reward-icon">🏢</span>
                <div class="bmc-silver-reward-name">Regus Coworking Access</div>
              </div>
              <div class="bmc-silver-reward-item">
                <span class="bmc-silver-reward-icon">🎨</span>
                <div class="bmc-silver-reward-name">Canva Enterprise Toolkit</div>
              </div>
              <div class="bmc-silver-reward-item">
                <span class="bmc-silver-reward-icon">🎁</span>
                <div class="bmc-silver-reward-name">eXp Welcome Gift Pack</div>
              </div>
              <div class="bmc-silver-reward-item">
                <span class="bmc-silver-reward-icon">📜</span>
                <div class="bmc-silver-reward-name">Silver Certificate</div>
              </div>
            </div>
            <div class="bmc-silver-unlock-cta">🚀 Finish missions to unlock</div>
          </div>
        </div>

        <!-- Mission Packs -->
        <div id="bmc-packs-container"></div>
      </div>

      <!-- Right column: aspirational sidebar -->
      <div class="bmc-sidebar">
        <div class="bmc-sidebar-heading">// What's waiting for you</div>

        <!-- Gold Card -->
        <div class="bmc-aspire-card gold-card">
          <div class="bmc-aspire-bg-glyph">🥇</div>
          <div class="bmc-aspire-inner">
            <div class="bmc-aspire-eyebrow">Gold Milestone — Unlock after Silver</div>
            <div class="bmc-aspire-title">BrandBoost Meta Ads</div>
            <div class="bmc-aspire-desc">Subsidised paid campaigns in your micro-market. eXp India runs ads for you.</div>
            <div class="bmc-aspire-perks">
              <div class="bmc-aspire-perk">🚀 Sponsored Meta campaigns</div>
              <div class="bmc-aspire-perk">🌐 Personal Microsite</div>
              <div class="bmc-aspire-perk">🗂️ Printed Business Cards</div>
              <div class="bmc-aspire-perk">📢 Associate Spotlight Feature</div>
            </div>
            <div class="bmc-aspire-lock">🔒 Locked — Complete Bronze &amp; Silver</div>
          </div>
        </div>

        <!-- Platinum Card -->
        <div class="bmc-aspire-card platinum-card">
          <div class="bmc-aspire-bg-glyph">💎</div>
          <div class="bmc-aspire-inner">
            <div class="bmc-aspire-eyebrow">Platinum Milestone — The Business Owner</div>
            <div class="bmc-aspire-title">Transaction Independence</div>
            <div class="bmc-aspire-desc">Run your own campaigns, close deals, host webinars. eXp India consults for you.</div>
            <div class="bmc-aspire-perks">
              <div class="bmc-aspire-perk">⚡ Priority BrandBoost Access</div>
              <div class="bmc-aspire-perk">📞 Telecalling Vendor Access</div>
              <div class="bmc-aspire-perk">🎙️ eXp Zoom Webinar Platform</div>
              <div class="bmc-aspire-perk">🎤 Speaker Access — eXp CONNECT</div>
            </div>
            <div class="bmc-aspire-lock">🔒 Locked — Complete Bronze, Silver &amp; Gold</div>
          </div>
        </div>
      </div>
    </div>
  </div>`;

  el.innerHTML = headerHTML;

  /* ── Animate orbit after paint ── */
  setTimeout(() => {
    const circle = document.getElementById('orbit-fill-circle');
    const pctNum = $('bmc-pct-num');
    const strengthFill = $('bmc-strength-fill');
    const strengthVal  = $('bmc-strength-val');

    if (circle) {
      const offset = +(CIRC * (1 - pct / 100)).toFixed(2);
      circle.style.strokeDashoffset = offset;
    }

    /* Count-up animation */
    let frame = 0;
    const totalFrames = 60;
    const tick = () => {
      frame++;
      const progress = frame / totalFrames;
      const eased = 1 - Math.pow(1 - progress, 3);
      if (pctNum) pctNum.textContent = Math.round(pct * eased) + '%';
      if (strengthFill) strengthFill.style.width = (brandStrength * eased) + '%';
      if (strengthVal)  strengthVal.textContent  = Math.round(brandStrength * eased) + '%';
      if (frame < totalFrames) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);

    /* Show review CTA if ≥80% */
    const reviewCta = $('bmc-review-cta');
    if (pct >= 80 && reviewCta) {
      reviewCta.style.display = 'flex';
      const btn = $('btn-bmc-review');
      if (btn) btn.onclick = () => {
        const s = encodeURIComponent(`Silver Milestone Review: ${a['Agent Name']} — ${a['Agent ID']}`);
        const b = encodeURIComponent(`Dear eXp India Team,\n\nMy Bronze Mission is over 80% complete. Please review my profile submissions and upgrade me to Silver Milestone Badge status.\n\nAssociate: ${a['Agent Name']}\nID: ${a['Agent ID']}\nCity: ${a['City']}\n\nThank you.`);
        window.open(`mailto:support@expglobalindia.com?subject=${s}&body=${b}`);
      };
    }
  }, 120);

  /* ── Render Mission Packs ── */
  const packsEl = document.getElementById('bmc-packs-container');
  const packOrder = ['identity', 'social', 'ecosystem'];

  packOrder.forEach(packKey => {
    const packMeta   = BRONZE_PACKS[packKey];
    const packAssets = auditedAssets.filter(t => t.pack === packKey);
    const packOk     = packAssets.filter(t => t.state === 'ok').length;
    const allDone    = packOk === packAssets.length;

    const packEl = document.createElement('div');
    packEl.className = 'bmc-pack';

    packEl.innerHTML = `
      <div class="bmc-pack-hdr">
        <span class="bmc-pack-icon">${packMeta.icon}</span>
        <span class="bmc-pack-name">${packMeta.label}</span>
        <span class="bmc-pack-stat${allDone ? ' all-done' : ''}">${packOk}/${packAssets.length}${allDone ? ' ✓ Complete' : ' complete'}</span>
      </div>
      <div class="bmc-cards-grid" id="bmc-grid-${packKey}"></div>`;

    packsEl.appendChild(packEl);

    const gridEl = document.getElementById(`bmc-grid-${packKey}`);
    packAssets.forEach(task => {
      const card = document.createElement('div');
      card.className = `bmc-card state-${task.state}`;
      card.dataset.taskId = task.id;

      const iconState = task.state === 'ok' ? 'ok' : task.state === 'review' ? 'review' : 'active';
      const statusIcon = task.state === 'ok' ? '✅' : task.state === 'review' ? '⏳' : '🎯';
      const statusLabel = task.state === 'ok' ? 'Optimised' : task.state === 'review' ? 'Under Review' : 'Active Mission';

      const footerHTML = task.state === 'ok'
        ? `<div class="bmc-card-done-note">✅ Branding verified — well done!</div>`
        : task.state === 'review'
        ? `<div class="bmc-card-review-note">⏳ Submitted — awaiting Marketing approval</div>`
        : `<div class="bmc-card-footer">
             <button class="btn-bmc-resource"
               data-taskid="${task.id}"
               data-tasklabel="${task.label}">📖 Resources</button>
             <button class="btn-bmc-submit"
               data-taskid="${task.id}"
               data-tasklabel="${task.label}"
               data-name="${a['Agent Name']}"
               data-agentid="${a['Agent ID']}"
               data-pillar="Bronze">Submit →</button>
           </div>`;

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
    });
  });

  /* ── Bind Resource buttons ── */
  el.querySelectorAll('.btn-bmc-resource').forEach(btn => {
    btn.addEventListener('click', () => {
      const taskId = btn.dataset.taskid;
      const asset  = BRONZE_ASSETS.find(t => t.id === taskId);
      if (asset) openResourceModal(asset);
    });
  });

  /* ── Bind Submit buttons — open Evidence Modal ── */
  el.querySelectorAll('.btn-bmc-submit').forEach(btn => {
    btn.addEventListener('click', () => {
      const taskId    = btn.dataset.taskid;
      const taskLabel = btn.dataset.tasklabel;
      const agentName = btn.dataset.name;
      const agentId   = btn.dataset.agentid;
      const card      = btn.closest('.bmc-card');

      const modal = document.getElementById('evidence-modal');
      if (!modal) return;

      /* Pre-fill modal context */
      document.getElementById('ev-task-label').textContent =
        `Task: ${taskLabel} — paste the link to your completed profile or asset below.`;
      document.getElementById('ev-url-input').value = '';

      modal.showModal();

      /* Close handlers */
      const closeModal = () => modal.close();
      document.getElementById('ev-close').onclick    = closeModal;
      document.getElementById('ev-btn-cancel').onclick = closeModal;
      modal.addEventListener('click', e => { if (e.target === modal) closeModal(); }, { once: true });

      /* Send for Verification */
      document.getElementById('ev-btn-send').onclick = () => {
        const proofUrl = Array.from(
          document.getElementById('evidence-modal')
            .querySelectorAll('input[type="url"], input[type="text"]')
        ).map(inp => inp.value.trim()).filter(Boolean).join(' | ');

        postToWebhook({
          timestamp:     new Date().toISOString(),
          associateName: agentName || '',
          associateId:   agentId   || '',
          currentBadge:  'Bronze',
          pillar:        'Bronze',
          task_id:       taskId,
          taskName:      taskLabel || '',
          proofUrl:      proofUrl,
          notes:         `Bronze Mission submission: ${taskLabel}`,
        });

        store.set(bronzeKey(emailHash, taskId), 'pending');

        /* Flip card to Under Review */
        card.className = 'bmc-card state-review';
        card.querySelector('.bmc-card-status-badge').className = 'bmc-card-status-badge review';
        card.querySelector('.bmc-card-status-badge').textContent = '⏳ Under Review';
        card.querySelector('.bmc-card-icon-wrap').className = 'bmc-card-icon-wrap review';
        card.querySelector('.bmc-card-footer').outerHTML =
          `<div class="bmc-card-review-note">⏳ Submitted — awaiting Marketing approval</div>`;

        closeModal();
        recalcBronzeOrbit(a, emailHash);
      };
    });
  });
}

/* Recalculate orbit + brand strength after a submit */
function recalcBronzeOrbit(a, emailHash) {
  const auditedAssets = runBronzeAudit(a, emailHash);
  const totalTasks  = auditedAssets.length;
  const okCount     = auditedAssets.filter(t => t.state === 'ok').length;
  const reviewCount = auditedAssets.filter(t => t.state === 'review').length;
  const pct         = Math.round(((okCount + reviewCount) / totalTasks) * 100);
  const brandStrength = Math.round((okCount / totalTasks) * 100);

  const R = 54, CIRC = +(2 * Math.PI * R).toFixed(2);
  const circle = document.getElementById('orbit-fill-circle');
  if (circle) circle.style.strokeDashoffset = +(CIRC * (1 - pct / 100)).toFixed(2);

  const pctNum = $('bmc-pct-num');
  if (pctNum) pctNum.textContent = pct + '%';

  const sf = $('bmc-strength-fill');
  const sv = $('bmc-strength-val');
  if (sf) sf.style.width = brandStrength + '%';
  if (sv) sv.textContent = brandStrength + '%';

  if (pct >= 80) {
    const cta = $('bmc-review-cta');
    if (cta) cta.style.display = 'flex';
  }
}

/* ═══════════════════════════════════════════════════════
   BLOCK 2 — RESOURCE MODAL
═══════════════════════════════════════════════════════ */
function openResourceModal(asset) {
  const modal = document.getElementById('resource-modal');
  if (!modal) return;

  /* Populate header */
  document.getElementById('rm-title').textContent = asset.label;
  document.getElementById('rm-sub').textContent   = 'Training resources for this mission';

  /* Populate Watch tab */
  document.getElementById('rm-video-title').textContent = asset.watchTitle || '60-second branding guide';
  const videoLink = document.getElementById('rm-video-link');
  if (videoLink) {
    videoLink.href = asset.watchUrl || '#';
    videoLink.textContent = asset.watchUrl && asset.watchUrl !== '#'
      ? 'Watch on YouTube →'
      : 'Watch Tutorial → (link coming soon)';
  }

  /* Populate Read tab */
  const guideEl = document.getElementById('rm-guide-content');
  if (guideEl && asset.readSteps) {
    guideEl.innerHTML = asset.readSteps.map((step, i) => `
      <div class="rm-guide-step">
        <div class="rm-guide-num">${i + 1}</div>
        <div class="rm-guide-step-body">
          <strong>${step.t}</strong>
          <span>${step.d}</span>
        </div>
      </div>`).join('');
  }

  /* Reset to Watch tab */
  switchRmTab('watch');

  /* Tab listeners */
  document.querySelectorAll('.rm-tab').forEach(tab => {
    tab.onclick = () => switchRmTab(tab.dataset.tab);
  });

  document.getElementById('btn-rm-close').onclick = () => modal.close();
  modal.addEventListener('click', e => { if (e.target === modal) modal.close(); }, { once: true });

  modal.showModal();
}

function switchRmTab(tab) {
  document.querySelectorAll('.rm-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
  document.getElementById('rm-body-watch').style.display = tab === 'watch' ? 'block' : 'none';
  document.getElementById('rm-body-read').style.display  = tab === 'read'  ? 'block' : 'none';
}