import { View, Pressable } from "react-native";
import { Image } from "expo-image";

export default function BackButton({ action }) {
  return (
    <Pressable onPress={() => action()}>
      <View className=" bg-black p-2 border-solid border-[1px] border-grayLines rounded-[10px]">
        <Image
          className="w-[23px] h-[23px] rotate"
          source={require("../assets/images/arrow-green.png")}
          placeholder={"triangle"}
          contentFit="contain"
        />
      </View>
    </Pressable>
  );
}
