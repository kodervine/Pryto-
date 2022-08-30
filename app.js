const bitCoinData = "https://api.cryptonator.com/api/ticker/btc-usd";

fetch(bitCoinData)
  .then(res => res.json())
  .then(data => console.log(data))

// const parsedData = JSON.parse(bitCoinData)

console.log(bitCoinData)

// Currency conversion
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

fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));