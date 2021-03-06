import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './views/homepage/HomePage';
import ProductPage from './views/products/ProductPage';
import CheckoutPage from './views/checkout/CheckoutPage';
import OrderConfirmation from './views/checkout/CheckoutConfirmation';
import ProductsDashboard from './views/products/ProductsDashboard';

function App() {
  return (
    <div className="App min-h-screen flex flex-col items-stretch">
      <div className='grow w-full max-w-[1440px] mx-auto'>
        <Navbar/>
      
        <main className="pb-8 md:pb-16 lg:pb-20 lg:mx-[10%]">
          <Routes>
            <Route path="/" element={<HomePage/>} />
            
            <Route path='products'>
              <Route path="" element={<ProductsDashboard/>}/>
              <Route path="details/:productId" element={<ProductPage/>}/>
            </Route>
            
            <Route path="checkout" element={<CheckoutPage/>}/>            
            
            <Route path="confirmation" element={<OrderConfirmation/>}/>
          </Routes>
        </main>
      </div>      

      <Footer/>
    </div>
  );
}

export default App;
