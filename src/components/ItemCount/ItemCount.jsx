import React, { useState } from 'react'

export default function ItemCount({initial, stock}){
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
    <div className='container pt-4 w-25 mt-5 border'>
        <div className='container d-flex justify-content-around'>
            <button className='btn btn-danger' onClick={decrement}>Quitar</button>
            <p className='mx-2'><b>{count}</b></p>
            <button className='btn btn-success' onClick={increment}>Agregar</button>
        </div><br/>
        <div className='pb-4 text-center'>
            <button className='btn btn-dark' onClick= {onAdd}>Revisar</button>
        </div>
    </div>
  )
}
