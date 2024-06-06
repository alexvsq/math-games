import { View, Text } from "react-native";
import BackButton from "../../../components/backButton";
import Keyboard from "../../../components/keyboard";
import { useState, useEffect } from "react";
import { randomEquation } from "../../../logic/randomEquation";
import BarTimer from "../../../components/barTimer";
import { router } from "expo-router";
import HeaderPoints from "../../../components/headerPoints";

export default function index() {
  const [equation, setEquation] = useState("");
  const [answer, setAnswer] = useState(0);
  const [input, setInput] = useState("");
  const [level, setLevel] = useState(5);
  const [time, setTime] = useState(100);

  function checkAnswer() {
    if (input === answer.toString()) {
      setLevel(level + 1);
      newOperation();
      setInput("");
      console.log(level);
    }
  }

  function newOperation() {
    const { equation, result } = randomEquation(level, level, "easy");
    setEquation(equation);
    setAnswer(result);
  }

  useEffect(() => {
    setTime(100);
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval);
          router.back();
          // return 0;
        }
        return prevTime - 0.5;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [level]);

  useEffect(() => {
    newOperation();
  }, []);

  return (
    <View className="flex flex-1">
      <BackButton />
      <HeaderPoints />
      <View className="flex flex-1 justify-center ">
        <View className="bg-gray1/60 blur-lg rounded-[10px] flex justify-center items-center ">
          <Text className="text-white text-4xl font-bold my-5">
            {equation} ={" "}
            <Text className="text-green">{input === "" ? "X" : input}</Text>
          </Text>
        </View>
        <BarTimer size={time} />
      </View>
      <Keyboard input={input} setInput={setInput} enter={checkAnswer} />
    </View>
  );
}
