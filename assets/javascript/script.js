//AUTO-SCROLL NA PAGINA

$('nav ul li a').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;
    $('html, body').animate({
        scrollTop: targetOffset
    }, 500);
});


//VALIDAÇÃO DO FORMULÁRIO
const nameField = document.getElementById("nome");

    nameField.addEventListener("nome", () => {
    nameField.setCustomValidity("");
    nameField.checkValidity();
    console.log(nameField.checkValidity());
});

    if (nameField==true) {
        nameField.addEventListener("invalid", () => {
        nameField.setCustomValidity("Por favor, insira um nome válido");
        });
    }

const emailField = document.getElementById("email");

    emailField.addEventListener("email", () => {
    emailField.setCustomValidity("");
    emailField.checkValidity();
    console.log(emailField.checkValidity());
});

    if (emailField==true) {
        emailField.addEventListener("invalid", () => {
        emailField.setCustomValidity("Por favor, insira um e-mail válido");
        });
    }

const assunto = document.getElementById("assunto");

    assunto.addEventListener("assunto", () => {
    assunto.setCustomValidity("");
    assunto.checkValidity();
    console.log(assunto.checkValidity());
});

    if (assunto==true) {
        assunto.addEventListener("invalid", () => {
        assunto.setCustomValidity("Por favor, insira um assunto");
        });
    }

const textField = document.getElementById("texto");

    textField.addEventListener("texto", () => {
    textField.setCustomValidity("");
    textField.checkValidity();
    console.log(textField.checkValidity());
});

    if (textField==true) {
        textField.addEventListener("invalid", () => {
        textField.setCustomValidity("Por favor, insira um texto");
        });
    }