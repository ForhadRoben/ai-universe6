const loadData = async () => {
    const url = ` https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    displayAiData(data.data.tools);
}

const displayAiData = (aiTools) => {
    console.log(aiTools);
    const aiContainer = document.getElementById('ai-container')
    aiTools.forEach(singleAiTool => {
        // console.log(singleAiTool);
        const singleAiToolDiv = document.createElement('div');
        singleAiToolDiv.classList.add('col');
        singleAiToolDiv.innerHTML = `
        <div class="card h-100 p-4">
        <img style="height: 200px;" src="${singleAiTool.image}" class="card-img-top rounded" alt="...">
            <div class="card-body">
                <h5 class="card-title">${}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
        `;
        aiContainer.appendChild(singleAiToolDiv)
    });
}
loadData()