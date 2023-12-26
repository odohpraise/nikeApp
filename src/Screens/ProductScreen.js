import { FlatList,View,Text,StyleSheet, Image , Pressable} from "react-native";
import { productSlice } from "../store/productSlice";
import { useNavigation } from "@react-navigation/native";
import {useSelector,useDispatch} from 'react-redux'

const ProductScreen = ({navigation}) => {
        const product  = useSelector((state) => state.products.products)

        const dispatch = useDispatch();

       


    return (
        <FlatList
         numColumns={2}
        data={product}
        renderItem={({item}) => (
            <Pressable onPress={() => {

                //UPDATE SELECTED PRODUCT
                dispatch(productSlice.actions.setSelectedProduct(item.id))

                navigation.navigate('Product Details')
            }} style={styles.itemContainer}>
                <Image style={styles.image}
                source={{uri : item.image}}/>
                </Pressable>
        )}         />
       
      
    );
};
 {/* render item returns view which is a container with the  image itself and we want this image to show 50% of the full screen */}

const styles = StyleSheet.create({
    image:{
        width:'100%',
        aspectRatio:1
    },
    itemContainer:{
        width:'50%',
        padding:1
    }
})

export default ProductScreen;