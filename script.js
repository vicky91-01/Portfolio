// Google Sheet Form Submission
const scriptURL = "YOUR_GOOGLE_SHEET_SCRIPT_URL";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", e => {
  e.preventDefault();
  msg.style.display = "block";    
  msg.textContent = "Sending..."; 

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(response => {
      msg.textContent = "✅ Message sent successfully!";
      form.reset();
      setTimeout(() => {
        msg.style.display = "none"; 
      }, 3000);
    })
    .catch(error => {
      msg.textContent = "❌ Something went wrong!";
      console.error("Error!", error.message);
    });
});

// Tabs Functionality
var tablinks = document.getElementsByClassName("tab-link");
var tabcontents = document.getElementsByClassName("tab-content");

function opentab(tabname) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

  const cards = document.querySelectorAll(".project-card");

  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // Mouse X inside card
      const y = e.clientY - rect.top;  // Mouse Y inside card
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate rotation (adjust multiplier for effect strength)
      const rotateX = ((y - centerY) / centerY) * 10; 
      const rotateY = ((x - centerX) / centerX) * 10;

      card.style.transform = `rotateX(${ -rotateX }deg) rotateY(${ rotateY }deg) scale(1.05)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    });
  });

  