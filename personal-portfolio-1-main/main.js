/* ==================== 
  toggle icon navbar 
====================== */
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
}; // Add this to your main.js

const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Check if dark mode is saved in localStorage (to persist the theme across sessions)
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggleButton.textContent = 'Switch to Light Mode';
}

// Add event listener for the button click to toggle the theme
themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Update button text
    if (body.classList.contains('dark-mode')) {
        themeToggleButton.textContent = 'Switch to Light Mode';
        localStorage.setItem('theme', 'dark'); // Save dark mode preference
    } else {
        themeToggleButton.textContent = 'Switch to Dark Mode';
        localStorage.removeItem('theme'); // Remove saved theme preference
    }
});

/* =========================== 
    Scroll Section Active Link 
============================= */
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /* ========================
      Sticky Navbar 
=========================== */
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  /* ===================== 
    Menu Icon Navbar 
====================== */
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/* ===================== 
    Scroll Reveal 
====================== */
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

/* ===================== 
    Typed Js 
====================== */
const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Content Creator", "Consultant", "isoka",],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
