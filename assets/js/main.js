
// AOS scroll animations
AOS.init({ duration: 800, once: true });

// Lightbox
const lightbox = GLightbox({ selector: '.glightbox' });

// Typed.js rotating roles
new Typed('#typed', {
  strings: [
    'Core & Advanced Python',
    'NumPy • Pandas • SciPy',
    'Seaborn & Plotly Visualizations',
    'Power BI & MIS Reporting',
    'Advanced MySQL & SQL Tuning'
  ],
  typeSpeed: 38,
  backSpeed: 26,
  backDelay: 1400,
  smartBackspace: true,
  loop: true
});

// Dynamic year
document.getElementById('year').textContent = new Date().getFullYear();

// Back to top button
const backBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backBtn.style.display = window.scrollY > 400 ? 'inline-flex' : 'none';
});
backBtn.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

// Simple counter animation
const counters = [{ el: document.getElementById('counter-projects'), target: 24 }];
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      counters.forEach(({el, target}) => {
        let value = 0; const step = Math.ceil(target/60);
        const t = setInterval(() => {
          value += step; if(value >= target){ value = target; clearInterval(t); }
          el.textContent = value;
        }, 20);
      });
      io.disconnect();
    }
  });
}, { threshold: .4 });
const heroCard = document.querySelector('#home .card');
if (heroCard) io.observe(heroCard);

// Bootstrap client-side validation
(() => {
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        alert('Thanks! This demo form is not wired to a backend.');
      }
      form.classList.add('was-validated');
    }, false);
  });
})();
