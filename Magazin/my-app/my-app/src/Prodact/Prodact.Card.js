import React from 'react';
import './Prodact.Card.scss';

import { Link } from 'react-router-dom';

function ProdactCard(props) {
return (
<>

    <div class="card ProdactCard my-3">
        <div class="imgBox">
            <img src={props.ProdactCard__img} alt={props.ProdactCard__Alt} />
        </div>
        <div class="contentBox">
            <h3>{props.ProdactCard__title}</h3>
            <h2 class="price">Narxi: {props.ProdactCard__prise}</h2>
            <p className="card-text prodact-card-text">{props.ProdactCard__text}</p>
            <Link to="/" class="buy">{props.ProdactCard__btn}</Link>
        </div>
    </div>

</>
);
}
  
export default ProdactCard;