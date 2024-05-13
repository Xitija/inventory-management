import { Dispatch } from 'redux';
import { ACTIONS } from './actions.config';
const initialState = {
  products: [],
  productsByCategory: [],
  sales: [],
  salesByDate: [],
  loading: false,
  error: null
};

const inventoryManangementReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ACTIONS.FETCH_DATA_LOADING:
      return {
        ...state,
        loading: true
      };
    case ACTIONS.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: null
      };
    case ACTIONS.FETCHED_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        productsByCategory: action.payload,
        loading: false,
        error: null
      };
    case ACTIONS.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: 'Error fetching products'
      };
    case ACTIONS.FETCH_SALES_SUCCESS:
      return {
        ...state,
        sales: action.payload,
        loading: false,
        error: null
      };
    case ACTIONS.FETCHED_SALES_BY_DATE:
      return {
        ...state,
        salesByDate: action.payload,
        loading: false,
        error: null
      };
    case ACTIONS.FETCH_SALES_FAILURE:
      return {
        ...state,
        loading: false,
        error: 'Error fetching sales'
      };
    case ACTIONS.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        products: [...state.products, action.payload],
        loading: false,
        error: null
      };
    case ACTIONS.DELETE_PRODUCT_SUCCESS:
      const remainingProducts = state.products.filter(
        ({ _id }) => _id !== action.payload.productId
      );
      return {
        ...state,
        products: [...remainingProducts],
        loading: false,
        error: null
      };
    case ACTIONS.ADD_SALES_SUCCESS:
      return {
        ...state,
        sales: [...state.sales, action.payload],
        loading: false,
        error: null
      };
    case ACTIONS.DELETE_SALES_SUCCESS:
      const remainingSales = state.sales.filter(
        ({ _id }) => _id !== action.payload.salesId
      );
      return {
        ...state,
        sales: [...remainingSales],
        loading: false,
        error: null
      };
    case ACTIONS.DELETE_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: 'Error removing Product'
      };
    case ACTIONS.DELETE_SALES_FAILURE:
      return {
        ...state,
        loading: false,
        error: 'Error removing Sales'
      };
    case ACTIONS.UPDATE_PRODUCT_SUCCESS:
      const updatedProduct = state.products.find(
        ({ _id }) => _id !== action.payload.productId
      );
      const product = Object.assign({}, updatedProduct, action.payload.product);
      return {
        // look
      };

    case ACTIONS.ADD_PRODUCT_FAILURE:
    case ACTIONS.ADD_SALES_FAILURE:
      return {
        ...state,
        loading: false,
        error: 'Error fetching or adding data'
      };
    default:
      return state;
  }
};

export default inventoryManangementReducer;
