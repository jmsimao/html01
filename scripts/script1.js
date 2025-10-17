

const botaoLogin = document.getElementById('button-login');



const olaMundo = () => {
    const meuH1 = document.getElementById('meu-h1');
    meuH1.innerText = "Olá, jose Marcelo";

    console.log('Olá, mundo!');
};

function validarUsuario() {
    const usuario = document.querySelector("[name='input-usuario']");
    const emailPattern = /^[A-Za-z0-9._-]+\@[A-Za-z0-9._-]+\.+[A-Z-a-z]{2,3}$/;

    console.log(emailPattern.test(usuario.value));

    if (!emailPattern.test(usuario.value)) {
        alert('e-Mail inválido!');
        return false;
    } else {
        return true;
    }
};

botaoLogin.addEventListener('click', function x() {
   console.log('botao');
});


const usuario_blur = document.getElementById("input-usuario");
usuario_blur.addEventListener('blur', validarUsuario);

olaMundo();











