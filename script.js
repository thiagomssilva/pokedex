// Function to fetch and display a single Pokémon
async function fetchPokemon() {
  try {
    const randomId = Math.floor(Math.random() * 898) + 1; // Random Pokémon ID from 1 to 898
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomId}`
    );
    const pokemonData = await response.json();
    const pokemonContainer = document.getElementById("pokemon-container");

    // Clear previous Pokémon data
    pokemonContainer.innerHTML = "";

    const pokemonDiv = document.createElement("div");
    pokemonDiv.className = "pokemon";

    const pokemonImg = document.createElement("img");
    pokemonImg.src = pokemonData.sprites.front_default;

    const pokemonName = document.createElement("p");
    pokemonName.textContent = pokemonData.name;

    pokemonDiv.appendChild(pokemonImg);
    pokemonDiv.appendChild(pokemonName);

    pokemonContainer.appendChild(pokemonDiv);
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
  }
}

// Event listener for button click
document
  .getElementById("load-pokemon-btn")
  .addEventListener("click", fetchPokemon);
