// ============================
// PAGE NAVIGATION
// ============================
function showPage(pageId) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ============================
// PRICES
// ============================
const prices = {
  "Exterior Wash": 4500,
  "Interior Clean": 7000,
  "Deluxe Detail": 15000,
  "Full Interior Restoration": 20000,
  "Exterior Shine Package": 12000
};

function updatePrice() {
  const pkg = document.getElementById("package").value;
  document.getElementById("priceDisplay").innerText =
    `Price: $${prices[pkg] / 100}`;
}

// ============================
// STRIPE CHECKOUT
// ============================
async function confirmBooking() {
  const pkg = document.getElementById("package").value;
  const date = document.getElementById("date").value;

  if (!date) {
    alert("Please select a date.");
    return;
  }

  const response = await fetch("/create-checkout-session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      package: pkg,
      amount: prices[pkg],
      date: date
    })
  });

  const session = await response.json();
  window.location.href = session.url;
}
