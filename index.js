function convertCurrency() {
    // Get the selected currency
    var currency = document.getElementById("currency-select").value;
    // Perform currency conversion logic here...
    // For demonstration purposes, let's just update the displayed prices with the selected currency
    document.getElementById("price1").innerText = currency === "JPY" ? "¥0" : "$0";
    document.getElementById("price2").innerText = currency === "JPY" ? "¥2000" : "$20 per user billed monthly";
    document.getElementById("price3").innerText = currency === "JPY" ? "¥2500 per user/month billed annually" : "$25 per user/month billed annually";
    document.getElementById("price4").innerText = "Contact sales"; // Assuming Enterprise pricing varies, so it remains as is
}

// Add event listener to the Convert button
document.getElementById("convert-button").addEventListener("click", convertCurrency);

// Function to handle the search link
function handleSearch() {
    // Replace with appropriate action for the Search functionality
    console.log("Search clicked");
}

// Add event listener to the Search link
document.getElementById("topdiv2").addEventListener("click", handleSearch);

// Function to handle the Start Now link
function handleStartNow() {
    // Replace with appropriate action for the Start Now functionality
    console.log("Start Now clicked");
}

// Add event listener to the Start Now link
document.getElementById("pricing1").addEventListener("click", handleStartNow);