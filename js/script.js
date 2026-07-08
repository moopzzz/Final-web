/* =========================================================
   🔧 EDIT ME — everything you'll want to personalize lives here
   ========================================================= */
const CONFIG = {
  sisterName: "Sister", // put her real name here

  // Bilingual wishes that float across the screen (Arabic + English)
  wishes: [
    { ar: "عيد ميلاد سعيد", en: "Happy Birthday!" },
    { ar: "كل عام وأنتِ بخير", en: "May you be well every year" },
    { ar: "بارك الله في عمرك", en: "May Allah bless your years" },
    { ar: "أطال الله عمرك", en: "May Allah lengthen your life" },
    { ar: "سنة حلوة يا قمر", en: "Sweet year, my moon" },
    { ar: "دايماً في تقدم ونجاح", en: "Always moving forward and succeeding" },
    { ar: "الله يهنيكِ بعمرك", en: "May Allah grant you happiness in your life" },
    { ar: "أجمل الأمنيات لكِ", en: "The loveliest wishes for you" },
    { ar: "تستاهلي كل خير", en: "You deserve all good things" },
    { ar: "كل سنة وانتِ طيبة", en: "Every year, you're doing well" },
    { ar: "نورتِ حياتنا", en: "You light up our lives" },
    { ar: "أحلى الليالي لكِ", en: "The sweetest nights for you" }
  ],

  // 🖼️ IMAGES — 20 spiral photos. File location: assets/images/spiral/
  // Required size: 600 x 750 px (portrait, 4:5 ratio), JPG or PNG.
  // Keep the same file names or update the paths below to match your files.
  spiralImages: [
    "assets/images/spiral/spiral-01.jpg","assets/images/spiral/spiral-02.jpg",
    "assets/images/spiral/spiral-03.jpg","assets/images/spiral/spiral-04.jpg",
    "assets/images/spiral/spiral-05.jpg","assets/images/spiral/spiral-06.jpg",
    "assets/images/spiral/spiral-07.jpg","assets/images/spiral/spiral-08.jpg",
    "assets/images/spiral/spiral-09.jpg","assets/images/spiral/spiral-10.jpg",
    "assets/images/spiral/spiral-11.jpg","assets/images/spiral/spiral-12.jpg",
    "assets/images/spiral/spiral-13.jpg","assets/images/spiral/spiral-14.jpg",
    "assets/images/spiral/spiral-15.jpg","assets/images/spiral/spiral-16.jpg",
    "assets/images/spiral/spiral-17.jpg","assets/images/spiral/spiral-18.jpg",
    "assets/images/spiral/spiral-19.jpg","assets/images/spiral/spiral-20.jpg"
  ],

  // 🖼️ IMAGES — 12 poster photos. File location: assets/images/posters/
  // Required size: 900 x 1260 px (portrait, 5:7 ratio), JPG or PNG.
  posterImages: [
    { src: "assets/images/posters/poster-01.jpg", ar: "حفلة سعيدة", en: "Happy Celebration" },
    { src: "assets/images/posters/poster-02.jpg", ar: "أختي وصديقتي", en: "My Sister, My Friend" },
    { src: "assets/images/posters/poster-03.jpg", ar: "وقت الكيك", en: "Cake Time" },
    { src: "assets/images/posters/poster-04.jpg", ar: "ذكريات جميلة", en: "Beautiful Memories" },
    { src: "assets/images/posters/poster-05.jpg", ar: "أجمل يوم", en: "Best Day Ever" },
    { src: "assets/images/posters/poster-06.jpg", ar: "أخوات للأبد", en: "Sisters Forever" },
    { src: "assets/images/posters/poster-07.jpg", ar: "احتفال", en: "Celebration" },
    { src: "assets/images/posters/poster-08.jpg", ar: "لحظة ذهبية", en: "Golden Moment" },
    { src: "assets/images/posters/poster-09.jpg", ar: "ضحكة صافية", en: "Pure Laughter" },
    { src: "assets/images/posters/poster-10.jpg", ar: "قلب طيب", en: "Kind Heart" },
    { src: "assets/images/posters/poster-11.jpg", ar: "رحلة جميلة", en: "Beautiful Journey" },
    { src: "assets/images/posters/poster-12.jpg", ar: "بسمة دائمة", en: "Forever Smiling" }
  ],

  // 🎬 VIDEO — file location: assets/video/birthday-video.mp4
  // Required: portrait MP4 (H.264), 1080 x 1920 px (9:16 ratio) recommended.
  // Poster/thumbnail image: assets/images/video-poster.jpg (1080 x 1920 px).
  videoSrc: "assets/video/birthday-video.mp4",
  videoPoster: "assets/images/video-poster.jpg",

  // 🎂 Number of candles on the cake (also = number of clicks to blow them all out)
  candleCount: 5
};

document.getElementById('sisterNameEl').textContent = CONFIG.sisterName;

/* =========================================================
   Hero ambient drifting stars/crescents
   ========================================================= */
(function heroDeco(){
  const holder = document.getElementById('heroDeco');
  const glyphs = ['✦', '✧', '☾', '◆'];
  for(let i=0;i<18;i++){
    const el = document.createElement('div');
    el.className = 'drift';
    el.textContent = glyphs[i % glyphs.length];
    el.style.fontSize = (12 + Math.random()*14) + 'px';
    el.style.left = (Math.random()*100)+'%';
    el.style.animationDuration = (10 + Math.random()*10)+'s';
    el.style.animationDelay = (Math.random()*10)+'s';
    holder.appendChild(el);
  }
})();

/* =========================================================
   FLOATING BALLOONS (real CSS balloon shapes)
   ========================================================= */
(function balloons(){
  const layer = document.getElementById('balloonLayer');
  const colors = ['#ff7fa6', '#d9b45c', '#b79cff', '#f3dfa0', '#2f7d63'];
  for(let i=0;i<10;i++){
    const b = document.createElement('div');
    b.className = 'balloon';
    b.style.left = (Math.random()*94)+'%';
    b.style.color = colors[i % colors.length];
    b.style.background = colors[i % colors.length];
    b.style.animationDuration = (14 + Math.random()*10)+'s';
    b.style.animationDelay = (Math.random()*14)+'s';
    layer.appendChild(b);
  }
})();

/* =========================================================
   CURSOR SPARKLE TRAIL (throttled)
   ========================================================= */
(function sparkleTrail(){
  let last = 0;
  window.addEventListener('pointermove', (e) => {
    const now = Date.now();
    if(now - last < 110) return;
    last = now;
    const s = document.createElement('div');
    s.className = 'sparkle-trail';
    s.textContent = Math.random() > 0.5 ? '✦' : '✧';
    s.style.left = e.clientX + 'px';
    s.style.top = e.clientY + 'px';
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 950);
  }, { passive:true });
})();

/* =========================================================
   MEMORY SPIRAL — build spiral photos in 3D
   ========================================================= */
const spiralRing = document.getElementById('spiralRing');
const N_SPIRAL = CONFIG.spiralImages.length;
const TURNS = 2.8;
const RADIUS = window.innerWidth < 640 ? 140 : 250;
const V_SPACING = window.innerWidth < 640 ? 22 : 30;
const spiralPhotos = [];

for(let i=0;i<N_SPIRAL;i++){
  const angleDeg = i * (360*TURNS/N_SPIRAL);
  const y = (N_SPIRAL/2 - i) * V_SPACING;
  const wrap = document.createElement('div');
  wrap.className = 'spiral-photo';
  const img = document.createElement('img');
  img.src = CONFIG.spiralImages[i];
  img.alt = 'Memory photo ' + (i+1);
  img.loading = 'lazy';
  wrap.appendChild(img);
  spiralRing.appendChild(wrap);
  spiralPhotos.push({ el: wrap, angleDeg, y });
}

function layoutSpiral(ringRotationDeg, liftPx){
  spiralPhotos.forEach(p => {
    const rad = (p.angleDeg + ringRotationDeg) * Math.PI/180;
    const x = Math.sin(rad) * RADIUS;
    const z = Math.cos(rad) * RADIUS - RADIUS;
    const facing = Math.cos(rad);
    const scale = 0.62 + (facing+1)/2 * 0.55;
    const opacity = 0.28 + (facing+1)/2 * 0.72;
    const zIndex = Math.round((facing+1)*100);
    p.el.style.transform = `translate3d(${x}px, ${p.y + liftPx}px, ${z}px) rotateY(${-(p.angleDeg+ringRotationDeg)}deg) scale(${scale})`;
    p.el.style.opacity = opacity;
    p.el.style.zIndex = zIndex;
  });
}
layoutSpiral(0,0);

const spiralSection = document.getElementById('spiralSection');
let ticking = false;
function updateSpiralOnScroll(){
  const rect = spiralSection.getBoundingClientRect();
  const sectionHeight = spiralSection.offsetHeight - window.innerHeight;
  let progress = -rect.top / sectionHeight;
  progress = Math.max(0, Math.min(1, progress));
  const ringRotation = progress * 620;
  const lift = 60 - progress * 120;
  layoutSpiral(ringRotation, lift);
  ticking = false;
}
window.addEventListener('scroll', () => {
  if(!ticking){ requestAnimationFrame(updateSpiralOnScroll); ticking = true; }
}, { passive:true });
updateSpiralOnScroll();

/* =========================================================
   POSTER CAROUSEL — auto-rotating 3D coverflow
   ========================================================= */
const posterRing = document.getElementById('posterRing');
const N_POSTER = CONFIG.posterImages.length;
const POSTER_RADIUS = window.innerWidth < 640 ? 210 : 380;
const posterCards = [];

CONFIG.posterImages.forEach((p, i) => {
  const angleDeg = i * (360/N_POSTER);
  const card = document.createElement('div');
  card.className = 'poster-card';
  const img = document.createElement('img');
  img.src = p.src;
  img.alt = p.en;
  img.loading = 'lazy';
  const label = document.createElement('div');
  label.className = 'poster-label';
  const arSpan = document.createElement('span');
  arSpan.className = 'ar';
  arSpan.textContent = p.ar;
  const enSpan = document.createElement('span');
  enSpan.className = 'en';
  enSpan.textContent = p.en;
  label.appendChild(arSpan);
  label.appendChild(enSpan);
  card.appendChild(img);
  card.appendChild(label);
  posterRing.appendChild(card);
  posterCards.push({ el: card, angleDeg });
});

let posterAngle = 0;
let posterPaused = false;
const posterStage = document.getElementById('posterStage');
posterStage.addEventListener('mouseenter', () => posterPaused = true);
posterStage.addEventListener('mouseleave', () => posterPaused = false);

function layoutPosters(){
  posterCards.forEach(p => {
    const rad = (p.angleDeg + posterAngle) * Math.PI/180;
    const x = Math.sin(rad) * POSTER_RADIUS;
    const z = Math.cos(rad) * POSTER_RADIUS;
    const facing = Math.cos(rad);
    const scale = 0.7 + (facing+1)/2 * 0.4;
    const opacity = 0.35 + (facing+1)/2 * 0.65;
    const zIndex = Math.round((facing+1)*100);
    p.el.style.transform = `translate3d(${x}px, 0px, ${z - POSTER_RADIUS}px) rotateY(${-(p.angleDeg+posterAngle)}deg) scale(${scale})`;
    p.el.style.opacity = opacity;
    p.el.style.zIndex = zIndex;
  });
}

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function animatePosters(){
  if(!posterPaused && !reduceMotion){
    posterAngle += 0.12;
    layoutPosters();
  }
  requestAnimationFrame(animatePosters);
}
layoutPosters();
animatePosters();

/* =========================================================
   FLOATING WISH BUBBLES (Arabic + English)
   ========================================================= */
const wishLayer = document.getElementById('wishLayer');
function spawnWish(){
  const w = CONFIG.wishes[Math.floor(Math.random()*CONFIG.wishes.length)];
  const bubble = document.createElement('div');
  bubble.className = 'wish-bubble';
  const arEl = document.createElement('span');
  arEl.className = 'ar';
  arEl.setAttribute('dir','rtl');
  arEl.textContent = w.ar;
  const enEl = document.createElement('span');
  enEl.className = 'en';
  enEl.textContent = w.en;
  bubble.appendChild(arEl);
  bubble.appendChild(enEl);
  const left = 6 + Math.random()*68;
  const top = 20 + Math.random()*62;
  bubble.style.left = left + 'vw';
  bubble.style.top = top + 'vh';
  wishLayer.appendChild(bubble);
  setTimeout(() => bubble.remove(), 6600);
}
setInterval(spawnWish, 2700);
setTimeout(spawnWish, 800);

/* =========================================================
   CONFETTI BURST (shared helper)
   ========================================================= */
function confettiBurst(cx, cy, count){
  const glyphs = ['✦','✧','☾','◆'];
  for(let i=0;i<count;i++){
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.textContent = glyphs[Math.floor(Math.random()*glyphs.length)];
    piece.style.left = cx + 'px';
    piece.style.top = cy + 'px';
    piece.style.opacity = '1';
    document.body.appendChild(piece);
    const angle = Math.random()*Math.PI*2;
    const dist = 120 + Math.random()*260;
    const dx = Math.cos(angle)*dist;
    const dy = Math.sin(angle)*dist + 80;
    const rot = Math.random()*720 - 360;
    requestAnimationFrame(() => {
      piece.style.transform = `translate(${dx}px, ${dy}px) rotate(${rot}deg)`;
      piece.style.opacity = '0';
    });
    setTimeout(() => piece.remove(), 1300);
  }
}

/* =========================================================
   MAKE-A-WISH BUTTON
   ========================================================= */
document.getElementById('makeWishBtn').addEventListener('click', (e) => {
  const rect = e.target.getBoundingClientRect();
  confettiBurst(rect.left + rect.width/2, rect.top + rect.height/2, 40);
  spawnWish();
});

/* =========================================================
   BIRTHDAY CAKE — click each candle to blow it out
   ========================================================= */
(function cake(){
  const row = document.getElementById('cakeCandles');
  const success = document.getElementById('cakeSuccess');
  let litCount = CONFIG.candleCount;
  for(let i=0;i<CONFIG.candleCount;i++){
    const candle = document.createElement('div');
    candle.className = 'candle';
    candle.innerHTML = '<span class="flame"></span>';
    candle.addEventListener('click', () => {
      if(candle.classList.contains('out')) return;
      candle.classList.add('out');
      litCount--;
      const r = candle.getBoundingClientRect();
      confettiBurst(r.left + r.width/2, r.top, 8);
      if(litCount === 0){
        success.classList.add('show');
        const stageRect = row.getBoundingClientRect();
        confettiBurst(stageRect.left + stageRect.width/2, stageRect.top, 50);
      }
    });
    row.appendChild(candle);
  }
})();

/* =========================================================
   GIFT BOX — click to open and reveal a message
   ========================================================= */
(function giftBox(){
  const box = document.getElementById('giftBox');
  const message = document.getElementById('giftMessage');
  box.addEventListener('click', () => {
    if(box.classList.contains('open')) return;
    box.classList.add('open');
    message.classList.add('show');
    const r = box.getBoundingClientRect();
    confettiBurst(r.left + r.width/2, r.top, 36);
  });
})();

/* =========================================================
   VIDEO — 3D mouse-tilt effect on the portrait frame
   ========================================================= */
const videoFrame = document.getElementById('videoFrame');
const videoFrameWrap = document.querySelector('.video-frame-wrap');
videoFrameWrap.addEventListener('mousemove', (e) => {
  const rect = videoFrameWrap.getBoundingClientRect();
  const px = (e.clientX - rect.left) / rect.width;
  const py = (e.clientY - rect.top) / rect.height;
  const rotateY = (px - 0.5) * 14;
  const rotateX = (0.5 - py) * 14;
  videoFrame.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});
videoFrameWrap.addEventListener('mouseleave', () => {
  videoFrame.style.transform = 'rotateX(0deg) rotateY(0deg)';
});
videoFrameWrap.addEventListener('touchmove', (e) => {
  const touch = e.touches[0];
  const rect = videoFrameWrap.getBoundingClientRect();
  const px = (touch.clientX - rect.left) / rect.width;
  const py = (touch.clientY - rect.top) / rect.height;
  videoFrame.style.transform = `rotateX(${(0.5-py)*10}deg) rotateY(${(px-0.5)*10}deg)`;
}, { passive:true });

/* =========================================================
   SCROLL REVEAL — fade/scale/slide elements into view once
   ========================================================= */
const revealTargets = document.querySelectorAll('.reveal, .reveal-scale, .reveal-left, .reveal-right');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
revealTargets.forEach(el => revealObserver.observe(el));

/* =========================================================
   AMBIENT PARALLAX — background layers drift slower than scroll
   ========================================================= */
const latticeEl = document.querySelector('.lattice');
const starsEl = document.querySelector('.stars');
function updateParallax(){
  const y = window.scrollY;
  latticeEl.style.transform = `translateY(${y * 0.04}px)`;
  starsEl.style.transform = `translateY(${y * 0.08}px)`;
}
window.addEventListener('scroll', () => {
  requestAnimationFrame(updateParallax);
}, { passive:true });
updateParallax();

window.addEventListener('resize', () => {
  layoutPosters();
  updateSpiralOnScroll();
});
