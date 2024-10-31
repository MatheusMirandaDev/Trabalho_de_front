let usarLogado = JSON.parse(localStorage.getItem('userLogado'))

let logado = document.querySelector('#logado')

logado.innerHTML = "Olá " + usarLogado.nome + "!"

if (localStorage.getItem('token') == null) {
    alert('Voce percisar estar logado para acessar essa pagina');
    window.location.href = "index.html";
}

function sair() {
    localStorage.removeItem('token');
    localStorage.removeItem('userLogado');
    window.location.href = "index.html";
}