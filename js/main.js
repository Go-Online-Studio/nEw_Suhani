/* =========================================
   MAIN.JS — Index-page specific logic
   Swiper, counters, WhatsApp routing
   ========================================= */
'use strict';

/* ---------- CONFIG ---------- */
const CONFIG_WA = {
  phone: '919898011309',
  waMsg: (service) => `Hi! I'm interested in your ${service} services. Please share more details.`
};

/* ---------- DEVICE DETECTION ---------- */
function isMobileDevice() {
  return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    || window.innerWidth <= 768;
}

/* ---------- WHATSAPP LINK ---------- */
function getWhatsAppLink(service = 'CNC Machining') {
  const msg = encodeURIComponent(CONFIG_WA.waMsg(service));
  if (isMobileDevice()) {
    return `https://wa.me/${CONFIG_WA.phone}?text=${msg}`;
  } else {
    return `https://web.whatsapp.com/send?phone=${CONFIG_WA.phone}&text=${msg}`;
  }
}

/* ---------- INIT ON DOM READY ---------- */
document.addEventListener('DOMContentLoaded', () => {

  /* ===== WhatsApp Float ===== */
  const wa = document.getElementById('whatsapp-float');
  if (wa) {
    wa.addEventListener('click', (e) => {
      e.preventDefault();
      window.open(getWhatsAppLink(), '_blank', 'noopener');
    });
  }

  /* ===== Service card WhatsApp buttons ===== */
  document.querySelectorAll('[data-service]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const svc = el.getAttribute('data-service');
      window.open(getWhatsAppLink(svc), '_blank', 'noopener');
    });
  });

  /* ===== Nav Get Quote button ===== */
  const navQuote = document.getElementById('navQuoteBtn');
  if (navQuote) {
    navQuote.addEventListener('click', (e) => {
      e.preventDefault();
      window.open(getWhatsAppLink('Custom Fabrication'), '_blank', 'noopener');
    });
  }

  /* ===== Swiper Testimonials ===== */
  if (typeof Swiper !== 'undefined' && document.querySelector('.swiper-testimonial')) {
    new Swiper('.swiper-testimonial', {
      slidesPerView: 1,
      spaceBetween: 28,
      loop: true,
      autoplay: { delay: 5000, disableOnInteraction: false },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }
    });
  }

  /* ===== Counter Animation ===== */
  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-count'));
    const suffix = el.getAttribute('data-suffix') || '';
    let start = 0;
    const duration = 1800;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => io.observe(c));
  }

});
