// Variables of select and converting the html collection to an array
const coinsToExchange = document.getElementById("crypto-id").children;
const coinIdArray = Array.from(coinsToExchange);
console.log(coinIdArray[2].innerText);
console.log(coinIdArray.selected);
const selectCryptoId = document.getElementById("crypto-id");

// Get bitcoin data from nomic
const bitCoinData =
  "https://api.nomics.com/v1/currencies/ticker?key=23ac2761382825f70678666ea03f9ccdafe7bed4&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR&platform-currency=ETH&per-page=100&page=1";

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

  // Currency conversion from exchangeAPI
  const access_key = "VGNS7gpTo6o7errodHafToXucwtUhL6p";
  const from = "USD";
  const to = "NGN";
  const amount = roundOffCryptoData;

  const myHeaders = new Headers();
  myHeaders.append("apikey", "VGNS7gpTo6o7errodHafToXucwtUhL6p");

  const requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  // Variable to append fetched conversion data to
  let fetchedData = {};

  fetch(
    `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log((fetchedData = result)))
    .catch((error) => console.log("error", error));

  // To delay until the fetch request has been made and convert to JS object : Display on screen
  setTimeout(() => {
    const convertData = JSON.parse(fetchedData);

    const nairaId = document.getElementById("naira-id");
    const usdId = document.getElementById("usd-id");

    const roundOffDecimal = Math.round(convertData.result);

    const getValueOfCoin = document.getElementById("input-coin").value;

    // Multiply with the value from the number input
    const multiplyInnerNairaText = roundOffDecimal * parseInt(getValueOfCoin);

    const multiplyInnerDollarText = amount * parseInt(getValueOfCoin);
    console.log(multiplyInnerNairaText);

    nairaId.innerText = `N${multiplyInnerNairaText}`;
    usdId.innerText = `$${multiplyInnerDollarText}`;
  }, 3000);
}
getBitcoinFunction();
// }, 4000);

// Convert from btc to currency

// // Currency conversion from exchangeAPI
// const access_key = 'VGNS7gpTo6o7errodHafToXucwtUhL6p';
// const from = 'USD';
// const to = 'NGN';
// const amount = roundOffCryptoData;

// const myHeaders = new Headers();
// myHeaders.append("apikey", "VGNS7gpTo6o7errodHafToXucwtUhL6p");

// const requestOptions = {
//   method: 'GET',
//   redirect: 'follow',
//   headers: myHeaders
// };

// // Variable to append fetched conversion data to
// let fetchedData = {};

// fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(fetchedData = result))
//   .catch(error => console.log('error', error));

//   // To delay until the fetch request has been made and convert to JS object : Display on screen
//  setTimeout(()=>{
//   const convertData = JSON.parse(fetchedData)

//   const nairaId = document.getElementById('naira-id');
//   const usdId = document.getElementById('usd-id');

//   const roundOffNairaDecimal = Math.round(convertData.result)
//   nairaId.innerText = `Naira: ${roundOffNairaDecimal}`
//   usdId.innerText = `USD: $${amount}`
//  }, 3000)
