import React, { useState } from 'react';

import './Prodact.scss';
import "./Prodact.Card.scss";
import Menu from '../frontend/menu';

import ProdactWarehouse from "./Prodact.Warehouse";
import ProdactCard from './Prodact.Card';

function Prodact() {

  const [items, setItems] = useState(ProdactWarehouse);

  const filterItem = (categItem) => {
    const updatedItems = ProdactWarehouse.filter((curElem) =>{
      return curElem.category === categItem;
    });

    setItems(updatedItems);
  }


  const filterItemDiscount = (categItemDiscount) => {
    const updatedItemsDiscount = ProdactWarehouse.filter((disElem) =>{
      return disElem.discount === categItemDiscount;
    });

    setItems(updatedItemsDiscount);
  }

  const filterItemNew = (categItemNew) => {
    const updatedItemsNew = ProdactWarehouse.filter((newElem) =>{
      return newElem.new === categItemNew;
    });

    setItems(updatedItemsNew);
  }

return (
<>

    <Menu />

<header className="main-header">
            <div className="container">
                <nav className="main-navigation"> 
                    <ul className="main-navigation__items">
                        <li className="main-navigation__item active">
                          <button className="btn btn-primary" onClick={() => setItems(ProdactWarehouse)}>Barchasi</button>
                        </li>
                        <li className="main-navigation__item">
                          <button className="btn btn-primary" onClick={() => filterItem('Oziq-ovqat')}>Oziq-Ovqat</button>
                        </li>
                        <li className="main-navigation__item">
                          <button className="btn btn-primary" onClick={() => filterItem('Maishiy-maxsulot')}>Maishiy</button>
                        </li>
                        <li className="main-navigation__item">
                          <button className="btn btn-primary" onClick={() => filterItem('Turli-xil')}>Turli xil</button>
                        </li>
                        <li className="main-navigation__item">
                        <button className="btn btn-primary" onClick={() => filterItemDiscount('Chegirma')}>Sidka</button>
                        </li>
                        <li className="main-navigation__item">
                        <button className="btn btn-primar y" onClick={() => filterItemNew('Yangilar')}>Yangilar</button>
                        </li>
                    </ul>
                </nav>
            </div>   
    </header>

  <div className="menu-items container-fluid mt-3">
    <div className="row">
      <div className="col-11 mx-auto">
        <div className="row my-3">

          {
            items.map((elem) => {
              const {id, name, image, description, price} = elem;

              return (
                <div className="col-12 col-md-4 col-sm-6">
                  <ProdactCard ProdactCard__img={image} ProdactCard__prise={price} ProdactCard__title={name} ProdactCard__text={description} ProdactCard__btn="Buyirtma berish" ProdactCard__Alt={name} />
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  </div>
</>
);
}
  
export default Prodact;