// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

// page view
ga('send', 'pageview', location.pathname);

// menu-lista-contato
var contactButtonMenuListaContato = document.getElementsByClassName("menu-lista-contato")[0];
contactButtonMenuListaContato.addEventListener("click", function() {
    ga('send', 'event', 'menu', 'entre_em_contato', 'link_externo');
})

// menu-lista-download
var contactButtonMenuListaDownload = document.getElementsByClassName("menu-lista-download")[0];
contactButtonMenuListaDownload.addEventListener("click", function() {
    ga('send', 'event', 'menu', 'download_pdf', 'download_pdf');
})

