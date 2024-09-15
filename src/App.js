import React from 'react';
import { Provider } from 'react-redux'; // Provides the Redux store to the entire app
import store from './redux/store'; // Importing the Redux store
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing routing components
import ProductList from './components/Product/ProductList'; // Product listing page
import ShoppingCart from './components/Cart/ShoppingCart'; // Shopping cart page

function App() {
  return (
    <Provider store={store}> {/* Provides the Redux store to all child components */}
      <Router>
        {/* Defines application routes */}
        <Routes>
          {/* Route for product list page */}
          <Route path="/" element={<ProductList />} />
          {/* Route for shopping cart page */}
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
