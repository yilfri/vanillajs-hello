let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function random (options) {
    let randomOption = Math.floor(Math.random() * options.length)
    console.log(options + "-" + randomOption)
    return options[randomOption] 
}

window.onload = function() {
  //write your code here
  const excuse = document.getElementById("excuse")
  console.log("Hola")
  excuse.innerHTML= `<h2>${random(who)} ${random(action)} ${random(what)} ${random(when)}</h2>`;
};