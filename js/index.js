'use strict';

import {Financiamento} from './Financiamento.js';
import {FinanciamentoCarencia} from './FinanciamentoCarencia.js';

const comCarencia = document.querySelector('#comCarencia');
const listaCarencia = document.querySelector('#listaCarencia');
const btnCalcular = document.querySelector('#btnCalcular');
const dadosTabela = document.querySelector('#dadosTabela');
const textoValor = document.querySelector('#textoValor');
const textoEntrada = document.querySelector('#textoEntrada');
const textoTaxaJuros = document.querySelector('#textoTaxaJuros');
const textoPrazo = document.querySelector('#textoPrazo');
const btnNovaSimulacao = document.querySelector('#btnNovaSimulacao');
const carencia = document.querySelector('#carencia');
const resultados = document.querySelector('#resultados');

//Evento para exibir ou ocultar opções de carência
comCarencia.addEventListener('change', function() {
    if (this.checked) {
        listaCarencia.style.visibility = 'visible';
    } else {
        listaCarencia.style.visibility = 'hidden';
    }
});

//Evento para realiar a simulação
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
    resultados.style.visibility = 'visible';
    btnCalcular.style.visibility = 'hidden';
    if(comCarencia.checked == false) {
        carencia.style.visibility = 'hidden';
    }
});

//Evento para limpar os resultados e realizar uma nova simulação
btnNovaSimulacao.addEventListener('click', function() {
    //Reseta todos campos do form
    textoValor.value = "";
    textoEntrada.value = "";
    textoTaxaJuros.value = "";
    textoPrazo.value = "";
    comCarencia.checked = false;
    listaCarencia.style.visibility = 'hidden';
    //Limpa a tabela;
    while (dadosTabela.firstChild) {
        dadosTabela.firstChild.remove();
    }
    //Restaura exibição para uma nova simulação
    resultados.style.visibility = 'hidden';
    btnCalcular.style.visibility = 'visible';
    carencia.style.visibility = 'visible';
});
