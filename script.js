// Run only after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("Script loaded and DOM ready");

  // Navigation functions
  window.showPage = function(pageId) {
    console.log("Navigating to:", pageId);
    document.querySelectorAll(".page").forEach(page => {
      page.classList.remove("active");
    });
    const target = document.getElementById(pageId);
    if (target) target.classList.add("active");
  };

  window.goToPricing = function() {
    showPage("pricing");
  };

  window.goToSignIn = function() {
    showPage("signin");
  };

  // Sign-in function
  window.signIn = function() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!name || !email) {
      alert("Please enter both name and email");
      return;
    }
    console.log("Signed in:", name, email);
    showPage("booking");
  };

  // Package prices
  const packages = {
    "Exterior Wash": 45,
    "Interior Clean": 70,
    "Deluxe Detail": 150,
    "Full Interior Restoration": 200,
    "Exterior Shine Package": 120
  };

  // Update price display
  window.updatePrice = function() {
    const pkg = document.getElementById("package").value;
    const price = packages[pkg] || 0;
    const disp = document.getElementById("priceDisplay");
    if (disp) disp.textContent = "Price: $" + price;
    console.log("Price updated:", pkg, price);
  };

  // Block weekends and holiday examples
  function isDateBlocked(dateStr) {
    const blockedDates = ["2026-01-01", "2026-12-25"]; // add more if needed
    const d = new Date(dateStr);
    const day = d.getDay(); // Sunday=0, Saturday=6
    return day === 0 || day === 6 || blockedDates.includes(dateStr);
  }

  window.confirmBooking = function() {
    const dateInput = document.getElementById("date");
    const pkg = document.getElementById("package").value;
    const conf = document.getElementById("confirmation");

    if (!dateInput || !dateInput.value) {
      alert("Please select a date");
      return;
    }

    if (isDateBlocked(dateInput.value)) {
      alert("Sorry, we are closed on this date. Choose another.");
      return;
    }

    const price = packages[pkg];
    console.log("Booking confirmed:", pkg, dateInput.value, price);

    if (conf) {
      conf.innerHTML = `
        ✅ You booked: <strong>${pkg}</strong><br>
        📅 Date: ${dateInput.value}<br>
        💵 Price: $${price}<br>
        <button onclick="payNow('${pkg}', ${price})">
          Pay Now
        </button>
      `;
    }
  };

  // Simulated payment
  window.payNow = function(pkg, price) {
    alert(`Payment simulated: $${price} for ${pkg} — Thank you!`);
    console.log("Payment simulated:", pkg, price);
  };

});
