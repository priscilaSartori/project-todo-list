const input = document.getElementById('texto-tarefa');
const ol = document.getElementById('lista-tarefas'); 
const button = document.getElementById('criar-tarefa');
const li = document.getElementsByClassName('lista');
const clean = document.getElementById('apaga-tudo');

window.onload = () => {
    atualizarTela();
}

let banco = [];
const getBanco= () => JSON.parse(localStorage.getItem('todolist')) ?? [];
const setBanco = (banco) => localStorage.setItem('todolist', JSON.stringify(banco));

const createLI = () => {
    const li = document.createElement('li');
    li.innerText = input.value;
    li.className = 'lista';
    banco.push(li.innerText);
    ol.appendChild(li); 
    input.value = "";
    setBanco(banco);
}
button.addEventListener('click', createLI);

const atualizarTela = () => {
    const get = getBanco();
    get.map((item) => {
        const li = document.createElement('li');
        li.innerText = item;
        li.className = 'lista';
        banco.push(li.innerText);
        ol.appendChild(li);
    })
}

const changeBack = (event) => {
    document.querySelectorAll('li').forEach((e) => e.style.background = 'white')
    const click = event.target;
    click.style.background = "gray";
}
ol.addEventListener('click', changeBack);

const complete = (event) => {
    const dblclick = event.target;
    const duplo = dblclick.className !== 'completed' ?  dblclick.className = 'completed' : dblclick.className = '';
}
ol.addEventListener('dblclick', complete); 

const cleanLi = () => {
    document.querySelectorAll('li').forEach((e) => ol.removeChild(e))
    localStorage.removeItem('todolist')
}
clean.addEventListener('click', cleanLi);