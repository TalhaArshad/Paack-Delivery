import * as TYPES from './Types'

export const MarkDeliveryActive = payload => {
  return {
    type: TYPES.MARK_DELIVERY_ACTIVE,
    payload,
  };
};
export const changeDeliveryStatusStarted = payload => {
    return {
      type: TYPES.CHANGE_DELIVERY_STATUS_STARTED,
      payload,
    };
};
export const changeDeliveryStatusSuccess = payload => {
    return {
      type: TYPES.CHANGE_DELIVERY_STATUS_SUCCESS,
      payload,
    };
};
export const changeDeliveryStatusError= payload => {
    return {
        type: TYPES.CHANGE_DELIVERY_STATUS_ERROR,
        payload,
    };
};