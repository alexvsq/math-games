import { View, Text } from "react-native";
import React from "react";

export default function minutes({ time = 0 }) {
  function timeToMinutes(time) {
    c;
  }
  return (
    <View className="bg-gray1 rounded-[10px] py-1 px-3 gap-2 flex-1">
      <View className="">
        <View>
          <Text className=" text-grayText text-xs">Time</Text>
        </View>
        <View className=" flex  items-end ">
          <Text className=" text-white text-2xl font-bold">
            {timeToMinutes(time)}
          </Text>
        </View>
      </View>
    </View>
  );
}
