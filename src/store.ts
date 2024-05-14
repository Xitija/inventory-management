import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import inventoryManangementReducer from './reducer/inventoryManagementReducer';

const store = createStore(inventoryManangementReducer, applyMiddleware(thunk));

export default store;
