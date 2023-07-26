const dois = document.getElementById('dois');
const tres = document.getElementById('tres');
const quatro = document.getElementById('quatro');
const cinco = document.getElementById('cinco');
const seis = document.getElementById('seis');
const sete = document.getElementById('sete');
const oito = document.getElementById('oito');
const nove = document.getElementById('nove');
const dez = document.getElementById('dez');
const onze = document.getElementById('onze');
const doze = document.getElementById('doze');
const treze = document.getElementById('treze');
const quatorze = document.getElementById('quatorze');
const quinze = document.getElementById('quinze');
const dezesseis = document.getElementById('dezesseis');
const dezessete = document.getElementById('dezessete');
const dezoito = document.getElementById('dezoito');
const dezenove = document.getElementById('dezenove');
const footer = document.getElementById('footer');
const tela = document.getElementById('main');

dois.addEventListener('click', musicaDois)
tres.addEventListener('click', musicaTres)
quatro.addEventListener('click', musicaQuatro)
cinco.addEventListener('click', musicaCinco)
seis.addEventListener('click', musicaSeis)
sete.addEventListener('click', musicaSete)
oito.addEventListener('click', musicaOito)
nove.addEventListener('click', musicaNove)
dez.addEventListener('click', musicaDez)
onze.addEventListener('click', musicaOnze)
doze.addEventListener('click', musicaDoze)
treze.addEventListener('click', musicaTreze)
quatorze.addEventListener('click', musicaQuatorze)
quinze.addEventListener('click', musicaQuinze)
dezesseis.addEventListener('click', musicaDezesseis)
dezessete.addEventListener('click', musicaDezessete)
dezoito.addEventListener('click', musicaDezoito)
dezenove.addEventListener('click', musicaDezenove)




function musicaDois() {
  footer.setAttribute('class', 'footerNone');
  tela.innerHTML = `<div class="musicaSelecionada" id="dois">
    <div class="videoDois">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/DA1PFx0goF0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="text">
      <h2>Música 1</h2>
    </div>
    <a href="../pages/musica.html">
      <div class="voltar"><h3>VOLTAR</h3></div>
    </a>
    </div>`;
}

function musicaTres() {
  footer.setAttribute('class', 'footerNone');
  tela.innerHTML = `<div class="musicaSelecionada" id="tres">
    <div class="videoTres">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/GgcfEkdGf1I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="text">
      <h2>Música 2</h2>
    </div>
    <a href="../pages/musica.html">
      <div class="voltar"><h3>VOLTAR</h3></div>
    </a>
    </div>`;
}

function musicaQuatro() {
  footer.setAttribute('class', 'footerNone');
  tela.innerHTML = `<div class="musicaSelecionada" id="quatro">
    <div class="videoQuatro">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/GgcfEkdGf1I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="text">
      <h2>Música 3</h2>
    </div>
    <a href="../pages/musica.html">
      <div class="voltar"><h3>VOLTAR</h3></div>
    </a>
    </div>`;
}

function musicaCinco() {
  footer.setAttribute('class', 'footerNone');
  tela.innerHTML = `<div class="musicaSelecionada" id="cinco">
    <div class="videoCinco">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/-Z66V3tr1pY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="text">
      <h2>Música 4</h2>
    </div>
    <a href="../pages/musica.html">
      <div class="voltar"><h3>VOLTAR</h3></div>
    </a>
    </div>`;
}

function musicaSeis() {
  footer.setAttribute('class', 'footerNone');
  tela.innerHTML = `<div class="musicaSelecionada" id="seis">
    <div class="videoSeis">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/rJE93F24Yl4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="text">
      <h2>Música 5</h2>
    </div>
    <a href="../pages/musica.html">
      <div class="voltar"><h3>VOLTAR</h3></div>
    </a>
    </div>`;
}

function musicaSete() {
  footer.setAttribute('class', 'footerNone');
  tela.innerHTML = `<div class="musicaSelecionada" id="sete">
    <div class="videoSete">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/aRI1MVXPFpc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="text">
      <h2>Música 6</h2>
    </div>
    <a href="../pages/musica.html">
      <div class="voltar"><h3>VOLTAR</h3></div>
    </a>
    </div>`;
}

function musicaOito() {
  footer.setAttribute('class', 'footerNone');
  tela.innerHTML = `<div class="musicaSelecionada" id="oito">
    <div class="videoOito">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/YQssLcFmAGQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="text">
      <h2>Música 7</h2>
    </div>
    <a href="../pages/musica.html">
      <div class="voltar"><h3>VOLTAR</h3></div>
    </a>
    </div>`;
}

function musicaNove() {
  footer.setAttribute('class', 'footerNone');
  tela.innerHTML = `<div class="musicaSelecionada" id="nove">
    <div class="videoNove">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/EvmXuB0MHOI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="text">
      <h2>Música 8</h2>
    </div>
    <a href="../pages/musica.html">
      <div class="voltar"><h3>VOLTAR</h3></div>
    </a>
    </div>`;
}

function musicaDez() {
  footer.setAttribute('class', 'footerNone');
  tela.innerHTML = `<div class="musicaSelecionada" id="dez">
    <div class="videoDez">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/1GPLLByswWA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="text">
      <h2>Música 9</h2>
    </div>
    <a href="../pages/musica.html">
      <div class="voltar"><h3>VOLTAR</h3></div>
    </a>
    </div>`;
}

function musicaOnze() {
  footer.setAttribute('class', 'footerNone');
  tela.innerHTML = `<div class="musicaSelecionada" id="onze">
    <div class="videoOnze">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/V7xDwZAIQNY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="text">
      <h2>Música 10</h2>
    </div>
    <a href="../pages/musica.html">
      <div class="voltar"><h3>VOLTAR</h3></div>
    </a>
    </div>`;
}

function musicaDoze() {
  footer.setAttribute('class', 'footerNone');
  tela.innerHTML = `<div class="musicaSelecionada" id="doze">
    <div class="videoDoze">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/GgcfEkdGf1I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="text">
      <h2>Música 11</h2>
    </div>
    <a href="../pages/musica.html">
      <div class="voltar"><h3>VOLTAR</h3></div>
    </a>
    </div>`;
}

function musicaTreze() {
  footer.setAttribute('class', 'footerNone');
  tela.innerHTML = `<div class="musicaSelecionada" id="treze">
    <div class="videoTreze">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/kYp-3Kafrj8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="text">
      <h2>Música 12</h2>
    </div>
    <a href="../pages/musica.html">
      <div class="voltar"><h3>VOLTAR</h3></div>
    </a>
    </div>`;
}

function musicaQuatorze() {
  footer.setAttribute('class', 'footerNone');
  tela.innerHTML = `<div class="musicaSelecionada" id="quatorze">
    <div class="videoQuatroze">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/BZEkrVB64aE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="text">
      <h2>Música 13</h2>
    </div>
    <a href="../pages/musica.html">
      <div class="voltar"><h3>VOLTAR</h3></div>
    </a>
    </div>`;
}

function musicaQuinze() {
  footer.setAttribute('class', 'footerNone');
  tela.innerHTML = `<div class="musicaSelecionada" id="quinze">
    <div class="videoQuinze">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/16LiGb49ucI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="text">
      <h2>Música 14</h2>
    </div>
    <a href="../pages/musica.html">
      <div class="voltar"><h3>VOLTAR</h3></div>
    </a>
    </div>`;
}

function musicaDezesseis() {
  footer.setAttribute('class', 'footerNone');
  tela.innerHTML = `<div class="musicaSelecionada" id="dezesseis">
    <div class="videoDezesseis">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/KqR38ruHL9M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="text">
      <h2>Música 15</h2>
    </div>
    <a href="../pages/musica.html">
      <div class="voltar"><h3>VOLTAR</h3></div>
    </a>
    </div>`;
}

function musicaDezessete() {
  footer.setAttribute('class', 'footerNone');
  tela.innerHTML = `<div class="musicaSelecionada" id="dezessete">
    <div class="videoDezessete">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/9X293jIGSUU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="text">
      <h2>Música 16</h2>
    </div>
    <a href="../pages/musica.html">
      <div class="voltar"><h3>VOLTAR</h3></div>
    </a>
    </div>`;
}

function musicaDezoito() {
  footer.setAttribute('class', 'footerNone');
  tela.innerHTML = `<div class="musicaSelecionada" id="dezoito">
    <div class="videoDezoito">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/lMiUnngqrtQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="text">
      <h2>Música 17</h2>
    </div>
    <a href="../pages/musica.html">
      <div class="voltar"><h3>VOLTAR</h3></div>
    </a>
    </div>`;
}

function musicaDezenove() {
  footer.setAttribute('class', 'footerNone');
  tela.innerHTML = `<div class="musicaSelecionada" id="dezenove">
    <div class="videoDezenove">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/6NU_8fKpBuE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="text">
      <h2>Música 18</h2>
    </div>
    <a href="../pages/musica.html">
      <div class="voltar"><h3>VOLTAR</h3></div>
    </a>
    </div>`;
}