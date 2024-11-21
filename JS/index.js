const eyeCloseIcon = document.querySelector('.icon-eye-close');
const eyeOpenIcon = document.querySelector('.icon-eye-open');
const inputSenha = document.querySelector('#password');

eyeCloseIcon.addEventListener('click', () => {
  inputSenha.setAttribute('type', 'text');
  eyeCloseIcon.style.display = 'none';
  eyeOpenIcon.style.display = 'block';
});

eyeOpenIcon.addEventListener('click', () => {
  inputSenha.setAttribute('type', 'password');
  eyeOpenIcon.style.display = 'none';
  eyeCloseIcon.style.display = 'block';
});

function gerarToken(tamanho = 16) {
  const array = new Uint8Array(tamanho);
  window.crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

function Nova_senha() {
  window.location.href = "Recuperacao_Senha.html";
}

function logar() {
  let email = document.querySelector('#email');
  let labelEmail = document.querySelector('#labelEmail');

  let password = document.querySelector('#password');
  let labelPassword = document.querySelector('#labelPassword');

  let msgErro = document.querySelector('#msgErro');
  let listaUser = JSON.parse(localStorage.getItem('listaUser')) || [];

  // Limpa mensagens de erro anteriores
  msgErro.innerHTML = "";
  email.removeAttribute("style");
  labelEmail.removeAttribute("style");
  password.removeAttribute("style");
  labelPassword.removeAttribute("style");

  // Validação dos campos
  if (email.value.trim() === "") {
    msgErro.innerHTML = "Por favor, preencha o campo de email.";
    email.setAttribute("style", "color: red");
    labelEmail.setAttribute("style", "color: red");
    email.focus();
    return; // Sai da função se o email estiver vazio
  }

  if (password.value.trim() === "") {
    msgErro.innerHTML = "Por favor, preencha o campo de senha.";
    password.setAttribute("style", "color: red; border-color: red");
    labelPassword.setAttribute("style", "color: red");
    password.focus();
    return; // Sai da função se a senha estiver vazia
  }

  // Se ambos os campos estiverem preenchidos, continua com a validação do login
  let userValid = {
    nome: '',
    email: '',
    telefone: '',
    password: ''
  };

  listaUser.forEach((item) => {
    if (email.value == item.emailCad && password.value == item.senhaCad) {
      userValid = {
        nome: item.nomeCad,
        email: item.emailCad,
        telefone: item.telefoneCad,
        password: item.senhaCad
      };
    }
  });

  if (email.value == userValid.email && password.value == userValid.password) {
    let token = gerarToken();
    localStorage.setItem('token', token);
    localStorage.setItem('userLogado', JSON.stringify(userValid));
    window.location.href = "Home.html";
  } else {
    email.setAttribute("style", "color: red");
    labelEmail.setAttribute("style", "color: red");
    password.setAttribute("style", "color: red; border-color: red");
    labelPassword.setAttribute("style", "color: red");
    msgErro.setAttribute("style", "display: block");
    msgErro.innerHTML = "Usuário ou senha incorretos";
    email.focus();
  }
}


function criar_conta() {
  window.location.href = "TelaCadastroFastManager.html";
}
