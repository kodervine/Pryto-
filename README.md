# Pryto

Update cryptocurrency price

# Selecting the input value

So I selected the select element from the html file
Then, I added a 'change" "event listener. So whenever the options selects someone else, I can update the selected value
To access the innerText, I used the index of the options element with the logic [dropDown.selectedIndex] property as the index of the drop-down menu and set it to coinName

So this innerText will be used to compare with the crypto currency symbol of the fetch api

# Looping over the API data

I used the for...in loop on the JSON file
Then for each iteration in the loop, I used the selected **_coinName_** to compare the data (object keyName) from the fetchedData.rates
Then, I saved this to a new variable for future mathematical purposes - const **_coinValue_**;

So I created a new variable = **_newUSDValue, newNairaValue_** so that when I get the value of each coin, it will be used to be divided by the dollar amount and naira amount and displayed on the screen

In this case, I needed to have 2 logic in place for the "getValueOfNumber". This is the amount of the units a person wants to know the crypto current rates

1. To use parseInt when the amount from the input is 1 and above
2. To use parseFloat when the amount is less than 1

Then I set a new variable for the mathematics

For the USD, I created a conditional to confirm if the coinValue is less than 1, it will round it off to 2 decimals. Else, it rounds it off to the nearest whole number

For the naira, I didn't bother. Just set it to be rounded off immediately

# Get input value from the dom

I selected the input number value from the DOM. This will be used to multiply whatever current value being inputed by the client on the screen

Used some validation to convert to number primitive type, then multiplied the value, with the new naira value

Finally appended the result to the screen provided in the HTML file
