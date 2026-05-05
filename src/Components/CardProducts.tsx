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
  card: {
    width: 160, // 👈 ESSENCIAL
    borderRadius: 10,
    backgroundColor: '#f9f7f7',
    padding: 10,
    marginRight: 10, // 👈 espaço entre cards

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    elevation: 5,
  },

  image: {
    width: '100%',
    height: 100,
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

  value: {
    marginTop: 5,
    fontWeight: 'bold',
  },
});