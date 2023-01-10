console.log(`Trabanhando com Condicionais`);
const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 21;
const estaAcomoanhada = false;
console.log("Destinos Possiveis");
console.log(listaDeDestinos);

/*if(idadeComprador >= 18){
    console.log("Comprador maior de idade")
    listaDeDestinos.splice(1, 1);
}else if(estaAcomoanhada){
    console.log("Comprador é menor mas esta acompanhad")
    listaDeDestinos.splice(1, 1);
}else  {
    console.log("Comprador menor de idade, não podemos ve}nder");
}*/

if (idadeComprador >= 18 || estaAcomoanhada == true) {
  console.log("Comprador maior de idade");
  listaDeDestinos.splice(1, 1);
}  else {
  console.log("Comprador menor de idade, não podemos ve}nder");
}
