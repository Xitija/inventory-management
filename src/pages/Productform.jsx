import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../reducer/actions';

const ProductForm = () => {
  const dispatch = useDispatch();

  const initialState = {
    productName: '',
    quantity: 0,
    price: 0,
    category: ''
  };

  const categories = [
    'Laundry',
    'Home Appliances',
    'Furniture',
    'Electronics',
    'Clothing',
    'Shoes',
    'Accessories',
    'Gadget',
    'Footwear',
    'Jewellery',
    'Watches',
    'Sports',
    'Health',
    'Bath & Beauty',
    'Books'
  ];
  const [product, setProduct] = useState(initialState);

  const handleProductForm = (e) => {
    e.preventDefault();
    const productName = product.productName.trim();
    const quantity = parseInt(product.quantity);
    const price = parseFloat(product.price);
    const category = product.category.trim();
    if (productName.length && quantity && price && category.length) {
      dispatch(addProduct({ productName, price, quantity, category }));
      setProduct(initialState);
    }
  };

  return (
    <div>
      <h1>Add Product</h1>
      <form>
        <div>
          <input
            type="text"
            placeholder="Enter Product Name"
            value={product.productName}
            onChange={(e) =>
              setProduct({ ...product, productName: e.target.value })
            }
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Enter Product Price"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Enter Product Quantity"
            value={product.quantity}
            onChange={(e) =>
              setProduct({ ...product, quantity: e.target.value })
            }
          />
        </div>
        <div>
          <div>
            <label>Select Category:</label>
            <select
              value={product.category}
              onChange={(e) =>
                setProduct({ ...product, category: e.target.value })
              }
            >
              <option value={''}>Select a report type</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button onClick={handleProductForm}>Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
