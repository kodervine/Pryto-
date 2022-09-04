// Variables of select and converting the html collection to an array

// Dynamically select any of the coin names
const coinsNameDropdown = document.getElementById("crypto-id");

// coinsNameDropdown.addEventListener("change", () => {
//   const coinName =
//     coinsNameDropdown.options[coinsNameDropdown.selectedIndex].innerText;
//   console.log(coinName);

//   for (data in fetchedData) {
//     if (coinName.toLowerCase === data){
//       console.log(data)
//     }
//   }
// });

const selectCryptoId = document.getElementById("crypto-id");

// Get bitcoin data from nomic
const bitCoinData =
  "https://api.nomics.com/v1/currencies/ticker?key=23ac2761382825f70678666ea03f9ccdafe7bed4&ids=BTC,ETH,XRP&interval=1d,30d&convert=USD&platform-currency=ETH&per-page=100&page=1";

// Use async to fetch the bitcoin data

// setInterval(() => {
async function getBitcoinFunction() {
  const fetchData = await fetch(bitCoinData);
  const data = await fetchData.json();

  const roundOffCryptoData = Math.round(data[0].price);

  // Show time
  let timeToday = new Date();
  const showDate = document.getElementById("show-date");
  showDate.innerText = timeToday;

  // Variable to append fetched conversion data to
  let fetchedData = {};
  async function getExchangeCurrency() {
    const fetchData = await fetch(
      "https://api.coingecko.com/api/v3/exchange_rates"
    );
    fetchedData = await fetchData.json();
    console.log(fetchedData.rates);

    // Select dropdown menu coin name in order to get innerText to compare with the fetch API currency symbol
    coinsNameDropdown.addEventListener("change", () => {
      const coinName =
        coinsNameDropdown.options[coinsNameDropdown.selectedIndex].innerText;
      console.log(coinName);

      // Loop for the dropdown menu, which will use the selected dropdown coin  Name, to get its monetary value dynamically
      for (let data in fetchedData.rates) {
        if (coinName.toLowerCase() === data) {
          const coinValue = fetchedData.rates[data].value;
          console.log(coinValue);

          // ====== Do the mathematics for the coins here

          const everyAmount = Math.round(fetchedData.rates[data].value);
          console.log(everyAmount);

          console.log(dollarAmount / coinValue);
        }
        // console.log(fetchedData.rates[data].type);

        // Add the newly created options from the bitCoin API on the html screen
        const createCryptoDropdownOption = document.createElement("option");
        if (fetchedData.rates[data].type === "crypto") {
          createCryptoDropdownOption.value = data.toUpperCase();
          createCryptoDropdownOption.innerText = data.toUpperCase();

          coinsNameDropdown.appendChild(createCryptoDropdownOption);
        }
      }

      console.log(coinName.toLowerCase());
    });

    // Amount in dollars
    const dollarAmount = Math.round(fetchedData.rates.usd.value);

    const nairaAmount = Math.round(fetchedData.rates.ngn.value);

    // Input of numbers to be multiplied by
    const getValueOfCoin = document.getElementById("input-coin").value;

    // Multiply with the value from the number input
    const multiplyInnerNairaText = nairaAmount * parseInt(getValueOfCoin);

    const multiplyInnerDollarText = dollarAmount * parseInt(getValueOfCoin);

    // Add money value to the DOM
    const nairaId = document.getElementById("naira-id");
    const usdId = document.getElementById("usd-id");

    nairaId.innerText = `${fetchedData.rates.ngn.unit} ${multiplyInnerNairaText}`;
    usdId.innerText = `$${multiplyInnerDollarText}`;
  }
  getExchangeCurrency();
}
getBitcoinFunction();
// }, 5000);
