import { View, Text } from "react-native";
import BackButton from "../../../components/backButton";
import Keyboard from "../../../components/keyboard";
import { useState, useEffect } from "react";
import { randomEquation } from "../../../logic/randomEquation";

export default function index() {
  const [value, setValue] = useState("X");
  const [equation, setEquation] = useState("");
  const [answer, setAnswer] = useState(0);

  useEffect(() => {
    const { equation, result } = randomEquation(19, 5);
    setEquation(equation);
    setAnswer(result);
    setValue(result);
  }, []);

  return (
    <View className="flex flex-1">
      <BackButton />

      <View className="flex flex-1 justify-center ">
        <View className=" bg-gray1/60 blur-lg rounded-[10px] flex justify-center items-center ">
          <Text className="text-white text-4xl font-bold my-5">
            {equation} = <Text className="text-green">{value}</Text>
          </Text>
        </View>
      </View>
      <Keyboard />
    </View>
  );
}
