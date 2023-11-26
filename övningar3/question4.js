// 4.1 (3p) Skriv kod som lägger till 10 button element till html-sidan.
// Varje button ska innehålla en klass "primary"
// och texten "Button" + talet 1 till 10.
// Så här: <button class="primary">Button1</button> <button class="primary">Button2</button> ...
// Koden kan använda en for-loop

const myEl = document.querySelector("my-element");

for (let i = 1; i < 11; i++) {
  const buttonEl = document.createElement("btn");
  buttonEl.setAttribute("class", "primary");
  buttonEl.textContent = "Button" + i;

  buttonEl.addEventListener("click", (e) => {
    const el = e.target;

    if (myEl.className == "primary") {
      myEl.className = "secondary";
    } else {
      myEl.className = "primary";
    }
  });

  myEl.appendChild(buttonEl);
}

// 4.2 (2p) Lägg till addEventlistener på varje button.
// Vid eventet "click" på button ska klassen ändras till "secondary"
