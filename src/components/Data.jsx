// function Data(props){
//     return(
//         <>
//         <p>{props.name} - {props.role}</p>
//         </>
//     )
// }

// export default Data;


// function Data({name, role}){
//     return(
//         <>
//         <p>{name} - {role}</p>
//         </>
//     )
// }

// export default Data

function Data({children}){
    return(
        <div style={{width: "100px", height: "100px", backgroundColor: "skyblue"}}>
            {children}
        </div>
    )
}

export default Data
