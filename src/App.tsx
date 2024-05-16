import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import ProductForm from './pages/Productform';
import './App.css';
import Products from './pages/Products';
import SalesForm from './pages/SalesForm';
import SalesHistory from './pages/SalesHistory';
import InventoryReports from './pages/InventoryReports';
import SalesReports from './pages/SalesReports';
import EditProduct from './pages/EditProduct';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <nav>
        <Link to="/add-product">Add Product</Link>
        {'      '}
        <Link to="/products">View Products</Link>
        {'      '}
        <Link to="/add-sale">Add Sale</Link>
        {'      '}
        <Link to="/sales-history">View Sales History</Link>
        {'      '}
        <Link to="/inventory-reports">View Inventory reports</Link>
        {'      '}
        <Link to="/sales-reports">View Sales reports</Link>
      </nav>
      <Routes>
        <Route path="/add-product" element={<ProductForm />} />
        <Route path="/products" element={<Products />} />
        <Route path="/add-sale" element={<SalesForm />} />
        <Route path="/sales-history" element={<SalesHistory />} />
        <Route path="/inventory-reports" element={<InventoryReports />} />
        <Route path="/sales-reports" element={<SalesReports />} />
        <Route path="/edit-product/:productId" element={<EditProduct />} />
      </Routes>
    </div>
  );
}

export default App;
