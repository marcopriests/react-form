import React from 'react'
import { useState } from 'react'
import List from './List'
import Form from './Form'

const articoli = ['Articolo 1', 'Articolo 2', 'Articolo 3', 'Articolo 4', 'Articolo 5', 'Articolo 6',]

const Main = () => {
    const [articolo, setArticolo] = useState('')
    const [articoliIniziali, setArticoliIniziali] = useState(articoli)

    const handleSubmit = (e) => {
        e.preventDefault()
        setArticoliIniziali([...articoliIniziali, articolo])
        setArticolo('')
    }

    const handleRemove = (index) => {
        articoliIniziali.splice(index, 1)
        setArticoliIniziali([...articoliIniziali])
    }

    return (
        <div>
            <div className="container">
                <h1 className="title">Lista Articoli</h1>
                <List arr={articoliIniziali} removeCallback={handleRemove} />

                <Form art={articolo} setArt={setArticolo} submitCallback={handleSubmit} />
            </div>
        </div>
    )
}

export default Main
