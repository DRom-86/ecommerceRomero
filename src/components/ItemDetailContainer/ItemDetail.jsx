import React from 'react'
import ItemCount from '../ItemCount/ItemCount'


export default function ItemDetail({item}) {

  if (item) {
    return (
        <div>
            <div className='container col-lg-3 border'>
                <img src="#" alt={item.descripcion} />
                <div className='cardsItem '>
                    <div className="cardsImg">       
                    </div>
                    <div className="cardsBody card-body text-center">
                      <p className="cardsParagraph text-reset">{item.descripcion}</p>
                      <p className="cardsParagraph text-reset">Modelo: {item.modelo}</p>
                      <p className="cardsParagraph text-reset">Valor: ${item.precio}</p>
                      <ItemCount 
                      initial={1}
                      stock={item.stock}/><a id="botonAgregarAlCarrito" className="btnAgregarAlCarrito btn btn-success w-100"> Agregar al carrito <i className="fas fa-shopping-cart"></i></a>
                      <p className="cardsParagraph text-center"> <small>Stock: {item.stock} un</small> </p>
                    </div>
                     
                </div>
            </div>
        </div>
    )
  } else{
      return (<h3>No se encontró el destino</h3>)

  }
}
