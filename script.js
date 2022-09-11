const input = document.getElementById('texto-tarefa');
const ol = document.getElementById('lista-tarefas'); 
const button = document.getElementById('criar-tarefa');
const li = document.querySelectorAll('li');

window.onload = () => {
    atualizarTela();
}

let banco = [];
const getBanco= () => JSON.parse(localStorage.getItem('todolist')) ?? [];
const setBanco = (banco) => localStorage.setItem('todolist', JSON.stringify(banco));

const createLI = () => {
    const li = document.createElement('li');
    li.innerText = input.value;
    li.className = "item-lista";
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
        li.className = "item-lista";
        banco.push(li.innerText);
        ol.appendChild(li);
    })
}

const changeBack = (event) => {
    document.querySelectorAll('li').forEach((e) => e.style.background = 'white')
    const click = event.target;
    click.style.background = "gray";
}
ol.addEventListener('click', changeBack) 