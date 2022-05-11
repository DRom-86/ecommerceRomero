import React from 'react';
import Item from './Item';
import './itemListContainer.css';

function ItemList({items}) {

     return (
        <div className='mt-5'>
            <div>
                <h1>Articulos</h1>
                <h2 className="container">
                    {items.map( i => {
                        return <Item 
                        key={i.id}
                        item={i}/>
                        })
                    }
                </h2>                
            </div>
        </div>
    )
}

export default ItemList