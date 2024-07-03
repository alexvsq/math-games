import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";
import { Image } from "expo-image";

export default function cardGame() {
  const name = "timer";
  return (
    <>
      <View className=" flex flex-row items-center justify-between py-3 px-2">
        <View className=" flex flex-row items-center">
          <View className=" w-[42px] h-[42px] mx-2 flex items-center justify-center bg-green rounded-full">
            <Image
              className="w-[26px] h-[26px]"
              source={require("../assets/images/timer.png")}
              contentFit="contain"
            />
          </View>
          <View className="mx-2">
            <Text className=" text-green text-[10px] leading-none">Timer</Text>
            <Text className=" text-white text-xl font-bold">Timer</Text>
            <Text className=" text-grayText text-[10px] leading-none">Pt. 500</Text>
          </View>
        </View>
        <Pressable
          className=" bg-green px-8 py-1 rounded-full"
          onPress={() => router.replace("/gamePopUp/start/" + name)}
        >
          <Text className=" font-bold">Play</Text>
        </Pressable>
      </View>
      <View className="h-[1px] mx-3 bg-grayLines"></View>
    </>
  );
}
