import { useState } from "react";

export function useAdd (originalUsers, setOriginalUsers){
const [newUser, setNewUser] = useState("")
  


  const handleInputUser = (event) =>{
    setNewUser(event.target.value)
  }

  const handleAddUser = () => {
    setOriginalUsers([...originalUsers, newUser])
}

return {handleInputUser, handleAddUser}

}