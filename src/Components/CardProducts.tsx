import { View,Image,Text,StyleSheet,TouchableOpacity} from 'react-native'
import { router } from 'expo-router'

type CardProductsProps = {
    image : string,
    title : string,
    description : string,
    value : number,
}

export default function CardProducts( props : CardProductsProps) {
    return (
    <TouchableOpacity style={styles.card} onPress={() => router.push('/customize')}>
        <Image source={{ uri: props.image }} style={styles.image} />
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description}>{props.description}</Text>
        <Text style={styles.value}>R$ {props.value}</Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
   card : {
    justifyContent : 'center',
    alignItems : 'center',
    paddingTop : 80,
    borderRadius : 10,
    backgroundColor : '#f9f7f7',
    paddingBottom : 30,
    padding : 2,
    margin : 105,
    shadowColor : '#000',
    shadowOffset : { width : 0, height : 2 },
    shadowOpacity : 0.25,
    elevation : 5,  
   },

   description : {
    fontSize : 14,
    marginRight : 31,
    marginTop : 1,
    right : 10,
},

    title : {
        fontWeight : 'bold',
        marginRight : 38,
        marginTop : 9,
        right : 10,
        
    },
   
    value : {
        paddingTop : 5,
        marginBottom : 8,
        justifyContent : 'flex-start',
        alignSelf : 'flex-start',
        position : 'absolute',
        top : 188,
        right : 110,
        

    },
   
   image : {
    width : 140,
    height : 120,
    borderRadius : 10,
    marginTop : -60,
    
   },

})

