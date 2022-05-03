import React from 'react';

import Navbar from './components/Navbar';
import ProductPage from './views/products/ProductPage';

function App() {
  return (
    <div className="App min-h-screen flex flex-col items-stretch lg:px-[10%]">
      <Navbar/>
      <main className="grow lg:py-20">
        <ProductPage/>
      </main>
    </div>
  );
}

export default App;
