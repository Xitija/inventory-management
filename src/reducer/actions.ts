import { Dispatch } from 'redux';
import { ACTIONS } from './actions.config';
import { Product, Sales } from '../types';

const HOST_URL = `https://24b8513f-07fb-4632-8174-1d15a59105f4-00-2glye6qlv32p3.picard.replit.dev/api`;

const fetchProducts = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: ACTIONS.FETCH_DATA_LOADING });
    const response = await fetch(HOST_URL + `/product`);
    let data = [];
    if (response.status === 200) {
      data = await response.json();
    }
    dispatch({ type: ACTIONS.FETCH_PRODUCTS_SUCCESS, payload: data.products });
  } catch (error) {
    console.error(error);
    dispatch({ type: ACTIONS.FETCH_PRODUCTS_FAILURE });
  }
};

const fetchProductsByCategory =
  (category: string) => async (dispatch: Dispatch) => {
    try {
      dispatch({ type: ACTIONS.FETCH_DATA_LOADING });
      const response = await fetch(HOST_URL + `/product/category/${category}`);
      let data = [];
      if (response.status === 200) {
        data = await response.json();
      }
      dispatch({
        type: ACTIONS.FETCHED_PRODUCTS_BY_CATEGORY,
        payload: data.products
      });
    } catch (error) {
      console.error(error);
      dispatch({ type: ACTIONS.FETCH_PRODUCTS_FAILURE });
    }
  };

const fetchSales = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: ACTIONS.FETCH_DATA_LOADING });
    const response = await fetch(HOST_URL + `/sales`);
    let data = [];
    if (response.status === 200) {
      data = await response.json();
    }
    dispatch({ type: ACTIONS.FETCH_SALES_SUCCESS, payload: data.sales });
  } catch (error) {
    console.error(error);
    dispatch({ type: ACTIONS.FETCH_SALES_FAILURE });
  }
};

const fetchSalesByDate =
  (startDate: string, endDate: string) => async (dispatch: Dispatch) => {
    try {
      dispatch({ type: ACTIONS.FETCH_DATA_LOADING });
      const response = await fetch(
        HOST_URL +
          `/sales/date-range/?startDate=${startDate}&endDate=${endDate}`
      );
      let data: any = {};
      if (response.status === 200) {
        data = await response.json();
      } else {
        data['sales'] = [];
      }
      dispatch({ type: ACTIONS.FETCHED_SALES_BY_DATE, payload: data.sales });
    } catch (error) {
      console.error(error);
      dispatch({ type: ACTIONS.FETCH_SALES_FAILURE });
    }
  };

const addProduct = (productData: Product) => async (dispatch: Dispatch) => {
  try {
    const response = await fetch(HOST_URL + `/product`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productData)
    });
    let data: any = {};
    if (response.status === 201) {
      data = await response.json();
    }
    dispatch({ type: ACTIONS.ADD_PRODUCT_SUCCESS, payload: data.product });
  } catch (error) {
    console.error(error);
    dispatch({ type: ACTIONS.ADD_PRODUCT_FAILURE });
  }
};

const updateProduct = (productData: Product) => async (dispatch: Dispatch) => {
  try {
    const response = await fetch(HOST_URL + `/product/${productData._id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productData)
    });
    let data: any = {};
    if (response.status === 200) {
      data = await response.json();
    }
    dispatch({ type: ACTIONS.UPDATE_PRODUCT_SUCCESS, payload: data.product });
  } catch (error) {
    console.error(error);
    dispatch({ type: ACTIONS.UPDATE_PRODUCT_FAILURE });
  }
};

const deleteProduct = (productId: string) => async (dispatch: Dispatch) => {
  try {
    const response = await fetch(HOST_URL + `/product/${productId}`, {
      method: 'DELETE'
    });
    if (response.status === 204) {
      dispatch({
        type: ACTIONS.DELETE_PRODUCT_SUCCESS,
        payload: { productId }
      });
    }
  } catch (error) {
    console.error(error);
    dispatch({ type: ACTIONS.DELETE_PRODUCT_FAILURE });
  }
};

const addSales = (salesData: Sales) => async (dispatch: Dispatch) => {
  try {
    const response = await fetch(HOST_URL + `/sales`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(salesData)
    });
    let data: any = {};
    if (response.status === 201) {
      data = await response.json();
    }
    dispatch({ type: ACTIONS.ADD_SALES_SUCCESS, payload: data.sales });
  } catch (error) {
    console.error(error);
    dispatch({ type: ACTIONS.ADD_SALES_FAILURE });
  }
};

const deleteSales = (salesId: string) => async (dispatch: Dispatch) => {
  try {
    const response = await fetch(HOST_URL + `/sales/${salesId}`, {
      method: 'DELETE'
    });
    if (response.status === 204) {
      dispatch({
        type: ACTIONS.DELETE_SALES_SUCCESS,
        payload: { salesId }
      });
    }
  } catch (error) {
    console.error(error);
    dispatch({ type: ACTIONS.DELETE_SALES_FAILURE });
  }
};

export {
  fetchProducts,
  fetchProductsByCategory,
  fetchSales,
  fetchSalesByDate,
  addProduct,
  deleteProduct,
  addSales,
  deleteSales,
  updateProduct
};
