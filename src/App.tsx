import React, { useState } from 'react'
import './App.css'

type ItemId = `${string}-${string}-${string}-${string}-${string}`

interface Item {
  id: ItemId
  timestamp: number
  text: string
}

const INITIAL_ITEMS: Item[] = [
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: 'Videojuegos 🎮',
  },
  {
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      text: 'Libros 📚',
  }
  
]



function App() {
  
  const [items, setItems] = useState(INITIAL_ITEMS)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    
    const { elements } = event.currentTarget
  
    const input = elements.namedItem('item')
    const isInput = input instanceof HTMLInputElement
    if (!isInput || input == null) return
  
    const newItem: Item = {
      id: crypto.randomUUID(),
      text: input.value,
      timestamp: Date.now()
    }
  
    setItems((prevItems) => {
      return [...prevItems, newItem]
    })
    input.value = ''
  }

  // const handleClick = (id:ItemId) => setItems((prevItems) => {
  //   console.log(id)
  //   return prevItems.filter(prevItem => prevItem.id !== id)
  // })

  const createHandleClickButton = (id:ItemId) => () => setItems((prevItems) => {
       return prevItems.filter(prevItem => prevItem.id !== id)
     })
  return (
    <>
     <main>
      <aside>
        <h1>Prueba React</h1>
        <h2>Agregar y eliminar elementos de una lista</h2>
        <form onSubmit={handleSubmit} action="">
          <label htmlFor="">Elemento a introducir:
            <input name='item' type="text" placeholder='Ingresa Item' required/>
            <button type="submit">Agregar a la lista</button>
          </label>
        </form>
      </aside>

      <section>
        <h2>Lista de Elementos</h2>
        <ul>
        {
          items.map(item => {
            return(
              <li key={item.id} >
                {item.text}
                <button onClick={createHandleClickButton(item.id)} >Eliminar elemento</button>
              </li>
            )
          })
         }
        </ul>
      </section>

     </main>
    </>
  )
}

export default App
