# Pryto

Update cryptocurrency price

**_Selecting the input value_**
So I selected the select element from the html file
Then, I added a 'change" "event listener. So whenever the options selects someone else, I can update the selected value
To access the innerText, I used the index of the options element with the logic [dropDown.selectedIndex] property as the index of the drop-down menu and set it to coinName

So this innerText will be used to compare with the crypto currency symbol of the fetch api

**_Looping over the API data_**
I used the for...in loop on the JSON file
Then for each iteration in the loop, I used the selected coinName to compare the data (object keyName) from the fetchedData.rates
Then, I saved this to a new variable for future mathematical purposes

**_Add new options to the html screen_**
I created a new option variable - createCryptoDropDownOption
Then I added a conditional to check if the type of the iteration data, is equals to crypto
If so, I added the innerText to be equals to that data and set to uppercase( )
Also, I set the value of the new Option variable to be equals to the data to upperCase

\*\*\*Getting crypto price function
I sent a fetch request to the Nomic API and got the JSON response in array
"let fetchedCryptoRequest;

fetch(bitCoinData)
.then(response => response.json())
.then(data => fetchedCryptoRequest = data)"

Because it's in array already, I only needed to access the object data using the index (and not parse it to object)

So I basically did - "fetchedCryptoRequest[0].price" to get the ETH price

Then I used Math.round to round it off to the nearest whole number. After that, I updated the DOM innerText to reflect the number

setTimeout(()=>{
const accessCryptoAPIData =

const roundOffCrptoData = Math.round(accessCryptoAPIData)

const bitCoinPrice = document.getElementById('bitcoin-price')
bitCoinPrice.innerText = roundOffCrptoData
}, 5000)

---

The next function is currency conversion from the exchangeAPI
Same with the getBitCoin price

I sent a request to the API and got the format to use it in my programme

To delay until the fetch request has been made, I used the setTimeout. I also used JSON.parse to convert the JSON file to JavaScript object.

After that, I rounded off the result of the currency conversion using Math.round

Then, I selected the document elements from the html file and set the innerText to the result of the API converter
