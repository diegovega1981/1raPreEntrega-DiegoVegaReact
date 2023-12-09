import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = ({greeting, myFunction}) => {
    return (
        <div className="formato" onClick={myFunction}>{greeting}</div>
    )
}

export default ItemListContainer
