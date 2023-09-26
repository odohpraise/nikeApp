import { Pressable, Text, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CartScreen from './Screens/CartScreen'
import ProductDetailsSCreen from './Screens/ProductDetailsScreen'
import ProductScreen from './Screens/ProductScreen'
import {FontAwesome5} from '@expo/vector-icons'



const stack = createNativeStackNavigator()

const Navigator = () => {

  return (
      <NavigationContainer>
          <stack.Navigator screenOptions={{contentStyle: {backgroundColor: 'white'}}}>
              <stack.Screen name='Products' component={ProductScreen}
              options= {({navigation}) => ({
                headerRight: () => (
              <Pressable onPress = {() => navigation.navigate ('Cart')} style={{flexDirection:'row'}}>
                <FontAwesome5 name='shopping-cart' size={18} color="gray"/>
                <Text style={{fontWeight:'500',marginLeft:5}}>1</Text>
                </Pressable>
              ),  
              })}
              />
              <stack.Screen name='Product Details' component={ProductDetailsSCreen}
              options={{presentation:'modal'}}
              />
              <stack.Screen name='Cart' component={CartScreen}/>
         
          </stack.Navigator>
          
      </NavigationContainer>
  )
}
 
   
  export default Navigator;
