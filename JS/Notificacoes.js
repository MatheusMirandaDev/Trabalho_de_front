let usarLogado = JSON.parse(localStorage.getItem('userLogado'))

let logado = document.querySelector('#logado')

if (usarLogado) {
    logado.innerHTML = usarLogado.nome;
} else {
    logado.innerHTML = "Olá!";
}

if (localStorage.getItem('token') == null) {
    alert('Voce percisar estar logado para acessar essa pagina');
    window.location.href = "index.html";
}

function home() {
    window.location.href = "Home.html";
}

function relatorios() {
    window.location.href = "Relatorio.html";
}

function graficos() {
    window.location.href = "Graficos.html";
}

function notificacoes() {
    window.location.href = "Notificacoes.html";
}

function configuracoes() {
    window.location.href = "Configuracoes.html";
}

function ajuda() {
    window.location.href = "Ajuda.html"
}

function sair() {
    localStorage.removeItem('token');
    localStorage.removeItem('userLogado');
    window.location.href = "index.html";
}