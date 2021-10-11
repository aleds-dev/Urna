let seuVoto = document.querySelector('.d1-1 span');
let cargo = document.querySelector('.d1-2 span');
let descricao = document.querySelector('.d1-4');
let aviso = document.querySelector('.d2');
let lateral = document.querySelector('.d1-right');
let numeros = document.querySelector('.d1-3');

let etapaAtual = 0;


function comecarEtapa(){
    let etapa = etapas[etapaAtual];

    let numeroHTML = '';

    for (let i = 0; i < etapa.numeros; i++) {
        numeroHTML += '<div class="numero"></div>';
        
    }

    seuVoto.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHTML;
}



function clicou(n){
    alert(n);
}

function branco(){
    alert("Branco");
    
}

function corrige(){
    alert("Corrige");
    
}
function confirma(){
alert("Confirma");
    
}

comecarEtapa();