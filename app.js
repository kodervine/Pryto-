// const bitCoinData = "https://api.cryptonator.com/api/ticker/btc-usd";
const bitCoinData = "https://api.nomics.com/v1/currencies/ticker?key=23ac2761382825f70678666ea03f9ccdafe7bed4&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR&platform-currency=ETH&per-page=100&page=1";

// Use async to fetch the bitcoin data
setInterval(()=>{
  async function getBitcoinFunction(){
    const fetchData = await fetch(bitCoinData)
    const data = await fetchData.json()

    const accessCryptoAPIData = data[0].price
    const roundOffCrptoData = Math.round(accessCryptoAPIData)

    const bitCoinPrice = document.getElementById('bitcoin-price')
    bitCoinPrice.innerText = roundOffCrptoData

    // Show time
    let timeToday = new Date;
    // const timeToday = data[0].price_date;
    const showDate = document.getElementById('show-date');
    showDate.innerText = timeToday
  }
  getBitcoinFunction()
}, 2000)

// Convert from btc to currency

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