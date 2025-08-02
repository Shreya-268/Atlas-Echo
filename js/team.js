// Animate cards on scroll
const cards = document.querySelectorAll(".team-card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.3
});

cards.forEach(card => observer.observe(card));
