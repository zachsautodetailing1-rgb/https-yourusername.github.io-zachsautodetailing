/* =====================================
   ZACH'S AUTO DETAILING - MAIN JS
   GitHub Pages + Stripe Payment Links
===================================== */


  const target = document.getElementById(pageId);
  if (target) {
    target.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}


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

