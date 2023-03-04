// loadData from api 
const loadData = async () => {
    const url = ` https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    displayAiData(data.data.tools.slice(0, 6));
}

// see More function 

const showAllData = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
    const data = await res.json();
    displayAiData(data.data.tools);
};

// display data from api

const displayAiData = (aiTools) => {
    // console.log(aiTools);
    const aiContainer = document.getElementById('ai-container')
    aiContainer.innerHTML = '';

    const seeMore = document.getElementById('see-more');
    if (aiTools.length > 6) {
        seeMore.classList.add('d-none')
    }
    else {
        seeMore.classList.remove('d-none')
    }


    aiTools.forEach(singleAiTool => {

        // item.text.forEach( (text, idx) => {
        //     document.getElementById("t"+(idx+1).toString()).innerHTML = text
        //   })
        console.log(singleAiTool);
        const singleAiToolDiv = document.createElement('div');
        singleAiToolDiv.classList.add('col');

        singleAiTool.features.forEach(features => {
            console.log(features);
            //     const orderList = document.createElement('ol')
            //     // const abc = <orderList><li>features</li>
            //     //     <li>features</li>
            //     //     <li>features</li></>

            //     orderList.innerHTML += `<li >${singleAiTool.features}</li>`

            //     // document.getElementById('feature-list').innerHTML = features
            //     // const orderList = document.createElement('ol')
            //     // orderList.innerHTML += `<li >${singleAiTool.features}</li> `
            //     // singleAiToolDiv.appendChild(orderList)
        });


        singleAiToolDiv.innerHTML = `
        <div class="card h-100 p-4">
            <img style="height: 200px;" src="${singleAiTool.image}" class="card-img-top rounded" alt="...">
            <div class="card-body">
                <h5 class="card-title">Features</h5>
                <ol>
                    <li>${singleAiTool.features.join("<li>")}</li>
                </ol>
                
                <hr class="border border-1">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <h5 class="card-title">${singleAiTool.name}</h5>
                        <p><i class="far fa-calendar-alt "></i> ${singleAiTool.published_in}</p>
                    </div>
                    <div onClick="getDetailsData('${singleAiTool.id}')" class="rounded-5 px-3 py-2 bg-danger-subtle" data-bs-toggle="modal" data-bs-target="#idDetailModal">
                        <i class="fas fa-arrow-right"></i>
                    </div>
                </div>
            </div>
        </div>
        `;


        aiContainer.appendChild(singleAiToolDiv)

    });


    // }

    // stop spinner
    toggleSpinner(false);
}


const getDetailsData = (id) => {
    //   console.log(id);
    const URL = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    fetch(URL)
        .then((res) => res.json())
        .then((data) => showSingleData(data.data));
};

const showSingleData = (singleData) => {
    // const container = document.getElementById("modal-info");
    console.log(singleData);
    const singleDataDetails = document.getElementById('single-data-details');
    console.log(singleData.pricing[0]);
    singleDataDetails.innerHTML = `
    <h5>${singleData ? singleData.description : 'No Storage Information '}</h5>
    <p>${singleData.pricing ? singleData.pricing[0].price : 'No Storage Information '}</p>
    <p>${singleData.pricing ? singleData.pricing[0].plan : 'No Storage Information '}</p>
    `

};

// <p>Release Date: ${phone.releaseDate ? phone.releaseDate : 'No Release Date Found'}</p>



















// spinner function
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