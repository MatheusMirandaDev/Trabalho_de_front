let labelNome = document.querySelector("#labelNome");
let nome = document.querySelector("#nome");
let validarNome = false;

let email = document.querySelector("#email");
let labelEmail = document.querySelector("#labelEmail");
let validarEmail = false;

let labelTelefone = document.querySelector("#labelTelefone");
let telefone = document.querySelector("#telefone");
let validarTelefone = false;

let labelSenha = document.querySelector("#labelSenha");
let senha = document.querySelector("#senha");
let validarSenha = false;

let labelConfirmar_senha = document.querySelector("#labelConfirmar_senha");
let confirmar_senha = document.querySelector("#confirmar_senha");
let validarConfirmar_senha = false;

let msgErro = document.querySelector("#msgErro");
let msgSucesso = document.querySelector("#msgSucesso");

nome.addEventListener("keyup", () => {
    if (nome.value.length <= 2) {
        nome.setAttribute("style", "color: red; border-color: red");
        labelNome.innerHTML = "Nome *Insira no mínimo 3 caracteres";
        labelNome.setAttribute("style", "color: red");
        validarNome = false;
    } else {
        nome.setAttribute("style", "color: black; border-color: ");
        labelNome.innerHTML = "Nome";
        labelNome.setAttribute("style", "color: black");
        validarNome = true;
    }
});

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

telefone.addEventListener("keyup", () => {
    if (telefone.value.length <= 10) {
        telefone.setAttribute("style", "color: red; border-color: red");
        labelTelefone.innerHTML = "Telefone *Insira como o modelo: (xx) xxxxx-xxxx";
        labelTelefone.setAttribute("style", "color: red");
        validarTelefone = false;
    } else {
        telefone.setAttribute("style", "color: black; border-color: ");
        labelTelefone.innerHTML = "Telefone";
        labelTelefone.setAttribute("style", "color: black");
        validarTelefone = true;
    }
});

telefone.addEventListener("input", formatarTelefone);

function formatarTelefone(event) {
    let input = event.target;
    let valor = input.value.replace(/\D/g, "");

    if (valor.length > 11) valor = valor.slice(0, 11);

    if (event.inputType !== "deleteContentBackward") {
        if (valor.length > 7) {
            input.value = `(${valor.slice(0, 2)}) ${valor.slice(2, 3)} ${valor.slice(
                3,
                7
            )}-${valor.slice(7)}`;
        } else if (valor.length > 3) {
            input.value = `(${valor.slice(0, 2)}) ${valor.slice(2, 3)} ${valor.slice(
                3
            )}`;
        } else if (valor.length > 2) {
            input.value = `(${valor.slice(0, 2)}) ${valor.slice(2)}`;
        } else if (valor.length > 0) {
            input.value = `(${valor}`;
        }
    } else {
        input.value = valor;
    }

    setTimeout(() => {
        input.selectionStart = input.selectionEnd = input.value.length;
    }, 0);
}

senha.addEventListener("keyup", () => {
    if (senha.value.length <= 5) {
        senha.setAttribute("style", "color: red; border-color: red");
        labelSenha.innerHTML = "Senha *Insira no mínimo 6 caracteres";
        labelSenha.setAttribute("style", "color: red");
        validarSenha = false;
    } else {
        senha.setAttribute("style", "color: black; border-color: ");
        labelSenha.innerHTML = "Senha";
        labelSenha.setAttribute("style", "color: black");
        validarSenha = true;
    }
});

confirmar_senha.addEventListener("keyup", () => {
    if (senha.value != confirmar_senha.value) {
        confirmar_senha.setAttribute("style", "color: red; border-color: red");
        labelConfirmar_senha.innerHTML = "Confirmar Senha *As senhas devem ser iguais";
        labelConfirmar_senha.setAttribute("style", "color: red");
        validarConfirmar_senha = false;
    } else {
        confirmar_senha.setAttribute("style", "color: black; border-color: ");
        labelConfirmar_senha.innerHTML = "Confirmar Senha";
        labelConfirmar_senha.setAttribute("style", "color: black");
        validarConfirmar_senha = true;
    }
});

function cadastrar() {
    if (
        validarNome &&
        validarEmail &&
        validarTelefone &&
        validarSenha &&
        validarConfirmar_senha
    ) {
        let listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]");

        listaUser.push({
            nomeCad: nome.value,
            emailCad: email.value,
            telefoneCad: telefone.value,
            senhaCad: senha.value,
        });

        localStorage.setItem("listaUser", JSON.stringify(listaUser));

        msgSucesso.setAttribute("style", "display: block");
        msgSucesso.innerHTML = "<strong> Cadastro realizado com sucesso!</strong>";
        msgErro.setAttribute("style", "display: none");
        msgErro.innerHTML = "";

        setTimeout(() => {
            window.location.href = 'index.html'
        }, 2000)

    } else {
        msgErro.setAttribute("style", "display: block");
        msgErro.innerHTML = "<strong> Preencha corretamente todos os campos!</strong>";
        msgSucesso.setAttribute("style", "display: none");
        msgSucesso.innerHTML = "";
    }
}

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
        eyeOpenIcon.style.display = 'none'; // olho aberto
        eyeCloseIcon.style.display = 'block'; // Mostra o olho fechado
    });
});

