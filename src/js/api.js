// --- SALVAR USUÁRIO --- //
export function salvarUsuario(usuario) {
    localStorage.setItem("usuario", JSON.stringify(usuario));
}

// --- PEGAR USUÁRIO --- //
export function obterUsuario() {
    return JSON.parse(localStorage.getItem("usuario"));
}

// --- ADICIONAR VACINA --- //
export function adicionarVacina(vacina) {
    let usuario = obterUsuario();

    if (!usuario.vacinas) {
        usuario.vacinas = [];
    }

    usuario.vacinas.push(vacina);

    salvarUsuario(usuario);
}
