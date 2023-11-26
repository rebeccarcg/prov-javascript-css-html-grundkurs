// Hämta todo-data från denna url: https://jsonplaceholder.typicode.com/todos/
// Skriv ut med html på skärmen titeln på alla todo-objekt som har
// completed: true

// You can use filter and forEach here

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

  // Skapa en variabel för att filtrera ut todos där completed är true
  const completedToDos = toDos.filter((toDo) => toDo.completed === true);

  // Logga responsen och alla todos i konsolen för att se att det fungerar
  console.log("response", response);
  console.log("all todos", toDos);

  // Använd filtrerade datan för att visa alla todos där completed är true på skärmen
  // För varje todo, skapa ett nytt HTML-element för att visa todos titel
  completedToDos.forEach((completedToDo) => {
    const todoEl = document.createElement("div");

    // Visa "completed: true" för varje todo på skärmen
    todoEl.innerHTML = `completed: ${completedToDo.completed}`;

    // Lägg till det nya elementet till den övergripande todos-containeren
    todosElement.appendChild(todoEl);
  });
};

// Starta funktionen när sidan laddas
start();
