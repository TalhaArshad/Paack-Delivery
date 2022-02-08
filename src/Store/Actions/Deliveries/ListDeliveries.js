import * as TYPES from './Types'

export const getDeliveriesStarted = payload => {
    return {
      type: TYPES.GET_DELIVERIES_LIST_STARTED,
      payload,
    };
};
export const getDeliveriesSuccess = payload => {
    return {
      type: TYPES.GET_DELIVERIES_LIST_SUCCESS,
      payload,
    };
};
export const getDeliveriesError = payload => {
    return {
        type: TYPES.GET_DELIVERIES_LIST_ERROR,
        payload,
    };
};