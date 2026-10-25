// Personalize these links and the contact email before publishing.
const artistLinks = {
  spotify: 'https://open.spotify.com/artist/6WPVFf86HUYipZ4226Epk5',
  apple: 'https://music.apple.com/',
  youtube: 'https://youtube.com/',
  instagram: 'https://www.instagram.com/ecopraymarnofficial?mdxt=ZmZ4bXA4a2xlYnQ1',
  email: 'hello@example.com'
};
document.querySelectorAll('[data-link]').forEach(link => {
  const destination = artistLinks[link.dataset.link];
  if (destination) link.href = destination;
});
document.querySelector('#contactLink').href = `mailto:${artistLinks.email}?subject=EPM%20XXV%20enquiry`;
document.querySelector('#year').textContent = new Date().getFullYear();

const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
navToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  navToggle.textContent = open ? '×' : '☰';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.textContent = '☰';
}));

const audio = document.querySelector('#audio');
const audioFile = document.querySelector('#audioFile');
const playButton = document.querySelector('#playButton');
const seek = document.querySelector('#audioSeek');
const time = document.querySelector('#audioTime');
const title = document.querySelector('#trackTitle');
const fmt = seconds => `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(Math.floor(seconds % 60)).padStart(2, '0')}`;
audioFile.addEventListener('change', () => {
  const file = audioFile.files?.[0];
  if (!file) return;
  audio.src = URL.createObjectURL(file);
  title.textContent = file.name.replace(/\.[^.]+$/, '');
  playButton.disabled = false;
  seek.disabled = false;
  audio.load();
});
playButton.addEventListener('click', async () => {
  if (audio.paused) { try { await audio.play(); } catch {} }
  else audio.pause();
});
audio.addEventListener('play', () => { playButton.textContent = 'Ⅱ'; playButton.setAttribute('aria-label', 'Pause track'); });
audio.addEventListener('pause', () => { playButton.textContent = '▶'; playButton.setAttribute('aria-label', 'Play track'); });
audio.addEventListener('loadedmetadata', () => { time.textContent = `00:00 / ${fmt(audio.duration)}`; });
audio.addEventListener('timeupdate', () => {
  if (!Number.isFinite(audio.duration)) return;
  seek.value = String(audio.currentTime / audio.duration * 100);
  time.textContent = `${fmt(audio.currentTime)} / ${fmt(audio.duration)}`;
});
seek.addEventListener('input', () => { if (Number.isFinite(audio.duration)) audio.currentTime = Number(seek.value) / 100 * audio.duration; });

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// One sequential entrance choreography for the navigation and hero copy.
if (!reduceMotion && document.documentElement.animate) {
  const playEntrance = async () => {
    const animate = (element, frames, duration) => {
      if (!element) return Promise.resolve();
      return element.animate(frames, { duration, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'both' }).finished.catch(() => {});
    };
    const navParts = [document.querySelector('.wordmark'), ...document.querySelectorAll('.nav > a'), document.querySelector('.nav-toggle')].filter(Boolean);
    for (const part of navParts) await animate(part, [{ opacity: 0, transform: 'translateY(-8px)' }, { opacity: 1, transform: 'translateY(0)' }], 110);
    await animate(document.querySelector('.hero-badge'), [{ opacity: 0, transform: 'scaleX(.05)' }, { opacity: 1, transform: 'scaleX(1)' }], 300);
    await animate(document.querySelector('.hero h1'), [{ clipPath: 'inset(100% 0 0)', transform: 'translateY(18px)' }, { clipPath: 'inset(0 0 0)', transform: 'translateY(0)' }], 380);
    await animate(document.querySelector('.hero-copy'), [{ opacity: 0, transform: 'translateY(14px)' }, { opacity: 1, transform: 'translateY(0)' }], 220);
    for (const button of document.querySelectorAll('.hero-actions .button')) await animate(button, [{ opacity: 0, transform: 'translateY(12px)' }, { opacity: 1, transform: 'translateY(0)' }], 190);
  };
  playEntrance();
}
