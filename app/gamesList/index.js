import { View, Text, Pressable, ScrollView } from "react-native";
import CardGame from "../../components/cardGame";
import Title from "../../components/title";

export default function index() {
  return (
    <View className="flex-1 ">
      <Title />
      <ScrollView className=" flex-1 bg-gray1 rounded-[10px] my-2">
        <CardGame />
        <CardGame />
        <CardGame />
        <CardGame />
        <CardGame />
        <CardGame />
        <CardGame />
        <CardGame />
        <CardGame />
        <CardGame />
        <CardGame />
        <CardGame />
        <CardGame />
      </ScrollView>
    </View>
  );
}
