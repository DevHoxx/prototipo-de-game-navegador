let resources = {
    wood: 0,
    iron: 0,
    // Adicione outros recursos aqui
};

let workers = {
    lumberjacks: 0,
    miners: 0,
    // Adicione outros tipos de trabalhadores aqui
};

let productionRates = {
    woodPerMinute: 1, // Valor base por minuto para madeira
    ironPerMinute: 1, // Valor base por minuto para ferro
    // Adicione outros recursos e seus valores base aqui
};

// Função para calcular e atualizar a produção de recursos
function calculateResourceProduction() {
    resources.wood += (workers.lumberjacks * productionRates.woodPerMinute);
    resources.iron += (workers.miners * productionRates.ironPerMinute);
    // Calcule a produção de outros recursos da mesma maneira

    // Atualize a interface do usuário para refletir as novas quantidades de recursos
    updateResources();
}

// Função para atualizar a interface do usuário com as quantidades de recursos
function updateResources() {
    document.getElementById("wood").textContent = `Madeira: ${resources.wood}`;
    document.getElementById("iron").textContent = `Ferro: ${resources.iron}`;
    // Atualize outros recursos da mesma maneira
}

// Iniciar a função de atualização contínua (chamada a cada minuto)
setInterval(calculateResourceProduction, 60000); // 60000 milissegundos = 1 minuto
