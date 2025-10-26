// ===== HERO SLIDER =====
var slides = document.querySelectorAll('.slide');
var next = document.querySelector('.next');
var prev = document.querySelector('.prev');
var current = 0;

function showSlide(index) {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.left = ((i - index) * 100) + '%';
  }
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

if (slides.length > 0) {
  showSlide(current);
  if (next) next.addEventListener('click', nextSlide);
  if (prev) prev.addEventListener('click', prevSlide);
  setInterval(nextSlide, 5000);
}

// ===== POPUP =====
var popup = document.getElementById("signup-popup");
var closeBtn = document.getElementById("close-popup");

if (closeBtn) {
  closeBtn.addEventListener("click", function() {
    popup.style.opacity = "0";
    popup.style.marginTop = "-50px";
    setTimeout(function() {
      popup.style.display = "none";
      document.body.classList.add("popup-closed");
    }, 400);
  });
}

// ===== SMOOTH SCROLL & ACTIVE LINK =====
var navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function(e) {
    e.preventDefault();
    var target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    var offset = target.offsetTop - 80; // navbar height
    window.scrollTo({ top: offset, behavior: 'smooth' });
  });
}

window.addEventListener('scroll', function() {
  var scrollPos = window.pageYOffset + 85; // navbar adjustment
  for (var i = 0; i < navLinks.length; i++) {
    var section = document.querySelector(navLinks[i].getAttribute('href'));
    if (!section) continue;
    if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      for (var j = 0; j < navLinks.length; j++) navLinks[j].classList.remove('active');
      navLinks[i].classList.add('active');
    }
  }
});

var menuToggle = document.getElementById('menu-toggle');
var mobileMenu = document.getElementById('mobile-menu');
var menuClose = document.getElementById('menu-close');
var menuOverlay = document.getElementById('menu-overlay');

// Open mobile menu
menuToggle.addEventListener('click', function() {
  mobileMenu.style.right = '0';
  menuOverlay.style.display = 'block';
  menuToggle.style.display = 'none'; // hide hamburger
});

// Close mobile menu
function closeMenu() {
  mobileMenu.style.right = '-250px';
  menuOverlay.style.display = 'none';
  menuToggle.style.display = 'block'; // show hamburger
}

menuClose.addEventListener('click', closeMenu);
menuOverlay.addEventListener('click', closeMenu);
