const Zelda = {
    personagens: [
        { nome: "Tingle", vida: 8, ataque: 4, defesa: 6 },
        { nome: "Nabooru", vida: 14, ataque: 12, defesa: 9 },
        { nome: "Darunia", vida: 18, ataque: 14, defesa: 10 },
        { nome: "Midna", vida: 10, ataque: 7, defesa: 8 }
    ],
    armas: [
        { tipo: "Cajado", dano: 9, alcance: 2 },
        { tipo: "Lança", dano: 12, alcance: 4 },
        { tipo: "Bumerangue Mágico", dano: 6, alcance: 3 },
        { tipo: "Espada de Dois Gumes", dano: 11, alcance: 1 }
    ],
    itens: [
        { nome: "Escudo Hylian", efeito: "Aumenta a defesa" },
        { nome: "Coração", efeito: "Restaura 5 de vida" },
        { nome: "Pergaminho de Magia", efeito: "Lança feitiços poderosos" },
        { nome: "Rupees Douradas", efeito: "Moeda rara do jogo" }
    ]
};

// Exemplo de acesso aos dados
console.log(Zelda.personagens);
console.log(Zelda.armas);
console.log(Zelda.itens);

// Função para validar os dados do objeto
function validarJogo(jogo) {
    const validarPersonagens = (personagens) => {
        for (const p of personagens) {
            if (typeof p.nome !== 'string' || p.nome === '') {

                return `Erro: Personagem com nome inválido.`;
            }
            if (typeof p.vida !== 'number' || p.vida < 1 || p.vida > 20) {
                return `Erro: O personagem ${p.nome} tem corações de vida fora do intervalo permitido.`;
            }
            if (typeof p.ataque !== 'number' || p.ataque < 0 || typeof p.defesa !== 'number' || p.defesa < 0) {
                return `Erro: O personagem ${p.nome} tem valores de ataque ou defesa inválidos.`;
            }
        }
        return "Personagens validados com sucesso!";
    };

    const validarArmas = (armas) => {
        for (const a of armas) {
            if (typeof a.tipo !== 'string' || a.tipo === '') {
                return `Erro: Arma com tipo inválido.`;
            }
            if (typeof a.dano !== 'number' || a.dano <= 0) {
                return `Erro: A arma ${a.tipo} tem dano inválido.`;
            }
            if (typeof a.alcance !== 'number' || a.alcance < 0) {
                return `Erro: A arma ${a.tipo} tem alcance inválido.`;
            }
        }
        return "Armas validadas com sucesso!";
    };

    const validarItens = (itens) => {
        for (const i of itens) {
            if (typeof i.nome !== 'string' || i.nome === '') {

                return `Erro: Item com nome inválido.`;
            }
            if (typeof i.efeito !== 'string' || i.efeito === '') {
                return `Erro: Item ${i.nome} com efeito inválido.`;
            }
        }
        return "Itens validados com sucesso!";
    };

    console.log(validarPersonagens(jogo.personagens));
    console.log(validarArmas(jogo.armas));
    console.log(validarItens(jogo.itens));
}

// Validar os dados do objeto
validarJogo(Zelda);
