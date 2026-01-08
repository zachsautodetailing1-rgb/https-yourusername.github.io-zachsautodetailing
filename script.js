// Packages with prices
const packages = {
  "Exterior Wash": 45,
  "Interior Clean": 70,
  "Deluxe Detail": 150,
  "Full Interior Restoration": 200,
  "Exterior Shine Package": 120
};

// Navigation
function showPage(pageId){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
}

// Sign-in
function signIn(){
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  if(!name || !email) return alert("Enter name & email");
  showPage('booking');
}

// Price update
function updatePrice(){
  const selected = document.getElementById('package').value;
  document.getElementById('priceDisplay').textContent = "Price: $" + packages[selected];
}

// Blocked dates (holidays & weekends)
function isDateBlocked(dateStr){
  const blocked = ["2026-01-01","2026-12-25"];
  const date = new Date(dateStr);
  const day = date.getDay();
  return day===0 || day===6 || blocked.includes(dateStr);
}

// Confirm booking
function confirmBooking(){
  const date = document.getElementById('date').value;
  const packageName = document.getElementById('package').value;
  if(!date) return alert("Select a date");
  if(isDateBlocked(date)) return alert("Sorry, we are closed on this date");
  const price = packages[packageName];
  document.getElementById('confirmation').innerHTML =
    `✅ You booked <strong>${packageName}</strong> for <strong>${date}</strong>.<br>
     Total: $${price}<br>
     <button onclick="payNow('${packageName}',${price})">Pay Now</button>`;
}

// Simulate payment
function payNow(pkg, price){
  alert(`Payment simulated: You paid $${price} for ${pkg}. Thank you!`);
}

// Footer
document.querySelector('footer').innerHTML = `<p>© ${new Date().getFullYear()} Zach's Auto Detailing</p>`;