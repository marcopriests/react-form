import React from 'react'

const articoli = ['Articolo 1', 'Articolo 2', 'Articolo 3', 'Articolo 4', 'Articolo 5', 'Articolo 6',]

const Main = () => {
    return (
        <div>
            <div className="container">
                <h1 className="title">Lista Articoli</h1>
                <ul className="list-group">
                    {articoli.map((art) => {
                        return <li className="list-item">{art}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Main
