import { StyleSheet, Text, View } from 'react-native'

export default function LoginScreen() {
  return (
    <View>
        <Text style={styles.nameLogin}>Login</Text>
        <Text> Faça login na sua conta existente </Text>
        <Text> Resolução de bugs </Text>
    </View>
 )
}

const styles = StyleSheet.create({
  nameLogin: {
    fontSize: 36,
    color: '#fb0101',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: '#ffffff',
  }
})