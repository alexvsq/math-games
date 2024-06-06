import { View, Text } from "react-native";

function headerPoint() {
  return (
    <View className="flex flex-row justify-between gap-2 my-1">
      <View className="bg-gray1 blur-lg rounded-[10px] flex-1 py-1 px-3">
        <View>
          <Text className=" text-grayText text-xs">Level</Text>
        </View>
        <View className=" flex  items-end ">
          <Text className=" text-white text-2xl font-bold">1</Text>
        </View>
      </View>
    </View>
  );
}

export default function headerPoints() {
  return (
    <View className=" flex flex-row justify-between gap-2 my-1">
      <View className="bg-gray1 blur-lg rounded-[10px] flex-1 py-1 px-3">
        <View>
          <Text className=" text-grayText text-xs">Level</Text>
        </View>
        <View className=" flex  items-end ">
          <Text className=" text-white text-2xl font-bold">1</Text>
        </View>
      </View>

      <View className="bg-gray1 blur-lg rounded-[10px] flex-1 py-1 px-3">
        <View>
          <Text className=" text-grayText text-xs">Puntaje</Text>
        </View>
        <View className=" flex  items-end ">
          <Text className=" text-white text-2xl font-bold">2500</Text>
        </View>
      </View>

      <View className="bg-gray1 blur-lg rounded-[10px] flex-1 py-1 px-3">
        <View>
          <Text className=" text-grayText text-xs">Time</Text>
        </View>
        <View className=" flex  items-end ">
          <Text className=" text-white text-2xl font-bold">1:30</Text>
        </View>
      </View>
    </View>
  );
}
