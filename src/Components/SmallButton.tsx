import { router } from 'expo-router';
import { Image, ImageSourcePropType, StyleSheet, TouchableOpacity, View } from 'react-native';

type SmallButtonProps = {
    image : ImageSourcePropType,
    route : any,
}

export default function SmallButton ( props : SmallButtonProps ) {
return (
   <View>  
     <TouchableOpacity style= {styles.cardButton} onPress={()=> router.push(props.route)}>
       <Image style={styles.imageCard} source={props.image} />
     </TouchableOpacity>
   </View>
)

}

const styles = StyleSheet.create ({
 cardButton : {
  backgroundColor : "#ef2a39",
  height : 46,
  width : 49,
  borderRadius : 10,
  justifyContent : "center",
  alignItems : 'center',
  

 },

 imageCard : {
  height : 25,
  width : 25,
  marginBottom : 7,
  marginRight : 3,
  
 },

})