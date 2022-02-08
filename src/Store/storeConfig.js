import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import ListDeliveriesReducer from './Reducers/Deliveries/ListDeliveries';
import DeliveryDetailsReducer from './Reducers/Deliveries/DeliveryDetails';
import DeliveryStateReducer from './Reducers/Deliveries/DeliveryState';

const rootReducer = combineReducers({
    deliveriesList: ListDeliveriesReducer,
    deliveryDetails: DeliveryDetailsReducer,
    deliveryState: DeliveryStateReducer,
});
const middleware = applyMiddleware(thunk);

const configureStore = () => {
    return createStore(rootReducer, middleware);
}

export default configureStore;