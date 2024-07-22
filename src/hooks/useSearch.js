import { useState } from "react";
import { useEffect } from "react";


export function useSearch(setUsersDefault, originalUsers){

      
    const [search, setSearch] = useState("")


    

    const handleUpdateSearch = (event) =>{
        setSearch(event.target.value)
      }

   
    
      useEffect(() => {
        const filtered = originalUsers.filter(user => user.toLowerCase().includes(search.toLowerCase().trim()))
        setUsersDefault(!filtered.length ? [] : filtered)
      }, [search])  

      return {handleUpdateSearch}
}