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
const header = document.getElementById('header');

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
  header.setAttribute('class', 'headerNone');
  footer.setAttribute('class', 'footerNone');
  tela.innerHTML = `<div class="musicaSelecionada" id="dois">
    <div class="video">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/DA1PFx0goF0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="text">
      <h2>Música para Dormir em 3 Minutos</h2>
      <h3>Duração: 4:45 Minutos</h3>
      <p>Música para Dormir em 3 Minutos - Te Coloca para Dormir e Anda tem um Efeito Tremendo durante o Sono</p>
    </div>
    <div class="image">
    <img src="https://img.freepik.com/fotos-premium/paisagem-relaxante-no-resort-com-assento-ao-ar-livre_7180-2093.jpg?w=2000" alt="capa">
    </div>
    <a href="../pages/musica.html">
      <div class="voltar"><h3>VOLTAR</h3></div>
    </a>
    </div>`;
}

function musicaTres() {
  header.setAttribute('class', 'headerNone');
  footer.setAttribute('class', 'footerNone');
  tela.innerHTML = `<div class="musicaSelecionada" id="tres">
    <div class="video">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/GgcfEkdGf1I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="text">
      <h2>Controle sua Ansiedade em 5 minutos: Música Relaxante, Respiração Profunda e Relaxamento</h2>
      <h3>Duração: 4:35 Minutos</h3>
      <p>Nós compomos músicas instrumentais especialmente elaboradas para estimular e favorecer o relaxamento, a meditação, a função cerebral e a concentração.</p>
    </div>
    <div class="image">
    <img src="https://dbdzm869oupei.cloudfront.net/img/photomural/preview/50782.png" alt="capa">
    </div>
    <a href="../pages/musica.html">
      <div class="voltar"><h3>VOLTAR</h3></div>
    </a>
    </div>`;
}

function musicaQuatro() {
  header.setAttribute('class', 'headerNone');
  footer.setAttribute('class', 'footerNone');
  tela.innerHTML = `<div class="musicaSelecionada" id="quatro">
    <div class="video">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/RoloIJ1X008" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="text">
      <h2>10 MINUTOS DE MUSICA PARA RELAXAMENTO </h2>
      <h3>Duração: 10:01 Minutos</h3>
      <p>
      Relaxar com música para tranquilizar a inquietação persistente, acalmar este sintoma de ansiedade muito chato.</p>
    </div>
    <div class="image">
    <img src="https://static.vecteezy.com/ti/fotos-gratis/p2/4881582-idilica-tropical-praia-paisagem-para-fundo-ou-papel-de-parede-design-de-turismo-para-verao-ferias-paisagem-feriado-destino-conceito-exotico-ilha-cena-relaxante-vista-paraiso-a-beira-mar-lagoa-foto.jpg" alt="capa">
    </div>
    <a href="../pages/musica.html">
      <div class="voltar"><h3>VOLTAR</h3></div>
    </a>
    </div>`;
}

function musicaCinco() {
  header.setAttribute('class', 'headerNone');
  footer.setAttribute('class', 'footerNone');
  tela.innerHTML = `<div class="musicaSelecionada" id="cinco">
    <div class="video">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/-Z66V3tr1pY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="text">
    <h2>Musica Para RELAXAR e Dormir Natureza [Aquário #1]</h2>
    <h3>Duração: 5:24 Minutos</h3>
    <p>
    Muitas pessoas gostam de ouvir música para relaxar e até para dormir. 
    Este vídeo contém músicas com sons de natureza de fundo , com imagem de aquário, dos mais variados e com muitas variedades de peixes.

    Os peixes fazem movimentos calmos e harmoniosos, trazendo uma sensação de bem estar.
    Essas imagens ajudam a relaxar a mente e muitas vezes nos faz dormir profundamente.
    </p>
  </div>
  <div class="image">
  <img src="https://st.depositphotos.com/1002172/4892/i/450/depositphotos_48928171-stock-photo-relaxing-landscape.jpg" alt="capa">
  </div>
    <a href="../pages/musica.html">
      <div class="voltar"><h3>VOLTAR</h3></div>
    </a>
    </div>`;
}

function musicaSeis() {
  footer.setAttribute('class', 'footerNone');
  tela.innerHTML = `<div class="musicaSelecionada" id="seis">
    <div class="video">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/rJE93F24Yl4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="text">
      <h2>Musicas da Natureza (Agua)</h2>
      <h3>Duração: 5:36 Minutos</h3>
      <p>Musicas da Natureza - Musicas Relaxantes para Dormir com Som de Passaros, Sons da Chuva e de Agua.</p>
    </div>
    <div class="image">
    <img src="https://img.freepik.com/fotos-premium/por-do-sol-a-noite-paisagem-mar-paisagem-marinha-relaxante-nascer-do-sol-ceu-nublado-de-sonho-por-do-sol-na-onda-da-costa_663265-353.jpg" alt="capa"></div>
    <a href="../pages/musica.html">
      <div class="voltar"><h3>VOLTAR</h3></div>
    </a>
    </div>`;
}

function musicaSete() {
  header.setAttribute('class', 'headerNone');
  footer.setAttribute('class', 'footerNone');
  tela.innerHTML = `<div class="musicaSelecionada" id="sete">
    <div class="video">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/aRI1MVXPFpc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="text">
      <h2>MUSICA RELAXANTE Background ENERGIA POSITIVA</h2>
      <h3>Duração: 4:45 Minutos</h3>
      <p>Música  perfeita para relaxar, meditar, combater a ansiedade, o stress ou a insónia, pois facilita o relaxamento e ajuda-nos a eliminar as más vibrações e podem usar essa música como plano de fundo para aulas de meditação guiada, yoga,
      relaxamentos para dormir.</p>
    </div>
    <div class="image">
    <img src="https://img.r7.com/images/2014/12/01/8qw77svvk2_1squxaw7ow_file" alt="capa">
    </div>
    <a href="../pages/musica.html">
      <div class="voltar"><h3>VOLTAR</h3></div>
    </a>
    </div>`;
}

function musicaOito() {
  header.setAttribute('class', 'headerNone');
  footer.setAttribute('class', 'footerNone');
  tela.innerHTML = `<div class="musicaSelecionada" id="oito">
    <div class="video">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/YQssLcFmAGQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="text">
      <h2>Música Relaxante para Dormir, Música para Dormir Profundamente, Adormecer e Meditar.</h2>
      <h3>Duração: 4:07 Minutos</h3>
      <p>Este vídeo de música relaxante é perfeito para ajudá-lo a dormir profundamente, adormecer e meditar. Com sons suaves e melodias calmantes, ele pode ajudar a reduzir o estresse e a ansiedade, permitindo que você relaxe e descanse sua mente e corpo.</p>
    </div>
    <div class="image">
    <img src="https://static.vecteezy.com/ti/fotos-gratis/t2/12865486-closeup-praia-de-areia-do-mar-paisagem-panoramica-da-praia-inspire-o-horizonte-da-paisagem-marinha-de-uma-praia-tropical-laranja-e-dourado-do-sol-ceu-calma-tranquilo-e-relaxante-luz-solar-clima-de-verao-faixa-de-ferias-viagens-de-ferias-foto.jpg" alt="capa">
    </div>
    <a href="../pages/musica.html">
      <div class="voltar"><h3>VOLTAR</h3></div>
    </a>
    </div>`;
}

function musicaNove() {
  header.setAttribute('class', 'headerNone');
  footer.setAttribute('class', 'footerNone');
  tela.innerHTML = `<div class="musicaSelecionada" id="nove">
    <div class="video">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/EvmXuB0MHOI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="text">
      <h2>MUSIC TO RELAX II ENERGIA POSITIVA</h2>
      <h3>Duração: 6:57 Minutos</h3>
      <p>Música  perfeita para relaxar, meditar, combater a ansiedade, o stress ou a insónia, pois facilita o relaxamento e ajuda-nos a eliminar as más vibrações e podem usar essa música como plano de fundo para aulas de meditação guiada ou relaxamentos para dormir. Aprecie nossas músicas elas vão melhorar a concentração enquanto estuda e com uma grande diversidade de paisagens da natureza em segundo plano.</p>
    </div>
    <div class="image">
    <img src="https://i.pinimg.com/236x/68/94/38/689438ba89a120556be11c10fbfff27c.jpg" alt="capa">
    <a href="../pages/musica.html">
      <div class="voltar"><h3>VOLTAR</h3></div>
    </a>
    </div>`;
}

function musicaDez() {
  header.setAttribute('class', 'headerNone');
  footer.setAttribute('class', 'footerNone');
  tela.innerHTML = `<div class="musicaSelecionada" id="dez">
    <div class="video">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/1GPLLByswWA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="text">
    <h2>MUSICA P/ MEDITAR RELAXAR Abstract Background </h2>
    <h3>Duração: 4:41 Minutos</h3>
    <p>Música  perfeita para relaxar, meditar, combater a ansiedade, o stress ou a insónia, pois facilita o relaxamento e ajuda-nos a eliminar as más vibrações e podem usar essa música como plano de fundo para aulas de meditação guiada ou 
    relaxamentos para dormir.</p>
  </div>
  <div class="image">
  <img src="https://d24ux3x5lhpqgy.cloudfront.net/d0c6b354-30da-4ed6-b932-718b930ad83b" alt="capa">
  </div>
    <a href="../pages/musica.html">
      <div class="voltar"><h3>VOLTAR</h3></div>
    </a>
    </div>`;
}

function musicaOnze() {
  header.setAttribute('class', 'headerNone');
  footer.setAttribute('class', 'footerNone');
  tela.innerHTML = `<div class="musicaSelecionada" id="onze">
    <div class="video">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/V7xDwZAIQNY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="text">
      <h2>Musicas para Relaxar a Mente</h2>
      <h3>Duração: 8:02 Minutos</h3>
      <p>Super Relaxante: Música para Meditação e Relaxamento, Músicas Lentas para Sono, Bem-estar e Serenidade.</p>
    </div>
    <div class="image">
    <img src="https://institutodosono.com/wp-content/uploads/2021/12/dormir-bem.jpg" alt="capa">
    </div>
    <a href="../pages/musica.html">
      <div class="voltar"><h3>VOLTAR</h3></div>
    </a>
    </div>`;
}

function musicaDoze() {
  header.setAttribute('class', 'headerNone');
  footer.setAttribute('class', 'footerNone');
  tela.innerHTML = `<div class="musicaSelecionada" id="doze">
    <div class="video">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/ZVAIX_bDEso" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="text">
      <h2>MÚSICA para MEDITAR | 528 hertz</h2>
      <h3>Duração: 11:31 Minutos</h3>
      <p>Para elevar a vibração, acalmar a mente, respirar consciente, se sentir mais presente. Permita-se um momento para relaxar. 
      </p>
    </div>
    <div class="image">
    <img src="https://blog.artelasse.com.br/wp-content/uploads/2021/10/qual-melhor-posicao-para-dormir-1000x658.jpg" alt="capa">
    </div>
    <a href="../pages/musica.html">
      <div class="voltar"><h3>VOLTAR</h3></div>
    </a>
    </div>`;
}

function musicaTreze() {
  header.setAttribute('class', 'headerNone');
  footer.setAttribute('class', 'footerNone');
  tela.innerHTML = `<div class="musicaSelecionada" id="treze">
    <div class="video">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/kYp-3Kafrj8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="text">
      <h2>Musica da Natureza,Musica para Dormir, Musica para Meditar.</h2>
      <h3>Duração: 4:15 Minutos</h3>
      <p>
      Esse video foi feito especialmente para aquelas pessoas que tem
      dificuldade em dormir por longos periodos e tambem pode servir para
      você apenas realizar a sua meditação.
      .</p>
    </div>
    <div class="image">
    <img src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/33945_72320F3DCB5A73A8-1.jpg?w=876&h=484&crop=1" alt="capa">
    </div>
    <a href="../pages/musica.html">
      <div class="voltar"><h3>VOLTAR</h3></div>
    </a>
    </div>`;
}

function musicaQuatorze() {
  header.setAttribute('class', 'headerNone');
  footer.setAttribute('class', 'footerNone');
  tela.innerHTML = `<div class="musicaSelecionada" id="quatorze">
    <div class="video">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/BZEkrVB64aE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="text">
      <h2>Musica da natureza / Sons da Natureza /musica relaxante</h2>
      <h3>Duração: 5:48 Minutos</h3>
      <p>Sons da natureza,musica da natureza,natureza,musica natureza,musica para relaxar,música e natureza,som da natureza,música relaxante,música natureza,barulho da natureza,musica para dormir,sons da natureza para relaxar,sons da natureza para dormir,musica relaxante,música relaxante com sons da natureza,musica e natureza,musica para meditar,música para dormir,musica e sons da natureza,sons natureza,sons da natureza a noite,musica.</p>
    </div>
    <div class="image">
    <img src="https://qualomelhorcolchao.com.br/wp-content/uploads/2022/04/acalmar-a-mente-para-dormir-bem.jpg" alt="capa">
    </div>
    <a href="../pages/musica.html">
      <div class="voltar"><h3>VOLTAR</h3></div>
    </a>
    </div>`;
}

function musicaQuinze() {
  header.setAttribute('class', 'headerNone');
  footer.setAttribute('class', 'footerNone');
  tela.innerHTML = `<div class="musicaSelecionada" id="quinze">
    <div class="video">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/16LiGb49ucI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="text">
      <h2>LINDA MUSICA RELAXANTE PARA DORMIR/video lindo com imagens da natureza para relaxar</h2>
      <h3>Duração: 7:27 Minutos</h3>
      <p>LINDA MUSICA RELAXANTE PARA DORMIR/video lindo com imagens da natureza para relaxar. Este video contem uma música calma com sons de natureza para relaxar e dormir video muito bom para aliviar o estresse e acalmar a mente.</p>
    </div>
    <div class="image">
    <img src="https://conteudo.imguol.com.br/c/entretenimento/85/2023/02/09/dormir-sono-1675973913718_v2_1254x836.jpg" alt="capa">
    </div>
    <a href="../pages/musica.html">
      <div class="voltar"><h3>VOLTAR</h3></div>
    </a>
    </div>`;
}

function musicaDezesseis() {
  header.setAttribute('class', 'headerNone');
  footer.setAttribute('class', 'footerNone');
  tela.innerHTML = `<div class="musicaSelecionada" id="dezesseis">
    <div class="video">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/KqR38ruHL9M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="text">
      <h2>MÚSICA RELAXAR, MUSICA PARA DORMIR, MUSICA DA NATUREZA</h2>
      <h3>Duração: 7:12 Minutos</h3>
      <p>Se você está procurando relaxar e dormir , com certeza essa música para relaxamento da mente vai te ajudar.

      Esse vídeo foi feito especialmente para aquelas pessoas que tem dificuldade em dormir por longos períodos e também pode servir para você apenas realizar sua meditação.
      
      Os sons relaxantes desse vídeo vão agir profundamente no seu cérebro fazendo você acalmar a mente e lhe proporcionando uma sensação de bem estar e relaxamento profundo.
      </p>
    </div>
    <div class="image">
    <img src="https://conteudo.imguol.com.br/c/entretenimento/4f/2022/03/23/sono-homem-dormindo-jovem-dormir-cama-cochilo-1648043908636_v2_900x506.jpg" alt="capa">
    </div>
    <a href="../pages/musica.html">
      <div class="voltar"><h3>VOLTAR</h3></div>
    </a>
    </div>`;
}

function musicaDezessete() {
  header.setAttribute('class', 'headerNone');
  footer.setAttribute('class', 'footerNone');
  tela.innerHTML = `<div class="musicaSelecionada" id="dezessete">
    <div class="video">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/9X293jIGSUU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="text">
      <h2>10 minutos de som de chuva para dormir e estudar</h2>
      <h3>Duração: 10:07 Minutos</h3>
      <p>Nós compomos músicas instrumentais especialmente elaboradas para estimular e favorecer o relaxamento, a meditação, a função cerebral e a concentração.</p>
    </div>
    <div class="image">
    <img src="https://conexaosafra.com/wp-content/uploads/2023/03/chuva-estrada-mata-floresta-scaled-1.jpg" alt="capa">
    </div>
    <a href="../pages/musica.html">
      <div class="voltar"><h3>VOLTAR</h3></div>
    </a>
    </div>`;
}

function musicaDezoito() {
  header.setAttribute('class', 'headerNone');
  footer.setAttribute('class', 'footerNone');
  tela.innerHTML = `<div class="musicaSelecionada" id="dezoito">
    <div class="video">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/lMiUnngqrtQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="text">
      <h2>HIPNOSE BARULHO DA CHUVA PARA DORMIR E RELAXAR</h2>
      <h3>Duração: 8:20 Minutos</h3>
      <p>Som de Chuva para relaxar.</p>
    </div>
    <div class="image">
    <img src="https://medias.revistaoeste.com/qa-staging/wp-content/uploads/2023/06/previsao-do-tempo-para-o-fim-de-semana-muita-chuva-no-brasil.jpg" alt="capa">
    </div>
    <a href="../pages/musica.html">
      <div class="voltar"><h3>VOLTAR</h3></div>
    </a>
    </div>`;
}

function musicaDezenove() {
  header.setAttribute('class', 'headerNone');
  footer.setAttribute('class', 'footerNone');
  tela.innerHTML = `<div class="musicaSelecionada" id="dezenove">
    <div class="video">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/6NU_8fKpBuE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="text">
      <h2>DURMA EM 15 MINUTOS AO SOM DE CHUVA - TELA PRETA</h2>
      <h3>Duração: 15:00 Minutos</h3>
      <p>Som de Chuva relaxante.</p>
    </div>
    <div class="image">
    <img src="https://s4.static.brasilescola.uol.com.br/be/conteudo/images/chuva.jpg" alt="capa">
    </div>
    <a href="../pages/musica.html">
      <div class="voltar"><h3>VOLTAR</h3></div>
    </a>
    </div>`;
}