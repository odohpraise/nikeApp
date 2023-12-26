import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, FlatList} from 'react-native';
import Navigator from './src/Navigator';
import { Provider } from 'react-redux';
import { store } from './src/store';

export default function App() {
  return (
    <Provider store={store}>

   
    <View style={styles.container}>
      
        <Navigator/>

      <StatusBar style="auto" />
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
   
  },
  
});
