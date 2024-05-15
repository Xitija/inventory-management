import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, deleteProduct } from '../reducer/actions';

const Products = () => {
  const dispatch = useDispatch();
  let products = useSelector((state) => state.products);

  //   if (!products.length) {
  //     dispatch(fetchProducts());
  //     // products = useSelector((state) => state.products);
  //   }

  console.log(products, 'prods');

  const handleRemoveProduct = (e) => {
    e.preventDefault();
    dispatch(deleteProduct(e.target.value));
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.productName}-{product.quantity}-{product.price}-
            {product.category}
            <button value={product._id} onClick={handleRemoveProduct}>
              Remove Product
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
