import { validateEmail, toggleDarkMode } from "./utils.js";

// Contact form validation
document.getElementById("contactForm")?.addEventListener("submit", (e) => {
  const email = e.target.email.value;
  if (!validateEmail(email)) {
    alert("Please enter a valid email.");
    e.preventDefault();
  } else {
    alert("Thank you! Your message has been sent.");
    window.location.href = "thankyou.html";
  }
});

// Dark mode toggle
document.addEventListener("click", (e) => {
  if (e.target.id === "darkToggle") toggleDarkMode();
});

// Persist dark mode preference
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark-mode");
}

// FAQ accordion
document.querySelectorAll(".faq__question").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    const answer = btn.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});




