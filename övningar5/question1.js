// 1. (3p) Använd forEach för att skapa en funktion, calculateAverage,
// som tar en array av tal som input och returnerar medelvärdet
// av dessa tal.
// tips: Googla hur man räknar ut medelvärdet av ett antal tal

//DU KAN ANVÄNDA FOREACH HÄR

function calculateAverage(arr) {
  // Din kod här
  let sum = 0;
  let length = arr.length;

  arr.forEach((num) => (sum += num));

  return sum / length;
}

/*
const arr = [9, 10, 11, 28]; // Skapa en array med nummer.
let sum = 0; // Skapa en variabel och tilldela den värdet 0, detta kommer att användas för att hålla summan av elementen i arrayen.

// Använd forEach för att iterera över varje element (num) i arrayen.
arr.forEach((num) => {
  sum += num; // Lägg till det aktuella elementet (num) till summan.
});

// Beräkna genomsnittet genom att dela summan med antalet element i arrayen.
average = sum / arr.length;

// Logga genomsnittet till konsolen.
console.log(average);
*/
