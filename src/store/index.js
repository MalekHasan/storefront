import {combineReducers,createStore}from 'redux';
import {composeWithDevTools}from 'redux-devtools-extension';
import myActiveCategoryReducer from './categories';
import myProductsListReducer from './products';

const reducers=combineReducers({
    myActiveCategory:myActiveCategoryReducer,
    myProductsList:myProductsListReducer

})
const store = () => {
    return createStore(reducers, composeWithDevTools())
}

export default store();