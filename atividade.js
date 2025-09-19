    // Exercício 1: Depósito simples
    function debitarConta(entrada, saldo) {
        return entrada + saldo;
    }

    // Exercício 2: Saque simples
    function sacarConta(retirada, saldo) {
        return saldo - retirada;
    }

    // Exercício 3: Transferência entre contas
    function transferirConta(transferencia, conta1, conta2) {
        const novaConta1 = conta1 - transferencia;
        const novaConta2 = conta2 + transferencia;
        return [novaConta1, novaConta2];
    }

    // Exercício 4: Saldo maior que um valor
    function saldoMaior(saldo, valor) {
        return saldo > valor;
    }

    // Exercício 5: Saldo mínimo exigido
    function saldoMinimo(saldo, minimo) {
        return saldo >= minimo;
    }

    // Exercício 6: Conta no limite
    function contaNoLimite(saldo, saque) {
        const novoSaldo = saldo - saque;
        return novoSaldo < 10;
    }

    // Exercício 7: Conta zerada
    function contaZerada(saldo, saque) {
        const novoSaldo = saldo - saque;
        return novoSaldo <= 0;
    }

    // Exercício 8: Correção de arredondamento em juros
    function calcularJuros() {
        return 0.1 + 0.2; // Retorna aproximadamente 0.3
    }

    // Exercício 9: Saldo negativo proibido
    function saldoNegativo(saldo, saque) {
        const novoSaldo = saldo - saque;
        return novoSaldo < 0;
    }

    module.exports = {
        debitarConta,
        sacarConta,
        transferirConta,
        saldoMaior,
        saldoMinimo,
        contaNoLimite,
        contaZerada,
        calcularJuros,
        saldoNegativo
    };