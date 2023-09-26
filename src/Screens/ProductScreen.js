import { FlatList,View,Text,StyleSheet, Image , Pressable} from "react-native";
import product from "../data/product";
import { useNavigation } from "@react-navigation/native";


const ProductScreen = () => {
    const navigation =  useNavigation();


        const moveToDetails = () => {
            navigation.navigate('Product Details')
        }


    return (
        <FlatList
         numColumns={2}
        data={product}
        renderItem={({item}) => (
            <Pressable onPress={moveToDetails} style={styles.itemContainer}>
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