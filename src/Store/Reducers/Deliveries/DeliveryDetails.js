import * as TYPES from '../../Actions/Deliveries/Types'
const initialState = {
    isLoading: true,
    deliveryDetails: null,
    error: null,
  };
export default reducer = (state = initialState, actions) => {
    switch (actions.type) {
      case TYPES.DELIVERY_DETAILS_STARTED:
        return {
          ...state,
          isLoading: true,
          error: null,
        };
      case TYPES.DELIVERY_DETAILS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          deliveryDetails: actions.payload,
          error: null
        };
      case TYPES.DELIVERY_DETAILS_ERROR:
        return {
          ...state,
          isLoading: false,
          error: actions.payload
        };
      default:
        return state;
    }
};