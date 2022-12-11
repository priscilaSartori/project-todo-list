const button = document.getElementById('criar-tarefa');
const ol = document.getElementById('lista-tarefas');
const input = document.getElementById('texto-tarefa');
const li = document.getElementsByTagName('li');
const buttonApagar = document.getElementById('apaga-tudo');
const buttonRemoverFinalizados = document.querySelector('#remover-finalizados');
const buttonSalvarTarefas = document.querySelector('#salvar-tarefas');
const moverParaCima = document.getElementById('mover-cima');
const moverParaBaixo = document.getElementById('mover-baixo');
const buttonRemoverSelecionado = document.getElementById('remover-selecionado');

const novaTarefa = () => {
  const newLi = document.createElement('li');
  newLi.innerText = input.value;
  newLi.id = 'semBackground';
  newLi.className = 'semCompleted';
  ol.appendChild(newLi);

  input.value = '';
};

const background = ({ target }) => {
  const tarefaLi = target;
  if (target.id === 'semBackground') {
    for (let index = 0; index < li.length; index += 1) {
      li[index].id = 'semBackground';
    }
    tarefaLi.id = 'background';
  } else {
    tarefaLi.id = 'semBackground';
  }
};

const completedClass = ({ target }) => {
  const tarefaLi = target;
  if (target.className === 'semCompleted') {
    tarefaLi.className = 'completed';
  } else {
    tarefaLi.className = 'semCompleted';
  }
};

button.addEventListener('click', novaTarefa);
ol.addEventListener('click', background);
ol.addEventListener('dblclick', completedClass);
