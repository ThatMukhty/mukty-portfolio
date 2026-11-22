const TOP_SYSTEMS = [
  {
    id: 'chopline',
    number: '01',
    sector: 'COMMERCE',
    tag: 'LIVE WEB APP + N8N DISPATCH',
    title: 'ChopLine Kitchen',
    subtitle: 'Restaurant Ordering, Live Portion Caps & Rider Split Checkout',
    liveUrl: 'https://chopline-kitchen.vercel.app/',
    leakStopped:
      'Stops kitchens from selling food portions that have already finished and eliminates messy WhatsApp back-and-forth over landmarks and rider fees.',
    automationNote:
      'We built an n8n workflow that captures incoming order tickets, logs food vs. delivery fee splits, flags cash-on-delivery rider fees, and pushes formatted dispatch alerts to WhatsApp.',
    steps: [
      {
        node: 'TRIGGER // MENU & PORTION LOCK',
        title: 'Live Portion Availability Check',
        detail:
          'Customer selects available dishes with live portion counts that automatically lock when sold out.',
        payload: `{
  "event": "portion.reserved",
  "item": "Smoky Jollof + Peppered Turkey",
  "portions_remaining": 3,
  "status": "AVAILABLE_LOCKED"
}`
      },
      {
        node: 'CALC // ZONE & RIDER FEE SPLIT',
        title: 'Delivery Zone & Payment Split Engine',
        detail:
          'Checkout calculates delivery zone rates and lets buyers pay rider fees upfront or on arrival.',
        payload: `{
  "zone": "Ikorodu -> Gbagada Express",
  "food_subtotal_ngn": 6500,
  "rider_fee_ngn": 2000,
  "rider_payment_mode": "PAY_ON_ARRIVAL"
}`
      },
      {
        node: 'TICKET // STRUCTURED ORDER ID',
        title: 'Instant #CK Ticket Generation',
        detail:
          'Order generates a structured #CK ticket with one-tap copy and pre-filled WhatsApp handoff.',
        payload: `{
  "ticket_id": "#CK-4092",
  "customer": "Tunde A.",
  "landmark": "Opposite Gbagada General Hospital Gate",
  "handoff": "WHATSAPP_READY"
}`
      },
      {
        node: 'N8N // DISPATCH & LOGGING',
        title: 'Kitchen & Rider WhatsApp Alert',
        detail:
          'n8n workflow logs ticket data and alerts the kitchen/dispatch channel with clean address and payment breakdown.',
        payload: `{
  "n8n_node": "WhatsApp_Kitchen_Alert",
  "sheet_logged": true,
  "message_preview": "NEW ORDER #CK-4092 | Food: N6,500 (Paid) | Rider: N2,000 (Collect at Gate)"
}`
      }
    ]
  },
  {
    id: 'vulture-silk',
    number: '02',
    sector: 'COMMERCE',
    tag: 'LIVE WEB APP + N8N STOCK & RIDER FLOW',
    title: 'Vulture & Silk',
    subtitle: 'Boutique Drop Stock Lock & Rider Manifest System',
    liveUrl: 'https://vulture-silk-1.vercel.app/',
    leakStopped:
      'Prevents two customers from buying the last size during high-demand fashion drops while organizing zone dispatch fees cleanly.',
    automationNote:
      'We built an n8n workflow that records reserved size, buyer details, and ticket ID, alerts the vendor on WhatsApp, and prepares a ready-to-send rider manifest on payment verification.',
    steps: [
      {
        node: 'LOCK // DROP SIZE INVENTORY',
        title: 'Anti-Double-Sell Size Reservation',
        detail:
          'Live size inventory prevents overselling limited pieces during drop windows.',
        payload: `{
  "drop": "VOID_CAPSULE_01",
  "sku": "VS-TEE-BLK-L",
  "stock_before": 1,
  "stock_after": 0,
  "lock_state": "SOLD_OUT_ON_UI"
}`
      },
      {
        node: 'CHECKOUT // ZONE & TICKET',
        title: 'Automated Zone Fee & Ticket ID',
        detail:
          'Zone-based delivery calculation and instant ticket generation replace manual DM price quotes.',
        payload: `{
  "ticket_id": "#VS-1184",
  "delivery_zone": "Lekki Phase 1",
  "delivery_fee_ngn": 3500,
  "total_due_ngn": 48500
}`
      },
      {
        node: 'N8N // VENDOR WHATSAPP PING',
        title: 'Instant Reservation Alert to Vendor',
        detail:
          'n8n automation logs reservation details and notifies the vendor on WhatsApp for rapid transfer confirmation.',
        payload: `{
  "n8n_node": "Vendor_Transfer_Check",
  "buyer": "Zainab O.",
  "reserved_item": "Heavyweight Obsidian Tee (L)",
  "awaiting_transfer_ngn": 48500
}`
      },
      {
        node: 'DISPATCH // RIDER MANIFEST',
        title: 'One-Click Rider Dispatch Slip',
        detail:
          'Confirmed orders output a structured dispatch slip for riders.',
        payload: `{
  "status": "PAYMENT_CONFIRMED",
  "rider_manifest": "PICKUP: Surulere Studio -> DROP: Admiralty Way, Lekki Ph 1 | COD: N0"
}`
      }
    ]
  },
  {
    id: 'bakery-ledger',
    number: '03',
    sector: 'COMMERCE',
    tag: 'LIVE WEB APP + N8N RECONCILIATION',
    title: 'Bakery Ledger',
    subtitle: 'Daily Bread Production, Distributor Debt & Cash Reconciliation',
    liveUrl: 'https://bakery-ledger.vercel.app/',
    leakStopped:
      'Replaces error-prone paper notebooks for tracking daily bread batches, distributor credit balances, and end-of-day cash vs. transfer shortfalls.',
    automationNote:
      'We built an n8n workflow that logs daily production runs, flags overdue distributor balances, and delivers an automated end-of-day cash reconciliation summary on WhatsApp.',
    steps: [
      {
        node: 'INPUT // BATCH & DISPATCH LOG',
        title: 'Daily Loaf Batch & Distributor Allocation',
        detail:
          'Logs daily batch output across loaf sizes and assigns stock dispatched to individual distributors.',
        payload: `{
  "batch_date": "2026-11-21",
  "produced": { "jumbo": 320, "family": 450, "mini": 200 },
  "distributor": "Mama Kemi Depot",
  "taken_value_ngn": 145000
}`
      },
      {
        node: 'LEDGER // CREDIT & PART-PAYMENT',
        title: 'Distributor Running Debt Tracker',
        detail:
          'Tracks partial payments and running credit balances per distributor automatically.',
        payload: `{
  "distributor": "Mama Kemi Depot",
  "previous_debt_ngn": 30000,
  "today_stock_ngn": 145000,
  "paid_today_ngn": 120000,
  "new_balance_due_ngn": 55000
}`
      },
      {
        node: 'AUDIT // CASH VS TRANSFER SPLIT',
        title: 'End-of-Day Shortfall Reconciliation',
        detail:
          'Reconciles expected revenue against actual cash and bank transfers at close of business.',
        payload: `{
  "expected_collections_ngn": 680000,
  "cash_counted_ngn": 410000,
  "bank_transfers_ngn": 270000,
  "variance_ngn": 0
}`
      },
      {
        node: 'N8N // OWNER WHATSAPP REPORT',
        title: 'Automated EOD Summary & Debt Flag',
        detail:
          'n8n sends a clean end-of-day summary and overdue debt alerts straight to the baker on WhatsApp.',
        payload: `{
  "n8n_node": "Owner_Daily_Digest",
  "whatsapp_report": "EOD CLOSED: N680,000 collected (0 variance). 2 distributors owe N92,000 total."
}`
      }
    ]
  },
  {
    id: 'daw-studios',
    number: '04',
    sector: 'BOOKINGS',
    tag: 'PRODUCTION N8N + WHATSAPP PIPELINE',
    title: 'DAW Studios Automation',
    subtitle: 'End-to-End Studio Booking, Bargaining & Receipt Verification',
    liveUrl: null,
    leakStopped:
      'Eliminates double-booked studio sessions, forgotten client follow-ups, and unverified short bank transfers during price negotiations.',
    automationNote:
      '7-step production pipeline connecting the studio website, Google Sheets, Google Calendar, n8n, and WhatsApp Business messaging.',
    steps: [
      {
        node: 'STEP 01 // WEB FORM INTAKE',
        title: 'Studio Session & Package Submission',
        detail:
          'Client submits session type, package, and preferred date on the studio website.',
        payload: `{
  "client_name": "Kola Beats",
  "whatsapp": "+2348012345678",
  "service": "4-Hour Recording + Mixing Session",
  "requested_date": "2026-11-24T14:00:00+01:00",
  "standard_rate_ngn": 60000
}`
      },
      {
        node: 'STEP 02 // GOOGLE SHEETS CRM',
        title: 'Central Lead & Booking Sheet Sync',
        detail:
          'Details automatically log into Google Sheets so zero leads slip through the cracks.',
        payload: `{
  "integration": "Google_Sheets_Append",
  "sheet": "DAW_Studios_Bookings_2026",
  "row_id": 218,
  "lead_status": "NEW_INQUIRY"
}`
      },
      {
        node: 'STEP 03 // CALENDAR SLOT LOCK',
        title: 'Google Calendar Date Reservation',
        detail:
          'Requested session date locks onto Google Calendar to prevent double-booking.',
        payload: `{
  "integration": "Google_Calendar_Create",
  "calendar": "DAW Studio Main Booth",
  "slot": "Nov 24, 2026 | 2:00 PM - 6:00 PM",
  "collision_check": "CLEAR"
}`
      },
      {
        node: 'STEP 04 // DUAL WHATSAPP DISPATCH',
        title: 'Client Welcome + Manager Alert',
        detail:
          'Automated welcome message sends from the studio WhatsApp number to the client while a structured alert hits the manager’s phone.',
        payload: `{
  "client_msg": "Welcome to DAW Studios! Your Nov 24 (2PM) request is logged.",
  "manager_alert": "NEW BOOKING: Kola Beats | 4hr Session | Nov 24 2PM | Rate: N60,000"
}`
      },
      {
        node: 'STEP 05 // BARGAIN ROUTING',
        title: 'Price Negotiation Flag to Manager',
        detail:
          'If the client requests a bargain, a dedicated negotiation alert routes to the manager.',
        payload: `{
  "trigger": "CLIENT_BARGAIN_REQUEST",
  "client_offer_ngn": 50000,
  "manager_prompt": "Kola Beats asked for N50,000 (vs N60,000). Reply to approve & send account."
}`
      },
      {
        node: 'STEP 06 // ACCOUNT AUTO-REPLY',
        title: 'Manager Reply Triggers Bank Details',
        detail:
          'Replying to the alert automatically sends the studio account number to the client.',
        payload: `{
  "manager_reply": "Approved 50k",
  "agreed_amount_ngn": 50000,
  "sent_to_client": "Agreed at N50,000. Pay to DAW Studios | 0123456789 (GTBank) & share receipt."
}`
      },
      {
        node: 'STEP 07 // RECEIPT & BALANCE GUARD',
        title: 'Receipt Verification & Shortfall Prompt',
        detail:
          'When the client shares a payment receipt, the system checks it against the agreed price and prompts for the balance if short.',
        payload: `{
  "agreed_amount_ngn": 50000,
  "receipt_detected_ngn": 35000,
  "balance_remaining_ngn": 15000,
  "auto_reply": "Receipt of N35,000 received. Please complete the N15,000 balance to confirm slot."
}`
      }
    ]
  },
  {
    id: 'real-estate-shortlet',
    number: '05',
    sector: 'BOOKINGS',
    tag: 'N8N LEAD & INSPECTION PIPELINE',
    title: 'Real Estate & Short-Let Ops',
    subtitle: 'Automated Inspection Scheduling, Calendar Blocking & Deposit Alerts',
    liveUrl: null,
    leakStopped:
      'Stops property agents and short-let hosts from losing warm leads to slow replies or overlapping inspection and check-in dates.',
    automationNote:
      'We built an n8n workflow that captures inquiries, logs budgets/dates in Google Sheets, blocks inspection or stay slots on Calendar, and manages WhatsApp deposit confirmations.',
    steps: [
      {
        node: 'INTAKE // PROPERTY & STAY DATES',
        title: 'Prospect Budget & Date Capture',
        detail:
          'Prospect submits property/unit interest, budget, and preferred inspection or check-in dates.',
        payload: `{
  "unit": "2-Bed Serviced Short-Let (Gbagada)",
  "prospect": "Chinedu M.",
  "dates": "Nov 28 - Dec 01, 2026 (3 Nights)",
  "total_rate_ngn": 240000
}`
      },
      {
        node: 'CRM // GOOGLE SHEETS PIPELINE',
        title: 'Automated Lead & Budget Logging',
        detail:
          'Lead data logs automatically into Google Sheets for structured pipeline tracking.',
        payload: `{
  "sheet": "ShortLet_&_Inspection_Leads",
  "prospect": "Chinedu M.",
  "status": "HOLD_PENDING_DEPOSIT"
}`
      },
      {
        node: 'CALENDAR // STAY / INSPECTION LOCK',
        title: 'Double-Booking Calendar Block',
        detail:
          'Inspection or stay window blocks on Google Calendar to prevent scheduling clashes.',
        payload: `{
  "calendar": "Gbagada_Unit_A_Availability",
  "blocked_range": "2026-11-28 to 2026-12-01",
  "overlap_status": "PROTECTED"
}`
      },
      {
        node: 'WHATSAPP // DEPOSIT & HOST ALERT',
        title: 'Instant Unit Info & Host Confirmation Flow',
        detail:
          'Instant WhatsApp message sends unit details and deposit terms while alerting the agent/host for one-tap confirmation.',
        payload: `{
  "prospect_msg": "Unit available Nov 28-Dec 1 (N240k). Caution + 50% deposit holds dates.",
  "host_alert": "NEW HOLD: Chinedu M. | 3 Nights | Reply CONFIRM once deposit drops."
}`
      }
    ]
  }
];

const OTHER_BUILDS = [
  {
    id: 'salon-beauty',
    tag: 'N8N APPOINTMENT WORKFLOW',
    title: 'Salon & Beauty Studio Booking Flow',
    liveUrl: null,
    summary:
      'We built an n8n workflow that captures service bookings (hair, nails, makeup, grooming), logs appointments in Google Sheets, locks stylist calendar slots, sends WhatsApp prep/deposit instructions, and triggers front-desk alerts.',
    steps: [
      {
        node: 'BOOKING // SERVICE & STYLIST',
        title: 'Client Service & Time Slot Intake',
        detail:
          'Client books service category, stylist preference, and time slot.',
        payload: `{
  "client": "Amaka E.",
  "service": "Knotless Braids (Medium)",
  "stylist": "Chair 02 - Blessing",
  "slot": "Saturday 11:00 AM"
}`
      },
      {
        node: 'SYNC // SHEETS + STYLIST CALENDAR',
        title: 'Appointment Log & Chair Lock',
        detail:
          'n8n logs the appointment into Google Sheets and reserves the time on Google Calendar.',
        payload: `{
  "sheet_logged": true,
  "calendar_event": "Chair 02 | Amaka E. - Knotless Braids",
  "double_book_guard": "ACTIVE"
}`
      },
      {
        node: 'CLIENT // DEPOSIT & PREP WHATSAPP',
        title: 'Automated Prep & Deposit Instructions',
        detail:
          'Automated WhatsApp confirmation sends deposit rules and prep notes to the client.',
        payload: `{
  "whatsapp_to_client": "Hi Amaka! Your Sat 11AM slot is reserved. N5,000 commitment deposit secures chair."
}`
      },
      {
        node: 'DESK // STYLIST ALERT',
        title: 'Front-Desk & Stylist Notification',
        detail:
          'Stylist/front desk receives instant booking and deposit status alerts.',
        payload: `{
  "desk_alert": "BOOKED: Amaka E. | Sat 11AM | Chair 02 | Deposit: PENDING"
}`
      }
    ]
  },
  {
    id: 'entrii',
    tag: 'PRIVATE PRODUCTION PLATFORM',
    title: 'Entrii — Event Ticketing & Gate Check-In',
    liveUrl: null,
    summary:
      'Private event ticketing and guest verification platform handling Free/Private RSVPs, Paid ticket checkout with automated Paystack subaccount revenue splitting, and fast venue check-in.',
    steps: [
      {
        node: 'ACCESS // FREE & PAID TIERS',
        title: 'Private RSVP & Paid Ticket Checkout',
        detail:
          'Supports both free/private guest lists and paid ticket tiers.',
        payload: `{
  "event": "Lagos Night Sessions Vol. 4",
  "tier": "VIP Table Pass",
  "price_ngn": 25000,
  "mode": "PAID_CHECKOUT"
}`
      },
      {
        node: 'SETTLEMENT // PAYSTACK SPLIT',
        title: 'Automated Subaccount Revenue Split',
        detail:
          'Splits ticket revenue automatically at checkout via Paystack subaccounts.',
        payload: `{
  "gateway": "Paystack_Split",
  "organizer_share_pct": 95,
  "platform_fee_pct": 5,
  "settlement": "INSTANT_SPLIT"
}`
      },
      {
        node: 'GATE // GUEST VERIFICATION',
        title: 'Fast Venue Check-In Verification',
        detail:
          'Replaces fake transfer screenshots and manual paper lists with fast gate check-in verification.',
        payload: `{
  "pass_code": "ENT-9941-VIP",
  "gate_scan": "VALID_UNUSED",
  "checked_in_at": "22:14 WAT"
}`
      }
    ]
  },
  {
    id: 'vintage-productions',
    tag: 'LIVE CLIENT WEB TOOL',
    title: 'Vintage Productions Invoice Generator',
    liveUrl: 'https://vintage-invoice-generator.vercel.app/',
    summary:
      'Custom browser-based billing and quote generator built for a live sound engineering operation—formatting equipment rentals, event packages, and balances into clean shareable invoices.',
    steps: [
      {
        node: 'LINE ITEMS // AUDIO GEAR & CREW',
        title: 'Sound Equipment & Event Package Entry',
        detail:
          'Itemizes audio equipment rentals, crew fees, and multi-day event packages cleanly.',
        payload: `{
  "client": "Prime Event Planners",
  "items": ["Line Array PA System (2 Days)", "Digital Mixer + FOH Engineer"],
  "currency": "NGN"
}`
      },
      {
        node: 'TOTALS // DEPOSIT & BALANCE MATH',
        title: 'Zero-Error Balance Calculation',
        detail:
          'Calculates totals and client balances automatically without spreadsheet errors.',
        payload: `{
  "gross_total_ngn": 450000,
  "advance_paid_ngn": 300000,
  "balance_due_ngn": 150000
}`
      },
      {
        node: 'EXPORT // CLIENT-READY INVOICE',
        title: 'Printable & Shareable Invoice Output',
        detail:
          'Generates clean, printable/shareable invoices ready for immediate client dispatch.',
        payload: `{
  "invoice_no": "VP-2026-084",
  "format": "A4_PRINT_&_SHARE",
  "status": "READY_TO_SEND"
}`
      }
    ]
  },
  {
    id: 'github-graveyard',
    tag: 'LIVE WEB DIRECTORY',
    title: 'GitHub Graveyard',
    liveUrl: 'https://gitgraveyard.xyz',
    summary:
      'Curated public directory spotlighting abandoned and archived open-source repositories so builders can inspect past codebases and revive useful ideas.',
    steps: [
      {
        node: 'INDEX // ARCHIVED REPOS',
        title: 'Searchable Directory of Inactive Projects',
        detail:
          'Indexes notable archived and inactive open-source projects in a searchable interface.',
        payload: `{
  "domain": "gitgraveyard.xyz",
  "category": "Developer Tools / Archived OSS",
  "filter_mode": "SEARCH_BY_STACK"
}`
      },
      {
        node: 'CONTEXT // REVIVAL INSIGHTS',
        title: 'Repository History & Fork Context',
        detail:
          'Highlights repository history and context for developers looking to fork or rebuild.',
        payload: `{
  "entry_status": "ARCHIVED",
  "builder_action": "INSPECT_AND_FORK"
}`
      }
    ]
  }
];

let activeFilter = 'ALL';
let revealObserver = null;
let scrollRafId = null;

// Modal Step-Runner State
let currentModalItem = null;
let currentStepIndex = 0;
let autoPlayTimer = null;

function updateScrollChoreography() {
  scrollRafId = null;
  const scrollTop = window.scrollY || window.pageYOffset || 0;
  const docHeight = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  const pct = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));

  const progressBar = document.getElementById('scrollProgressBar');
  const watermark = document.getElementById('heroWatermark');
  const topHeading = document.getElementById('topSystemsHeading');
  const otherHeading = document.getElementById('otherBuildsHeading');

  if (progressBar) {
    progressBar.style.width = `${pct.toFixed(2)}%`;
  }
  if (watermark) {
    watermark.style.transform = `translate3d(${-(scrollTop * 0.16).toFixed(1)}px, ${(scrollTop * 0.08).toFixed(1)}px, 0)`;
  }
  if (topHeading) {
    const rect = topHeading.getBoundingClientRect();
    const offset = Math.max(-18, Math.min(18, (rect.top - window.innerHeight * 0.45) * 0.04));
    topHeading.style.transform = `translate3d(${(-offset * 0.5).toFixed(1)}px, 0, 0)`;
  }
  if (otherHeading) {
    const rect = otherHeading.getBoundingClientRect();
    const offset = Math.max(-18, Math.min(18, (rect.top - window.innerHeight * 0.45) * 0.04));
    otherHeading.style.transform = `translate3d(${(-offset * 0.5).toFixed(1)}px, 0, 0)`;
  }

  document.querySelectorAll('.system-card').forEach((card, idx) => {
    const rect = card.getBoundingClientRect();
    const cardCenter = rect.top + rect.height * 0.5;
    const norm = (cardCenter - window.innerHeight * 0.5) / window.innerHeight;
    const direction = idx % 2 === 0 ? -1 : 1;
    const shift = Math.max(-8, Math.min(8, norm * 10 * direction));
    card.style.setProperty('--scroll-shift', `${shift.toFixed(1)}px`);
  });
}

function initScrollEffects() {
  const onScroll = () => {
    if (!scrollRafId) {
      scrollRafId = window.requestAnimationFrame(updateScrollChoreography);
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });

  if ('IntersectionObserver' in window) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
    );
  }

  observeScrollElements();
  updateScrollChoreography();
}

function observeScrollElements() {
  const els = document.querySelectorAll('.scroll-reveal');
  if (!revealObserver) {
    els.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  els.forEach((el, idx) => {
    if (el.classList.contains('is-visible')) return;
    el.style.setProperty('--stagger', `${Math.min(idx % 4, 3) * 55}ms`);
    revealObserver.observe(el);

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.96) {
      el.classList.add('is-visible');
      revealObserver.unobserve(el);
    }
  });
}

function renderTopSystems() {
  const grid = document.getElementById('topSystemsGrid');
  const filtered =
    activeFilter === 'ALL'
      ? TOP_SYSTEMS
      : TOP_SYSTEMS.filter((item) => item.sector === activeFilter);

  grid.innerHTML = filtered
    .map((sys, idx) => {
      const spanClass = filtered.length === 5 && idx === 4 ? 'lg:col-span-2' : '';
      const liveBtn = sys.liveUrl
        ? `<a
            href="${sys.liveUrl}"
            target="_blank"
            rel="noopener noreferrer"
            class="font-mono text-xs font-bold uppercase px-4 py-2.5 bg-[#F5F5F4] text-[#0A0A0B] hover:bg-[#DC2626] hover:text-[#F5F5F4] transition"
          >
            Live System ↗
          </a>`
        : `<span class="font-mono text-[11px] uppercase px-3 py-2 border border-[#F5F5F4]/15 text-[#F5F5F4]/60">
            Client Production Flow
          </span>`;

      return `
        <article class="${spanClass} system-card scroll-reveal border border-[#F5F5F4]/15 bg-[#F5F5F4]/[0.02] hover:border-[#F5F5F4]/40 flex flex-col justify-between p-6 sm:p-7 space-y-6">
          <div class="space-y-4">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <span class="font-mono text-xs text-[#DC2626] font-bold tracking-wider">
                [${sys.number}] ${sys.tag}
              </span>
            </div>

            <div>
              <h3 class="text-xl sm:text-2xl font-bold tracking-tight">${sys.title}</h3>
              <p class="font-mono text-xs text-[#F5F5F4]/65 mt-1">${sys.subtitle}</p>
            </div>

            <div class="space-y-3 pt-1">
              <div class="p-3.5 bg-[#0A0A0B] border border-[#F5F5F4]/12">
                <p class="font-mono text-[11px] uppercase text-[#F5F5F4]/50 mb-1">Revenue / Ops Leak Stopped</p>
                <p class="text-sm text-[#F5F5F4]/90 leading-relaxed">${sys.leakStopped}</p>
              </div>

              <div class="p-3.5 bg-[#0A0A0B] border border-[#F5F5F4]/12">
                <p class="font-mono text-[11px] uppercase text-[#DC2626] mb-1">Automation Layer</p>
                <p class="text-sm text-[#F5F5F4]/80 leading-relaxed">${sys.automationNote}</p>
              </div>
            </div>
          </div>

          <div class="pt-4 border-t border-[#F5F5F4]/12 flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onclick="openWorkflowModal('${sys.id}', 'TOP')"
              class="font-mono text-xs font-bold uppercase px-4 py-2.5 border border-[#F5F5F4]/30 text-[#F5F5F4] hover:border-[#DC2626] hover:text-[#DC2626] transition"
            >
              Run Workflow (${sys.steps.length} Nodes) &#9654;
            </button>
            ${liveBtn}
          </div>
        </article>
      `;
    })
    .join('');

  observeScrollElements();
  updateScrollChoreography();
}

function renderOtherBuilds() {
  const grid = document.getElementById('otherBuildsGrid');
  grid.innerHTML = OTHER_BUILDS.map((item) => {
    const actionLink = item.liveUrl
      ? `<a
          href="${item.liveUrl}"
          target="_blank"
          rel="noopener noreferrer"
          class="font-mono text-xs font-bold uppercase text-[#F5F5F4] hover:text-[#DC2626] transition"
        >
          Open Link ↗
        </a>`
      : `<span class="font-mono text-[11px] uppercase text-[#F5F5F4]/45">Private / Internal</span>`;

    return `
      <article class="system-card scroll-reveal border border-[#F5F5F4]/12 bg-[#F5F5F4]/[0.015] hover:border-[#F5F5F4]/35 p-5 sm:p-6 flex flex-col justify-between space-y-5">
        <div class="space-y-2.5">
          <div class="flex items-center justify-between gap-2">
            <span class="font-mono text-[11px] uppercase tracking-wider text-[#F5F5F4]/60">${item.tag}</span>
            ${actionLink}
          </div>
          <h3 class="text-lg font-bold">${item.title}</h3>
          <p class="text-sm text-[#F5F5F4]/75 leading-relaxed">${item.summary}</p>
        </div>

        <div class="pt-3 border-t border-[#F5F5F4]/10 flex items-center justify-between">
          <button
            type="button"
            onclick="openWorkflowModal('${item.id}', 'OTHER')"
            class="font-mono text-xs uppercase underline text-[#F5F5F4]/80 hover:text-[#DC2626] transition"
          >
            Step Through Nodes (${item.steps.length}) &rarr;
          </button>
        </div>
      </article>
    `;
  }).join('');

  observeScrollElements();
  updateScrollChoreography();
}

function filterTopSystems(filter) {
  activeFilter = filter;
  document.querySelectorAll('.filter-btn').forEach((btn) => {
    const isSelected = btn.getAttribute('data-filter') === filter;
    btn.className = isSelected
      ? 'filter-btn font-mono text-xs uppercase px-3 py-1.5 border border-[#DC2626] bg-[#DC2626] text-[#F5F5F4] font-semibold'
      : 'filter-btn font-mono text-xs uppercase px-3 py-1.5 border border-[#F5F5F4]/20 text-[#F5F5F4]/80 hover:border-[#F5F5F4]';
  });
  renderTopSystems();
}

function stopAutoRunSteps() {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer);
    autoPlayTimer = null;
  }
  const btn = document.getElementById('stepAutoPlayBtn');
  if (btn) {
    btn.textContent = 'Auto-Run ▶';
  }
}

function toggleAutoRunSteps() {
  if (!currentModalItem) return;
  if (autoPlayTimer) {
    stopAutoRunSteps();
    return;
  }

  const btn = document.getElementById('stepAutoPlayBtn');
  if (btn) {
    btn.textContent = 'Pause ❚❚';
  }

  if (currentStepIndex >= currentModalItem.steps.length - 1) {
    currentStepIndex = 0;
    renderModalStepState();
  }

  autoPlayTimer = setInterval(() => {
    if (!currentModalItem) {
      stopAutoRunSteps();
      return;
    }
    if (currentStepIndex < currentModalItem.steps.length - 1) {
      currentStepIndex += 1;
      renderModalStepState();
    } else {
      stopAutoRunSteps();
    }
  }, 1600);
}

function selectModalStep(index) {
  if (!currentModalItem) return;
  stopAutoRunSteps();
  currentStepIndex = Math.max(0, Math.min(currentModalItem.steps.length - 1, index));
  renderModalStepState();
}

function prevModalStep() {
  selectModalStep(currentStepIndex - 1);
}

function nextModalStep() {
  selectModalStep(currentStepIndex + 1);
}

function renderModalStepState() {
  if (!currentModalItem) return;
  const steps = currentModalItem.steps;
  const total = steps.length;
  const activeStep = steps[currentStepIndex];

  // Update counter and prev/next buttons
  const pad = (n) => String(n).padStart(2, '0');
  document.getElementById('stepCounter').textContent = `${pad(currentStepIndex + 1)} / ${pad(total)}`;
  document.getElementById('stepPrevBtn').disabled = currentStepIndex === 0;
  document.getElementById('stepNextBtn').disabled = currentStepIndex === total - 1;

  // Update segmented progress track
  const track = document.getElementById('stepProgressTrack');
  track.style.gridTemplateColumns = `repeat(${total}, minmax(0, 1fr))`;
  track.innerHTML = steps
    .map((_, idx) => {
      const stateClass =
        idx < currentStepIndex
          ? 'bg-[#DC2626]/65'
          : idx === currentStepIndex
            ? 'bg-[#DC2626]'
            : 'bg-[#F5F5F4]/15';
      return `<button
        type="button"
        aria-label="Go to step ${idx + 1}"
        onclick="selectModalStep(${idx})"
        class="h-1.5 ${stateClass} transition-colors"
      ></button>`;
    })
    .join('');

  // Render clickable node list
  const stepsList = document.getElementById('modalSteps');
  stepsList.innerHTML = steps
    .map((step, index) => {
      const isCurrent = index === currentStepIndex;
      const isDone = index < currentStepIndex;
      const statusMark = isCurrent ? 'ACTIVE' : isDone ? 'DONE' : 'QUEUED';
      return `
        <li>
          <button
            type="button"
            onclick="selectModalStep(${index})"
            class="node-step-btn w-full text-left flex items-center justify-between gap-3 p-3 border border-[#F5F5F4]/12 bg-[#F5F5F4]/[0.02] hover:border-[#F5F5F4]/35 ${isCurrent ? 'is-active' : ''}"
          >
            <div class="flex items-center gap-2.5 min-w-0">
              <span class="font-mono text-xs font-bold ${isCurrent ? 'text-[#DC2626]' : 'text-[#F5F5F4]/60'} shrink-0">
                ${pad(index + 1)}
              </span>
              <span class="text-xs sm:text-sm font-medium truncate ${isCurrent ? 'text-[#F5F5F4]' : 'text-[#F5F5F4]/80'}">
                ${step.title}
              </span>
            </div>
            <span class="font-mono text-[10px] uppercase shrink-0 ${isCurrent ? 'text-[#DC2626] font-bold' : 'text-[#F5F5F4]/45'}">
              ${statusMark}
            </span>
          </button>
        </li>
      `;
    })
    .join('');

  // Update active node inspector & runtime payload
  document.getElementById('activeNodeBadge').textContent = activeStep.node;
  document.getElementById('activeNodeStatus').textContent =
    currentStepIndex === total - 1 ? 'COMPLETED' : `STEP ${pad(currentStepIndex + 1)} RUNNING`;
  document.getElementById('activeNodeTitle').textContent = activeStep.title;
  document.getElementById('activeNodeDesc').textContent = activeStep.detail;
  document.getElementById('activeNodePayload').textContent = activeStep.payload;
  document.getElementById('copyPayloadBtn').textContent = 'Copy JSON';
}

function copyCurrentPayload() {
  if (!currentModalItem) return;
  const payload = currentModalItem.steps[currentStepIndex]?.payload || '';
  if (!payload) return;

  navigator.clipboard?.writeText(payload).then(() => {
    const btn = document.getElementById('copyPayloadBtn');
    if (btn) {
      btn.textContent = 'Copied ✓';
      setTimeout(() => {
        btn.textContent = 'Copy JSON';
      }, 1500);
    }
  });
}

function openWorkflowModal(id, group) {
  const source = group === 'TOP' ? TOP_SYSTEMS : OTHER_BUILDS;
  const item = source.find((entry) => entry.id === id);
  if (!item) return;

  stopAutoRunSteps();
  currentModalItem = item;
  currentStepIndex = 0;

  document.getElementById('modalBadge').textContent = item.tag;
  document.getElementById('modalTitle').textContent = item.title;
  document.getElementById('modalProblem').textContent = item.leakStopped || item.summary;

  const liveBtn = document.getElementById('modalLiveLink');
  if (item.liveUrl) {
    liveBtn.href = item.liveUrl;
    liveBtn.classList.remove('hidden');
  } else {
    liveBtn.classList.add('hidden');
  }

  const waMsg = encodeURIComponent(
    `Hi Mukty, I inspected "${item.title}" on your portfolio and want a similar system set up for my business.`
  );
  document.getElementById('modalWhatsappBtn').href = `https://wa.me/2349065086844?text=${waMsg}`;

  renderModalStepState();

  document.getElementById('workflowModal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeWorkflowModal() {
  stopAutoRunSteps();
  currentModalItem = null;
  document.getElementById('workflowModal').classList.add('hidden');
  document.body.style.overflow = '';
}

document.getElementById('workflowModal').addEventListener('click', (e) => {
  if (e.target.id === 'workflowModal') {
    closeWorkflowModal();
  }
});

document.addEventListener('keydown', (e) => {
  const modal = document.getElementById('workflowModal');
  if (modal.classList.contains('hidden')) return;

  if (e.key === 'Escape') {
    closeWorkflowModal();
  } else if (e.key === 'ArrowRight') {
    nextModalStep();
  } else if (e.key === 'ArrowLeft') {
    prevModalStep();
  }
});

renderTopSystems();
renderOtherBuilds();
initScrollEffects();