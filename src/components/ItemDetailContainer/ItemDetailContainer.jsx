import React, { useEffect, useState } from 'react'
import { getItem } from '../../db/db';
import ItemDetail from './ItemDetail';


const ItemDetailContainer =({title})=> {
   
    const [item, setItem] = useState();
   
        useEffect(()=>{
          getItem()
          .then ((itemPromise)=>{
            setItem(itemPromise);
          }).catch ((errorMsg)=>{
            console.log(errorMsg);
          }).finally(()=>{
            console.log("item");
          })
        },[])
        
        console.log("sjfdhfgsjkahgajkh")

  return (
    <div>
        <h2 className='text-center mt-2'>{title}</h2>
        <seccion className="container">
            <ItemDetail item={item}/>
        </seccion>
    </div>
  )
};
export default ItemDetailContainer;