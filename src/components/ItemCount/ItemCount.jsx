import React, { useState } from 'react'

const ItemCount = ({initial, stock}) => {
    const [count, setCount] = useState(initial)

    function increment (){
        if (count < stock){
            setCount(count+1);
        } else if (count === stock){
            alert (`Alcanzaste el stock disponible`)
        }
    }
    function decrement (){
        if (count > 1){
            setCount(count-1);
        }
    }
    function onAdd(){
        alert (`agregaste ${count} productos al carrito`)
    }

  return (
    <div className='container w-100 mt-5'>
        <div className='container d-flex justify-content-between align-items-baseline'>
            <button className='btn w-25 btn-danger' onClick={decrement}>-</button>
            <p className='mx-2'><b>{count}</b></p>
            <button className='btn btn-success' onClick={increment}>+</button>
        </div><br/>
        {/* <div className='pb-4 text-center'>
            <button className='btn btn-dark' onClick= {onAdd}>Revisar</button>
        </div> */}
    </div>
  )
}
export default ItemCount;
