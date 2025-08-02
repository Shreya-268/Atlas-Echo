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

// ============ Simple Carousel Logic ============
const track = document.getElementById('carouselTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let slideIndex = 0;

nextBtn.addEventListener('click', () => {
  const items = document.querySelectorAll('.carousel-item');
  if (slideIndex < items.length - 1) {
    slideIndex++;
    track.style.transform = `translateX(-${slideIndex * 100}%)`;
  }
});

prevBtn.addEventListener('click', () => {
  if (slideIndex > 0) {
    slideIndex--;
    track.style.transform = `translateX(-${slideIndex * 100}%)`;
  }
});


// ============ Second Carousel Logic ============
const track2 = document.getElementById('carouselTrack2');
const prevBtn2 = document.getElementById('prevBtn2');
const nextBtn2 = document.getElementById('nextBtn2');

let slideIndex2 = 0;

nextBtn2.addEventListener('click', () => {
  const items = document.querySelectorAll('#carouselTrack2 .carousel-item');
  if (slideIndex2 < items.length - 1) {
    slideIndex2++;
    track2.style.transform = `translateX(-${slideIndex2 * 100}%)`;
  }
});

prevBtn2.addEventListener('click', () => {
  if (slideIndex2 > 0) {
    slideIndex2--;
    track2.style.transform = `translateX(-${slideIndex2 * 100}%)`;
  }
});


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

document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('mousemove', e => {
    const rect = item.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    item.style.setProperty('--mouse-x', `${x}px`);
    item.style.setProperty('--mouse-y', `${y}px`);
  });
});

// Show Friends Popup
document.querySelector('.friends-btn').addEventListener('click', function() {
  document.getElementById('friendsPopup').style.display = 'block';
});

// Hide Friends Popup
document.getElementById('closeFriendsPopup').addEventListener('click', function() {
  document.getElementById('friendsPopup').style.display = 'none';
});
