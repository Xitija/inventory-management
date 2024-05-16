import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, fetchProductsByCategory } from '../reducer/actions';

// Report by category
export const InventoryReports = () => {
  const dispatch = useDispatch();
  const [viewProducts, setViewProducts] = useState({
    products: [],
    productsByCategory: []
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
    if (category === 'All') {
      setViewProducts((oldProduct) => ({ ...oldProduct, products }));
    } else {
      setViewProducts((oldProduct) => ({ ...oldProduct, productsByCategory }));
    }
  };

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
      <ul>
        {category === 'All' &&
          viewProducts.products.map((product) => (
            <li key={product._id}>
              {product.productName}-{product.quantity}-{product.price}-
              {product.category}
            </li>
          ))}
        {/* {category ? category : "kjk"} - {viewProducts.productsByCategory[0] ? viewProducts.productsByCategory[0].category : "klkloo"} */}
        {viewProducts.productsByCategory.length > 0 &&
          category === viewProducts.productsByCategory[0].category &&
          viewProducts.productsByCategory.map((product) => (
            <li key={product._id}>
              {product.productName}-{product.quantity}-{product.price}-
              {product.category}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default InventoryReports;
