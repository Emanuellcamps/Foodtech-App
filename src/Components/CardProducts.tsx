import { View,Image,Text,StyleSheet,TouchableOpacity} from 'react-native'
import { router } from 'expo-router'

type CardProductsProps = {
    image : string,
    title : string,
    description : string,
    value : number,
}

export default function CardProducts(props : CardProductsProps) {
    return (
    <TouchableOpacity style={styles.card} onPress={() => router.push('/customize')}>
        <Image source={{ uri: props.image }} style={styles.image} />
        <Text>{props.title}</Text>
        <Text style={styles.description}>{props.description}</Text>
        <Text>R$ {props.value}</Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
   card : {
    justifyContent : 'center',
    alignItems : 'center',
    paddingTop : 80,
    borderRadius : 10,
    backgroundColor : '#eee8e8',
    paddingBottom : 30,
    padding : 20,
    margin : 105,
   },

   description : {
    fontSize : 14,

   },
   image : {
    width : 140,
    height : 120,
    borderRadius : 10,
    marginTop : -60,
    
   },

})

