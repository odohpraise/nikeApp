import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, FlatList} from 'react-native';
import ProductScreen from './src/Screens/ProductScreen';
import ProductDetailsSCreen from './src/Screens/ProductDetailsScreen';
import CartScreen from './src/Screens/CartScreen';

export default function App() {
  return (
    <View style={styles.container}>
      
       {/* <ProductScreen/> */}
        
        {/* <ProductDetailsSCreen/> */}

        <CartScreen/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
  
});
