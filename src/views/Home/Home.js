import React from 'react'
import ItemDetailContainer from '../../components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'

const Home = () => {
  return (
    <div >
        <ItemDetailContainer 
        title={"Producto seleccionado"}/>
        <ItemListContainer
        title="Bienvenidos a mi ECommerce"/>
        {/* <ItemDetailContainer
        title="Bienvenidos a mi ECommerce"
        idArticle={3}/> */}
    </div>
  );
};

export default Home;