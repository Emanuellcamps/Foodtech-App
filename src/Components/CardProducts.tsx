import { View,Image,Text,StyleSheet,TouchableOpacity} from 'react-native'
import { router } from 'expo-router'

type CardProductsProps = {
    image : string,
    title : string,
    description : string,
    price : number,
}

export default function CardProducts( props : CardProductsProps) {
    return (
    <TouchableOpacity style={styles.card} onPress={() => router.push({ 
      pathname : "/customize",    // nome do arquivo da rota
      params : {                  // envio dados paralelamente ao direcionamento da rota
        title : props.title,      //title nomea a informação que será passada,enquanto props.title é a informação
        image : props.image,
        description : props.description,
        price : props.price.toString(),      // toString converte valores para Strings,parametros de rota normalmente sao Strings
      }
      }
      )}>
        <Image style={styles.image} source={{ uri: props.image }}  />
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description}>{props.description}</Text>
        <Text style={styles.price}>R$ {props.price}</Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  card: {
    width: 160, 
    height : 184,
    borderRadius: 10,
    backgroundColor: '#f9f7f7',
    padding: 10,
    marginRight: 25,
    marginBottom : 20,
    justifyContent : "center",
    alignItems : 'flex-start',
    

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    elevation: 5,
  },

  image: {
    width: '100%',
    height: 100 ,
    borderRadius: 10,
  },

  title: {
    fontWeight: 'bold',
    marginTop: 8,
  },

  description: {
    fontSize: 12,
    color: '#555',
  },

  price: {
    marginTop: 5,
    fontWeight: 'bold',
  },
});