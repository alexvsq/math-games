import { Text, View, Pressable } from "react-native";
import { router } from "expo-router";

export default function Index() {
  return (
    <View className="flex flex-1 justify-center">
      <View className="mb-4">
        <Text className="text-4xl font-bold text-white">Math</Text>
        <Text className="text-5xl font-black text-green">Games</Text>
      </View>
      <Pressable
        className=" bg-green py-3 rounded-lg flex items-center my-2"
        onPress={() => {
          router.push("/gamesList");
        }}
      >
        <Text className="text-lg font-bold text-black">New Game</Text>
      </Pressable>

      <Pressable
        className=" bg-gray1 py-3 rounded-lg flex items-center my-2"
        onPress={() => {
          router.push("/games/prueba");
        }}
      >
        <Text className="text-lg font-bold text-white">New Game</Text>
      </Pressable>
    </View>
  );
}
