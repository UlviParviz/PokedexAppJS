const searchInp = document.querySelector("#poke-input");
const pokeContainer = document.querySelector(".poke-container");
const searchBtn = document.querySelector('.search-btn')
const pokeCount = 151;

const colors = {
    fire: "#FDDFDF",
    grass: "#DEFDE0",
    electric: "#FCF7DE",
    water: "#DEF3FD",
    ground: "#f4e7da",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    poison: "#d6b3ff",
    bug: "#f8d5a3",
    dragon: "#97b3e6",
    psychic: "#eaeda1",
    flying: "#F5F5F5",
    fighting: "#E6E0D4",
    normal: "#F5F5F5",
    ice: "#e0f5ff ",
};

searchBtn.addEventListener('click', (e)=>{
    e.preventDefault()
})

const initPokemon = async () => {
  for (let i = 1; i < pokeCount; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  let res = await fetch(url);
  let data = await res.json();
  createPokemonBox(data);
};

const createPokemonBox = async (poke) => {
  let name = poke.name[0].toUpperCase() + poke.name.slice(1);
  let id = poke.id.toString().padStart(3, "0");
  let weight = poke.weight;
  let type = poke.types[0].type.name;
  let color = colors[type];
  let pokeBox = document.createElement("div");
  pokeBox.classList.add("poke-box");
  pokeBox.innerHTML = ` <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png" alt="${name} img">
    <h4 class='poke-name'>${name}</h4>
    <p>#${id}</p>
    <p>Weight: ${weight} kg</p>
    <p>Type: ${type}</p>`;

    pokeBox.classList.add = 'poke-box'
    pokeBox.style.backgroundColor = `${color}`

    pokeContainer.append(pokeBox)
};


initPokemon();

searchInp.addEventListener('keyup', (e)=>{
    const search = searchInp.value.toLowerCase()
    const pokeNames = document.querySelectorAll('.poke-name')
    pokeNames.forEach((name)=>{
        name.parentElement.style.display = 'block'
        if(!name.innerHTML.toLocaleLowerCase().includes(search))
        {
            name.parentElement.style.display = 'none'
        }
    })
})
