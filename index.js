// Get references to pricing plan elements and currency selection
const pricingPlans = document.querySelectorAll('.pricingstyle2');
const currencySelect = document.getElementById('currency-select');

// Update pricing based on currency selection
function updatePrices() {
  const selectedCurrency = currencySelect.value;

  pricingPlans.forEach(priceElement => {
    const originalPrice = parseFloat(priceElement.textContent.replace(/[^0-9.-]+/g, ''));

    // Replace with your actual conversion logic here
    let convertedPrice;
    switch (selectedCurrency) {
      case "EUR":
        convertedPrice = originalPrice * 0.95;
        break;
      case "INR":
        convertedPrice = originalPrice * 78.50;
        break;
      case "JPY":
        convertedPrice = originalPrice * 140.00;
        break;
      default:
        convertedPrice = originalPrice;
    }

    priceElement.textContent = `${convertedPrice.toFixed(2)} ${selectedCurrency}`;
  });
}

// Update prices initially based on default currency
updatePrices();

// Update prices on currency change
currencySelect.addEventListener('change', updatePrices);


