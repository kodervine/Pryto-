const bitCoinData = "https://api.cryptonator.com/api/ticker/btc-usd";

fetch(bitCoinData)
  .then(res => res.json())
  .then(data => console.log(data))

// const parsedData = JSON.parse(bitCoinData)

console.log(bitCoinData)

// Currency conversion from exchangeAPI
const access_key = 'VGNS7gpTo6o7errodHafToXucwtUhL6p';
const from = 'USD';
const to = 'NGN';
const amount = 25;

const myHeaders = new Headers();
myHeaders.append("apikey", "VGNS7gpTo6o7errodHafToXucwtUhL6p");

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

// Variable to append fetched conversion data to
let fetchedData = {};

fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(fetchedData = result))
  .catch(error => console.log('error', error));

  // To delay until the fetch request has been made and convert to JS object : Display on screen
 setTimeout(()=>{
  const convertData = JSON.parse(fetchedData)

  const nairaId = document.getElementById('naira-id');
  const usdId = document.getElementById('usd-id');

  const roundOffNairaDecimal = Math.round(convertData.result)
  nairaId.innerText = `Naira: ${roundOffNairaDecimal}`
  usdId.innerText = `USD: $${amount}`
 }, 3000)