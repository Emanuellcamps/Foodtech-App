import { FlatList, StyleSheet, View, Image, Text, ScrollView, TouchableOpacity,} from "react-native";
import CardCustomize from "../components/CardCustomize";
import SmallButton from "../components/SmallButton";
import { router, useLocalSearchParams } from "expo-router";
import useAmount from "../hooks/useAmount";
import useCart from "../hooks/useCart";

export default function Customize() {
  const { title, price , image } = useLocalSearchParams();
  const { addToCart } = useCart();
  const { selectedItems, increment, decrement } = useAmount();

  const listSauces = [
    {
      id: 1,
      image: require("../assets/image/sauces/ketchup.jpg"),
      description: "Ketchup",
      price: 1,
    },
    {
      id: 2,
      image: require("../assets/image/sauces/maionese.jpg"),
      description: "Maionese",
      price: 1,
    },
    {
      id: 3,
      image: require("../assets/image/sauces/cheddar.jpg"),
      description: "Cheddar",
      price: 2.5,
    },
    {
      id: 4,
      image: require("../assets/image/sauces/maioneseverde.jpg"),
      description: "M. Verde",
      price: 2,
    },
  ];

  const listAdditional = [
    {
      id: 1,
      image: require("../assets/image/additional/tomate.jpg"),
      description: "Tomate",
      price: 0.5,
    },
    {
      id: 2,
      image: require("../assets/image/additional/bacon.jpg"),
      description: "Bacon",
      price: 0.7,
    },
    {
      id: 3,
      image: require("../assets/image/additional/calabresa.jpg"),
      description: "Calabresa",
      price: 0.4,
    },
    {
      id: 4,
      image: require("../assets/image/additional/ovo.jpg"),
      description: "Ovo",
      price: 0.5,
    },
  ];

  const listComplements = [
    {
      id: 1,
      image: require("../assets/image/complements/batata.jpg"),
      description: "Batata",
      price: 3,
    },
    {
      id: 2,
      image: require("../assets/image/complements/queijo.jpg"),
      description: "Queijo",
      price: 3,
    },
    {
      id: 3,
      image: require("../assets/image/complements/aneldecebola.jpg"),
      description: "Onion",
      price: 2.5,
    },
    {
      id: 4,
      image: require("../assets/image/complements/esfirra.jpg"),
      description: "Esfirra",
      price: 3.2,
    },
  ];

  return (
    <ScrollView>
      <View style={styles.alignButtoBack}>
        <SmallButton
          image={require("../assets/icon/sair (1).png")}
          route="/home"
        />
      </View>

      <View style={{ flexDirection: "row" }}>
        <Image
          style={styles.imageBurguerDesmont}
          source={require("../assets/image/burguerdesmontado.png")}
        />
        <Text style={styles.textMensage}>
          Personalize o Hamburguer ao seu gosto
        </Text>
      </View>

      <View style={styles.listAdd}>
        <Text style={styles.textCategory}>Molhos</Text>

        <FlatList
          data={listSauces}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listStyle}
          renderItem={({ item }) => (
            <CardCustomize
              image={item.image}
              description={item.description}
              count={selectedItems[item.description]?.quantity || 0}
              increment={() => increment(item.description, item.price)}
              decrement={() => decrement(item.description)}
            />
          )}
        />

        <Text style={styles.textCategory}>Adicionais</Text>

        <FlatList
          data={listAdditional}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listStyle}
          renderItem={({ item }) => (
            <CardCustomize
              image={item.image}
              description={item.description}
              count={selectedItems[item.description]?.quantity || 0}
              increment={() => increment(item.description, item.price)}
              decrement={() => decrement(item.description)}
            />
          )}
        />

        <Text style={styles.textCategory}>Complementos</Text>

        <FlatList
          data={listComplements}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listStyle}
          renderItem={({ item }) => (
            <CardCustomize
              image={item.image}
              description={item.description}
              count={selectedItems[item.description]?.quantity || 0}
              increment={() => increment(item.description, item.price)}
              decrement={() => decrement(item.description)}
            />
          )}
        />
      </View>

     <TouchableOpacity style={styles.buttonContainer}onPress={() => {
      addToCart({
      title: String(title),
      price: Number(price),
      image: JSON.parse(String(image)),
      customizations: selectedItems,
    });
    router.push("/home");
  }}
>
  <Image
    style={styles.imageCart}
    source={require("../assets/icon/carrinho-de-compras (1).png")}
  />
     </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  listAdd: {
    marginTop: 210,
    padding: 15,
  },

  imageBurguerDesmont: {
    marginTop: 80,
    marginBottom: -370,
  },

  textMensage: {
    flexWrap: "wrap",
    width: 140,
    marginTop: 140,
    marginLeft: 29,
    fontSize: 20,
    padding: 3,
  },

  alignButtoBack: {
    alignItems: "flex-end",
    marginRight: 15,
    top: 50,
  },

  buttonContainer: {
    backgroundColor: "#ef2a39",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 330,
    borderRadius: 10,
    marginLeft: 25,
    marginTop: 60,
    marginBottom: 20,
  },

  imageCart: {
    height: 30,
    width: 30,
  },

  textCategory: {
    fontSize: 20,
    fontFamily: "serif",
    marginBottom: 15,
    marginTop: 25,
  },

  listStyle: {
    gap: 12,
    backgroundColor: "#ddd9d9",
    padding: 10,
    borderRadius: 10,
  },
});