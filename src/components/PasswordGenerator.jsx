import { useState } from "react";

function PasswordGenerator(){

    const[length, Setlength] =useState(8);
    const[numberAllowed, SetNumberAllowed] = useState(false);
    const[characterAllowed, SetCharacterAllowed] = useState(false);
    const[password, Setpassword] =useState("");

    const passwordGenerator = ()=>{
        
    }

    return (
        <>
            <h1 className="text-4xl text-center text-white">
                Password Generator 
            </h1> 
        </>
    )

    
}
export default PasswordGenerator;