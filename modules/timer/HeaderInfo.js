import { View, Text } from "react-native";
import { useEffect, useState } from "react";
import Minutes from "./minutes";
import Level from "./level";
import Points from "./points";

export default function HeaderInfo({ level = 0, points = 0 }) {
  return (
    <View className="flex flex-row gap-3">
      <View style={{ flex: 1 }}>
        <Level content={level} />
      </View>
      <View style={{ flex: 1 }}>
        <Points points={Date.now()} />
      </View>
      <View style={{ flex: 1 }}>
        <Minutes />
      </View>
    </View>
  );
}
