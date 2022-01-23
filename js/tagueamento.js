// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

// page view
ga('send', 'pageview', location.pathname);

// menu-lista-contato
var buttonMenuListaContato = document.getElementsByClassName("menu-lista-contato")[0];
buttonMenuListaContato.addEventListener("click", function() {
    ga('send', 'event', 'menu', 'entre_em_contato', 'link_externo');
})

// menu-lista-download
var buttonMenuListaDownload = document.getElementsByClassName("menu-lista-download")[0];
buttonMenuListaDownload.addEventListener("click", function() {
    ga('send', 'event', 'menu', 'download_pdf', 'download_pdf');
})

// analise: card-montadoras
var buttonCardMontadoras0 = document.getElementsByClassName("card card-montadoras")[0];
if (buttonCardMontadoras0 !== undefined) {
    buttonCardMontadoras0.addEventListener("click", function() {
        var buttonLabel = buttonCardMontadoras0.dataset.name;
        ga('send', 'event', "analise", "ver_mais", buttonLabel);
    })
    
    var buttonCardMontadoras1 = document.getElementsByClassName("card card-montadoras")[1];
    buttonCardMontadoras1.addEventListener("click", function() {
        var buttonLabel = buttonCardMontadoras1.dataset.name;
        ga('send', 'event', "analise", "ver_mais", buttonLabel);
    })
    
    var buttonCardMontadoras2 = document.getElementsByClassName("card card-montadoras")[2];
    buttonCardMontadoras2.addEventListener("click", function() {
        var buttonLabel = buttonCardMontadoras2.dataset.name;
        ga('send', 'event', "analise", "ver_mais", buttonLabel);
    })
    
}

// sobre: popup
var buttonEnviar = document.getElementById("enviar");
if (buttonEnviar !== null) {
    buttonEnviar.addEventListener("click", function() {
        var form = document.forms.formcontato;
        var formData = new FormData(form);
        var email = formData.get("email");
        ga('send', 'event', "contato", email, "preencheu");
        ga('send', 'event', "contato", "enviado", "enviado");
    })
}