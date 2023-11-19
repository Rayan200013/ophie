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
    responseDiv.innerHTML = `${name}, if you were cheese, you'd be the gouda-est! Keep spreading that cheesy joy! 🥳🤩❤`;

    // Add animations or effects here
    responseDiv.style.animation = "celebrate 2s ease infinite";
  } else {
    responseDiv.innerHTML = "Please enter your name first.";
    responseDiv.style.color = "red";
  }
}

function deployPhraseFR() {
  const name = document.getElementById("nameInput").value;
  const responseDivFR = document.getElementById("response-fr");

  if (name) {
    responseDivFR.innerHTML = `Salut ${name}, si tu étais un fromage, tu serais le meilleur! Continue de répandre cette joie pleine de fromage! 🥳🤩❤`;

    // Add animations or effects here
    responseDivFR.style.animation = "celebrate 2s ease infinite";
  } else {
    responseDivFR.innerHTML = "Veuillez d'abord entrer votre nom.";
    responseDivFR.style.color = "red";
  }
}

function reset() {
  const responseDiv = document.getElementById("response");
  const responseDivFR = document.getElementById("response-fr");
  const nameInput = document.getElementById("nameInput");

  responseDiv.innerHTML = "";
  responseDivFR.innerHTML = "";
  nameInput.value = ""; // Reset the input field

  // Reset colors and animations if any
  responseDiv.style.color = "#333";
  responseDivFR.style.color = "#333";
  responseDiv.style.animation = "none";
  responseDivFR.style.animation = "none";
}
