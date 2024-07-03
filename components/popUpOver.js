import { View, Text, Pressable } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import secondsToMinutes from "../controllers/secondsToMinutes";

function Side({ title, content }) {
  return (
    <View className="flex-1 flex justify-center items-center">
      <Text className="text-green text-center text-xs">
        {title}
      </Text>
      <Text className="text-white text-center text-lg font-bold">
        {content}
      </Text>
    </View>
  )
}

export default function PopUp({ title, description, userInfo = {} }) {

  return (
    <View className="flex-1 flex justify-center items-center  ">

      <View className=" bg-gray1 rounded-[10px] w-full px-2 border-[1px] border-grayLines mb-14">
        <Text className=" text-white text-2xl text-center font-extrabold mb-4 mt-8  capitalize">
          {title}
        </Text>


        <View className=" flex flex-row justify-between px-1 mt-2 mb-1">

          <Side title="Puntaje" content={userInfo.points ?? "00"} />

          <View className=" w-[1px] h-full bg-grayLines"></View>

          <Side title="Duración" content={userInfo.duration ? secondsToMinutes(userInfo.duration) : "00:00"} />

          <View className=" w-[1px] h-full bg-grayLines"></View>

          <Side title="Level" content={userInfo.level ?? "00"} />

        </View>

        <Pressable
          className=" bg-green py-2 rounded-lg flex items-center my-3"
          onPress={() => {
            router.navigate("/games/timer");
          }}
        >
          <Text className="text-lg font-bold text-black">Restart</Text>
        </Pressable>
      </View>

    </View>
  );
}
