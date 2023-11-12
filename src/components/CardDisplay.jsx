import { useEffect, useState } from "react";
import styles from "../styles/CardDisplay.module.css";
import pubsub from "../pubsub/pubsub";
import { v4 as uuidv4 } from "uuid";

function CardDisplay(){
    // State props
    const [cardList, setCardList] = useState([]);
    const [isReady, setIsReady] = useState(false);

    // Consts
    const POKEMON_NAMES = [
        "bulbasaur", "charmander", "squirtle", "caterpie", "butterfree",
        "pidgey", "pikachu", "jigglypuff", "diglett", "poliwag", 
        "machop", "haunter", "ditto", "eevee", "snorlax",
    ];

    // Variables
    let cardDisplay = null;

    // cardDisplay
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
    const cardClicked = (card) => {
        // 
        console.log(card.parentElement);
        let parent = card.parentElement;
        let length = parent.children.length;
        // 
        if(!card.classList.contains("clicked"))
        {
            //
            pubsub.publish("incrementCounter")
            // 
            // Add clicked class to keep track if the card has been picked.
            card.classList.add("clicked");
            // Shuffle cardDisplay html child elements
            // We don't need to re-render anything or setCardlist.

            for (let i = 0; i < length; i++) {
                let index = Math.floor(Math.random() * 15);
                let child = parent.children[index];
                parent.appendChild(child);
            }
        }
        else if(card.classList.contains("clicked"))
        {
            // 
            pubsub.publish("resetCounter");
            // We want to create a new cardList by copying the current cardList.
            // Then use that new cardList and we call setCardList to rerender everything.
            // This will reset everything back to normal with the default display.
            for (let i = 0; i < length; i++) {
                let child = parent.children.item(i);
                child.classList.remove("clicked");
            }
        }
    };
    // 
    const createDisplay = () => {
        // 
        const pokemonCards = [];
        // 
        cardList.forEach(element => {
            let ranName = uuidv4();
            pokemonCards.push(
                <button className={styles.card} onClick={(e) => { cardClicked(e.currentTarget) }}>
                    <p className={styles.cardName}>{ranName}</p>
                    <img src={element.sprites.front_default} alt="Pokemon Image" className={styles.cardImage} />
                </button>
            )
        });
        //
        cardDisplay = (
            <div className={styles.cardDisplay} data-testid ="cardDisplay">
                {pokemonCards}
            </div> 
        );
        console.log(cardDisplay);
    }
    
    // 
    useEffect(() => {
        fetchCards();
    },[]);


    // Go ahead and create the card display and render it to the screen.
    createDisplay();
    return (
        <>
            {cardDisplay}
        </>
    )
};

export default CardDisplay;