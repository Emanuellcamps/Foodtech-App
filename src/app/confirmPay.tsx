import { router } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function PaymentSuccessfull() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/845/845646.png",
          }}
          style={styles.image}
        />

        <Text style={styles.title}>PARABÉNS!!!</Text>

        <Text style={styles.subtitle}>
          Você efetuou o pagamento com sucesso.
          {"\n"}
          Aproveite nosso serviço!
        </Text>

        <TouchableOpacity style={styles.button} onPress={()=> router.push('/home')}>
          <Text style={styles.buttonText}>VOLTAR PARA O INÍCIO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: "95%",
    height: "95%",
    backgroundColor: "#F2F2F2",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 80,
  },

  image: {
    width: 140,
    height: 140,
    marginTop: 80,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1E1E1E",
    marginTop: -50,
  },

  subtitle: {
    fontSize: 18,
    color: "#9CA3AF",
    textAlign: "center",
    marginTop: -90,
  },

  button: {
    width: "90%",
    backgroundColor: "#FF2336",
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});