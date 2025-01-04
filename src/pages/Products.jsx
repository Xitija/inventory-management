import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, deleteProduct } from '../reducer/actions';

const Products = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let products = useSelector((state) => state.products);
  const error = useSelector((state) => state.error);

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
            <td>
              <b>Action</b>
            </td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.productName}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>
                <button value={product._id} onClick={handleEditProduct}>
                  Edit Product
                </button>
                <button value={product._id} onClick={handleRemoveProduct}>
                  Remove Product
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {error && (
        <div>
          <h2>Server Not Active 😨</h2>
          <h3>
            <a
              href="https://drive.google.com/file/d/1rNuOYExEXxZHQ4vykdjpxJ4jsSaIWs8C/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to view video
            </a>
          </h3>
        </div>
      )}
    </div>
  );
};

export default Products;
