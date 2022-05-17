const personsCard = document.getElementById("people");
const starshipCard = document.getElementById("starships");
const planetsCard = document.getElementById("planets");

const btnPhrases = document.getElementById("btn-phrases");
const phrase = document.getElementById("phrase");

function fillCounters() {
  Promise.all([getData("people"), getData("starships"), getData("planets")])
    .then((data) => {
      personsCard.innerHTML = data[0].count;
      starshipCard.innerHTML = data[1].count;
      planetsCard.innerHTML = data[2].count;
    })
    .catch((err) => console.error("ERROR: ", err));
}

fillCounters();

function getData(param) {
  return fetch(`https://swapi.dev/api/${param}`).then((res) => res.json());
}

function loadPhase() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((res) => res.json())
    .then((data) => {
      phrase.innerHTML = `${data.value}`;
      btnPhrases.innerHTML = "Ver mais uma frase";
    })
    .catch((err) => console.log("ERROR: ", err));
}
