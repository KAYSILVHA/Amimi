let now = new Date;
let dia = now.getDate();
let mes = now.getMonth() + 1;
let ano = now.getFullYear();
let diaSemana = now.getDay();
let anoDoisUltimosDigitos = ano % 100;

const dom = document.getElementById('dom');
const seg = document.getElementById('seg');
const ter = document.getElementById('ter');
const quar = document.getElementById('quar');
const quin = document.getElementById('quin');
const sex = document.getElementById('sex');
const sab = document.getElementById('sab');
const diaDeHoje = document.getElementById('diaDeHoje');

const hoje = dia;
const amanha = dia + 1;
const ontem = dia - 1;
const hojeArmazenado = document.getElementById('hoje-armazenado');
const ontemArmazenado = document.getElementById('ontem-armazenado');

diaDeHoje.innerHTML = `<p>${dia}</p>`;
hojeArmazenado.innerHTML = `<h3>Dia</h3><h4>${hoje}</h4>`;
ontemArmazenado.innerHTML = `<h3>Dia</h3><h4>${ontem}</h4>`;

if(mes == 1 || mes ==3 || mes==5 || mes==7 || mes ==8 || mes==10 ||mes==12){
  mudandoDiaSemana31Dias();
}
if(mes == 2 || mes ==4 || mes==6 || mes==9 || mes ==11){
  mudandoDiaSemana30Dias();
}




function mudandoDiaSemana30Dias() {
  if (diaSemana == 1 && dia <= 30) {
    dom.innerHTML = `<p>${ontem}</p>`;
    seg.innerHTML = `<p>${hoje}</p>`;
    seg.setAttribute("class", "dataH")
    ter.innerHTML = `<p>${amanha}</p>`;
    if (ontem == 0){
      dom.innerHTML = `<p>${30}</p>`;
    }
    if (amanha == 31) {
      ter.innerHTML = `<p>${1}</p>`;
    }
  } else if (diaSemana == 2 && dia <= 30) {
    seg.innerHTML = `<p>${ontem}</p>`;
    ter.innerHTML = `<p>${hoje}</p>`;
    ter.setAttribute('class', 'dataH');
    quar.innerHTML = `<p>${amanha}</p>`;
    if (ontem == 0){
      seg.innerHTML = `<p>${30}</p>`;
    }
    if (amanha == 31) {
      quar.innerHTML = `<p>${1}</p>`;
    }
  } else if (diaSemana == 3 && dia <= 30) {
    ter.innerHTML = `<p>${ontem}</p>`;
    quar.innerHTML = `<p>${hoje}</p>`;
    quar.setAttribute('class', 'dataH');
    quin.innerHTML = `<p>${amanha}</p>`;
    if (ontem == 0){
      ter.innerHTML = `<p>${30}</p>`;
    }
    if (amanha == 31) {
      quin.innerHTML = `<p>${1}</p>`;
    }
  } else if (diaSemana == 4 && dia <= 30) {
    quar.innerHTML = `<p>${ontem}</p>`;
    quin.innerHTML = `<p>${hoje}</p>`;
    quin.setAttribute('class', 'dataH');
    sex.innerHTML = `<p>${amanha}</p>`;
    if (ontem == 0){
      quar.innerHTML = `<p>${30}</p>`;
    }
    if (amanha == 31) {
      sex.innerHTML = `<p>${1}</p>`;
    }
  } else if (diaSemana == 5 && dia <= 30) {
    quin.innerHTML = `<p>${ontem}</p>`;
    sex.innerHTML = `<p>${hoje}</p>`;
    sex.setAttribute('class', 'dataH');
    sab.innerHTML = `<p>${amanha}</p>`;
    if (ontem == 0){
      quin.innerHTML = `<p>${30}</p>`;
    }
    if (amanha == 31) {
      sab.innerHTML = `<p>${1}</p>`;
    }
  } else if (diaSemana == 6 && dia <= 30) {
    sex.innerHTML = `<p>${ontem}</p>`;
    sab.innerHTML = `<p>${hoje}</p>`;
    sab.setAttribute('class', 'dataH');
    dom.innerHTML = `<p>${amanha}</p>`;
    if (ontem == 0){
      sex.innerHTML = `<p>${30}</p>`;
    }
    if (amanha == 31) {
      dom.innerHTML = `<p>${1}</p>`;
    }
  } else if (diaSemana == 7 && dia <= 30) {
    sab.innerHTML = `<p>${ontem}</p>`;
    dom.innerHTML = `<p>${hoje}</p>`;
    dom.setAttribute('class', 'dataH');
    seg.innerHTML = `<p>${amanha}</p>`;
    if (ontem == 0){
      sab.innerHTML = `<p>${30}</p>`;
    }
    if (amanha == 31) {
      seg.innerHTML = `<p>${1}</p>`;
    }
  }
}
function mudandoDiaSemana31Dias() {
  if (diaSemana == 1 && dia <= 31) {
    dom.innerHTML = `<p>${ontem}</p>`;
    seg.innerHTML = `<p>${hoje}</p>`;
    seg.setAttribute("class", "dataH")
    ter.innerHTML = `<p>${amanha}</p>`;
    if (ontem == 0){
      dom.innerHTML = `<p>${31}</p>`;
    }
    if (amanha == 32) {
      ter.innerHTML = `<p>${1}</p>`;
    }
  } else if (diaSemana == 2 && dia <= 31) {
    seg.innerHTML = `<p>${ontem}</p>`;
    ter.innerHTML = `<p>${hoje}</p>`;
    ter.setAttribute('class', 'dataH');
    quar.innerHTML = `<p>${amanha}</p>`;
    if (ontem == 0){
      seg.innerHTML = `<p>${31}</p>`;
    }
    if (amanha == 32) {
      quar.innerHTML = `<p>${1}</p>`;
    }
  } else if (diaSemana == 3 && dia <= 31) {
    ter.innerHTML = `<p>${ontem}</p>`;
    quar.innerHTML = `<p>${hoje}</p>`;
    quar.setAttribute('class', 'dataH');
    quin.innerHTML = `<p>${amanha}</p>`;
    if (ontem == 0){
      ter.innerHTML = `<p>${31}</p>`;
    }
    if (amanha == 32) {
      quin.innerHTML = `<p>${1}</p>`;
    }
  } else if (diaSemana == 4 && dia <= 31) {
    quar.innerHTML = `<p>${ontem}</p>`;
    quin.innerHTML = `<p>${hoje}</p>`;
    quin.setAttribute('class', 'dataH');
    sex.innerHTML = `<p>${amanha}</p>`;
    if (ontem == 0){
      quar.innerHTML = `<p>${31}</p>`;
    }
    if (amanha == 32) {
      sex.innerHTML = `<p>${1}</p>`;
    }
  } else if (diaSemana == 5 && dia <= 31) {
    quin.innerHTML = `<p>${ontem}</p>`;
    sex.innerHTML = `<p>${hoje}</p>`;
    sex.setAttribute('class', 'dataH');
    sab.innerHTML = `<p>${amanha}</p>`;
    if (ontem == 0){
      quin.innerHTML = `<p>${31}</p>`;
    }
    if (amanha == 32) {
      sab.innerHTML = `<p>${1}</p>`;
    }
  } else if (diaSemana == 6 && dia <= 31) {
    sex.innerHTML = `<p>${ontem}</p>`;
    sab.innerHTML = `<p>${hoje}</p>`;
    sab.setAttribute('class', 'dataH');
    dom.innerHTML = `<p>${amanha}</p>`;
    if (ontem == 0){
      sex.innerHTML = `<p>${31}</p>`;
    }
    if (amanha == 32) {
      dom.innerHTML = `<p>${1}</p>`;
    }
  } else if (diaSemana == 7 && dia <= 31) {
    sab.innerHTML = `<p>${ontem}</p>`;
    dom.innerHTML = `<p>${hoje}</p>`;
    dom.setAttribute('class', 'dataH');
    seg.innerHTML = `<p>${amanha}</p>`;
    if (ontem == 0){
      sab.innerHTML = `<p>${31}</p>`;
    }
    if (amanha == 32) {
      seg.innerHTML = `<p>${1}</p>`;
    }
  }
}