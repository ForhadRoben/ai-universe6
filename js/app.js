
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
                <h5 class="card-title">Features</h5>
                
                <div>
                    <ol>
                        <li >${singleAiTool.features[0]}</li>
                        <li>${singleAiTool.features[1]} </li>
                        <li >${singleAiTool.features[2]} </li>
                        <li >${singleAiTool.features[3]} </li>
                    </ol>
                </div>
                <hr class="border border-1">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <h5 class="card-title">${singleAiTool.name}</h5>
                        <p><i class="far fa-calendar-alt "></i> ${singleAiTool.published_in}</p>
                    </div>
                    <div class="rounded-5 px-3 py-2 bg-danger-subtle">
                        <i class="fas fa-arrow-right"></i>
                    </div>
                </div>
            </div>
        </div>
        `;

        aiContainer.appendChild(singleAiToolDiv)
    });

    // stop spinner
    toggleSpinner(false);
}
const toggleSpinner = isLoading => {
    const spinnerSection = document.getElementById('spinner');
    if (isLoading) {
        spinnerSection.classList.remove('d-none')
    }
    else {
        spinnerSection.classList.add('d-none');
    }
}
// start spinner
toggleSpinner(true);
loadData()