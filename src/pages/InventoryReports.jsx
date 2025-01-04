import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, fetchProductsByCategory } from '../reducer/actions';

// Report by category
export const InventoryReports = () => {
  const dispatch = useDispatch();
  const [viewProducts, setViewProducts] = useState({
    products: [],
    productsByCategory: [],
    filter: ''
  });
  const [category, setCategory] = useState('All');
  const products = useSelector((state) => state.products);
  const productsByCategory = useSelector((state) => state.productsByCategory);

  //   setAllProducts(products);
  console.log(products, 'allpp');

  console.log(products, 'products');

  const categories = [];
  products.forEach((product) => {
    if (!categories.includes(product['category'])) {
      categories.push(product['category']);
    }
  });
  //   if (categories.length === 0) {
  //     setCategories(categories1);
  //   }

  //   categories.push('All');
  const generateReport = () => {
    console.log(category, 'category');
    if (category === 'All') {
      setViewProducts((oldProduct) => ({
        ...oldProduct,
        products,
        filter: 'products'
      }));
    } else {
      console.log(productsByCategory);
      setViewProducts((oldProduct) => ({
        ...oldProduct,
        productsByCategory,
        filter: 'productsByCategory'
      }));
    }
  };

  console.log(category === 'All' ? 'ok' : 'not ok');
  console.log(
    viewProducts.productsByCategory.length > 0 &&
      category === viewProducts.productsByCategory[0].category
      ? 'works'
      : 'no'
  );
  useEffect(() => {
    if (category !== 'All') {
      dispatch(fetchProductsByCategory(category));
    } else {
      if (!products.length) {
        dispatch(fetchProducts());
      }
    }
  }, [dispatch, category, products.length]);

  return (
    <div>
      <h1>Inventory Reports By Category</h1>
      <div>
        <label>Select Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value={'All'}>All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <button onClick={generateReport}>Generate Report</button>
      <table>
        <thead>
          <tr>
            <td>
              <b>Product Name</b>
            </td>
            <td>
              <b>Product Quantity</b>
            </td>
            <td>
              <b>Product Price</b>
            </td>
            <td>
              <b>Product Category</b>
            </td>
          </tr>
        </thead>
        <tbody>
          {((category === 'All' && viewProducts.products.length > 0) ||
            (viewProducts.productsByCategory.length > 0 &&
              category === viewProducts.productsByCategory[0].category)) &&
            viewProducts[viewProducts.filter].map((product) => (
              <tr key={product._id}>
                <td>{product.productName}</td>
                <td>{product.quantity}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryReports;
