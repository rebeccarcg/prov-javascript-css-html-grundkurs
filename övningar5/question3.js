// 3. (3p) Skriv en funktion, capitalizeWords, som tar en array av
// strängar som input och returnerar en ny array där varje
// ord börjar med en stor bokstav.

//Davids svar

function capitalizeWords(arr) {
  const newArr = [];

  arr.forEach((word) => {
    const firstLetter = word.substring(0, 1);
    const theRest = word.substring(1);

    return firstLetter.toUpperCase() + theRest.toLowerCase();
  });
  return newArr;
}

console.log(capitalizeWords(["hej", "hopp"])); // ska logg ["Hej", "Hopp"]

// Funktionen `capitalizeWords` tar en array `arr` som innehåller strängar.
/*function capitalizeWords(arr) {
    // Använder `map` för att skapa en ny array av strängar från den befintliga arrayen.
    return arr.map((word) => {
      // För varje ord i arrayen:
      
      // Hämtar den första bokstaven, konverterar den till versal (stor bokstav).
      const firstLetter = word.charAt(0).toUpperCase();
      
      // Hämtar resten av bokstäverna i ordet, konverterar dem till gemener (små bokstäver).
      const restOfWord = word.slice(1).toLowerCase();
      
      // Lägger ihop den versala första bokstaven och resten av ordet med små bokstäver.
      // Returnerar det modifierade ordet till den nya arrayen.
      return firstLetter + restOfWord;
    });
  }
  
  // En array med ord.
  const words = ["baBbBbBby", "cute", "sweet", "mumin"];
  
  // Anropar funktionen `capitalizeWords` med den angivna arrayen och loggar resultatet.
  console.log(capitalizeWords(words));
*/
