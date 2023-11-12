const pubsub = (() => {
    // 
    const events = [{name:"", subs:[]}]
    // 
    const publish = (eventName) => {
        //
        console.log(`Calling event:`, eventName);
        // 
        let event = events.find((element) => element.name === eventName)
        // 
        if(event)
        {
            event.subs.map((element) => 
            {
                console.log("Callback:", element);
                element()
            });
        }
    }
    // 
    const subscribe = (eventName, callback) => {
        // 
        console.log(`Subscribing to event:`, eventName);
        // 
        let event = events.find((element) => element.name === eventName)
        // 
        if(event)
        {
            event.subs.push(callback);
        }
        // 
        events.push({
            name: eventName,
            subs: [callback]
        })
    }
    // 
    const unsubscribe = (eventName) => {
        console.log("Unsubscribing to event:", eventName);
        let event = events.find((element) => element.name === eventName)
        let index = events.indexOf(event);
        events.splice(index, 1);
    }

    return { publish: publish, subscribe: subscribe, unsubscribe: unsubscribe }
})();

export default pubsub;