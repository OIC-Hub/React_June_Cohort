import {useState, useEffect} from "react";

function Greetings(){

    const [Name, setName] = useState("");
    const [Greeting, setGreeting] = useState("");

    useEffect(() => {
        if(Name !== ""){
            setGreeting("Hello " + Name)
            localStorage.setItem("Names", Name)

        }else{
            setGreeting("");
        }

    }, [Name])
        const GetName = localStorage.getItem("Names")

    return(
        <>
        <input 
        style={{border: "1px solid black"}}
        type="text"
        onChange={e => setName(e.target.value)}
        value={Name}
        />

        <p style={{fontSize: "30px", fontWeight: "bold"}}>{GetName}</p>
        </>
    )

}

export default Greetings;