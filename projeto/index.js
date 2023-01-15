

const cliente1 = new cliente();
    cliente1.nome = "Ricardo";
    cliente1.cpf = 11122233309;

const cliente2 = new cliente();
    cliente2.nome = "Alice";
    cliente2.cpf = 88899977730;

const contaCorrenteRicardo = new contaCorrente();
    contaCorrenteRicardo.agencia = 1001;




contaCorrenteRicardo.depositar(-100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);

const valorSacado = contaCorrenteRicardo.sacar(50);
console.log(valorSacado);

console.log(contaCorrenteRicardo);
