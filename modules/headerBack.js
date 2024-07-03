import { View, Text } from "react-native";
import BackBtn from "../components/backButton";
import { useNavigation, useGlobalSearchParams } from "expo-router";
import { useEffect } from "react";

export default function headerBack({ action }) {
  const navigation = useNavigation();
  // const obj = useGlobalSearchParams()

  useEffect(() => {
    // console.log(obj);
  }, [useGlobalSearchParams()]);

  if (!navigation.canGoBack()) return null;

  return (
    <View className="flex flex-row items-center mt-2 mb-3 ">
      <BackBtn action={() => navigation.goBack()} />
    </View>
  );
}
