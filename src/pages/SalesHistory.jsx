import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSalesByDate } from '../reducer/actions';

const SalesHistory = () => {
  const currentDate = new Date();
  const previousDate = new Date();
  previousDate.setDate(currentDate.getDate() - 1);

  const formatDatePartsStartDate = previousDate
    .toISOString()
    .substring(0, 10)
    .split('/');
  const formatDatePartsEndDate = currentDate
    .toISOString()
    .substring(0, 10)
    .split('/');

  const startDate = formatDatePartsStartDate[0];
  const endDate = formatDatePartsEndDate[0];

  const initialState = {
    startDate,
    endDate
  };
  const dispatch = useDispatch();
  const [dateRange, setDateRange] = useState(initialState);
  const sales = useSelector((state) => state.sales);

  // const handleGetSalesHistory = () => {
  //   console.log(dateRange);
  //   dispatch(fetchSalesByDate(dateRange.startDate, dateRange.endDate));
  // };
  console.log(sales, 'sales');

  const totalSalesInDateRange = sales.reduce(
    (acc, { totalAmount }) => acc + totalAmount,
    0
  );
  // check db time
  useEffect(() => {
    console.log('test 1');
    dispatch(fetchSalesByDate(dateRange.startDate, dateRange.endDate));
  }, [dispatch, dateRange]);

  // show per unit price
  return (
    <div>
      <h1>Sales History</h1>
      <h2>
        Revenue in the given period:{' '}
        {totalSalesInDateRange ? totalSalesInDateRange : 0}
      </h2>
      <p>
        Start Date :{' '}
        <input
          type="date"
          value={dateRange.startDate}
          onChange={(e) =>
            setDateRange({ ...dateRange, startDate: e.target.value })
          }
        />
      </p>
      <p>
        End Date :{' '}
        <input
          type="date"
          value={dateRange.endDate}
          onChange={(e) =>
            setDateRange({ ...dateRange, endDate: e.target.value })
          }
        />
      </p>
      {/* <button onClick={handleGetSalesHistory}>Submit</button> */}
      {sales.length > 0 && (
        <ul>
          {sales.map((sale) => (
            <li key={sale._id}>
              {sale.productSold.productName}-{sale.quantity}-{sale.totalAmount}
            </li>
          ))}
        </ul>
      )}
      {sales.length === 0 && <h2>Sales not found for given date range</h2>}
    </div>
  );
};

export default SalesHistory;
