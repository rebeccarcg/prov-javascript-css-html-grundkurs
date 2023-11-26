// 2.1 (2p) Använd filter för att filtrera numbers och
// skapa en ny array med alla tal som är mindre än 50.
// Den nya arrayen ska sparas i en variabel som heter smallerThan50.
const numbers = [200, 54, 582, 33, 4];

//with a function

function isSmallEnough(value) {
  return value < 50;
}
const smallerThan50 = [200, 54, 582, 33, 4].filter(isSmallEnough);
console.log(smallerThan50);

//with an arow function (anonymous function)

const smallerThan50OtherWay = [200, 54, 582, 33, 4].filter((number) => {
  return 50 > number;
});
console.log(smallerThan50OtherWay);

// 2.2 (2p) Använd map på arrayen numbers2 och
// skapa en ny array där alla tal är tripplade. Alltså gånger 3.
// Den nya arrayen ska sparas i en variabel som heter tripple.

const numbers2 = [...numbers]; //[200, 54, 582, 33, 4];

// Pass a function to map
const triplets = numbers2.map((number) => number * 3);

console.log(triplets);





