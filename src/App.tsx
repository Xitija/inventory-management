import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import ProductForm from './pages/Productform';
import './App.css';
import Products from './pages/Products';
import SalesForm from './pages/SalesForm';
import SalesHistory from './pages/SalesHistory';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <nav>
        <Link to="/add-product">Add Product</Link>
        {'      '}
        <Link to="/products">Products</Link>
        {'      '}
        <Link to="/add-sale">Add Sale</Link>
        {'      '}
        <Link to="/sales-history">View Sales History</Link>
      </nav>
      <Routes>
        <Route path="/add-product" element={<ProductForm />} />
        <Route path="/products" element={<Products />} />
        <Route path="/add-sale" element={<SalesForm />} />
        <Route path="/sales-history" element={<SalesHistory />} />
      </Routes>
    </div>
  );
}

export default App;
