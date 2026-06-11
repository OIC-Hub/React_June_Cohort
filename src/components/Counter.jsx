import {useState} from "react"

function Counter(){
    const initialValue = 0;
    const[value, setValue] = useState(initialValue);

    return(
        <>
        <button onClick={() => setValue(value + 1)} >Click</button>
        <p>{value}</p>
        </>
    )
}

export default Counter;