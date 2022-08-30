const bitCoinData = "https://api.cryptonator.com/api/ticker/btc-usd";

fetch(bitCoinData)
  .then(res => res.json())
  .then(data => console.log(data))

// const parsedData = JSON.parse(bitCoinData)

console.log(bitCoinData)

const access_key = 'VGNS7gpTo6o7errodHafToXucwtUhL6p';
const from = 'GPB';
const to = 'JPY';
const amount = 25;
const url = `https://api.exchangeratesapi.io/latest?access_key=${ access_key }`;

console.log(url)

// const currencyAPIUrl = "https://api.exchangeratesapi.io/v1/latest?access_key=a4fJ9cVqmLvySyOu2QH63JVMThIe9Ydk"


// fetch("https://api.apilayer.com/exchangerates_data/convert?to={to}&from={from}&amount={amount}", requestOptions)
//   .then(response => response.text())
