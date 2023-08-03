// import Header from "./Header/Header"
// import { useState} from "react"
// import Footer from "./Footer/Footer"
// import Main from "./Main/Main";



// const Pokemons = () => {
//     const [query, setQuery] = useState("")
    


//     return(
//         <>
//             <Header query={query} setQuery={setQuery}/>
//             <Main />
//             <Footer/>
//         </>
//     )
// }

// export default Pokemons

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPokemons } from "../api/fetchPokemons";
import Footer from "../pages/Footer/Footer";
import Header from "../pages/Header/Header";
import LoadingScreen from "./LoadingScreen";
import { Pokemon } from "../types/types.d";
import styles from "./Pokemons.module.css";
import { waitFor } from "../utils/utils";


const Pokemons = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [query, setQuery] = useState("");
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchAllPokemons = async () => {
      setIsLoading(true);
      await waitFor(1000);
      const allPokemons = await fetchPokemons();
      setPokemons(allPokemons);
      setIsLoading(false)
    };
    fetchAllPokemons();
  }, []);

  if(isLoading || !pokemons) return <LoadingScreen />


  const filteredPokemons = pokemons?.slice(0, 151).filter((pokemon) => {return pokemon.name.toLowerCase().match(query.toLowerCase())})

  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <main>
        <nav className={styles.nav}>
          {filteredPokemons?.slice(0, 151).map((pokemon) => (
            <Link
              key={pokemon.id}
              className={styles.listItem}
              to={`/pokemons/${pokemon.name.toLowerCase()}`}
            >
              <img
                className={styles.listItemIcon}
                src={pokemon.imgSrc}
                alt={pokemon.name}
              />
              <div className={styles.listItemText}>
                <span>{pokemon.name}</span>
                <span>{pokemon.id}</span>
              </div>
            </Link>
          ))}
        </nav>
      </main>
      <Footer />
    </>
  );
};

export default Pokemons;