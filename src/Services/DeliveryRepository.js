import DeliveryServices from './NetworkServices/DeliveryServices';
import * as ListDeliveriesActions from '../Store/Actions/Deliveries/ListDeliveries'
import * as DeliveryDetailsActions from '../Store/Actions/Deliveries/DeliveryDetails'
import * as DeliveryStateActions from '../Store/Actions/Deliveries/DeliveryState'
export const getListOfDeliveries = () => {
  return async dispatch => {
    dispatch(ListDeliveriesActions.getDeliveriesStarted())
    DeliveryServices.getDeliveries()
      .then(response => {
        dispatch(ListDeliveriesActions.getDeliveriesSuccess(response))
      })
      .catch(error => {
        // will handle exception later
        dispatch(ListDeliveriesActions.getDeliveriesError())
      });
  };
};

export const getDeliveryDetails = (id) => {
  return async dispatch => {
    dispatch(DeliveryDetailsActions.DeliveryDetailsStarted())
    DeliveryServices.getDeliveries(id)
      .then(response => {
        dispatch(DeliveryDetailsActions.DeliveryDetailsSuccess(response))
      })
      .catch(error => {
        // will handle exception later
        dispatch(DeliveryDetailsActions.DeliveryDetailsError())
      });
  };
};

export const markDelivery = (id, status, lat, long) => {
  
  return async dispatch => {
    
    dispatch(DeliveryStateActions.changeDeliveryStatusStarted())
    DeliveryServices.finishDelivery(id, status, lat, long)
      .then(response => {
        dispatch(DeliveryStateActions.changeDeliveryStatusSuccess())
        dispatch(DeliveryDetailsActions.DeliveryDetailsSuccess(response))
      })
      .catch(error => {
        // will handle exception later
        dispatch(DeliveryStateActions.changeDeliveryStatusError())
      });
  };
};
