// Skriv en funktion, convertToUSD som konverterar värdena i currencies
// till USD. Använd exchangeRates för att göra uträkningen

//DU KAN ANVÄNDA MAP HÄR

const exchangeRates = {
  EUR: 1.12, // Euro till USD
  GBP: 1.32, // Brittiskt pund till USD
  JPY: 0.0094, // Japansk yen till USD
};

const currencies = [
  { currency: "EUR", value: 100 }, // 100 Euro
  { currency: "GBP", value: 50 }, // 50 Brittiskt pund
  { currency: "JPY", value: 5000 }, // 5000 Japansk yen
];

// We want to return a new currency object for each existing currency object
// This tells us that we want to use the map function

function convertToUSD(currencyArr) {
  //Din kod här
  return currencyArr.map((item) => {
    let exchangeRate = exchangeRates[item.currency];
    let newValue = item.value * exchangeRates;

    return {
      currency: item.currency,
      value: newValue,
    };
  });
}

console.log(convertToUSD(currencies));
/* 
ska logga 
[{ currency: 'EUR', value: 112 },
{ currency: 'GBP', value: 66 },
{ currency: 'JPY', value: 47 }]
*/

//förenklat
const EUR = { currency: "EUR", value: 100 };

exchangeRates.EUR; //Hämtar 1.12 i objektet
exchangeRates["EUR"]; //1.12

exchangeRates[euro.currency]; //1.12
