import { useEffect, useState } from "react";
import pubsub from "../pubsub/pubsub";
import styles from "../styles/Counter.module.css";

function Counter(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Mounting");
        pubsub.subscribe("incrementCounter", incrementCounter);
        pubsub.subscribe("resetCounter", resetCounter);

        return function cleanup() {
            pubsub.unsubscribe("incrementCounter");
            pubsub.unsubscribe("resetCounter");
        }
    }, []);

    const incrementCounter = () => {
        console.log("Incrementing counter...");
        setCount((prevCount) => prevCount + 1);
    };

    const resetCounter = () => {
        console.log("Resetting counter...");
        setCount(0);
    }

    return(
        <div className={styles.counterBox}>
            <h2>MEMORY SCORE:</h2>
            <h2 className="counter" data-testid="counter">{count}</h2>
        </div>
    );
};

export default Counter;