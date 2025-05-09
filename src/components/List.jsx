import React from 'react'

const List = ({arr, removeCallback}) => {
    return (
        <ul className="list-group">
            {arr.map((art, i) => {
                return (
                    <li className="list-item" key={i}>
                        <i className="fa-solid fa-trash" onClick={() => removeCallback(i)}></i>
                        {art}
                    </li>
                )
            })}
        </ul>
    )
}

export default List
