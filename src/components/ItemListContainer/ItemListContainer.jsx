import React, {useState, useEffect} from 'react'
import ItemList from './ItemList'
import {getData}from '../../db/db.js'
import { useParams } from 'react-router-dom';



const ItemListContainer = (props)=>{
    const [items, setItems] = useState([]);

    const param = useParams();
    console.log(param)

    useEffect(()=>{
        getData()
        .then ((itemsPromise)=>{
          setItems(itemsPromise);
        }).catch ((errorMsg)=>{
          console.log(errorMsg);
        }).finally(()=>{
          console.log("promesa terminada");
        })
    },[])

  return (
    
    <div className='mt-4'>
        <h1>{props.title}</h1>
        <ItemList items={items}/>
    </div>
  )
};
export default ItemListContainer;