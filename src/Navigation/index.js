import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { navigationRef } from './NavigationUtility';
import ListDeliveriesScreen from '../Screens/Delivery/ListDeliveriesScreen'
import DeliveryDetailsScreen from '../Screens/Delivery/DeliveryDetailsScreen'

const AppStack = createStackNavigator()

const Navigator = () => (
  <NavigationContainer ref={navigationRef}>
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AppStack.Screen name="ListDeliveriesScreen" component={ListDeliveriesScreen} />
      <AppStack.Screen name="DeliveryDetailsScreen" component={DeliveryDetailsScreen} />
    </AppStack.Navigator>
  </NavigationContainer>
)

export default Navigator