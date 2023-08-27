import { Text, View,StyleSheet,Pressable } from 'react-native'

function Button({onpress, children}) {
  
    return ( 
      <View>
        <Pressable onPress={onpress} style={({pressed}) => pressed ? [style.button, style.pressed] : style.button }>
        <Text style={style.buttonText}>
            {children}
        </Text>
        </Pressable>
      </View>
    )
  
}

const style = StyleSheet.create({
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
      pressed:{
        opacity: 0.5
      }
})


export default Button;