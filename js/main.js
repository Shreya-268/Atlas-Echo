// ===== Enhanced Loader with "count - 100" format & Text Reveal =====
let count = 1;
const counter = document.getElementById('counter');
const loader = document.getElementById('loader');
const loaderText = document.getElementById('loaderText');
const lines = document.querySelectorAll('.line');

// Preload animations as paused
lines.forEach(line => {
  line.style.animationPlayState = 'paused';
});

const interval = setInterval(() => {
  if (count <= 100) {
    counter.textContent = `${count} - 100`;

    // Reveal lines at specific counts
    if (count === 10) lines[0].style.animationPlayState = 'running'; // ATLAS ECHO
    if (count === 40) lines[1].style.animationPlayState = 'running'; // SEE THE WORLD.
    if (count === 70) lines[2].style.animationPlayState = 'running'; // HEAR ITS ECHO.

    count++;
  } else {
    clearInterval(interval);

    // Final fixed display
    counter.textContent = '100 - 100';

    // Fade out loader
    setTimeout(() => {
      loader.style.transition = 'opacity 0.6s ease';
      loader.style.opacity = '0';
      loader.style.pointerEvents = 'none';
      setTimeout(() => {
        loader.style.display = 'none';
      }, 600);
    }, 1000);
  }
}, 30);

// ===== Ripple effect on click (Element 8) =====
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    this.style.setProperty('--ripple-x', `${x}px`);
    this.style.setProperty('--ripple-y', `${y}px`);
    this.classList.remove('clicked');
    void this.offsetWidth;
    this.classList.add('clicked');
  });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const customNav = document.getElementById('customNav');
    const closeBtn = document.getElementById('closeBtn');

    menuToggle.addEventListener('click', function() {
        customNav.classList.add('open');
    });

    closeBtn.addEventListener('click', function() {
        customNav.classList.remove('open');
    });

    // OPTIONAL: Close nav when clicking anywhere outside the nav on desktop
    document.addEventListener('click', function(event) {
        // Only close if nav is open and click is outside nav and menuToggle
        if (
            customNav.classList.contains('open') &&
            !customNav.contains(event.target) &&
            event.target !== menuToggle
        ) {
            customNav.classList.remove('open');
        }
    });
});


// ===== Inspire Words Animation =====
const inspireWords = [
  "I",
  "IN", 
  "INS",
  "INSP", 
  "INSPI", 
  "INSPIR", 
  "INSPIRE",
  "INSPIRE W", 
  "INSPIRE WO", 
  "INSPIRE WOR", 
  "INSPIRE WORD", 
  "INSPIRE WORDS"
];

const inspireContainer = document.getElementById('inspireWords');
let inspireIndex = 0;

function showNextInspireWord() {
  if (!inspireContainer) return;
  inspireContainer.textContent = inspireWords[inspireIndex];
  inspireIndex = (inspireIndex + 1) % inspireWords.length;
}

setInterval(showNextInspireWord, 300);