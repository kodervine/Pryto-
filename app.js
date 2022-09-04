// Variables of select and converting the html collection to an array

// Dynamically select any of the coin names
const coinsNameDropdown = document.getElementById("crypto-id");

coinsNameDropdown.addEventListener("change", () => {
  const coinName =
    coinsNameDropdown.options[coinsNameDropdown.selectedIndex].innerText;
  console.log(coinName);
});

// const coinsToExchange = document.getElementById("crypto-id").children;
// const coinIdArray = Array.from(coinsToExchange);
// console.log(coinIdArray[2].innerText);

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

    // Amount in dollars
    const dollarAmount = Math.round(fetchedData.rates.usd.value);

    const nairaAmount = Math.round(fetchedData.rates.ngn.value);

    // Input of numbers to be multiplied by
    const getValueOfCoin = document.getElementById("input-coin").value;

    // Multiply with the value from the number input
    const multiplyInnerNairaText = nairaAmount * parseInt(getValueOfCoin);

    const multiplyInnerDollarText = dollarAmount * parseInt(getValueOfCoin);
    console.log(multiplyInnerNairaText);

    // Add money value to the DOM
    const nairaId = document.getElementById("naira-id");
    const usdId = document.getElementById("usd-id");

    nairaId.innerText = `${fetchedData.rates.ngn.unit} ${multiplyInnerNairaText}`;
    usdId.innerText = `$${multiplyInnerDollarText}`;
  }
  getExchangeCurrency();

  //===============================
  // Calculate different coin prices
  // function convertCurrency(coinname, selectedCoin, usd) {
  //   const getValueOfCoin = document.getElementById("input-coin").value;

  //   const fetchedCoinValue = fetchedData.rates.coinname.value;
  //   const ethPrice = usd / fetchedCoinValue;
  //   console.log(fetchedData);
  // }
}
getBitcoinFunction();
// }, 5000);
