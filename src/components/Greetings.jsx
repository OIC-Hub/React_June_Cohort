import {useState, useEffect} from "react";

function Greetings(){

    const [Name, setName] = useState("");
    const [Greeting, setGreeting] = useState("");

    useEffect(() => {
        if(Name !== ""){
            setGreeting("Hello " + Name)
        }else{
            setGreeting("");
        }
    }, [Name])

    return(
        <>
        <input 
        style={{border: "1px solid black"}}
        type="text"
        onChange={e => setName(e.target.value)}
        value={Name}
        />

        <p style={{fontSize: "30px", fontWeight: "bold"}}>{Greeting}</p>
        </>
    )

}

export default Greetings;