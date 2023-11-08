import { useEffect, useState } from "react";
import styles from "../Styles/CardDisplay.module.css";

export default function CardDisplay(){
    const [cardList, setCardList] = useState([]);
    const [isReady, setIsReady] = useState(false);

    // 
    const POKEMON_NAMES = [
        "bulbasaur", "charmander", "squirtle", "caterpie", "butterfree",
        "pidgey", "pikachu", "jigglypuff", "diglett", "poliwag", 
        "machop", "haunter", "ditto", "eevee", "snorlax",
    ];

    // 
    const fetchCards = async () => {
        let newCardList = [];

        await POKEMON_NAMES.forEach(async (name) => {
            // let fetched = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            let fetched = await fetch("http://localhost:3000/pokemon/1");
            // 
            let jsonData = await fetched.json();
            // 
            newCardList.push(jsonData);
        });
        
        if(!isReady){
            setCardList(newCardList);
            setIsReady(true);
        }
    }
    // 
    useEffect(() => {
        fetchCards();
    },[]);

    // 
    const pokemonCards = [];
    // 
    cardList.forEach(element => {
        pokemonCards.push(
            <button className={styles.card}>
                <p className={styles.cardName}>{element.name}</p>
                <img src={element.sprites.front_default} alt="Pokemon Image" className={styles.cardImage} />
            </button>
        )
    });

    return (
        <div className={styles.cardDisplay} data-testid ="cardDisplay">
            {pokemonCards}
        </div>
    )
};