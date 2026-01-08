<div id="booking-page">
  <h2>Book a Package</h2>

  <label for="package">Choose a package:</label>
  <select id="package" onchange="updatePrice()">
    <option value="Exterior Wash">Exterior Wash</option>
    <option value="Interior Clean">Interior Clean</option>
    <option value="Deluxe Detail">Deluxe Detail</option>
    <option value="Full Interior Restoration">Full Interior Restoration</option>
    <option value="Exterior Shine Package">Exterior Shine Package</option>
  </select>

  <p id="priceDisplay">Price: $45</p>

  <label for="date">Select a date:</label>
  <input type="date" id="date">

  <button onclick="confirmBooking()">Confirm Booking</button>

  <div id="confirmation"></div>

  <!-- Payment form will appear here -->
  <div id="payment-container" style="margin-top:20px; display:none;">
    <div id="card-container"></div>
    <button id="card-button">Pay Now</button>
    <div id="payment-status"></div>
  </div>
</div>

<!-- Include Square Web Payments SDK -->
<script type="text/javascript" src="https://sandbox.web.squarecdn.com/v1/square.js"></script>
