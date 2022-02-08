import * as TYPES from '../../Actions/Deliveries/Types'
const initialState = {
    isPerforming: false,
    state: '',
    deliveryItem: null,
    error: null
  };
export default reducer = (state = initialState, actions) => {
    switch (actions.type) {
      case TYPES.MARK_DELIVERY_ACTIVE:
        return {
          ...state,
          isPerforming: false,
          deliveryItem: actions.payload,
          state: 'active',
          error: null,
        };
      case TYPES.CHANGE_DELIVERY_STATUS_STARTED:
        return {
          ...state,
          isPerforming: true,
          error: null,
        };
      case TYPES.CHANGE_DELIVERY_STATUS_SUCCESS:
        return {
          ...state,
          isPerforming: false,
          deliveryItem: null,
          state: '',
          error: null
        };
      case TYPES.CHANGE_DELIVERY_STATUS_ERROR:
        return {
          ...state,
          isPerforming: false,
          error: actions.payload
        };
     
      default:
        return state;
    }
};