'use strict';

import {Parcela} from './Parcela.js';

const dadosTabela = document.querySelector('#dadosTabela');

export class Financiamento {
    #taxaJuros; //juros mensais
    #prazo; // em meses
    #parcelas = [];
    constructor(valor, entrada, taxaJuros, prazo) {
        this.#taxaJuros = taxaJuros;
        this.#prazo = prazo;
        // composição - class Financiamento possui objetos da class Parcelas
        this.#parcelas.push(new Parcela(0, 0, 0, 0, (valor - entrada)))
    }

    // método estático para cálculo do juros
    static calcJuros (valor, taxaJuros) {
        return valor * (taxaJuros / 100);
    }

    // método para calculo das parcelas mensais
    calcParcelasMensais() {
        let saldo = this.#parcelas[this.#parcelas.length -1].getSaldo();
        let prazo = this.#prazo - (this.#parcelas.length - 1);
        let amortizacao = saldo / prazo;
        for (let i=0; i < prazo; i++) {
            const numero = this.#parcelas.length;
            const juros = Financiamento.calcJuros(saldo, this.#taxaJuros);
            const valor = juros + amortizacao;
            saldo -= amortizacao;
            if (saldo < 0) {
                saldo = 0;
            }
            this.#parcelas.push(new Parcela(numero, valor, juros, amortizacao, saldo));
        }
    }

    // método para exibir as parcelas na aplicação
    exibeParcelas() {
        const parcelas = this.#parcelas.slice(1);
        for (const parcela of parcelas) {
            const linha = dadosTabela.insertRow(-1);
            for (const dado of parcela.getDadosFormatados()) {
                const celula = linha.insertCell(-1);
                celula.textContent = dado;
            }
        }
    }

    // método para exibir as parcelas na aplicação
    getParcelas() {
        return this.#parcelas;
    }

}