import { View, Text } from "react-native";
import GrayDisplay from "../../components/grayDisplay";

export default function display({ inputKeyboard, problem }) {
  return (
    <View>
      <GrayDisplay>
        {problem.equation} ={" "}
        <Text className="text-green">{inputKeyboard || "X"}</Text>
      </GrayDisplay>
    </View>
  );
}
