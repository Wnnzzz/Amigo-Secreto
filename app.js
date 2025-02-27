let listaDeAmigos = []; // Lista onde vão ser adicionados os nomes

// Funções relacionadas à adição de amigos
function adicionarAmigo() {

    let amigo = document.querySelector('input').value; // Validando o botão de adicionar amigos
    if (listaDeAmigos.includes(amigo)) { // Para verificar se o nome já não está na lista
        alert("Esse nome já está na lista!");

    } else if (amigo == "") {
        alert("Você tentou enviar com o campo vazio, por favor adicione um nome válido!");
    } else {
        listaDeAmigos.push(amigo); // Para que os nomes sejam colocados dentro da lista
        console.log(listaDeAmigos);
    }

    amigo = document.querySelector('input'); // Linha 8 e 9 usadas para limpar o campo após o usuário colocar um nome
    amigo.value = '';

    atualizarLista();
}

// Função para mostrar na tela a lista dos nomes
function atualizarLista() {
    let lista = document.getElementById("listaDeAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de adicionar novos elementos

    // Usamos para exibir na tela os nomes colocados na lista "lista"
    listaDeAmigos.forEach(amigo => { // Para cada item (amigo) dentro da lista "listaDeAmigos", execute o código dentro das chaves {}
        let li = document.createElement("li"); // Cria um novo elemento no HTML <li>
        li.textContent = amigo; // Usado para os nomes dos amigos no <li>
        lista.appendChild(li); // Adiciona o <li> dentro do <ul> para exibir na tela
    });
}

// Função relacionada ao sorteio
function sortearAmigo() {

    if (listaDeAmigos.length == 0) { // Corrigido a verificação da lista vazia
        document.getElementById("resultado").textContent = "Acho que você esqueceu de adicionar os nomes na lista, por favor adicione os nomes antes do sorteio";
        return;

    } else {

        let sorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)]; // Usado para deixar o sorteio aleatório
        let sortear = document.querySelector('button').value; // Valida o botão "Sortear"
        document.getElementById("resultado").textContent = "Nome sorteado: " + sorteado; // Exibe na tela a pessoa que foi sorteada
    }
}

// Evento de tecla "Enter"
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        adicionarAmigo();
    }
});
