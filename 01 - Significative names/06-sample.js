let nomeUsuario = "Pedro";
let idadeUsuario = 25;
let isAtivo = true;

function verificarUsuario(nomeUsuario, idadeUsuario, isAtivo) {
    if (isAtivo) {
        console.log(nomeUsuario + " tem " + idadeUsuario + " anos e está ativo.");
    } else {
        console.log(nomeUsuario + " está inativo.");
    }
}

verificarUsuario(nomeUsuario, idadeUsuario, isAtivo);
