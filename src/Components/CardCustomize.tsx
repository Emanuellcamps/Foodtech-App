import { Image, ImageSourcePropType, Text, View , StyleSheet, TouchableOpacity} from 'react-native';
import useAmount from '../hooks/useAmount'

type CardCustomizeProps = {
   image: ImageSourcePropType,
   description: string,
   count: number,
   increment: () => void,
   decrement: () => void
}

export default function CardCustomize ( props : CardCustomizeProps ) { 
 
return (
  
    <View>

         <View style = {styles.productCard}>
           <Image style= {styles.imageProduct} source={props.image}/>
           <Text style = {styles.textProduct}>{props.description}</Text>

           <View style = {styles.amount}>
            <TouchableOpacity style = {styles.smallButton} onPress={props.increment}><Image style = {styles.imageButton} source={require('../assets/icon/mais.png')}/></TouchableOpacity>
            <Text style = {styles.textAmount}>{props.count}</Text>
            <TouchableOpacity style = {styles.smallButton} onPress={props.decrement}><Image style = {styles.imageButton} source={require('../assets/icon/excluir.png')}/></TouchableOpacity>
           </View>

         </View>

    </View>

)

}

const styles = StyleSheet.create ({

 productCard : {
    height : 120,
    width : 90,
    justifyContent : 'center',
    alignItems : 'center',
    borderRadius : 17,
    backgroundColor : '#000000',
 },
 imageProduct : {
    marginBottom : 5,
    width : 65,
    height : 50,
    borderRadius : 10,
 },
 textProduct : {
    color : '#ffff',
    marginRight : 1,
    marginBottom : 5,
    
 },
 amount : {
   flexDirection : 'row',
   justifyContent : 'center',
   alignItems : 'center',
   width : '100%',
 },
 smallButton : {
   height : 40,
   width : 40,
   marginLeft : 13,
   marginRight : -6,
   marginBottom : -25,
 },
 imageButton : {
  height: '50%',
  width : '50%',
 },
 textAmount : {
 color : '#ffff',
 marginBottom : -7,
 },

})