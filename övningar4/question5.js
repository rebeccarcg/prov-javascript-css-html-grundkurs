// 5. Responsive Users 3p
// Ladda ner users från denna url: https://jsonplaceholder.typicode.com/users
// För varje user ska name, email och city visas i en div och placeras under varandra.
// I desktop-vy ska divarna för varje user visas i 3 kolumner.
// I mobil-vy ska divarna för varje user visas i en kolumn med 100% width.

const userElement = document.createElement("div");
userElement.className = "user-container";

// Lägg till det nya elementet som ett barn till <body> i HTML-dokumentet
document.body.appendChild(userElement);

const start = async () => {
  // Hämta responsen från URL via fetch
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  // Omvandla responsens data till JSON-format
  const data = await response.json();

  // Logga responsen och alla users i konsolen för att se att det fungerar
  console.log("response", response);
  console.log("all users", data);

  data.forEach((user) => {
    const userDiv = document.createElement("div");
    userDiv.className = "user-card";
    userDiv.innerHTML = `name: ${user.name} e-mail: ${user.email} city: ${user.address.city}`;

    userElement.appendChild(userDiv);
  });
};

start();

//Andra exemplet skapar individuella divar  för namn, e-mail och address

/*const userElement = document.createElement("div");
userElement.className = "user-container";

// Lägg till det nya elementet som ett barn till <body> i HTML-dokumentet
document.body.appendChild(userElement);

const start = async () => {
  // Hämta responsen från URL via fetch
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  // Omvandla responsens data till JSON-format
  const data = await response.json();

  // Logga responsen och alla users i konsolen för att se att det fungerar
  console.log("response", response);
  console.log("all users", data);

  data.forEach((user) => {
    const userContainer = document.createElement("div");
    userContainer.className = "user-card";
    // Create individual divs for name, email, and city
    const nameDiv = document.createElement("div");
    nameDiv.innerHTML = `Name: ${user.name}`;

    const emailDiv = document.createElement("div");
    emailDiv.innerHTML = `Email: ${user.email}`;

    const cityDiv = document.createElement("div");
    cityDiv.innerHTML = `City: ${user.address.city}`;

    // Append the individual divs to the user container
    userContainer.appendChild(nameDiv);
    userContainer.appendChild(emailDiv);
    userContainer.appendChild(cityDiv);

    userElement.appendChild(userContainer);
  });
};
start();*/
