import { ScrollView, StyleSheet, View } from "react-native";
import CardProducts from "../components/CardProducts";

export default function Home() {
  return (
    <View style={styles.wrapper}>
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.container}
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
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#f5f1f1",
    justifyContent: "center", // 👈 distribui cima/baixo
    alignItems: "center",
    
  },

  container: {
    paddingHorizontal: 10,
    alignItems: "center",
    flexDirection: "column",
   
  },
});
