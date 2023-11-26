// 1. (2p) Skriv klart funktionen addBgColor.
// addBgColor tar in ett DOM-element och en färg-kod,
// addBgColor ska uppdatera elementets style med färgkoden.
// tips: använd elementets style
const element = document.querySelector("#my-element");

function addBgColor(element, bgColor) {
  // lägg till din kod här
  element.style.backgroundColor =  "#ff0000";
}

addBgColor(element, "#ff0000"); // Ska göra elementet rött

/* function juiceMaskin(frukt) {
  return frukt + "-juice";
}
console.log(juiceMaskin("äpple"));

const juicemaskin = (frukt) => {
  return frukt + "-juice";
};

//Funktionsdeklaration
function remoteControl(channel) {
  return "Du ser på kanal " + channel;
}

//Trängselskatt

function trängselSkatt(tid) {
  if (tid <= 15 && tid >= 12) {
    return 20;
  } else {
    return 10;
  }
}
console.log(trängselSkatt(13));

//CRUD 

//CREATE
const  myArray2 = [hej, hopp];
myArray2.push("hej");
console.log(myArray2);

//READ
const myArray = [4, 5, 6, 10, 25];

const index4 = myArray[4];
console.log(index4)

console.log(myArray[3]);

//UPDATE
myArray[4] = 25;
console.log(myArray)

//DELETE
myArray[2] = null;
console.log(myArray);

myArray.splice(2, 1);
console.log(myArray);

//ITERATION ELLER LOOPAR = Går igenom en hel array och läser allt i arrayen


//räkna summan av arrayen

for (let i = 0; i <= 5; i++) {
  const result = myArray[i]
} 


// array-funktioner som loopar 
//forEach

myArray.forEach((number) => {
console.log(number)
})

//map 
//glöm inte return
const myArray2 = myArray.map((number) => {
return number + 2;
})


//OBJEKT 
//VISUELL REPRESENTATION AV OBJEKT

//NESTLADE OBJEKT - OBJEKT INNE I OBJEKT 

//ARRAYER MED OBJEKT 

//LOOPAR/ITERATION MED OBJEKT - MAP OCH FOR IN 


 */
