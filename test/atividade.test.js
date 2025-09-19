const { 
    debitarConta, 
    sacarConta, 
    transferirConta, 
    saldoMaior, 
    saldoMinimo, 
    contaNoLimite, 
    contaZerada, 
    calcularJuros, 
    saldoNegativo 
} = require('../atividade');

// Exercício 1: Depósito simples - toBe
test('Depósito de 100 em conta zerada resulta em 100', () => {
    expect(debitarConta(100, 0)).toBe(100);
});

// Exercício 2: Saque simples - toBe
test('Saque de 50 de saldo 200 resulta em 150', () => {
    expect(sacarConta(50, 200)).toBe(150);
});

// Exercício 3: Transferência entre contas - toBe
test('Transferência de 100: origem 500→400, destino 200→300', () => {
    const resultado = transferirConta(100, 500, 200);
    expect(resultado[0]).toBe(400);
    expect(resultado[1]).toBe(300);
});

// Exercício 4: Saldo maior que valor - toBeGreaterThan
test('Saldo 1000 é maior que 500', () => {
    const saldo = debitarConta(1000, 0);
    expect(saldo).toBeGreaterThan(500);
});

// Exercício 5: Saldo mínimo exigido - toBeGreaterThanOrEqual
test('Saldo 75 atende mínimo de 50', () => {
    const saldo = sacarConta(25, 100); // 100 - 25 = 75
    expect(saldo).toBeGreaterThanOrEqual(50);
});

// Exercício 6: Conta no limite - toBeLessThan
test('Saldo 5 após saque é menor que 10', () => {
    const saldo = sacarConta(95, 100); // 100 - 95 = 5
    expect(saldo).toBeLessThan(10);
});

// Exercício 7: Conta zerada - toBeLessThanOrEqual
test('Saldo zerado é menor ou igual a 0', () => {
    const saldo = sacarConta(300, 300); // 300 - 300 = 0
    expect(saldo).toBeLessThanOrEqual(0);
});

// Exercício 8: Correção de arredondamento - toBeCloseTo
test('0.1 + 0.2 é aproximadamente 0.3', () => {
    expect(calcularJuros()).toBeCloseTo(0.3);
});

// Exercício 9: Saldo negativo - toBeLessThan
test('Saque maior que saldo resulta em valor negativo', () => {
    const saldo = sacarConta(150, 100); // 100 - 150 = -50
    expect(saldo).toBeLessThan(0);
});