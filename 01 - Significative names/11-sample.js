class User {
    //("Carlos", 25, 'admin', new Date(2023, 1, 15), new Date(2024, 8, 1), true, 100, 2
    constructor(nome, idade, tipoUsuario, dataCadastro, dataUltimoLogin, isAtivo, creditos, numeroLogin) {
        this.nome = nome;
        this.idade = idade;
        this.tipoUsuario = tipoUsuario;
        this.dataCadastro = dataCadastro;
        this.dataUltimoLogin = dataUltimoLogin;
        this.isAtivo = isAtivo;
        this.creditos = creditos;
        this.numeroLogin = numeroLogin;
    }

    verificarAtividade() {
        if (this.isAtivo) {
            console.log("Ativo");
        } else {
            console.log("Inativo");
        }
    }

    verificarTipoUsuario() {
        if (this.tipoUsuario === "admin") {
            console.log("Admin pode acessar todas as áreas.");
        } else {
            console.log("Convidado tem acesso limitado.");
        }
    }
}

// Deixe a função clara para que seja possível de compreender que ela verifica o número de usuários com a role de admin
function verificarQuantidadeAdmin(users) {
    let contagem = 0;
    for (let i = 0; i < users.length; i++) {
        if (users[i].tipoUsuario === "admin") {
            contagem++;
        }
    }
    return contagem;
}

// Deixe a função clara para que seja possível de compreender que ela verifica se o número de tentativas de login é excessivo
function verificarNumeroDeTentativasDeLogin(usuario, limiteLogin) {
    if (usuario.numeroLogin > limiteLogin) {
        console.log("Tentativas de login excessivas.");
    } else {
        console.log("Tentativas de login sob controle.");
    }
}

// Deixe a função clara para que seja possível de compreender que ela verifica qual usuário logou mais recentemente
function verificarLoginRecente(usuario1, usuario2) {
    if (usuario1.dataUltimoLogin > usuario2.dataUltimoLogin) {
        return `${usuario1.nome  } logou mais recentemente.`;
    } else {
        return `${usuario2.nome  } logou mais recentemente.`;
    }
}

// Deixe a função clara para que seja possível de compreender que ela verifica se o usuário foi criado recentemente
function verificarUsuarioRecente(user) {
    const now = new Date();
    if (now - user.dataCadastro < 31536000000) {
        console.log("Usuário criado recentemente.");
    } else {
        console.log("Usuário antigo.");
    }
}

const usuarios = [
    new User("Carlos", 25, "admin", new Date(2023, 1, 15), new Date(2024, 8, 1), true, 100, 2),
    new User("Ana", 30, "guest", new Date(2020, 4, 22), new Date(2024, 7, 31), true, 50, 3),
    new User("José", 29, "admin", new Date(2022, 10, 5), new Date(2024, 6, 10), false, 200, 5),
    new User("Maria", 35, "guest", new Date(2021, 2, 10), new Date(2023, 12, 25), false, 80, 7)
];

console.log(`Usuários admin: ${  verificarQuantidadeAdmin(usuarios)}`);

usuarios[0].verificarAtividade();
usuarios[1].verificarTipoUsuario();

verificarNumeroDeTentativasDeLogin(usuarios[2], 4);

console.log(verificarLoginRecente(usuarios[0], usuarios[3]));

verificarUsuarioRecente(usuarios[3]);
