import {combineReducers} from 'redux';
import {productsReducer} from './productsReducer';

export const rootReducer = combineReducers({
    product: productsReducer
})