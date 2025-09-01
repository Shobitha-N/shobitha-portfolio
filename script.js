// Smooth Scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Show Home Button on Scroll
window.onscroll = function () {
  const homeBtn = document.getElementById("homeBtn");
  if (document.documentElement.scrollTop > 200) {
    homeBtn.style.display = "block";
  } else {
    homeBtn.style.display = "none";
  }
};

// Typewriter Effect
const roles = ["Full-Stack Developer", "Data Analyst", "AI Enthusiast"];
let roleIndex = 0;
let charIndex = 0;
let currentRole = "";
let isDeleting = false;

function typeWriter() {
  const typewriterEl = document.getElementById("typewriter");

  if (!isDeleting && charIndex <= roles[roleIndex].length) {
    currentRole = roles[roleIndex].substring(0, charIndex++);
    typewriterEl.textContent = currentRole;
  } else if (isDeleting && charIndex >= 0) {
    currentRole = roles[roleIndex].substring(0, charIndex--);
    typewriterEl.textContent = currentRole;
  }

  if (!isDeleting && charIndex === roles[roleIndex].length) {
    isDeleting = true;
    setTimeout(typeWriter, 1500);
    return;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  setTimeout(typeWriter, isDeleting ? 100 : 150);
}
document.addEventListener("DOMContentLoaded", typeWriter);
