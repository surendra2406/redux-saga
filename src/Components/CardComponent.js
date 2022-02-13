
import React from "react";

const CardComponent=(props)=>{
    return(
        <div>
            <div style={{textAlign:"left", backgroundColor:"lightcoral"}}>
            <h2>user id -{props.user.id}</h2>
            <h2>user name -{props.user.name}</h2>
             <h2> user Company name- {props.user.company.name}</h2>
             <h3>card Components</h3>


            </div>
            
        </div>

    )
}

export default CardComponent;