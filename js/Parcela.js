'use strict';

export class Parcela {
    #numero;
    #valor;
    #juros;
    #amortizacao;
    #saldoDevedor;
    constructor (numero, valor, juros, amortizacao, saldoDevedor) {
        this.#numero = numero;
        this.#valor = valor;
        this.#juros = juros;
        this.#amortizacao = amortizacao;
        this.#saldoDevedor = saldoDevedor;
    }

    getSaldo() {
        return this.#saldoDevedor;
    }

    getDadosFormatados() {
        const dados = [];
        dados.push(this.#numero);
        dados.push(this.#valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}));
        dados.push(this.#amortizacao.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}));
        dados.push(this.#juros.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}));
        dados.push(this.#saldoDevedor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}));
        return dados;    
    }
}