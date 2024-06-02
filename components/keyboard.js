import { View, Text, Pressable, Dimensions } from "react-native";
import { Image } from "expo-image";

export default function Keyboard({ input, setInput, enter }) {
  const { width } = Dimensions.get("window");
  const widthButton = Math.floor(width / 4 - 12);

  const buttons = [
    "1",
    "2",
    "3",
    "0",
    "4",
    "5",
    "6",
    "enter",
    "7",
    "8",
    "9",
    "del",
  ];

  return (
    <>
      <View className="bg-gray1 rounded-[10px] flex-row flex-wrap p-1 mb-2">
        {buttons.map((button, index) =>
          button === "del" ? (
            <Pressable
              onPress={() => setInput(input.slice(0, -1))}
              key={index}
              style={{ width: widthButton }}
              className=" bg-black m-[2px] rounded-[10px] h-[62px] flex justify-center items-center"
            >
              <Image
                className="w-[30px] h-[30px]"
                source={require("../assets/images/del.png")}
                contentFit="contain"
              />
            </Pressable>
          ) : button === "enter" ? (
            <Pressable
              onPress={() => enter()}
              key={index}
              style={{ width: widthButton }}
              className=" bg-black m-[2px] rounded-[10px] h-[62px] flex justify-center items-center"
            >
              <Image
                className="w-[30px] h-[30px]"
                source={require("../assets/images/check.png")}
                contentFit="contain"
              />
            </Pressable>
          ) : (
            <Pressable
              onPress={() => setInput(input + button)}
              key={index}
              style={{ width: widthButton }}
              className=" bg-black m-[2px] rounded-[10px] h-[62px] flex justify-center items-center"
            >
              <Text className=" text-white text-2xl font-bold">{button}</Text>
            </Pressable>
          )
        )}
      </View>
    </>
  );
}
