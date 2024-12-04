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
    window.location.href = "./index.html";
}

// Gráfico: Produtos Mais Vendidos
new Chart(document.getElementById('produtosMaisVendidos'), {
    type: 'bar',
    data: {
        labels: ['Produto A', 'Produto B', 'Produto C', 'Produto D'],
        datasets: [{
            label: 'Quantidade',
            data: [150, 100, 80, 50],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
        }]
    }
});

// Gráfico: Vendas por Período
new Chart(document.getElementById('vendasPorPeriodo'), {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril'],
        datasets: [{
            label: 'Vendas (R$)',
            data: [12000, 15000, 20000, 25000],
            borderColor: '#FF6384',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: true
        }]
    }
});

// Gráfico: Vendas por Produto
new Chart(document.getElementById('vendasPorProduto'), {
    type: 'pie',
    data: {
        labels: ['Produto A', 'Produto B', 'Produto C', 'Produto D'],
        datasets: [{
            label: 'Vendas',
            data: [5000, 3000, 2000, 1000],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
        }]
    }
});

// Gráfico: Vendas por Loja
new Chart(document.getElementById('vendasPorLoja'), {
    type: 'doughnut',
    data: {
        labels: ['Loja 1', 'Loja 2', 'Loja 3'],
        datasets: [{
            label: 'Vendas (R$)',
            data: [30000, 20000, 15000],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }]
    }
});

// Gráfico: Vendas por Vendedor
new Chart(document.getElementById('vendasPorVendedor'), {
    type: 'bar',
    data: {
        labels: ['Vendedor A', 'Vendedor B', 'Vendedor C',],
        datasets: [{
            label: 'Vendas (R$)',
            data: [15000, 20000, 12000],
            backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56']
        }]
    }
});
