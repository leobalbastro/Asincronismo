console.log("Hola Mundo");

//con funciones callback
function saludar(saludo){
    console.log(saludo);
}

function text(){
    let text= "hola mundo";
    saludar(text);
}

text();

//con arrays
const palabra1 = "Hola";
const palabra2 = "Mundo";

const palabraCompleta = `${palabra1} ${palabra2}`;
const arrayWord = palabraCompleta.split("");
let element ="";
for (let i = 0; i < arrayWord.length; i++) {
    element+=arrayWord[i];
}
console.log(element);