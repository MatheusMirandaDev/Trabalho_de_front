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
}

function logar() {
  let email = document.querySelector('#email');
  let labelEmail = document.querySelector('#labelEmail');

  let password = document.querySelector('#password');
  let labelPassword = document.querySelector('#labelPassword');

  let msgErro = document.querySelector('#msgErro');
  let listaUser = [];

  let userValid = {
    nome: '',
    email: '',
    telefone: '',
    password: ''
  }
  listaUser = JSON.parse(localStorage.getItem('listaUser'))

  listaUser.forEach((item) => {
    if (email.value == item.emailCad && password.value == item.senhaCad) {

      userValid = {
        nome: item.nomeCad,
        email: item.emailCad,
        telefone: item.telefoneCad,
        password: item.senhaCad
      }
    }
  });

  if (email.value == userValid.email && password.value == userValid.password) {
    let token = gerarToken();
    localStorage.setItem('token', token)

    window.location.href = "Home.html";

    localStorage.setItem('userLogado', JSON.stringify(userValid))
  } else {
    email.setAttribute("style", "color: red");
    labelEmail.setAttribute("style", "color: red");
    password.setAttribute("style", "color: red; border-color: red");
    labelPassword.setAttribute("style", "color: red");
    msgErro.setAttribute("style", "display: block");
    msgErro.innerHTML = "Usuário ou senha incorretos";
    email.focus()
  }
}

function criar_conta() {
  window.location.href = "TelaCadastroFastManager.html";
}
