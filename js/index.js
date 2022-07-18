'use strict';

import {Financiamento} from './Financiamento.js';
import {FinanciamentoCarencia} from './FinanciamentoCarencia.js';

const comCarencia = document.querySelector('#comCarencia');
const listaCarencia = document.querySelector('#listaCarencia');
const btnCalcular = document.querySelector('#btnCalcular');
const tabelaCompleta = document.querySelector('#tabelaCompleta');
const dadosTabela = document.querySelector('#dadosTabela');
const textoValor = document.querySelector('#textoValor');
const textoEntrada = document.querySelector('#textoEntrada');
const textoTaxaJuros = document.querySelector('#textoTaxaJuros');
const textoPrazo = document.querySelector('#textoPrazo');
const btnNovaSimulacao = document.querySelector('#btnNovaSimulacao');
const carencia = document.querySelector('#carencia');


comCarencia.addEventListener('change', function() {
    if (this.checked) {
        listaCarencia.style.visibility = 'visible';
    } else {
        listaCarencia.style.visibility = 'hidden';
    }
});

btnCalcular.addEventListener('click', function() {
    const valor = parseFloat(textoValor.value);
    const entrada = parseFloat(textoEntrada.value);
    const taxaJuros = parseFloat(textoTaxaJuros.value);
    const prazo = parseFloat(textoPrazo.value);
    let simulacao;

    if(comCarencia.checked) {
        const carencia = parseInt(listaCarencia.value);
        simulacao = new FinanciamentoCarencia(valor, entrada, taxaJuros, prazo, carencia);
    } else {
        simulacao = new Financiamento(valor, entrada, taxaJuros, prazo);
    }

    simulacao.calcParcelasMensais();
    simulacao.exibeParcelas();
    //Formata a exibição para o resultado desejado
    tabelaCompleta.style.visibility = 'visible';
    btnNovaSimulacao.style.visibility = 'visible';
});
