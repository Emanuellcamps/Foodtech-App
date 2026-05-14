import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type buttonProps = {
    text: string,
    route : any,
}

export default function Button(props: buttonProps) {
    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={() => { router.push(props.route) }}>
                <Text style={styles.buttonText}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button : {
    backgroundColor : '#ef2a39',
    borderRadius : 5,
    marginRight : 20,
    marginLeft : 20,
    paddingTop : 15,
    paddingBottom : 15,
    marginTop : 34,
   
  },
  buttonText : {
   color : '#ffffff',
   fontFamily : 'monospace',
    textAlign : 'center',
  },

}) 