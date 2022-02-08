import React, {useEffect} from 'react'
import {SafeAreaView, Text} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import DeliveryList from '../../Components/Delivery/DeliveryList';
import * as DeliveryRepository from '../../Services/DeliveryRepository'

const ListDeliveriesScreen = () => {
    const dispatch = useDispatch();
    const deliveriesList = useSelector(state => state.deliveriesList.deliveriesList);
    const isFetching = useSelector(state => state.deliveriesList.isLoading);

    useEffect(()=>{
        dispatch(DeliveryRepository.getListOfDeliveries())
    }, []);
    
    return(
        <SafeAreaView>
            {!isFetching && 
            <DeliveryList 
                deliveries = {deliveriesList}
            />
            }
        </SafeAreaView>
    );

}
export default ListDeliveriesScreen;