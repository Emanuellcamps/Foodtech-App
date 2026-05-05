import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#f5f1f1",
    justifyContent: "center", // 👈 distribui cima/baixo
    alignItems: "centspace-evenler", // 👈 centraliza horizontal
  },

  container: {
    paddingHorizontal: 10,
    alignItems: "center",
  },
});
