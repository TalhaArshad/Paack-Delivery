import HTTPClient from './HttpClient';

class DeliveryServices {
  getDeliveries(id) {
    id = id === undefined ? '' : id
    const endPoint = `/deliveries/${id}`
    return new Promise((resolve, reject) => {
      HTTPClient.get(endPoint)
        .then(response => {
          resolve(response.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  finishDelivery(id, status, lat, long) {
    // making request object from params
    const payload = {delivery: {status: status, latitude: lat, longitude: long}};
    id = id === undefined ? '' : id
    const endPoint = `/deliveries/${id}`
    return new Promise((resolve, reject) => {
      HTTPClient.put(endPoint, payload)
        .then(response => {
          resolve(response.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}

export default new DeliveryServices();
