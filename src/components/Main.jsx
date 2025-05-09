import React from 'react'
import { useState } from 'react'

const articoli = ['Articolo 1', 'Articolo 2', 'Articolo 3', 'Articolo 4', 'Articolo 5', 'Articolo 6',]

const Main = () => {
    const {articolo, setArticolo} = useState('')

    return (
        <div>
            <div className="container">
                <h1 className="title">Lista Articoli</h1>
                <ul className="list-group">
                    {articoli.map((art) => {
                        return <li className="list-item">{art}</li>
                    })}
                </ul>

                <form action="">
                    <input type="text" placeholder='Aggiungi articolo' value={articolo} onChange={e => {setArticolo(e.target.value)}} />
                    <button className="btn">Aggiungi</button>
                </form>
            </div>
        </div>
    )
}

export default Main
