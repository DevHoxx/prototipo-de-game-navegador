function calculateResourceProduction() {
    // Calcular a produção de madeira com base no nível da serraria e a capacidade de trabalhadores
    resources.wood += (buildings.sawmill.level * workers.lumberjacks * productionRates.woodPerMinute);
    
    // Calcular a produção de ferro com base no nível da mina de ferro e a capacidade de trabalhadores
    resources.iron += (buildings.ironMine.level * workers.miners * productionRates.ironPerMinute);
    
    // Calcule a produção de outros recursos da mesma maneira

    // Atualize a interface do usuário para refletir as novas quantidades de recursos
    updateResources();
}
