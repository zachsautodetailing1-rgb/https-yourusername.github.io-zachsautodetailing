/* =====================================
   ZACH'S AUTO DETAILING - MAIN JS
   GitHub Pages + Stripe Payment Links
===================================== */

// ---------- PAGE NAVIGATION ----------
function showPage(pageId) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  const target = document.getElementById(pageId);
  if (target) {
    target.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// ---------- STRIPE PAYMENT LINKS ----------
const stripeLinks = {
  "Exterior Wash": "https://buy.stripe.com/YOUR_LINK_1",
  "Interior Clean": "https://buy.stripe.com/YOUR_LINK_2",
  "Deluxe Detail": "https://buy.stripe.com/YOUR_LINK_3",
  "Full Interior Restoration": "https://buy.stripe.com/YOUR_LINK_4",
  "Exterior Shine Package": "https://buy.stripe.com/YOUR_LINK_5"
};

// ---------- PRICES ----------
const prices = {
  "Exterior Wash": 45,
  "Interior Clean": 70,
  "Deluxe Detail": 150,
  "Full Interior Restoration": 200,
  "Exterior Shine Package": 120
};

// ---------- UPDATE PRICE ----------
function updatePrice() {
  const select = document.getElementById("package");
  const display = document.getElementById("priceDisplay");

  if (!select || !display) return;

  const selected = select.value;
  display.textContent = `Price: $${prices[selected]}`;
}

// ---------- SIGN IN ----------
function signIn() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !email) {
    alert("Please enter your name and email.");
    return;
  }

  showPage("booking");
}

// ---------- BOOK & PAY ----------
function confirmBooking() {
  const pkg = document.getElementById("package").value;
  const date = document.getElementById("date").value;

  if (!date) {
    alert("Please select a date.");
    return;
  }

  const link = stripeLinks[pkg];
  if (!link) {
    alert("Payment link not available.");
    return;
  }

  alert(`✅ ${pkg} booked for ${date}\nRedirecting to secure payment…`);
  window.location.href = link;
}

// ---------- MOBILE BUTTON PROTECTION ----------
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.disabled = true;
      setTimeout(() => btn.disabled = false, 600);
    });
  });

  updatePrice(); // initialize price on load
});

