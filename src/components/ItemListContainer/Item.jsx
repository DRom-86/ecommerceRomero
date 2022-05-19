import React from 'react'
import ItemCount from "../ItemCount/ItemCount"
import './itemListContainer.css';

const Item = ({item})=>{
  return(
      <div className='container m-2'>          
        <div className="articlesCards d-flex flex-wrap">
          <div className="col-sm-12 col-md-6 col-lg-4 cardsItem">
              <div className="cardImag">
                <img className=" " src={item.img} alt={item.description}></img>
              </div>
              <div className="cardsBody card-body"> 
                    <h4>{item.description}</h4>
                    <p className='cardsParagraph'>{item.brand}</p>
                    <p className='cardsParagraph'>Valor: ${item.price}</p>
                    <p className='small'>Stock disponible: {item.stock}</p>
                </div>
          </div>
        </div>   
      </div>
      )
  }

export default Item