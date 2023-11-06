import { useEffect, useState } from "react";
import styles from "../Styles/CardDisplay.css";

export default function CardDisplay(){
    const [cardList, setCardList] = useState([]);

    // 
    const POKEMON_NAMES = [
        "bulbasaur", "charmander", "squirtle", "caterpie", "butterfree",
        "pidgey", "pikachu", "jigglypuff", "diglett", "poliwag", 
        "machop", "haunter", "ditto", "eevee", "snorlax",
    ];

    // 
    const fetchCards = async () => {
        let newCardList = [];

        await POKEMON_NAMES.forEach(async (element) => {
            let fetched = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`, { method: "GET" });
            // 
            let jsonData = await fetched.json();
            // 
            newCardList.push(jsonData);
        });
        // 

        // setCardList([{name: jsonData.name}]);
        setCardList(newCardList);
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
            <div className="card">{element.name}</div>
        )
    });

    console.log("Pokemon: ", pokemonCards);
    console.log("Cardlist: ", cardList);

    return (
        <div className="cardDisplay" data-testid ="cardDisplay">
            {pokemonCards}
        </div>
    )
};

    // 
    // const [cardList, setCardList] = useState([]);



    // // 
    // const updateCardList = async () => {
    //     // 
    //     const newCardList = await fetchCardList();
    //     console.log("New Card List: ", newCardList);
    //     // 
    //     setCardList(newCardList);
    // }

    // // 
    // const fetchCardList = () => {
    //     // 
    //     let arr = [];
    //     // 
    //     return new Promise((resolve) => 
    //     {
    //         // 
    //         POKEMON_NAMES.forEach(async (name, index, array) => {
    //             // 
    //             let cardData = await fetchCardData(name);
    //             // 
    //             arr.push({name:cardData.name, img:cardData.sprites.front_default});
    //             // arr.push({name:cardData.name, img:cardData.sprites.front_default});
    //             // 
    //             if(index === array.length - 1) resolve(arr);
    //         })
    //     });
    // }

    // // 
    // const fetchCardData = async (name) => {
    //     // 
    //     let fetched = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, { method: "GET" });
    //     // 
    //     return await fetched.json(); 
    // }

    // useEffect(() => {
    //     console.log("Display Images");
    //     updateCardList();
    // }, []);

    // let imageCards = [];
    // cardList.forEach((card) => {
    //     imageCards.push( 
    //         <div className={styles.CardDisplay}>
    //             <img src={card.img} alt="" />
    //             <p>{card.name}</p>
    //         </div>
    //     );
    // })
