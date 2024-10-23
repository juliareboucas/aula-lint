const nomeUsuario = "Pedro";
const idadeUsuario = 25;
const isAtivo = true;

function verificarUsuario(nomeUsuario, idadeUsuario, isAtivo) {
    if (isAtivo) {
        console.log(`${nomeUsuario  } tem ${  idadeUsuario  } anos e está ativo.`);
    } else {
        console.log(`${nomeUsuario  } está inativo.`);
    }
}

verificarUsuario(nomeUsuario, idadeUsuario, isAtivo);
