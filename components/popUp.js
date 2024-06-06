import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";

export default function PopUp() {
  return (
    <View style={styles.overlay}>
      <BlurView intensity={20} tint="default" style={styles.blurView}>
        <Text style={styles.text}>popUp</Text>
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
  },
  blurView: {
    width: 300,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});
