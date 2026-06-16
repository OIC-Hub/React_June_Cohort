import { useState, useEffect } from "react";


function Timer() {
    const [ife, setIfe] = useState("");

    useEffect(() => {
        const TimerID = setInterval(() => {
            setIfe("Hello")
        }, 300000)

        return () => {
            clearInterval(TimerID);
        };

    }, [])

    return (
        <>
            <h1>{ife}</h1>

        </>
    )

}

export default Timer;