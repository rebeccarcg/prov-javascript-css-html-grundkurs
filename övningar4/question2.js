// 10.1 Hämta todo-data från denna url: https://jsonplaceholder.typicode.com/todos/
// Skriv ut med html på skärmen titeln på alla todo-objekt som har
// userId: 1

// 10.2 Lägg till en done-knapp under varje titel. Om todo-objektet är genomfört,
// alltså completed: true, så ska det stå "Undo" på knappen annars "Done"

// 10.3 Knappen ska kunna växla mellan "Undo" och "Done" när man trycker på den.
// Om det står "Undo" på knappen ska titeln vara genomstruken, alltså i css:
// text-decoration: line-through;
// Annars ska den inte vara det.

// Skapa ett nytt HTML-element av typen <div> som kommer att hålla våra todos
const todosElement = document.createElement("div");

// Lägg till det nya elementet som ett barn till <body> i HTML-dokumentet
document.body.appendChild(todosElement);

// En funktion som startar och hämtar todos från en URL
const start = async () => {
  // Hämta responsen från URL via fetch
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");

  // Omvandla responsens data till JSON-format
  const toDos = await response.json();

  // Skapa en variabel för att filtrera ut todos där med userID: 1
  const usersWithId1 = toDos.filter((toDo) => toDo.userId === 1);

  // Logga responsen och alla todos i konsolen för att se att det fungerar
  console.log("response", response);
  console.log("all todos", toDos);

  // Använd filtrerade datan för att visa alla todos med user id: 1 på skärmen
  // För varje user, skapa ett nytt HTML-element för att visa user titel
  usersWithId1.forEach((userWithId1) => {
    const user1El = document.createElement("div");
    // Visa "userId: 1" för varje user på skärmen
    user1El.innerHTML = `USER ID 1: ${userWithId1.title}`;
    //Lägg till en done knapp under varje titel
    const titleButton = document.createElement("button");

    // Visa text för varje button på skärmen med "Undo" eller "Done" genom ett if statement

    if (userWithId1.completed === true) {
      titleButton.innerHTML = "Undo";
    } else {
      titleButton.innerHTML = "Done";
    }

    titleButton.addEventListener("click", (e) => {
      if (titleButton.innerHTML === "Undo") {
        titleButton.innerHTML = "Done";
        user1El.style.textDecoration = "none";
      } else {
        titleButton.innerHTML = "Undo";
        user1El.style.textDecoration = "line-through";
      }
    });

    // Lägg till det nya Button elementet till den övergripande todos-containeren
    user1El.appendChild(titleButton);
    // Lägg till det nya Title elementet till den övergripande todos-containeren
    todosElement.appendChild(user1El);
  });
};
start();
