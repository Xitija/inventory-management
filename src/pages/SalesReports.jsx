import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSales } from '../reducer/actions';

const SalesReports = () => {
  const dispatch = useDispatch();
  const [productSales, setProductSales] = useState([]);
  const [product, setProduct] = useState('All');
  const sales = useSelector((state) => state.sales);

  const products = [];
  sales.forEach((sale) => {
    if (!products.includes(sale['productSold']['productName'])) {
      products.push(sale['productSold']['productName']);
    }
  });

  const totalSales = productSales.reduce(
    (acc, { totalAmount }) => acc + totalAmount,
    0
  );
  // check db time

  const generateReport = () => {
    if (product === 'All') {
      setProductSales(sales);
    } else {
      const salesForProduct = sales.filter(
        ({ productSold }) => productSold.productName === product
      );
      setProductSales(salesForProduct);
    }
  };

  useEffect(() => {
    dispatch(fetchSales());
  }, [dispatch]);

  return (
    <div>
      <h1>Sales Reports By Products</h1>
      <h2>Total Revenue : {totalSales ? totalSales : 0}</h2>
      <div>
        <label>Select Product:</label>
        <select value={product} onChange={(e) => setProduct(e.target.value)}>
          <option key={'All'} value={'All'}>
            All
          </option>
          {products.map((product) => (
            <option key={product} value={product}>
              {product}
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
              <b>Product Price</b>
            </td>
            <td>
              <b>Sale Quantity</b>
            </td>
            <td>
              <b>Sale Total</b>
            </td>
          </tr>
        </thead>
        <tbody>
          {(product === 'All' ||
            (productSales.length > 0 &&
              product === productSales[0].productSold.productName &&
              productSales.length > 0)) &&
            productSales.map((sale) => (
              <tr key={sale._id}>
                <td>{sale.productSold.productName}</td>
                <td>{sale.productSold.price}</td>
                <td>{sale.quantity}</td>
                <td>{sale.totalAmount}</td>
              </tr>
            ))}
        </tbody>
      </table>
      {sales.length === 0 && <h2>Sales not found for given date range</h2>}
    </div>
  );
};

export default SalesReports;
