// Selecionar elementos importantes
const configButton = document.getElementById('config-button');
const configDropdown = document.getElementById('config-dropdown');
const dropdownItems = document.querySelectorAll('.dropdown-item');
const sections = document.querySelectorAll('.settings-section');

// Exibir a seção "Perfil" e abrir o dropdown ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    // Exibe a seção "Perfil" como padrão
    sections.forEach(section => section.classList.remove('active')); // Oculta todas as seções
    document.getElementById('perfil').classList.add('active'); // Exibe a seção "Perfil"

    // Exibe o dropdown de configurações imediatamente
    configDropdown.style.display = 'flex';
    configButton.classList.add('dropdown-open');

    // Marca o item "Perfil" como ativo no dropdown
    dropdownItems.forEach(item => item.classList.remove('active')); // Remove a classe "active" de todos os itens
    document.querySelector('.dropdown-item[data-section="perfil"]').classList.add('active'); // Adiciona ao "Perfil"
});

// Abrir/fechar o dropdown ao clicar no botão "Configurações"
configButton.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita conflito com o evento de clique fora

    // Alternar a visibilidade do dropdown
    if (configDropdown.style.display === 'flex') {
        configDropdown.style.display = 'none';
        configButton.classList.remove('dropdown-open');
    } else {
        configDropdown.style.display = 'flex';
        configButton.classList.add('dropdown-open');
    }
});

// Alternar entre as seções ao clicar nos itens do dropdown
dropdownItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.stopPropagation(); // Evita conflito com o evento de clique fora

        // Alterar a seção ativa
        dropdownItems.forEach(i => i.classList.remove('active')); // Remove a classe "active" de todos os itens
        item.classList.add('active'); // Adiciona a classe "active" ao item clicado

        // Exibir a seção correspondente ao item clicado
        sections.forEach(section => section.classList.remove('active')); // Oculta todas as seções
        const sectionId = item.getAttribute('data-section');
        document.getElementById(sectionId).classList.add('active'); // Exibe a seção correspondente
    });
});

// Fechar o dropdown ao clicar fora
window.addEventListener('click', (e) => {
    if (!configButton.contains(e.target) && !configDropdown.contains(e.target)) {
        configDropdown.style.display = 'none';
        configButton.classList.remove('dropdown-open');
    }
});

// Verificar se o usuário está logado
const usarLogado = JSON.parse(localStorage.getItem('userLogado'));
const logado = document.querySelector('#logado');

if (usarLogado) {
    logado.innerHTML = usarLogado.nome;
} else {
    logado.innerHTML = "Olá!";
}

if (localStorage.getItem('token') == null) {
    alert('Você precisa estar logado para acessar essa página');
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
    window.location.href = "./html/index.html";
}
