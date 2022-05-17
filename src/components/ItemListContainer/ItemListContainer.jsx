import React, { useState, useEffect} from 'react'
import ItemList from './ItemList'


const dBArticles = [
  {
    "id":1,
    "name":"Adhesivo",
    "description":"vinilico 50gr",
    "brand":"Sta",
    "price": "10",
    "category":"escolar",
    "stock":"6"
  },
  {
    "id":2,
    "name":"Lapiz",
    "description":"Grafito",
    "brand":"Maped",
    "price": "10",
    "category":"escolar",
    "stock":"10"
  },
  {
    "id":3,
    "name":"resma",
    "description":"A4 70gr",
    "brand":"Autor",
    "price": "10",
    "category":"comercial",
    "stock":"5"
  },
  {
    "id":4,
    "name":"Corrector",
    "description":"Punta metal 7mm",
    "brand":"Filgo",
    "price": "10",
    "category":"escolar",
    "stock":"20"
  },
  {
    "id":5,
    "name":"Regla",
    "description":"15cm acrilico",
    "brand":"Maped",
    "price": "10",
    "category":"escolar",
    "stock":"15"
  }]    

function obtenerBD(){
return new Promise( (resolve, reject) => {
  setTimeout(
    ()=> { resolve(dBArticles)}
    ,3000)
    }
)
}

export function ItemListContainer(props) {

  const [items, setItems] = useState([]);

  useEffect(()=>{
      let requestDatos = obtenerBD();
      
      requestDatos.then ((itemsPromise)=>{
        setItems(itemsPromise);
      }).catch ((errorMsg)=>{
        console.log(errorMsg);
      }).finally(()=>{
        console.log("Promesa terminada");
      })
   },[])

  return (
    <div className='mt-4 text-center'>
        <h1>{props.title}</h1>
        <div className='container'>
          <ItemList items={items}/>
        </div>
    </div>
  )
};
export default ItemListContainer;