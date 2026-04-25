/* ========================================
   SCRIPT.JS - Common Utilities
   Crafter-themed Suhani Industries
   ======================================== */

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  document.getElementById("footer").innerHTML = `
  <div class="footer-top">
            <div class="container">
                <div class="row g-md-5 g-3 gy-4">
                    <div class="col-lg-4" data-aos="fade-up">
                        <div class="footer-brand">
                            <div class="brand-wrapper large">
                                <img src="images/BrandLogo.webp" alt="Suhani Industries">
                            </div>
                            <p class="footer-desc">
                                Leading manufacturer of precision CNC wood and metal products. Delivering craftsmanship and engineering excellence since 2010.
                            </p>
                            <div class="social-links">
                                <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.suhaniindustries.in" class="social-link" target="_blank"><i class="bi bi-facebook"></i></a>
                                <a href="https://x.com/intent/post?text=Check%20out%20SUHANI%20INDUSTRIES&url=https%3A%2F%2Fwww.suhaniindustries.in" class="social-link" target="_blank"><i class="bi bi-twitter-x"></i></a>
                                <a href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Furl%3Dhttps%3A%2F%2Fwww.suhaniindustries.in" class="social-link" target="_blank"><i class="bi bi-linkedin"></i></a>
                                <a href="https://www.pinterest.com/pin/create/button/?https://www.suhaniindustries.in" class="social-link" target="_blank"><i class="bi bi-pinterest"></i></a>
                            </div>
                        </div>  
                    </div>
                    
                    <div class="col-lg-2 col-md-4 col-sm-6" data-aos="fade-up" data-aos-delay="100">
                        <div class="footer-links-section">
                            <h4 class="footer-title">Quick Links</h4>
                            <ul class="footer-links">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="services.html">Services</a></li>
                                <li><a href="gallery.html">Gallery</a></li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="col-lg-3 col-md-4 col-sm-6" data-aos="fade-up" data-aos-delay="200">
                        <div class="footer-links-section">
                            <h4 class="footer-title">Services</h4>
                            <ul class="footer-links">
                                <li><a href="product-view.html?id=3d-carving">3D Wood Carving</a></li>
                                <li><a href="product-view.html?id=2d-carving">2D CNC Cutting</a></li>
                                <li><a href="product-view.html?id=wave-board">Wave Board Panels</a></li>
                                <li><a href="product-view.html?id=metal-cnc">Metal CNC Work</a></li>
                                <li><a href="services.html">Custom Designs</a></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="col-lg-3 col-md-4 col-sm-6" data-aos="fade-up" data-aos-delay="300">
                        <div class="footer-contact">
                            <h4 class="footer-title">Contact Info</h4>
                            <div class="contact-items">
                                <div class="contact-item">
                                    <i class="bi bi-geo-alt-fill"></i>
                                    <a class="footer_link" target="_blank" href="https://maps.app.goo.gl/8vjM2JHNBQABogpQ7"><address>C 26, Anur Estate, opp MM Vora Show Room, Soma Talav Cross Road, Vadodara</address></a>
                                </div>
                                <div class="contact-item">
                                    <i class="bi bi-telephone-fill"></i>
                                    <a class="footer_link" href="tel:+919898011309">+91 98980 11309</a>
                                </div>
                                <div class="contact-item">
                                    <i class="bi bi-envelope-fill"></i>
                                    <a class="footer_link" href="mailto:suhaniindustries09@gmail.com">suhaniindustries09@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="footer-bottom">
            <div class="container">
                <div class="footer-bottom-content">
                    <p class="copyright">&copy; <span id="year"></span> Suhani Industries. All Rights Reserved.</p>
                    <p class="credit">Crafted with <span class="text-primary-crafter">Precision</span></p>
                </div> 
            </div>
        </div>
  `;

  // Set year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ===== CONFIGURATION =====
  const CONFIG = {
    whatsappNumber: "919898011309",
    animationDuration: 800,
    debounceDelay: 250,
    counterDuration: 2000,
  };

  // ===== INITIALIZE AOS =====
  if (typeof AOS !== "undefined") {
    AOS.init({
      once: true,
      duration: CONFIG.animationDuration,
      offset: 100,
      easing: "ease-out-cubic",
    });

    // Refresh AOS after a short delay to ensure injected content is detected
    setTimeout(() => {
      AOS.refresh();
    }, 150);
  }

  // ===== DEBOUNCE FUNCTION =====
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // ===== RESIZE LISTENER =====
  const handleResize = debounce(function () {
    if (typeof AOS !== "undefined") {
      AOS.refresh();
    }
  }, CONFIG.debounceDelay);

  window.addEventListener("resize", handleResize);

  // ===== BACK TO TOP BUTTON =====
  const backToTop = document.getElementById("backToTop");

  function handleBackToTop() {
    if (backToTop) {
      if (window.scrollY > 500) {
        backToTop.classList.add("visible");
      } else {
        backToTop.classList.remove("visible");
      }
    }
  }

  window.addEventListener("scroll", handleBackToTop);

  if (backToTop) {
    backToTop.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
