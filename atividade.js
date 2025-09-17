//  Depósito simples
function debitarConta (entrada, saldo){
    return entrada + saldo    
}

// Saque simples
function sacarConta (retirada, saldo2){
    return retirada - saldo2
}

// Transferencia de conta
function transferirConta(transferencia, conta1, conta2) {
    const novaConta1 = conta1 - transferencia
    const novaConta2 = conta2 + transferencia
    return [novaConta1, novaConta2] // retorna as duas contas
}

// Saldo maior que um valor
function saldoMaior (deposito, valor)
{
    return deposito + valor
}

// Saldo mínimo exigido
function saldoMinimo (){
    
}

module.exports = 
{
    debitarConta,
    sacarConta,
    transferirConta,
    saldoMaior
}