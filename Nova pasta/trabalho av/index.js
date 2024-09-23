// Array para armazenar os personagens cadastrados
let personagens = [];

// Função para cadastrar um novo personagem
function cadastrarPersonagem() {
    // Solicita o nome do personagem ao usuário
    let nome = prompt("Digite o nome do personagem:");
    // Solicita a classe do personagem
    let classe = prompt("Digite a classe do personagem:");
    // Solicita o nível do personagem
    let nivel = prompt("Digite o nível do personagem:");
    // Solicita os pontos de vida (HP) do personagem
    let hp = prompt("Digite os pontos de vida (HP) do personagem:");
    // Solicita as habilidades do personagem, separando por vírgula e criando um array
    let habilidades = prompt("Digite as habilidades (separadas por vírgula):").split(",");

    // Verifica se o personagem já está cadastrado
    for (let p of personagens) {
        if (p.nome === nome) {
            console.log(`Personagem ${nome} já cadastrado.`); // Mensagem de aviso
            return; // Sai da função se o personagem já existir
        }
    }

    // Adiciona o novo personagem ao array
    personagens.push({ nome, classe, nivel, hp, habilidades });
    console.log(`Personagem ${nome} cadastrado.`); // Mensagem de confirmação
}

// Função para buscar um personagem pelo nome
function buscarPersonagem() {
    // Solicita o nome do personagem ao usuário
    let nome = prompt("Digite o nome do personagem:");
    // Procura o personagem no array
    for (let p of personagens) {
        if (p.nome === nome) {
            // Exibe as informações do personagem encontrado
            console.log(`Nome: ${p.nome}, Classe: ${p.classe}, Nível: ${p.nivel}, HP: ${p.hp}, Habilidades: ${p.habilidades.join(", ")}`);
            return; // Sai da função após exibir os dados
        }
    }
    // Mensagem caso o personagem não seja encontrado
    console.log(`Personagem ${nome} não encontrado.`);
}

// Função para excluir um personagem pelo nome
function excluirPersonagem() {
    // Solicita o nome do personagem ao usuário
    let nome = prompt("Digite o nome do personagem:");
    // Procura o personagem no array
    for (let i = 0; i < personagens.length; i++) {
        if (personagens[i].nome === nome) {
            // Remove o personagem do array
            personagens.splice(i, 1);
            console.log(`Personagem ${nome} excluído.`); // Mensagem de confirmação
            return; // Sai da função após excluir
        }
    }
    // Mensagem caso o personagem não seja encontrado
    console.log(`Personagem ${nome} não encontrado.`);
}

// Função para listar todos os personagens cadastrados
function listarPersonagens() {
    // Verifica se há personagens cadastrados
    if (personagens.length === 0) {
        console.log("Nenhum personagem cadastrado."); // Mensagem caso não haja personagens
        return; // Sai da função
    }
    // Exibe a lista de personagens cadastrados
    console.log("Personagens cadastrados:");
    for (let p of personagens) {
        console.log(p.nome); // Mostra o nome de cada personagem
    }
}

// Função para exibir o menu e gerenciar as opções
function menu() {
    let opcao; // Variável para armazenar a opção escolhida
    do {
        // Solicita ao usuário que escolha uma opção do menu
        opcao = prompt("Escolha uma opção:\n1. Cadastrar\n2. Buscar\n3. Excluir\n4. Listar\n5. Sair");
        // Chama a função correspondente à opção escolhida
        if (opcao === '1') cadastrarPersonagem();
        else if (opcao === '2') buscarPersonagem();
        else if (opcao === '3') excluirPersonagem();
        else if (opcao === '4') listarPersonagens();
    } while (opcao !== '5'); // Continua até que o usuário escolha sair
    console.log("Saindo..."); // Mensagem de saída
}

// Chama a função do menu para iniciar a aplicação
menu();
