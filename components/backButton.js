import { View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { router } from "expo-router";

export default function BackButton() {
  return (
    <View className="flex flex-row items-center my-2">
      <Pressable onPress={() => router.back()}>
        <View className=" bg-black p-2 border-solid border-[1px] border-grayLines rounded-[10px]">
          <Image
            className="w-[23px] h-[23px] rotate"
            source={require("../assets/images/arrow.png")}
            placeholder={"triangle"}
            contentFit="contain"
          />
        </View>
      </Pressable>
    </View>
  );
}
