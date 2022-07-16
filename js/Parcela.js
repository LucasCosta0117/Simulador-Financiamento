'use strict';

export class Parcela {
    #numero;
    #valor;
    #juros;
    #amortizacao;
    #saldoDevedor;
    constructor (numero, valor, juros, amortizacao, saldoDevedor){
        this.#numero = numero;
        this.#valor = valor;
        this.#juros = juros;
        this.#amortizacao = amortizacao;
        this.#saldoDevedor = saldoDevedor;
    }
}