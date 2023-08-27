import { View,Image,FlatList,StyleSheet, Text, ScrollView, Pressable } from "react-native";
import { useWindowDimensions } from "react-native";
import product from "../data/product";
import { Ionicons } from "@expo/vector-icons";
import Button from "../components/Button";

const ProductDetailsSCreen = () => {
    const Product = product[0];
    const {width} = useWindowDimensions();
    const addToCart = () =>{
        console.warn("added to cart....")
    }
    return(
        <View>
            
            <ScrollView>
            <FlatList
            data={Product.images}
            renderItem={({item}) => (
                <Image source={{uri : item }} style={{width, aspectRatio:1}}
                />      
            )}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            />
            

            <View style={{padding:20}}>
                <Text style={styles.name}>{Product.name}</Text>
                <Text style={styles.price}>${Product.price}</Text>
                <Text style={styles.description}>{Product.description}</Text>
            </View>
            </ScrollView>
 {/* Navigation icon */}
                <Pressable onPre style={styles.icon}>
                    <Ionicons name="close" size={24} color="white"/>
                </Pressable>

           <Button onpress={addToCart}> Add To Cart</Button>
       </View>
    );

}

const styles = StyleSheet.create({
    title: {
        fontSize: 34,
        fontWeight: "500",
        marginVertical: 10,
      },
      price: {
        fontWeight: "500",
        fontSize: 16,
    letterSpacing:1.5
      },
      description: {
        marginVertical: 10,
        fontSize: 16,
        lineHeight: 25,
        fontWeight: "300",
      },
      button:{
        width:'80%',
        backgroundColor:'black',
        opacity:0.68,
        position:'absolute',
        bottom:30,
        alignSelf:'center',
        padding:10,
        borderRadius:30
        
      },
      buttonText: {
        color:'white',
        fontSize:16,
        textAlign:"center"
      },
      icon:{
        position: "absolute",
        top: 40,
        right: 20,
        backgroundColor: "#000000AA",
        borderRadius: 50,
        padding: 5,
      }
})

export default ProductDetailsSCreen;