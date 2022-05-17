import React from 'react'

function Item({item}) {
  return (
    <div className='m-2'>
        <h2>{item.name}</h2>
        <h4>{item.description}</h4>
        <p>{item.brand}</p>
        <p>{item.price}</p>
        <div className=''></div>
        <hr />
    </div>
  )
}

export default Item