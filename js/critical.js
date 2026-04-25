/* ========================================
   CRITICAL.JS - Navigation & Core Interactions
   Crafter-themed Suhani Industries
   ======================================== */

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  document.getElementById("mainNavbar").innerHTML = `
  <div class="container-fluid px-lg-5">
            <a class="navbar-brand" href="index.html">
                <img src="images/BrandLogo.webp" alt="Suhani Industries">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu">
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
            
            <!-- Desktop Menu -->
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto align-items-center">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Home</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="services.html" data-bs-toggle="dropdown">Services</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="product-view.html?id=3d-carving">3D Carving</a></li>
                            <li><a class="dropdown-item" href="product-view.html?id=2d-carving">2D Carving</a></li>
                            <li><a class="dropdown-item" href="product-view.html?id=wave-board">Wave Board</a></li>
                            <li><a class="dropdown-item" href="product-view.html?id=metal-cnc">Metal CNC</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about.html">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="gallery.html">Gallery</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html">Contact</a>
                    </li>
                    <li class="nav-item nav-cta ms-lg-2">
                        <a class="btn btn-crafter" href="contact.html">Get Quote</a>
                    </li>
                </ul>
            </div>
        </div>`;

  document.getElementById("mobileMenu").innerHTML = `
  <div class="offcanvas-header">
            <div class="brand-wrapper">
                <img src="images/BrandLogo.webp" alt="Suhani Industries">
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <ul class="mobile-nav">
                <li><a href="index.html">Home</a></li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Services</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="product-view.html?id=3d-carving">3D Carving</a></li>
                        <li><a class="dropdown-item" href="product-view.html?id=2d-carving">2D Carving</a></li>
                        <li><a class="dropdown-item" href="product-view.html?id=wave-board">Wave Board</a></li>
                        <li><a class="dropdown-item" href="product-view.html?id=metal-cnc">Metal CNC</a></li>
                    </ul>
                </li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
            <a href="contact.html" class="btn btn-crafter w-100 mt-4 justify-content-center">Get Quote</a>
            <a href="tel:+919898011309" class="btn btn-outline-crafter w-100 mt-2 justify-content-center">
                <i class="bi bi-telephone-fill me-2"></i> +91 98980 11309
            </a>
        </div>`;

  // ===== ACTIVE LINK HANDLING =====
  function setActiveNavItem() {
    const currentPage =
      window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(
      ".navbar-nav .nav-link, .mobile-nav a",
    );

    navLinks.forEach((link) => {
      link.classList.remove("active");
      const linkHref = link.getAttribute("href");
      if (linkHref === currentPage) {
        link.classList.add("active");
      }
    });
  }

  setActiveNavItem();

  // ===== NAVBAR SCROLL BEHAVIOR =====
  const navbar = document.getElementById("mainNavbar");
  const navHeight = 20;

  function handleNavbarScroll() {
    if (window.scrollY > navHeight) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", handleNavbarScroll);
  handleNavbarScroll();

  // ===== MOBILE DROPDOWN HANDLING =====
  const mobileMenu = document.getElementById("mobileMenu");
  if (mobileMenu) {
    mobileMenu.addEventListener("hidden.bs.offcanvas", function () {
      const openDropdowns = mobileMenu.querySelectorAll(".dropdown-menu.show");
      openDropdowns.forEach((d) => d.classList.remove("show"));
      const activeToggles = mobileMenu.querySelectorAll(
        ".dropdown-toggle.show",
      );
      activeToggles.forEach((t) => {
        t.classList.remove("show");
        t.setAttribute("aria-expanded", "false");
      });
    });

    mobileMenu.addEventListener("click", function (e) {
      if (
        !e.target.closest(".dropdown-menu") &&
        !e.target.closest(".dropdown-toggle")
      ) {
        const openDropdowns = mobileMenu.querySelectorAll(
          ".dropdown-menu.show",
        );
        openDropdowns.forEach((d) => d.classList.remove("show"));
        const activeToggles = mobileMenu.querySelectorAll(
          ".dropdown-toggle.show",
        );
        activeToggles.forEach((t) => {
          t.classList.remove("show");
          t.setAttribute("aria-expanded", "false");
        });
      }
    });
  }

  // ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (!href.startsWith("#")) return;
      if (href === "#") { e.preventDefault(); return; }

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const navH = navbar.offsetHeight;
        const targetPosition =
          target.getBoundingClientRect().top + window.scrollY - navH;
        window.scrollTo({ top: targetPosition, behavior: "smooth" });
      }
    });
  });
});
