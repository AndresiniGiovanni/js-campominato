function randomNumber(min, max) {
  //console.log(arguments);//
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function notificationError(msgError) {
  const alerta = document.createElement("div");
  alerta.className = "alert alert-danger";
  alerta.innerHTML = msgError;
  return alerta;
}
function removeFirstNotification() {
  const alertToRemove = document.querySelector(".alert");
  console.log(alertToRemove);
  if (alertToRemove) alertToRemove.remove();
}

// PALINDROME REVERSE 
function palindromoReverse(str) {
  let parola = str.toLowerCase();
  let parolaGirata = parola.split("").reverse().join("");

  // for(let i = parolaLen - 1; i >= 0; i-- ){
  //     parolaGirata += parola.charAt(i);
  // }
  return parolaGirata === parola;
}





