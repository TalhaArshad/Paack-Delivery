import React from 'react'
import {View, FlatList} from 'react-native'
import DeliveryListItem from './DeliveryListItem';
import * as Navigation from '../../Navigation/NavigationUtility';

const DeliveryList = ({deliveries, navigation}) => {

    const renderListItem = ({item}) => {
      return( 
      <DeliveryListItem 
          clientName = {item?.client}
          customerName = {item?.customer?.name}
          customerAddress = {item?.customer?.address}
          deliveryStatus = {item?.delivery?.status}
          onPress = {()=>{
            Navigation.navigate('DeliveryDetailsScreen', {id: item.id})
          }}
      />
      )
    }
    return(
      <FlatList
        showsVerticalScrollIndicator={false}
        data={deliveries}
        keyExtractor={(item, index) => `${index}`}
        renderItem={renderListItem}
      />
    );

}
export default DeliveryList;