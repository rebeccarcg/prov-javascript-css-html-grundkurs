// Skriv en funktion, generateRandomNumbers, som tar
// två parametrar: min och max. Funktionen ska generera
// och returnera en array med 10 slumpmässiga heltal mellan min och max.
// tips Math.random() ger en slumpad siffra mellan 0 och 1

// 1. Skapa en tom array där talen ska hamna
// 2. loopa 10 gånger - använd for loop
// 3. Googla en algoritm för generera tal mellan min och max
// 4. lägg till slumpat tal i arrayen


//Davids kod

function generateRandomNumbers(min, max) {
  const randomNumbers = [];

  for (let i = 0; i < 10; i++) {
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNumbers.push(random);
  }

  return randomNumbers;
}

console.log(generateRandomNumbers(5, 10)); // [6, 8, 10, 5, 7, ]


/*function generateRandomNumbers(minNumber, maxNumber) { //Skapar en funktion som ska ta parametrarna min och max
  let myTenRandomNumbers = []; //Assignar en ny variabel till en array med 10 random nummer

  for (let i = 0; i < 10; i++) { //Använder en for loop
    min = Math.ceil(minNumber);
    max = Math.floor(maxNumber);
    myRandom.push(Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber));
  }

  return myTenRandomNumbers;
}

console.log(generateRandomNumbers(1, 10));*/




