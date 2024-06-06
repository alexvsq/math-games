import { View } from "react-native";

export default function grayDisplay({ children }) {
  return (
    <View className=" bg-gray1/60 blur-lg rounded-[10px]">{children}</View>
  );
}
