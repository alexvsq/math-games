import { View, Text } from "react-native";
import React from "react";

export default function barTimer({ size }) {
  return (
    <View className="my-4">
      <View className="flex bg-gray1 h-[20px] rounded-full p-1">
        <View
          style={{ width: `${size}%` }}
          className="bg-green h-full rounded-full"
        />
      </View>
    </View>
  );
}
