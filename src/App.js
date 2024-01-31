
import './App.css';
//Mounted Navbar here enter <Navbar/> in div tag
import { Navbar } from './Components/Navbar/Navbar';
//import browserrouter from react-router-dom
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Shopcategory } from './Pages/Shopcategory';
import { Shop } from './Pages/Shop';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';

function App() {
  return (
    <div>
     {/* wrap all the components inside browserrouter */}
<BrowserRouter>
     
     {/* so this navbar will be available in all the components so after that will set all the routes */}
     <Navbar/> 
     
    <Routes>

      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<Shopcategory category="mens"/>}/>
      <Route path='/womens' element={<Shopcategory category="womens"/>}/>
      <Route path='/kids' element={<Shopcategory category="kids"/>}/>

      {/* route for product */}
      <Route path="product" element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
      </Route>

        {/* route for cart */}
        <Route path='/cart' element={<Cart/>}/>

        {/* route for loginpage */}
        <Route path='/login' element={<LoginSignup/>}/>

        {/* link this routes to navbar */}

    </Routes>

</BrowserRouter>
    </div>
  );
}

export default App;
