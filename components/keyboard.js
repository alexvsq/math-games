import { View, Text, Pressable, Dimensions, StyleSheet } from "react-native";
import { Image } from "expo-image";

export default function Keyboard({ action }) {
  const { width } = Dimensions.get("window");
  const widthButton = (Math.floor(width) - 28) / 3;

  const buttons = [
    { id: "1", class: "number", value: "1" },
    { id: "2", class: "number", value: "2" },
    { id: "3", class: "number", value: "3" },
    { id: "4", class: "number", value: "4" },
    { id: "5", class: "number", value: "5" },
    { id: "6", class: "number", value: "6" },
    { id: "7", class: "number", value: "7" },
    { id: "8", class: "number", value: "8" },
    { id: "9", class: "number", value: "9" },
    { id: "delete", class: "function", value: "../assets/images/del.png" },
    { id: "0", class: "number", value: "0" },
    { id: "enter", class: "function", value: "../assets/images/check.png" },
  ];

  return (
    <>
      <View className="bg-gray1 rounded-[16px] flex-row flex-wrap mb-2 p-1">
        {buttons.map((x) => {
          return x.id === "enter" ? (
            <Pressable
              key={x.id}
              onPress={() => action(x)}
              style={{ width: widthButton }}
              className="p-[2px]"
            >
              <View className=" bg-black  rounded-[12px] h-[58px] flex justify-center items-center">

                <Image
                  className="w-[30px] h-[30px]"
                  source={require("../assets/images/check.png")}
                  contentFit="contain"
                />
              </View>
            </Pressable>
          ) : x.id === "delete" ? (
            <Pressable
              key={x.id}
              onPress={() => action(x)}
              style={{ width: widthButton }}
              className=" p-[2px]"
            >
              <View className=" bg-black  rounded-[12px] h-[58px] flex justify-center items-center">

                <Image
                  className="w-[30px] h-[30px]"
                  source={require("../assets/images/del.png")}
                  contentFit="contain"
                />
              </View>
            </Pressable>
          ) : (
            <Pressable
              key={x.id}
              onPress={() => action(x)}
              style={{ width: widthButton }}
              className=" p-[1.5px]"
            >
              <View className="bg-black rounded-[12px] h-[58px] flex justify-center items-center">
                <Text className="text-white text-[22px] font-bold">{x.value}</Text>
              </View>
            </Pressable>
          );
        })}
      </View>
    </>
  );
}
