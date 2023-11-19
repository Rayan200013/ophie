function sayHello() {
  const name = document.getElementById("nameInput").value;
  const responseDiv = document.getElementById("response");

  if (name) {
    responseDiv.innerHTML = `Hello ${name}!`;

    // Add animations or effects here
    responseDiv.style.animation = "celebrate 2s ease infinite";
  } else {
    responseDiv.innerHTML = "";
  }
}

function deployPhrase() {
  const name = document.getElementById("nameInput").value;
  const responseDiv = document.getElementById("response");

  if (name) {
    responseDiv.innerHTML = `${name}, if you were cheese, you'd be the gouda-est! Keep spreading that cheesy joy!`;

    // Add animations or effects here
    responseDiv.style.animation = "celebrate 2s ease infinite";
  } else {
    responseDiv.innerHTML = "Please enter your name first.";
    responseDiv.style.color = "red";
  }
}
