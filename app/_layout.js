import { Slot, useLocalSearchParams } from "expo-router";
import { StyleSheet, ImageBackground, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import BackHeader from "../modules/headerBack";

export default function Layout() {
  if (Platform.OS === "android") {
    NavigationBar.setBackgroundColorAsync("#0b0b0b");
  }
  const bgImage = require("../assets/images/prueba3.png");

  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />
        <ImageBackground
          source={bgImage}
          style={styles.image}
          resizeMode="repeat"
        >
          <BackHeader />
          <Slot />
        </ImageBackground>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b0b0b",
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
    color: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "repeat",
    paddingHorizontal: 10,
  },
});
