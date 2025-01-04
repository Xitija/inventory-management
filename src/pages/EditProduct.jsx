import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../reducer/actions';

const EditProduct = () => {
  const dispatch = useDispatch();
  const [updatedProduct, setUpdateProduct] = useState({});
  const { productId } = useParams();

  let products = useSelector((state) => state.products);

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

  const handleProductEditForm = (e) => {
    e.preventDefault();
    const productName = updatedProduct.productName.trim();
    const quantity = parseInt(updatedProduct.quantity);
    const price = parseFloat(updatedProduct.price);
    const category = updatedProduct.category.trim();
    if (productName.length && quantity && price && category.length) {
      dispatch(
        updateProduct({
          _id: productId,
          productName,
          price,
          quantity,
          category
        })
      );
    }
  };

  const getSingleProduct = async () => {
    try {
      const productToBeUpdated = products.find(({ _id }) => _id === productId);
      setUpdateProduct(productToBeUpdated);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return (
    <div>
      <h1>Add Product</h1>
      <form>
        <div>
          <input
            type="text"
            placeholder="Enter Product Name"
            value={updatedProduct.productName}
            onChange={(e) =>
              setUpdateProduct({
                ...updatedProduct,
                productName: e.target.value
              })
            }
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Enter Product Price"
            value={updatedProduct.price}
            onChange={(e) =>
              setUpdateProduct({ ...updatedProduct, price: e.target.value })
            }
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Enter Product Quantity"
            value={updatedProduct.quantity}
            onChange={(e) =>
              setUpdateProduct({ ...updatedProduct, quantity: e.target.value })
            }
          />
        </div>
        <div>
          <div>
            <label>Select Category:</label>
            <select
              value={updatedProduct.category}
              onChange={(e) =>
                setUpdateProduct({ ...updatedProduct, category: e.target.value })
              }
            >
              <option value={''}>Select Product Category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button onClick={handleProductEditForm}>Update Product</button>
      </form>
    </div>
  );
};

export default EditProduct;
