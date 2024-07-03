import { View, Text } from "react-native";
import { useEffect, useState } from "react";
import Card from "./headerInfoComponents/card";
import Level from "./headerInfoComponents/level";
import Minutes from "./headerInfoComponents/minutes";

export default function headerPoints({ level, points = 0, time = 0 }) {
  return (
    <View className=" flex flex-row  gap-2 ">
      <View style={{ flex: 1 }}>
        <Card />
      </View>
      <View style={{ flex: 1 }}>
        <Card />
      </View>
      <View style={{ flex: 1 }}>
        <Card />
      </View>
    </View>
  );
}
