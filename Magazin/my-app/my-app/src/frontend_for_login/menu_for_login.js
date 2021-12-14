import "./menu_for_login.css"

import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Link} from 'react-router-dom'

function Menu_for_login (){
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
          <Link to="/register" class="one nav-title-link nav-link active" aria-current="page" href="#">Register</Link>
        </li>
        <li class="nav-item">
          <Link to="/" class="two nav-title-link nav-link active" aria-current="page" href="#">Login</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>  
        </>
    )
}
export default Menu_for_login