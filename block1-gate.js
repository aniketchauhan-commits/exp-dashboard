/* ═══════════════════════════════════════════════════════
   BLOCK 1 — GATE RENDERER & MODAL
═══════════════════════════════════════════════════════ */
function renderGate(a, el, emailHash) {
  const pending = isGatePending(emailHash);

  /* Remove any stale overlay from a previous render */
  const prev = document.getElementById('gate-overlay');
  if (prev) prev.remove();

  const items = [
    { ok: el.launchpadOk,                  label: 'Launchpad Course',                      hint: 'Must be marked "Completed" by eXp India' },
    { ok: el.headshotOk,                   label: 'Professional Headshot',                  hint: 'Google Drive link required' },
    { ok: el.instagramOk && el.facebookOk, label: 'Social Handles (Instagram & Facebook)', hint: 'Both handles must be on file' }
  ];

  const rows = items.map(item => `
    <div class="gate-item">
      <div class="gate-item-icon ${item.ok ? 'ok' : 'miss'}">${item.ok ? '✓' : '✗'}</div>
      <div class="gate-item-body">
        <div class="gate-item-label">${item.label}</div>
        <div class="gate-item-status ${item.ok ? 'ok' : 'miss'}">${item.ok ? 'Received' : 'Missing'}</div>
      </div>
    </div>`).join('');

  const ctaBlock = pending
    ? `<div class="gate-review-notice">
         ⏳ <div><strong>Submission under review</strong> — our team will verify your deliverables within 72 hours. Refresh after approval to access your dashboard.</div>
       </div>`
    : `<button class="btn-gate-submit" id="btn-gate-open-modal">Submit Missing Deliverables →</button>`;

  const ov = document.createElement('div');
  ov.id        = 'gate-overlay';
  ov.className = 'gate-overlay';
  ov.innerHTML = `
    <div class="gate-bg-lock">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="11" width="18" height="11" rx="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    </div>
    <div class="gate-overlay-card">
      <div class="gate-ov-icon">🔒</div>
      <div class="gate-ov-heading">Orientation Mode — Dashboard Locked</div>
      <div class="gate-ov-sub">Complete the requirements below to unlock your full Prestige Portal and begin your Bronze Mission.</div>
      <div class="gate-status-list">${rows}</div>
      ${ctaBlock}
    </div>`;

  document.body.appendChild(ov);

  if (!pending) {
    document.getElementById('btn-gate-open-modal')
      .addEventListener('click', () => openGateModal(a, el, emailHash));
  }
}

function openGateModal(a, el, emailHash) {
  const modal = $('gate-modal');

  /* Build only the fields that are missing */
  let fields = '';
  if (!el.headshotOk) {
    fields += `
      <div class="gm-field">
        <label>Professional Headshot — Google Drive Link *</label>
        <input type="url" id="gm-headshot" placeholder="https://drive.google.com/…" />
      </div>`;
  }
  if (!el.instagramOk) {
    fields += `
      <div class="gm-field">
        <label>Instagram Handle *</label>
        <input type="text" id="gm-instagram" placeholder="@yourhandle" />
      </div>`;
  }
  if (!el.facebookOk) {
    fields += `
      <div class="gm-field">
        <label>Facebook Profile URL *</label>
        <input type="url" id="gm-facebook" placeholder="https://facebook.com/…" />
      </div>`;
  }
  if (!el.launchpadOk) {
    fields += `
      <div class="gm-field">
        <label>Launchpad Completion Proof (screenshot / certificate link) *</label>
        <input type="url" id="gm-launchpad" placeholder="https://drive.google.com/…" />
      </div>`;
  }
  fields += `
    <div class="gm-field">
      <label>Notes (optional)</label>
      <textarea id="gm-notes" rows="2" placeholder="Any additional context for the reviewer…"></textarea>
    </div>`;

  $('gm-body').innerHTML = fields;
  $('gm-err').style.display = 'none';
  modal.showModal();

  $('btn-gm-cancel').onclick = () => closeGateModal();
  $('btn-gm-submit').onclick = () => submitGateModal(a, el, emailHash);
}

function closeGateModal() {
  const modal = $('gate-modal');
  modal.close();
  const body = $('gm-body'); if (body) body.innerHTML = '';
  const err  = $('gm-err');  if (err)  err.style.display = 'none';
}

function submitGateModal(a, el, emailHash) {
  const get = id => { const node = $(id); return node ? node.value.trim() : null; };

  const headshot  = get('gm-headshot');
  const instagram = get('gm-instagram');
  const facebook  = get('gm-facebook');
  const launchpad = get('gm-launchpad');
  const notes     = get('gm-notes') || '';

  const hasProof = [headshot, instagram, facebook, launchpad].some(v => v !== null && v !== '');
  if (!hasProof) {
    $('gm-err').textContent = 'Please fill in at least one field before submitting.';
    $('gm-err').style.display = 'block';
    return;
  }

  const btn = $('btn-gm-submit');
  btn.disabled = true;
  btn.textContent = 'Submitting…';

  const payload = {
    timestamp:     new Date().toISOString(),
    associateName: a['Agent Name']   || '',
    associateId:   a['Agent ID']     || '',
    currentBadge:  a['Social Badge'] || 'Entry',
    pillar:        'Eligibility Gate',
    taskName:      'Block 1 — Onboarding Deliverables',
    proofUrl:      [headshot, instagram, facebook, launchpad].filter(Boolean).join(' | '),
    notes: [
      headshot  ? `Headshot: ${headshot}`   : '',
      instagram ? `Instagram: ${instagram}` : '',
      facebook  ? `Facebook: ${facebook}`   : '',
      launchpad ? `Launchpad: ${launchpad}` : '',
      notes     ? `Notes: ${notes}`         : ''
    ].filter(Boolean).join(' | ')
  };

  /* Fire-and-forget — no-cors response is always opaque, assume success */
  postToWebhook(payload);

  /* Persist 72-h pending state immediately */
  store.set(gateKey(emailHash), String(Date.now()));

  /* Replace modal contents with full-screen success message */
  $('gate-modal').querySelector('.gm-inner').innerHTML = `
    <div style="text-align:center;padding:32px 16px 24px">
      <div style="width:72px;height:72px;background:var(--ok-bg);border:2px solid var(--ok-bdr);
        border-radius:50%;display:flex;align-items:center;justify-content:center;
        font-size:36px;margin:0 auto 20px">✅</div>
      <div style="font-family:'Manrope',sans-serif;font-weight:800;font-size:22px;
        color:var(--navy);letter-spacing:-.02em;margin-bottom:12px">Submission Received!</div>
      <div style="font-size:14px;color:var(--t2);line-height:1.7;max-width:320px;margin:0 auto">
        Our team will review this within 72 hours. Reach out to marketing if you have any questions.
      </div>
    </div>`;

  setTimeout(() => {
    closeGateModal();
    renderGate(a, el, emailHash);
  }, 2500);
}