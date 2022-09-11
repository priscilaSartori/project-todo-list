const input = document.getElementById('texto-tarefa');
const ol = document.getElementById('lista-tarefas'); 
const button = document.getElementById('criar-tarefa');

window.onload = () => {
    atualizarTela();
}

let banco = [];
const getBanco= () => JSON.parse(localStorage.getItem('todolist')) ?? [];
const setBanco = (banco) => localStorage.setItem('todolist', JSON.stringify(banco));

const createLI = () => {
    const li = document.createElement('li');
    li.innerText = input.value;
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
        banco.push(li.innerText);
        ol.appendChild(li);
    })
}