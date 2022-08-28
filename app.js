const bitCoinData = `{"ticker":{"base":"BTC","target":"USD","price":"20154.98972217","volume":"4646.47299321","change":"23.25950898","markets":[{"market":"BitFinex","price":"20061.00000000","volume":1891.7886384},{"market":"Bitstamp","price":"20056.00000000","volume":865.91893483},{"market":"Cex.io","price":"20091.20000000","volume":29.53915745},{"market":"Exmo","price":"22130.16000000","volume":220.54083777},{"market":"Hitbtc","price":"20059.63000000","volume":0.00481},{"market":"Kraken","price":"20051.00000000","volume":1638.26640364},{"market":"YoBit","price":"20559.80011015","volume":0.41421112}]},"timestamp":1661673607,"success":true,"error":""}`

const parsedData = JSON.parse(bitCoinData)

console.log(parsedData.ticker.price)