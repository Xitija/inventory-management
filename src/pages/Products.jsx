import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, deleteProduct } from '../reducer/actions';

const Products = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let products = useSelector((state) => state.products);

  //   if (!products.length) {
  //     dispatch(fetchProducts());
  //     // products = useSelector((state) => state.products);
  //   }

  console.log(products, 'prods');

  const handleEditProduct = (e) => {
    e.preventDefault();
    // <Link className="product-card" to={`/product-details/${_id}`}>
    navigate(`/edit-product/${e.target.value}`);
  };

  const handleRemoveProduct = (e) => {
    e.preventDefault();
    dispatch(deleteProduct(e.target.value));
  };

  useEffect(() => {
    if (!products.length) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.productName}-{product.quantity}-{product.price}-
            {product.category}
            <button value={product._id} onClick={handleEditProduct}>
              Edit Product
            </button>
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
