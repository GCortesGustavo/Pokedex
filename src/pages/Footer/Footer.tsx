import { Link } from "react-router-dom";
import ImagePikachu from "../../assets/assets/pikachu.png";
import Pokeball from "../../assets/assets/pokeball.png";
import Pointer from "../../assets/assets/pointer.png";
import styles from "./Footer.module.css";


const Footer = () => {
    return (
        <>
        <footer className={styles.footer}>
            <Link to="/pokemons" className={styles.footerLink}>
                <img src={ImagePikachu} alt="Pokeball" className={styles.footerIcon}/>
                Pokemons
            </Link>
            <Link to="/items" className={styles.footerLink}>
                <img src={Pokeball} alt="Items" className={styles.footerIcon}/>
                Items
            </Link>
            <Link to="/location" className={styles.footerLink}>
                <img src={Pointer} alt="Pointer" className={styles.footerIcon}/>
                Pointer
            </Link>
        </footer>
        </>
    )
}


export default Footer;