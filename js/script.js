// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

// 'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

// BONUS:
// 1- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
// 2- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste

// TASTO PER AVVIARE IL GIOCO
const playbutton = document.getElementById("play");

// FUNZIONE PRICIPALE PLAY
function play() {
  console.log("Inizio...");

  const NUM_BOMB = 16;
  const bombsPosition = [];
  let score = 0;
  let numCell;
  const fieldgame = document.getElementById("field-game");
  fieldgame.innerHTML = "";
  const levelHtml = document.getElementById("livello");
  const level = levelHtml.value;
  switch (level) {
    case "1":
    default:
      numCell = 100;
      break;

    case "2":
      numCell = 81;
      break;

    case "3":
      numCell = 49;
      break;
  }
  console.log(numCell);

  const MAX_ATTEMPT = numCell - NUM_BOMB;

  while (bombsPosition.length < NUM_BOMB) {
    const bomb = randomNumber(1, numCell);
    if (!bombsPosition.includes(bomb)) {
      bombsPosition.push(bomb);
    }
  }
  console.log(bombsPosition);



  function handleClick() {
    console.log(this.querySelector('span') .innerText);
    const num = this.querySelector('span') .innerText
    this.classList.add('mycolor');
    this.removeEventListener('click', handleClick);
  
  }

  //celle
  function drawCell(num) {
    const cellPerSide = Math.sqrt(numCell);
    const cell = document.createElement("div");
    cell.className = "square";
    cell.style.width = `calc(100% / ${cellPerSide})`;
    cell.style.height = `calc(100% / ${cellPerSide})`;
    cell.innerHTML = `
             <span>${num}</span>
        `;
    cell.addEventListener("click", function () {
      this.classList.add("mycolor");
    });
    cell.addEventListener("click", scelta);

    return cell;
  // FUNZIONE DI SCELTA
  function scelta() {
    // let num = this.innerText;
    // console.log(num);
    this.removeEventListener("click", scelta);

    if (!bombsPosition.includes(num)) {
      this.classList.add("mycolor");
      this.innerHTML = `
          <span>${num}</span>
      `;
      score++;
      console.log(score);

      if (score === MAX_ATTEMPT) {
        gameOver();
      }
    } else {
      this.style.backgroundColor = "red";
      gameOver();
    }
  }
}

  // CAMPO DI GIOCO
  function drawGrid() {
    const grid = document.createElement("div");
    grid.className = "grid";
    for (let i = 1; i <= numCell; i++) {
      const cell = drawCell(i);
      grid.appendChild(cell);
    }
    fieldgame.appendChild(grid);
  }
  drawGrid();

  // STABILIRE SE L'UTENTE HA VINTO O HA PERSO
  function gameOver() {
    console.log("gameOver");
    const squares = document.getElementsByClassName("square");
    console.log(squares);

    for (i = 0; i < squares.length; i++) {
      squares[i].removeEventListener("click", handleClick);
      const num = squares.querySelector('span').innerText
      console.log(num);
      //se i+1 é nell'array delle bombe le scoperchiamo
      //if square [i] == bomsPosition
      // let num = i + 1;
      // if (bombsPosition.includes(num)) {
      //   squares[i].classList.add("red");
      }
    }

    if (score === MAX_ATTEMPT) {
      console.log("HAI VINTO");
    } else {
      console.log("HAI PERSO");
    }
  }


// EVENTO CLICK CHE ATTIVA IL GIOCO
playbutton.addEventListener("click", play);
