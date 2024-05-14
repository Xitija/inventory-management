import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import ProductForm from './pages/Productform';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <nav>
        <Link to="/add-product">Add Product</Link>
        {/* <Link to="/exercises">Exercises</Link> */}
      </nav>
      <Routes>
        <Route path="/add-product" element={<ProductForm />} />
      </Routes>
    </div>
  );
}

export default App;
