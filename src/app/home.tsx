import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import CardProducts from "../components/CardProducts";

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <View style={{ flex: 1 }}>
      {/* 🔝 HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Food App</Text>

        <TextInput
          placeholder="Pesquisar..."
          value={search}
          onChangeText={setSearch}
          style={styles.input}
        />
      </View>

      {/* 📱 CONTEÚDO (SEU CÓDIGO) */}
      <View style={styles.wrapper}>
        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.container}
            style={styles.scroll}
          >
            <CardProducts
              image="https://images.pexels.com/photos/23910856/pexels-photo-23910856.jpeg"
              title="Cheese Burger"
              description="Wendy´s Burger"
              value={19.99}
            />
            <CardProducts
              image="https://images.pexels.com/photos/23910856/pexels-photo-23910856.jpeg"
              title="Hamburger"
              description="Veggie Burger"
              value={13.6}
            />
            <CardProducts
              image="https://images.pexels.com/photos/23910856/pexels-photo-23910856.jpeg"
              title="Hamburger"
              description="Chicken Burger"
              value={18.0}
            />
            <CardProducts
              image="https://images.pexels.com/photos/23910856/pexels-photo-23910856.jpeg"
              title="Hamburger"
              description="Fried Chicken Burger"
              value={19.5}
            />
          </ScrollView>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.container}
            style={styles.scroll}
          >
            <CardProducts
              image="https://images.pexels.com/photos/23910856/pexels-photo-23910856.jpeg"
              title="Cheese Burger"
              description="Wendy´s Burger"
              value={19.99}
            />
            <CardProducts
              image="https://images.pexels.com/photos/23910856/pexels-photo-23910856.jpeg"
              title="Hamburger"
              description="Veggie Burger"
              value={13.6}
            />
            <CardProducts
              image="https://images.pexels.com/photos/23910856/pexels-photo-23910856.jpeg"
              title="Hamburger"
              description="Chicken Burger"
              value={18.0}
            />
            <CardProducts
              image="https://images.pexels.com/photos/23910856/pexels-photo-23910856.jpeg"
              title="Hamburger"
              description="Fried Chicken Burger"
              value={19.5}
            />
          </ScrollView>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.container}
            style={styles.scroll}
          >
            <CardProducts
              image="https://images.pexels.com/photos/23910856/pexels-photo-23910856.jpeg"
              title="Cheese Burger"
              description="Wendy´s Burger"
              value={19.99}
            />
            <CardProducts
              image="https://images.pexels.com/photos/23910856/pexels-photo-23910856.jpeg"
              title="Hamburger"
              description="Veggie Burger"
              value={13.6}
            />
            <CardProducts
              image="https://images.pexels.com/photos/23910856/pexels-photo-23910856.jpeg"
              title="Hamburger"
              description="Chicken Burger"
              value={18.0}
            />
            <CardProducts
              image="https://images.pexels.com/photos/23910856/pexels-photo-23910856.jpeg"
              title="Hamburger"
              description="Fried Chicken Burger"
              value={19.5}
            />
          </ScrollView>
        </View>
      </View>

      {/* 🔻 FOOTER */}
      <View style={styles.footer}>
        <Text>Home</Text>
        <Text>Pedidos</Text>
        <Text>Perfil</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 300,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },

  headerText: {
    color: "#fff",
    fontSize: 18,
  },

  input: {
    width: "90%",
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 8,
  },

  wrapper: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "stretch",
  },

  scroll: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginBottom: 10,
  },

  container: {
    paddingHorizontal: 10,
    alignItems: "center",
  },

  footer: {
    height: 60,
    backgroundColor: "#ee3333",
    borderTopWidth: 1,
    borderTopColor: "#f10303",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
