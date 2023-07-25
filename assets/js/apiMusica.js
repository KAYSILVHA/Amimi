const todos = document.getElementById('todos');
const sono = document.getElementById('sono');
const relaxar = document.getElementById('relaxante');
const chuva = document.getElementById('chuva');
const sectionChuva = document.getElementById('sectionChuva');
const sectionSono = document.getElementById('sectionSono');
const sectionTodas = document.getElementById('sectionTodas');
const sectionRelaxar = document.getElementById('sectionRelaxar');


todos.addEventListener('click', modoTodos)
sono.addEventListener('click', modoSono)
relaxar.addEventListener('click', modoRelaxar)
chuva.addEventListener('click', modoChuva)


function ModoSono(){
  sono.setAttribute('class', 'sonsSelecionado')
  sectionTodas.setAttribute('class', 'todosDesativar')
}
