// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.


//ga('send', 'event', CATEGORIA, AÇÃO, RÓTULO)

/////////Coleta de dados da aba "Entre em Contato"
$(".menu-lista-contato").click(function() {
    ga('dp6Tracker.send', 'event', 'menu', 'entre_em_contato', 'link_externo');
});


/////////Coleta de dados da aba "Download PDF"
$(".menu-lista-download").click(function() {
    ga('dp6Tracker.send', 'event', 'menu', 'download_pdf', 'download_pdf');
});


/////////Coleta de dados da aba "Análise"
//Coleta de dados do botão "Lorem"
$("#lorem").click(function() {
    ga('dp6Tracker.send', 'event', 'analise', 'ver_mais', 'Lorem');
});

//Coleta de dados do botão "Ipsum"
$("#ipsum").click(function() {
    ga('dp6Tracker.send', 'event', 'analise', 'ver_mais', 'Ipsum');
});

//Coleta de dados do botão "Dolor"
$("#dolor").click(function() {
    ga('dp6Tracker.send', 'event', 'analise', 'ver_mais', 'Dolor');
});


/////////Coleta de dados da aba "Sobre"
//Coleta de dados de "nome"
$("#nome").blur(function() {
    //Verifica se há valor no input
    if ($("#nome").val()) {
        ga('dp6Tracker.send', 'event', 'contato', 'nome', 'preencheu');
    }

});

//Coleta de dados de "email"
$("#email").blur(function() {
    //Verifica se há valor no input
    if ($("#email").val()) {
        ga('dp6Tracker.send', 'event', 'contato', 'email', 'preencheu');
    }
      
});

//Coleta de dados de "telefone"
$("#telefone").blur(function() {

    //Verifica se há valor no input
    if ($("#telefone").val()) {
        ga('dp6Tracker.send', 'event', 'contato', 'telefone', 'preencheu');
    }

});

//Coleta de dados de "aceito"
$("#aceito").blur(function() {
    //Verifica se há valor no input
    if ($('#aceito').is(':checked')) {
        ga('dp6Tracker.send', 'event', 'contato', 'aceito', 'preencheu');
    }

});

//Coleta de dados ao formulário ser submetido
$('.contato').on('submit', function() {
    ga('dp6Tracker.send', 'event', 'contato', 'enviado', 'enviado');
});

