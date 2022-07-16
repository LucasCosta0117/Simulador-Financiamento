'use strict';

import {Parcela} from './Parcela.js';

class Financiamento {
    #taxaJuros; //juros mensais
    #prazo; // em meses
    #parcelas = [];
    constructor(valor, entrada, taxaJuros, prazo) {
        this.#taxaJuros = taxaJuros;
        this.#prazo = prazo;
        // composição - class Financiamento possui objetos da class Parcelas
        this.#parcelas.push(new Parcela(0, 0, 0, valor - entrada))
    }
}