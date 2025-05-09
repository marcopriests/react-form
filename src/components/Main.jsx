import React from 'react'
import { useState } from 'react'

const articoli = ['Articolo 1', 'Articolo 2', 'Articolo 3', 'Articolo 4', 'Articolo 5', 'Articolo 6',]

const Main = () => {
    const [articolo, setArticolo] = useState('')
    const [articoliIniziali, setArticoliIniziali] = useState(articoli)

    const handleSubmit = (e) => {
        e.preventDefault()
        setArticoliIniziali([...articoliIniziali, articolo])
        setArticolo('')
    }

    return (
        <div>
            <div className="container">
                <h1 className="title">Lista Articoli</h1>
                <ul className="list-group">
                    {articoliIniziali.map((art, i) => {
                        return <li className="list-item" key={i}>{art}</li>
                    })}
                </ul>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder='Aggiungi articolo'
                        value={articolo}
                        onChange={e => { setArticolo(e.target.value) }} />

                    <button className="btn">Aggiungi</button>
                </form>
            </div>
        </div>
    )
}

export default Main
