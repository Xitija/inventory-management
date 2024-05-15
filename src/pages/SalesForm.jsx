import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSales, fetchProducts } from '../reducer/actions';

const SalesForm = () => {
  const dispatch = useDispatch();

  const initialState = {
    productSold: '',
    quantity: 0
  };

  let products = useSelector((state) => state.products);

  const [sale, setSale] = useState(initialState);

  const handleSaleForm = (e) => {
    e.preventDefault();
    const productSold = sale.productSold.trim();
    const quantity = parseInt(sale.quantity);
    if (productSold.length && quantity) {
      dispatch(addSales({ productSold, quantity }));
      setSale(initialState);
    }
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Add Sales</h1>
      <form>
        <div>
          <label>Select Category:</label>
          <select
            value={sale.productSold}
            onChange={(e) => setSale({ ...sale, productSold: e.target.value })}
          >
            <option value={''}>Select Product</option>
            {products.map((product) => (
              <option key={product._id} value={product._id}>
                {product.productName}
              </option>
            ))}
          </select>
        </div>
        <div>
          <input
            type="number"
            placeholder="Enter Product Quantity"
            value={sale.quantity}
            onChange={(e) => setSale({ ...sale, quantity: e.target.value })}
          />
        </div>
        <button onClick={handleSaleForm}>Add Product</button>
      </form>
    </div>
  );
};

export default SalesForm;
