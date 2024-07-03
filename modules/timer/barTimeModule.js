import { View } from "react-native";
import Bar from "../../components/barTimer";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";

export default function BarTimeModule({ restart, gameOverSave }) {
  const [sizeBar, setSizeBar] = useState(100);
  const router = useRouter(); // Asegúrate de usar `useRouter` en lugar de `router`

  useEffect(() => {
    setSizeBar(100);
    const interval = setInterval(() => {
      setSizeBar((prevTime) => {
        if (prevTime <= 0) {
          gameOverSave();
          clearInterval(interval);

          setTimeout(() => {
            router.dismissAll();
            router.push("gamesList");
            router.push("gamePopUp/over/timer");
          }, 0);
        }
        return prevTime - 0.5;
      });
    }, 100);

    return () => {
      clearInterval(interval)
    };
  }, [restart]);

  return (
    <View>
      <Bar sizeBar={sizeBar} />
    </View>
  );
}
