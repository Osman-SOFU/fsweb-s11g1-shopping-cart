import React from 'react';
import { Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import { ProductContextProvider } from './contexts/ProductContext';
import { CartContextProvider } from './contexts/CartContext';

function App() {
  return (
    <CartContextProvider>
      <ProductContextProvider>
        <div className="App">
          <Navigation />
          <main className="content">
            <Route exact path="/">
              <Products />
            </Route>
            <Route path="/cart">
              <ShoppingCart />
            </Route>
          </main>
        </div>
      </ProductContextProvider>
    </CartContextProvider>
  );
}

export default App;
