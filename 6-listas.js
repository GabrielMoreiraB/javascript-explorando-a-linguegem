console.log(`Trabanhando com Listas`);
const listaDeDestinos = new Array(
    `Salvador`, 
    `São Paulo`, 
    `Rio de Janeiro`

);

//add
listaDeDestinos.push(`Belo Horizonte`);


console.log("Destinos Possiveis");

console.log(listaDeDestinos);

//remorver
listaDeDestinos.splice(1, 1);


console.log(listaDeDestinos);
console.log(listaDeDestinos[1]);