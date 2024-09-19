import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartWidget from './components/CartWidget';
import Checkout from './components/Checkout';
import Brief from './components/Brief';
import CartProvider from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ItemListContainer} />
          <Route path="/producto/:id" component={ItemDetailContainer} />
          <Route path="/cart" component={CartWidget} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/brief" component={Brief} />
        </Switch>
      </Router>
    </CartProvider>
  );
}

export default App;
