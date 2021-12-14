import "./menu.css"
import cardIcon from './svg/shopping-cart-solid.svg'

import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Link} from 'react-router-dom'

function Menu (){
    return(
        <>
        <div className="menu">
        <nav class="nav navbar navbar-expand-lg navbar-light ">
  <div class="bg-one container">
    <a class="navbar-title navbar-brand" href="#">Navbar</a>
    <button class=" icon navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="icon navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link class="nav-title-link-one nav-link active" aria-current="page" to="/Home">Home</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-title-link nav-link active" aria-current="page" to="/order">Order</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-title-link nav-link active" aria-current="page" to="/product">Product</Link>
        </li>
         <li class="nav-item">
        <Link to="/contact" class="nav-title-link nav-link active" aria-current="page">Contact</Link>
        </li>
         <li class="nav-item">
        <Link to="/about" class="nav-title-link nav-link active" aria-current="page" href="#">About</Link>
        </li>
      </ul>
    </div>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to="/register" class="one nav-title-link nav-link active" aria-current="page" href="#">Register</Link>
        </li>
        <li class="nav-item">
          <Link to="/" class="two nav-title-link nav-link active" aria-current="page" href="#">Login</Link>
        </li>
      </ul>
       <div className="menu_icon_svg_for_header" Li>
          <Link to="../Prodact/bought.js"> <img src={cardIcon} alt="shopping cart"  className="menu-cart-svg"/></Link>
           <span className="span_txt_for_cartIcon">0</span>
      </div>
    </div>
  </div>
</nav>
        </div>  
        </>
    )
}
export default Menu