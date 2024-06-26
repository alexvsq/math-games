import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";
import { Image } from "expo-image";

export default function cardGame() {
  const name = "timer";
  return (
    <>
      <View className=" flex flex-row items-center justify-between py-3 px-3">
        <View className=" flex flex-row items-center gap-3">
          <View className=" w-[50px] h-[50px] flex items-center justify-center bg-green rounded-full">
            <Image
              className="w-[30px] h-[30px]"
              source={require("../assets/images/timer.png")}
              contentFit="contain"
            />
          </View>
          <View>
            <Text className=" text-green text-xs">Timer</Text>
            <Text className=" text-white text-lg font-bold">Timer</Text>
            <Text className=" text-grayText text-xs">Pt. 500</Text>
          </View>
        </View>
        <Pressable
          className=" bg-green px-8 py-1 rounded-full"
          onPress={() => router.replace("/gamesList/gamePopUp/" + name)}
        >
          <Text className=" font-bold">Play</Text>
        </Pressable>
      </View>
      <View className="h-[1px] w-full bg-grayLines"></View>
    </>
  );
}
