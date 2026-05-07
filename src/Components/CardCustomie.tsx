import { Image, ImageSourcePropType, Text, View , StyleSheet, TouchableOpacity} from 'react-native';

type CardCustomizeProps = {
    image : ImageSourcePropType,
    description : string,
}

export default function CardCustomize ( props : CardCustomizeProps ) {
return (
    <View>

         <View style = {styles.productCard}>
           <Image style= {styles.imageProduct} source={props.image}/>
           <Text style = {styles.textProduct}>{props.description}</Text>

           <View>
            <TouchableOpacity> </TouchableOpacity>
            <Text></Text>
            <TouchableOpacity></TouchableOpacity>
           </View>

         </View>

    </View>

)

}

const styles = StyleSheet.create ({

 productCard : {
    height : 110,
    width : 90,
    justifyContent : 'center',
    alignItems : 'center',
    borderRadius : 17,
    backgroundColor : '#f01717',
 },
 imageProduct : {
    marginBottom : 5,
    width : 65,
    height : 50,
    borderRadius : 10,
 },
 textProduct : {
    color : '#ffff',
 },

})