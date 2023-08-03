import pokedex from "../assets/assets/pokedex.png";
import styles from "./LoadingScreen.module.css";


const LoadingScreen = () => {
    return(
        <>
        <div className={styles.loadingScreen}>
            <img className={styles.loadingScreenIcon} src={pokedex} alt="pokedex"/>
        </div>
        </>
    )
}

export default LoadingScreen