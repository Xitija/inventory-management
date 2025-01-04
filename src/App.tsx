import { Route, Link, Routes } from 'react-router-dom';
import { FaGithubSquare } from "react-icons/fa";
import { FaServer } from "react-icons/fa6";
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
      <div className="navbar">
        <div className="logo">Inventory Management</div>
        <nav>
          <Link className="link" to="/products">View Products</Link>
          <Link className="link" to="/sales-history">View Sales History</Link>
          <Link className="link" to="/inventory-reports">View Inventory reports</Link>
          <Link className="link" to="/sales-reports">View Sales reports</Link>
          <Link className="link" to="/add-product">Add Product</Link>
          <Link className="link" to="/add-sale">Add Sale</Link>
          <a className="link" target="_blank" href="https://github.com/Xitija/inventory-management"><FaGithubSquare size={30} /></a>
          <a className="link" target="_blank" href="https://replit.com/@xitija/InventoryManagement"><FaServer size={30} /></a>
        </nav>
      </div>
      <div className="container">
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/add-product" element={<ProductForm />} />
        <Route path="/products" element={<Products />} />
        <Route path="/add-sale" element={<SalesForm />} />
        <Route path="/sales-history" element={<SalesHistory />} />
        <Route path="/inventory-reports" element={<InventoryReports />} />
        <Route path="/sales-reports" element={<SalesReports />} />
        <Route path="/edit-product/:productId" element={<EditProduct />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
