// 7.1 (2p) Skriv klart funktionen updatePeople
// som lägger till en property:
// adult: true
// om personen i arrayen är 18 år eller över annars
// en property:
// adult: false
// funktionen ska returnera den uppdaterade arrayen.

//DU KAN ANVÄNDA MAP HÄR

const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 15 },
  { name: "Charlie", age: 35 },
  { name: "Fred", age: 19 },
  { name: "Alice", age: 6 },
];

function updatePeople(peopleArr) {
  // Din kod här:
  return peopleArr.map((person) => {
    const adult = person.age >= 18;

    return { ...person, adult: adult };
  });
}

console.log(updatePeople(people));

// 7.2 (2p) Skriv en funktion med arrayen people som input som
// returnerar en array med bara vuxna. Alltså age minst 18 år.

function onlyAdults(peopleArr) {
  const filteredOnlyAdults = peopleArr.filter((person) => person.age >= 18);{
  return filteredOnlyAdults;}
}

console.log(onlyAdults(people));
