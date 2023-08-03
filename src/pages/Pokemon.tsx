import {useNavigate, useParams} from "react-router-dom"
import PokeballImg from "../assets/assets/pokeball.png"
import Footer from "./Footer/Footer";
import styles from "./Pokemon.module.css";
import { PokemonDetails } from "../types/types";
import {useEffect, useState} from "react"
import { fetchPokemon } from "../api/fetchPokemon";
import LoadingScreen from "../pages/LoadingScreen";
import { waitFor } from "../utils/utils";


const Pokemon = () => {
    const [pokemon, setPokemon] = useState<PokemonDetails>()
    const { name } = useParams()
    const navigate = useNavigate()  
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        async function getPokemon() {
        setIsLoading(true);
        waitFor(1000);
            const fetchedPokemon = await fetchPokemon(name as string);
            setPokemon(fetchedPokemon)
        setIsLoading(false);
        }
        getPokemon();
    },[name])


    if (isLoading || !pokemon) {
    return <LoadingScreen />;
    }

    return (
    <>        
        <button className={styles.pokeballButton} onClick={() => navigate(-1)}>
        <img  className={styles.pokeballImg} src={PokeballImg} alt="Pokeball"/> Go Back
        </button>     
        <div className={styles.pokemon}>
            <main className={styles.pokemonInfo}>
                <div className={styles.pokemonTitle}>{pokemon?.name?.toUpperCase()}</div>
                <div>Nr. {pokemon?.id}</div>
                <div>
                    <img 
                    src={pokemon?.imgSrc} 
                    className={styles.pokemonInfoImg} 
                    alt={pokemon?.name}/>
                </div>
                <div>Hp: {pokemon?.hp}</div>
                <div>Attack:{pokemon?.attack} </div>
                <div>Defense: {pokemon?.defense}</div>
            </main>
        </div>
        <Footer />  
    </>
    )
    
}


export default Pokemon;


