// Skapa en funktion, findLongestWord, som tar en sträng som input
// och returnerar det längsta ordet i strängen.

//DU KAN ANVÄNDA EN FOR LOOP HÄR

//Davids kod

//1. dela upp meningen i en array med ord
//2. loopa arrayen och jämför med en variabel som håller reda på längsta ordet

function findLongestWord(sentence) {
  const words = sentence.split(" ");

  let longestWord = "";

  words.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord;
}

console.log(findLongestWord("hej hopp hej")); // hopp

/*// Funktionen `findLongestWord` tar en sträng (`str`) som input.
function findLongestWord(str) {
  // Delar upp strängen i en array av ord.
  let strSplit = str.split(" ");

  // Skapar en variabel för att hålla reda på det längsta ordet, från början tomt.
  let longestWord = "";

  // Använder en for-loop för att iterera över varje ord i arrayen.
  for (let i = 0; i < strSplit.length; i++) {
    // Jämför längden på det aktuella ordet med längden på det längsta ordet hittills.
    // Om det aktuella ordet är längre, uppdatera `longestWord`.
    if (strSplit[i].length > longestWord.length) {
      longestWord = strSplit[i];
    }
  }

  // Returnera det längsta ordet som hittats.
  return longestWord;
}

//Anropa funktionen och logga resultatet.
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));*/
