// 8. (2p) Skriv klart funktionen pizzaPrice som tar en pizza-sort
// som input och returnerar priset.
// Pizza-sorterna är begränsade till följande pizzor:
// "hawaii", "peperoni" och "vegetarian"
// En "hawaii" kostar 80 kr
// En "peperoni" kostar 90 kr
// En "vegetarian" kostar 85 kr

function pizzaPrice(pizza) {
  //Din kod här.

  if (pizza == "peperoni") {
    return "90 kr";
  } else if (pizza == "hawaii") {
    return "80 kr";
  } else if (pizza == "vegetarian") {
    return "85 kr";
  } else {
    ("pizza is not on menu");
  }
}

console.log(pizzaPrice("vegetarian"));
console.log(pizzaPrice("hawaii"));
console.log(pizzaPrice("peperoni"));
