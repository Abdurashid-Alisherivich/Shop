import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Contact from './contact/Contact';
import About from './about/About';
import Login from './Register-Login/Login';
import Registration from './Register-Login/Registration'
import Order from './Order/Order';
import ProdactHome from './Prodact/ProdactHome';
import Home from './home/home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
  <>   



      <BrowserRouter>
        <Route exact path='/' component={Login} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/about' component={About}   />
        <Route exact path='/register' component={Registration}   />
        <Route exact path='/order' component={Order}   />
        <Route exact path='/product' component={ProdactHome}   />
        <Route exact path='/Home' component={Home} />
    </BrowserRouter>
  </>
  );
}

export default App;
