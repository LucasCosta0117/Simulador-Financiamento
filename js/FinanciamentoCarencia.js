'use strict';

import {Parcela} from './Parcela.js';
import {Financiamento} from './Financiamento.js';

export class FinanciamentoCarencia extends Financiamento {
    #carencia;
    #taxaJuros;
    #parcelas = [];
    constructor(valor, entrada, taxaJuros, prazo, carencia) {
        super(valor, entrada, taxaJuros, prazo);
        this.#taxaJuros = taxaJuros;
        this.#parcelas = super.getParcelas();
        this.#carencia = carencia;
    }

    calcParcelasMensais() {
        let saldo = this.#parcelas[0].getSaldo();        
        for(let i=0; i < this.#carencia; i++){
            const numero = this.#parcelas.length;
            saldo += Financiamento.calcJuros(saldo, this.#taxaJuros);
            this.#parcelas.push(new Parcela(numero, 0, 0, 0, saldo));
        }
        super.calcParcelasMensais();
    }
    
}
