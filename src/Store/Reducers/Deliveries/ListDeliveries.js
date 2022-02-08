import * as TYPES from '../../Actions/Deliveries/Types'
const initialState = {
    isLoading: true,
    deliveriesList: null,
    error: null,
  };
export default reducer = (state = initialState, actions) => {
    switch (actions.type) {
      case TYPES.GET_DELIVERIES_LIST_STARTED:
        return {
          ...state,
          isLoading: true,
          error: null,
        };
      case TYPES.GET_DELIVERIES_LIST_SUCCESS:
        return {
          ...state,
          isLoading: false,
          deliveriesList: actions.payload,
          error: null
        };
      case TYPES.GET_DELIVERIES_LIST_ERROR:
        return {
          ...state,
          isLoading: false,
          error: actions.payload
        };
      default:
        return state;
    }
};