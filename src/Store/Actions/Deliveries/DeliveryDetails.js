import * as TYPES from './Types'

export const DeliveryDetailsStarted = payload => {
    return {
      type: TYPES.DELIVERY_DETAILS_STARTED,
      payload,
    };
};
export const DeliveryDetailsSuccess = payload => {
    return {
      type: TYPES.DELIVERY_DETAILS_SUCCESS,
      payload,
    };
  };
export const DeliveryDetailsError = payload => {
    return {
        type: TYPES.DELIVERY_DETAILS_ERROR,
        payload,
    };
};