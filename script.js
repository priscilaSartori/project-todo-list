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

const apagarTudo = () => {
  ol.innerHTML = '';
};

const removerCompletos = () => {
  const completed = document.querySelectorAll('.completed');
  for (let index = 0; index < completed.length; index += 1) {
    ol.removeChild(completed[index]);
  }
};

const salvarTarefas = () => {
  const innerText = [];
  const className = [];
  const id = [];
  const lista = document.querySelectorAll('li');
  for (let index = 0; index < lista.length; index += 1) {
    innerText.push(lista[index].innerText);
    className.push(lista[index].className);
    id.push(lista[index].id);
  }
  localStorage.setItem('innerText', JSON.stringify(innerText));
  localStorage.setItem('className', JSON.stringify(className));
  localStorage.setItem('id', JSON.stringify(id));
};

const getLocalStorageInnerText = () => {
  const getInnerText = localStorage.getItem('innerText').split('"');
  const newInnerText = [];
  for (let index = 0; index < getInnerText.length; index += 1) {
    if (getInnerText[index] !== '[' && getInnerText[index] !== ']' && getInnerText[index] !== ',') {
      newInnerText.push(getInnerText[index]);
    }
  }
  return newInnerText;
};

const getLocalStorageClassname = () => {
  const getClassName = JSON.parse(localStorage.getItem('className'));
  const newClassName = [];
  for (let index = 0; index < getClassName.length; index += 1) {
    if (getClassName[index] !== '[' && getClassName[index] !== ']' && getClassName[index] !== ',') {
      newClassName.push(getClassName[index]);
    }
  }
  return newClassName;
};

const getLocalStorageId = () => {
  const getId = JSON.parse(localStorage.getItem('id'));
  const newId = [];
  for (let index = 0; index < getId.length; index += 1) {
    if (getId[index] !== '[' && getId[index] !== ']' && getId[index] !== ',') {
      newId.push(getId[index]);
    }
  }
  return newId;
};

const getLocalStorage = () => {
  const getInnerText = getLocalStorageInnerText();
  const getClassName = getLocalStorageClassname();
  const getId = getLocalStorageId();

  for (let index = 0; index < getInnerText.length; index += 1) {
    const newLi = document.createElement('li');
    newLi.innerText = getInnerText[index];
    newLi.className = getClassName[index];
    newLi.id = getId[index];
    ol.appendChild(newLi);
  }
};

const movimentarParaCima = () => {
  const selecBackground = document.getElementById('background');
  if (selecBackground !== null && selecBackground !== ol.firstChild) {
    ol.insertBefore(selecBackground, selecBackground.previousSibling);
  }
};

const movimentarParaBaixo = () => {
  const selecBackground = document.getElementById('background');
  if (selecBackground !== null && selecBackground !== ol.lastChild) {
    ol.insertBefore(selecBackground.nextSibling, selecBackground);
  }
};

const removerSelecionado = () => {
  const selecBackground = document.getElementById('background');
  ol.removeChild(selecBackground);
};

button.addEventListener('click', novaTarefa);
ol.addEventListener('click', background);
ol.addEventListener('dblclick', completedClass);
buttonApagar.addEventListener('click', apagarTudo);
buttonRemoverFinalizados.addEventListener('click', removerCompletos);
buttonSalvarTarefas.addEventListener('click', salvarTarefas);
moverParaCima.addEventListener('click', movimentarParaCima);
moverParaBaixo.addEventListener('click', movimentarParaBaixo);
buttonRemoverSelecionado.addEventListener('click', removerSelecionado);

window.onload = () => {
  if (localStorage.getItem('innerText') !== null) {
    getLocalStorage();
  }
};
