import { cliente } from "./Cliente.js";
import { contaCorrente } from "./ContaCorrente.js";

const cliente1 = new cliente("Ricardo", 11122233309);


const cliente2 = new cliente("Alice", 88899977730);

const contaCorrenteRicardo = new contaCorrente();
    contaCorrenteRicardo.agencia = 1001;
    contaCorrenteRicardo.cliente = cliente1;
    contaCorrenteRicardo.depositar(500);


    const conta2 = new contaCorrente();
    conta2.cliente = cliente2;
    conta2.agencia = 102;

    contaCorrenteRicardo.transferir(200, conta2);


console.log(conta2);
console.log(contaCorrenteRicardo);
