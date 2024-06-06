import { View, Text, Pressable } from "react-native";
import { useLocalSearchParams } from "expo-router";
import BackButton from "../../../components/backButton";
import { router } from "expo-router";

export default function game() {
  const { game } = useLocalSearchParams();

  return (
    <View className="flex-1">
      <BackButton />

      <View className="flex-1 justify-center items-center">
        <View className=" bg-gray1 rounded-[10px] w-full px-2">
          <Text className=" text-white text-3xl text-center font-bold mt-3 mb-2">
            {game}
          </Text>

          <Text className=" text-grayText text-center my-1 text-sm">
            Lorem ipsum dolor sit amet consectetur adipiscing elit justo
            volutpat, vehicula nascetur neque torquent per ridiculus quis at,
            fusce porta odio lectus sociosqu aenean semper quisque.
          </Text>

          <View className=" flex flex-row justify-between px-1 my-3">
            <View>
              <Text className="text-green text-center text-xs">
                Ultimo Puntaje
              </Text>
              <Text className="text-white text-center text-xl font-bold">
                1500
              </Text>
            </View>
            <View className=" w-[1px] h-full bg-grayLines"></View>
            <View>
              <Text className="text-green text-center text-xs">Duración</Text>
              <Text className="text-white text-center text-xl font-bold">
                1:20
              </Text>
            </View>
            <View className=" w-[1px] h-full bg-grayLines"></View>
            <View>
              <Text className="text-green text-center text-xs">
                Maximo Puntaje
              </Text>
              <Text className="text-white text-center text-xl font-bold">
                2500
              </Text>
            </View>
          </View>

          <Pressable
            className=" bg-green py-3 rounded-lg flex items-center my-2"
            onPress={() => {
              router.navigate("/games/timer");
            }}
          >
            <Text className="text-lg font-bold text-black">Start</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
