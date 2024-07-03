import { View, Text, StyleSheet } from "react-native";

export default function points({ content = 1, title = "Title" }) {
  return (
    <View style={styles.card}>
      <View>
        <View >
          <Text className=" text-grayText text-[10px]">{title}</Text>
        </View>
        <View className=" flex  items-end">
          <Text className=" text-white text-base font-bold">{content}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#171717",
    borderRadius: 10,
    paddingVertical: 4,
    paddingHorizontal: 12,
    //  display: "flex",
    //  flex: 1,
  },
});
