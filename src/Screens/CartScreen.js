import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import cart from '../data/cart'
import CartListItem from '../components/CartList'
import Button from '../components/Button'

const shoppingCartTotal = () => (  <View style={styles.cartPriceContainer}>
<View style={styles.cartPriceRow}>
    <Text style={styles.text}>Subtotal</Text>
    <Text style={styles.text}>320 US$</Text>
</View>
<View style={styles.cartPriceRow}>
    <Text style={styles.text} >Delivery</Text>
    <Text style={styles.text}>100 US$</Text>
</View>
<View style={styles.cartPriceRow}>
    <Text style={styles.text}>Total</Text>
    <Text style={styles.textBold}>420 US$</Text>
</View>
</View>
)

export default class CartScreen extends Component {
  render() {
    return (
        <>
     <FlatList data={cart} renderItem={({item}) => (
        <CartListItem cartItem={item}/>
     )}
     ListFooterComponent={shoppingCartTotal}
     
     />
     <Button>Checkout</Button>
     </>
    )
  }
}

const styles = StyleSheet.create({
    cartPriceContainer:{
        padding:10,
        margin:20,
        borderTopWidth:1,
        borderColor: 'gainsboro'
    },
    cartPriceRow:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:2
    },
    textBold: {
        fontSize : 16,
        fontWeight: '500'
    },
    text: {
        fontSize: 16,
        color:'gray'
    }
})