import { useState } from "react";
import { useEffect } from "react";

const URL_FACT = "https://catfact.ninja/fact"

export function useFact(){
    const [fact, setFact] = useState("")

    const updateFact = () =>{
        fetch(URL_FACT)
        .then((res) => res.json())
        .then ((result) => {
            setFact(result.fact)})
        }

    useEffect(() => {
        updateFact()
    }, [])

    

        return {fact, updateFact}
    }

    
