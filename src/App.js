import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductPage from './views/products/ProductPage';
import CheckoutPage from './views/checkout/CheckoutPage';
import OrderConfirmation from './views/checkout/CheckoutConfirmation';

function App() {
  return (
    <div className="App min-h-screen flex flex-col items-stretch">
      <div className='grow w-full max-w-[1440px] mx-auto'>
        <Navbar/>
      
        <main className="pb-8 md:pt-4 md:pb-16 lg:py-20 lg:px-[10%]">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='products'>
              <Route path=":productId" element={<ProductPage productId={1}/>}/>
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

// TODO: Create proper HomePage
const Home = () => {
  return (
    <Link to="products/1" className="text-2xl">
      View Our Product
    </Link>
  )
}

export default App;
