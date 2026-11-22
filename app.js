const TOP_SYSTEMS = [
  {
    id: 'chopline',
    number: '01',
    sector: 'COMMERCE',
    tag: 'Live Storefront + Automated Dispatch',
    title: 'ChopLine Kitchen',
    subtitle: 'Restaurant Ordering, Live Portion Caps & Rider Fee Split',
    liveUrl: 'https://chopline-kitchen.vercel.app/',
    leakStopped:
      'Stops kitchens from selling food portions that have already finished and eliminates messy WhatsApp back-and-forth over landmarks and rider fees.',
    automationNote:
      'Incoming orders automatically calculate zone delivery fees, generate a clean order ticket, and send formatted kitchen & rider alerts on WhatsApp.',
    steps: [
      {
        badge: 'Step 1 • Customer Menu',
        title: 'Live Portion Availability Lock',
        detail:
          'Customers only see plates still in stock. Once the last portion sells, the button locks automatically so you never refund disappointed buyers.',
        channel: 'What Your Customer Sees',
        resultTitle: 'Smoky Jollof + Peppered Turkey — 2 Plates Left',
        resultBody:
          'Customer selects 2 plates. Stock immediately updates to "Sold Out" on the storefront so no third buyer can pay for food that is finished.'
      },
      {
        badge: 'Step 2 • Smart Checkout',
        title: 'Zone Delivery & Rider Fee Choice',
        detail:
          'Delivery fees calculate automatically by area, and customers can choose to pay the rider upfront or on arrival.',
        channel: 'Checkout Summary',
        resultTitle: 'Food: ₦6,500 (Paid) • Rider Fee: ₦2,000 (Pay on Delivery)',
        resultBody:
          'Clear breakdown removes arguments at the gate—both the kitchen and the dispatch rider know who is collecting what.'
      },
      {
        badge: 'Step 3 • Order Ticket',
        title: 'Instant #CK Order Ticket',
        detail:
          'Generates a structured order ticket with the customer’s exact landmark and phone number.',
        channel: 'Customer Confirmation Screen',
        resultTitle: 'Ticket #CK-4092 Confirmed',
        resultBody:
          '"Hi Tunde, your order #CK-4092 is confirmed! Delivery landmark: Opposite Gbagada General Hospital Gate."'
      },
      {
        badge: 'Step 4 • Kitchen & Dispatch Alert',
        title: 'Automatic Kitchen WhatsApp Alert',
        detail:
          'Your kitchen and dispatch team receive a ready-to-pack summary on WhatsApp without anyone typing a word.',
        channel: 'WhatsApp Message to Kitchen',
        resultTitle: 'New Paid Order #CK-4092',
        resultBody:
          '"PACK NOW: 2x Jollof & Turkey | Customer: Tunde (0803...) | Drop-off: Gbagada Hospital Gate | Collect ₦2,000 rider fee on arrival."'
      }
    ]
  },
  {
    id: 'vulture-silk',
    number: '02',
    sector: 'COMMERCE',
    tag: 'Live Storefront + Stock & Rider Flow',
    title: 'Vulture & Silk',
    subtitle: 'Fashion Drop Size Lock & Rider Dispatch System',
    liveUrl: 'https://vulture-silk-1.vercel.app/',
    leakStopped:
      'Prevents two customers from paying for the last size during high-demand drops while keeping delivery fees and rider slips organized.',
    automationNote:
      'Automatically locks reserved sizes, alerts the vendor on WhatsApp for fast transfer checks, and outputs a clean rider dispatch slip.',
    steps: [
      {
        badge: 'Step 1 • Drop Inventory',
        title: 'Instant Size Reservation Lock',
        detail:
          'When a buyer claims the last Large or Medium piece during a drop, that size immediately locks so you never double-sell.',
        channel: 'Live Storefront Status',
        resultTitle: 'Heavyweight Obsidian Tee (Size L) — Reserved',
        resultBody:
          'Size L switches to "Sold Out" in real time while Size M and XL remain open for other shoppers.'
      },
      {
        badge: 'Step 2 • Order Ticket',
        title: 'Automated Zone Fee & Ticket ID',
        detail:
          'Replaces endless DM price questions with instant zone shipping calculation and a unique order reference.',
        channel: 'Buyer Checkout Receipt',
        resultTitle: 'Order #VS-1184 • Total: ₦48,500 (Includes ₦3,500 Lekki Delivery)',
        resultBody:
          'Buyer gets an immediate total and payment instruction without waiting 20 minutes for a DM reply.'
      },
      {
        badge: 'Step 3 • Vendor Alert',
        title: 'WhatsApp Payment Alert to You',
        detail:
          'You receive a clean WhatsApp summary of the buyer, reserved size, and exact amount to confirm.',
        channel: 'WhatsApp Message to Brand Owner',
        resultTitle: 'New Drop Reservation #VS-1184',
        resultBody:
          '"Zainab O. reserved 1x Obsidian Tee (L) for Lekki Phase 1. Confirm ₦48,500 transfer to release rider slip."'
      },
      {
        badge: 'Step 4 • Rider Dispatch',
        title: 'Ready-to-Send Rider Manifest',
        detail:
          'Once payment is confirmed, a clean pickup-and-dropoff slip is ready to forward straight to your dispatch rider.',
        channel: 'Rider Dispatch Slip',
        resultTitle: 'Dispatch Ready — Order #VS-1184',
        resultBody:
          '"PICKUP: Surulere Studio -> DROP: Admiralty Way, Lekki Phase 1 | Receiver: Zainab (0809...) | Delivery Already Paid."'
      }
    ]
  },
  {
    id: 'bakery-ledger',
    number: '03',
    sector: 'COMMERCE',
    tag: 'Live Web App + Daily Reconciliation',
    title: 'Bakery Ledger',
    subtitle: 'Daily Bread Production, Distributor Debt & Cash Reconciliation',
    liveUrl: 'https://bakery-ledger.vercel.app/',
    leakStopped:
      'Replaces messy paper notebooks for tracking daily bread batches, distributor credit balances, and end-of-day cash vs. transfer shortfalls.',
    automationNote:
      'Tracks every loaf handed to distributors, updates unpaid balances automatically, and sends a clear end-of-day cash summary on WhatsApp.',
    steps: [
      {
        badge: 'Step 1 • Morning Production',
        title: 'Daily Batch & Distributor Stock Log',
        detail:
          'Record how many loaves were baked and exactly how many crates each distributor took out.',
        channel: 'Bakery Floor Log',
        resultTitle: 'Morning Run Logged: 970 Loaves Dispatched',
        resultBody:
          '"Mama Kemi Depot took ₦145,000 worth of bread (320 Jumbo, 150 Family) at 7:15 AM."'
      },
      {
        badge: 'Step 2 • Debt Tracking',
        title: 'Automatic Distributor Balance Update',
        detail:
          'When a distributor pays part cash and leaves a balance, the system carries the exact debt forward automatically.',
        channel: 'Distributor Account Card',
        resultTitle: 'Mama Kemi Depot — Updated Balance: ₦55,000 Owed',
        resultBody:
          '"Previous Debt: ₦30,000 + Today’s Bread: ₦145,000 − Paid Today: ₦120,000 = ₦55,000 Balance Due."'
      },
      {
        badge: 'Step 3 • End-of-Day Audit',
        title: 'Cash vs. Bank Transfer Check',
        detail:
          'Compares total bread sold against physical cash in hand and bank transfers received so missing Naira is spotted immediately.',
        channel: 'Closing Cash Audit',
        resultTitle: 'Expected: ₦680,000 • Counted: ₦680,000 (₦0 Shortfall)',
        resultBody:
          '"Cash in Drawer: ₦410,000 + Bank Transfers: ₦270,000 = Balanced."'
      },
      {
        badge: 'Step 4 • Owner Summary',
        title: 'WhatsApp End-of-Day Report',
        detail:
          'You receive a clear closing report and overdue debt list on WhatsApp without digging through notebooks.',
        channel: 'WhatsApp Report to Bakery Owner',
        resultTitle: 'Daily Bakery Summary — All Balanced',
        resultBody:
          '"Today’s Collections: ₦680,000 (₦0 missing). Reminder: 2 distributors currently owe ₦92,000 combined."'
      }
    ]
  },
  {
    id: 'daw-studios',
    number: '04',
    sector: 'BOOKINGS',
    tag: 'Live Client Automation Pipeline',
    title: 'DAW Studios Automation',
    subtitle: 'Studio Booking, Price Bargaining & Receipt Balance Verification',
    liveUrl: null,
    leakStopped:
      'Eliminates double-booked studio sessions, forgotten client follow-ups, and unverified short transfers during price negotiations.',
    automationNote:
      '7-step automated flow connecting the studio booking form, Google Sheets, Google Calendar, and WhatsApp Business messaging.',
    steps: [
      {
        badge: 'Step 1 • Website Booking',
        title: 'Client Picks Session & Preferred Date',
        detail:
          'Artist or client fills out their session package, hours needed, and preferred date on the studio website.',
        channel: 'Website Booking Form',
        resultTitle: '4-Hour Recording & Mixing Session Requested',
        resultBody:
          '"Client: Kola Beats | Date: Tuesday, Nov 24 at 2:00 PM | Standard Rate: ₦60,000."'
      },
      {
        badge: 'Step 2 • Lead Backup',
        title: 'Saved Automatically to Google Sheets',
        detail:
          'Every booking inquiry is logged into a central Google Sheet immediately so no customer is ever forgotten.',
        channel: 'Google Sheets Customer Log',
        resultTitle: 'Row #218 Added — Kola Beats (0801...)',
        resultBody:
          'Name, phone number, session package, date, and payment status are stored neatly in one place.'
      },
      {
        badge: 'Step 3 • Calendar Lock',
        title: 'Session Date Blocked on Google Calendar',
        detail:
          'The requested date and time slot is marked on your Google Calendar so two clients never book the same booth.',
        channel: 'Google Calendar',
        resultTitle: 'Studio Booth Reserved: Nov 24, 2:00 PM – 6:00 PM',
        resultBody:
          'Slot is held on your calendar automatically while payment is finalized.'
      },
      {
        badge: 'Step 4 • Instant WhatsApp Alerts',
        title: 'Welcome Message to Client + Alert to You',
        detail:
          'Your studio WhatsApp sends an immediate welcome to the client while sending you the full booking breakdown.',
        channel: 'Dual WhatsApp Messages',
        resultTitle: 'Client Welcomed & Manager Notified in 3 Seconds',
        resultBody:
          'To Client: "Welcome to DAW Studios! We received your Nov 24 (2 PM) request." | To You: "NEW BOOKING: Kola Beats, 4hrs, ₦60,000."'
      },
      {
        badge: 'Step 5 • Bargain Alert',
        title: 'Price Negotiation Flagged to You',
        detail:
          'If the client wants to bargain on the rate, the system flags their offer and alerts you directly on WhatsApp.',
        channel: 'WhatsApp Bargain Alert to You',
        resultTitle: 'Bargain Request: Client Offered ₦50,000 (vs ₦60,000)',
        resultBody:
          '"Kola Beats wants to negotiate ₦50,000 for the 4-hour session. Reply to this message to approve and send account details."'
      },
      {
        badge: 'Step 6 • Account Auto-Reply',
        title: 'Your Reply Sends Bank Details Automatically',
        detail:
          'Once you reply to approve the agreed price, the system automatically sends your studio account number to the client.',
        channel: 'WhatsApp Message to Client',
        resultTitle: 'Agreed Rate: ₦50,000 — Account Details Sent',
        resultBody:
          '"Your session is approved at ₦50,000. Please transfer to DAW Studios (0123456789 - GTBank) and share your receipt here."'
      },
      {
        badge: 'Step 7 • Receipt & Balance Guard',
        title: 'Checks Receipt Amount & Asks for Balance if Short',
        detail:
          'When the client uploads a transfer receipt, the system compares it to the agreed amount and automatically asks for the remaining balance if they underpaid.',
        channel: 'Automatic Receipt Verification',
        resultTitle: 'Short Payment Caught: ₦35,000 Paid of ₦50,000 Agreed',
        resultBody:
          '"We received your ₦35,000 transfer receipt. Please complete the remaining ₦15,000 balance to lock in your Nov 24 session."'
      }
    ]
  },
  {
    id: 'real-estate-shortlet',
    number: '05',
    sector: 'BOOKINGS',
    tag: 'Property & Short-Let Automation',
    title: 'Real Estate & Short-Let Ops',
    subtitle: 'Automated Inspection Scheduling, Calendar Lock & Deposit Alerts',
    liveUrl: null,
    leakStopped:
      'Stops agents and short-let hosts from losing serious prospects to slow replies or double-booked inspection and check-in dates.',
    automationNote:
      'Logs property inquiries in Google Sheets, blocks inspection/stay dates on Calendar, and manages WhatsApp deposit confirmations.',
    steps: [
      {
        badge: 'Step 1 • Inquiry Intake',
        title: 'Property / Stay Dates & Budget Captured',
        detail:
          'Prospect submits the apartment they want, their budget, and preferred inspection or check-in dates.',
        channel: 'Property Inquiry Form',
        resultTitle: '2-Bed Serviced Short-Let (Gbagada) • 3 Nights',
        resultBody:
          '"Prospect: Chinedu M. | Check-in: Nov 28 – Dec 1 | Total Rate: ₦240,000."'
      },
      {
        badge: 'Step 2 • Lead Tracker',
        title: 'Saved to Agent / Host Google Sheet',
        detail:
          'Every prospect is logged automatically so you can track warm leads, inspections, and pending deposits.',
        channel: 'Google Sheets Pipeline',
        resultTitle: 'Lead Logged — Status: Holding Dates for Deposit',
        resultBody:
          'No more scrolling through hundreds of unread WhatsApp messages to remember who asked for which apartment.'
      },
      {
        badge: 'Step 3 • Date Protection',
        title: 'Inspection or Stay Blocked on Calendar',
        detail:
          'Blocks the inspection slot or short-let stay dates on Google Calendar so two guests never clash.',
        channel: 'Google Calendar',
        resultTitle: 'Unit A Blocked: Nov 28 – Dec 1',
        resultBody:
          'Calendar prevents accidental double-bookings while the prospect completes their commitment deposit.'
      },
      {
        badge: 'Step 4 • Instant WhatsApp Follow-Up',
        title: 'Unit Details to Guest + Alert to You',
        detail:
          'Prospect receives apartment rules and deposit info immediately while you get a one-tap confirmation alert.',
        channel: 'WhatsApp Confirmation',
        resultTitle: 'Instant Reply Sent & Host Notified',
        resultBody:
          'To Guest: "Unit A is available Nov 28–Dec 1 (₦240k). 50% deposit secures check-in." | To You: "NEW HOLD: Chinedu M. (3 Nights)."'
      }
    ]
  }
];

const AI_CAPABILITIES = [
  {
    code: '01',
    title: 'AI Agents & Task Assistants',
    summary:
      'Goal-driven AI workflows that qualify leads, extract details from messy messages or receipts, draft structured responses, and hand off clean actions with human guardrails.',
    outcome: 'Cuts repetitive triage while keeping you in charge of high-stakes approvals.'
  },
  {
    code: '02',
    title: 'AI Chatbots & Guided Intake',
    summary:
      'Conversational flows that answer FAQs, collect booking/order requirements, check availability rules, and route qualified inquiries instead of letting leads go cold.',
    outcome: '24/7 front-line responsiveness without leaving customers waiting in silence.'
  },
  {
    code: '03',
    title: 'Business Process Automation',
    summary:
      'End-to-end n8n pipelines that connect forms, payment/receipt checks, calendar holds, and team alerts so routine operations run automatically.',
    outcome: 'Eliminates manual copy-pasting and human forgetfulness across daily tasks.'
  },
  {
    code: '04',
    title: 'API & Webhook Integrations',
    summary:
      'Custom integrations linking messaging APIs, payment gateways (like Paystack splits), webhooks, and external services into one reliable chain.',
    outcome: 'Keeps your storefront, payments, and alerts talking in real time.'
  },
  {
    code: '05',
    title: 'Data Management & Structured Logs',
    summary:
      'Clean data models across Google Sheets, Supabase, and PostgreSQL so orders, distributor balances, bookings, and ledgers stay searchable and auditable.',
    outcome: 'Turns scattered chat history into clear numbers you can actually trust.'
  },
  {
    code: '06',
    title: 'Custom Web Applications',
    summary:
      'Fast, mobile-first web apps and operational dashboards—from ordering menus and ledgers to invoice tools and event check-in systems.',
    outcome: 'Purpose-built interfaces tailored to how your business actually operates.'
  }
];

const OTHER_BUILDS = [
  {
    id: 'salon-beauty',
    tag: 'Salon & Beauty Workflow',
    title: 'Salon & Beauty Studio Booking Flow',
    liveUrl: null,
    summary:
      'Captures hair, nails, makeup, and grooming bookings, logs appointments in Google Sheets, locks stylist calendar slots, sends WhatsApp prep/deposit instructions, and alerts the front desk.',
    steps: [
      {
        badge: 'Step 1 • Service Selection',
        title: 'Client Picks Service, Stylist & Time',
        detail:
          'Client chooses their beauty service, preferred stylist chair, and appointment time.',
        channel: 'Salon Booking Page',
        resultTitle: 'Knotless Braids (Medium) • Saturday at 11:00 AM',
        resultBody:
          '"Client: Amaka E. | Stylist: Chair 02 (Blessing) | Duration: 3 Hours."'
      },
      {
        badge: 'Step 2 • Chair Lock',
        title: 'Saved to Sheet & Stylist Calendar Blocked',
        detail:
          'Logs the appointment in Google Sheets and blocks the stylist’s calendar so chairs are never double-booked.',
        channel: 'Google Calendar & Sheet',
        resultTitle: 'Chair 02 Locked for Saturday 11:00 AM',
        resultBody:
          'Front desk and stylist see the exact schedule for the day without overlap.'
      },
      {
        badge: 'Step 3 • Client Prep Message',
        title: 'WhatsApp Deposit & Prep Instructions',
        detail:
          'Sends an automatic WhatsApp confirmation with deposit rules and hair/nail prep notes.',
        channel: 'WhatsApp Message to Client',
        resultTitle: 'Slot Reserved — Deposit & Prep Note Sent',
        resultBody:
          '"Hi Amaka! Your Sat 11 AM appointment is reserved. Please pay the ₦5,000 commitment deposit to lock your chair."'
      },
      {
        badge: 'Step 4 • Desk Alert',
        title: 'Instant Front-Desk Notification',
        detail:
          'Your front desk or stylist receives an immediate summary of the booking and deposit status.',
        channel: 'WhatsApp Alert to Salon Desk',
        resultTitle: 'New Booking: Amaka E. (Sat 11 AM)',
        resultBody:
          '"Service: Knotless Braids | Chair 02 | Commitment Deposit: Awaiting Receipt."'
      }
    ]
  },
  {
    id: 'entrii',
    tag: 'Private Production Platform',
    title: 'Entrii — Event Ticketing & Gate Check-In',
    liveUrl: null,
    summary:
      'Private event ticketing and guest verification platform handling Free/Private RSVPs, Paid ticket checkout with automated Paystack revenue splitting, and fast venue gate check-in.',
    steps: [
      {
        badge: 'Step 1 • Event Registration',
        title: 'Free/Private RSVP & Paid Ticket Checkout',
        detail:
          'Supports invite-only guest lists as well as paid ticket tiers in one smooth flow.',
        channel: 'Event Guest Pass',
        resultTitle: 'VIP Table Pass Issued — Lagos Night Sessions',
        resultBody:
          'Guests receive a verified digital pass immediately after registering or paying.'
      },
      {
        badge: 'Step 2 • Instant Revenue Split',
        title: 'Automated Paystack Payout Splitting',
        detail:
          'Ticket revenue splits automatically at checkout via Paystack subaccounts—no manual end-of-event calculations.',
        channel: 'Automated Settlement',
        resultTitle: '₦25,000 Ticket Split Automatically at Checkout',
        resultBody:
          'Organizer share and partner/platform shares route to their respective bank accounts automatically.'
      },
      {
        badge: 'Step 3 • Fast Gate Entry',
        title: 'One-Scan Gate Check-In Verification',
        detail:
          'Replaces fake transfer screenshots and slow paper guest lists at the venue entrance.',
        channel: 'Door Security Check-In',
        resultTitle: 'Pass #ENT-9941 Verified — Valid Entry',
        resultBody:
          'Marks the pass as checked in immediately so the same ticket cannot be shared twice at the gate.'
      }
    ]
  },
  {
    id: 'vintage-productions',
    tag: 'Live Client Billing Tool',
    title: 'Vintage Productions Invoice Generator',
    liveUrl: 'https://vintage-invoice-generator.vercel.app/',
    summary:
      'Custom browser-based billing and quote generator built for a live sound engineering business—formatting equipment rentals, event packages, and balances into clean shareable invoices.',
    steps: [
      {
        badge: 'Step 1 • Equipment & Crew',
        title: 'Itemized Sound Gear & Event Packages',
        detail:
          'Lists speakers, mixers, microphones, crew fees, and multi-day event rentals cleanly.',
        channel: 'Invoice Builder',
        resultTitle: '2-Day Live Event Sound Package Itemized',
        resultBody:
          '"Line Array PA System + Digital Console + FOH Sound Engineer — ₦450,000."'
      },
      {
        badge: 'Step 2 • Balance Math',
        title: 'Automatic Deposit & Balance Calculation',
        detail:
          'Subtracts advance deposits automatically so the client sees their exact remaining balance.',
        channel: 'Client Billing Summary',
        resultTitle: 'Total: ₦450,000 • Advance Paid: ₦300,000 • Balance Due: ₦150,000',
        resultBody:
          'Eliminates manual calculator mistakes when sending revised event quotes.'
      },
      {
        badge: 'Step 3 • Instant Share',
        title: 'Clean Printable & WhatsApp-Ready Invoice',
        detail:
          'Outputs a branded, clean invoice ready to save as PDF or send straight to the event planner.',
        channel: 'Finished Client Invoice',
        resultTitle: 'Invoice #VP-2026-084 Ready to Send',
        resultBody:
          'Professional layout builds immediate trust with corporate and event clients.'
      }
    ]
  },
  {
    id: 'github-graveyard',
    tag: 'Live Web Directory',
    title: 'GitHub Graveyard',
    liveUrl: 'https://gitgraveyard.xyz',
    summary:
      'Curated public directory spotlighting abandoned and archived open-source repositories so builders can inspect past codebases and revive useful ideas.',
    steps: [
      {
        badge: 'Step 1 • Curated Index',
        title: 'Searchable Directory of Archived Projects',
        detail:
          'Organizes notable inactive and archived open-source repositories in a clean browsing interface.',
        channel: 'Live Directory (gitgraveyard.xyz)',
        resultTitle: 'Browse Forgotten Open-Source Tools by Category',
        resultBody:
          'Lets developers quickly discover useful projects that stopped receiving updates.'
      },
      {
        badge: 'Step 2 • Revival Context',
        title: 'Project History & Fork Insights',
        detail:
          'Shows why a project mattered and gives builders context to fork or rebuild it.',
        channel: 'Repository Card',
        resultTitle: 'Inspect History & Revive Useful Codebases',
        resultBody:
          'Turns abandoned repositories into starting points for new tools.'
      }
    ]
  }
];

const TESTIMONIALS = [
  {
    quote:
      'Instead of losing track of session requests, calendar slots, and payment balances across busy WhatsApp chats, bookings now log and update with clear step-by-step control.',
    author: 'Studio Operations — DAW Studios',
    context: 'Gbagada • Booking, Calendar & Receipt Flow',
    metric: '7 Automated Steps'
  },
  {
    quote:
      'Tracking daily bread batches, distributor credit balances, and closing cash vs. transfer totals is vastly clearer than flipping through handwritten pages after a long run.',
    author: 'Bakery Proprietor — Bakery Ledger',
    context: 'Daily Production & Distributor Debt Tracking',
    metric: 'Real-Time Debt & Cash View'
  },
  {
    quote:
      'Putting event equipment rentals, deposits, and remaining balances into a clean shareable invoice saves time on quotes and makes billing look sharp from the first send.',
    author: 'Sound Engineering Lead — Vintage Productions',
    context: 'Event Billing & Quote Workflow',
    metric: 'Instant Shareable Invoices'
  }
];

const BRUTAL_FAQS = [
  {
    q: 'If I’m asleep, in traffic, or stuck with another customer, does my business still take orders and bookings properly?',
    pain: 'Every hour a buyer or client waits for a price, slot check, or reply in WhatsApp is another hour they lose interest—or order from a competitor who answered faster.',
    fix: 'Orders, inquiries, and bookings are captured cleanly, slots/portions are locked automatically, and instant confirmations/alerts fire without waiting for you to pick up your phone.'
  },
  {
    q: 'What happens when a customer bargains hard or sends less money than we agreed on?',
    pain: 'Quick glances at transfer alerts, verbal discounts in chat, and unverified receipts let short payments slip through—turning a "sale" into lost margin.',
    fix: 'Bargain requests alert you directly for approval, payment details send once agreed, and receipt checks flag shortfalls so remaining balances aren’t missed.'
  },
  {
    q: 'At the end of the day, how do I know money wasn’t pocketed, miscounted, or lost in old chats?',
    pain: 'Guessing numbers from scattered messages or half-updated notebooks leaves you blind to missing cash, unrecorded orders, or silent leaks at closing time.',
    fix: 'Structured order/booking logs, stock/balance tracking, and clear summaries put exact numbers in one place so discrepancies stand out fast.'
  },
  {
    q: 'How do I stop people from taking stock, loaves, items, or slots on credit/promise and dragging payment for weeks?',
    pain: 'Letting distributors, regular buyers, or walk-ins take value on trust without clean tracking turns your working capital into slow, forgotten debts nobody chases properly.',
    fix: 'Balances, partial payments, and deposits are tracked systematically so you always see who owes what instead of realizing weeks later your cash is tied up.'
  },
  {
    q: 'How much money am I losing right now just from messy WhatsApp back-and-forth—\'How much?\', \'Where are you?\', \'Is it available?\', \'Sent\'?',
    pain: 'Spending hours every day answering the same repetitive questions and hunting for proof of payment steals time you should spend growing the business or serving customers—while still letting orders drop.',
    fix: 'Structured flows handle routine details, lock availability, and route clear summaries straight to the right person so you stop living inside chaotic chat threads.'
  }
];

let activeFilter = 'ALL';
let revealObserver = null;
let scrollRafId = null;

// Modal Step-Runner State
let currentModalItem = null;
let currentStepIndex = 0;
let autoPlayTimer = null;

// Interactive Kinetic Signal Canvas (Hero Animation)
function initOpsOrbitCanvas() {
  const canvas = document.getElementById('opsOrbitCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let width = 0;
  let height = 0;
  let dpr = 1;
  let pointer = { x: 0.5, y: 0.5, active: false };

  const nodes = [
    { label: 'Order / Booking', angle: -Math.PI * 0.75, color: '#111827' },
    { label: 'Stock Lock', angle: -Math.PI * 0.25, color: '#D97706' },
    { label: 'WhatsApp Alert', angle: Math.PI * 0.25, color: '#111827' },
    { label: 'Payment Check', angle: Math.PI * 0.75, color: '#D97706' }
  ];

  function resize() {
    const rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = rect.width;
    height = rect.height;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  canvas.addEventListener('pointermove', (e) => {
    const rect = canvas.getBoundingClientRect();
    pointer.x = (e.clientX - rect.left) / Math.max(1, rect.width);
    pointer.y = (e.clientY - rect.top) / Math.max(1, rect.height);
    pointer.active = true;
  });

  canvas.addEventListener('pointerleave', () => {
    pointer.active = false;
  });

  window.addEventListener('resize', resize, { passive: true });
  resize();

  function draw(now) {
    const t = prefersReducedMotion ? 0 : now * 0.001;
    const scrollBoost = Math.min(1.4, (window.scrollY || 0) * 0.0015);
    ctx.clearRect(0, 0, width, height);

    const tiltX = pointer.active ? (pointer.x - 0.5) * 18 : Math.sin(t * 0.6) * 5;
    const tiltY = pointer.active ? (pointer.y - 0.5) * 14 : Math.cos(t * 0.5) * 4;
    const cx = width * 0.5 + tiltX;
    const cy = height * 0.5 + tiltY;
    const baseRadius = Math.min(width, height) * 0.34;

    ctx.fillStyle = '#E5E7EB';
    const gap = 22;
    for (let gx = gap; gx < width; gx += gap) {
      for (let gy = gap; gy < height; gy += gap) {
        ctx.beginPath();
        ctx.arc(gx, gy, 1, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    [0.55, 0.85, 1.12].forEach((scale, idx) => {
      ctx.beginPath();
      ctx.arc(cx, cy, baseRadius * scale, 0, Math.PI * 2);
      ctx.strokeStyle = idx === 1 ? 'rgba(217, 119, 6, 0.28)' : 'rgba(17, 24, 39, 0.10)';
      ctx.lineWidth = idx === 1 ? 1.5 : 1;
      ctx.setLineDash(idx === 2 ? [4, 6] : []);
      ctx.stroke();
      ctx.setLineDash([]);
    });

    const pulseProgress = (t * 0.55 + scrollBoost) % 1;
    ctx.beginPath();
    ctx.arc(cx, cy, 18 + pulseProgress * baseRadius * 0.95, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(217, 119, 6, ${(1 - pulseProgress) * 0.45})`;
    ctx.lineWidth = 2;
    ctx.stroke();

    nodes.forEach((node, idx) => {
      const orbitAngle = node.angle + t * 0.35 + scrollBoost;
      const nx = cx + Math.cos(orbitAngle) * baseRadius;
      const ny = cy + Math.sin(orbitAngle) * baseRadius;

      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(nx, ny);
      ctx.strokeStyle = 'rgba(17, 24, 39, 0.16)';
      ctx.lineWidth = 1.25;
      ctx.stroke();

      const packetT = (t * 0.9 + idx * 0.25) % 1;
      const px = cx + (nx - cx) * packetT;
      const py = cy + (ny - cy) * packetT;
      ctx.beginPath();
      ctx.arc(px, py, 3, 0, Math.PI * 2);
      ctx.fillStyle = '#D97706';
      ctx.fill();

      ctx.font = '600 10px Inter, sans-serif';
      const textWidth = ctx.measureText(node.label).width;
      const pillW = textWidth + 16;
      const pillH = 22;

      ctx.fillStyle = '#FFFFFF';
      ctx.strokeStyle = node.color === '#D97706' ? '#D97706' : '#D1D5DB';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.roundRect(nx - pillW / 2, ny - pillH / 2, pillW, pillH, 999);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#111827';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(node.label, nx, ny + 0.5);
    });

    ctx.beginPath();
    ctx.arc(cx, cy, 24, 0, Math.PI * 2);
    ctx.fillStyle = '#111827';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(cx, cy, 28, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(217, 119, 6, 0.45)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = '#FFFFFF';
    ctx.font = '700 10px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('MUKTY', cx, cy + 0.5);

    if (!prefersReducedMotion) {
      window.requestAnimationFrame(draw);
    }
  }

  window.requestAnimationFrame(draw);
}

function updateScrollChoreography() {
  scrollRafId = null;
  const scrollTop = window.scrollY || window.pageYOffset || 0;
  const docHeight = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  const pct = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));

  const progressBar = document.getElementById('scrollProgressBar');
  const topHeading = document.getElementById('topSystemsHeading');
  const aiHeading = document.getElementById('aiAutomationHeading');
  const otherHeading = document.getElementById('otherBuildsHeading');

  if (progressBar) {
    progressBar.style.width = `${pct.toFixed(2)}%`;
  }
  [topHeading, aiHeading, otherHeading].forEach((heading) => {
    if (!heading) return;
    const rect = heading.getBoundingClientRect();
    const offset = Math.max(-16, Math.min(16, (rect.top - window.innerHeight * 0.45) * 0.035));
    heading.style.transform = `translate3d(${(-offset * 0.45).toFixed(1)}px, 0, 0)`;
  });

  document.querySelectorAll('.system-card').forEach((card, idx) => {
    const rect = card.getBoundingClientRect();
    const cardCenter = rect.top + rect.height * 0.5;
    const norm = (cardCenter - window.innerHeight * 0.5) / window.innerHeight;
    const direction = idx % 2 === 0 ? -1 : 1;
    const shift = Math.max(-7, Math.min(7, norm * 9 * direction));
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
            class="text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-lg bg-[#111827] text-[#FFFFFF] hover:bg-[#D97706] transition"
          >
            Open Live Site ↗
          </a>`
        : `<span class="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#F3F4F6] text-[#4B5563]">
            Live Client Workflow
          </span>`;

      return `
        <article class="${spanClass} system-card scroll-reveal rounded-2xl border border-[#E5E7EB] bg-[#FFFFFF] hover:border-[#D97706] flex flex-col justify-between p-6 sm:p-7 space-y-6">
          <div class="space-y-4">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <span class="text-xs font-bold uppercase tracking-wider text-[#D97706]">
                ${sys.number} &bull; ${sys.tag}
              </span>
            </div>

            <div>
              <h3 class="font-display text-xl sm:text-2xl font-extrabold tracking-tight text-[#111827]">${sys.title}</h3>
              <p class="text-xs sm:text-sm font-medium text-[#6B7280] mt-1">${sys.subtitle}</p>
            </div>

            <div class="space-y-3 pt-1">
              <div class="p-4 rounded-xl bg-[#FAFAFA] border border-[#F3F4F6]">
                <p class="text-[11px] font-bold uppercase tracking-wider text-[#6B7280] mb-1">Business Problem Solved</p>
                <p class="text-sm text-[#1F2937] leading-relaxed">${sys.leakStopped}</p>
              </div>

              <div class="p-4 rounded-xl bg-[#FFFBEB] border border-[#FDE68A]">
                <p class="text-[11px] font-bold uppercase tracking-wider text-[#B45309] mb-1">What Runs Automatically</p>
                <p class="text-sm text-[#374151] leading-relaxed">${sys.automationNote}</p>
              </div>
            </div>
          </div>

          <div class="pt-4 border-t border-[#F3F4F6] flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onclick="openWorkflowModal('${sys.id}', 'TOP')"
              class="text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-lg border border-[#D1D5DB] text-[#111827] hover:border-[#111827] bg-[#FFFFFF] transition"
            >
              See How It Works (${sys.steps.length} Steps) &#9654;
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

function renderAiCapabilities() {
  const grid = document.getElementById('aiCapabilitiesGrid');
  if (!grid) return;

  grid.innerHTML = AI_CAPABILITIES.map(
    (cap) => `
      <article class="system-card scroll-reveal rounded-2xl border border-[#E5E7EB] bg-[#FFFFFF] hover:border-[#111827] p-6 flex flex-col justify-between space-y-4">
        <div class="space-y-2.5">
          <div class="flex items-center justify-between">
            <span class="text-xs font-extrabold uppercase tracking-wider text-[#D97706]">Capability ${cap.code}</span>
          </div>
          <h3 class="font-display text-lg font-extrabold text-[#111827]">${cap.title}</h3>
          <p class="text-sm text-[#4B5563] leading-relaxed">${cap.summary}</p>
        </div>
        <div class="pt-3 border-t border-[#F3F4F6]">
          <p class="text-xs font-semibold text-[#111827]">${cap.outcome}</p>
        </div>
      </article>
    `
  ).join('');

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
          class="text-xs font-bold text-[#111827] hover:text-[#D97706] transition"
        >
          Visit Site ↗
        </a>`
      : `<span class="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#F3F4F6] text-[#6B7280]">Private / Client Build</span>`;

    return `
      <article class="system-card scroll-reveal rounded-2xl border border-[#E5E7EB] bg-[#FFFFFF] hover:border-[#111827] p-6 flex flex-col justify-between space-y-5">
        <div class="space-y-2.5">
          <div class="flex items-center justify-between gap-2">
            <span class="text-xs font-bold uppercase tracking-wider text-[#D97706]">${item.tag}</span>
            ${actionLink}
          </div>
          <h3 class="font-display text-lg font-extrabold text-[#111827]">${item.title}</h3>
          <p class="text-sm text-[#4B5563] leading-relaxed">${item.summary}</p>
        </div>

        <div class="pt-3 border-t border-[#F3F4F6] flex items-center justify-between">
          <button
            type="button"
            onclick="openWorkflowModal('${item.id}', 'OTHER')"
            class="text-xs sm:text-sm font-semibold text-[#111827] hover:text-[#D97706] transition"
          >
            Preview Customer Flow (${item.steps.length} Steps) &rarr;
          </button>
        </div>
      </article>
    `;
  }).join('');

  observeScrollElements();
  updateScrollChoreography();
}

function renderTestimonials() {
  const grid = document.getElementById('testimonialsGrid');
  if (!grid) return;

  grid.innerHTML = TESTIMONIALS.map(
    (t) => `
      <article class="system-card scroll-reveal rounded-2xl border border-[#E5E7EB] bg-[#FFFFFF] p-6 flex flex-col justify-between space-y-5">
        <div class="space-y-3">
          <span class="inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FEF3C7] text-[#92400E]">
            ${t.metric}
          </span>
          <p class="text-sm text-[#1F2937] leading-relaxed">“${t.quote}”</p>
        </div>
        <div class="pt-3 border-t border-[#F3F4F6]">
          <p class="text-xs font-bold text-[#111827]">${t.author}</p>
          <p class="text-xs text-[#6B7280] mt-0.5">${t.context}</p>
        </div>
      </article>
    `
  ).join('');

  observeScrollElements();
  updateScrollChoreography();
}

function renderFaqAccordion() {
  const container = document.getElementById('faqAccordion');
  if (!container) return;

  container.innerHTML = BRUTAL_FAQS.map((item, idx) => {
    const isFirst = idx === 0;
    return `
      <div class="scroll-reveal rounded-2xl border border-[#E5E7EB] bg-[#FFFFFF] overflow-hidden">
        <button
          type="button"
          aria-expanded="${isFirst ? 'true' : 'false'}"
          onclick="toggleFaqItem(${idx})"
          class="w-full text-left px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 hover:bg-[#FAFAFA] transition"
        >
          <span class="font-display text-sm sm:text-base font-bold text-[#111827] leading-snug">
            0${idx + 1}. ${item.q}
          </span>
          <span id="faqIcon-${idx}" class="text-lg font-bold text-[#D97706] shrink-0">
            ${isFirst ? '−' : '+'}
          </span>
        </button>
        <div id="faqPanel-${idx}" class="${isFirst ? '' : 'hidden'} px-5 pb-5 sm:px-6 sm:pb-6 pt-1 border-t border-[#F3F4F6] grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-3.5 rounded-xl bg-[#FAFAFA] border border-[#F3F4F6]">
            <p class="text-[11px] font-bold uppercase tracking-wider text-[#6B7280] mb-1">The Pain</p>
            <p class="text-sm text-[#374151] leading-relaxed">${item.pain}</p>
          </div>
          <div class="p-3.5 rounded-xl bg-[#FFFBEB] border border-[#FDE68A]">
            <p class="text-[11px] font-bold uppercase tracking-wider text-[#B45309] mb-1">How The System Fixes It</p>
            <p class="text-sm text-[#1F2937] leading-relaxed">${item.fix}</p>
          </div>
        </div>
      </div>
    `;
  }).join('');

  observeScrollElements();
}

function toggleFaqItem(idx) {
  const panel = document.getElementById(`faqPanel-${idx}`);
  const icon = document.getElementById(`faqIcon-${idx}`);
  if (!panel || !icon) return;

  const isOpen = !panel.classList.contains('hidden');
  panel.classList.toggle('hidden', isOpen);
  icon.textContent = isOpen ? '+' : '−';
}

function filterTopSystems(filter) {
  activeFilter = filter;
  document.querySelectorAll('.filter-btn').forEach((btn) => {
    const isSelected = btn.getAttribute('data-filter') === filter;
    btn.className = isSelected
      ? 'filter-btn text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg bg-[#111827] text-[#FFFFFF] transition'
      : 'filter-btn text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg bg-[#FFFFFF] border border-[#D1D5DB] text-[#374151] hover:border-[#111827] transition';
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
    btn.textContent = 'Auto-Play ▶';
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
  }, 1800);
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

  document.getElementById('stepCounter').textContent = `Step ${currentStepIndex + 1} of ${total}`;
  document.getElementById('stepPrevBtn').disabled = currentStepIndex === 0;
  document.getElementById('stepNextBtn').disabled = currentStepIndex === total - 1;

  const track = document.getElementById('stepProgressTrack');
  track.style.gridTemplateColumns = `repeat(${total}, minmax(0, 1fr))`;
  track.innerHTML = steps
    .map((_, idx) => {
      const stateClass =
        idx < currentStepIndex
          ? 'bg-[#D97706]/55'
          : idx === currentStepIndex
            ? 'bg-[#D97706]'
            : 'bg-[#E5E7EB]';
      return `<button
        type="button"
        aria-label="Go to step ${idx + 1}"
        onclick="selectModalStep(${idx})"
        class="h-1.5 rounded-full ${stateClass} transition-colors"
      ></button>`;
    })
    .join('');

  const stepsList = document.getElementById('modalSteps');
  stepsList.innerHTML = steps
    .map((step, index) => {
      const isCurrent = index === currentStepIndex;
      const isDone = index < currentStepIndex;
      const statusMark = isCurrent ? 'Viewing' : isDone ? 'Done' : `Step ${index + 1}`;
      return `
        <li>
          <button
            type="button"
            onclick="selectModalStep(${index})"
            class="node-step-btn w-full text-left flex items-center justify-between gap-3 p-3 rounded-xl border border-[#E5E7EB] bg-[#FFFFFF] hover:border-[#111827] ${isCurrent ? 'is-active' : ''}"
          >
            <div class="flex items-center gap-2.5 min-w-0">
              <span class="text-xs font-extrabold ${isCurrent ? 'text-[#B45309]' : 'text-[#6B7280]'} shrink-0">
                0${index + 1}
              </span>
              <span class="text-xs sm:text-sm font-semibold truncate ${isCurrent ? 'text-[#111827]' : 'text-[#374151]'}">
                ${step.title}
              </span>
            </div>
            <span class="text-[11px] font-semibold shrink-0 ${isCurrent ? 'text-[#B45309]' : 'text-[#9CA3AF]'}">
              ${statusMark}
            </span>
          </button>
        </li>
      `;
    })
    .join('');

  document.getElementById('activeNodeBadge').textContent = activeStep.badge;
  document.getElementById('activeNodeStatus').textContent =
    currentStepIndex === total - 1 ? 'Final Outcome' : `Step ${currentStepIndex + 1} of ${total}`;
  document.getElementById('activeNodeTitle').textContent = activeStep.title;
  document.getElementById('activeNodeDesc').textContent = activeStep.detail;
  document.getElementById('resultChannelLabel').textContent = activeStep.channel;
  document.getElementById('activeNodeResultTitle').textContent = activeStep.resultTitle;
  document.getElementById('activeNodeResultBody').textContent = activeStep.resultBody;
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
    `Hi Mukty, I checked out "${item.title}" on your portfolio and want a similar system set up for my business.`
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
renderAiCapabilities();
renderOtherBuilds();
renderTestimonials();
renderFaqAccordion();
initScrollEffects();
initOpsOrbitCanvas();