import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';

const dBProductos = [
    {id:1,
    descripcion: "Acuarela escolar de 12 colores con un pincel de regalo",
    modelo: "Stick",
    marca: "Filgo",
    precio: 60,
    img: "./multimedia/acuarela_filgo.jpg",
    categoria: "Escolar",
    stock: 10,
    cantidad: 1
    },
    {id:2,
    descripcion: "Adhesivo vinilico 50gr",
    modelo: "Trick",
    marca: "Sta",
    precio: 20,
    img: "./multimedia/adhesivo_vinilico_sta.jpg",
    categoria: "Escolar",
    stock: 10,
    cantidad: 1
    },
    {id:3,
    descripcion: "Boligrafo con cuerpo triangular punta 1mm",
    modelo: "Trilix",
    marca: "Faber Castell",
    precio: 42,
    img: "./multimedia/boligrafo_faber_trilux.jpg",
    categoria: "Escolar",
    stock: 10,
    cantidad: 1
    },
    {id:4,
    descripcion: "Lapiz corrector punta metal 7mm",
    modelo: "Plash",
    marca: "Filgo",
    precio: 30,
    img: "./multimedia/corrector_filgo.jpg",
    categoria: "Escolar",
    stock: 10,
    cantidad: 1
    },
    {id:5,
    descripcion: "Crayones de seda x 12 corto",
    modelo: "plain", 
    marca: "Faber Castell",
    precio:70,
    img: "./multimedia/crayones_faber.png",
    categoria: "Escolar",
    stock: 10,
    cantidad: 1
    },
    {id:6,
    descripcion: "Marcador escolar x 10",
    modelo: "Mito",
    marca: "Ezco",
    precio:130,
    img:"./multimedia/marcador_escolar_ezco.jpg",
    categoria:"Escolar",
    stock: 10,
    cantidad: 1
    },
    {id:7,
    descripcion: "Regla plastica flexible de 15cm",
    modelo: "Flex",
    marca: "Maped",
    precio:45,
    img:"./multimedia/regla_maped15.jpg",
    categoria:"Escolar",
    stock: 10,
    cantidad: 1
    },
    {id:8,
    descripcion: "Goma Ultra Mini",
    modelo:"Technic",
    marca: "Maped",
    precio:90,
    img:"./multimedia/goma_maped.jpg",
    categoria:"Escolar",
    stock: 10,
    cantidad: 1
    },
    {id:9,
    descripcion: "Lapiz grafito graduacion",
    modelo: "GoldFaber",
    marca: "Faber Castell",
    precio: 40,
    img: "./multimedia/lapiz_faber.png",
    categoria: "Escolar",
    stock: 10,
    cantidad: 1
    },
    {id:10,
    descripcion: "Resma A4 75gr 500hojas",
    modelo: "Autor",
    marca: "Ledesma",
    precio: 500,
    img: "./multimedia/resma_autor.png",
    categoria: "Comercial",
    stock: 10,
    cantidad: 1
    }
]

function getItem(idArticle) {
    let err = false;

    return new Promise ((resolve,reject) =>{
            setTimeout(()=>{
                const articleFound = dBProductos.find(e => {
                    return e.id === idArticle
                })
                resolve(articleFound)
            },2000
        );
        if(err){
            reject( new Error (`Error en la promesa`))
        }
    });
}    

export default function ItemDetailContainer ({title, idArticle}) {
   
    const [item, setItem] = useState(null);
   
    useEffect (()=> {
        const requestDatos = getItem(idArticle);
     
        requestDatos
            .then((itemsPromise)=>{
            setItem(itemsPromise);
            })
            .catch((err)=>{
                console.error({err});
            })
            .finally(()=>{
                console.log("Promesa terminada");
            });
        
    })

  return (
    <div>
        <h2 className='text-center mt-2'>{title}</h2>
        <seccion className="container">
            <ItemDetail item={item}/>
        </seccion>
    </div>
  )
};