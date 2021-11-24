// Code Keypad Component Here
import React from "react";

function Keypad(props) {

    return(
        <div className="keypad">
            <form onChange={()=>console.log("Entering password...")}>
                <input type="password" name="password" placeholder="Simpson, eh?" />
            </form>
        </div>
    );
}

export default Keypad;