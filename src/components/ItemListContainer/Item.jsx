import React from 'react'
import ItemCount from '../ItemCount/ItemCount';

function Item({item}) {
  return (
    <div className='m-2'>
        <h2>{item.name}</h2>
        <h4>{item.description}</h4>
        <p>{item.brand}</p>
        <p>{item.price}</p>
        <div className=''></div>
        <ItemCount 
          initial={1}
          stock={item.stock}
        />
        <hr />
    </div>
  )
}

export default Item