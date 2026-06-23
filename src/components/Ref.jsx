import { useRef, useState } from "react";

function Ref() {
    const focusValue = useRef(null);
    const [password, setPassword] = useState("");

    function handleClick() {
        // 1. Update the state instead of the DOM directly
        setPassword("Hello world");
        
        // 2. Keep the ref ONLY for focusing the element
        if (focusValue.current) {
            focusValue.current.focus();
        }
    }

    return (
        <>
            <button onClick={handleClick}>Reveal Text</button>
            <input 
                type="text" 
                ref={focusValue} 
                onChange={e => setPassword(e.target.value)}
                value={password}
            />
        </>
    );
}

export default Ref;
