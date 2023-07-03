import {createContext, useContext, useState} from "react";

const Context = createContext(0);
export function TreeCounter() {
    const [counter, setCounter] = useState(0);
    return (
        <Context.Provider value={counter}>
            <Component2 onClick = {() => {
                setCounter(counter + 1);
            }}/>
            <Component3 />
        </Context.Provider>
    );
}

function Component2({onClick}: { onClick: any }) {
    return (
        <button onClick={onClick}>
            Click here for counter 2.
        </button>
    );
}

function Component3() {
    return (
        <>
            <p style={{fontSize:20}}>Complex components tree - another type of  counter</p>
            <Component4 />
        </>
    );
}

function Component4() {
    const counter = useContext(Context);
    return (
        <>
            <p style={{fontSize:20}}>Counter: {counter} </p>
        </>
    );
}