import React, {useEffect} from 'react'
import {SafeAreaView, View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import * as DeliveryRepository from '../../Services/DeliveryRepository'
import * as DeliveryState from '../../Store/Actions/Deliveries/DeliveryState'
import {DeliveryDetailStyles} from '../../Styles/Delivery'

const DeliveryDetailsScreen = ({navigation, route}) => {
    const { id } = route.params;
    const dispatch = useDispatch();
    const deliveryItemDetails = useSelector(state => state.deliveryDetails.deliveryDetails);
    const isFetching = useSelector(state => state.deliveryDetails.isLoading);
    const deliveryState = useSelector(state => state.deliveryState);

    useEffect(()=>{
        dispatch(DeliveryRepository.getDeliveryDetails(id))
    }, []);
    
    return(
        <SafeAreaView style = {styles.container}>
           
            {!isFetching && 
             <View>
                <Text style = {styles.clientName}>{deliveryItemDetails?.client}</Text>
                <Text style = {styles.detailText}>{`Receiver Name - ${deliveryItemDetails?.customer?.name}`}</Text>
                <Text style = {styles.detailText}>{`Address - ${deliveryItemDetails?.customer?.address}`}</Text>
                <Text style = {styles.detailText}>{`City - ${deliveryItemDetails?.customer?.city}`}</Text>
                <Text style = {[styles.detailText, {color: deliveryItemDetails?.delivery?.status === 'delivered' ? 'green': '#222'}]}>{`Delivery Status - ${deliveryItemDetails?.delivery?.status}`}</Text>
                {deliveryItemDetails.delivery.status !== 'delivered' &&
                    deliveryState.state !== 'active' && <TouchableOpacity
                    onPress = {()=>{
                        dispatch(DeliveryState.MarkDeliveryActive(deliveryItemDetails))
                    }}
                    style = {styles.activeButton}
                >
                    <Text style = {styles.activeButtonText}>Make Active</Text>
                </TouchableOpacity>}

                {deliveryState.state === 'active' && deliveryState.deliveryItem.id === deliveryItemDetails.id &&
                <View>
                    <TouchableOpacity
                        onPress = {()=>{
                            dispatch(DeliveryRepository.markDelivery(deliveryItemDetails.id,'delivered', deliveryItemDetails?.customer?.latitude, deliveryItemDetails?.customer?.longitude))
                        }}
                        style = {styles.activeButton}
                    >
                        <Text style = {styles.activeButtonText}>Deliver</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress = {()=>{
                            dispatch(DeliveryRepository.markDelivery(deliveryItemDetails.id, 'undelivered', deliveryItemDetails?.customer?.latitude, deliveryItemDetails?.customer?.longitude))
                        }}
                        style = {styles.activeButton}
                    >
                        <Text style = {styles.activeButtonText}>Undeliver</Text>
                    </TouchableOpacity>
                </View>
                }

            </View>
            }
        </SafeAreaView>
    );

}
const styles = StyleSheet.create({
    ...DeliveryDetailStyles,
})
export default DeliveryDetailsScreen;