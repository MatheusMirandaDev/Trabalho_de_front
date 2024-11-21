let email = document.querySelector("#email");
let labelEmail = document.querySelector("#labelEmail");
let validarEmail = false;

let labelSenha = document.querySelector("#labelSenha");
let senha = document.querySelector("#senha");
let validarSenha = false;

let labelConfirmar_senha = document.querySelector("#labelConfirmar_senha");
let confirmar_senha = document.querySelector("#confirmar_senha");
let validarConfirmar_senha = false;

let msgErro = document.querySelector("#msgErro");
let msgSucesso = document.querySelector("#msgSucesso");

// Validação do email
email.addEventListener("keyup", () => {
    const regex = /^[^\s@]+@fasthelp\.com\.br$/;
    if (!regex.test(email.value)) {
        email.setAttribute("style", "color: red; border-color: red");
        labelEmail.innerHTML = "Email *Formato Inválido";
        labelEmail.setAttribute("style", "color: red");
        validarEmail = false;
    } else {
        email.setAttribute("style", "color: black; border-color: ");
        labelEmail.innerHTML = "Email";
        labelEmail.setAttribute("style", "color: black");
        validarEmail = true;
    }
});

// Validação da senha
senha.addEventListener("keyup", () => {
    if (senha.value.length <= 5) {
        senha.setAttribute("style", "color: red; border-color: red");
        labelSenha.innerHTML = "Nova Senha *Insira no mínimo 6 caracteres";
        labelSenha.setAttribute("style", "color: red");
        validarSenha = false;
    } else {
        senha.setAttribute("style", "color: black; border-color: ");
        labelSenha.innerHTML = "Nova Senha";
        labelSenha.setAttribute("style", "color: black");
        validarSenha = true;
    }
});

// Validação da confirmação de senha
confirmar_senha.addEventListener("keyup", () => {
    if (senha.value !== confirmar_senha.value) {
        confirmar_senha.setAttribute("style", "color: red; border-color: red");
        labelConfirmar_senha.innerHTML = "Confirmar Nova Senha *As senhas devem ser iguais";
        labelConfirmar_senha.setAttribute("style", "color: red");
        validarConfirmar_senha = false;
    } else {
        confirmar_senha.setAttribute("style", "color: black; border-color: ");
        labelConfirmar_senha.innerHTML = "Confirmar Nova Senha";
        labelConfirmar_senha.setAttribute("style", "color: black");
        validarConfirmar_senha = true;
    }
});

// Alternar visibilidade da senha
document.querySelectorAll('.input-container').forEach(container => {
    const eyeCloseIcon = container.querySelector('.icon-eye-close');
    const eyeOpenIcon = container.querySelector('.icon-eye-open');
    const input = container.querySelector('input[type="password"]');

    // Inicialmente, esconder o ícone de olho aberto
    eyeOpenIcon.style.display = 'none';

    // Adicionar um evento de clique para alternar visibilidade
    eyeCloseIcon.addEventListener('click', () => {
        input.setAttribute('type', 'text'); // Altera para texto
        eyeCloseIcon.style.display = 'none'; // Esconde o olho fechado
        eyeOpenIcon.style.display = 'block'; // Mostra o olho aberto
    });

    eyeOpenIcon.addEventListener('click', () => {
        input.setAttribute('type', 'password'); // Altera para senha
        eyeOpenIcon.style.display = 'none'; // Esconde o olho aberto
        eyeCloseIcon.style.display = 'block'; // Mostra o olho fechado
    });
});

// Função para cadastrar a nova senha
function cadastrar() {
    // Recupera os dados do localStorage
    const listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]");

    // Encontra o usuário correspondente pelo email
    const usuarioIndex = listaUser.findIndex(user => user.emailCad === email.value);

    if (usuarioIndex !== -1 && validarEmail && validarSenha && validarConfirmar_senha) {
        // Atualiza a senha no localStorage
        listaUser[usuarioIndex].senhaCad = senha.value;
        localStorage.setItem("listaUser", JSON.stringify(listaUser));

        msgSucesso.setAttribute("style", "display: block");
        msgSucesso.innerHTML = "<strong>Senha redefinida com sucesso!</strong>";
        msgErro.setAttribute("style", "display: none");
        msgErro.innerHTML = "";

        // Redireciona após 2 segundos
        setTimeout(() => {
            window.location.href = "index.html"; // Página de login
        }, 2000);
    } else if (usuarioIndex === -1) {
        // Email não encontrado
        msgErro.setAttribute("style", "display: block");
        msgErro.innerHTML = "<strong>Email não encontrado!</strong>";
        msgSucesso.setAttribute("style", "display: none");
        msgSucesso.innerHTML = "";
    } else {
        // Validação não passou
        msgErro.setAttribute("style", "display: block");
        msgErro.innerHTML = "<strong>Preencha todos os campos corretamente!</strong>";
        msgSucesso.setAttribute("style", "display: none");
        msgSucesso.innerHTML = "";
    }
}