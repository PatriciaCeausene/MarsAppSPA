import {useEffect, useState} from "react";

export function MyButton() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const parsedCount = Number(localStorage.getItem("count") || 0)
        setCount(parsedCount)
    }, [])

    function handleClick() {
        setCount(count + 1);
        localStorage.setItem("count", String(count + 1));
    }

    return (
        <button onClick={handleClick}>
            You pressed me {count} times
        </button>
    );
}