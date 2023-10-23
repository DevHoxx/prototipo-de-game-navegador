function buildHouse() {
    // ...
    // Se a construção for bem-sucedida, adicione os botões
    const constructionArea = document.getElementById("construction-area");
    const collectResourcesButton = document.createElement("button");
    collectResourcesButton.textContent = "Coletar Recursos";
    collectResourcesButton.onclick = gatherResources;

    const buildHouseButton = document.createElement("button");
    buildHouseButton.textContent = "Construir Casa";
    buildHouseButton.onclick = buildHouse;

    constructionArea.appendChild(collectResourcesButton);
    constructionArea.appendChild(buildHouseButton);
}

Assim, os botões "Coletar Recursos" e "Construir Casa" serão adicionados à área de construção quando o jogador clicar em uma construção específica. Lembre-se de personalizar essa lógica para cada tipo de construção e ajustar os eventos de clique conforme necessário.
