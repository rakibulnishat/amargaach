/* ============================================
   আমারগাছ — Main JavaScript
   ============================================ */

// ── LANGUAGE DATA ──
const lang = {
  en: {
    navHow:       "How It Works",
    navFruits:    "Our Fruits",
    navFarms:     "Our Farms",
    navPackages:  "Packages",
    navWaitlist:  "Join Waitlist",
    heroBadge:    "🌿 Now Pre-booking for 2026 Season",
    heroH1a:      "Your own tree.",
    heroH1b:      "Your own harvest.",
    heroDesc:     "City life shouldn't mean losing touch with the land. Subscribe to a real fruit tree in Bangladesh — we grow it, you enjoy every fruit it delivers, fresh to your door.",
    heroCta:      "🌳 Adopt Your Tree",
    heroLink:     "See how it works →",
    stat1num:     "100%",
    stat1lbl:     "Chemical-free fruit",
    stat2num:     "48hr",
    stat2lbl:     "Farm to your door",
    stat3num:     "Yours",
    stat3lbl:     "Your own named tree",
    howLabel:     "Simple Process",
    howTitle:     "How আমারগাছ Works",
    howSub:       "Four simple steps from choosing your tree to tasting its fruit — we handle everything in between.",
    s1h:          "Choose Your Tree",
    s1p:          "Pick a fruit variety and package. We assign you a real, named tree on our partner farms in Rajshahi, Dinajpur, or Sylhet.",
    s2h:          "Watch It Grow",
    s2p:          "Regular video and photo updates of your tree through the season. See it blossom, fruit, and ripen in real time.",
    s3h:          "We Harvest",
    s3p:          "Our farm team harvests at peak ripeness — no chemicals, no cold storage. Pure, natural fruit exactly as it should be.",
    s4h:          "Delivered to You",
    s4p:          "Fresh fruit at your door in Dhaka within 48 hours of harvest. Enjoy what is truly yours.",
    fruitLabel:   "What We Grow",
    fruitTitle:   "Pick your fruit, own your tree",
    fruitSub:     "Bangladesh's finest fruits, grown by real farmers across the country's best agricultural regions.",
    mapLabel:     "Our Farm Network",
    mapTitle:     "Real farms, real trees, real Bangladesh",
    mapSub:       "We partner with trusted farmers across Bangladesh's best fruit-growing regions. Each tree has a name, a location, and an owner — you.",
    pkgLabel:     "Subscription Plans",
    pkgTitle:     "Choose your tree package",
    pkgSub:       "All packages include your named tree, regular video updates, and fresh delivery. Prices are per season.",
    whyLabel:     "Why আমারগাছ",
    whyTitle:     "More than fruit. A connection.",
    w1h:          "100% Natural, No Middlemen",
    w1p:          "Your fruit goes from the tree directly to your door. No markets, no chemicals, no cold storage. Just real food.",
    w2h:          "Supports Bangladeshi Farmers",
    w2p:          "Your subscription guarantees income for a farmer before harvest — reducing their risk and improving their livelihood.",
    w3h:          "Your Tree, Your Identity",
    w3p:          "You get a named tree with a certificate. Visit it. See it grow. Gift it to family. It is genuinely yours for the season.",
    w4h:          "Good for the Environment",
    w4p:          "Every tree you subscribe to offsets carbon, reduces food waste, and supports sustainable farming in Bangladesh.",
    revLabel:     "Early Subscribers",
    revTitle:     "What people are saying",
    ctaH2:        "Your tree is waiting for you. 🌳",
    ctaP:         "Join the waitlist today. Pre-booking opens for the 2026 mango season — spots are limited per farm.",
    ctaBtn:       "Join the Waitlist Free →",
    modalH2:      "Join the Waitlist 🌳",
    modalDesc:    "Be the first to adopt your tree when pre-booking opens. No payment needed now.",
    lblName:      "Your full name",
    lblEmail:     "Email address",
    lblPhone:     "Phone number (optional)",
    lblCity:      "Your city",
    lblFruit:     "Which fruit interests you most?",
    lblMessage:   "Any questions or special requests? (optional)",
    submitBtn:    "Secure My Spot →",
    successH3:    "You're on the list!",
    successP:     "We'll reach out as soon as pre-booking opens. Your tree is waiting for you.",
  },
  bn: {
    navHow:       "কীভাবে কাজ করে",
    navFruits:    "আমাদের ফল",
    navFarms:     "আমাদের খামার",
    navPackages:  "প্যাকেজ",
    navWaitlist:  "অপেক্ষা তালিকা",
    heroBadge:    "🌿 ২০২৬ সিজনের প্রি-বুকিং শুরু",
    heroH1a:      "আপনার নিজের গাছ।",
    heroH1b:      "আপনার নিজের ফসল।",
    heroDesc:     "শহরে থাকলেই কি মাটির সাথে সম্পর্ক শেষ? বাংলাদেশের আসল খামারে আপনার নিজের ফলের গাছ নিন — আমরা যত্ন করি, আপনি ঘরে বসে তাজা ফল পান।",
    heroCta:      "🌳 গাছ দত্তক নিন",
    heroLink:     "কীভাবে কাজ করে দেখুন →",
    stat1num:     "১০০%",
    stat1lbl:     "রাসায়নিক মুক্ত ফল",
    stat2num:     "৪৮ ঘণ্টা",
    stat2lbl:     "খামার থেকে দরজায়",
    stat3num:     "আপনার",
    stat3lbl:     "নামকরা নিজের গাছ",
    howLabel:     "সহজ প্রক্রিয়া",
    howTitle:     "আমারগাছ যেভাবে কাজ করে",
    howSub:       "গাছ বেছে নেওয়া থেকে ফল খাওয়া পর্যন্ত — মাঝখানের সব দায়িত্ব আমাদের।",
    s1h:          "গাছ বেছে নিন",
    s1p:          "ফলের ধরন ও প্যাকেজ বেছে নিন। রাজশাহী, দিনাজপুর বা সিলেটে আমাদের অংশীদার খামারে আপনার নামে একটি আসল গাছ বরাদ্দ হবে।",
    s2h:          "বাড়তে দেখুন",
    s2p:          "সিজন জুড়ে আপনার গাছের নিয়মিত ভিডিও ও ছবি পাবেন। ফুল ফোটা, ফল ধরা, পাকা — সব লাইভ দেখুন।",
    s3h:          "আমরা সংগ্রহ করি",
    s3p:          "আমাদের কৃষক দল সঠিক পরিপক্কতায় ফল সংগ্রহ করে — কোনো কেমিক্যাল নেই, কোনো কোল্ড স্টোরেজ নেই। একদম খাঁটি ফল।",
    s4h:          "আপনার দরজায়",
    s4p:          "সংগ্রহের ৪৮ ঘণ্টার মধ্যে তাজা ফল আপনার ঘরে। যা সত্যিই আপনার।",
    fruitLabel:   "আমরা যা চাষ করি",
    fruitTitle:   "ফল বেছে নিন, গাছের মালিক হন",
    fruitSub:     "বাংলাদেশের সেরা ফল, দেশের সেরা কৃষি অঞ্চলে আসল কৃষকদের হাতে চাষ করা।",
    mapLabel:     "আমাদের খামার নেটওয়ার্ক",
    mapTitle:     "আসল খামার, আসল গাছ, আসল বাংলাদেশ",
    mapSub:       "বাংলাদেশের সেরা ফল উৎপাদন অঞ্চলে বিশ্বস্ত কৃষকদের সাথে আমাদের অংশীদারিত্ব। প্রতিটি গাছের নাম আছে, ঠিকানা আছে, মালিক আছে — আপনি।",
    pkgLabel:     "সাবস্ক্রিপশন প্ল্যান",
    pkgTitle:     "আপনার গাছের প্যাকেজ বেছে নিন",
    pkgSub:       "সব প্যাকেজে আছে নামকরা গাছ, নিয়মিত ভিডিও আপডেট ও তাজা ডেলিভারি। মূল্য প্রতি সিজনের জন্য।",
    whyLabel:     "কেন আমারগাছ",
    whyTitle:     "শুধু ফল নয়। একটি সংযোগ।",
    w1h:          "১০০% প্রাকৃতিক, কোনো মধ্যস্থতাকারী নেই",
    w1p:          "আপনার ফল গাছ থেকে সরাসরি দরজায় আসে। কোনো বাজার নেই, কোনো কেমিক্যাল নেই। শুধু আসল খাবার।",
    w2h:          "বাংলাদেশি কৃষকদের সহায়তা করে",
    w2p:          "আপনার সাবস্ক্রিপশন কৃষকের আয় নিশ্চিত করে ফসলের আগেই — তাদের ঝুঁকি কমায়, জীবনমান বাড়ায়।",
    w3h:          "আপনার গাছ, আপনার পরিচয়",
    w3p:          "নামকরা গাছ ও সার্টিফিকেট পাবেন। দেখতে যান। বাড়তে দেখুন। পরিবারকে উপহার দিন। এটি সত্যিই আপনার।",
    w4h:          "পরিবেশের জন্য ভালো",
    w4p:          "আপনার প্রতিটি সাবস্ক্রাইব করা গাছ কার্বন শোষণ করে, খাদ্য অপচয় কমায় এবং টেকসই কৃষিকে সহায়তা করে।",
    revLabel:     "প্রাথমিক সদস্যরা",
    revTitle:     "তারা কী বলছেন",
    ctaH2:        "আপনার গাছ আপনার জন্য অপেক্ষা করছে। 🌳",
    ctaP:         "আজই অপেক্ষা তালিকায় যোগ দিন। ২০২৬ আমের সিজনের প্রি-বুকিং শুরু হচ্ছে — প্রতি খামারে সীমিত স্থান।",
    ctaBtn:       "বিনামূল্যে তালিকায় যোগ দিন →",
    modalH2:      "অপেক্ষা তালিকায় যোগ দিন 🌳",
    modalDesc:    "প্রি-বুকিং শুরু হলে আপনি সবার আগে জানতে পারবেন। এখন কোনো পেমেন্ট নেই।",
    lblName:      "আপনার পুরো নাম",
    lblEmail:     "ইমেইল ঠিকানা",
    lblPhone:     "ফোন নম্বর (ঐচ্ছিক)",
    lblCity:      "আপনার শহর",
    lblFruit:     "কোন ফলে আপনার সবচেয়ে বেশি আগ্রহ?",
    lblMessage:   "কোনো প্রশ্ন বা বিশেষ অনুরোধ? (ঐচ্ছিক)",
    submitBtn:    "আমার জায়গা নিশ্চিত করুন →",
    successH3:    "আপনি তালিকায় আছেন!",
    successP:     "প্রি-বুকিং শুরু হলেই আমরা যোগাযোগ করব। আপনার গাছ আপনার জন্য অপেক্ষা করছে।",
  }
};

let currentLang = 'en';

function applyLang(l) {
  const t = lang[l];
  const set = (sel, val) => {
    const el = document.querySelector(sel);
    if (el) el.textContent = val;
  };
  set('#nav-how',      t.navHow);
  set('#nav-fruits',   t.navFruits);
  set('#nav-farms',    t.navFarms);
  set('#nav-packages', t.navPackages);
  set('#nav-waitlist', t.navWaitlist);
  set('#mob-how',      t.navHow);
  set('#mob-fruits',   t.navFruits);
  set('#mob-farms',    t.navFarms);
  set('#mob-packages', t.navPackages);
  set('#mob-waitlist', t.navWaitlist);
  set('#hero-badge',   t.heroBadge);
  set('#hero-h1a',     t.heroH1a);
  set('#hero-h1b',     t.heroH1b);
  set('#hero-desc',    t.heroDesc);
  set('#hero-cta',     t.heroCta);
  set('#hero-link',    t.heroLink);
  set('#stat1-num',    t.stat1num);
  set('#stat1-lbl',    t.stat1lbl);
  set('#stat2-num',    t.stat2num);
  set('#stat2-lbl',    t.stat2lbl);
  set('#stat3-num',    t.stat3num);
  set('#stat3-lbl',    t.stat3lbl);
  set('#how-label',    t.howLabel);
  set('#how-title',    t.howTitle);
  set('#how-sub',      t.howSub);
  set('#s1-h',         t.s1h); set('#s1-p', t.s1p);
  set('#s2-h',         t.s2h); set('#s2-p', t.s2p);
  set('#s3-h',         t.s3h); set('#s3-p', t.s3p);
  set('#s4-h',         t.s4h); set('#s4-p', t.s4p);
  set('#fruit-label',  t.fruitLabel);
  set('#fruit-title',  t.fruitTitle);
  set('#fruit-sub',    t.fruitSub);
  set('#map-label',    t.mapLabel);
  set('#map-title',    t.mapTitle);
  set('#map-sub',      t.mapSub);
  set('#pkg-label',    t.pkgLabel);
  set('#pkg-title',    t.pkgTitle);
  set('#pkg-sub',      t.pkgSub);
  set('#why-label',    t.whyLabel);
  set('#why-title',    t.whyTitle);
  set('#w1-h',         t.w1h); set('#w1-p', t.w1p);
  set('#w2-h',         t.w2h); set('#w2-p', t.w2p);
  set('#w3-h',         t.w3h); set('#w3-p', t.w3p);
  set('#w4-h',         t.w4h); set('#w4-p', t.w4p);
  set('#rev-label',    t.revLabel);
  set('#rev-title',    t.revTitle);
  set('#cta-h2',       t.ctaH2);
  set('#cta-p',        t.ctaP);
  set('#cta-btn',      t.ctaBtn);
  set('#modal-h2',     t.modalH2);
  set('#modal-desc',   t.modalDesc);
  set('#lbl-name',     t.lblName);
  set('#lbl-email',    t.lblEmail);
  set('#lbl-phone',    t.lblPhone);
  set('#lbl-city',     t.lblCity);
  set('#lbl-fruit',    t.lblFruit);
  set('#lbl-message',  t.lblMessage);
  set('#submit-btn',   t.submitBtn);
  set('#success-h3',   t.successH3);
  set('#success-p',    t.successP);

  // placeholders
  const ph = (sel, val) => { const el = document.querySelector(sel); if (el) el.placeholder = val; };
  ph('#wl-name',    l === 'bn' ? 'আপনার পুরো নাম'     : 'Your full name');
  ph('#wl-email',   l === 'bn' ? 'ইমেইল ঠিকানা'       : 'Email address');
  ph('#wl-phone',   l === 'bn' ? 'ফোন নম্বর (ঐচ্ছিক)' : 'Phone number (optional)');
  ph('#wl-message', l === 'bn' ? 'কোনো প্রশ্ন আছে?'   : 'Any questions or special requests?');

  const toggle = document.getElementById('lang-toggle');
  if (toggle) toggle.textContent = l === 'en' ? 'বাংলা' : 'English';
}

function toggleLang() {
  currentLang = currentLang === 'en' ? 'bn' : 'en';
  applyLang(currentLang);
}

// ── MODAL ──
function openModal() {
  document.getElementById('modal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal').classList.remove('active');
  document.body.style.overflow = '';
}

function closeModalOutside(e) {
  if (e.target === document.getElementById('modal')) closeModal();
}

// ── WAITLIST FORM (Web3Forms) ──
async function submitWaitlist() {
  const name    = document.getElementById('wl-name').value.trim();
  const email   = document.getElementById('wl-email').value.trim();
  const phone   = document.getElementById('wl-phone').value.trim();
  const city    = document.getElementById('wl-city').value;
  const fruit   = document.getElementById('wl-fruit').value;
  const message = document.getElementById('wl-message').value.trim();

  if (!name || !email) {
    alert(currentLang === 'bn' ? 'নাম ও ইমেইল প্রয়োজন।' : 'Please enter your name and email.');
    return;
  }

  const btn = document.getElementById('submit-btn');
  btn.textContent = 'Sending…';
  btn.disabled = true;

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: '8ffd32cc-a477-4aee-86e0-588493980046',
        subject: '🌳 New আমারগাছ Waitlist Signup',
        name,
        email,
        phone,
        city,
        fruit,
        message
      })
    });

    const data = await res.json();
    if (data.success) {
      document.getElementById('modal-form').style.display = 'none';
      document.getElementById('modal-success').style.display = 'block';
    } else {
      alert('Something went wrong. Please try again.');
      btn.textContent = currentLang === 'bn' ? 'আমার জায়গা নিশ্চিত করুন →' : 'Secure My Spot →';
      btn.disabled = false;
    }
  } catch (err) {
    alert('Network error. Please check your connection.');
    btn.textContent = currentLang === 'bn' ? 'আমার জায়গা নিশ্চিত করুন →' : 'Secure My Spot →';
    btn.disabled = false;
  }
}

// ── HAMBURGER ──
function toggleMenu() {
  const ham  = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');
  ham.classList.toggle('open');
  menu.classList.toggle('open');
}

// ── NAV SCROLL SHADOW ──
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  if (window.scrollY > 10) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
});

// ── SCROLL ANIMATIONS ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
  applyLang('en');

  // close mobile menu on link click
  document.querySelectorAll('#mobile-menu a').forEach(a => {
    a.addEventListener('click', () => {
      document.getElementById('hamburger').classList.remove('open');
      document.getElementById('mobile-menu').classList.remove('open');
    });
  });

  // ESC closes modal
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
});
