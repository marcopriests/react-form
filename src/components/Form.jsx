import React from 'react'

const Form = ({submitCallback, art, setArt}) => {
    return (
        <form onSubmit={submitCallback}>
            <input
                type="text"
                placeholder='Aggiungi articolo'
                value={art}
                onChange={e => { setArt(e.target.value) }} />

            <button className="btn">Aggiungi</button>
        </form>
    )
}

export default Form
