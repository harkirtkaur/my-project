import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Stays from './Components/JS files/stays';
import Flights from './Components/JS files/flights';
import Cars from './Components/JS files/cars';
import Vpacks from './Components/JS files/vpacks';
import Errorpage from './Components/JS files/errorpage';
import Navbar from './Components/JS files/navbar';
//import { Provider } from 'react-redux';
//import myStore from './Redux/Store/myStore';
//import Cart from './Components/cart';
//import Products from './Components/products';
import Register from './Components/JS files/register';
import Login from './Components/JS files/login';
import Footer from './Components/JS files/footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     {/* <Provider store={myStore}>  */}
    <BrowserRouter>
    <Navbar />
      <Routes>
          <Route path='/' element={<App />}></Route>
          <Route path="/stays" element={<Stays />}></Route>
          <Route path='/flights' element={<Flights />}></Route>
          <Route path='/cars' element={<Cars />}></Route>
          <Route path='/vpacks' element={<Vpacks />}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          {/* <Route path='/cart' element={<Cart></Cart>}></Route> */}
          {/* <Route path='/products' element={<Products />}></Route> */}
          <Route path='*' element={<Errorpage />}></Route>
        </Routes>
    <Footer></Footer>
    </BrowserRouter>
     {/* </Provider> */}
  </React.StrictMode>

);
reportWebVitals();
