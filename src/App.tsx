import React, { useState } from 'react'
import './App.css'

interface Item {
  id: `${string}-${string}-${string}-${string}-${string}`
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

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()
  
  const { elements } = event.currentTarget
  const input = elements.namedItem('item')
  

}

function App() {
  const [items, setItems] = useState(INITIAL_ITEMS)

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
              return (
                <li key={item.id}>
                  {item.text}
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
