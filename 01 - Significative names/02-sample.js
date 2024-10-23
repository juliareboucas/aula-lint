let admin = true;

function verificarAcesso(usuario) {
    if (admin && usuario.isAdmin) {
        console.log("Acesso permitido ao administrador.");
    } else {
        console.log("Acesso negado.");
    }
}

let usuario = { nome: "João", admin: true };
verAc(u);
