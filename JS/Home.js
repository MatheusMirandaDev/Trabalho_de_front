// Gráfico 1
new Chart(document.getElementById('graficoBarras'), {
    type: 'bar',
    data: {
        labels: ['Produto A', 'Produto B', 'Produto C', 'Produto D'],
        datasets: [{
            label: 'Quantidade',
            data: [150, 100, 80, 50],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Vendas por Produto',
                font: { size: 18 }
            },
            tooltip: {
                enabled: true
            }
        },
        scales: {
            x: { grid: { display: false } },
            y: { beginAtZero: true }
        }
    }
});

// Gráfico 2
new Chart(document.getElementById('graficoBarras2'), {
    type: 'bar',
    data: {
        labels: ['Produto A', 'Produto B', 'Produto C', 'Produto D'],
        datasets: [{
            label: 'Retorno',
            data: [50, 20, 70, 20],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Retorno por Produto',
                font: { size: 18 }
            },
            tooltip: {
                enabled: true
            }
        },
        scales: {
            x: { grid: { display: false } },
            y: { beginAtZero: true }
        }
    }
});


new Chart(document.getElementById('graficoLinhas'), {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [{
            label: 'Vendas (R$)',
            data: [12000, 15000, 20000, 25000, 20500, 24000],
            borderColor: '#FF6384',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: true
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Evolução das Vendas Mensais',
                font: {
                    size: 18
                }
            },
            tooltip: {
                enabled: true
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Meses',
                    font: {
                        size: 14
                    }
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Valor (R$)',
                    font: {
                        size: 14
                    }
                }
            }
        }
    }
});



const ctxPizza = document.getElementById('graficoPizza').getContext('2d');
const graficoPizza = new Chart(ctxPizza, {
    type: 'pie',
    data: {
        labels: ['Produto A', 'Produto B', 'Produto C', 'Produto D'],
        datasets: [{
            label: 'Produtos',
            data: [12, 19, 8, 5],   
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'right', 
                labels: {
                    boxWidth: 20,  
                    padding: 10   
                }
            },
            tooltip: {
                enabled: true 
            }
        },
        layout: {
            padding: 20,
            width: 100
        }
    }
});


    JsBarcode("#codigoDeBarras", "123456789012", {
        format: "EAN13",
        lineColor: "black",
        width: 7,
        height: 60,
        displayValue: true
        });


let usarLogado = JSON.parse(localStorage.getItem('userLogado'))

let logado = document.querySelector('#logado')

if (usarLogado) {
    logado.innerHTML = "Olá " + usarLogado.nome + "!";
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
    window.location.href = "Configuracoes.html"
}

function ajuda() {
    window.location.href = "Ajuda.html"
}

function sair() {
    localStorage.removeItem('token');
    localStorage.removeItem('userLogado');
    window.location.href = "./index.html";
}