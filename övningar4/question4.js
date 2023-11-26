// 4. Hämta och visa foton. 3p
// Ladda ner foton med fetch från denna url: https://jsonplaceholder.typicode.com/photos
// Visa dom första 20 fotona på sidan.

// Skapa ett nytt HTML-element av typen <div> som kommer att hålla våra todos
const todosElement = document.createElement("div");

// Lägg till det nya elementet som ett barn till <body> i HTML-dokumentet
document.body.appendChild(todosElement);

// En funktion som startar och hämtar todos från en URL
const start = async () => {
  // Hämta responsen från URL via fetch
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");

  // Omvandla responsens data till JSON-format
  const data = await response.json();

  // Skapa en variabel för att filtrera ut första 20 photos: 1
  const filteredPhotos = data.slice(0, 20);

  // Logga responsen och alla todos i konsolen för att se att det fungerar
  console.log("response", response);
  console.log("all data", data);

  // Använd filtrerade datan för att visa första 20 foton på skärmen
  // För varje foto, skapa ett nytt HTML-element för att visa fotona på skärmen
  filteredPhotos.forEach((filteredPhoto) => {
    const photoEl = document.createElement("img");

    // Visa första 20 fotona
    photoEl.src = filteredPhoto.url;

    photoEl.alt = `Photo: ${filteredPhoto.url}`;

    todosElement.appendChild(photoEl);
  });
};
start();
