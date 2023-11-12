import { useEffect, useState } from "react";
import pubsub from "../pubsub/pubsub";

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
        <div className="counterBox" data-testid="counterBox">{count}</div>
    );
};

export default Counter;