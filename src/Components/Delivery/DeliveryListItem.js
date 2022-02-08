import React from 'react'
import {View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import {DeliveryListItemStyles} from '../../Styles/Delivery'

const DeliveryListItem = (props) =>{
    const {clientName, customerName, customerAddress, deliveryStatus, onPress} = props
    return(
        <TouchableOpacity 
            style = {styles.container}
            onPress={onPress}>
            <View style = {styles.descriptionContainer}>
                <Text style = {styles.name}>{clientName}</Text>
                <Text>{`Receiver name: ${customerName}`}</Text>
                <Text>{`Address: ${customerAddress}`}</Text>
            </View>
            <View style = {styles.statusContainer}>
                <Text style = {{color: deliveryStatus==='delivered'? '#33bb22':'#222', fontSize: 17, }}>{deliveryStatus}</Text>
            </View>
        </TouchableOpacity>
    );

}
const styles = StyleSheet.create({
    ...DeliveryListItemStyles,
})
export default DeliveryListItem;