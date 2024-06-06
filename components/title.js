import { View, Text } from "react-native";
import { Image } from "expo-image";

export default function title() {
  return (
    <View className="flex flex-row justify-center items-center gap-5 mb-6">
      <Image
        className="w-[26px] h-[26px]"
        source={require("../assets/images/triangle.png")}
        placeholder={"triangle"}
        contentFit="contain"
      />
      <Text className="text-3xl font-bold text-white">Games</Text>
      <Image
        className="w-[26px] h-[26px] rotate-180"
        source={require("../assets/images/triangle.png")}
        placeholder={"triangle"}
        contentFit="contain"
      />
    </View>
  );
}
