import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export const Params = () => {

// const users = [
//   { id: 1, name: 'Ada Lovelace',  role: 'Engineer' },
//   { id: 2, name: 'Alan Turing',   role: 'Mathematician' },
//   { id: 3, name: 'Grace Hopper',  role: 'Admiral & Developer' },
// ];

const [user, setUsers] = useState([]);

useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(r => r.json())
    .then(data => setUsers(data));
}, []);

    const {id} = useParams();
    const findUserByID = user.find(e => e.id === Number(id));

    if(!findUserByID) return <h1>NoT Found</h1>
    

    return(
        <>
        <h1>User with ID {id}</h1>
        <p>{findUserByID.name} - {findUserByID.email}</p>
        </>
    )
}