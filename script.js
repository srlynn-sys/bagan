const TOTAL = 55;
const ring = document.getElementById('ring');
const stage = document.getElementById('stage');
const gallery = document.getElementById('gallery');
const progressBar = document.getElementById('progressBar');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');

let angle = 0;
let active = 0;
let dragging = false;
let lastX = 0;
let velocity = 0;
let autoTimer;
const step = 360 / TOTAL;
const radius = window.innerWidth < 700 ? 430 : 650;

function photoPath(i){
  return `images/photo-${String(i + 1).padStart(2, '0')}.jpg`;
}

for(let i = 0; i < TOTAL; i++){
  const card = document.createElement('article');
  card.className = 'card';
  card.style.transform = `rotateY(${i * step}deg) translateZ(${radius}px)`;
  card.innerHTML = `<img src="${photoPath(i)}" alt="Bagan travel memory ${i + 1}" loading="lazy" onerror="this.style.opacity='.12'"><div class="card-label">MEMORY ${String(i + 1).padStart(2,'0')}</div>`;
  card.addEventListener('click', () => openLightbox(i));
  ring.appendChild(card);
}

function render(){
  ring.style.transform = `translate(-50%, -50%) rotateY(${angle}deg)`;
  let nearest = Math.round(-angle / step);
  active = ((nearest % TOTAL) + TOTAL) % TOTAL;
  progressBar.style.width = `${((active + 1) / TOTAL) * 100}%`;
}

function rotateBy(n){
  angle += n * step;
  render();
}

function pointerDown(e){
  dragging = true;
  stage.classList.add('dragging');
  lastX = e.clientX;
  velocity = 0;
  stopAuto();
}
function pointerMove(e){
  if(!dragging) return;
  const dx = e.clientX - lastX;
  lastX = e.clientX;
  velocity = dx * .28;
  angle += dx * .28;
  render();
}
function pointerUp(){
  if(!dragging) return;
  dragging = false;
  stage.classList.remove('dragging');
  angle += velocity * 1.8;
  const snapped = Math.round(angle / step) * step;
  angle = snapped;
  render();
  startAuto();
}

stage.addEventListener('pointerdown', pointerDown);
stage.addEventListener('pointermove', pointerMove);
stage.addEventListener('pointerup', pointerUp);
stage.addEventListener('pointercancel', pointerUp);
stage.addEventListener('pointerleave', pointerUp);

document.getElementById('prev').addEventListener('click', () => { stopAuto(); rotateBy(1); startAuto(); });
document.getElementById('next').addEventListener('click', () => { stopAuto(); rotateBy(-1); startAuto(); });
document.getElementById('startBtn').addEventListener('click', () => gallery.scrollIntoView({behavior:'smooth'}));

document.addEventListener('keydown', e => {
  if(e.key === 'ArrowLeft') rotateBy(1);
  if(e.key === 'ArrowRight') rotateBy(-1);
  if(e.key === 'Escape') closeLightbox();
});

function openLightbox(i){
  lightboxImage.src = photoPath(i);
  lightboxCaption.textContent = `BAGAN MEMORY ${String(i + 1).padStart(2,'0')} / ${TOTAL}`;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden','false');
  stopAuto();
}
function closeLightbox(){
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden','true');
  lightboxImage.src = '';
  startAuto();
}
document.getElementById('closeLightbox').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if(e.target === lightbox) closeLightbox(); });

function startAuto(){
  clearInterval(autoTimer);
  autoTimer = setInterval(() => rotateBy(-1), 3800);
}
function stopAuto(){ clearInterval(autoTimer); }

window.addEventListener('resize', render);
render();
startAuto();
