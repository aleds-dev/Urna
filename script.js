let seuVoto = document.querySelector(".d1-1 span");
let cargo = document.querySelector(".d1-2 span");
let descricao = document.querySelector(".d1-4");
let aviso = document.querySelector(".d2");
let lateral = document.querySelector(".d1-right");
let numeros = document.querySelector(".d1-3");

let etapaAtual = 0;
let numero = '';
let branco = false;
let votoBranco = '';
let votos = [];

function comecarEtapa() {
  let etapa = etapas[etapaAtual];

  branco = false;
  let numeroHTML = "";
  numero = "";

  for (let i = 0; i < etapa.numeros; i++) {
    if (i === 0) {
      numeroHTML += '<div class="numero pisca"></div>';
    } else {
      numeroHTML += '<div class="numero"></div>';
    }
  }

  seuVoto.style.display = "none";
  cargo.innerHTML = etapa.titulo;
  descricao.innerHTML = "";
  aviso.style.display = "none";
  lateral.innerHTML = "";
  numeros.innerHTML = numeroHTML;
}

function atualizaInterface() {
  let etapa = etapas[etapaAtual];
  let candidato = etapa.candidatos.filter((item) => {
    if (item.numero === numero) {
      return true;
    } else {
      return false;
    }
  });
  if (candidato.length > 0) {
    candidato = candidato[0];
    seuVoto.style.display = "block";
    aviso.style.display = "block";
    descricao.innerHTML = `Nome: ${candidato.nome} <br/> Partido: ${candidato.partido}`;

    let fotosHTML = "";
    for (const i in candidato.fotos) {
      if(candidato.fotos[i].small){
        fotosHTML += `<div class="d1-image small">
        <img src="imagens/${candidato.fotos[i].url}" alt="" />
        ${candidato.fotos[i].legenda}
        </div>`;
      }else{
        fotosHTML += `<div class="d1-image">
            <img src="imagens/${candidato.fotos[i].url}" alt="" />
            ${candidato.fotos[i].legenda}
            </div>`;
      }
    }
    lateral.innerHTML = fotosHTML;
  } else {
    seuVoto.style.display = "block";
    aviso.style.display = "block";
    descricao.innerHTML = '<div class="avisoG pisca">VOTO NULO</div>';
  }
}

function clicou(n) {
  let num = document.querySelector(".numero.pisca");
  if (num !== null) {
    num.innerHTML = n;
    numero = `${numero}${n}`;

    num.classList.remove("pisca");
    if (num.nextElementSibling !== null) {
      num.nextElementSibling.classList.add("pisca");
    } else {
      atualizaInterface();
    }
  }
}

function white() {
  numero = '';
  branco = true;
  seuVoto.style.display = "block";
  aviso.style.display = "block";
  numeros.innerHTML = "";
  descricao.innerHTML = '<div class="avisoG pisca">VOTO EM BRANCO</div>';
  lateral.innerHTML = "";
}

function corrige() {
  comecarEtapa();
}

function confirma() {

  let etapa = etapas[etapaAtual];
  let votoConfirmado = false;

  if(branco === true){
    votoConfirmado = true;
    votos.push({
      etapa:etapas[etapaAtual].titulo,
      voto: 'branco'
    })
  } else if(numero.length === etapa.numeros){
    votoConfirmado = true;
    votos.push({
      etapa:etapas[etapaAtual].titulo,
      voto: numero
    });
  }
  if(votoConfirmado){
      etapaAtual++;
      if(etapas[etapaAtual] !== undefined){
        comecarEtapa();
      }else{
       document.querySelector('.tela').innerHTML = '<div class="aviso-fim pisca">FIM!</div>';
       console.log(votos);
      }
  }
}

comecarEtapa();
