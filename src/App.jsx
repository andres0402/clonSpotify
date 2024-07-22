import { useEffect, useState } from 'react'
import './App.css'
import { useFact } from './hooks/useFact'
import { useSearch } from './hooks/useSearch'
import { useAdd } from './hooks/useAdd'
import { ImageCard } from './components/ImageCard'
import { Grid } from './components/Grid'
import React from 'react';




function App() {

  const [originalUsers, setOriginalUsers] = useState(["andres jose", "juan david", "pepe alfonso", "pedro pablo"])
  const [usersDefault, setUsersDefault] = useState(originalUsers)
  const {fact, updateFact } = useFact()
  const {handleUpdateSearch} = useSearch(setUsersDefault, originalUsers)
  const {handleInputUser, handleAddUser} = useAdd(originalUsers, setOriginalUsers)
  
  useEffect(() => {
    setUsersDefault(originalUsers)
  }, [originalUsers])
 
  return (
    <main>
      <section className='flex-col'>
        <h1 className='my-7'>App gatos</h1>
          {fact && <p className='my-7'>Random Fact: {fact}</p>}
        <button onClick={updateFact}>Change fact</button>
      </section>
        
     
      <ul >
        {usersDefault.length > 0 ? (usersDefault.map((user, index) => (
          <li key={`${user}-${index}`}>{user}</li>
        )))
        :
        <p>No se encontraron usuarios</p>
        }
      </ul>
      

      <div>
      <input type="search" onChange={handleUpdateSearch} placeholder='Buscar usuario'/>
      <input onChange={handleInputUser} placeholder='Ingrese el nombre del usuario'/>
      <button onClick={() => handleAddUser()}>Agregar usuario</button>
      </div>
        

        <Grid/>
    </main>



  )
}

export default App
