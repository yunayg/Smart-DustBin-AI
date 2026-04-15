// Modern Progress Ring Animation
function updateProgress(percent) {
  const circle = document.getElementById('progress-ring');
  const circumference = 577; // 2 * PI * 92
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
}

// Hero Live Update
let heroFill = 93;
setInterval(() => {
  heroFill = Math.max(70, Math.min(98, heroFill + (Math.random() * 8 - 4)));
  const fill = Math.floor(heroFill);

  document.getElementById('fill-percentage').textContent = fill;
  document.getElementById('hero-fill-text').textContent = `${fill}% FILL LEVEL`;
  updateProgress(fill);
}, 3500);

// Initial call
window.addEventListener('load', () => updateProgress(93));