import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk  from "redux-thunk";
import { restaurantReducers } from "./reducers/restaurantReducers";

const reducers= combineReducers({
    restaurantList:restaurantReducers
})

const middleware = [thunk]

const store=createStore(reducers,applyMiddleware(...middleware))

export default store