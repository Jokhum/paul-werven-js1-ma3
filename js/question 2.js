const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const resultsContainer = document.querySelector(".results");

async function getGames() {

    const response = await fetch(url);

    const results = await response.json();

    const facts = results.results;

    resultsContainer.innerHTML = "";

    for(let i = 0; i < facts.length; i++) {

        if (i === 8) {
            break;
        }

        resultsContainer.innerHTML += `<div class="result"><ul>${facts[i].name} 
                                       <li>Rating: ${facts[i].rating}</li>
                                       <li>Number of tags: ${facts[i].tags.length}</li></ul></div>`;
    }
}

getGames();