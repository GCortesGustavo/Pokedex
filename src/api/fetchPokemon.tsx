// http://pokeapi.co/api/v2/pokemon/bulbasur
import {formatName} from "../utils/utils";

export async function fetchPokemon(name:string) {
    const response = await fetch(`http://pokeapi.co/api/v2/pokemon/${formatName(name)}`);

    if(!response.ok) {
        throw new Error(`Error fetching ${name}`)
    }
    const result = await response.json();
    const pokemon = {
        name: result.name,
        id: result.id,
        imgSrc: result.sprites.front_default,
        hp: result.stats[0].base_stat,
        attack: result.stats[1].base_stat,
        defense: result.stats[2].base_stat,
    }
    return pokemon
}
