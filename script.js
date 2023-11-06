document.addEventListener('DOMContentLoaded', function() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
    .then(response => response.json())
    .then(data => {
        const pokemonContainer = document.getElementById('pokemon-list');
        data.results.forEach(pokemon => {
            const pokemonName = pokemon.name;
            const cardHtml = `
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs font-weight-bold text-primary mb-1" style="text-align: center;">${pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</div>
                                    <button type="button" class="btn btn-primary">Detail</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            pokemonContainer.innerHTML += cardHtml;
        });
    })
    .catch(error => {
        console.error('Error fetching data: ', error);
    });
});
