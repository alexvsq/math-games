import { View, Text } from "react-native";

export default function grayDisplay({ children }) {
  return (
    <View className="bg-gray1/70 blur-lg rounded-[10px] flex justify-center items-center py-5 my-1">
      <Text className="text-white text-4xl font-extrabold">{children}</Text>
    </View>
  );
}
