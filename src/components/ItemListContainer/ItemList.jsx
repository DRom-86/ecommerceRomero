import React from 'react';
import Item from './Item';
import './itemListContainer.css';

const ItemList = ({items}) => {
     return (
        <div className='mt-5'>
            <h1>Articulos</h1>
            <div>
                {items.map( i => {
                    return <Item 
                    key={i.id}
                    item={i}/>
                    })
                }
            </div>
        </div>
    )
}

export default ItemList