$(document).ready(function() {
    //mascara telefone
    $('form #telefone').mask('(00) 00000-0000', {
    placeholder:'(00) 00000-0000'
    })
    //mascara cpf
    $('form #cpf').mask('000.000.000-00', {
    placeholder:'000.000.000-00'
    })
    //mascara cep
    $('form #cep').mask('00000-000', {
    placeholder:'00000-000'
    })
})
