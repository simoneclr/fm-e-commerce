import React from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductPage from './views/products/ProductPage';

function App() {
  return (
    <div className="App min-h-screen flex flex-col items-stretch">
      <div className='grow max-w-[1440px] mx-auto'>
        <Navbar/>
      
        <main className="pb-8 md:pt-4 md:pb-16 lg:py-20 lg:px-[10%]">
          <ProductPage productId={1}/>
        </main>
      </div>      

      <Footer/>
    </div>
  );
}

export default App;
