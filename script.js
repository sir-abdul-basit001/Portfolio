// Theme toggle logic
const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const themeKnob = document.getElementById("themeKnob");

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  themeKnob.textContent = theme === "dark" ? "🌙" : "☀️";
  localStorage.setItem("portfolio-theme", theme);
}

const savedTheme = localStorage.getItem("portfolio-theme");
const systemPrefersDark = window.matchMedia(
  "(prefers-color-scheme: dark)",
).matches;
applyTheme(savedTheme || (systemPrefersDark ? "dark" : "light"));

themeToggle.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  applyTheme(current === "dark" ? "light" : "dark");
});

// Mobile nav toggle
const burger = document.getElementById("burger");
const navMenu = document.getElementById("navMenu");
burger.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  burger.classList.toggle("active");
});
navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navMenu.classList.remove("open"));
});

// Scroll reveal
const revealEls = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        if (entry.target.classList.contains("skill-card")) {
          const bar = entry.target.querySelector(".bar span");
          if (bar) bar.style.width = bar.dataset.width + "%";
        }
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);
revealEls.forEach((el) => observer.observe(el));

// Header shrink on scroll
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.style.padding = window.scrollY > 50 ? "12px 8%" : "22px 8%";
});

function handleSubmit(e) {
  e.preventDefault();
  alert(
    "Message sent! (Connect this form to Formspree or EmailJS to make it functional.)",
  );
  e.target.reset();
  return false;
}
