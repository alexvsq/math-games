import { View, Text } from "react-native";
import Card from "../../components/headerInfoComponents/card";

export default function Points({ points = 0 }) {
  return (
    <Card
      title="Points"
      content={
        points.toString().length > 5
          ? points.toString().slice(0, 5) + "..."
          : points
      }
    />
    /*  <Card
      title="Points"
      content={
        points.toString().length > 5
          ? points.toString().slice(-3) + "..."
          : points
      }
    /> */
  );
}
