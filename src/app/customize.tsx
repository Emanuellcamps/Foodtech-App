import {View,Text,StyleSheet} from 'react-native'
import CardCustomize from '../components/CardCustomie';

export default function Customize() {
    return (
        <View style = {styles.container}>
            <CardCustomize image={require('../assets/image/pexels-steve-house-22993839-14920999.jpg')} description='Tomate'/>
        </View>
    )
}

const styles = StyleSheet.create({
 container : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
 },

})