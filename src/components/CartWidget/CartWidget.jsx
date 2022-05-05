import React from 'react';
import './CartWidget.css'

function CartWidget(){

    return <div className="containerCart my-2 d-flex align-items-baseline">
        <button type="button" className="btn btn-dark iconModal fas fa-shopping-cart"><i id="iconModal"></i></button>
        <div><small>0</small></div>
    </div>;
};

export default CartWidget;
