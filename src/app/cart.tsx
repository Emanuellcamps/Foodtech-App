import {View,Text, FlatList,StyleSheet,TouchableOpacity, TextInput, Image} from "react-native";

import { router } from "expo-router";
import useCart from "../hooks/useCart";

export default function Cart() {
  const { getCart } = useCart();

  const cart = getCart();


  const title = cart?.title || "";
  const burgerPrice = cart?.price || 0;
  const parsedItems = cart?.customizations || {};
  const burgerImage = cart?.image;

  const cartItems = Object.entries(parsedItems).map(
    ([name, info]: any) => ({
      name,
      quantity: info.quantity,
      price: info.price,
      subtotal: info.quantity * info.price,
    })
  );

  const additionsTotal = cartItems.reduce(
    (acc, item) => acc + item.subtotal,
    0
  );

  const finalTotal = burgerPrice + additionsTotal;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>CARRINHO</Text>
      </View>

      <View style={styles.mainProduct}>
       <Image style={styles.mainImage} source={burgerImage}/>

        <View>
          <Text style={styles.mainTitle}>{title}</Text>

          <Text style={styles.mainPrice}>R$ {burgerPrice}</Text>
        </View>
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={cartItems}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <View style={styles.itemCard}>
              <Text style={styles.itemName}>
                {item.quantity}x {item.name}
              </Text>

              <Text style={styles.itemPrice}>
                R$ {item.subtotal.toFixed(2)}
              </Text>
            </View>
          )}
        />
      </View>

      <View style={styles.footer}>
        <Text style={styles.addressTitle}>
          INSIRA O ENDEREÇO DE ENTREGA
        </Text>

        <TextInput
          style={styles.configInput}
          placeholder="   Nome da rua e número"
        />

        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>TOTAL:</Text>
          <Text style={styles.totalValue}>
            R$ {finalTotal.toFixed(2)}
          </Text>
        </View>

        <TouchableOpacity style={styles.payButton} onPress={()=>router.push('/confirmPay')}>
          <Text style={styles.payText}>PAGAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ef2a39",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 55,
    paddingHorizontal: 20,
  },

  backButton: {
    color: "#fff",
    fontSize: 28,
    marginRight: 80,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },

  mainProduct: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    paddingHorizontal: 20,
  },

  mainImage: {
    width: 110,
    height: 110,
    backgroundColor: "#ff5a66",
    borderRadius: 20,
    marginRight: 18,
  },

  mainTitle: {
    color: "#fff",
    fontSize: 24,
    width: 150,
  },

  mainPrice: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 8,
  },

  listContainer: {
    flex: 1,
    marginTop: 25,
    marginBottom: 320,
  },

  itemCard: {
    backgroundColor: "#ff5a66",
    marginHorizontal: 20,
    marginBottom: 15,
    padding: 18,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  itemName: {
    color: "#fff",
    fontSize: 18,
  },

  itemPrice: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding: 25,
    minHeight: 300,
  },

  addressTitle: {
    color: "#999",
    fontSize: 16,
    marginBottom: 15,
  },

  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 35,
    top: -20,
  },

  totalLabel: {
    fontSize: 18,
    color: "#666",
  },

  totalValue: {
    fontSize: 32,
    fontWeight: "bold",
  },

  payButton: {
    backgroundColor: "#ef2a39",
    padding: 20,
    borderRadius: 18,
    alignItems: "center",
    marginTop: 30,
    top: -30,
  },

  payText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },

  configInput: {
    backgroundColor: "#ece7e7",
    borderRadius: 10,
    height: 60,
  },
});