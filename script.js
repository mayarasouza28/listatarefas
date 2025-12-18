// Array de tarefas
let tarefas = [];

function adicionarLista(){
    const campoTarefa = document.getElementById("inputTarefa");
    let textoTarefa = campoTarefa.value.trim().toUpperCase();

    if (textoTarefa === "") {
        alert("Digite uma tarefa válida!");
        return;
    }

    if (tarefas.includes(textoTarefa)) {
        alert("Essa tarefa já foi adicionada!");
        campoTarefa.value = "";
        return;
    }

    tarefas.push(textoTarefa);
    atualizarLista();

    campoTarefa.value = "";
}

function incluirTarefaLista(textoTarefa){
    const listaTarefas = document.getElementById("listaTarefas");
    const novaTarefa = document.createElement("li");

    novaTarefa.classList.add("item-tarefa");  

    novaTarefa.innerHTML = `
        <span>${textoTarefa}</span>
        <div class="divLixeira">
            <img class="btnLixeira" onclick="excluirTarefa(this)" src="lixeira.png">
        </div>
    `;

    listaTarefas.appendChild(novaTarefa);
}

function excluirTarefa(botao){
    const li = botao.closest("li");
    const textoTarefa = li.querySelector("span").textContent;

    tarefas = tarefas.filter(t => t !== textoTarefa);
    atualizarLista();
}

function atualizarLista(){
    const lista = document.getElementById("listaTarefas");
    lista.innerHTML = "";

    tarefas.forEach(tarefa => {
        incluirTarefaLista(tarefa);
    });
}

function ordenarLista(){
    tarefas.sort();
    atualizarLista();
}
function limparLista() {
    tarefas = [];
    atualizarLista();
}
