console.log(`\n Trabanhando com Condicionais`);
const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 15;
const estaAcomoanhada = false;
let temPassagemComprada = false;
const destino = "Salvador";


console.log("\nDestinos Possiveis");
console.log(listaDeDestinos);

const podeEmbarcar = idadeComprador >= 18 || estaAcomoanhada == true 

let contador = 0;

while(contador<listaDeDestinos.length){
    if(listaDeDestinos[contador] == destino){
        console.log("destino existente!");
        console.log(listaDeDestinos[contador]);
        break;
    } 
    contador++;
}
