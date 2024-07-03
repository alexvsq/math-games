import { View, Text } from "react-native";
import React from "react";

export default function points({ Level = 1 }) {
  return (
    <View className="bg-gray1 rounded-[10px] py-1 px-3  flex-1">
      <View>
        <View>
          <Text className=" text-grayText text-xs">Level</Text>
        </View>
        <View className=" flex  items-end ">
          <Text className=" text-white text-2xl font-bold">{Level}</Text>
        </View>
      </View>
    </View>
  );
}
