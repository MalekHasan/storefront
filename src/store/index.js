import {combineReducers,createStore}from 'redux';
import {composeWithDevTools}from 'redux-devtools-extension';
import myActiveCategoryReducer from './categories';
import myProductsListReducer from './products';
import cartReducer from './cart';

const reducers=combineReducers({
    myActiveCategory:myActiveCategoryReducer,
    myProductsList:myProductsListReducer,
    myCart:cartReducer

})
const store = () => {
    return createStore(reducers, composeWithDevTools())
}

export default store();