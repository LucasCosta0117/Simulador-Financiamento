'use strict';

const comCarencia = document.querySelector('#comCarencia');
const listaCarencia = document.querySelector('#listaCarencia');
const dadosTabela = document.querySelector('#dadosTabela');

comCarencia.addEventListener('change', function() {
    if (this.checked) {
        listaCarencia.style.visibility = 'visible';
    } else {
        listaCarencia.style.visibility = 'hidden';
    }
});