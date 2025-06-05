// === SLIDER AUTOMATIC ===
let slideIndex = 0;
function showSlides() {
  const slides = document.getElementsByClassName("slide");
  if (!slides.length) return;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex = (slideIndex + slides.length) % slides.length;
  slides[slideIndex].style.display = "block";
}
showSlides();
setInterval(() => plusSlides(1), 5000);

// === SCHIMBARE SLIDE CU BUTOANE ===
function plusSlides(n) {
  slideIndex += n;
  showSlides();
}

// === MENIU MOBIL: DESCHIDE ȘI DERULEAZĂ LA SLIDER ===
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  const navbar = document.querySelector('.navbar');

  if (navLinks) navLinks.classList.toggle('show');
  if (navbar) navbar.classList.toggle('expanded');

  // Derulează spre slider dacă e pe mobil și meniul tocmai s-a deschis
  if (window.innerWidth <= 768 && navLinks.classList.contains('show')) {
    setTimeout(() => {
      document.getElementById("slider").scrollIntoView({ behavior: "smooth" });
    }, 200);
  }
}

// === DROPDOWN PE MOBIL: DESCHIDERE + SCROLL LA SLIDER ===
function toggleDropdown(button) {
  const parent = button.parentElement;
  const navLinks = document.querySelector('.nav-links');
  const navbar = document.querySelector('.navbar');

  if (window.innerWidth <= 768) {
    parent.classList.toggle('open');
    if (navLinks && navLinks.classList.contains('show')) {
      navbar.classList.add('expanded');
      setTimeout(() => {
        document.getElementById("slider").scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  }
}

// === FUNCȚIE: Actualizează conținutul și imaginea din secțiune ===
function updateContent(titlu, descriere, imagine, pdf) {
  document.getElementById("title").textContent = titlu;
  document.getElementById("description").textContent = descriere;
  document.getElementById("document-image").src = imagine;
  document.getElementById("download-link").href = pdf;
}


document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevenim trimiterea reală a formularului

    const name = document.getElementById("name").value;
    const email = document.getElementById("email-select").value;
    const phone = document.getElementById("phone").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    console.log("Date trimise de utilizator:");
    console.log("Nume:", name);
    console.log("Email:", email);
    console.log("Telefon:", phone);
    console.log("Subiect:", subject);
    console.log("Mesaj:", message);
  });
});


 function toggleDropdown(element) {
    const dropdown = element.closest('.dropdown');
    dropdown.classList.toggle("open");
  }

  // Închide dropdown dacă se apasă în afară
  document.addEventListener('click', function (e) {
    document.querySelectorAll('.dropdown').forEach(function (dropdown) {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
      }
    });
  });