import { View } from "react-native";

export default function barTimer({ sizeBar = 100 }) {
  return (
    <View className="my-2">
      <View className="flex bg-gray1 h-[16px] rounded-full p-1 border-solid border-[1px] border-grayLines">
        <View
          // style={{ width: `${sizeBar}%` }}
          style={{ width: `${sizeBar}%` }}
          className="bg-green h-full rounded-full"
        />
      </View>
    </View>
  );
}
