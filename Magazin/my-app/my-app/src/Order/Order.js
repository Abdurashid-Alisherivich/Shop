import './Order.scss'
import React, { useState } from 'react';
import Products from "./Data.json"
import Menu from '../frontend/menu';

function Order(){

    const [raqam, setRaqam] = useState(1)

    function plus() {
        setRaqam(raqam + 1)
    }

    function minus() {
        setRaqam(raqam - 1)
    }

    return(
        <>

        <Menu />
            <div className="order-title">
                <div className="order-title-inner">
                    <h1 className="">ORDER</h1>
                    <div className="order-hl">
                        <div className="hl-1"></div>
                        <div className="hl-2"></div>
                        <div className="hl-3"></div>
                    </div>
                </div>
            </div>
            <div className="OrderCardsJs">
                {Products.map((elem => {
                return(
                <div className="order-card">
                    <img className="order-img" src={elem.img}/>
                    <div className="order-card-body">
                        <span className="order-card-title">{elem.name}</span>
                        <p className="order-card-text">Narxi { elem.narxi} $</p>
                        {/* <div className="plusMinus">
                            <button onClick={plus} className="buttonPlus">+</button>
                            <input type="number" className="inputGetResult" id="getResult" value={raqam} />
                            <button onClick={minus} className="buttonMinus">-</button>
                        </div> */}
                    <a href="#" className=""><button  className="order-button">BUY NOW</button></a>
                    </div>
                </div>
                )
            }))}
            </div>
        </>
    )
}



export default Order;