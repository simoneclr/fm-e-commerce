import React from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductPage from './views/products/ProductPage';

function App() {
  return (
    <div className="App min-h-screen flex flex-col items-stretch">
      <Navbar/>
      
      <main className="grow pb-8 lg:py-20 lg:px-[10%]">
        <ProductPage productId={1}/>
      </main>

      <Footer/>
    </div>
  );
}

export default App;
